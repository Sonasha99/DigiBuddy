import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaFilePdf, 
  FaChartLine, 
  FaClock, 
  FaMobileAlt, 
  FaLightbulb, 
  FaSpinner,
  FaArrowLeft 
} from "react-icons/fa";
import "../styles/ReportGeneration.css";

const ReportGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const reportTypes = [
      { title: "Time Analysis", icon: <FaClock /> },
      { title: "Productivity Score", icon: <FaChartLine /> },
      { title: "AI Insights", icon: <FaLightbulb /> },
      { title: "Weekly Summary", icon: <FaFilePdf /> },
      { title: "Behavior Trends", icon: <FaChartLine /> },
    ];
    setFlashcards(reportTypes);
  }, []);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setReportGenerated(true);
    }, 2000);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="report-generationmain">
      {/* Header Section */}
      <div className="header">
        <button className="back-button" onClick={handleGoBack}>
          <FaArrowLeft />
        </button>
        <div className="header-content">
          <h1><FaFilePdf /> Generate Digital Report</h1>
          <p>
            Get comprehensive insights into your digital habits with AI-powered analysis
          </p>
        </div>
      </div>

      {/* Rest of your existing JSX... */}
      {/* Generate Report Section */}
      <div className="generate-section">
        {!isGenerating && !reportGenerated && (
          <button className="generate-button" onClick={handleGenerateReport}>
            <FaFilePdf /> Generate Report
          </button>
        )}
        {isGenerating && (
          <div className="loading">
            <FaSpinner className="spinner" /> Generating Insights...
          </div>
        )}
      </div>

      {/* Report Display Section */}
      {reportGenerated && (
        <div className="report-section">
          <h2><FaChartLine /> Your Digital Insights</h2>
          <div className="report-grid">
            <div className="report-card">
              <FaClock className="card-icon" />
              <h3>Peak Usage Hours</h3>
              <p>2pm - 4pm (4.2h daily)</p>
            </div>
            <div className="report-card">
              <FaMobileAlt className="card-icon" />
              <h3>Top App</h3>
              <p>Instagram (3.1h/day)</p>
            </div>
            <div className="report-card">
              <FaChartLine className="card-icon" />
              <h3>Productivity Ratio</h3>
              <p>62% (22h/week)</p>
            </div>
            <div className="report-card">
              <FaLightbulb className="card-icon" />
              <h3>AI Recommendation</h3>
              <p>Enable Focus Mode during work hours</p>
            </div>
          </div>
        </div>
      )}

      {/* Report Types Flashcards */}
      <div className="flashcards-section">
        <h2><FaFilePdf /> Available Reports</h2>
        <div className="report-flashcards">
          {flashcards.map((report, index) => (
            <div key={index} className="flashcard">
              <div className="flashcard-icon">{report.icon}</div>
              <h3>{report.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportGeneration;