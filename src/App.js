import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Authentication from "./pages/Authentication";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import UsageAnalysis from "./pages/UsageAnalysis";
import AiAssitance from "./pages/AiAssistance";
import ReportGeneration from "./pages/ReportGeneration";
import Other from "./pages/Other";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/usage-analysis" element={<UsageAnalysis />} />
        <Route path="/ai-assistance" element={<AiAssitance />} />
        <Route path="/report-generation" element={<ReportGeneration />} />
        <Route path="/other" element={<Other />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
