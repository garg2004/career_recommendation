from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, colleges

app = FastAPI()

# 🔐 Allow React frontend ports
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # for Vite/React
        "http://localhost:3000"   # for Create React App
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔗 API Routes
app.include_router(auth.router)
app.include_router(colleges.router)

@app.get("/")
def root():
    return {"message": "Career Roadmap API Running"}
