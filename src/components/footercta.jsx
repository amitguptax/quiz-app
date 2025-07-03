// components/FooterCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const FooterCTA = () => (
  <section className="footer-cta">
    <h2>Ready to Excel in Exams?</h2>
    <Link to="/quizzes" className="btn secondary">Explore All Quizzes</Link>
  </section>
);

export default FooterCTA;