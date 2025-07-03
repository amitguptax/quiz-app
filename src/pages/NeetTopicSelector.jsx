import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import neetPhysics from "../data/neet/neetphysics";
import neetChemistry from "../data/neet/neetchemistry";
import neetBiology from "../data/neet/neetbiology";

import "./ScienceTopicSelector.css"; // ✅ reuse styles

const subjectMap = {
  physics: neetPhysics,
  chemistry: neetChemistry,
  biology: neetBiology,
};

const NeetTopicSelector = () => {
  const { subject } = useParams(); // ✅ No class (std)
  const [language, setLanguage] = useState("en");

  const topics = subjectMap[subject];

  if (!topics) return <p>⚠️ No data found for subject: {subject}</p>;

  return (
    <div className="science-container1">
      <Helmet>
        <title>
          {language === "en"
            ? `NEET ${subject.toUpperCase()} | QuizApp`
            : `नीट ${subject.toUpperCase()} | क्विज़ऐप`}
        </title>
        <meta
          name="description"
          content={
            language === "en"
              ? `NEET ${subject} topics & quizzes`
              : `नीट ${subject} विषय और क्विज़`
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
          ? `📚 NEET ${subject.toUpperCase()}`
          : `📚 नीट ${subject.toUpperCase()}`}
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
                    to={`/neet/${subject}/topic/${sub.slug}`}
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

export default NeetTopicSelector;
