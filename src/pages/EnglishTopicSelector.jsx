import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./MathTopicSelector.css"; // Reusing same CSS

// Import English-only data
import class1 from "../data/english/class1English";
import class2 from "../data/english/class2English";
import class3 from "../data/english/class3";
import class4 from "../data/english/class4";
import class5 from "../data/english/class5";
import class6 from "../data/english/class6";
import class7 from "../data/english/class7";
import class8 from "../data/english/class8";
import class9 from "../data/english/class9";
import class10 from "../data/english/class10";
import class11 from "../data/english/class11";
import class12 from "../data/english/class12";

// Class map
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

const EnglishTopicSelector = () => {
  const { classId } = useParams();
  const topics = classMap[classId];

  if (!topics) return <p>⚠️ Invalid or missing class data.</p>;

  return (
    <div className="math-container1">
      <Helmet>
        <title>English Curriculum – Class {classId} | QuizApp</title>
        <meta
          name="description"
          content={`Topics & quizzes for Class ${classId} English`}
        />
      </Helmet>

      <h2 className="math-title">📘 English Curriculum - Class {classId}</h2>

      <div className="math-topics-grid">
        {topics.map((section, sectionIndex) => (
          <div key={sectionIndex} className="math-section">
            <h3 className="section-title">{section.title}</h3>

            <div className="subtopic-grid">
              {section.subtopics.map((sub, subIndex) => (
                <div key={subIndex} className="subtopic-card">
                  <div className="subtopic-title">
                    {`${subIndex + 1}. ${sub.title}`}
                  </div>
                  <Link
                    to={`/english/class/${classId}/${encodeURIComponent(section.title)}/${sub.slug}`}
                    className="quiz-button"
                  >
                    🚀 Start Quiz
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

export default EnglishTopicSelector;
