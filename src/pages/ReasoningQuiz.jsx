import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext'; // for label translations
import { Helmet } from 'react-helmet-async';

import numberSeries from '../data/reasoning/numberSeries';
import oddOneOut from '../data/reasoning/oddOneOut';
import codingDecoding from '../data/reasoning/codingDecoding';
import directionSense from '../data/reasoning/directionSense';
import bloodRelations from '../data/reasoning/bloodRelations';
import syllogism from '../data/reasoning/syllogism';
import alphabetSeries from '../data/reasoning/alphabetSeries';
import logicalPuzzles from '../data/reasoning/logicalPuzzles';
import embeddedFigureQuestions from '../data/reasoning/embeddedFigure';

const topicMap = {
  'Number Series': numberSeries,
  'Coding-Decoding': codingDecoding,
  "Odd One Out": oddOneOut,
  "Direction Sense": directionSense,
  "Blood Relations": bloodRelations,
  "Syllogism": syllogism,
  "Alphabet Series": alphabetSeries,
  "Logical Puzzles": logicalPuzzles,
  "Embedded Figure": embeddedFigureQuestions,
};

const labels = {
  en: {
    selectTopic: "Select Topic",
    submit: "Submit",
    correct: "✅ Correct!",
    wrong: "❌ Wrong! Correct:",
    complete: "🎉 Quiz Completed! Your Score:",
    leaderboard: "🏆 Leaderboard",
    timeTaken: "Time Taken",
    accuracy: "Accuracy",
    language: "Language",
  },
  hi: {
    selectTopic: "विषय चुनें",
    submit: "सबमिट करें",
    correct: "✅ सही!",
    wrong: "❌ गलत! सही उत्तर:",
    complete: "🎉 क्विज़ पूरा हुआ! आपका स्कोर:",
    leaderboard: "🏆 लीडरबोर्ड",
    timeTaken: "समय",
    accuracy: "सटीकता",
    language: "भाषा",
  }
};

const ReasoningQuiz = () => {
  const { language } = useLanguage(); // for UI labels
  const [quizLang, setQuizLang] = useState("hi"); // for question text
  const [selectedTopic, setSelectedTopic] = useState('Number Series');
  const questions = topicMap[selectedTopic] || [];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0); // ⏱️ New: track time


  const question = questions[current];
// Timer setup
useEffect(() => {
  let timer;
  if (!quizFinished) {
    timer = setInterval(() => {
      setTimeTaken((prev) => prev + 1);
    }, 1000);
  }
  return () => clearInterval(timer);
}, [quizFinished, selectedTopic]);
  useEffect(() => {
    setStartTime(Date.now());
    setQuizFinished(false);
  }, [selectedTopic]);

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setSubmitted(false);
    setStartTime(Date.now());
    setQuizFinished(false);
  };

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
    } else {
      setQuizFinished(true);
    }
  };

  const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return mins > 0 ? `${mins} min ${secs} sec` : `${secs} sec`;
};
<p style={{ fontSize: "16px", color: "#1e90ff", fontWeight: "bold" }}>
  ⏱️ {labels[language].timeTaken}: {formatTime(timeTaken)}
</p>

  const percentage = ((score / questions.length) * 100).toFixed(2);

  if (!question) return <p>No questions available for this topic.</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Helmet>
        <title>Reasoning Quiz - {selectedTopic}</title>
        <meta name="description" content={`Practice ${selectedTopic} questions with Hindi & English explanations.`} />
      </Helmet>

      <h2>🧠 Reasoning Quiz</h2>

      {/* 🔤 Language Dropdown */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          <strong>{labels[language].language} / भाषा:</strong>{" "}
          <select value={quizLang} onChange={(e) => setQuizLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </label>
      </div>

      {/* 🔘 Topic Selection */}
      <label><strong>{labels[language].selectTopic}:</strong> </label>
      <select onChange={handleTopicChange} value={selectedTopic} style={{ marginBottom: "10px" }}>
        {Object.keys(topicMap).map((topic, idx) => (
          <option key={idx} value={topic}>{topic}</option>
        ))}
      </select>

      {!quizFinished && (
        <>
        <p style={{ fontSize: "16px", color: "#1e90ff", fontWeight: "bold" }}>
    ⏱️ {labels[language].timeTaken}: {formatTime(timeTaken)}
  </p>
          <h3>
            Q{current + 1}. {question.question[quizLang]}
          </h3>
     
          <ol type="1">
            {question.options[quizLang].map((opt, idx) => {
              const isCorrect = submitted && opt === question.correctAnswer;
              const isWrong = submitted && selected === opt && opt !== question.correctAnswer;

              let style = {};
              if (isCorrect) style = { color: 'green', fontWeight: 'bold' };
              if (isWrong) style = { color: 'red' };

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
              style={{
                backgroundColor: selected ? '#28a745' : '#007bff',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: selected ? 'pointer' : 'not-allowed',
                marginTop: '10px',
              }}
            >
              {labels[language].submit}
            </button>
          ) : (
            <>
              <p>
                {selected === question.correctAnswer
                  ? labels[language].correct
                  : `${labels[language].wrong} ${question.correctAnswer}`}
              </p>

              {question.explanation && question.explanation[quizLang] && (
                <div style={{
                  marginTop: '10px',
                  backgroundColor: '#f1f1f1',
                  padding: '10px',
                  borderRadius: '5px'
                }}>
                  <strong>📘 Explanation:</strong>
                  <p>{question.explanation[quizLang]}</p>
                </div>
              )}

              <button
                onClick={handleNext}
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                {current < questions.length - 1 ? 'Next' : 'Finish'}
              </button>
            </>
          )}
        </>
      )}

      {quizFinished && (
        <div style={{
          marginTop: "20px",
          background: "#f8f9fa",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h3>{labels[language].leaderboard}</h3>
          <p><strong>{labels[language].timeTaken}:</strong> {formatTime(timeTaken)}</p>

          <p><strong>{labels[language].accuracy}:</strong> {percentage}%</p>
          <p><strong>Score:</strong> {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default ReasoningQuiz;
