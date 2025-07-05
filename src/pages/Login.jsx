import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Perform login validation here (e.g., check input fields, authenticate user)
    // After successful login, navigate to the homepage
    navigate("/homepage");
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <h1>Welcome Back</h1>
        <p className="login-subtitle">Log in to track your habits and boost your productivity.</p>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email ID"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;