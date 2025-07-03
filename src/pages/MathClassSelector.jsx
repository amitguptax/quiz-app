// src/pages/MathClassSelector.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Use 'react-helmet' if not using async version

const MathClassSelector = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedClass(value);
    if (value) {
      navigate(`/math/class/${value}`);
    }
  };

  return (
    <div style={{ padding: "20px", justifyItems: "center" }}>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Select Math Class – Online Math Quiz</title>
        <meta
          name="description"
          content="Choose your class to access math quizzes for Class 1 to 12. Practice MCQs for all topics and improve your mathematics skills."
        />
        <meta
          name="keywords"
          content="Math quiz, online math MCQs, class 1 to 12 math test, math curriculum, select math class, CBSE math quiz"
        />
      </Helmet>

      <h2>📘 Math Curriculum</h2>
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

export default MathClassSelector;
