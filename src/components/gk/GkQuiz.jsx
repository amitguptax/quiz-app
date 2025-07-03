import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import questionMap from '../../data/gk/history/questionMap';

const GkQuiz = () => {


const { subtopicGroup, subtopic } = useParams();

let topicData = null;

// ✅ Handle nested 'personalities' inside history
if (['ancient', 'medieval', 'modern'].includes(subtopicGroup)) {
  topicData = questionMap[subtopicGroup]?.[subtopic];
} else if (subtopicGroup === 'personalities') {
  topicData = questionMap?.personalities?.[subtopic];
} else {
  topicData = questionMap[subtopicGroup]?.[subtopic];
}


  if (!topicData) {
    return (
      <div style={{ padding: '20px' }}>
        ❌ Topic not found for: <strong>{subtopicGroup} / {subtopic}</strong> <br />
        Please check the route or data file mapping.
      </div>
    );
  }

  const { label, questions } = topicData;

  if (!questions?.length) {
    return <p style={{ padding: '20px' }}>❌ No questions available for this quiz.</p>;
  }

  const [lang, setLang] = useState('en');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[current];

  const handleSubmit = () => {
    if (selected === question.correctAnswer[lang]) {
      setScore(prev => prev + 1);
    }
    setSubmitted(true);
  };

  const handleNext = () => {
    setSubmitted(false);
    setSelected(null);
    setCurrent(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Helmet>
        <title>GK – {label.en} | {question.question[lang].slice(0, 50)}...</title>
        <meta name="description" content={`Quiz on ${label.en} (${label.hi}) – question ${current + 1}`} />
        <meta property="og:title" content={`GK Quiz – ${label.en}`} />
        <meta property="og:description" content={`Try the quiz on ${label.en}`} />
      </Helmet>

      <h2>{label.en} ({label.hi})</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>
          <strong>Language / भाषा:</strong>{' '}
          <select value={lang} onChange={e => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </label>
      </div>

      <h3>Q{current + 1}. {question.question[lang]}</h3>

      <ol>
        {question.options[lang].map((opt, idx) => {
          let style = {};
          if (submitted) {
            if (opt === question.correctAnswer[lang]) {
              style = { color: 'green', fontWeight: 'bold' };
            } else if (opt === selected) {
              style = { color: 'red' };
            }
          }

          return (
            <li key={idx} style={style}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  disabled={submitted}
                />{' '}
                {opt}
              </label>
            </li>
          );
        })}
      </ol>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!selected}
          style={submitBtnStyle(selected)}
        >
          Submit
        </button>
      ) : current < questions.length - 1 ? (
        <>
          <p>{selected === question.correctAnswer[lang] ? '✅ Correct!' : `❌ Wrong! Correct: ${question.correctAnswer[lang]}`}</p>
          {question.explanation?.[lang] && (
            <div style={explanationStyle}>
              <strong>Explanation:</strong>
              <p>{question.explanation[lang]}</p>
            </div>
          )}
          <button onClick={handleNext} style={nextBtnStyle}>Next</button>
        </>
      ) : (
        <p style={{ fontWeight: 'bold' }}>
          🎉 Quiz Complete! Final Score: {score} / {questions.length}
        </p>
      )}
    </div>
  );
};

// ===== STYLES =====

const submitBtnStyle = enabled => ({
  backgroundColor: enabled ? '#28a745' : '#007bff',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: enabled ? 'pointer' : 'not-allowed',
  marginTop: '10px'
});

const nextBtnStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px'
};

const explanationStyle = {
  backgroundColor: '#fef3c7',
  padding: '10px',
  borderRadius: '5px',
  marginTop: '10px',
  color: '#92400e'
};

export default GkQuiz;
