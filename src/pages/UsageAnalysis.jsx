import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/UsageAnalysis.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const UsageAnalysis = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  // Demo data for Usage Trends (Line Chart)
  const usageTrendsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Screen Time (hours)",
        data: [3.2, 4.1, 2.8, 5.3, 4.7, 6.5, 7.1],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  // Demo data for Ads Clicked (Bar Chart)
  const adsClickedData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Ads Clicked",
        data: [23, 45, 32, 56, 41, 67, 89],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly Overview",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="usage-analysismain">
      {/* Header Section */}
      <div className="headerr">
        <button className="back-button" onClick={handleGoBack}>
          <FaArrowLeft />
        </button>
        <h1>Usage Analysis</h1>
      </div>

      {/* Statistics Section */}
      <div className="stats">
        <div className="stat-card">
          <h3>Total Clicks</h3>
          <p>12,345</p>
        </div>
        <div className="stat-card">
          <h3>Peak Hours</h3>
          <p>2pm - 4pm</p>
        </div>
        <div className="stat-card">
          <h3>% Change</h3>
          <p>30% vs Last Week</p>
        </div>
        <div className="stat-card">
          <h3>Most Used App</h3>
          <p>Chrome</p>
        </div>
        <div className="stat-card">
          <h3>Most Visited Website</h3>
          <p>Youtube.com</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart-card">
          <h3>Usage Trends</h3>
          <div className="chart-container">
            <Line data={usageTrendsData} options={chartOptions} />
          </div>
        </div>
        <div className="chart-card">
          <h3>Ads Clicked</h3>
          <div className="chart-container">
            <Bar data={adsClickedData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageAnalysis;