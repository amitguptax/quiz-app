// components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HeroSection = () => (
  <section className="hero">
    <h1>🎯 Test Your Knowledge Instantly</h1>
    <p>Practice quizzes for school & exams</p>
    <div className="hero-buttons">
      <Link to="/quiz" className="btn primary">Start Now</Link>
      <Link to="/subjects" className="btn secondary">Browse Subjects</Link>
    </div>
  </section>
);

export default HeroSection;