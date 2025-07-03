import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import class11Maths from '../data/jee-advanced/class11Maths';
import class11Physics from '../data/jee-advanced/class11Physics';
import class11Chemistry from '../data/jee-advanced/class11Chemistry';
import class12Maths from '../data/jee-advanced/class12Maths';
import class12Physics from '../data/jee-advanced/class12Physics';
import class12Chemistry from '../data/jee-advanced/class12Chemistry';

import "./ScienceTopicSelector.css";

const subjectMap = {
  11: {
    maths: class11Maths,
    physics: class11Physics,
    chemistry: class11Chemistry,
  },
  12: {
    maths: class12Maths,
    physics: class12Physics,
    chemistry: class12Chemistry,
  },
};

const JeeAdvancedTopicSelector = () => {
  const { subject, cls } = useParams(); // ✅ from /jee-advanced/:subject/class/:cls
  const [language, setLanguage] = useState("en");

  const topics = subjectMap[cls]?.[subject];

  if (!topics) return <p>⚠️ No data found for Class {cls} - {subject}</p>;

  return (
    <div className="science-container1">
      <Helmet>
        <title>
          {language === "en"
            ? `JEE Advanced ${subject.toUpperCase()} – Class ${cls}`
            : `जेईई एडवांस्ड ${subject.toUpperCase()} – कक्षा ${cls}`}
        </title>
      </Helmet>

      {/* 🌐 Language Selector */}
      <div className="lang-toggle">
        <label>
          🌐 {language === "en" ? "Language" : "भाषा"}:
        </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>

      <h2 className="science-title">
        {language === "en"
          ? `📘 JEE Advanced ${subject.toUpperCase()} - Class ${cls}`
          : `📘 जेईई एडवांस्ड ${subject.toUpperCase()} - कक्षा ${cls}`}
      </h2>

      <div className="science-topics-grid">
        {topics.map((section, sectionIndex) => (
          <div key={sectionIndex} className="science-section">
            <h3 className="section-title">{section.title[language]}</h3>
            <div className="subtopic-grid">
              {section.subtopics.map((sub, subIndex) => (
                <div key={subIndex} className="subtopic-card">
                  <div className="subtopic-title">{`${subIndex + 1}. ${sub[language]}`}</div>
                  <Link
                    to={`/jee-advanced/${subject}/class/${cls}/topic/${sub.slug}`}
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

export default JeeAdvancedTopicSelector;
