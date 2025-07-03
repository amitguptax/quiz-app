import React from "react";
import "./Home.css";

const Leaderboard = () => {
  const topScorers = [
    { name: "Ankit", score: 98 },
    { name: "Priya", score: 95 },
    { name: "Rahul", score: 92 },
    { name: "Sneha", score: 89 },
    { name: "Vikram", score: 87 },
  ];

  return (
    <section className="leaderboard">
      <h2>🏅 Top 5 of the Week</h2>
      <ul className="leaderboard-list">
        {topScorers.map((user, index) => (
          <li key={index} className="leaderboard-item">
            <span>{user.name}</span> - {user.score} pts
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Leaderboard;
