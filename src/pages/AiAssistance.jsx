import React, { useEffect, useRef, useState } from "react";
import { 
  FaRobot, 
  FaPaperPlane, 
  FaLightbulb, 
  FaChartLine, 
  FaMobileAlt, 
  FaClock,
  FaArrowLeft 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/AiAssistance.css";

const AiAssistance = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const chatWindowRef = useRef(null);
  const navigate = useNavigate();

  // Initial AI message
  useEffect(() => {
    addMessage("ai", "Hi there! How can I help you today? Need advice on staying productive or limiting distractions?");
  }, []);

  const addMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
    setTimeout(() => {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }, 100);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    addMessage("user", inputText);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Hey Khushi! 🌼\n\nFirst off — it’s totally okay to feel demotivated sometimes. It happens to everyone, and honestly, the fact that you’re even trying to figure out why means you’re already on the right track.\n\nSo, I did a little thinking. You mentioned you were super excited this morning, but now you’re feeling low and don’t feel like doing anything. After looking at what you’ve done today — about 2.5 hours of Netflix and 4 hours of Instagram — it seems like what you’re experiencing is a bit of dopamine overstimulation.\n\nWhen you binge on things like social media or streaming, your brain gets quick hits of dopamine — kind of like instant rewards. But the catch is, once your brain gets used to that quick dopamine, doing tasks that give slower rewards (like studying or working) feels way harder. It’s not that you’re lazy — your brain is just craving that instant buzz again.\n\nBut guess what? There’s a fix for this, and we can totally turn it around. 🚀\n\nYou mentioned you need to finish Computer Networks Unit 1 today. Here’s a simple plan using the Pomodoro Technique:\n\n1. Step 1: Put away the distractions — maybe keep your phone in another room or on silent.\n2. Step 2: Set a timer for 25 minutes and study. Think of it like a mini challenge — \"Can I stay focused just for these 25 minutes?\"\n3. Step 3: After that, take a 5-minute break. Scroll a bit, stretch, grab some water — whatever feels good.\n4. Repeat! Do this for about 4 rounds, and then take a longer break (15-20 minutes).\n\nNot only will this help you get stuff done, but it’ll also reset your dopamine levels back to normal. Plus, each 25-minute session feels way less overwhelming, and you get a little reward after each one. 🎉\n\nYou’ve got this, Khushi! It’s okay to have off days, but what matters is picking yourself up and moving forward. I’ll be cheering you on from the sidelines! 🌟",
      ];
      addMessage("ai", responses[Math.floor(Math.random() * responses.length)]);
    }, 3000);

    setInputText("");
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="ai-assistancemain">
      {/* Header Section */}
      <div className="header">
        <button className="back-button" onClick={handleGoBack}>
          <FaArrowLeft />
        </button>
        <div className="header-content">
          <h1><FaRobot className="header-icon" /> Hi, I'm your DigiBuddy Assistant!</h1>
          <p>
            I'm here to help you understand your habits and share practical tips
            to boost your productivity.
          </p>
        </div>
      </div>

      {/* Rest of your existing JSX... */}
      {/* Behavior Insights Section */}
      <div className="insights">
        <h2><FaChartLine className="section-icon" /> Your Behavior Insights</h2>
        <div className="insight-cards">
          <div className="insight-card">
            <FaMobileAlt className="card-icon" />
            <h3>Most Used App</h3>
            <p>Instagram</p>
            <p className="stats">2h 30m / day</p>
          </div>
          <div className="insight-card">
            <FaClock className="card-icon" />
            <h3>Productive Time</h3>
            <p className="stats">4h 15m / day</p>
          </div>
          <div className="insight-card">
            <FaChartLine className="card-icon" />
            <h3>Social Media Usage</h3>
            <p className="stats">3h 20m / day</p>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-box">
        <h2><FaPaperPlane className="section-icon" /> Ask Me Anything</h2>
        <div className="chat-window" ref={chatWindowRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.sender === 'ai' && <FaRobot className="message-icon" />}
              <div className="message-content">{msg.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-controls">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your question here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-button" onClick={handleSend}>
            Send <FaPaperPlane className="send-icon" />
          </button>
        </div>
      </div>

      {/* Quick Tips Section */}
      <div className="quick-tips">
        <h2><FaLightbulb className="section-icon" /> Quick Productivity Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <FaLightbulb className="tip-icon" />
            Turn off push notifications for non-essential apps
          </div>
          <div className="tip-card">
            <FaLightbulb className="tip-icon" />
            Try the Pomodoro technique for focused work
          </div>
          <div className="tip-card">
            <FaLightbulb className="tip-icon" />
            Dedicate 30 minutes daily to offline hobbies
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistance;