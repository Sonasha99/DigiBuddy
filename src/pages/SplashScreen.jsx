import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css";
import logo from "../assets/icons/logo.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-screen">
      <div className="splash-logo">
        <img src={logo} alt="DigiBuddy Logo" />
      </div>

      <h1 className="splash-title">Welcome to DigiBuddy</h1>
      <p className="splash-tagline">
        Helping you understand and improve your digital habits with AI-powered insights.
      </p>

      <div className="splash-features">
        <div className="feature-card">
          <div className="feature-emoji">📊</div>
          <h3>Usage Analysis</h3>
          <p>Track and analyze screen time and usage patterns.</p>
        </div>
        <div className="feature-card">
          <div className="feature-emoji">🤖</div>
          <h3>AI Assistance</h3>
          <p>Get personalized advice to improve your digital habits.</p>
        </div>
        <div className="feature-card">
          <div className="feature-emoji">📑</div>
          <h3>Report Generation</h3>
          <p>Detailed reports on your daily digital behavior.</p>
        </div>
        <div className="feature-card">
          <div className="feature-emoji">🎯</div>
          <h3>Other</h3>
          <p>Additional features for planing your day.</p>
        </div>
      </div>

      <button className="start-button" onClick={() => navigate("/authentication")}>
        Take Control Now <span className="arrow">→</span>
      </button>
    </div>
  );
};

export default SplashScreen;