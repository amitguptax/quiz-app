import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <h1>Examble</h1>
          <p>© 2025 Examble. All rights reserved.</p>
        </div>

        <div className="footer-columns">

          {/* Learn Section */}
          <div className="footer-column">
            <h3>Learn</h3>
            <ul>
              <li><Link to="/math">Mathematics</Link></li>
              <li><Link to="/english">English</Link></li>
              <li><Link to="/science">Science</Link></li>
              <li><Link to="/gk">General Knowledge</Link></li>
              <li><Link to="/polity">Polity</Link></li>
              <li><Link to="/chemistry">Chemistry</Link></li>
              <li><Link to="/physics">Physics</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/reasoning">Reasoning</Link></li>
              <li><Link to="/computers">Computers</Link></li>
              <li><Link to="/economics">Economics</Link></li>
              <li><Link to="/sanskrit">Sanskrit</Link></li>
              <li><Link to="/stories">Stories</Link></li>
            </ul>
          </div>

          {/* Exams Section */}
          <div className="footer-column">
            <h3>Exams</h3>
            <ul>
              <li><Link to="/upsc">UPSC</Link></li>
              <li><Link to="/ssc">SSC</Link></li>
              <li><Link to="/banking">Banking</Link></li>
              <li><Link to="/railway">Railway</Link></li>
              <li><Link to="/teaching-exams">CTET/TET</Link></li>
              <li><Link to="/police">Police</Link></li>
              <li><Link to="/jee-main">JEE Main</Link></li>
              <li><Link to="/neet">NEET</Link></li>
              <li><Link to="/nda">NDA</Link></li>
              <li><Link to="/cds">CDS</Link></li>
              <li><Link to="/afcat">AFCAT</Link></li>
              <li><Link to="/clat">CLAT</Link></li>
              <li><Link to="/cuet">CUET</Link></li>
            </ul>
          </div>

          {/* Subjects Section */}
          <div className="footer-column">
            <h3>Subjects</h3>
            <ul>
              <li><Link to="/biology">Biology</Link></li>
              <li><Link to="/aptitude">Aptitude</Link></li>
              <li><Link to="/environment">Environment</Link></li>
              <li><Link to="/moral-education">Moral Education</Link></li>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/art">Art</Link></li>
              <li><Link to="/grammar">Grammar</Link></li>
              <li><Link to="/hindigrammer">हिंदी व्याकरण</Link></li>
              <li><Link to="/logical-aptitude">Logical Aptitude</Link></li>
              <li><Link to="/hindi">Hindi</Link></li>
              <li><Link to="/geography">Geography</Link></li>
              <li><Link to="/sanskrit">Sanskrit</Link></li>
              <li><Link to="/english">English</Link></li>
            </ul>
          </div>

          {/* Practice Section */}
          <div className="footer-column">
            <h3>Practice</h3>
            <ul>
              <li><Link to="/daily-practice">Daily Practice</Link></li>
              <li><Link to="/mock-tests">Mock Tests</Link></li>
              <li><Link to="/mcq-practice">MCQ Practice</Link></li>
              <li><Link to="/chapter-wise">Chapter-wise</Link></li>
              <li><Link to="/topic-wise">Topic-wise</Link></li>
              <li><Link to="/subject-wise">Subject-wise</Link></li>
              <li><Link to="/timed-tests">Timed Tests</Link></li>
              <li><Link to="/fill-ups">Fill in the Blanks</Link></li>
              <li><Link to="/true-false">True/False</Link></li>
              <li><Link to="/match-the-following">Match the Following</Link></li>
              <li><Link to="/assertion-reason">Assertion & Reason</Link></li>
              <li><Link to="/translation-practice">Translation</Link></li>
              <li><Link to="/vocabulary-practice">Vocabulary</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/ncert-books">NCERT Books</Link></li>
              <li><Link to="/syllabus">Syllabus</Link></li>
              <li><Link to="/notes">Notes</Link></li>
              <li><Link to="/sample-papers">Sample Papers</Link></li>
              <li><Link to="/ebooks">eBooks</Link></li>
              <li><Link to="/formulas">Formulas</Link></li>
              <li><Link to="/dictionary">Dictionary</Link></li>
              <li><Link to="/pdf-zone">PDF Zone</Link></li>
              <li><Link to="/video-lectures">Video Lectures</Link></li>
              <li><Link to="/question-bank">Question Bank</Link></li>
              <li><Link to="/quiz-zone">Quiz Zone</Link></li>
              <li><Link to="/exam-dates">Exam Dates</Link></li>
              <li><Link to="/calculator">Calculator</Link></li>
            </ul>
          </div>

          {/* Career Section */}
          <div className="footer-column">
            <h3>Career</h3>
            <ul>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/resume-builder">Resume Builder</Link></li>
              <li><Link to="/interview-prep">Interview Prep</Link></li>
              <li><Link to="/internships">Internships</Link></li>
              <li><Link to="/job-openings">Job Openings</Link></li>
              <li><Link to="/mock-interviews">Mock Interviews</Link></li>
              <li><Link to="/cover-letter-builder">Cover Letter</Link></li>
              <li><Link to="/portfolio-tips">Portfolio Tips</Link></li>
              <li><Link to="/career-quizzes">Career Quizzes</Link></li>
              <li><Link to="/freelancing">Freelancing</Link></li>
              <li><Link to="/govt-exams-career">Govt Exams</Link></li>
              <li><Link to="/career-switch">Career Switch</Link></li>
            </ul>
          </div>

          {/* Fun Zone Section */}
          <div className="footer-column">
            <h3>Fun Zone</h3>
            <ul>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/puzzles">Puzzles</Link></li>
              <li><Link to="/brain-teasers">Brain Teasers</Link></li>
              <li><Link to="/riddles">Riddles</Link></li>
              <li><Link to="/quizzes">Fun Quizzes</Link></li>
              <li><Link to="/spot-difference">Spot the Difference</Link></li>
              <li><Link to="/memory-games">Memory Games</Link></li>
              <li><Link to="/coloring">Coloring Zone</Link></li>
              <li><Link to="/fun-facts">Fun Facts</Link></li>
              <li><Link to="/crossword">Crossword</Link></li>
              <li><Link to="/mazes">Mazes</Link></li>
              <li><Link to="/jokes">Jokes</Link></li>
              <li><Link to="/tongue-twisters">Tongue Twisters</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column newsletter">
            <h3>Newsletter</h3>
            <p>Stay updated with latest quizzes & tips</p>
            <form>
              <input type="email" placeholder="you@example.com" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
