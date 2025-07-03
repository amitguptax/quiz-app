import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JeeMainClassSelector = () => {
  const [subject, setSubject] = useState("");
  const [cls, setCls] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (subject && cls && difficulty) {
      navigate(`/jee-main/${subject}/class/${cls}/level/${difficulty}`);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📘 JEE Main Quiz Selector</h2>

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
      <label htmlFor="subject-select">📐 Select Subject:</label>
      <select
        id="subject-select"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{ display: "block", marginBottom: "15px", padding: "8px" }}
      >
        <option value="">-- Select Subject --</option>
        <option value="maths">Mathematics</option>
        <option value="physics">Physics</option>
        <option value="chemistry">Chemistry</option>
      </select>

      {/* Difficulty Selector */}
      <label htmlFor="difficulty-select">🔥 Difficulty Level:</label>
      <select
        id="difficulty-select"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        style={{ display: "block", marginBottom: "20px", padding: "8px" }}
      >
        <option value="">-- Select Difficulty --</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button
        onClick={handleNavigate}
        style={{
          padding: "10px 16px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        disabled={!cls || !subject || !difficulty}
      >
        🚀 Start
      </button>
    </div>
  );
};

export default JeeMainClassSelector;
