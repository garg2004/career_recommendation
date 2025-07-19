import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting-option">
        <label>
          <input type="checkbox" /> Enable Dark Mode
        </label>
      </div>
      <div className="setting-option">
        <label>
          <input type="checkbox" /> Email Notifications
        </label>
      </div>
    </div>
  );
};

export default Settings;