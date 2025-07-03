import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import class11Chemistry from '../data/chemistry/class11Chemistry';
import class12Chemistry from '../data/chemistry/class12Chemistry';

import "./ScienceTopicSelector.css";

const ChemistryTopicSelector = () => {
  const { classId } = useParams(); // from /chemistry/class/:classId
  const [language, setLanguage] = useState("en");

  const topics = {
    11: class11Chemistry,
    12: class12Chemistry,
  }[classId];

  if (!topics) return <p>⚠️ No data found for Class {classId} Chemistry.</p>;

  return (
    <div className="science-container1">
      <Helmet>
        <title>
          {language === "en"
            ? `Chemistry – Class ${classId} | QuizApp`
            : `रसायन विज्ञान – कक्षा ${classId} | क्विज़ऐप`}
        </title>
        <meta
          name="description"
          content={
            language === "en"
              ? `Class ${classId} Chemistry topics & quizzes`
              : `कक्षा ${classId} के रसायन विज्ञान विषय और क्विज़`
          }
        />
      </Helmet>

      {/* 🌐 Language Selector */}
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
          ? `📚 Chemistry - Class ${classId}`
          : `📚 रसायन विज्ञान - कक्षा ${classId}`}
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
                    to={`/chemistry-quiz/${classId}/chemistry/${sub.slug}`}
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

export default ChemistryTopicSelector;
