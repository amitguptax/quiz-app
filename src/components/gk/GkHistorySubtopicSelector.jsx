import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import questionMap from '../../data/gk/history/questionMap';

const GkHistorySubtopicSelector = () => {
  const { subtopicGroup } = useParams();
  const navigate = useNavigate();

  const topics = questionMap[subtopicGroup];

  const pageTitle = `GK History - ${subtopicGroup?.toUpperCase()} Subtopics`;
  const pageDescription = `Select subtopics for General Knowledge - ${subtopicGroup}. Hindi + English topics available.`;

  if (!topics) {
    return (
      <>
        <Helmet>
          <title>GK History - No Subtopics</title>
          <meta name="description" content="No subtopics available for the selected history group." />
        </Helmet>
        <p style={{ padding: '20px' }}>
          ❌ No topics found for: <strong>{subtopicGroup}</strong>
        </p>
      </>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`gk, history, ${subtopicGroup}, quiz, hindi, english`} />
      </Helmet>

      <h2>Select Subtopic / उपविषय चुनें</h2>
      <ol>
        {Object.entries(topics).map(([key, value]) => (
          <li key={key} style={{ marginBottom: '10px' }}>
            <button
              onClick={() => navigate(`/gk/history/${subtopicGroup}/${key}`)}
              style={{
                padding: '10px 20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f0f0f0',
                cursor: 'pointer'
              }}
            >
              {/* English + Hindi label */}
              {value.label?.en || key} / {value.label?.hi || ''}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GkHistorySubtopicSelector;

