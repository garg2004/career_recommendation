import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step1 from './pages/Onboarding/Step1';
import Step2 from './pages/Onboarding/Step2';
import Step3 from './pages/Onboarding/Step3';
import Step4 from './pages/Onboarding/Step4';
import Step5 from './pages/Onboarding/Step5';
import Dashboard from './pages/Dash/Dashboard';
import ProgressTracking from './pages/Dash/ProgressTraking';
import CollegesExams from './pages/Dash/CollegesExams';
import StudyBuddyNetworking from './pages/Dash/StudyBuddyNetworking';
import { Settings } from 'lucide-react';
import GenerateRoadmap from './pages/Dash/GenerateRoadmap';
import LoginForm from './pages/login/LoginForm';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/onboarding/step1" element={<Step1 />} />
        <Route path="/onboarding/step2" element={<Step2 />} />
        <Route path="/onboarding/step3" element={<Step3 />} />
        <Route path="/onboarding/step4" element={<Step4 />} /> 
        <Route path="/onboarding/step5" element={<Step5 />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/progress" element={<ProgressTracking />} />
      <Route path="/colleges" element={<CollegesExams />} />
      <Route path="/study-buddy" element={<StudyBuddyNetworking />} />
      <Route path="/roadmap" element={<GenerateRoadmap />} />
      <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;
