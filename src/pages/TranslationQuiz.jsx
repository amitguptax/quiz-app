// src/pages/TranslationQuiz.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import questionMap from '../data/translation/questionMap';

const labelMap = {
  hindiToEnglish: "Hindi to English",
  englishToHindi: "English to Hindi",
  present: "Present Tense",
  past: "Past Tense",
  future: "Future Tense",
  modals: "Modals",
  general: "General",
};

const TranslationQuiz = () => {
  const { direction, topic } = useParams();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const data = questionMap[direction]?.[topic];
      if (!data) throw new Error("Invalid topic or direction");
      setQuestions(data);
      setError(false);
    } catch (err) {
      console.error("❌ Failed to load questions:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [direction, topic]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>⚠️ Failed to load questions. Check topic or direction.</p>;
  if (questions.length === 0) return <p>No questions available.</p>;

  const question = questions[current];

  const handleSubmit = () => {
    if (selected === question.correctAnswer) {
      setScore(score + 1);
    }
    setSubmitted(true);
  };

  const handleNext = () => {
    setSubmitted(false);
    setSelected(null);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setSubmitted(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>
        Translation Quiz (
        {labelMap[direction] || direction} → {labelMap[topic] || topic})
      </h2>

      <h3>Q{current + 1}. {question.question}</h3>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {question.options.map((opt, idx) => {
          const style =
            submitted && opt === question.correctAnswer
              ? { color: 'green', fontWeight: 'bold' }
              : submitted && opt === selected
              ? { color: 'red' }
              : {};
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
                />
                {" "}{opt}
              </label>
            </li>
          );
        })}
      </ul>

      {!submitted ? (
        <button onClick={handleSubmit} disabled={!selected}>
          Submit
        </button>
      ) : current < questions.length - 1 ? (
        <>
          <p>
            {selected === question.correctAnswer
              ? "✅ Correct!"
              : `❌ Correct Answer: ${question.correctAnswer}`}
          </p>
          <button onClick={handleNext}>Next</button>
        </>
      ) : (
        <>
          <p>🎉 Quiz Complete!</p>
          <p>Your Score: {score} / {questions.length}</p>
          <p>Percentage: {(score / questions.length * 100).toFixed(1)}%</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </>
      )}
    </div>
  );
};

export default TranslationQuiz;
