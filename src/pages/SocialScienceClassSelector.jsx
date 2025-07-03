import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SocialScienceClassSelector = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedClass(value);
    if (value) {
      navigate(`/socialscience/class/${value}`); // ✅ Social Science route
    }
  };

  return (
    <div style={{ padding: "20px", justifyItems: "center" }}>
      <h2>📚 Social Science Curriculum</h2> {/* ✅ Changed Title */}
      <label>🏫 Select Class: </label>
      <select value={selectedClass} onChange={handleSelect}>
        <option value="">-- Select Class --</option>
        {[6, 7, 8, 9, 10,11,12].map((cls) => (
          <option key={cls} value={cls}>
            Class {cls}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SocialScienceClassSelector;
