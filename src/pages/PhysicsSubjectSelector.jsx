import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubjectClassSelector = () => {
  const [cls, setCls] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (cls) {
      navigate(`/physics/class/${cls}`);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🎓 Start Your Physics Quiz</h2>

      <p>📚 Subject: <strong>Physics</strong></p>

      <label htmlFor="class-select">🏷️ Select Class:</label>
      <select
        id="class-select"
        value={cls}
        onChange={(e) => setCls(e.target.value)}
        style={{ display: "block", marginBottom: "20px", padding: "8px" }}
      >
        <option value="">-- Select Class --</option>
        <option value="11">Class 11</option>
        <option value="12">Class 12</option>
      </select>

      <button
        onClick={handleNavigate}
        disabled={!cls}
        style={{
          padding: "10px 16px",
          backgroundColor: "#1e40af",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: cls ? "pointer" : "not-allowed",
        }}
      >
        🚀 Continue
      </button>
    </div>
  );
};

export default SubjectClassSelector;
