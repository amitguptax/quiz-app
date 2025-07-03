const questions = [
  {
    question: {
      en: "What is 78 - 34?",
      hi: "78 में से 34 घटाएँ।"
    },
    options: [
      { en: "44", hi: "44" },
      { en: "43", hi: "43" },
      { en: "45", hi: "45" },
      { en: "46", hi: "46" }
    ],
    correct: { en: "44", hi: "44" },
    explanation: {
      en: "Subtract ones: 8 - 4 = 4, tens: 7 - 3 = 4 → 44",
      hi: "इकाई: 8 - 4 = 4, दसक: 7 - 3 = 4 → उत्तर 44"
    }
  },
  {
    question: {
      en: "Subtract: 65 - 21",
      hi: "65 में से 21 घटाएँ।"
    },
    options: [
      { en: "43", hi: "43" },
      { en: "44", hi: "44" },
      { en: "45", hi: "45" },
      { en: "46", hi: "46" }
    ],
    correct: { en: "44", hi: "44" },
    explanation: {
      en: "5 - 1 = 4, 6 - 2 = 4 → 44",
      hi: "इकाई: 5 - 1 = 4, दसक: 6 - 2 = 4 → उत्तर 44"
    }
  },
  {
    question: {
      en: "What is 50 - 30?",
      hi: "50 - 30 कितना होता है?"
    },
    options: [
      { en: "20", hi: "20" },
      { en: "25", hi: "25" },
      { en: "30", hi: "30" },
      { en: "15", hi: "15" }
    ],
    correct: { en: "20", hi: "20" },
    explanation: {
      en: "0 - 0 = 0, 5 - 3 = 2 → 20",
      hi: "इकाई: 0 - 0 = 0, दसक: 5 - 3 = 2 → उत्तर 20"
    }
  },
  {
    question: {
      en: "Find: 94 - 62",
      hi: "94 - 62 ज्ञात करें।"
    },
    options: [
      { en: "31", hi: "31" },
      { en: "32", hi: "32" },
      { en: "33", hi: "33" },
      { en: "34", hi: "34" }
    ],
    correct: { en: "32", hi: "32" },
    explanation: {
      en: "4 - 2 = 2, 9 - 6 = 3 → 32",
      hi: "इकाई: 4 - 2 = 2, दसक: 9 - 6 = 3 → उत्तर 32"
    }
  },
  {
    question: {
      en: "What is 81 - 40?",
      hi: "81 में से 40 घटाएँ।"
    },
    options: [
      { en: "41", hi: "41" },
      { en: "42", hi: "42" },
      { en: "43", hi: "43" },
      { en: "44", hi: "44" }
    ],
    correct: { en: "41", hi: "41" },
    explanation: {
      en: "1 - 0 = 1, 8 - 4 = 4 → 41",
      hi: "इकाई: 1 - 0 = 1, दसक: 8 - 4 = 4 → उत्तर 41"
    }
  },
  {
    question: {
      en: "Solve: 72 - 61",
      hi: "72 - 61 हल करें।"
    },
    options: [
      { en: "11", hi: "11" },
      { en: "12", hi: "12" },
      { en: "13", hi: "13" },
      { en: "14", hi: "14" }
    ],
    correct: { en: "11", hi: "11" },
    explanation: {
      en: "2 - 1 = 1, 7 - 6 = 1 → 11",
      hi: "इकाई: 2 - 1 = 1, दसक: 7 - 6 = 1 → उत्तर 11"
    }
  },
  {
    question: {
      en: "What is 66 - 44?",
      hi: "66 में से 44 घटाएँ।"
    },
    options: [
      { en: "21", hi: "21" },
      { en: "22", hi: "22" },
      { en: "23", hi: "23" },
      { en: "24", hi: "24" }
    ],
    correct: { en: "22", hi: "22" },
    explanation: {
      en: "6 - 4 = 2, 6 - 4 = 2 → 22",
      hi: "इकाई: 6 - 4 = 2, दसक: 6 - 4 = 2 → उत्तर 22"
    }
  },
  {
    question: {
      en: "Subtract: 77 - 55",
      hi: "77 में से 55 घटाएँ।"
    },
    options: [
      { en: "22", hi: "22" },
      { en: "23", hi: "23" },
      { en: "21", hi: "21" },
      { en: "20", hi: "20" }
    ],
    correct: { en: "22", hi: "22" },
    explanation: {
      en: "7 - 5 = 2, 7 - 5 = 2 → 22",
      hi: "इकाई: 7 - 5 = 2, दसक: 7 - 5 = 2 → उत्तर 22"
    }
  },
  {
    question: {
      en: "What is 93 - 52?",
      hi: "93 - 52 कितना होता है?"
    },
    options: [
      { en: "41", hi: "41" },
      { en: "42", hi: "42" },
      { en: "43", hi: "43" },
      { en: "44", hi: "44" }
    ],
    correct: { en: "41", hi: "41" },
    explanation: {
      en: "3 - 2 = 1, 9 - 5 = 4 → 41",
      hi: "इकाई: 3 - 2 = 1, दसक: 9 - 5 = 4 → उत्तर 41"
    }
  },
  {
    question: {
      en: "Find: 82 - 71",
      hi: "82 - 71 ज्ञात करें।"
    },
    options: [
      { en: "11", hi: "11" },
      { en: "12", hi: "12" },
      { en: "10", hi: "10" },
      { en: "13", hi: "13" }
    ],
    correct: { en: "11", hi: "11" },
    explanation: {
      en: "2 - 1 = 1, 8 - 7 = 1 → 11",
      hi: "इकाई: 2 - 1 = 1, दसक: 8 - 7 = 1 → उत्तर 11"
    }
  }
];

export default { questions };
