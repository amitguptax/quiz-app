import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import SSC Reasoning Topic Data
import reasoningSSC from "../data/reasoningSSC"; // Make sure this file contains Verbal & Non-Verbal reasoning

const ReasoningClassSelector = () => {
  const [cls, setCls] = useState("");
  const [category, setCategory] = useState("");
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (cls && topic) {
      navigate(`/reasoning/class/${cls}/topic/${topic}`);
    }
  };

  const getTopicsByCategory = () => {
    const cat = reasoningSSC.find((item) => item.title.en === category);
    return cat ? cat.subtopics : [];
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>🧠 Reasoning Quiz Selector</h2>

      <label htmlFor="class-select">📘 Select Class:</label>
      <select
        id="class-select"
        value={cls}
        onChange={(e) => setCls(e.target.value)}
        style={{ display: "block", marginBottom: "15px", padding: "8px" }}
      >
        <option value="">-- Select Class --</option>
        {[...Array(12)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            Class {i + 1}
          </option>
        ))}
      </select>

      <label htmlFor="category-select">🧩 Select Reasoning Type:</label>
      <select
        id="category-select"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setTopic(""); // Reset topic
        }}
        style={{ display: "block", marginBottom: "15px", padding: "8px" }}
      >
        <option value="">-- Select Type --</option>
        <option value="Verbal Reasoning">Verbal Reasoning</option>
        <option value="Non-Verbal Reasoning">Non-Verbal Reasoning</option>
      </select>

      {category && (
        <>
          <label htmlFor="topic-select">📝 Select Topic:</label>
          <select
            id="topic-select"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{ display: "block", marginBottom: "20px", padding: "8px" }}
          >
            <option value="">-- Select Topic --</option>
            {getTopicsByCategory().map((sub) => (
              <option key={sub.slug} value={sub.slug}>
                {sub.en}
              </option>
            ))}
          </select>
        </>
      )}

      <button
        onClick={handleNavigate}
        disabled={!cls || !topic}
        style={{
          padding: "10px 16px",
          backgroundColor: "#1e40af",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        🚀 Start Quiz
      </button>
    </div>
  );
};

export default ReasoningClassSelector;
