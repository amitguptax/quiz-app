import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import ReasoningQuiz from './pages/ReasoningQuiz';

import MathClassSelector from './pages/MathClassSelector';
import MathTopicSelector from './pages/MathTopicSelector';
import MathQuizPage from './pages/MathQuizPage'; // ✅ Correct


import EnglishClassSelector from './pages/EnglishClassSelector';
import EnglishTopicSelector from './pages/EnglishTopicSelector';
import EnglishQuizByClass from './pages/EnglishQuizByClass.jsx';

import TranslationQuiz from './pages/TranslationQuiz';
// import QuizPage from './pages/QuizPage';
import QuizSelector from './pages/QuizSelector';
import VoiceQuiz from './pages/VoiceQuiz';
import PathRecommendation from './components/PathRecommendation';
import SearchPage from './pages/SearchPage';

import GkTopicSelector from './components/gk/GkTopicSelector';
import GkQuiz from './components/gk/GkQuiz';
import GkSubtopicSelector from './components/gk/GkSubtopicSelector';
import GkHistorySubtopicSelector from './components/gk/GkHistorySubtopicSelector';

import './App.css';
import ScienceQuizPage from './pages/ScienceQuizPage';
import ScienceTopicSelector from './pages/ScienceTopicSelector';
import ScienceClassSelector from './pages/ScienceClassSelector';
import SocialScienceQuizPage from './pages/SocialScienceQuizPage';
import SocialScienceTopicSelector from './pages/SocialScienceTopicSelector';
import SocialScienceClassSelector from './pages/SocialScienceClassSelector';
import NeetTopicSelector from './pages/NeetTopicSelector.jsx';
import NeetQuizPage from './pages/NeetQuizPage.jsx';
import BiologyTopicSelector from "./pages/BiologyTopicSelector";
import BiologyQuizPage from "./pages/BiologyQuizPage";
import BiologyClassSelector from './pages/BiologyClassSelector.jsx';
import NeetClassSelector from './pages/NeetClassSelector.jsx';
import JeeMainClassSelector from './pages/JeeMainClassSelector.jsx';
import JeeMainTopicSelector from './pages/JeeMainTopicSelector.jsx';
import JeeAdvancedClassSelector from './pages/JeeAdvancedClassSelector.jsx';
import JeeMainQuizPage from './pages/JeeMainQuizPage.jsx';
import JeeAdvancedTopicSelector from './pages/JeeAdvancedTopicSelector.jsx';
import JeeAdvancedQuizPage from './pages/JeeAdvancedQuizPage.jsx';
import PhysicsTopicSelector from './pages/PhysicsTopicSelector.jsx';
import PhysicsQuizPage from './pages/PhysicsQuizPage.jsx';
import ChemistryClassSelector from './pages/ChemistryClassSelector.jsx';
import ChemistryTopicSelector from './pages/ChemistryTopicSelector.jsx';
import ChemistryQuizPage from "./pages/ChemistryQuizPage.jsx";
// Banking
import BankingClassSelector from "./pages/BankingClassSelector";
import BankingTopicSelector from "./pages/BankingTopicSelector";
import BankingQuizPage from "./pages/BankingQuizPage";
import PhysicsSubjectSelector from './pages/PhysicsSubjectSelector.jsx';

// SSC
// import SscClassSelector from "./pages/SscClassSelector";
// import SscTopicSelector from "./pages/SscTopicSelector";
// import SscQuizPage from "./pages/SscQuizPage";






// NEET Pages



const GkLayout = () => (
  <div>
    <Outlet />
  </div>
);

const HistoryLayout = () => <Outlet />;

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reasoning" element={<ReasoningQuiz />} />
            
{/* --------- Banking Routes ---------- */}
<Route path="/banking" element={<BankingClassSelector />} />
<Route path="/banking/:exam" element={<BankingTopicSelector />} />
<Route path="/banking-quiz/:exam/:subject/:subtopic" element={<BankingQuizPage />} />

{/* --------- SSC Routes ---------- */}
{/* <Route path="/ssc" element={<SscClassSelector />} />
<Route path="/ssc/:exam" element={<SscTopicSelector />} />
<Route path="/ssc-quiz/:exam/:subject/:subtopic" element={<SscQuizPage />} /> */}

            {/* ✅ Math */}
              <Route path="/math" element={<MathClassSelector />} />
