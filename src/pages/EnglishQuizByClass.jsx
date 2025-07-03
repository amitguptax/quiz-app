import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { englishMap } from "../data/english/englishmap";
import './quiz-common.css';

const labels = {
  submit: "Submit",
  correct: "✅ Correct!",
  wrong: "❌ Wrong! Correct:",
  complete: "🎉 Quiz Completed! Your Score:",
  timeTaken: "Time Taken",
  percentage: "Percentage",
  next: "Next",
  finish: "Finish"
};

const EnglishQuizByClass = () => {
  const { classId, topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Timer effect
  useEffect(() => {
    let timer;
    if (!quizFinished) {
      timer = setInterval(() => {
        setTimeTaken(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizFinished]);

  // Load questions effect
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const key = `class${classId}/${topic}`;
        const loader = englishMap[key];

        if (loader) {
          const module = await loader();
          setQuestions(module.default);
        } else {
          setQuestions([]);
          console.error("No quiz found for:", key);
        }
      } catch (err) {
        setQuestions([]);
        console.error("Error loading quiz:", err);
      } finally {
        setLoading(false);
      }
    };
    loadQuestions();
  }, [classId, topic]);

  if (loading) return <p>⏳ Loading...</p>;
  if (questions.length === 0) return <p>⚠️ No questions for Class {classId} - Topic: {topic}</p>;

  const question = questions[current];
  const correctAnswer = question.correct;
  const percentage = ((score / questions.length) * 100).toFixed(2);

  // formatTime helper outside JSX
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins} min ${secs} sec` : `${secs} sec`;
  };

  const handleSubmit = () => {
    if (selected === correctAnswer) setScore(s => s + 1);
    setSubmitted(true);
  };

  const handleNext = () => {
    setSubmitted(false);
    setSelected(null);
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
    } else {
      setQuizFinished(true);
    }
  };

 return (
  <div className="quiz-container">
    <Helmet>
      <title>English Quiz - Class {classId}</title>
    </Helmet>

    {!quizFinished ? (
      <>
        <div className="quiz-header">
          <p className="timer">⏱️ {labels.timeTaken}: {formatTime(timeTaken)}</p>
        </div>

        <h2 className="question-text">Q{current + 1}. {question.question}</h2>

        <ol className="options-list">
          {question.options.map((opt, i) => {
            const isCorrect = submitted && opt === correctAnswer;
            const isWrong = submitted && opt === selected && opt !== correctAnswer;

            return (
              <li
                key={i}
                style={{ color: isCorrect ? 'green' : isWrong ? 'red' : 'black' }}
              >
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
            className="submit-btn"
          >
            {labels.submit}
          </button>
        ) : (
          <>
            <p>
              {selected === correctAnswer
                ? labels.correct
                : `${labels.wrong} ${correctAnswer}`}
            </p>

            {question.explanation && (
              <div className="explanation-box">
                <strong>📘 Explanation:</strong> {question.explanation}
              </div>
            )}

            <button
              onClick={handleNext}
              className="next-btn"
            >
              {current < questions.length - 1 ? labels.next : labels.finish}
            </button>
          </>
        )}
      </>
    ) : (
      <div className="result-box">
        <h2>{labels.complete} {score}/{questions.length}</h2>
        <p>📊 {labels.percentage}: {percentage}%</p>
        <p>⏱️ {labels.timeTaken}: {formatTime(timeTaken)}</p>

        <div className="result-congrats">
          🎉 {percentage >= 80
            ? "Excellent! Great performance! 🏅"
            : percentage >= 50
              ? "Good job! Keep it up! 👏"
              : "Keep trying! You can do it! 💪"}
        </div>

        <div className="leaderboard-box">
          <h3>🏆 Leaderboard</h3>
          <p><strong>Name:</strong> Guest</p>
          <p><strong>Score:</strong> {score}</p>
          <p><strong>Time Taken:</strong> {formatTime(timeTaken)}</p>
          <p><strong>Accuracy:</strong> {percentage}%</p>
        </div>
      </div>
    )}
  </div>
);

};

export default EnglishQuizByClass;
