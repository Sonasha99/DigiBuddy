import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaUserCog, 
  FaBell, 
  FaPalette, 
  FaShieldAlt, 
  FaInfoCircle,
  FaChevronRight,
  FaToggleOn,
  FaTrash,
  FaArrowLeft
} from "react-icons/fa";
import "../styles/Settings.css";

const Settings = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="settings-page">
      {/* Header with Back Button */}
      <div className="header">
        <button className="back-button" onClick={handleGoBack}>
          <FaArrowLeft />
        </button>
        <h1 className="settings-title"><FaUserCog /> Settings</h1>
      </div>

      {/* Rest of your existing JSX... */}
      <div className="settings-grid">
        {/* Account Section */}
        <div className="settings-section">
          <h2><FaUserCog className="section-icon" /> Account</h2>
          <div className="settings-option" onClick={() => navigate("/manage-account")}>
            <span>Manage Email & Password</span>
            <FaChevronRight className="option-arrow" />
          </div>
          <div className="settings-option">
            <span>Two-Factor Authentication</span>
            <FaToggleOn className="toggle-icon" />
          </div>
          <div className="settings-option danger">
            <span>Delete Account</span>
            <FaTrash className="danger-icon" />
          </div>
        </div>

        {/* Notifications Section */}
        <div className="settings-section">
          <h2><FaBell className="section-icon" /> Notifications</h2>
          <div className="settings-option">
            <span>Notification Preferences</span>
            <FaChevronRight className="option-arrow" />
          </div>
          <div className="settings-option">
            <span>Quiet Hours</span>
            <FaToggleOn className="toggle-icon" />
          </div>
        </div>

        {/* Display Section */}
        <div className="settings-section">
          <h2><FaPalette className="section-icon" /> Display</h2>
          <div className="settings-option">
            <span>Dark Mode</span>
            <FaToggleOn className="toggle-icon" />
          </div>
          <div className="settings-option">
            <span>Font Size</span>
            <FaChevronRight className="option-arrow" />
          </div>
          <div className="settings-option">
            <span>Accent Color</span>
            <div className="color-preview" style={{ backgroundColor: '#4ecdc4' }} />
          </div>
        </div>

        {/* Privacy Section */}
        <div className="settings-section">
          <h2><FaShieldAlt className="section-icon" /> Privacy</h2>
          <div className="settings-option">
            <span>App Permissions</span>
            <FaChevronRight className="option-arrow" />
          </div>
          <div className="settings-option">
            <span>Data Export</span>
            <FaChevronRight className="option-arrow" />
          </div>
          <div className="settings-option danger">
            <span>Clear All Data</span>
            <FaTrash className="danger-icon" />
          </div>
        </div>

        {/* About Section */}
        <div className="settings-section">
          <h2><FaInfoCircle className="section-icon" /> About</h2>
          <div className="settings-option">
            <span>Help Center</span>
            <FaChevronRight className="option-arrow" />
          </div>
          <div className="settings-option">
            <span>Contact Support</span>
            <FaChevronRight className="option-arrow" />
          </div>
          <div className="settings-option">
            <span>App Version</span>
            <span className="version">1.0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;