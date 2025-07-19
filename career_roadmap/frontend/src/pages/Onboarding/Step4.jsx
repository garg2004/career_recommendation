import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import step4Icon from '../../Assets/step4Icon.svg';

const Step4 = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        name: '',
        description: '',
        technologies: '',
      },
    ]);
  };

  const handleRemoveProject = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const handleNext = () => {
    console.log('Projects:', projects);
    navigate('/onboarding/step5');
  };

  return (
    <div className="onboarding-container">
      {/* Left Panel */}
      <div className="onboarding-left-panel">
        <img src="/step4Icon.svg" alt="Logo" className="onboarding-logo" />

        <div className="onboarding-progress">
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot"></div>
        </div>

        <p className="onboarding-step-text">Step 5 of 6</p>
        <h2 className="onboarding-heading">Tell us about your projects</h2>
        <p className="onboarding-subtext">This section is optional. Add one or more projects you’ve worked on.</p>

        {projects.map((project, index) => (
          <div className="education-section" key={index}>
            <h4>Project {index + 1}</h4>
            <input
              type="text"
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => handleInputChange(index, 'name', e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={project.description}
              onChange={(e) => handleInputChange(index, 'description', e.target.value)}
              rows={3}
              style={{
                width: '100%',
                padding: '0.6rem',
                marginTop: '0.5rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
              }}
            ></textarea>
            <input
              type="text"
              placeholder="Technologies Used (comma-separated)"
              value={project.technologies}
              onChange={(e) => handleInputChange(index, 'technologies', e.target.value)}
            />

            <button
              className="onboarding-back-btn"
              style={{ marginTop: '10px', backgroundColor: '#ffe5e5', color: '#d11a2a' }}
              onClick={() => handleRemoveProject(index)}
            >
              Remove Project
            </button>
          </div>
        ))}

        <button
          className="onboarding-next-btn"
          style={{ backgroundColor: '#28a745', marginBottom: '1rem' }}
          onClick={handleAddProject}
        >
          + Add Project
        </button>

        <div className="step-buttons">
          <button className="onboarding-back-btn" onClick={() => navigate('/onboarding/step3')}>
            ← Back
          </button>
          <button className="onboarding-next-btn" onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>

      {/* Right Panel (optional) */}
      <div className="onboarding-right-panel">
        {/* You can add an image like step4Icon here if needed */}
        <img src={step4Icon} alt="Illustration" className="onboarding-image" />
      </div>
    </div>
  );
};

export default Step4;
