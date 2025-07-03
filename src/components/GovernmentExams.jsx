// import React from 'react';
// import './GovernmentExams.css';
// import { Link } from 'react-router-dom';

// const governmentExams = [
//   {
//     emoji: '📚',
//     title: 'SSC',
//     desc: 'Staff Selection Commission – CGL, CHSL, MTS, etc.',
//     link: '/exams/ssc'
//   },
//   {
//     emoji: '💰',
//     title: 'Banking',
//     desc: 'IBPS PO, Clerk, SBI, RBI, LIC – Banking & Insurance Exams',
//     link: '/exams/banking'
//   },
//   {
//     emoji: '🏛️',
//     title: 'UPSC',
//     desc: 'Civil Services – IAS, IPS, IFS, and more',
//     link: '/exams/upsc'
//   },
//   {
//     emoji: '🛬',
//     title: 'NDA / CDS',
//     desc: 'Defence Services Entry – National Defence Academy, CDS',
//     link: '/exams/nda-cds'
//   },
//   {
//     emoji: '🚆',
//     title: 'Railway',
//     desc: 'RRB NTPC, ALP, Group D, JE, etc.',
//     link: '/exams/railway'
//   },
//   {
//     emoji: '🧮',
//     title: 'State PSCs',
//     desc: 'State-level Public Service Commissions like UPPSC, BPSC, MPPSC',
//     link: '/exams/state-pscs'
//   },
//   {
//     emoji: '🧾',
//     title: 'Current Affairs',
//     desc: 'Stay updated on daily, monthly and yearly current events & GK',
//     link: '/current-affairs'
//   }
// ];

// const GovernmentExams = () => {
//   return (
//     <section className="gov-exams">
//       <h2>🏆 Government Exams</h2>
//       <div className="exam-card-grid">
//         {governmentExams.map((exam, index) => (
//           <Link to={exam.link} className="exam-card" key={index}>
//             <div className="exam-emoji">{exam.emoji}</div>
//             <div className="exam-title">{exam.title}</div>
//             <div className="exam-desc">{exam.desc}</div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GovernmentExams;
