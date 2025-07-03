import React from "react";
import { Link } from "react-router-dom";

const QuizSelector = () => (
  <div style={{ padding: '20px' }}>
    <h2>Select Translation Quiz</h2>
    <ul>
      <li><Link to="/translation/hindiToEnglish/present">Hindi → English (Present)</Link></li>
      <li><Link to="/translation/hindiToEnglish/past">Hindi → English (Past)</Link></li>
      <li><Link to="/translation/hindiToEnglish/future">Hindi → English (Future)</Link></li>
      <li><Link to="/translation/englishToHindi/present">English → Hindi (Present)</Link></li>
      <li><Link to="/translation/englishToHindi/past">English → Hindi (Past)</Link></li>
      <li><Link to="/translation/englishToHindi/future">English → Hindi (Future)</Link></li>
    </ul>
  </div>
);

export default QuizSelector;
