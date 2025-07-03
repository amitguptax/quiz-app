import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NeetQuizPage.css";
import topicDataMap from "../data/neet/neetPhysicsTopicMap";

const labels = {
  en: {
    submit: "Submit",
    correct: "✅ Correct!",
    wrong: "❌ Wrong! Correct:",
    complete: "🎉 Quiz Completed! Your Score:",
    timeTaken: "Time Taken",
    percentage: "Percentage",
    next: "Next",
    finish: "Finish",
    explanation: "📘 Explanation:",
    language: "Language",
  },
  hi: {
    submit: "सबमिट करें",
    correct: "✅ सही!",
    wrong: "❌ गलत! सही उत्तर:",
    complete: "🎉 क्विज़ पूरा हुआ! आपका स्कोर:",
    timeTaken: "कुल समय",
    percentage: "प्रतिशत",
    next: "अगला",
    finish: "समाप्त करें",
    explanation: "📘 व्याख्या:",
    language: "भाषा",
  },
};

const NeetQuizPage = () => {
  const { slug } = useParams();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [language, setLanguage] = useState("en");
  const [timeTaken, setTimeTaken] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = topicDataMap[slug];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!quizFinished) setTimeTaken((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [quizFinished]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m > 0 ? `${m} min ${s} sec` : `${s} sec`;
  };

  const handleSubmit = () => {
    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
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

  if (!questions) {
    return <p style={{ padding: "20px", color: "red" }}>⚠️ Quiz not found for this topic.</p>;
  }

  const question = questions[current];
  const percentage = ((score / questions.length) * 100).toFixed(2);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Helmet>
        <title>NEET Quiz - {slug.replace(/-/g, " ")}</title>
      </Helmet>

      {/* 🌐 Language Toggle */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          <strong>{labels[language].language} / भाषा:</strong>{" "}
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </label>
      </div>

      {!quizFinished && question && (
        <>
          <h2>🧪 NEET Quiz</h2>
          <p style={{ fontSize: "18px", color: "#1e90ff" }}>
            ⏱️ {labels[language].timeTaken}: {formatTime(timeTaken)}
          </p>

          <h1 style={{ fontSize: "19px" }}>
            Q{current + 1}. {question.question[language]}
          </h1>

          <ol type="A" style={{ paddingLeft: "20px", fontSize: "17px" }}>
            {Object.entries(question.options).map(([key, value]) => {
              const isCorrect = submitted && key === question.answer;
              const isSelected = selected === key;
              return (
                <li
                  key={key}
                  style={{
                    marginBottom: "12px",
                    fontWeight: isCorrect ? "bold" : "normal",
                    color: submitted
                      ? isCorrect
                        ? "green"
                        : isSelected
                        ? "red"
                        : "inherit"
                      : "inherit",
                  }}
                >
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={key}
                      checked={isSelected}
                      onChange={() => setSelected(key)}
                      disabled={submitted}
                      style={{ marginRight: "10px" }}
                    />
                    {value}
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
                backgroundColor: selected ? "#28a745" : "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                cursor: selected ? "pointer" : "not-allowed",
                marginTop: "10px",
              }}
            >
              {labels[language].submit}
            </button>
          ) : (
            <>
              <p>
                {selected === question.answer
                  ? labels[language].correct
                  : `${labels[language].wrong} ${question.answer.toUpperCase()}`}
              </p>

              {question.explanation?.[language] && (
                <div
                  style={{
                    marginTop: "10px",
                    background: "#fff3cd",
                    padding: "12px",
                    borderRadius: "8px",
                    borderLeft: "4px solid #ffc107",
                  }}
                >
                  <strong>{labels[language].explanation}</strong>
                  <p>{question.explanation[language]}</p>
                </div>
              )}

              <button
                onClick={handleNext}
                style={{
                  backgroundColor: "#1e90ff",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "6px",
                  marginTop: "12px",
                  cursor: "pointer",
                }}
              >
                {current < questions.length - 1
                  ? labels[language].next
                  : labels[language].finish}
              </button>
            </>
          )}
        </>
      )}

         {quizFinished && (
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

export default NeetQuizPage;
