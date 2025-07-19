import React from 'react';
import './ProgressTracking.css';

const ProgressTracking = () => {
  return (
    <div className="progress-container">
      <h2>📈 Progress Tracking</h2>
      <p>Monitor your achievements and milestones in real time.</p>
      <div className="progress-cards">
        <div className="progress-card">
          <h4>Python Course</h4>
          <p>Completed: 80%</p>
          <div className="progress-bar"><div style={{ width: '80%' }} /></div>
        </div>
        <div className="progress-card">
          <h4>DSA Challenges</h4>
          <p>Completed: 60%</p>
          <div className="progress-bar"><div style={{ width: '60%' }} /></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
