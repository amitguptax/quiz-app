import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import class11Physics from '../data/physics/class11Physics';
import class12Physics from '../data/physics/class12Physics';

import "./ScienceTopicSelector.css";

const PhysicsTopicSelector = () => {
  const { classId } = useParams(); // from /physics/class/:classId
  const [language, setLanguage] = useState("en");

  const topics = {
    11: class11Physics,
    12: class12Physics,
  }[classId];

  if (!topics) return <p>⚠️ No data found for Class {classId} Physics.</p>;

  return (
    <div className="science-container1">
      <Helmet>
        <title>
          {language === "en"
            ? `Physics – Class ${classId} | QuizApp`
            : `भौतिकी – कक्षा ${classId} | क्विज़ऐप`}
        </title>
        <meta
          name="description"
          content={
            language === "en"
              ? `Class ${classId} Physics topics & quizzes`
              : `कक्षा ${classId} के भौतिकी विषय और क्विज़`
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
          ? `📚 Physics - Class ${classId}`
          : `📚 भौतिकी - कक्षा ${classId}`}
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
                    to={`/physics-quiz/${classId}/physics/${sub.slug}`}
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

export default PhysicsTopicSelector;
