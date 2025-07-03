const usingBrackets = [
  {
    id: 1,
    question: {
      en: "What is the value of (3 + 4) × 2?",
      hi: "(3 + 4) × 2 का मान क्या है?"
    },
    options: ["14", "10", "11", "8"],
    answer: "14",
    explanation: {
      en: "First solve inside brackets: 3+4=7 → 7×2=14",
      hi: "पहले ब्रैकेट हल करें: 3+4=7 → 7×2=14"
    }
  },
  {
    id: 2,
    question: {
      en: "What is 5 + (6 × 2)?",
      hi: "5 + (6 × 2) का मान क्या है?"
    },
    options: ["22", "17", "15", "16"],
    answer: "17",
    explanation: {
      en: "Solve inside bracket first: 6×2=12 → 5+12=17",
      hi: "पहले ब्रैकेट हल करें: 6×2=12 → 5+12=17"
    }
  },
  {
    id: 3,
    question: {
      en: "Which expression shows correct use of brackets: 2 + 3 × 4?",
      hi: "2 + 3 × 4 में ब्रैकेट का सही प्रयोग कौन सा है?"
    },
    options: ["(2 + 3) × 4", "2 + (3 × 4)", "Both", "None"],
    answer: "Both",
    explanation: {
      en: "Both are valid expressions with different outcomes.",
      hi: "दोनों सही हैं पर परिणाम अलग होंगे।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the result of (8 – 3) × (2 + 1)?",
      hi: "(8 – 3) × (2 + 1) का उत्तर क्या है?"
    },
    options: ["15", "5", "12", "18"],
    answer: "15",
    explanation: {
      en: "8-3=5 and 2+1=3 → 5×3=15",
      hi: "8-3=5 और 2+1=3 → 5×3=15"
    }
  },
  {
    id: 5,
    question: {
      en: "Solve: (10 + 5) ÷ (3 + 2)",
      hi: "हल करें: (10 + 5) ÷ (3 + 2)"
    },
    options: ["3", "2", "5", "15"],
    answer: "3",
    explanation: {
      en: "10+5=15, 3+2=5 → 15÷5=3",
      hi: "10+5=15, 3+2=5 → 15÷5=3"
    }
  },
  {
    id: 6,
    question: {
      en: "Which is correct: (4 × 2) + (6 ÷ 3)?",
      hi: "सही हल क्या है: (4 × 2) + (6 ÷ 3)?"
    },
    options: ["10", "6", "12", "8"],
    answer: "10",
    explanation: {
      en: "4×2=8 and 6÷3=2 → 8+2=10",
      hi: "4×2=8 और 6÷3=2 → 8+2=10"
    }
  },
  {
    id: 7,
    question: {
      en: "Choose the expression equal to 20: (10 + 5) × 2 or 10 + (5 × 2)?",
      hi: "20 के बराबर कौन सा है: (10 + 5) × 2 या 10 + (5 × 2)?"
    },
    options: ["(10 + 5) × 2", "10 + (5 × 2)", "Both", "None"],
    answer: "(10 + 5) × 2",
    explanation: {
      en: "(10 + 5) × 2 = 15×2 = 30; 10 + (5×2) = 20",
      hi: "10 + (5×2) = 20 सही है"
    }
  },
  {
    id: 8,
    question: {
      en: "Evaluate: (18 ÷ 3) + (2 × 4)",
      hi: "मूल्य निकालें: (18 ÷ 3) + (2 × 4)"
    },
    options: ["14", "10", "12", "8"],
    answer: "10",
    explanation: {
      en: "18÷3=6, 2×4=8 → 6+8=14",
      hi: "18÷3=6, 2×4=8 → 6+8=14"
    }
  },
  {
    id: 9,
    question: {
      en: "Using brackets: 12 + 6 × 2 = ?",
      hi: "ब्रैकेट का प्रयोग करें: 12 + 6 × 2 = ?"
    },
    options: ["36", "24", "30", "None"],
    answer: "24",
    explanation: {
      en: "6×2=12 → 12+12=24",
      hi: "6×2=12 → 12+12=24"
    }
  },
  {
    id: 10,
    question: {
      en: "Solve using brackets: 100 – (25 + 15)",
      hi: "ब्रैकेट के साथ हल करें: 100 – (25 + 15)"
    },
    options: ["60", "70", "50", "65"],
    answer: "60",
    explanation: {
      en: "25 + 15 = 40 → 100 – 40 = 60",
      hi: "25 + 15 = 40 → 100 – 40 = 60"
    }
  }
];

export default usingBrackets;
