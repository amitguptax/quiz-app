// // src/pages/TopicQuiz.jsx
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import mathMcqs from '../data/mathMcqs';

// const TopicQuiz = () => {
//   const {  topicId } = useParams();
//   const questions = mathMcqs[topicId] || [];
  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [score, setScore] = useState(0);

//   const currentQuestion = questions[currentIndex];

//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//     if (selectedOption === currentQuestion.correctAnswer) {
//       setScore(score + 1);
//     }
//   };

//   const handleNext = () => {
//     setCurrentIndex(currentIndex + 1);
//     setSelectedOption('');
//     setSubmitted(false);
//   };

//   if (!questions.length) {
//     return <p>No questions available for this topic.</p>;
//   }

//   if (currentIndex >= questions.length) {
//     return (
//       <div>
//         <h2>Quiz Complete!</h2>
//         <p>Your score: {score} / {questions.length}</p>
//         <p>🎉 Achievement Unlocked!</p>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>{decodeURIComponent(topicId)}</h2>
//       <p><strong>Q{currentIndex + 1}:</strong> {currentQuestion.question}</p>
//       {currentQuestion.options.map((option, idx) => (
//         <div key={idx}>
//           <label>
//             <input
//               type="radio"
//               value={option}
//               checked={selectedOption === option}
//               onChange={handleOptionChange}
//               disabled={submitted}
//             />
//             {option}
//           </label>
//         </div>
//       ))}
//       {!submitted ? (
//         <button onClick={handleSubmit} disabled={!selectedOption}>Submit</button>
//       ) : (
//         <div>
//           <p style={{ color: selectedOption === currentQuestion.correctAnswer ? 'green' : 'red' }}>
//             {selectedOption === currentQuestion.correctAnswer
//               ? 'Correct!'
//               : `Wrong! Correct answer is "${currentQuestion.correctAnswer}".`}
//           </p>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopicQuiz;
