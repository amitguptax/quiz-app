import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const EnglishClassSelector = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedClass(value);
    if (value) {
      navigate(`/english/class/${value}`);
    }
  };

  return (
    <div style={{ padding: "20px", justifyItems: "center" }}>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Select English Class - Online English MCQ Quiz</title>
        <meta
          name="description"
          content="Choose your class to practice English MCQ quizzes for Class 1 to 12. Improve grammar and vocabulary skills online."
        />
        <meta
          name="keywords"
          content="English quiz, class wise English MCQ, grammar quiz, vocabulary quiz, class 1 to 12, online test"
        />
      </Helmet>

      <h2>📘 English Curriculum</h2>
      <label>📍 Select Class: </label>
      <select value={selectedClass} onChange={handleSelect}>
        <option value="">-- Select Class --</option>
        {[...Array(12)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            Class {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EnglishClassSelector;

