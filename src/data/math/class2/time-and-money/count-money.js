const questions = [
  {
    question: {
      en: "What is the total of ₹10 + ₹20?",
      hi: "₹10 + ₹20 का कुल योग कितना है?"
    },
    options: [
      { en: "₹30", hi: "₹30" },
      { en: "₹40", hi: "₹40" },
      { en: "₹25", hi: "₹25" },
      { en: "₹20", hi: "₹20" }
    ],
    correct: { en: "₹30", hi: "₹30" },
    explanation: {
      en: "₹10 + ₹20 = ₹30.",
      hi: "₹10 + ₹20 = ₹30।"
    }
  },
  {
    question: {
      en: "If you have ₹5 + ₹10 + ₹5, how much money do you have?",
      hi: "यदि आपके पास ₹5 + ₹10 + ₹5 हैं, तो कुल कितने पैसे हैं?"
    },
    options: [
      { en: "₹20", hi: "₹20" },
      { en: "₹25", hi: "₹25" },
      { en: "₹10", hi: "₹10" },
      { en: "₹15", hi: "₹15" }
    ],
    correct: { en: "₹20", hi: "₹20" },
    explanation: {
      en: "₹5 + ₹10 + ₹5 = ₹20.",
      hi: "₹5 + ₹10 + ₹5 = ₹20।"
    }
  },
  {
    question: {
      en: "Which group of coins makes ₹50?",
      hi: "कौन-से सिक्कों का समूह ₹50 बनाता है?"
    },
    options: [
      { en: "₹10 + ₹10 + ₹10 + ₹10 + ₹10", hi: "₹10 + ₹10 + ₹10 + ₹10 + ₹10" },
      { en: "₹5 + ₹10 + ₹20", hi: "₹5 + ₹10 + ₹20" },
      { en: "₹5 + ₹5 + ₹5", hi: "₹5 + ₹5 + ₹5" },
      { en: "₹20 + ₹20 + ₹20", hi: "₹20 + ₹20 + ₹20" }
    ],
    correct: { en: "₹10 + ₹10 + ₹10 + ₹10 + ₹10", hi: "₹10 + ₹10 + ₹10 + ₹10 + ₹10" },
    explanation: {
      en: "5 × ₹10 = ₹50.",
      hi: "5 × ₹10 = ₹50।"
    }
  },
  {
    question: {
      en: "₹20 + ₹5 + ₹10 = ?",
      hi: "₹20 + ₹5 + ₹10 = ?"
    },
    options: [
      { en: "₹35", hi: "₹35" },
      { en: "₹30", hi: "₹30" },
      { en: "₹25", hi: "₹25" },
      { en: "₹40", hi: "₹40" }
    ],
    correct: { en: "₹35", hi: "₹35" },
    explanation: {
      en: "₹20 + ₹5 + ₹10 = ₹35.",
      hi: "₹20 + ₹5 + ₹10 = ₹35।"
    }
  },
  {
    question: {
      en: "Which of the following totals to ₹50?",
      hi: "निम्न में से कौन ₹50 के बराबर है?"
    },
    options: [
      { en: "₹20 + ₹20 + ₹10", hi: "₹20 + ₹20 + ₹10" },
      { en: "₹10 + ₹10 + ₹10", hi: "₹10 + ₹10 + ₹10" },
      { en: "₹30 + ₹10", hi: "₹30 + ₹10" },
      { en: "₹25 + ₹20", hi: "₹25 + ₹20" }
    ],
    correct: { en: "₹20 + ₹20 + ₹10", hi: "₹20 + ₹20 + ₹10" },
    explanation: {
      en: "₹20 + ₹20 + ₹10 = ₹50.",
      hi: "₹20 + ₹20 + ₹10 = ₹50।"
    }
  },
  {
    question: {
      en: "What is the value of 5 coins of ₹2?",
      hi: "₹2 के 5 सिक्कों का कुल मूल्य कितना है?"
    },
    options: [
      { en: "₹10", hi: "₹10" },
      { en: "₹5", hi: "₹5" },
      { en: "₹2", hi: "₹2" },
      { en: "₹15", hi: "₹15" }
    ],
    correct: { en: "₹10", hi: "₹10" },
    explanation: {
      en: "5 × ₹2 = ₹10.",
      hi: "5 × ₹2 = ₹10।"
    }
  },
  {
    question: {
      en: "How many ₹10 notes make ₹50?",
      hi: "₹50 बनाने के लिए ₹10 के कितने नोट चाहिए?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "10", hi: "10" },
      { en: "2", hi: "2" },
      { en: "4", hi: "4" }
    ],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "5 × ₹10 = ₹50.",
      hi: "5 × ₹10 = ₹50।"
    }
  },
  {
    question: {
      en: "₹10 + ₹10 + ₹5 + ₹5 = ?",
      hi: "₹10 + ₹10 + ₹5 + ₹5 = ?"
    },
    options: [
      { en: "₹30", hi: "₹30" },
      { en: "₹20", hi: "₹20" },
      { en: "₹25", hi: "₹25" },
      { en: "₹15", hi: "₹15" }
    ],
    correct: { en: "₹30", hi: "₹30" },
    explanation: {
      en: "₹10 + ₹10 + ₹5 + ₹5 = ₹30.",
      hi: "₹10 + ₹10 + ₹5 + ₹5 = ₹30।"
    }
  },
  {
    question: {
      en: "If you have ₹10, ₹10 and ₹20 notes, how much money is that?",
      hi: "यदि आपके पास ₹10, ₹10 और ₹20 के नोट हैं, तो कुल कितने पैसे हैं?"
    },
    options: [
      { en: "₹40", hi: "₹40" },
      { en: "₹30", hi: "₹30" },
      { en: "₹50", hi: "₹50" },
      { en: "₹60", hi: "₹60" }
    ],
    correct: { en: "₹40", hi: "₹40" },
    explanation: {
      en: "₹10 + ₹10 + ₹20 = ₹40.",
      hi: "₹10 + ₹10 + ₹20 = ₹40।"
    }
  },
  {
    question: {
      en: "What is the total of ₹1 + ₹2 + ₹5 + ₹10?",
      hi: "₹1 + ₹2 + ₹5 + ₹10 का कुल योग कितना है?"
    },
    options: [
      { en: "₹18", hi: "₹18" },
      { en: "₹20", hi: "₹20" },
      { en: "₹15", hi: "₹15" },
      { en: "₹25", hi: "₹25" }
    ],
    correct: { en: "₹18", hi: "₹18" },
    explanation: {
      en: "₹1 + ₹2 + ₹5 + ₹10 = ₹18.",
      hi: "₹1 + ₹2 + ₹5 + ₹10 = ₹18।"
    }
  }
];

export default { questions };
