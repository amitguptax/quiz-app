import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ancient from '../../data/gk/history/ancient'; // ✅ ADD THIS LINE
import medieval from '../../data/gk/history/medieval'; // if exists
import modern from '../../data/gk/history/modern';     // if exists
import personalities from '../../data/gk/history/personalities';

import geography from '../../data/gk/geography';
import polity from '../../data/gk/polity';
import science from '../../data/gk/science';
import current_affairs from '../../data/gk/current_affairs';

const dataMap = {
  history: {
    ancient,
    medieval,
    modern,
    personalities
  },
  geography,
  polity,
  science,
  current_affairs
};

const GkSubtopicSelector = () => {
  const { topic } = useParams(); // e.g., 'history'
  const navigate = useNavigate();
  const [lang, setLang] = useState('en');

  const data = dataMap[topic];
  if (!data) {
    return <p style={{ padding: '20px' }}>❌ No data available for the selected topic "<strong>{topic}</strong>".</p>;
  }

  const subtopics = Object.entries(data); // [['indus_valley', {...}], ...]

  const formatTitle = str =>
    str
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());

  if (!subtopics.length) {
    return <p style={{ padding: '20px' }}>❌ No subtopics found for "<strong>{topic}</strong>".</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{formatTitle(topic)} – Subtopics</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>
          <strong>Language / भाषा:</strong>{' '}
          <select value={lang} onChange={e => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </label>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {subtopics.map(([key, value]) => (
          <li key={key} style={{ marginBottom: '10px' }}>
            <button
              onClick={() => navigate(`/gk/${topic}/${key}`)}
              style={{
                padding: '10px 20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f0f0f0',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseOver={e => (e.target.style.backgroundColor = '#e0e0e0')}
              onMouseOut={e => (e.target.style.backgroundColor = '#f0f0f0')}
            >
              {value.label?.[lang] || formatTitle(key)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GkSubtopicSelector;
