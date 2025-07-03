import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JeeAdvancedClassSelector = () => {
  const [cls, setCls] = useState("");         // ✅ Fix: Added class state
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (subject && cls) {
      navigate(`/jee-advanced/${subject}/class/${cls}`);  // ✅ Include class in route
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🚀 JEE Advanced Quiz Selector</h2>

      {/* Class Selector */}
      <label htmlFor="class-select">🎓 Select Class:</label>
      <select
        id="class-select"
        value={cls}
        onChange={(e) => setCls(e.target.value)}
        style={{ display: "block", marginBottom: "15px", padding: "8px" }}
      >
        <option value="">-- Select Class --</option>
        <option value="11">Class 11</option>
        <option value="12">Class 12</option>
      </select>

      {/* Subject Selector */}
      <label htmlFor="subject-select">🔍 Select Subject:</label>
      <select
        id="subject-select"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{ display: "block", marginBottom: "20px", padding: "8px" }}
      >
        <option value="">-- Select Subject --</option>
        <option value="maths">Mathematics</option>
        <option value="physics">Physics</option>
        <option value="chemistry">Chemistry</option>
      </select>

      <button
        onClick={handleNavigate}
        style={{
          padding: "10px 16px",
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        disabled={!cls || !subject}
      >
        🚀 Start
      </button>
    </div>
  );
};

export default JeeAdvancedClassSelector;
