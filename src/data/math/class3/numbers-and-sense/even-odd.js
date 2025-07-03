const questions = [
  {
    question: {
      en: "Which of the following is an even number?",
      hi: "निम्न में से कौन सी संख्या सम है?"
    },
    options: [
      { en: "6", hi: "6" },
      { en: "7", hi: "7" },
      { en: "9", hi: "9" },
      { en: "11", hi: "11" }
    ],
    correct: { en: "6", hi: "6" },
    explanation: {
      en: "Even numbers are divisible by 2. 6 is even.",
      hi: "सम संख्याएँ 2 से विभाजित होती हैं। 6 सम संख्या है।"
    }
  },
  {
    question: {
      en: "Which of the following is an odd number?",
      hi: "निम्न में से कौन सी संख्या विषम है?"
    },
    options: [
      { en: "12", hi: "12" },
      { en: "20", hi: "20" },
      { en: "13", hi: "13" },
      { en: "8", hi: "8" }
    ],
    correct: { en: "13", hi: "13" },
    explanation: {
      en: "Odd numbers are not divisible by 2. 13 is odd.",
      hi: "विषम संख्याएँ 2 से विभाजित नहीं होती हैं। 13 विषम संख्या है।"
    }
  },
  {
    question: {
      en: "Which number is even?",
      hi: "कौन सी संख्या सम है?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "3", hi: "3" },
      { en: "10", hi: "10" },
      { en: "9", hi: "9" }
    ],
    correct: { en: "10", hi: "10" },
    explanation: {
      en: "10 is divisible by 2, so it is even.",
      hi: "10, 2 से विभाजित होता है, इसलिए यह सम है।"
    }
  },
  {
    question: {
      en: "What is the next odd number after 17?",
      hi: "17 के बाद अगली विषम संख्या कौन सी है?"
    },
    options: [
      { en: "18", hi: "18" },
      { en: "20", hi: "20" },
      { en: "19", hi: "19" },
      { en: "16", hi: "16" }
    ],
    correct: { en: "19", hi: "19" },
    explanation: {
      en: "Odd numbers go like 17, 19, 21...",
      hi: "विषम संख्याएँ इस प्रकार होती हैं: 17, 19, 21..."
    }
  },
  {
    question: {
      en: "Which number is not even?",
      hi: "इनमें से कौन सी संख्या सम नहीं है?"
    },
    options: [
      { en: "18", hi: "18" },
      { en: "24", hi: "24" },
      { en: "15", hi: "15" },
      { en: "36", hi: "36" }
    ],
    correct: { en: "15", hi: "15" },
    explanation: {
      en: "15 is not divisible by 2. It is odd.",
      hi: "15, 2 से विभाजित नहीं होती, यह विषम है।"
    }
  },
  {
    question: {
      en: "Choose the odd number from the list:",
      hi: "सूची में से विषम संख्या चुनें:"
    },
    options: [
      { en: "28", hi: "28" },
      { en: "32", hi: "32" },
      { en: "41", hi: "41" },
      { en: "36", hi: "36" }
    ],
    correct: { en: "41", hi: "41" },
    explanation: {
      en: "41 is not divisible by 2. It is odd.",
      hi: "41, 2 से विभाजित नहीं होती है, यह विषम है।"
    }
  },
  {
    question: {
      en: "What is the next even number after 44?",
      hi: "44 के बाद अगली सम संख्या कौन सी है?"
    },
    options: [
      { en: "46", hi: "46" },
      { en: "45", hi: "45" },
      { en: "47", hi: "47" },
      { en: "49", hi: "49" }
    ],
    correct: { en: "46", hi: "46" },
    explanation: {
      en: "Even numbers go like 44, 46, 48...",
      hi: "सम संख्याएँ इस प्रकार होती हैं: 44, 46, 48..."
    }
  },
  {
    question: {
      en: "Which number is odd: 70, 80, 71, 60?",
      hi: "कौन सी संख्या विषम है: 70, 80, 71, 60?"
    },
    options: [
      { en: "70", hi: "70" },
      { en: "71", hi: "71" },
      { en: "80", hi: "80" },
      { en: "60", hi: "60" }
    ],
    correct: { en: "71", hi: "71" },
    explanation: {
      en: "71 is not divisible by 2, so it is odd.",
      hi: "71, 2 से विभाजित नहीं होती, यह विषम है।"
    }
  },
  {
    question: {
      en: "Which of these is an even number?",
      hi: "इनमें से कौन सम संख्या है?"
    },
    options: [
      { en: "99", hi: "99" },
      { en: "85", hi: "85" },
      { en: "62", hi: "62" },
      { en: "51", hi: "51" }
    ],
    correct: { en: "62", hi: "62" },
    explanation: {
      en: "62 is divisible by 2, so it is even.",
      hi: "62, 2 से विभाजित होती है, यह सम संख्या है।"
    }
  },
  {
    question: {
      en: "Which is an odd number?",
      hi: "कौन सी संख्या विषम है?"
    },
    options: [
      { en: "48", hi: "48" },
      { en: "50", hi: "50" },
      { en: "49", hi: "49" },
      { en: "52", hi: "52" }
    ],
    correct: { en: "49", hi: "49" },
    explanation: {
      en: "49 is not divisible by 2, so it is odd.",
      hi: "49, 2 से विभाजित नहीं होती, यह विषम संख्या है।"
    }
  }
];

export default { questions };
