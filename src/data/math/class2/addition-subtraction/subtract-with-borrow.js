const questions = [
  {
    question: {
      en: "What is 52 - 38?",
      hi: "52 में से 38 घटाएँ।"
    },
    options: [
      { en: "14", hi: "14" },
      { en: "15", hi: "15" },
      { en: "13", hi: "13" },
      { en: "12", hi: "12" }
    ],
    correct: { en: "14", hi: "14" },
    explanation: {
      en: "Need to borrow: 12 - 8 = 4, 4 - 3 = 1 → 14",
      hi: "उधार लेकर: 12 - 8 = 4, 4 - 3 = 1 → उत्तर 14"
    }
  },
  {
    question: {
      en: "Subtract: 61 - 47",
      hi: "61 में से 47 घटाएँ।"
    },
    options: [
      { en: "14", hi: "14" },
      { en: "13", hi: "13" },
      { en: "12", hi: "12" },
      { en: "15", hi: "15" }
    ],
    correct: { en: "14", hi: "14" },
    explanation: {
      en: "11 - 7 = 4 (after borrowing), 5 - 4 = 1 → 14",
      hi: "उधार लेकर: 11 - 7 = 4, 5 - 4 = 1 → उत्तर 14"
    }
  },
  {
    question: {
      en: "Find: 43 - 29",
      hi: "43 में से 29 घटाएँ।"
    },
    options: [
      { en: "13", hi: "13" },
      { en: "14", hi: "14" },
      { en: "15", hi: "15" },
      { en: "16", hi: "16" }
    ],
    correct: { en: "14", hi: "14" },
    explanation: {
      en: "13 - 9 = 4 (after borrowing), 3 - 2 = 1 → 14",
      hi: "उधार लेकर: 13 - 9 = 4, 3 - 2 = 1 → उत्तर 14"
    }
  },
  {
    question: {
      en: "What is 71 - 56?",
      hi: "71 में से 56 घटाएँ।"
    },
    options: [
      { en: "15", hi: "15" },
      { en: "16", hi: "16" },
      { en: "14", hi: "14" },
      { en: "13", hi: "13" }
    ],
    correct: { en: "15", hi: "15" },
    explanation: {
      en: "11 - 6 = 5 (after borrowing), 6 - 5 = 1 → 15",
      hi: "उधार लेकर: 11 - 6 = 5, 6 - 5 = 1 → उत्तर 15"
    }
  },
  {
    question: {
      en: "Subtract: 64 - 28",
      hi: "64 में से 28 घटाएँ।"
    },
    options: [
      { en: "36", hi: "36" },
      { en: "35", hi: "35" },
      { en: "34", hi: "34" },
      { en: "33", hi: "33" }
    ],
    correct: { en: "36", hi: "36" },
    explanation: {
      en: "14 - 8 = 6 (after borrowing), 5 - 2 = 3 → 36",
      hi: "उधार लेकर: 14 - 8 = 6, 5 - 2 = 3 → उत्तर 36"
    }
  },
  {
    question: {
      en: "What is 85 - 69?",
      hi: "85 में से 69 घटाएँ।"
    },
    options: [
      { en: "16", hi: "16" },
      { en: "15", hi: "15" },
      { en: "14", hi: "14" },
      { en: "17", hi: "17" }
    ],
    correct: { en: "16", hi: "16" },
    explanation: {
      en: "15 - 9 = 6 (after borrowing), 7 - 6 = 1 → 16",
      hi: "उधार लेकर: 15 - 9 = 6, 7 - 6 = 1 → उत्तर 16"
    }
  },
  {
    question: {
      en: "Solve: 92 - 58",
      hi: "92 में से 58 घटाएँ।"
    },
    options: [
      { en: "34", hi: "34" },
      { en: "35", hi: "35" },
      { en: "36", hi: "36" },
      { en: "33", hi: "33" }
    ],
    correct: { en: "34", hi: "34" },
    explanation: {
      en: "12 - 8 = 4, 8 - 5 = 3 → 34",
      hi: "उधार लेकर: 12 - 8 = 4, 8 - 5 = 3 → उत्तर 34"
    }
  },
  {
    question: {
      en: "What is 61 - 37?",
      hi: "61 में से 37 घटाएँ।"
    },
    options: [
      { en: "24", hi: "24" },
      { en: "25", hi: "25" },
      { en: "26", hi: "26" },
      { en: "23", hi: "23" }
    ],
    correct: { en: "24", hi: "24" },
    explanation: {
      en: "11 - 7 = 4, 5 - 3 = 2 → 24",
      hi: "उधार लेकर: 11 - 7 = 4, 5 - 3 = 2 → उत्तर 24"
    }
  },
  {
    question: {
      en: "Find: 53 - 29",
      hi: "53 में से 29 घटाएँ।"
    },
    options: [
      { en: "24", hi: "24" },
      { en: "23", hi: "23" },
      { en: "25", hi: "25" },
      { en: "26", hi: "26" }
    ],
    correct: { en: "24", hi: "24" },
    explanation: {
      en: "13 - 9 = 4, 4 - 2 = 2 → 24",
      hi: "उधार लेकर: 13 - 9 = 4, 4 - 2 = 2 → उत्तर 24"
    }
  },
  {
    question: {
      en: "What is 76 - 48?",
      hi: "76 में से 48 घटाएँ।"
    },
    options: [
      { en: "28", hi: "28" },
      { en: "29", hi: "29" },
      { en: "27", hi: "27" },
      { en: "26", hi: "26" }
    ],
    correct: { en: "28", hi: "28" },
    explanation: {
      en: "16 - 8 = 8, 6 - 4 = 2 → 28",
      hi: "उधार लेकर: 16 - 8 = 8, 6 - 4 = 2 → उत्तर 28"
    }
  }
];

export default { questions };
