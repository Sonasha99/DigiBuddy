import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaUserCircle,
  FaEdit,
  FaLock,
  FaQuestionCircle,
  FaFolder,
  FaPalette,
  FaHome,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";
import "../styles/Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-info">
          <FaUserCircle className="profile-picture" />
          <h2>Khushi</h2>
          <p>khushi1845@gmail.com</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Profile Options Grid */}
      <div className="profile-grid">
        <div className="option-card" onClick={() => navigate("/edit-profile")}>
          <FaEdit className="option-icon" />
          <h3>Edit Profile</h3>
        </div>
        <div className="option-card" onClick={() => navigate("/privacy-permissions")}>
          <FaLock className="option-icon" />
          <h3>Privacy & Permissions</h3>
        </div>
        <div className="option-card" onClick={() => navigate("/help")}>
          <FaQuestionCircle className="option-icon" />
          <h3>Help Center</h3>
        </div>
        <div className="option-card" onClick={() => navigate("/data")}>
          <FaFolder className="option-icon" />
          <h3>Data Management</h3>
        </div>
        <div className="option-card" onClick={() => navigate("/theme-customization")}>
          <FaPalette className="option-icon" />
          <h3>Appearance</h3>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-navigation">
        <div className="nav-item" onClick={() => navigate("/homepage")}>
          <FaHome className="nav-icon" />
          <span>Home</span>
        </div>
        <div className="nav-item active" onClick={() => navigate("/profile")}>
          <FaUserCircle className="nav-icon" />
          <span>Profile</span>
        </div>
        <div className="nav-item" onClick={() => navigate("/settings")}>
          <FaCog className="nav-icon" />
          <span>Settings</span>
        </div>
      </nav>
    </div>
  );
};

export default Profile;