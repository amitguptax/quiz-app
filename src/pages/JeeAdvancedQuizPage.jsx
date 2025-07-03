import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./MathQuizPage.css"; // reuse styling

// Labels reused from NEET
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

const JeeAdvancedQuizPage = () => {
  const { subject, slug } = useParams();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [language, setLanguage] = useState("en");
  const [timeTaken, setTimeTaken] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [error, setError] = useState("");

 useEffect(() => {
  const modules = import.meta.glob("../data/jee/advanced/**/*.js");

  const key = `../data/jee/advanced/${subject}/${slug}.js`;
  const loader = modules[key];

  if (loader) {
    loader().then((mod) => setQuestions(mod.default));
  } else {
    setError("⚠️ Quiz not found.");
  }
}, [subject, slug]);


  useEffect(() => {
    let timer;
    if (!quizFinished) {
      timer = setInterval(() => setTimeTaken((prev) => prev + 1), 1000);
    }
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

  const question = questions[current];
  const percentage = ((score / questions.length) * 100).toFixed(2);

  if (error) return <p style={{ color: "red", padding: "20px" }}>{error}</p>;
  if (questions.length === 0) return <p style={{ padding: "20px" }}>⏳ Loading...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Helmet>
        <title>JEE Main Quiz - {slug.replace(/-/g, " ")}</title>
        <meta name="description" content={`JEE Main quiz: ${slug.replace(/-/g, " ")} - ${subject}`} />
      </Helmet>

      {/* Language Toggle */}
      <div style={{ marginBottom: "10px" }}>
        <label>
          <strong>{labels[language].language} / भाषा:</strong>{" "}
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </label>
      </div>

      {/* Quiz Logic Reused */}
      {!quizFinished && question && (
        <>
          <h2>JEE Main Quiz ({subject.toUpperCase()})</h2>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#1e90ff" }}>
            ⏱️ {labels[language].timeTaken}: {formatTime(timeTaken)}
          </p>

          <h1 style={{ fontSize: "19px" }}>
            Q{current + 1}. {question.question[language]}
          </h1>

          <ol type="1" style={{ paddingLeft: "20px", fontSize: "17px" }}>
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
                    <strong>{key.toUpperCase()}.</strong> {value}
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
                  <strong style={{ fontSize: "18px" }}>{labels[language].explanation}</strong>
                  <p style={{ fontSize: "18px" }}>{question.explanation[language]}</p>
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
        <div style={{ marginTop: "20px" }}>
          <h2>{labels[language].complete} {score}/{questions.length}</h2>
          <p><strong>{labels[language].timeTaken}:</strong> {formatTime(timeTaken)}</p>
          <p>📊 {labels[language].percentage}: {percentage}%</p>

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              background: "#e0ffe0",
              border: "2px solid #28a745",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "18px",
              color: "#155724",
              fontWeight: "bold",
            }}
          >
            🎉 {percentage >= 80
              ? (language === "hi" ? "बहुत बढ़िया! शानदार प्रदर्शन! 🏅" : "Excellent! Great performance! 🏅")
              : percentage >= 50
              ? (language === "hi" ? "शुभकामनाएँ! अच्छा प्रयास किया! 👏" : "Good job! Keep it up! 👏")
              : (language === "hi" ? "कोशिश करते रहें! आप कर सकते हैं! 💪" : "Keep trying! You can do it! 💪")}
          </div>
        </div>
      )}
    </div>
  );
};

export default JeeAdvancedQuizPage;
