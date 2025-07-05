import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Perform signup validation here (if needed)
    // After successful signup, navigate to the login page
    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-content">
        <h1>Create an Account</h1>
        <p className="signup-subtitle">
          Sign up to start tracking and improving your digital habits today.
        </p>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            className="signup-input"
            required
          />
          <input
            type="email"
            placeholder="Email ID"
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;