import React from "react";
import "../styles/Other.css";

const Other = () => {
  return (
    <div className="other-page">
      {/* Header Section */}
      <div className="other-header">
        <h1>More Features</h1>
        <div className="highlight-box">
          <p>
            You’ve clicked on <b>50+ ads</b> this month. Are they worth it? <br />
            Your peak activity time is <b>9 PM</b>. Night owl vibes? <br />
            Looking for new sparky shoes?
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="feature-list">
        <div className="feature-card">
          <div className="feature-title">
            <h3>Activity Timeline</h3>
            <span className="time">24H</span>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-title">
            <h3>Usage Frequency</h3>
            <span className="time">24H</span>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-title">
            <h3>Mostly Liked Content</h3>
            <span className="time">24H</span>
          </div>
        </div>
        <div className="feature-card">
          <div className="feature-title">
            <h3>Screen Time Report</h3>
            <span className="time">24H</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
