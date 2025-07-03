import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SSCClassSelector = () => {
  const [exam, setExam] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (exam) {
      navigate(`/ssc/${exam}`);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 SSC Exam</h2>

      <label htmlFor="exam-select">📘 Select Exam:</label>
      <select
        id="exam-select"
        value={exam}
        onChange={(e) => setExam(e.target.value)}
        style={{ display: "block", marginBottom: "20px", padding: "8px" }}
      >
        <option value="">-- Select Exam --</option>
        <option value="cgl">CGL</option>
        <option value="chsl">CHSL</option>
        <option value="mts">MTS</option>
        <option value="gd">GD</option>
        <option value="steno">Steno</option>
      </select>

      <button
        onClick={handleNavigate}
        disabled={!exam}
        style={{
          padding: "10px 16px",
          backgroundColor: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: exam ? "pointer" : "not-allowed",
        }}
      >
        🎯 Continue
      </button>
    </div>
  );
};

export default SSCClassSelector;
