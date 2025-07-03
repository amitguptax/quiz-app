// components/SubjectsGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const SubjectsGrid = () => (
  <section className="subjects">
    <h2>Subjects</h2>
    <div className="grid">
      <Link to="/english">📘 English</Link>
      <Link to="/math">➕ Math</Link>
      <Link to="/reasoning">💡 Reasoning</Link>
      <Link to="/science">🔬 Science</Link>
      <Link to="/gk">🧠 GK</Link>
      <Link to="/computers">🖥️ Computer</Link>
      <Link to="/stories">📖 Stories</Link>
      <Link to="/biology">🧬 Biology</Link>
      <Link to="/physics">🧪 Physics</Link>
      <Link to="/economics">📊 Economics</Link>
      <Link to="/geography">🌍 Geography</Link>
      <Link to="/aptitude">🧮 Aptitude</Link>
    </div>
  </section>
);

export default SubjectsGrid;