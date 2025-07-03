import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ScienceClassSelector = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedClass(value);
    if (value) {
      navigate(`/science/class/${value}`);  // ✅ Science route
    }
  };

  return (
    <div style={{ padding: "20px", justifyItems: 'center' }}>
      <h2>🔬 Science Curriculum</h2>  {/* ✅ Changed Title */}
      <label>📍 Select Class: </label>
      <select value={selectedClass} onChange={handleSelect}>
        <option value="">-- Select Class --</option>
        {[...Array(12)].map((_, i) => (
          <option key={i + 1} value={i + 1}>Class {i + 1}</option>
        ))}
      </select>
    </div>
  );
};

export default ScienceClassSelector;
