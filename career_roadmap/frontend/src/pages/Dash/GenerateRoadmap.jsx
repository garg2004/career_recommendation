import React, { useState } from 'react';
import './GenerateRoadmap.css';

const GenerateRoadmap = () => {
  const [userData] = useState({
    dreamRole: 'Full Stack Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    goal: 'To learn new/ upgrade my skills',
    education: [
      {
        level: 'College (UG)',
        institution: 'Manipal University Jaipur',
        board: 'Autonomous',
        startYear: '2022',
        endYear: '2026',
        grade: '7.5 CGPA',
      },
    ],
    internships: [
      {
        title: 'Web Developer Intern',
        company: 'Excel Geomatics Pvt. Ltd.',
        startDate: '2025-07-01',
        endDate: '2025-08-01',
        description: 'Built frontend modules and API integration features.',
      },
    ],
    projects: [
      {
        name: 'E-Commerce Web App',
        description: 'A MERN stack application for online shopping.',
        technologies: ['React', 'Node.js', 'MongoDB'],
      },
    ],
    interests: ['AI & ML', 'Photography', 'Fitness'],
    achievements: 'Won hackathon at TechFest 2024',
    links: ['https://github.com/garg2004/ecommerce'],
  });

  return (
    <div className="roadmap-container">
      <h2 className="roadmap-heading">Your Personalized Career Roadmap</h2>

      {/* Profile Overview */}
      <div className="roadmap-section">
        <h3>👤 Your Profile Overview</h3>
        <p><strong>Dream Role:</strong> {userData.dreamRole}</p>
        <p><strong>Skills:</strong></p>
        <div className="skill-tags">
          {userData.skills.map((skill, idx) => (
            <span key={idx} className="tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* Goal */}
      <div className="roadmap-section">
        <h3>🎯 Your Goal</h3>
        <p>{userData.goal}</p>
      </div>

      {/* Education */}
      <div className="roadmap-section">
        <h3>🎓 Education</h3>
        {userData.education.map((edu, index) => (
          <div className="roadmap-card" key={index}>
            <p><strong>Level:</strong> {edu.level}</p>
            <p><strong>Institution:</strong> {edu.institution}</p>
            <p><strong>Board/University:</strong> {edu.board}</p>
            <p><strong>Duration:</strong> {edu.startYear} - {edu.endYear}</p>
            <p><strong>Grade:</strong> {edu.grade}</p>
          </div>
        ))}
      </div>

      {/* Internships */}
      <div className="roadmap-section">
        <h3>💼 Internships</h3>
        {userData.internships.map((intern, index) => (
          <div className="roadmap-card" key={index}>
            <p><strong>Title:</strong> {intern.title}</p>
            <p><strong>Company:</strong> {intern.company}</p>
            <p><strong>Duration:</strong> {intern.startDate} to {intern.endDate}</p>
            <p><strong>Description:</strong> {intern.description}</p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="roadmap-section">
        <h3>🚀 Projects</h3>
        {userData.projects.map((proj, index) => (
          <div className="roadmap-card" key={index}>
            <p><strong>Name:</strong> {proj.name}</p>
            <p><strong>Description:</strong> {proj.description}</p>
            <p><strong>Technologies:</strong> {proj.technologies.join(', ')}</p>
          </div>
        ))}
      </div>

      {/* Interests & Achievements */}
      <div className="roadmap-section">
        <h3>✨ Interests & Achievements</h3>
        <p><strong>Interests:</strong> {userData.interests.join(', ')}</p>
        <p><strong>Achievements:</strong> {userData.achievements || '—'}</p>
      </div>

      {/* Links */}
      <div className="roadmap-section">
        <h3>🔗 Project/Certification Links</h3>
        {userData.links.length > 0 ? (
          <ul className="roadmap-links">
            {userData.links.map((link, idx) => (
              <li key={idx}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
            ))}
          </ul>
        ) : (
          <p>No links provided</p>
        )}
      </div>

      {/* Generate Roadmap Button */}
      <div className="roadmap-generate-btn-wrapper">
        <button className="generate-roadmap-btn" onClick={() => alert("ChatGPT-based roadmap generation will be integrated here.")}>
          🚀 Generate Roadmap with AI
        </button>
      </div>
    </div>
  );
};

export default GenerateRoadmap;
