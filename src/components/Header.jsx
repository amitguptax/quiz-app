import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Header.css";
import VoiceChat from './VoiceChat';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [examOpen, setExamOpen] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [funZoneOpen, setFunZoneOpen] = useState(false);
  const [showVoiceChat, setShowVoiceChat] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
const [showSuggestions, setShowSuggestions] = useState(false);
const [filteredSuggestions, setFilteredSuggestions] = useState([]);

const searchItems = [
  { label: "Data Structures", link: "/dsa" },
  { label: "Algorithms", link: "/algorithms" },
 { label: "Math Class 1", link: "/math/class/1" },
{ label: "Math Class 2", link: "/math/class/2" },
{ label: "Math Class 3", link: "/math/class/3" },
{ label: "Math Class 4", link: "/math/class/4" },
{ label: "Math Class 5", link: "/math/class/5" },
{ label: "Math Class 6", link: "/math/class/6" },
{ label: "Math Class 7", link: "/math/class/7" },
{ label: "Math Class 8", link: "/math/class/8" },
{ label: "Math Class 9", link: "/math/class/9" },
{ label: "Math Class 10", link: "/math/class/10" },
{ label: "Math Class 11", link: "/math/class/11" },
{ label: "Math Class 12", link: "/math/class/12" },
{ label: "English Class 1", link: "/english/class/1" },
{ label: "English Class 2", link: "/english/class/2" },
{ label: "English Class 3", link: "/english/class/3" },
{ label: "English Class 4", link: "/english/class/4" },
{ label: "English Class 5", link: "/english/class/5" },
{ label: "English Class 6", link: "/english/class/6" },
{ label: "English Class 7", link: "/english/class/7" },
{ label: "English Class 8", link: "/english/class/8" },
{ label: "English Class 9", link: "/english/class/9" },
{ label: "English Class 10", link: "/english/class/10" },
{ label: "English Class 11", link: "/english/class/11" },
{ label: "English Class 12", link: "/english/class/12" },
{ label: "Science Class 1", link: "/science/class/1" },
  { label: "Science Class 2", link: "/science/class/2" },
  { label: "Science Class 3", link: "/science/class/3" },
  { label: "Science Class 4", link: "/science/class/4" },
  { label: "Science Class 5", link: "/science/class/5" },
  { label: "Science Class 6", link: "/science/class/6" },
  { label: "Science Class 7", link: "/science/class/7" },
  { label: "Science Class 8", link: "/science/class/8" },
  { label: "Science Class 9", link: "/science/class/9" },
  { label: "Science Class 10", link: "/science/class/10" },
  { label: "Science Class 11", link: "/science/class/11" },
  { label: "Science Class 12", link: "/science/class/12" },
{ label: "Data Structures", hindi: "डेटा स्ट्रक्चर", link: "/dsa" },
  { label: "Algorithms", hindi: "अल्गोरिदम", link: "/algorithms" },
  { label: "Python Practice", hindi: "पायथन अभ्यास", link: "/python" },
  { label: "JavaScript Practice", hindi: "जावास्क्रिप्ट अभ्यास", link: "/javascript" },
  { label: "HTML/CSS Quiz", hindi: "HTML/CSS क्विज़", link: "/html-css" },
  { label: "React.js Projects", hindi: "React.js प्रोजेक्ट्स", link: "/react" },
  { label: "Node.js Backend", hindi: "Node.js बैकएंड", link: "/node" },
  { label: "Git & GitHub", hindi: "Git और GitHub", link: "/git" },
  { label: "Tech Interview Questions", hindi: "तकनीकी साक्षात्कार प्रश्न", link: "/tech-interview" },

 { label: "🧮 Math", hindi: "गणित", link: "/math" },
  { label: "📘 English", hindi: "अंग्रेज़ी", link: "/english" },
  { label: "🔬 Science", hindi: "विज्ञान", link: "/science" },
  { label: "📖 Stories", hindi: "कहानियाँ", link: "/stories" },
  { label: "❓ Quizzes", hindi: "क्विज़", link: "/quizzes" },
  { label: "🌍 GK", hindi: "सामान्य ज्ञान", link: "/gk" },
  { label: "🏛️ Polity", hindi: "राजनीति विज्ञान", link: "/polity" },
  { label: "🧪 Chemistry", hindi: "रसायन विज्ञान", link: "/chemistry" },
  { label: "📐 Physics", hindi: "भौतिक विज्ञान", link: "/physics" },
  { label: "🧭 Geography", hindi: "भूगोल", link: "/geography" },
  { label: "🏹 History", hindi: "इतिहास", link: "/history" },
  { label: "🧠 Reasoning", hindi: "तर्कशक्ति", link: "/reasoning" },
  { label: "💡 Logical Aptitude", hindi: "तार्किक योग्यता", link: "/aptitude" },
  { label: "📝 Grammar", hindi: "व्याकरण", link: "/grammar" },
  { label: "🌐 Computers", hindi: "कंप्यूटर", link: "/computers" },
  { label: "📊 Economics", hindi: "अर्थशास्त्र", link: "/economics" },
  { label: "📚 Hindi", hindi: "हिंदी", link: "/hindi" },
  { label: "📖 Sanskrit", hindi: "संस्कृत", link: "/sanskrit" },
  // Reasoning Subtopics
  { label: "Reasoning - Coding Decoding", hindi: "कोडिंग-डिकोडिंग", link: "/reasoning/coding-decoding" },
  { label: "Reasoning - Blood Relations", hindi: "रक्त संबंध", link: "/reasoning/blood-relations" },
  { label: "Reasoning - Direction Sense", hindi: "दिशा ज्ञान", link: "/reasoning/direction-sense" },

  // Exams & Practice
  { label: "SSC Exam", hindi: "SSC परीक्षा", link: "/ssc" },
  { label: "Banking Exam", hindi: "बैंकिंग परीक्षा", link: "/banking" },
  { label: "UPSC Exam", hindi: "UPSC परीक्षा", link: "/upsc" },
  { label: "Railway Exam", hindi: "रेलवे परीक्षा", link: "/railway" },
  { label: "Teacher Eligibility Test", hindi: "शिक्षक पात्रता परीक्षा", link: "/tet" },
  { label: "Mock Tests", hindi: "मॉक टेस्ट", link: "/mock-tests" },
  { label: "Resume Builder", hindi: "रिज़्यूमे बिल्डर", link: "/resume-builder" },
  { label: "Interview Prep", hindi: "इंटरव्यू तैयारी", link: "/interview-prep" },
  { label: "Typing Practice", hindi: "टाइपिंग अभ्यास", link: "/typing" },
  { label: "Vocabulary Builder", hindi: "शब्दावली निर्माण", link: "/vocabulary" },

  // GK History Subtopics
  { label: "GK - Ancient History", hindi: "प्राचीन इतिहास", link: "/gk/history/ancient" },
  { label: "GK - Medieval History", hindi: "मध्यकालीन इतिहास", link: "/gk/history/medieval" },
  { label: "GK - Modern History", hindi: "आधुनिक इतिहास", link: "/gk/history/modern" },
  { label: "GK - Freedom Fighters & Leaders", hindi: "स्वतंत्रता सेनानी और नेता", link: "/gk/history/personalities" },

  // Security and Tech
  { label: "Cyber Security Basics", hindi: "साइबर सुरक्षा मूल बातें", link: "/cyber-security" }


];

