import React from "react";
import { useNavigate } from "react-router-dom";
import {  
  FaChartLine, 
  FaRobot, 
  FaFileMedical,
  FaHome, 
  FaFileAlt, 
  FaCog, 
  FaUser 
} from "react-icons/fa";
import "../styles/Homepage.css";
import logo from "../assets/icons/logo.png";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-brand">
          <img src={logo} className="navbar-logo" alt="DigiBuddy Logo" />
          <div>
            <h1 className="navbar-title">Hey, Khushi Ready to rock?</h1>
            <p>Let’s dive into your digital world</p>
          </div>
        </div>
        <button className="logout-button" onClick={() => navigate("/login")}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        

        {/* AI Insights */}
        <div className="ai-insights">
          <h2 className="section-title">Today's Digital Insights</h2>
          <ul className="insights-list">
            <li className="insight-item">
              <FaChartLine className="feature-icon" />
              <div>
                <h3>Screen Time Analysis</h3>
                <p>Review AI-based usage pattern breakdown</p>
              </div>
            </li>
            <li className="insight-item">
              <FaRobot className="feature-icon" />
              <div>
                <h3>Behavior Recommendations</h3>
                <p>Personalized digital detox strategies</p>
              </div>
            </li>
            <li className="insight-item">
              <FaFileMedical className="feature-icon" />
              <div>
                <h3>Productivity Report</h3>
                <p>Daily app usage efficiency analysis</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card" onClick={() => navigate("/usage-analysis")}>
            <FaChartLine className="feature-icon" />
            <h3>Usage Patterns</h3>
            <p>Detailed app usage analytics</p>
          </div>
          <div className="feature-card" onClick={() => navigate("/ai-assistance")}>
            <FaRobot className="feature-icon" />
            <h3>AI Coach</h3>
            <p>Personalized habit improvement</p>
          </div>
          <div className="feature-card" onClick={() => navigate("/report-generation")}>
            <FaFileMedical className="feature-icon" />
            <h3>Smart Reports</h3>
            <p>Weekly digital habit summaries</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <div className="nav-item" onClick={() => navigate("/homepage")}>
            <FaHome size={24} />
            <span>Home</span>
          </div>
          <div className="nav-item" onClick={() => navigate("/report-generation")}>
            <FaFileAlt size={24} />
            <span>Reports</span>
          </div>
          <div className="nav-item" onClick={() => navigate("/settings")}>
            <FaCog size={24} />
            <span>Settings</span>
          </div>
          <div className="nav-item" onClick={() => navigate("/profile")}>
            <FaUser size={24} />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;