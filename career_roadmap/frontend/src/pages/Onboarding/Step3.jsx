import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import step3Icon from '../../Assets/step3Icon.svg';

const Step3 = () => {
  const [internships, setInternships] = useState([]);
  const navigate = useNavigate();

  const handleAddInternship = () => {
    setInternships([
      ...internships,
      {
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  const handleRemoveInternship = (index) => {
    const updated = [...internships];
    updated.splice(index, 1);
    setInternships(updated);
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...internships];
    updated[index][field] = value;
    setInternships(updated);
  };

  const handleNext = () => {
    console.log('Internships:', internships);
    navigate('/onboarding/step4');
  };

  return (
    <div className="onboarding-container">
      {/* Left Panel */}
      <div className="onboarding-left-panel">
        <img src="/logo192.png" alt="Logo" className="onboarding-logo" />

        <div className="onboarding-progress">
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot"></div>
          <div className="onboarding-dot"></div>
        </div>

        <p className="onboarding-step-text">Step 4 of 6</p>

        <h2 className="onboarding-heading">Have you done any internships?</h2>
        <p className="onboarding-subtext">You can add multiple internships. This section is optional.</p>

        {internships.map((internship, index) => (
          <div className="education-section" key={index}>
            <h4>Internship {index + 1}</h4>
            <input
              type="text"
              placeholder="Title (e.g. Web Developer Intern)"
              value={internship.title}
              onChange={(e) => handleInputChange(index, 'title', e.target.value)}
            />
            <input
              type="text"
              placeholder="Company"
              value={internship.company}
              onChange={(e) => handleInputChange(index, 'company', e.target.value)}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="date"
                placeholder="Start Date"
                value={internship.startDate}
                onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
              />
              <input
                type="date"
                placeholder="End Date"
                value={internship.endDate}
                onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
              />
            </div>
            <textarea
              placeholder="Description"
              value={internship.description}
              onChange={(e) => handleInputChange(index, 'description', e.target.value)}
              rows={3}
              style={{ width: '100%', padding: '0.6rem', marginTop: '0.5rem', borderRadius: '6px', border: '1px solid #ccc' }}
            ></textarea>

            <button
              className="onboarding-back-btn"
              style={{ marginTop: '10px', backgroundColor: '#ffe5e5', color: '#d11a2a' }}
              onClick={() => handleRemoveInternship(index)}
            >
              Remove Internship
            </button>
          </div>
        ))}

        <button
          className="onboarding-next-btn"
          style={{ backgroundColor: '#28a745', marginBottom: '1rem' }}
          onClick={handleAddInternship}
        >
          + Add Internship
        </button>

        {/* Navigation Buttons */}
        <div className="step-buttons">
          <button
            className="onboarding-back-btn"
            onClick={() => navigate('/onboarding/step2')}
          >
            ← Back
          </button>
          <button
            className="onboarding-next-btn"
            onClick={handleNext}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="onboarding-right-panel">
        <img src={step3Icon} alt="Step 3 Illustration" className="onboarding-image" />
      </div>
    </div>
  );
};

export default Step3;
