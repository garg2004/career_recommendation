// StudyBuddyNetworking.jsx
import React from 'react';
import './StudyBuddyNetworking.css';

const StudyBuddyNetworking = () => {
  return (
    <div className="networking-container">
      <h2>👥 Study Buddy & Peer Networking</h2>
      <p>Connect with peers, mentors, and collaborate on your journey.</p>
      <div className="networking-cards">
        <div className="peer-card">
          <h4>Arjun Sinha</h4>
          <p>Interest: Machine Learning</p>
          <button>Connect</button>
        </div>
        <div className="peer-card">
          <h4>Priya Mehta</h4>
          <p>Interest: Competitive Coding</p>
          <button>Connect</button>
        </div>
      </div>
    </div>
  );
};

export default StudyBuddyNetworking;
