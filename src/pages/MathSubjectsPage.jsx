// src/pages/MathSubjectsPage.jsx

// src/pages/MathSubjectsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ✅ This will now work because of the default export
import class1Topics from '../data/math/class1';

export default function MathSubjectsPage() {
  const [cls, setCls] = useState(1);
  const topics = cls === 1 ? class1Topics : [];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Math Curriculum</h1>
      <label>Select Class: </label>
      <select
        value={cls}
        onChange={(e) => setCls(Number(e.target.value))}
      >
        {[...Array(12)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            Class {i + 1}
          </option>
        ))}
      </select>

      {topics.length > 0 ? (
        topics.map(({ topic, subtopics }) => (
          <div key={topic} style={{ marginTop: '20px' }}>
            <h3>{topic}</h3>
            <ul>
              {subtopics.map((sub) => {
                const topicSlug = topic.toLowerCase().replace(/[\s/–]+/g, '-');
                const subSlug = sub.toLowerCase().replace(/[\s/–]+/g, '-');
                return (
                  <li key={sub}>
                    <Link to={`/subjects/math/${cls}/${topicSlug}/${subSlug}`}>
                      {sub}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))
      ) : (
        <p>No topics available for Class {cls}.</p>
      )}
    </div>
  );
}
