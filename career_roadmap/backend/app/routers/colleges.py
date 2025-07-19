from fastapi import APIRouter, Query
from typing import Optional
import pandas as pd
import os

router = APIRouter(
    prefix="/colleges",
    tags=["Colleges & Exams"]
)

# Load and normalize each CSV
def load_csv(file_name: str, profession: str) -> pd.DataFrame:
    path = os.path.join(os.path.dirname(__file__), "..", "data", file_name)
    try:
        df = pd.read_csv(path, encoding="utf-8")
    except UnicodeDecodeError:
        df = pd.read_csv(path, encoding="ISO-8859-1")

    df.columns = df.columns.str.lower().str.strip()
    df["profession"] = profession

    # Set 'institute_name' from available columns
    if "institute name" in df.columns:
        df["institute_name"] = df["institute name"]
    elif "college name" in df.columns:
        df["institute_name"] = df["college name"]
    else:
        df["institute_name"] = "Unnamed College"

    # Set 'exam' column if not present
    if "entrance exams" in df.columns:
        df["exam"] = df["entrance exams"]
    else:
        df["exam"] = ""

    # Set 'state' from location or state
    if "location" in df.columns:
        df["state"] = df["location"]
    elif "state" in df.columns:
        df["state"] = df["state"]
    else:
        df["state"] = ""

    # Standardize and clean 'fees' column
    df.rename(columns={"fees(approx)": "fees"}, inplace=True)
    if "fees" in df.columns:
        df["fees"] = pd.to_numeric(df["fees"], errors="coerce")

    # Standardize and clean 'rank' column if exists
    if "rank" in df.columns:
        df["rank"] = pd.to_numeric(df["rank"], errors="coerce")

    return df

# Load CSVs
eng_df = load_csv("engineering.csv", "Engineering")
med_df = load_csv("medical.csv", "Medical")
law_df = load_csv("law.csv", "Law")

# Combine
df = pd.concat([eng_df, med_df, law_df], ignore_index=True)
df = df.loc[:, ~df.columns.duplicated()]

# For safety: Replace bad values before anything
df.replace([float("inf"), float("-inf")], pd.NA, inplace=True)
df = df.fillna("")

# Debug to verify data
print("Loaded Professions:", df["profession"].unique())

@router.get("/")
def get_colleges(
    profession: Optional[str] = Query(None),
    state: Optional[str] = Query(None),
    exam: Optional[str] = Query(None),
    sort_by: Optional[str] = Query(None),
    sort_order: Optional[str] = Query("asc"),
    page: int = 1,
    limit: int = 10
):
    filtered = df.copy()

    if profession:
        filtered = filtered[filtered["profession"].str.lower() == profession.lower()]
    if state:
        filtered = filtered[filtered["state"].str.lower().str.contains(state.lower())]
    if exam and "exam" in filtered.columns:
        filtered = filtered[filtered["exam"].str.lower().str.contains(exam.lower())]

    # Sorting
    if sort_by in filtered.columns:
        if sort_by in ["fees", "rank"]:
            filtered[sort_by] = pd.to_numeric(filtered[sort_by], errors="coerce")
        filtered = filtered.sort_values(by=sort_by, ascending=(sort_order == "asc"))

    # Final fields to send
    allowed = ["institute_name", "exam", "fees", "rank", "state", "profession"]
    for col in allowed:
        if col not in filtered.columns:
            filtered[col] = ""

    total = len(filtered)
    start = (page - 1) * limit
    end = start + limit

    paginated = filtered.iloc[start:end].replace([float("inf"), float("-inf")], pd.NA)
    paginated = paginated.infer_objects(copy=False).fillna("N/A")

    return {
        "total": total,
        "page": page,
        "limit": limit,
        "results": paginated.to_dict(orient="records")
    }