<Route path="/math/class/:classId" element={<MathTopicSelector />} />
<Route path="/math-quiz/:classId/:topic/:subtopic" element={<MathQuizPage />} />


          {/* 🔬 Chemistry Routes */}
          <Route path="/chemistry" element={<ChemistryClassSelector />} />
          <Route path="/chemistry/class/:classId" element={<ChemistryTopicSelector />} />
          <Route path="/chemistry-quiz/:classId/:topic/:subtopic" element={<ChemistryQuizPage />} />

          {/* ⚛️ Physics Routes */}
          <Route path="/physics" element={<PhysicsSubjectSelector />} />
          <Route path="/physics/class/:classId" element={<PhysicsTopicSelector />} />
          <Route path="/physics-quiz/:classId/:topic/:subtopic" element={<PhysicsQuizPage />} />
     {/* Biology */}
         <Route path="/biology" element={<BiologyClassSelector />} />
        <Route path="/biology/class/:classId" element={<BiologyTopicSelector />} />
        <Route path="/biology-quiz/:classId/:topic/:subtopic" element={<BiologyQuizPage />} />

{/* ✅ NEET Section */}
<Route path="/neet" element={<NeetClassSelector />} />
<Route path="/neet/:subject" element={<NeetTopicSelector />} />
<Route path="/neet/:subject/topic/:slug" element={<NeetQuizPage />} />



{/* jeemain */}
<Route path="/jee-main" element={<JeeMainClassSelector />} />
<Route path="/jee-main/:subject/class/:cls" element={<JeeMainTopicSelector />} />
<Route path="/jee-main/:subject/:slug" element={<JeeMainQuizPage />} />

 
{/*jeeadvance */}
<Route path="/jee-advanced/:subject/class/:cls" element={<JeeAdvancedTopicSelector />} />
<Route path="/jee-advanced" element={<JeeAdvancedClassSelector />} />
<Route path="/jee-advanced/:subject/:slug" element={<JeeAdvancedQuizPage />} />
{/* science */}

<Route path="/science" element={<ScienceClassSelector />} />
<Route path="/science/class/:classId" element={<ScienceTopicSelector />} />
<Route path="/science-quiz/:classId/:topic/:subtopic" element={<ScienceQuizPage />} />
{/* social-science */}

<Route path="/socialscience" element={<SocialScienceClassSelector />} />
<Route path="/socialscience/class/:classId" element={<SocialScienceTopicSelector />} />
<Route path="/socialscience/class/:classId/:subject/:subtopic" element={<SocialScienceQuizPage />} />
        




            {/* ✅ English */}
            <Route path="/english" element={<EnglishClassSelector />} />
            <Route path="/english/class/:classId" element={<EnglishTopicSelector />} />
           <Route path="/english/class/:classId/:section/:topic" element={<EnglishQuizByClass />} />


            {/* ✅ Translation */}
            <Route path="/quizzes" element={<QuizSelector />} />
            <Route path="/translation/:direction/:topic" element={<TranslationQuiz />} />
            <Route path="/translation-quiz" element={<Navigate to="/translation/hindiToEnglish/present" />} />

            {/* ✅ General */}
            {/* <Route path="/quiz/:subject/:classId/:topic" element={<QuizPage />} /> */}
            <Route path="/voice-quiz" element={<VoiceQuiz />} />
            <Route path="/path" element={<PathRecommendation stats={{ score: 0, total: 5 }} onNext={() => {}} />} />
            <Route path="/search" element={<SearchPage />} />

            {/* ✅ GK Section */}
            <Route path="/gk" element={<GkLayout />}>
              <Route index element={<GkTopicSelector />} />
              <Route path="history" element={<HistoryLayout />}>
                <Route index element={<p style={{ padding: '20px' }}>📜 Select a history period above 🕰️</p>} />
                <Route path=":subtopicGroup" element={<GkHistorySubtopicSelector />} />
                <Route path=":subtopicGroup/:subtopic" element={<GkQuiz />} />
                <Route path="personalities/:subtopic" element={<GkQuiz />} />
              </Route>
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
