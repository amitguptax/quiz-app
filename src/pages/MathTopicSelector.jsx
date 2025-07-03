import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./MathTopicSelector.css";

import class1 from "../data/math/class1";
import class2 from "../data/math/class2";
import class3 from "../data/math/class3";
import class4 from "../data/math/class4";
import class5 from "../data/math/class5";
import class6 from "../data/math/class6";
import class7 from "../data/math/class7";
import class8 from "../data/math/class8";
import class9 from "../data/math/class9";
import class10 from "../data/math/class10";
import class11 from "../data/math/class11";
import class12 from "../data/math/class12";

const classMap = {
  1: class1,
  2: class2,
  3: class3,
  4: class4,
  5: class5,
  6: class6,
  7: class7,
  8: class8,
  9: class9,
  10: class10,
  11: class11,
  12: class12,

};

const MathTopicSelector = () => {
  const { classId } = useParams();
  const topics = classMap[classId];
  const [language, setLanguage] = useState("en");

  if (!topics) return <p>⚠️ Invalid or missing class data.</p>;

  return (
    <div className="math-container1">
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>
          {language === "en"
            ? `Math Curriculum – Class ${classId} | QuizApp`
            : `गणित पाठ्यक्रम – कक्षा ${classId} | क्विज़ऐप`}
        </title>
        <meta
          name="description"
          content={
            language === "en"
              ? `Topics & quizzes for Class ${classId} Math`
              : `कक्षा ${classId} गणित के लिए विषय और क्विज़`
          }
        />
      </Helmet>

      {/* 🌐 Language Selector */}
      <div className="lang-toggle">
        <label htmlFor="lang">🌐 {language === "en" ? "Language" : "भाषा"}: </label>
        <select
          id="lang"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>

      {/* 🔠 Title */}
      <h2 className="math-title">
        {language === "en"
          ? `📘 Math Curriculum - Class ${classId}`
          : `📘 गणित पाठ्यक्रम - कक्षा ${classId}`}
      </h2>

      {/* 📚 Topic Sections */}
      <div className="math-topics-grid">
        {topics.map((section, sectionIndex) => (
          <div key={sectionIndex} className="math-section">
            <h3 className="section-title">
              {section.title[language]}
            </h3>

            <div className="subtopic-grid">
              {section.subtopics.map((sub, subIndex) => (
                <div key={subIndex} className="subtopic-card">
                  <div className="subtopic-title">
                    {`${subIndex + 1}. ${language === "en" ? sub.en : sub.hi}`}
                  </div>
                  <Link
                    to={`/math-quiz/${classId}/${encodeURIComponent(section.title.en)}/${sub.slug}`}
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

export default MathTopicSelector;
