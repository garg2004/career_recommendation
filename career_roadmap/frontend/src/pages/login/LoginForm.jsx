import React, { useState } from 'react'; // ✅ import useState!
import './LoginForm.css';
import googleIcon from '../../Assets/google.svg';
import Image2 from '../../Assets/image2.svg';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && email && password.length >= 8) {
      navigate('/onboarding/step1');
    } else {
      alert('Please enter valid details.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Create an account</h2>

        {/* ✅ Fix: connect handleSubmit to the form */}
        <form className="login-form" onSubmit={handleSubmit}>

          {/* ✅ Full Name */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* ✅ Email */}
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* ✅ Password */}
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter at least 8+ characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign In Button */}
          <button type="submit" className="sign-in-btn">Sign In</button>

          {/* Separator */}
          <div className="separator">Or sign in with</div>

          {/* Social Buttons */}
          <div className="social-icons">
            <button className="social-btn google" type="button">
              <img src={googleIcon} alt="Google" />
            </button>
            <button className="social-btn facebook" type="button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png" alt="Facebook" />
            </button>
            <button className="social-btn apple" type="button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
            </button>
          </div>
        </form>
      </div>

      {/* Illustration on Right */}
      <div className="login-right">
        <img src={Image2} alt="Illustration" className="illustration" />
      </div>
    </div>
  );
};

export default LoginForm;
