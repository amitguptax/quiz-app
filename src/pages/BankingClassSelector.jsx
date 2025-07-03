import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BankingClassSelector = () => {
  const [exam, setExam] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (exam) {
      navigate(`/banking/${exam}`);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🏦 Banking Exam</h2>

      <label htmlFor="exam-select">📘 Select Exam:</label>
      <select
        id="exam-select"
        value={exam}
        onChange={(e) => setExam(e.target.value)}
        style={{ display: "block", marginBottom: "20px", padding: "8px" }}
      >
        <option value="">-- Select Exam --</option>
        <option value="ibps">IBPS</option>
        <option value="sbi">SBI</option>
        <option value="rbi">RBI</option>
        <option value="nabard">NABARD</option>
      </select>

      <button
        onClick={handleNavigate}
        disabled={!exam}
        style={{
          padding: "10px 16px",
          backgroundColor: "#198754",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: exam ? "pointer" : "not-allowed",
        }}
      >
        🚀 Continue
      </button>
    </div>
  );
};

export default BankingClassSelector;
