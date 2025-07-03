import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import './ScienceQuizPage.css';
import { scienceMap } from "../data/science/scienceMap";

const labels = {
  en: {
    submit: "Submit",
    correct: "✅ Correct!",
    wrong: "❌ Wrong! Correct:",
    complete: "🎉 Quiz Completed! Your Score:",
    timeTaken: "Time Taken",
    percentage: "Percentage",
  },
  hi: {
    submit: "सबमिट करें",
    correct: "✅ सही!",
    wrong: "❌ गलत! सही उत्तर:",
    complete: "🎉 क्विज़ पूरा हुआ! आपका स्कोर:",
    timeTaken: "कुल समय",
    percentage: "प्रतिशत",
  },
};

const ScienceQuizPage = () => {
  const { classId, topic, subtopic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [language, setLanguage] = useState("en");
  const [timeTaken, setTimeTaken] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    let timer;
    if (!quizFinished) {
      timer = setInterval(() => setTimeTaken((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [quizFinished]);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const key = `class${classId}/${subtopic}`;
        const loaderFn = scienceMap[key];
        if (!loaderFn) throw new Error("No quiz loader found.");
        const module = await loaderFn();
        setQuestions(module.default);
      } catch (err) {
        console.error("❌ Failed to load quiz:", err);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };
    loadQuestions();
  }, [classId, topic, subtopic]);

  const question = questions[current];

  const handleSubmit = () => {
    if (selected === question.correct[language]) {
      setScore((s) => s + 1);
    }
    setSubmitted(true);
  };

  const handleNext = () => {
    setSelected(null);
    setSubmitted(false);
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins} min ${secs} sec` : `${secs} sec`;
  };

  if (loading) return <p>⏳ Loading questions...</p>;

  if (questions.length === 0) {
    return (
      <p style={{ padding: "20px", color: "red" }}>
        ⚠️ No questions found for Class {classId} / Topic: {topic}
      </p>
    );
  }

  const percentage = ((score / questions.length) * 100).toFixed(2);

  return (
    <div className="quiz-container">
      <Helmet>
        <title>Science Quiz - Class {classId}</title>
      </Helmet>

      <div className="quiz-header">
        <label>
        
          <strong>Language / भाषा:</strong>{" "}
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </label>
      </div>

      {!quizFinished ? (
        <>
          <h2 className="question-text">
                  <p className="timer">⏱️ {labels[language].timeTaken}: {formatTime(timeTaken)}</p>
            🔬 Q{current + 1}. {question.question[language]}
          </h2>

          <ol className="options-list">
            {question.options.map((opt, index) => {
              const isCorrect = submitted && opt[language] === question.correct[language];
              const isWrong = submitted && opt[language] === selected && opt[language] !== question.correct[language];
              const style = {
                color: isCorrect ? "green" : isWrong ? "red" : "inherit",
                fontWeight: isCorrect ? "bold" : "normal",
              };
              return (
                <li key={index} style={{ marginBottom: "10px", ...style }}>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={opt[language]}
                      checked={selected === opt[language]}
                      onChange={() => setSelected(opt[language])}
                      disabled={submitted}
                      style={{ marginRight: "10px" }}
                    />
                    {opt[language]}
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
              {labels[language].submit}
            </button>
          ) : (
            <>
              <p>
                {selected === question.correct[language]
                  ? labels[language].correct
                  : `${labels[language].wrong} ${question.correct[language]}`}
              </p>

              {question.explanation && (
                <div className="explanation-box">
                  <strong>📘 Explanation:</strong>
                  <p>{question.explanation[language]}</p>
                </div>
              )}

              <button onClick={handleNext} className="next-btn">
                {current < questions.length - 1 ? "Next" : "Finish"}
              </button>
            </>
          )}
        </>
      ) : (
        <div className="result-box">
          <h2>{labels[language].complete} {score}/{questions.length}</h2>
          <p>⏱️ {labels[language].timeTaken}: {formatTime(timeTaken)}</p>
          <p>📊 {labels[language].percentage}: {percentage}%</p>

          <div className="feedback-box">
            🎉 {percentage >= 80
              ? (language === "hi" ? "बहुत बढ़िया! शानदार प्रदर्शन! 🏅" : "Excellent! Great performance! 🏅")
              : percentage >= 50
              ? (language === "hi" ? "शुभकामनाएँ! अच्छा प्रयास किया! 👏" : "Good job! Keep it up! 👏")
              : (language === "hi" ? "कोशिश करते रहें! आप कर सकते हैं! 💪" : "Keep trying! You can do it! 💪")}
          </div>

          <div className="leaderboard-box">
            <h3>🏆 Leaderboard</h3>
            <p><strong>Name:</strong> Guest</p>
            <p><strong>Score:</strong> {score}</p>
            <p><strong>Time:</strong> {formatTime(timeTaken)}</p>
            <p><strong>Accuracy:</strong> {percentage}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScienceQuizPage;
