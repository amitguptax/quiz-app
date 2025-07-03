// components/DailyPractice.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const DailyPractice = () => (
  <section className="daily-practice">
    <h2>🔥 Today's Quiz: Mixed Subjects</h2>
    <p>🏆 Top Performer: Ankit - 9/10</p>
    <Link to="/daily-practice" className="btn primary">Start Daily Quiz</Link>
  </section>
);

export default DailyPractice;