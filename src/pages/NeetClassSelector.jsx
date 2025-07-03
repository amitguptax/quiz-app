import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NeetClassSelector = () => {
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (subject) {
      // Navigate to fixed class 11 or 12, or remove `class/:std` if no class distinction
      navigate(`/neet/${subject}`);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>💉 NEET</h2>

      <label htmlFor="subject-select">🔬 Select Subject:</label>
      <select
        id="subject-select"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{ display: "block", marginBottom: "20px", padding: "8px" }}
      >
        <option value="">-- Select Subject --</option>
        <option value="physics">Physics</option>
        <option value="chemistry">Chemistry</option>
        <option value="biology">Biology</option>
      </select>

      <button
        onClick={handleNavigate}
        style={{
          padding: "10px 16px",
          backgroundColor: "#1e40af",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        disabled={!subject}
      >
        🚀 Continue
      </button>
    </div>
  );
};

export default NeetClassSelector;
