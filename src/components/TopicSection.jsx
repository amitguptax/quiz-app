// src/components/TopicSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const TopicSection = ({ topic, subtopics, classId }) => (
  <div className="topic-section">
    <h2>{topic.replace(/-/g, ' ')}</h2>
    <ul>
      {subtopics.map((sub, idx) => (
        <li key={idx}>
          <Link to={`/subjects/math/${classId}/${topic}/${sub}`}>{sub.replace(/-/g, ' ')}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default TopicSection;
