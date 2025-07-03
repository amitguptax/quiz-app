const questions = [
  {
    question: {
      en: "What is 10 ÷ 3?",
      hi: "10 ÷ 3 कितना होता है?"
    },
    options: ["3 R1", "3 R2", "4 R1", "4 R2"],
    correct: { en: "3 R1", hi: "3 शेष 1" },
    explanation: {
      en: "3 × 3 = 9, remainder = 1. So, 10 ÷ 3 = 3 R1.",
      hi: "3 × 3 = 9, शेष = 1। इसलिए 10 ÷ 3 = 3 शेष 1।"
    }
  },
  {
    question: {
      en: "What is 14 ÷ 4?",
      hi: "14 ÷ 4 कितना होता है?"
    },
    options: ["3 R2", "4 R2", "3 R1", "2 R2"],
    correct: { en: "3 R2", hi: "3 शेष 2" },
    explanation: {
      en: "4 × 3 = 12, remainder = 2. So, 14 ÷ 4 = 3 R2.",
      hi: "4 × 3 = 12, शेष = 2। इसलिए 14 ÷ 4 = 3 शेष 2।"
    }
  },
  {
    question: {
      en: "What is 17 ÷ 5?",
      hi: "17 ÷ 5 कितना होता है?"
    },
    options: ["3 R2", "4 R2", "2 R3", "5 R1"],
    correct: { en: "3 R2", hi: "3 शेष 2" },
    explanation: {
      en: "5 × 3 = 15, remainder = 2. So, 17 ÷ 5 = 3 R2.",
      hi: "5 × 3 = 15, शेष = 2। इसलिए 17 ÷ 5 = 3 शेष 2।"
    }
  },
  {
    question: {
      en: "What is 25 ÷ 4?",
      hi: "25 ÷ 4 कितना होता है?"
    },
    options: ["6 R1", "6 R2", "5 R2", "5 R1"],
    correct: { en: "6 R1", hi: "6 शेष 1" },
    explanation: {
      en: "4 × 6 = 24, remainder = 1. So, 25 ÷ 4 = 6 R1.",
      hi: "4 × 6 = 24, शेष = 1। इसलिए 25 ÷ 4 = 6 शेष 1।"
    }
  },
  {
    question: {
      en: "What is 19 ÷ 6?",
      hi: "19 ÷ 6 कितना होता है?"
    },
    options: ["3 R1", "3 R2", "3 R3", "4 R3"],
    correct: { en: "3 R1", hi: "3 शेष 1" },
    explanation: {
      en: "6 × 3 = 18, remainder = 1. So, 19 ÷ 6 = 3 R1.",
      hi: "6 × 3 = 18, शेष = 1। इसलिए 19 ÷ 6 = 3 शेष 1।"
    }
  },
  {
    question: {
      en: "What is 22 ÷ 7?",
      hi: "22 ÷ 7 कितना होता है?"
    },
    options: ["3 R1", "3 R2", "3 R3", "2 R1"],
    correct: { en: "3 R1", hi: "3 शेष 1" },
    explanation: {
      en: "7 × 3 = 21, remainder = 1. So, 22 ÷ 7 = 3 R1.",
      hi: "7 × 3 = 21, शेष = 1। इसलिए 22 ÷ 7 = 3 शेष 1।"
    }
  },
  {
    question: {
      en: "What is 11 ÷ 2?",
      hi: "11 ÷ 2 कितना होता है?"
    },
    options: ["5 R1", "5 R2", "6 R1", "6 R2"],
    correct: { en: "5 R1", hi: "5 शेष 1" },
    explanation: {
      en: "2 × 5 = 10, remainder = 1. So, 11 ÷ 2 = 5 R1.",
      hi: "2 × 5 = 10, शेष = 1। इसलिए 11 ÷ 2 = 5 शेष 1।"
    }
  },
  {
    question: {
      en: "What is 29 ÷ 6?",
      hi: "29 ÷ 6 कितना होता है?"
    },
    options: ["4 R5", "5 R4", "4 R3", "5 R3"],
    correct: { en: "4 R5", hi: "4 शेष 5" },
    explanation: {
      en: "6 × 4 = 24, remainder = 5. So, 29 ÷ 6 = 4 R5.",
      hi: "6 × 4 = 24, शेष = 5। इसलिए 29 ÷ 6 = 4 शेष 5।"
    }
  },
  {
    question: {
      en: "What is 26 ÷ 4?",
      hi: "26 ÷ 4 कितना होता है?"
    },
    options: ["6 R2", "6 R1", "5 R1", "5 R2"],
    correct: { en: "6 R2", hi: "6 शेष 2" },
    explanation: {
      en: "4 × 6 = 24, remainder = 2. So, 26 ÷ 4 = 6 R2.",
      hi: "4 × 6 = 24, शेष = 2। इसलिए 26 ÷ 4 = 6 शेष 2।"
    }
  },
  {
    question: {
      en: "What is 31 ÷ 5?",
      hi: "31 ÷ 5 कितना होता है?"
    },
    options: ["6 R1", "6 R2", "6 R3", "5 R2"],
    correct: { en: "6 R1", hi: "6 शेष 1" },
    explanation: {
      en: "5 × 6 = 30, remainder = 1. So, 31 ÷ 5 = 6 R1.",
      hi: "5 × 6 = 30, शेष = 1। इसलिए 31 ÷ 5 = 6 शेष 1।"
    }
  }
];

export default { questions };
