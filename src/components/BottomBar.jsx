import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaChartLine, FaCog, FaUser } from "react-icons/fa";
import "./BottomBar.css";

const BottomBar = ({ activeTab }) => {
  const navigate = useNavigate();

  return (
    <nav className="bottom-bar">
      <div 
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} 
        onClick={() => navigate("/homepage")}
      >
        <FaHome className="nav-icon" />
        <span>Home</span>
      </div>
      
      <div 
        className={`nav-item ${activeTab === 'usage' ? 'active' : ''}`} 
        onClick={() => navigate("/usage-analysis")}
      >
        <FaChartLine className="nav-icon" />
        <span>Usage</span>
      </div>
      
      <div 
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} 
        onClick={() => navigate("/profile")}
      >
        <FaUser className="nav-icon" />
        <span>Profile</span>
      </div>
      
      <div 
        className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} 
        onClick={() => navigate("/settings")}
      >
        <FaCog className="nav-icon" />
        <span>Settings</span>
      </div>
    </nav>
  );
};

export default BottomBar;