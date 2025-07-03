const questions = [
  {
    question: {
      en: "What is 47 + 26?",
      hi: "47 + 26 कितना होता है?"
    },
    options: [
      { en: "73", hi: "73" },
      { en: "74", hi: "74" },
      { en: "75", hi: "75" },
      { en: "76", hi: "76" }
    ],
    correct: { en: "73", hi: "73" },
    explanation: {
      en: "7 + 6 = 13 → write 3, carry 1. Then 4 + 2 + 1 = 7 → 73",
      hi: "7 + 6 = 13 → 3 लिखें, 1 ऊपर। फिर 4 + 2 + 1 = 7 → उत्तर 73"
    }
  },
  {
    question: {
      en: "What is 58 + 35?",
      hi: "58 + 35 कितना होता है?"
    },
    options: [
      { en: "93", hi: "93" },
      { en: "92", hi: "92" },
      { en: "91", hi: "91" },
      { en: "94", hi: "94" }
    ],
    correct: { en: "93", hi: "93" },
    explanation: {
      en: "8 + 5 = 13 → 3 and carry 1. 5 + 3 + 1 = 9 → 93",
      hi: "8 + 5 = 13 → 3 और 1 ऊपर। फिर 5 + 3 + 1 = 9 → उत्तर 93"
    }
  },
  {
    question: {
      en: "Add: 29 + 47",
      hi: "29 + 47 जोड़ें।"
    },
    options: [
      { en: "76", hi: "76" },
      { en: "75", hi: "75" },
      { en: "74", hi: "74" },
      { en: "73", hi: "73" }
    ],
    correct: { en: "76", hi: "76" },
    explanation: {
      en: "9 + 7 = 16 → 6, carry 1. Then 2 + 4 + 1 = 7 → 76",
      hi: "9 + 7 = 16 → 6, और 1 ऊपर। फिर 2 + 4 + 1 = 7 → उत्तर 76"
    }
  },
  {
    question: {
      en: "What is 38 + 46?",
      hi: "38 + 46 कितना होता है?"
    },
    options: [
      { en: "84", hi: "84" },
      { en: "85", hi: "85" },
      { en: "86", hi: "86" },
      { en: "83", hi: "83" }
    ],
    correct: { en: "84", hi: "84" },
    explanation: {
      en: "8 + 6 = 14 → 4, carry 1. Then 3 + 4 + 1 = 8 → 84",
      hi: "8 + 6 = 14 → 4 लिखें, 1 ऊपर। 3 + 4 + 1 = 8 → उत्तर 84"
    }
  },
  {
    question: {
      en: "Find the sum: 66 + 27",
      hi: "योग ज्ञात करें: 66 + 27"
    },
    options: [
      { en: "93", hi: "93" },
      { en: "92", hi: "92" },
      { en: "91", hi: "91" },
      { en: "94", hi: "94" }
    ],
    correct: { en: "93", hi: "93" },
    explanation: {
      en: "6 + 7 = 13 → 3, carry 1. Then 6 + 2 + 1 = 9 → 93",
      hi: "6 + 7 = 13 → 3 लिखें, 1 ऊपर। फिर 6 + 2 + 1 = 9 → उत्तर 93"
    }
  },
  {
    question: {
      en: "Add: 57 + 38",
      hi: "57 + 38 जोड़ें।"
    },
    options: [
      { en: "95", hi: "95" },
      { en: "96", hi: "96" },
      { en: "94", hi: "94" },
      { en: "97", hi: "97" }
    ],
    correct: { en: "95", hi: "95" },
    explanation: {
      en: "7 + 8 = 15 → 5, carry 1. Then 5 + 3 + 1 = 9 → 95",
      hi: "7 + 8 = 15 → 5, और 1 ऊपर। फिर 5 + 3 + 1 = 9 → उत्तर 95"
    }
  },
  {
    question: {
      en: "What is 64 + 28?",
      hi: "64 + 28 कितना होता है?"
    },
    options: [
      { en: "92", hi: "92" },
      { en: "91", hi: "91" },
      { en: "90", hi: "90" },
      { en: "89", hi: "89" }
    ],
    correct: { en: "92", hi: "92" },
    explanation: {
      en: "4 + 8 = 12 → 2, carry 1. Then 6 + 2 + 1 = 9 → 92",
      hi: "4 + 8 = 12 → 2, और 1 ऊपर। 6 + 2 + 1 = 9 → उत्तर 92"
    }
  },
  {
    question: {
      en: "Add: 76 + 17",
      hi: "76 + 17 जोड़ें।"
    },
    options: [
      { en: "93", hi: "93" },
      { en: "92", hi: "92" },
      { en: "91", hi: "91" },
      { en: "90", hi: "90" }
    ],
    correct: { en: "93", hi: "93" },
    explanation: {
      en: "6 + 7 = 13 → 3, carry 1. Then 7 + 1 + 1 = 9 → 93",
      hi: "6 + 7 = 13 → 3, और 1 ऊपर। फिर 7 + 1 + 1 = 9 → उत्तर 93"
    }
  },
  {
    question: {
      en: "Find: 84 + 19",
      hi: "84 + 19 ज्ञात करें।"
    },
    options: [
      { en: "103", hi: "103" },
      { en: "102", hi: "102" },
      { en: "101", hi: "101" },
      { en: "100", hi: "100" }
    ],
    correct: { en: "103", hi: "103" },
    explanation: {
      en: "4 + 9 = 13 → 3, carry 1. 8 + 1 + 1 = 10 → 103",
      hi: "4 + 9 = 13 → 3, और 1 ऊपर। फिर 8 + 1 + 1 = 10 → उत्तर 103"
    }
  },
  {
    question: {
      en: "What is 39 + 58?",
      hi: "39 + 58 कितना होता है?"
    },
    options: [
      { en: "97", hi: "97" },
      { en: "96", hi: "96" },
      { en: "98", hi: "98" },
      { en: "95", hi: "95" }
    ],
    correct: { en: "97", hi: "97" },
    explanation: {
      en: "9 + 8 = 17 → 7, carry 1. Then 3 + 5 + 1 = 9 → 97",
      hi: "9 + 8 = 17 → 7, और 1 ऊपर। 3 + 5 + 1 = 9 → उत्तर 97"
    }
  }
];

export default { questions };
