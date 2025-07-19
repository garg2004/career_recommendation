import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Onboarding.css'; 
import step1Icon from '../../Assets/step1Icon.svg'; 

const Step1 = () => {
  const [fields, setFields] = useState([]);
  const [fields1, setFields1] = useState([]);
  const [fields2, setFields2] = useState([]);
  const navigate = useNavigate();

  const options = [
    'Software Development',
    'Graphic Design',
    'Data Analyst',
    'Medical',
    'ML Engineer',
    'Full Stack',
  ];

  const options1 = [
    'Python', 'Excel', 'Power BI', 'SQL', 'Django',
    'React', 'Node.js', 'Machine Learning', 'TensorFlow', 'AWS', 'GCP',
    'Adobe Photoshop', 'Adobe Illustrator', 'Typography', 'Version control(git, github)', 'Canva', 'Figma', 'MS Word',
    'Notion', 'Jira', 'Trello', 'Google Docs', 'Excel', 'PowerPoint', 'DSA', 'APIs & Web services'
];

const options2 = [
    'Critical thinking', 'Problem-solving', 'Creativity', 'Decision-making',
  'Emotional intelligence', 'Adaptability', 'Time management', 'Attention to detail',
  'Growth mindset', 'Conflict resolution', 'Verbal communication', 'Written communication',
  'Presentation / Public speaking', 'Team collaboration', 'Leadership', 'Active listening',
  'Negotiation', 'Interpersonal skills', 'Project management', 'Cross-functional coordination'
];

  const handleSelect = (e) => {
    const value = e.target.value;
    if (!fields.includes(value) && fields.length < 5) {
      setFields([...fields, value]);
    }
  };

  const removeField = (field) => {
    setFields(fields.filter((f) => f !== field));
  };

  const handleSelect1 = (e) => {
    const value = e.target.value;
    if (!fields1.includes(value) && fields1.length < 10) {
      setFields1([...fields1, value]);
    }
  };

   const removeField1 = (field1) => {
    setFields1(fields1.filter((f) => f !== field1));
  };

  const handleSelect2 = (e) => {
    const value = e.target.value;
    if (!fields2.includes(value) && fields2.length < 10) {
      setFields2([...fields2, value]);
    }
  };

   const removeField2 = (field1) => {
    setFields2(fields2.filter((f) => f !== fields2));
  };


  return (
    <div className="onboarding-container">
      <div className="onboarding-left-panel">
        <img src="/logo192.png" alt="Logo" className="onboarding-logo" />

        <div className="onboarding-progress">
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot active"></div>
          <div className="onboarding-dot"></div>
          <div className="onboarding-dot"></div>
        </div>
        <p className="onboarding-step-text">Step 2 of 6</p>

        <h2 className="onboarding-heading">Tell us more about your skills/dream role</h2>
        
        <label className="onboarding-label">What Tech skills do you already have?</label>
        <p className="onboarding-subtext">You can select up to 10 options.</p>
        <select className="onboarding-select" onChange={handleSelect1} defaultValue="">
          <option value="" disabled>select your skills</option>
          {options1.map((opt, index) => (
            <option key={index} value={opt}>{opt}</option>
          ))}
        </select>

        <div className="onboarding-tags">
          {fields1.map((field1, idx) => (
            <span key={idx} className="onboarding-tag">
              {field1} <button onClick={() => removeField1(field1)}>×</button>
            </span>
          ))}
        </div>

         <label className="onboarding-label">What Soft skills do you already have?</label>
        <p className="onboarding-subtext">You can select up to 10 options.</p>
        <select className="onboarding-select" onChange={handleSelect2} defaultValue="">
          <option value="" disabled>select your skills</option>
          {options2.map((opt, index) => (
            <option key={index} value={opt}>{opt}</option>
          ))}
        </select>

        <div className="onboarding-tags">
          {fields2.map((field2, idx) => (
            <span key={idx} className="onboarding-tag">
              {field2} <button onClick={() => removeField2(field2)}>×</button>
            </span>
          ))}
        </div>

        <label className="onboarding-label">What is your dream role?</label>
        <p className="onboarding-subtext">You can select up to 5 options.</p>
        <select className="onboarding-select" onChange={handleSelect} defaultValue="">
          <option value="" disabled>Choose your dream role</option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>{opt}</option>
          ))}
        </select>

        <div className="onboarding-tags">
          {fields.map((field, idx) => (
            <span key={idx} className="onboarding-tag">
              {field} <button onClick={() => removeField(field)}>×</button>
            </span>
          ))}
        </div>

        {/* Back & Next Buttons */}
        <div className="step-buttons">
          <button className="onboarding-back-btn" onClick={() => navigate('/login/LoginForm')}>← Back</button>
          <button className="onboarding-next-btn" onClick={() => navigate('/onboarding/step2')}>Next →</button>
        </div>
      </div>

      <div className="onboarding-right-panel">
        <img src={step1Icon} alt="step1Icon" className="onboarding-image" />
      </div>
    </div>
  );
};

export default Step1;
