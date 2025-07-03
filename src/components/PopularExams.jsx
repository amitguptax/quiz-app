// components/ExamPrepSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const ExamPrepSection = () => (
  <section className="exams">
    <h2>Competitive Exams</h2>
    <div className="grid">
      <Link to="/ssc">📚 SSC</Link>
      <Link to="/banking">💰 Banking</Link>
      <Link to="/upsc">🛡️ UPSC</Link>
      <Link to="/jee">📐 JEE</Link>
      <Link to="/neet">💉 NEET</Link>
      <Link to="/nda">🎖 NDA</Link>
      <Link to="/olympiads">🧩 Olympiads</Link>
      <Link to="/railway">🚌 Railway</Link>
      <Link to="/mba">🧑‍💼 MBA/CAT</Link>
      <Link to="/mba">🎓 CUET"</Link>
      <Link to="/mba">🧑‍💼Air Force / Navy</Link>
      
    </div>
  </section>
);

export default ExamPrepSection;