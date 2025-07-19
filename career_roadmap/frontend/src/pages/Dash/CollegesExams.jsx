import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './CollegesExams.css';

const CollegesExams = () => {
  const [colleges, setColleges] = useState([]);
  const [profession, setProfession] = useState('');
  const [state, setState] = useState('');
  const [exam, setExam] = useState('');
  const [sortBy, setSortBy] = useState('fees_asc');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const fetchColleges = useCallback(async () => {
    try {
      setError(null);
      const params = { page, limit };

      if (profession) params.profession = profession;
      if (state) params.state = state;
      if (exam) params.exam = exam;

      if (sortBy) {
        const [field, order] = sortBy.split('_');
        params.sort_by = field;
        params.sort_order = order;
      }

      const response = await axios.get('http://127.0.0.1:8000/colleges/', { params });
      const data = response.data;

      if (Array.isArray(data.results)) {
        setColleges(data.results);
        setTotalPages(Math.ceil(data.total / limit));
      } else {
        setColleges([]);
      }
    } catch (err) {
      console.error('Error fetching colleges:', err);
      setError('Failed to fetch data. Make sure the API is running at http://127.0.0.1:8000');
    }
  }, [profession, state, exam, sortBy, page]);

  useEffect(() => {
    fetchColleges();
  }, [fetchColleges]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchColleges();
  };

  const handleReset = () => {
    setProfession('');
    setState('');
    setExam('');
    setSortBy('fees_asc');
    setPage(1);
    fetchColleges();
  };

  const getValue = (college, keys) => {
    for (const key of keys) {
      if (college[key]) return college[key];
    }
    return 'N/A';
  };

  return (
    <div className="college-wrapper">
      <aside className="sidebar">
        <h2>🎓 Professions</h2>
        <ul className="profession-list">
          <li className={!profession ? 'active' : ''} onClick={() => setProfession('')}>All</li>
          <li className={profession === 'Engineering' ? 'active' : ''} onClick={() => setProfession('Engineering')}>Engineering</li>
          <li className={profession === 'Medical' ? 'active' : ''} onClick={() => setProfession('Medical')}>Medical</li>
          <li className={profession === 'Law' ? 'active' : ''} onClick={() => setProfession('Law')}>Law</li>
        </ul>
      </aside>

      <main className="college-container">
        <h2>🏫 Colleges & Entrance Exams</h2>
        <form className="filter-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="State (e.g. Delhi)"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type="text"
            placeholder="Exam (e.g. JEE, NEET)"
            value={exam}
            onChange={(e) => setExam(e.target.value)}
          />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="fees_asc">Fees (Low to High)</option>
            <option value="fees_desc">Fees (High to Low)</option>
            <option value="rank_asc">Rank (Low to High)</option>
            <option value="rank_desc">Rank (High to Low)</option>
            <option value="institute_name_asc">Name (A-Z)</option>
            <option value="institute_name_desc">Name (Z-A)</option>

          </select>
          <button type="submit">🔍 Search</button>
          <button type="button" onClick={handleReset}>♻️ Reset</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {colleges.length === 0 ? (
          <p>No colleges found for selected filters.</p>
        ) : (
          <table className="college-table">
            <thead>
              <tr>
                <th>#</th>
                <th>College Name</th>
                <th>Location</th>
                <th>Exam(s)</th>
                <th>Type</th>
                <th>Profession</th>
                <th>Fees</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college, index) => (
                <tr key={index}>
                  <td>{(page - 1) * limit + index + 1}</td>
                  <td>{getValue(college, ["institute name", "name of institute", "college"])}</td>
                  <td>{getValue(college, ["location", "state"])}</td>
                  <td>{getValue(college, ["entrance exams", "entrance exam(s)"])}</td>
                  <td>{getValue(college, ["type"])}</td>
                  <td>{getValue(college, ["profession"])}</td>
                  <td>{getValue(college, ["fees(approx)", "annual fees"])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {totalPages > 1 && (
          <div className="pagination-controls">
            <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>⬅️ Prev</button>
            <span>Page {page} of {totalPages}</span>
            <button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages}>Next ➡️</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CollegesExams;

