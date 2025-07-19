import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';

const INTEREST_OPTIONS = [
  'Music', 'Coding', 'Painting', 'Gaming', 'Traveling', 'Blogging',
  'Fitness', 'Photography', 'AI & ML', 'Volunteering', 'Public Speaking', 'Designing',
];

const Step5 = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [customInterest, setCustomInterest] = useState('');
  const [achievements, setAchievements] = useState('');
  const [links, setLinks] = useState(['']);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleAddCustomInterest = () => {
    const trimmed = customInterest.trim();
    if (
      trimmed &&
      !selectedInterests.includes(trimmed) &&
      selectedInterests.length < 5
    ) {
      setSelectedInterests([...selectedInterests, trimmed]);
      setCustomInterest('');
    }
  };

  const handleLinkChange = (index, value) => {
    const updated = [...links];
    updated[index] = value;
    setLinks(updated);
  };

  const handleAddLink = () => {
    setLinks([...links, '']);
  };

  const handleRemoveLink = (index) => {
    const updated = [...links];
    updated.splice(index, 1);
    setLinks(updated);
  };

  const handleSubmit = () => {
    const finalData = {
      interests: selectedInterests,
      achievements: achievements.trim(),
      links: links.filter((link) => link.trim() !== ''),
    };
    console.log('Final Submission:', finalData);
    navigate('/dashboard');
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-left-panel" style={{ width: '100%' }}>
        <img src="/logo192.png" alt="Logo" className="onboarding-logo" />

        <div className="onboarding-progress">
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
        </div>

        <p className="onboarding-step-text">Step 6 of 6</p>
        <h2 className="onboarding-heading">Personal Interests & Achievements</h2>

        {/* Interests Section */}
        <div className="form-group">
          <label>Choose your interests (max 5)</label>
          <div className="tag-container">
            {INTEREST_OPTIONS.map((interest) => (
              <span
                key={interest}
                className={`tag ${selectedInterests.includes(interest) ? 'selected' : ''}`}
                onClick={() => toggleInterest(interest)}
              >
                {interest}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px', marginTop: '0.5rem' }}>
            <input
              type="text"
              className="onboarding-input"
              placeholder="Enter custom interest"
              value={customInterest}
              onChange={(e) => setCustomInterest(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddCustomInterest}
              className="onboarding-next-btn"
              style={{ padding: '0 16px', whiteSpace: 'nowrap' }}
            >
              + Add
            </button>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="form-group">
          <label>Your Achievements (Optional)</label>
          <textarea
            className="onboarding-textarea"
            placeholder="e.g., Won hackathon, Published paper, Led student club..."
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            rows={4}
          ></textarea>
        </div>

        {/* Project/Certification Links Section */}
        <div className="form-group">
          <label>Project or Certification Links (Optional)</label>
          {links.map((link, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem' }}>
              <input
                type="url"
                placeholder="https://example.com/certificate"
                className="onboarding-input"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
              />
              {links.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveLink(index)}
                  style={{ background: '#f44336', color: '#fff', border: 'none', padding: '0 12px', borderRadius: '4px' }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            className="onboarding-next-btn"
            style={{ backgroundColor: '#28a745', marginTop: '0.5rem' }}
            onClick={handleAddLink}
          >
            + Add Link
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="step-buttons">
          <button className="onboarding-back-btn" onClick={() => navigate('/onboarding/step5')}>
            ← Back
          </button>
          <button
            className="onboarding-next-btn"
            onClick={handleSubmit}
            disabled={selectedInterests.length === 0}
          >
            Finish →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