const handleSearchInput = (query) => {
  setSearchQuery(query);
  if (query.trim() === "") {
    setFilteredSuggestions([]);
  } else {
    const filtered = searchItems.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }
};



  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const closeAll = () => {
    setLearnOpen(false);
    setExamOpen(false);
    setSubjectOpen(false);
    setPracticeOpen(false);
    setResourcesOpen(false);
    setCareerOpen(false);
    setFunZoneOpen(false);
    setMobileMenuOpen(false);
  };

  const openOnly = (menuSetter) => {
    closeAll();
    menuSetter(true);
  };
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (!e.target.closest(".search-container")) {
      setShowSuggestions(false);
    }
  };
  window.addEventListener("click", handleClickOutside);
  return () => window.removeEventListener("click", handleClickOutside);
}, []);


  return (
    <header className="header">

      {/* ✅ Desktop Layout */}
      <div className="header-desktop desktop-only">
        <div className="header-left">
          <div className="brand-title">Examble</div>
        </div>

        <div className="header-center">
          <ul className="nav-list">
          
  <li className="nav-item" onClick={() => {
  setLearnOpen(!learnOpen);
  setExamOpen(false);
  setSubjectOpen(false);
  setCareerOpen(false);
  setFunZoneOpen(false);
  setPracticeOpen(false);
  setResourcesOpen(false);
}}>
  Learn
  {learnOpen && (
    <ul className="dropdown">
   <li><Link to="/math" onClick={closeAll}>🧮 Mathematics</Link></li>
  <li><Link to="/english" onClick={closeAll}>📘 English</Link></li>
  <li><Link to="/science" onClick={closeAll}>🔬 Science</Link></li>
  <li><Link to="/socialscience" onClick={closeAll}>🧭 Social Science</Link></li>
  <li><Link to="/gk" onClick={closeAll}>🌍 GK</Link></li>
  <li><Link to="/polity" onClick={closeAll}>🏛️ Polity</Link></li>
  <li><Link to="/chemistry" onClick={closeAll}>🧪 Chemistry</Link></li>
  <li><Link to="/physics" onClick={closeAll}>📐 Physics</Link></li>
  <li><Link to="/geography" onClick={closeAll}>🧭 Geography</Link></li>
  <li><Link to="/history" onClick={closeAll}>🏹 History</Link></li>
  <li><Link to="/reasoning" onClick={closeAll}>🧠 Reasoning</Link></li>
  <li><Link to="/logical-aptitude" onClick={closeAll}>💡 Logical Aptitude</Link></li>
  <li><Link to="/grammer" onClick={closeAll}>📝 Grammar</Link></li>
  <li><Link to="/computers" onClick={closeAll}>🌐 Computers</Link></li>
  <li><Link to="/economics" onClick={closeAll}>📊 Economics</Link></li>
  <li><Link to="/hindi" onClick={closeAll}>📚 Hindi</Link></li>
  <li><Link to="/sanskrit" onClick={closeAll}>📖 Sanskrit</Link></li>
  <li><Link to="/hindigrammer" onClick={closeAll}>📚 हिंदी व्याकरण</Link></li>
  <li><Link to="/stories" onClick={closeAll}>📖 Stories</Link></li>
  <li><Link to="/quizzes" onClick={closeAll}>📘 English ↔ Hindi Translation</Link></li>
             
    </ul>
  )}
</li>

 <li className="nav-item" onClick={() => {
  setLearnOpen(false);
  setExamOpen(!examOpen);
  setSubjectOpen(false);
  setCareerOpen(false);
  setFunZoneOpen(false);
  setPracticeOpen(false);
  setResourcesOpen(false);
}}>
              Exams
              {examOpen && (
                <ul className="dropdown mega-menu">
                  <li><strong>Government Exams</strong></li>
                  <li><Link to="/upsc" onClick={closeAll}>🛡️ UPSC</Link></li>
<li><Link to="/state-psc" onClick={closeAll}>🏛️ State PSC</Link></li>
  <li><Link to="/ssc" onClick={closeAll}>📚 SSC</Link></li>
<li><Link to="/banking" onClick={closeAll}>💰 Banking</Link></li>
<li><Link to="/railway" onClick={closeAll}>🚆 Railway</Link></li>
<li><Link to="/teaching-exams" onClick={closeAll}>👩‍🏫 CTET/TET</Link></li>
<li><Link to="/si" onClick={closeAll}>🕵️‍♂️ Sub-Inspector (SI)</Link></li>
<li><Link to="/police" onClick={closeAll}>🚓 Police Exams</Link></li>

                  <li><strong>Engineering</strong></li>
                    <li><Link to="/gate" onClick={closeAll}>🧪 GATE</Link></li>
<li><Link to="/ies" onClick={closeAll}>🛠️ IES</Link></li>
<li><Link to="/jee-advanced" onClick={closeAll}>📏 JEE Advanced</Link></li>
<li><Link to="/jee-main" onClick={closeAll}>📐 JEE Main</Link></li>
                   <li><strong>State Engineering Exams </strong></li>
     <li><Link to="/mht-cet" onClick={closeAll}>🏙️ MHT-CET</Link></li>
<li><Link to="/wbjee" onClick={closeAll}>🌉 WBJEE</Link></li>
<li><Link to="/kcet" onClick={closeAll}>🌿 KCET</Link></li>
<li><Link to="/ap-eapcet" onClick={closeAll}>🌊 AP EAPCET</Link></li>
<li><Link to="/ts-eapcet" onClick={closeAll}>☀️ TS EAPCET</Link></li>
<li><Link to="/upsee" onClick={closeAll}>🏯 UPSEE</Link></li>

                  <li><strong>Medical</strong></li>
               <li><Link to="/neet" onClick={closeAll}>💉 NEET</Link></li>
<li><Link to="/aiims" onClick={closeAll}>🏥 AIIMS</Link></li>
<li><Link to="/neet" onClick={closeAll}>📘 NEET PG</Link></li>
<li><Link to="/ini-cet" onClick={closeAll}>🧠 INI-CET</Link></li>
<li><Link to="/fmge" onClick={closeAll}>🌍 FMGE</Link></li>
<li><Link to="/jipmer" onClick={closeAll}>🏫 JIPMER</Link></li>

                  <li><strong>Defence</strong></li>
                 <li><Link to="/nda" onClick={closeAll}>🎖️ NDA</Link></li>
<li><Link to="/cds" onClick={closeAll}>🪖 CDS</Link></li>
<li><Link to="/afcat" onClick={closeAll}>✈️ AFCAT</Link></li>
<li><Link to="/sainik" onClick={closeAll}>🏫 Sainik School</Link></li>

                  <li><strong>Others</strong></li>
            
                        <li><Link to="/olympiads">🥇 Olympiads</Link></li>
                  <li><Link to="/navodaya" onClick={closeAll}>🏤 Navodaya Vidyalaya</Link></li>
<li><Link to="/cuet" onClick={closeAll}>🎓 CUET</Link></li>
<li><Link to="/clat" onClick={closeAll}>⚖️ CLAT</Link></li>
<li><Link to="/nptel" onClick={closeAll}>🎥 NPTEL</Link></li>
<li><Link to="/nta" onClick={closeAll}>🧾 NTA Exams</Link></li>
                </ul>
              )}
            </li>

        <li className="nav-item" onClick={() => {
          
  setLearnOpen(false);
  setExamOpen(false);
  setSubjectOpen(!subjectOpen);
  setCareerOpen(false);
  setFunZoneOpen(false);
  setPracticeOpen(false);
  setResourcesOpen(false);
}}>
              Subjects
              {subjectOpen && (
                <ul className="dropdown">
   <li><Link to="/math" onClick={closeAll}>➕ Mathematics</Link></li>
  <li><Link to="/chemistry" onClick={closeAll}>🧪 Chemistry</Link></li>
  <li><Link to="/physics" onClick={closeAll}>📐 Physics</Link></li>
  <li><Link to="/biology" onClick={closeAll}>🧬 Biology</Link></li>
  <li><Link to="/english" onClick={closeAll}>📘 English</Link></li>
  <li><Link to="/gk" onClick={closeAll}>🧠 General Knowledge</Link></li>
  <li><Link to="/reasoning" onClick={closeAll}>💡 Reasoning</Link></li>
  <li><Link to="/science" onClick={closeAll}>🔬 General Science</Link></li>
  <li><Link to="/computers" onClick={closeAll}>🖥️ Computer Awareness</Link></li>
  <li><Link to="/aptitude" onClick={closeAll}>💡 Aptitude</Link></li>
  <li><Link to="/environment" onClick={closeAll}>🌱 Environment</Link></li>
  <li><Link to="/moral-education" onClick={closeAll}>🙏 Moral Education</Link></li>
  <li><Link to="/sports" onClick={closeAll}>⚽ Sports</Link></li>
  <li><Link to="/art" onClick={closeAll}>🎨 Art</Link></li>
                </ul>
              )}
            </li>

            <li className="nav-item" onClick={() => {
  setResourcesOpen(false);      
  setLearnOpen(false);
  setExamOpen(false);
  setSubjectOpen(false);
  setCareerOpen(false);
  setFunZoneOpen(false);
  setPracticeOpen(!practiceOpen);
}}>
              Practice
              {practiceOpen && (
                <ul className="dropdown">
<li><Link to="/daily-practices" onClick={closeAll}>📝 Daily Practice</Link></li>
  <li><Link to="/mock-tests" onClick={closeAll}>📊 Mock Tests</Link></li>
  <li><Link to="/previous-papers" onClick={closeAll}>📄 Previous Papers</Link></li>
  <li><Link to="/mcq-practice" onClick={closeAll}>🧠 MCQ Practice</Link></li>
  <li><Link to="/chapter-wise" onClick={closeAll}>📘 Chapter-wise Practice</Link></li>
  <li><Link to="/topic-wise" onClick={closeAll}>📗 Topic-wise Practice</Link></li>
  <li><Link to="/subject-wise" onClick={closeAll}>📙 Subject-wise Practice</Link></li>
  <li><Link to="/timed-tests" onClick={closeAll}>⏱️ Timed Tests</Link></li>
  <li><Link to="/previous-year-practice" onClick={closeAll}>📄 PYQ Practice</Link></li>
  <li><Link to="/fill-ups" onClick={closeAll}>✍️ Fill in the Blanks</Link></li>
  <li><Link to="/true-false" onClick={closeAll}>✔️ True/False</Link></li>
  <li><Link to="/match-the-following" onClick={closeAll}>🔗 Match the Following</Link></li>
  <li><Link to="/assertion-reason" onClick={closeAll}>📌 Assertion & Reason</Link></li>
  <li><Link to="/practicals" onClick={closeAll}>🔬 Practical Based Questions</Link></li>
  <li><Link to="/formula-practice" onClick={closeAll}>📐 Formula Practice</Link></li>
  <li><Link to="/translation-practice" onClick={closeAll}>🌐 Translation Practice</Link></li>
  <li><Link to="/vocabulary-practice" onClick={closeAll}>🗣️ Vocabulary Practice</Link></li>

                </ul>
              )}
            </li>

           <li className="nav-item" onClick={() => {
  setResourcesOpen(!resourcesOpen);       
  setLearnOpen(false);
  setExamOpen(false);
  setSubjectOpen(false);
  setCareerOpen(false);
  setFunZoneOpen(false);
  setPracticeOpen(false);
}}>
              Resources
              {resourcesOpen && (
                <ul className="dropdown">
           <li><Link to="/ncert-books" onClick={closeAll}>📘 NCERT Books</Link></li>
  <li><Link to="/syllabus" onClick={closeAll}>🧾 Syllabus</Link></li>
  <li><Link to="/tips-tricks" onClick={closeAll}>💡 Tips & Tricks</Link></li>
  <li><Link to="/study-planner" onClick={closeAll}>🗓️ Study Planner</Link></li>
  <li><Link to="/notes" onClick={closeAll}>📒 Study Notes</Link></li>
  <li><Link to="/sample-papers" onClick={closeAll}>📝 Sample Papers</Link></li>
  <li><Link to="/ebooks" onClick={closeAll}>📚 eBooks</Link></li>
  <li><Link to="/formulas" onClick={closeAll}>🔢 Important Formulas</Link></li>
  <li><Link to="/dictionary" onClick={closeAll}>📖 Dictionary</Link></li>
  <li><Link to="/pdf-zone" onClick={closeAll}>🗂️ PDF Zone</Link></li>
  <li><Link to="/video-lectures" onClick={closeAll}>🎥 Video Lectures</Link></li>
  <li><Link to="/question-bank" onClick={closeAll}>📦 Question Bank</Link></li>
  <li><Link to="/quiz-zone" onClick={closeAll}>🧪 Quiz Zone</Link></li>
  <li><Link to="/practice-worksheets" onClick={closeAll}>📂 Practice Worksheets</Link></li>
  <li><Link to="/exam-dates" onClick={closeAll}>📅 Exam Dates</Link></li>
  <li><Link to="/calculator" onClick={closeAll}>🧮 Calculator Tool</Link></li>
  <li><Link to="/download-center" onClick={closeAll}>⬇️ Download Center</Link></li>
  <li><Link to="/career-guidance" onClick={closeAll}>🧭 Career Guidance</Link></li>


                </ul>
              )}
            </li>

             <li className="nav-item" onClick={() => {
  setResourcesOpen(false);       
  setLearnOpen(false);
  setExamOpen(false);
  setSubjectOpen(false);
  setCareerOpen(!careerOpen);
  setFunZoneOpen(false);
  setPracticeOpen(false);
}}>
              Career
              {careerOpen && (
                <ul className="dropdown">
                  <li><Link to="/courses" onClick={closeAll}>🎓 Courses</Link></li>
<li><Link to="/certifications" onClick={closeAll}>📜 Certifications</Link></li>
<li><Link to="/resume-builder" onClick={closeAll}>📝 Resume Builder</Link></li>
<li><Link to="/interview-prep" onClick={closeAll}>💼 Interview Prep</Link></li>
<li><Link to="/career-guidance" onClick={closeAll}>🧭 Career Guidance</Link></li>
<li><Link to="/internships" onClick={closeAll}>🛠️ Internships</Link></li>
<li><Link to="/job-openings" onClick={closeAll}>📢 Job Openings</Link></li>
<li><Link to="/mock-interviews" onClick={closeAll}>🎤 Mock Interviews</Link></li>
<li><Link to="/cover-letter-builder" onClick={closeAll}>📄 Cover Letter Maker</Link></li>
<li><Link to="/portfolio-tips" onClick={closeAll}>🗂️ Portfolio Tips</Link></li>
<li><Link to="/career-quizzes" onClick={closeAll}>🧠 Career Quizzes</Link></li>
<li><Link to="/freelancing" onClick={closeAll}>🌍 Freelancing Guide</Link></li>
<li><Link to="/govt-exams-career" onClick={closeAll}>🏛️ Government Exam Paths</Link></li>
<li><Link to="/career-switch" onClick={closeAll}>🔁 Career Switch Help</Link></li>
<li><Link to="/study-abroad" onClick={closeAll}>✈️ Study Abroad</Link></li>

                </ul>
              )}
            </li>
 <li className="nav-item" onClick={() => {
  setResourcesOpen(false);      
  setLearnOpen(false);
  setExamOpen(false);
  setSubjectOpen(false);
  setCareerOpen(false);
  setFunZoneOpen(!funZoneOpen);
  setPracticeOpen(false);
}}>
              Fun Zone
              {funZoneOpen && (
                <ul className="dropdown">
                <li><Link to="/games" onClick={closeAll}>🎮 Games</Link></li>
<li><Link to="/puzzles" onClick={closeAll}>🧩 Puzzles</Link></li>
<li><Link to="/brain-teasers" onClick={closeAll}>🧠 Brain Teasers</Link></li>
<li><Link to="/riddles" onClick={closeAll}>❓ Riddles</Link></li>
<li><Link to="/quizzes" onClick={closeAll}>🎯 Fun Quizzes</Link></li>
<li><Link to="/spot-difference" onClick={closeAll}>🔍 Spot the Difference</Link></li>
<li><Link to="/memory-games" onClick={closeAll}>🧠 Memory Games</Link></li>
<li><Link to="/coloring" onClick={closeAll}>🎨 Coloring Zone</Link></li>
<li><Link to="/fun-facts" onClick={closeAll}>📚 Fun Facts</Link></li>
<li><Link to="/crossword" onClick={closeAll}>✏️ Crossword</Link></li>
<li><Link to="/mazes" onClick={closeAll}>🌀 Mazes</Link></li>
<li><Link to="/jokes" onClick={closeAll}>😂 Jokes</Link></li>
<li><Link to="/tongue-twisters" onClick={closeAll}>👅 Tongue Twisters</Link></li>

                </ul>
              )}
            </li>
          </ul>
          
        </div>

        <div className="header-right">
        <div className="search-container">
  <input
    type="text"
    className="search-input"
    placeholder="Search..."
    value={searchQuery}
    onChange={(e) => handleSearchInput(e.target.value)}
    onFocus={() => setShowSuggestions(true)}
  />
  {showSuggestions && filteredSuggestions.length > 0 && (
    <ul className="suggestion-dropdown">
      {filteredSuggestions.map((item, index) => (
        <li key={index}>
          <Link to={item.link} onClick={() => setShowSuggestions(false)}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>

          {/* <button onClick={toggleLanguage} className="lang-switch">
            {language === "en" ? "🌐 हिंदी" : "🌐 English"}
          </button> */}

          <button onClick={() => setShowVoiceChat(prev => !prev)}>
    🎤 MicBot
  </button>
  <Link to="/path" className="voice-link">🧭 Spark</Link>
  <Link to="/login" className="admin-text">Login</Link>
        </div>
      </div>

      {/* ✅ Mobile Layout */}
      <div className="header-mobile mobile-only">
        <div className="brand-title">Example</div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
          {/* <button onClick={toggleLanguage} className="lang-switch">
            {language === "en" ? "हिंदी" : "English"}
          </button> */}
        {/* <button onClick={() => setShowVoiceChat(prev => !prev)}>
          🎤 Voice Assistant
        </button>
        <Link to="/path" className="path-link">
          🧭 Personalized Path
        </Link> */}
        <Link to="/login" className="admin-text">Login</Link>
      </div>

      {/* {showVoiceChat && <VoiceChat />} */}
        </div>

      {/* ✅ Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {/* Each li calls openOnly(setX) */}
            <li onClick={() => setLearnOpen(!learnOpen)}>Learn ▼</li>
            {learnOpen && (
              <ul className="nested">
              <li><Link to="/math" onClick={closeAll}>🧮 Mathematics</Link></li>
  <li><Link to="/english" onClick={closeAll}>📘 English</Link></li>
  <li><Link to="/science" onClick={closeAll}>🔬 Science</Link></li>
  <li><Link to="/socialscience" onClick={closeAll}>🧭 Social Science</Link></li>
  <li><Link to="/gk" onClick={closeAll}>🌍 GK</Link></li>
  <li><Link to="/polity" onClick={closeAll}>🏛️ Polity</Link></li>
  <li><Link to="/chemistry" onClick={closeAll}>🧪 Chemistry</Link></li>
  <li><Link to="/physics" onClick={closeAll}>📐 Physics</Link></li>
  <li><Link to="/geography" onClick={closeAll}>🧭 Geography</Link></li>
  <li><Link to="/history" onClick={closeAll}>🏹 History</Link></li>
  <li><Link to="/reasoning" onClick={closeAll}>🧠 Reasoning</Link></li>
  <li><Link to="/logical-aptitude" onClick={closeAll}>💡 Logical Aptitude</Link></li>
  <li><Link to="/grammer" onClick={closeAll}>📝 Grammar</Link></li>
  <li><Link to="/computers" onClick={closeAll}>🌐 Computers</Link></li>
  <li><Link to="/economics" onClick={closeAll}>📊 Economics</Link></li>
  <li><Link to="/hindi" onClick={closeAll}>📚 Hindi</Link></li>
  <li><Link to="/sanskrit" onClick={closeAll}>📖 Sanskrit</Link></li>
  <li><Link to="/hindigrammer" onClick={closeAll}>📚 हिंदी व्याकरण</Link></li>
  <li><Link to="/stories" onClick={closeAll}>📖 Stories</Link></li>
  <li><Link to="/quizzes" onClick={closeAll}>📘 English ↔ Hindi Translation</Link></li>
              </ul>
            )}

            <li onClick={() => setExamOpen(!examOpen)}>Exams ▼</li>
            {examOpen && (
              <ul className="nested">
                <li><strong>Government</strong></li>
          <li><Link to="/upsc" onClick={closeAll}>🛡️ UPSC</Link></li>
<li><Link to="/state-psc" onClick={closeAll}>🏛️ State PSC</Link></li>
  <li><Link to="/ssc" onClick={closeAll}>📚 SSC</Link></li>
<li><Link to="/banking" onClick={closeAll}>💰 Banking</Link></li>
<li><Link to="/railway" onClick={closeAll}>🚆 Railway</Link></li>
<li><Link to="/teaching-exams" onClick={closeAll}>👩‍🏫 CTET/TET</Link></li>
<li><Link to="/si" onClick={closeAll}>🕵️‍♂️ Sub-Inspector (SI)</Link></li>
<li><Link to="/police" onClick={closeAll}>🚓 Police Exams</Link></li>

                <li><strong>Engineering</strong></li>
             <li><Link to="/gate" onClick={closeAll}>🧪 GATE</Link></li>
<li><Link to="/ies" onClick={closeAll}>🛠️ IES</Link></li>
<li><Link to="/jee-advanced" onClick={closeAll}>📏 JEE Advanced</Link></li>
<li><Link to="/jee-main" onClick={closeAll}>📐 JEE Main</Link></li>
     <li><strong>State Engineering Exams </strong></li>
     <li><Link to="/mht-cet" onClick={closeAll}>🏙️ MHT-CET</Link></li>
<li><Link to="/wbjee" onClick={closeAll}>🌉 WBJEE</Link></li>
<li><Link to="/kcet" onClick={closeAll}>🌿 KCET</Link></li>
<li><Link to="/ap-eapcet" onClick={closeAll}>🌊 AP EAPCET</Link></li>
<li><Link to="/ts-eapcet" onClick={closeAll}>☀️ TS EAPCET</Link></li>
<li><Link to="/upsee" onClick={closeAll}>🏯 UPSEE</Link></li>
     
                <li><strong>Medical</strong></li>
               {/* Medical */}
<li><Link to="/neet" onClick={closeAll}>💉 NEET</Link></li>
<li><Link to="/aiims" onClick={closeAll}>🏥 AIIMS</Link></li>
<li><Link to="/neet-pg" onClick={closeAll}>📘 NEET PG</Link></li>
<li><Link to="/ini-cet" onClick={closeAll}>🧠 INI-CET</Link></li>
<li><Link to="/fmge" onClick={closeAll}>🌍 FMGE</Link></li>
<li><Link to="/jipmer" onClick={closeAll}>🏫 JIPMER</Link></li>

                <li><strong>Defence</strong></li>
               <li><Link to="/nda" onClick={closeAll}>🎖️ NDA</Link></li>
<li><Link to="/cds" onClick={closeAll}>🪖 CDS</Link></li>
<li><Link to="/afcat" onClick={closeAll}>✈️ AFCAT</Link></li>
<li><Link to="/sainik" onClick={closeAll}>🏫 Sainik School</Link></li>
                <li><strong>Others</strong></li>
    <li><Link to="/olympiads">🥇 Olympiads</Link></li>
    <li><Link to="/navodaya" onClick={closeAll}>🏤 Navodaya Vidyalaya</Link></li>
<li><Link to="/cuet" onClick={closeAll}>🎓 CUET</Link></li>
<li><Link to="/clat" onClick={closeAll}>⚖️ CLAT</Link></li>
<li><Link to="/nptel" onClick={closeAll}>🎥 NPTEL</Link></li>
<li><Link to="/nta" onClick={closeAll}>🧾 NTA Exams</Link></li>
              </ul>
            )}

            <li onClick={() => setSubjectOpen(!subjectOpen)}>Subjects ▼</li>
            {subjectOpen && (
              <ul className="nested">
    <li><Link to="/math" onClick={closeAll}>➕ Mathematics</Link></li>
  <li><Link to="/chemistry" onClick={closeAll}>🧪 Chemistry</Link></li>
  <li><Link to="/physics" onClick={closeAll}>📐 Physics</Link></li>
  <li><Link to="/biology" onClick={closeAll}>🧬 Biology</Link></li>
  <li><Link to="/english" onClick={closeAll}>📘 English</Link></li>
  <li><Link to="/gk" onClick={closeAll}>🧠 General Knowledge</Link></li>
  <li><Link to="/reasoning" onClick={closeAll}>💡 Reasoning</Link></li>
  <li><Link to="/science" onClick={closeAll}>🔬 General Science</Link></li>
  <li><Link to="/computers" onClick={closeAll}>🖥️ Computer Awareness</Link></li>
  <li><Link to="/aptitude" onClick={closeAll}>💡 Aptitude</Link></li>
  <li><Link to="/environment" onClick={closeAll}>🌱 Environment</Link></li>
  <li><Link to="/moral-education" onClick={closeAll}>🙏 Moral Education</Link></li>
  <li><Link to="/sports" onClick={closeAll}>⚽ Sports</Link></li>
  <li><Link to="/art" onClick={closeAll}>🎨 Art</Link></li>
              </ul>
            )}

            <li onClick={() => setPracticeOpen(!practiceOpen)}>Practice ▼</li>
            {practiceOpen && (
              <ul className="nested">
<li><Link to="/daily-practices" onClick={closeAll}>📝 Daily Practice</Link></li>
  <li><Link to="/mock-tests" onClick={closeAll}>📊 Mock Tests</Link></li>
  <li><Link to="/previous-papers" onClick={closeAll}>📄 Previous Papers</Link></li>
  <li><Link to="/mcq-practice" onClick={closeAll}>🧠 MCQ Practice</Link></li>
  <li><Link to="/chapter-wise" onClick={closeAll}>📘 Chapter-wise Practice</Link></li>
  <li><Link to="/topic-wise" onClick={closeAll}>📗 Topic-wise Practice</Link></li>
  <li><Link to="/subject-wise" onClick={closeAll}>📙 Subject-wise Practice</Link></li>
  <li><Link to="/timed-tests" onClick={closeAll}>⏱️ Timed Tests</Link></li>
  <li><Link to="/previous-year-practice" onClick={closeAll}>📄 PYQ Practice</Link></li>
  <li><Link to="/fill-ups" onClick={closeAll}>✍️ Fill in the Blanks</Link></li>
  <li><Link to="/true-false" onClick={closeAll}>✔️ True/False</Link></li>
  <li><Link to="/match-the-following" onClick={closeAll}>🔗 Match the Following</Link></li>
  <li><Link to="/assertion-reason" onClick={closeAll}>📌 Assertion & Reason</Link></li>
  <li><Link to="/practicals" onClick={closeAll}>🔬 Practical Based Questions</Link></li>
  <li><Link to="/formula-practice" onClick={closeAll}>📐 Formula Practice</Link></li>
  <li><Link to="/translation-practice" onClick={closeAll}>🌐 Translation Practice</Link></li>
  <li><Link to="/vocabulary-practice" onClick={closeAll}>🗣️ Vocabulary Practice</Link></li>

              </ul>
            )}

            <li onClick={() => setResourcesOpen(!resourcesOpen)}>Resources ▼</li>
            {resourcesOpen && (
              <ul className="nested">
               <li><Link to="/ncert-books" onClick={closeAll}>📘 NCERT Books</Link></li>
  <li><Link to="/syllabus" onClick={closeAll}>🧾 Syllabus</Link></li>
  <li><Link to="/tips-tricks" onClick={closeAll}>💡 Tips & Tricks</Link></li>
  <li><Link to="/study-planner" onClick={closeAll}>🗓️ Study Planner</Link></li>
  <li><Link to="/notes" onClick={closeAll}>📒 Study Notes</Link></li>
  <li><Link to="/sample-papers" onClick={closeAll}>📝 Sample Papers</Link></li>
  <li><Link to="/ebooks" onClick={closeAll}>📚 eBooks</Link></li>
  <li><Link to="/formulas" onClick={closeAll}>🔢 Important Formulas</Link></li>
  <li><Link to="/dictionary" onClick={closeAll}>📖 Dictionary</Link></li>
  <li><Link to="/pdf-zone" onClick={closeAll}>🗂️ PDF Zone</Link></li>
  <li><Link to="/video-lectures" onClick={closeAll}>🎥 Video Lectures</Link></li>
  <li><Link to="/question-bank" onClick={closeAll}>📦 Question Bank</Link></li>
  <li><Link to="/quiz-zone" onClick={closeAll}>🧪 Quiz Zone</Link></li>
  <li><Link to="/practice-worksheets" onClick={closeAll}>📂 Practice Worksheets</Link></li>
  <li><Link to="/exam-dates" onClick={closeAll}>📅 Exam Dates</Link></li>
  <li><Link to="/calculator" onClick={closeAll}>🧮 Calculator Tool</Link></li>
  <li><Link to="/download-center" onClick={closeAll}>⬇️ Download Center</Link></li>
  <li><Link to="/career-guidance" onClick={closeAll}>🧭 Career Guidance</Link></li>

              </ul>
            )}

            <li onClick={() => setFunZoneOpen(!funZoneOpen)}>Career ▼</li>
            {careerOpen && (
              <ul className="nested">
          <li><Link to="/courses" onClick={closeAll}>🎓 Courses</Link></li>
<li><Link to="/certifications" onClick={closeAll}>📜 Certifications</Link></li>
<li><Link to="/resume-builder" onClick={closeAll}>📝 Resume Builder</Link></li>
<li><Link to="/interview-prep" onClick={closeAll}>💼 Interview Prep</Link></li>
<li><Link to="/career-guidance" onClick={closeAll}>🧭 Career Guidance</Link></li>
<li><Link to="/internships" onClick={closeAll}>🛠️ Internships</Link></li>
<li><Link to="/job-openings" onClick={closeAll}>📢 Job Openings</Link></li>
<li><Link to="/mock-interviews" onClick={closeAll}>🎤 Mock Interviews</Link></li>
<li><Link to="/cover-letter-builder" onClick={closeAll}>📄 Cover Letter Maker</Link></li>
<li><Link to="/portfolio-tips" onClick={closeAll}>🗂️ Portfolio Tips</Link></li>
<li><Link to="/career-quizzes" onClick={closeAll}>🧠 Career Quizzes</Link></li>
<li><Link to="/freelancing" onClick={closeAll}>🌍 Freelancing Guide</Link></li>
<li><Link to="/govt-exams-career" onClick={closeAll}>🏛️ Government Exam Paths</Link></li>
<li><Link to="/career-switch" onClick={closeAll}>🔁 Career Switch Help</Link></li>
<li><Link to="/study-abroad" onClick={closeAll}>✈️ Study Abroad</Link></li>

              </ul>
            )}

            <li onClick={() => openOnly(setFunZoneOpen)}>Fun Zone ▼</li>
            {funZoneOpen && (
              <ul className="nested">
       <li><Link to="/games" onClick={closeAll}>🎮 Games</Link></li>
<li><Link to="/puzzles" onClick={closeAll}>🧩 Puzzles</Link></li>
<li><Link to="/brain-teasers" onClick={closeAll}>🧠 Brain Teasers</Link></li>
<li><Link to="/riddles" onClick={closeAll}>❓ Riddles</Link></li>
<li><Link to="/quizzes" onClick={closeAll}>🎯 Fun Quizzes</Link></li>
<li><Link to="/spot-difference" onClick={closeAll}>🔍 Spot the Difference</Link></li>
<li><Link to="/memory-games" onClick={closeAll}>🧠 Memory Games</Link></li>
<li><Link to="/coloring" onClick={closeAll}>🎨 Coloring Zone</Link></li>
<li><Link to="/fun-facts" onClick={closeAll}>📚 Fun Facts</Link></li>
<li><Link to="/crossword" onClick={closeAll}>✏️ Crossword</Link></li>
<li><Link to="/mazes" onClick={closeAll}>🌀 Mazes</Link></li>
<li><Link to="/jokes" onClick={closeAll}>😂 Jokes</Link></li>
<li><Link to="/tongue-twisters" onClick={closeAll}>👅 Tongue Twisters</Link></li>

              </ul>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
