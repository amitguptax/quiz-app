import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./ScienceTopicSelector.css"; // Reuse existing styles

// Import topic data (e.g., SSC Reasoning)
import reasoningSSC from "../data/reasoning/reasoningSSC";

const topicMap = {
  ssc: reasoningSSC,
  // banking: reasoningBanking,
  // upsc: reasoningUpsc,
  // Add more as needed
};

const ReasoningTopicSelector = () => {
  const { examType } = useParams(); // e.g., ssc, banking, etc.
  const [language, setLanguage] = useState("en");

  const topics = topicMap[examType];

  if (!topics) return <p>⚠️ No topic data found for "{examType}".</p>;

  return (
    <div className="science-container1">
      <Helmet>
        <title>
          {language === "en"
            ? `Reasoning Topics – ${examType.toUpperCase()} | QuizApp`
            : `तर्कशक्ति विषय – ${examType.toUpperCase()} | क्विज़ऐप`}
        </title>
        <meta
          name="description"
          content={
            language === "en"
              ? `Topic-wise Reasoning quizzes for ${examType.toUpperCase()}`
              : `${examType.toUpperCase()} के लिए विषयवार तर्कशक्ति प्रश्नोत्तरी`
          }
        />
      </Helmet>

      <div className="lang-toggle">
        <label htmlFor="lang">
          🌐 {language === "en" ? "Language" : "भाषा"}:
        </label>
        <select
          id="lang"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>

      <h2 className="science-title">
        {language === "en"
          ? `🧠 Reasoning Topics - ${examType.toUpperCase()}`
          : `🧠 तर्कशक्ति विषय - ${examType.toUpperCase()}`}
      </h2>

      <div className="science-topics-grid">
        {topics.map((section, sectionIndex) => (
          <div key={sectionIndex} className="science-section">
            <h3 className="section-title">{section.title[language]}</h3>

            <div className="subtopic-grid">
              {section.subtopics.map((sub, subIndex) => (
                <div key={subIndex} className="subtopic-card">
                  <div className="subtopic-title">
                    {`${subIndex + 1}. ${sub[language]}`}
                  </div>
                  <Link
                    to={`/reasoning-quiz/${examType}/${sub.slug}`}
                    className="quiz-button"
                  >
                    🚀 {language === "en" ? "Start Quiz" : "क्विज़ शुरू करें"}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasoningTopicSelector;
