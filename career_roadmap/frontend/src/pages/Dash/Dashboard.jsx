import React, { useState } from 'react';
import {
  Search,
  LogOut,
  User,
  Home,
  BarChart2,
  ListTree,
  Users,
  Map,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <div className={`dashboard-container ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🎓 CareerMap</h2>

        <SidebarItem icon={<Home size={18} />} label="User Profile (Home)" route="/" />
        <SidebarItem icon={<BarChart2 size={18} />} label="Progress Tracking" route="/progress" />
        <SidebarItem icon={<ListTree size={18} />} label="Colleges & Exams" route="/colleges" />
        <SidebarItem icon={<Users size={18} />} label="Study Buddy & Networking" route="/study-buddy" />
        <SidebarItem icon={<Map size={18} />} label="Generate Roadmap" route="/roadmap" />

        <div className="sidebar-bottom">
          <SidebarItem icon={<HelpCircle size={18} />} label="Help" route="/help" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" route="/settings" />
        </div>

        <div className="sidebar-tagline">Plan your future, intelligently.</div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <div className="topbar">
          <div className="search-group">
            <input type="text" placeholder="Search..." className="search-input" />
            <Search size={18} className="search-icon" />
          </div>

          <div className="topbar-actions">
            <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
              {darkMode ? '🌞' : '🌙'}
            </button>
            <User size={20} className="topbar-icon" />
            <LogOut size={20} className="topbar-icon" />
          </div>
        </div>

        {/* Dashboard Summary */}
        <section>
          <h1 className="dashboard-title">Welcome Back!</h1>
          <p className="dashboard-subtitle">
            Explore career opportunities, track your goals, and grow with us.
          </p>

          <div className="widgets-grid">
            <Widget title="Career Progress" subtitle="You’re 65% to your next milestone." />
            <Widget title="Recommended Colleges" subtitle="3 matched based on your roadmap." />
            <Widget title="Peer Interactions" subtitle="Connected with 12 peers this week." />
            <Widget title="AI Suggestions" subtitle="2 new tips for your preparation." />
          </div>
        </section>
      </main>
    </div>
  );
};

// Sidebar item with route navigation
const SidebarItem = ({ icon, label, route }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-item" onClick={() => navigate(route)}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

const Widget = ({ title, subtitle }) => (
  <div className="widget">
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </div>
);

export default Dashboard;
