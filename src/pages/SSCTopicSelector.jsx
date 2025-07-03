import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// CGL
import cglEnglish from "../data/ssc/cgl/english.js";
import cglGk from "../data/ssc/cgl/gk.js";
import cglMath from "../data/ssc/cgl/maths.js";
import cglReasoning from "../data/ssc/cgl/reasoning.js";

// CHSL
import chslEnglish from "../data/ssc/chsl/english.js";
import chslMath from "../data/ssc/chsl/maths.js";
import chslReasoning from "../data/ssc/chsl/reasoning.js";

// MTS
import mtsMath from "../data/ssc/mts/maths.js";
import mtsGk from "../data/ssc/mts/gk.js";
import mtsReasoning from "../data/ssc/mts/reasoning.js";

// GD
import gdGk from "../data/ssc/gd/gk.js";
import gdMath from "../data/ssc/gd/maths.js";
import gdReasoning from "../data/ssc/gd/reasoning.js";

// Steno
import stenoReasoning from "../data/ssc/steno/reasoning.js";


import "./ScienceTopicSelector.css"; // reuse existing styles

const cglTopics = [
  cglEnglish,
  cglMath,
  cglReasoning,
  cglGk,
];

const chslTopics = [
  chslEnglish,
  chslMath,
  chslReasoning,
];

const mtsTopics = [
  mtsMath,
  mtsGk,
  mtsReasoning,
];

const gdTopics = [
  gdGk,
  gdMath,
  gdReasoning,
];

const stenoTopics = [
  stenoReasoning,
];

const sscMap = {
  cgl: cglTopics,
  chsl: chslTopics,
  mts: mtsTopics,
  gd: gdTopics,
  steno: stenoTopics,
};

const SscTopicSelector = () => {
  const { exam } = useParams(); // e.g., /ssc/cgl
  const [language, setLanguage] = useState("en");

  const topics = sscMap[exam];

  if (!topics) return <p>⚠️ No data found for {exam.toUpperCase()}</p>;

  return (
    <div className="science-container1">
      <Helmet>
        <title>
          {language === "en"
            ? `SSC ${exam.toUpperCase()} Topics`
            : `SSC ${exam.toUpperCase()} विषय`}
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
          ? `📘 SSC ${exam.toUpperCase()} – Select Subject`
          : `📘 SSC ${exam.toUpperCase()} – विषय चुनें`}
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
                    to={`/ssc-quiz/${exam}/${section.slug}/${sub.slug}`}
                    className="quiz-button"
                  >
                    🎯 {language === "en" ? "Start Quiz" : "क्विज़ शुरू करें"}
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

export default SscTopicSelector;
