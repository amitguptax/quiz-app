import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import ibpsTopics from "../data/banking/ibps";
import sbiTopics from "../data/banking/sbi";
import rbiTopics from "../data/banking/rbi";
import nabardTopics from "../data/banking/nabard";

import "./ScienceTopicSelector.css"; // reuse same CSS

const bankingMap = {
  ibps: ibpsTopics,
  sbi: sbiTopics,
  rbi: rbiTopics,
  nabard: nabardTopics,
};

const BankingTopicSelector = () => {
  const { exam } = useParams(); // ✅ from /banking/:exam
  const [language, setLanguage] = useState("en");

  const topics = bankingMap[exam];

  if (!topics) return <p>⚠️ No data found for {exam?.toUpperCase?.()}</p>;

  return (
    <div className="science-container1">
      <Helmet>
        <title>
          {language === "en"
            ? `${exam.toUpperCase()} Banking Topics`
            : `${exam.toUpperCase()} बैंकिंग विषय`}
        </title>
      </Helmet>

      <div className="lang-toggle">
        <label>🌐 {language === "en" ? "Language" : "भाषा"}:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>

      <h2 className="science-title">
        {language === "en"
          ? `🏦 ${exam.toUpperCase()} – Select Topic`
          : `🏦 ${exam.toUpperCase()} – विषय चुनें`}
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
                    to={`/banking-quiz/${exam}/${section.slug}/${sub.slug}`}
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

export default BankingTopicSelector;
