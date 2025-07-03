// home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Home.css";
import HeroSection from "./HeroSection";
import SubjectsGrid from "./SubjectsGrid";
import ExamPrepSection from "./PopularExams";
import DailyPractice from "./DailyPractice";
import FeaturedQuizzes from "./QuizHighlights";
import FooterCTA from "./footercta";
import Leaderboard from "./Leaderboard";
// import GovernmentExams from "./GovernmentExams";
import VoiceChat from '../components/VoiceChat';
import PathRecommendation from '../components/PathRecommendation';


const extraSubjects = [
  { name: "🧬 Biology", path: "/biology" },
  { name: "🧪 Physics", path: "/physics" },
  { name: "🧲 Chemistry", path: "/chemistry" },
  { name: "🧮 Quantitative Aptitude", path: "/quant-aptitude" },
  { name: "📝 Hindi", path: "/hindi" },
  { name: "🌍 Geography", path: "/geography" },
  { name: "🏛 Civics / Polity", path: "/polity" },
  { name: "🧾 Current Affairs", path: "/current-affairs" },
  { name: "📊 Economics", path: "/economics" },
  { name: "🧠 IQ Tests", path: "/iq-tests" },
  { name: "🎨 Art & Culture", path: "/art-culture" },
];

const extraExams = [
  { name: "🎖 NDA", path: "/nda" },
  { name: "🚆 Railway", path: "/railway" },
  { name: "🧪 Olympiads", path: "/olympiads" },
  { name: "🎓 CUET", path: "/cuet" },
  { name: "🧑‍💼 MBA / CAT", path: "/mba-cat" },
  { name: "🛬 Air Force / Navy", path: "/airforce-navy" },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* ...Hero Section here... */}
       <h1>Welcome to AI Quiz Platform</h1>

      <section className="feature-card">
        <h2>🤖 Instant AI Chat</h2>
        <p>Get instant help with questions—talk or type to our AI assistant.</p>
        <VoiceChat />
      </section>

      <section className="feature-card">
        <h2>🧭 Personalized Quiz Path</h2>
        <p>Start where you’re weakest—our AI suggests your next best quiz.</p>
        <Link to="/path">
          <button>Start Quiz Journey</button>
        </Link>
      </section>

      <section className="feature-card">
        <h2>🎧 Voice Quiz (Beta)</h2>
        <p>Speak your answers aloud and get instant feedback—hands‑free!</p>
        <Link to="/voice-quiz">
          <button>Try Voice Quiz</button>
        </Link>
      </section>
      <HeroSection />
      <ExamPrepSection />
      <SubjectsGrid />
      <FeaturedQuizzes />
      <DailyPractice />
      <Leaderboard />
      <FooterCTA />
      {/* <GovernmentExams/> */}
      {/* Subjects Section */}
      <section className="subjects">
        <h2>Subjects</h2>
        <div className="grid">
          {extraSubjects.map((subj) => (
            <Link key={subj.name} to={subj.path}>{subj.name}</Link>
          ))}
        </div>
      </section>

      {/* Popular Exams */}
      <section className="exams">
        <h2>Popular Exams</h2>
        <div className="grid">
          {extraExams.map((exam) => (
            <Link key={exam.name} to={exam.path}>{exam.name}</Link>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Home;
