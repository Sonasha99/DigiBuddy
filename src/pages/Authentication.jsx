import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Authentication.css";
import logo from "../assets/icons/logo.png"; // Replace with your logo path

const Authentication = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      {/* Header Section */}
      <div className="auth-header">
        <img src={logo} alt="DigiBuddy Logo" className="auth-logo" />
        <h1>Login / Signup</h1>
        <p className="auth-tagline">
          Unveil your digital footprint, decode your habits, and take control of your online behavior.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="auth-buttons">
        <button
          className="auth-button login"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
        <button
          className="auth-button signup"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Authentication;