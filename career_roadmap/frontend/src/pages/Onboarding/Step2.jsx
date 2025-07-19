import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import step2Icon from '../../Assets/step2Icon.svg';

const Step2 = () => {
  const [qualification, setQualification] = useState('');
  const [educationDetails, setEducationDetails] = useState([]);
  const navigate = useNavigate();

  const qualificationLevels = {
    'High School': ['High School'],
    'College (UG)': ['High School', 'UG'],
    'Postgraduate (PG)': ['High School', 'UG', 'PG'],
  };

  const handleQualificationChange = (e) => {
    const selected = e.target.value;
    setQualification(selected);

    const levels = qualificationLevels[selected] || [];
    const newDetails = levels.map((level) => ({
      level,
      institution: '',
      university: '',
      startYear: '',
      endYear: '',
      grade: '',
    }));

    setEducationDetails(newDetails);
  };

  const handleInputChange = (index, field, value) => {
    const updatedDetails = [...educationDetails];
    updatedDetails[index][field] = value;
    setEducationDetails(updatedDetails);
  };

  const isFormComplete = () => {
    if (!qualification) return false;
    return educationDetails.every(
      (edu) =>
        edu.institution.trim() !== '' &&
        edu.startYear.trim() !== '' &&
        edu.endYear.trim() !== '' &&
        edu.grade.trim() !== ''
    );
  };

  const handleNext = () => {
    console.log('Collected Data:', { qualification, educationDetails });
    navigate('/onboarding/step3');
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
          <div className="onboarding-dot"></div>
          <div className="onboarding-dot"></div>
        </div>

        <p className="onboarding-step-text">Step 3 of 6</p>

        <h2 className="onboarding-heading">Add your educational background</h2>

        {/* Qualification Dropdown */}
        <div className="form-group">
          <label htmlFor="qualification">Highest Qualification:</label>
          <select
            id="qualification"
            value={qualification}
            onChange={handleQualificationChange}
            className="onboarding-dropdown"
          >
            <option value="">-- Select --</option>
            <option value="High School">High School</option>
            <option value="College (UG)">College (UG)</option>
            <option value="Postgraduate (PG)">Postgraduate (PG)</option>
          </select>
        </div>

        {/* Education Details Sections */}
        {educationDetails.map((edu, index) => (
          <div className="education-section" key={index}>
            <h4>{edu.level}</h4>
            <input
              type="text"
              placeholder="Institution Name *"
              value={edu.institution}
              required
              onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
            />
            <input
              type="text"
              placeholder="Board or University"
              value={edu.university}
              onChange={(e) => handleInputChange(index, 'university', e.target.value)}
            />
            <input
              type="text"
              placeholder="Start Year (e.g. 2018)"
              value={edu.startYear}
              onChange={(e) => handleInputChange(index, 'startYear', e.target.value)}
              maxLength={4}
            />
            <input
              type="text"
              placeholder="End Year (e.g. 2022)"
              value={edu.endYear}
              onChange={(e) => handleInputChange(index, 'endYear', e.target.value)}
              maxLength={4}
            />
            <input
              type="text"
              placeholder="Grade / Percentage"
              value={edu.grade}
              onChange={(e) => handleInputChange(index, 'grade', e.target.value)}
            />
          </div>
        ))}

        {/* Back & Next Buttons */}
        <div className="step-buttons">
          <button
            className="onboarding-back-btn"
            onClick={() => navigate('/onboarding/step1')}
          >
            ← Back
          </button>
          <button
            className="onboarding-next-btn"
            onClick={handleNext}
            disabled={!isFormComplete()}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="onboarding-right-panel">
        <img
          src={step2Icon}
          alt="Step 2 Illustration"
          className="onboarding-image"
        />
      </div>
    </div>
  );
};

export default Step2;
