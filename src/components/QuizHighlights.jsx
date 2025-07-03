// components/FeaturedQuizzes.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const FeaturedQuizzes = () => (
  <section className="featured-quizzes">
    <h2>Featured Quizzes</h2>
    <div className="grid">
      <Link to="/quizzes/logical-puzzle">💡 Logical Puzzle Challenge</Link>
      <Link to="/quizzes/brain-teasers">🧠 Brain Teasers Mega Set</Link>
      <Link to="/quizzes/vocabulary">📘 Vocabulary Test</Link>
      <Link to="/quizzes/math-marathon">➕ Math Marathon</Link>
    </div>
  </section>
);

export default FeaturedQuizzes;