const identities = [
  {
    id: 1,
    question: {
      en: "What is the expansion of (a + b)²?",
      hi: "(a + b)² का विस्तार क्या है?"
    },
    options: ["a² + b² + 2ab", "a² + b² - 2ab", "a² - b²", "a² - 2ab + b²"],
    answer: "a² + b² + 2ab",
    explanation: {
      en: "(a + b)² = a² + 2ab + b²",
      hi: "(a + b)² = a² + 2ab + b²"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the expansion of (a - b)²?",
      hi: "(a - b)² का विस्तार क्या है?"
    },
    options: ["a² + b² - 2ab", "a² + b² + 2ab", "a² - b²", "a² + 2ab + b²"],
    answer: "a² + b² - 2ab",
    explanation: {
      en: "(a - b)² = a² - 2ab + b²",
      hi: "(a - b)² = a² - 2ab + b²"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the expansion of (a + b)(a - b)?",
      hi: "(a + b)(a - b) का विस्तार क्या है?"
    },
    options: ["a² - b²", "a² + b²", "2ab", "a² + 2ab + b²"],
    answer: "a² - b²",
    explanation: {
      en: "(a + b)(a - b) = a² - b²",
      hi: "(a + b)(a - b) = a² - b²"
    }
  },
  {
    id: 4,
    question: {
      en: "Which identity is used to expand (x + 2)²?",
      hi: "(x + 2)² को विस्तार करने के लिए कौन-सी सर्वनाम का उपयोग किया जाता है?"
    },
    options: ["(a + b)²", "(a - b)²", "(a + b)(a - b)", "a² + ab + b²"],
    answer: "(a + b)²",
    explanation: {
      en: "Use identity: (x + 2)² = x² + 4x + 4",
      hi: "सर्वनाम: (x + 2)² = x² + 4x + 4"
    }
  },
  {
    id: 5,
    question: {
      en: "Find the value of (3 + 4)² using identity.",
      hi: "सर्वनाम का उपयोग करके (3 + 4)² का मान ज्ञात करें।"
    },
    options: ["49", "25", "36", "42"],
    answer: "49",
    explanation: {
      en: "(3 + 4)² = 3² + 2×3×4 + 4² = 9 + 24 + 16 = 49",
      hi: "3² + 2×3×4 + 4² = 9 + 24 + 16 = 49"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the simplified form of x² - 2ab + b²?",
      hi: "x² - 2ab + b² का सरलीकृत रूप क्या है?"
    },
    options: ["(x + b)²", "(x - b)²", "(x - b)(x + b)", "x² + b²"],
    answer: "(x - b)²",
    explanation: {
      en: "This matches the identity: (a - b)² = a² - 2ab + b²",
      hi: "यह सर्वनाम (a - b)² = a² - 2ab + b² के समान है"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these is equal to (2x + 3)²?",
      hi: "इनमें से कौन (2x + 3)² के बराबर है?"
    },
    options: ["4x² + 9 + 12x", "4x² + 6x + 9", "4x² + 12x + 9", "x² + 6x + 9"],
    answer: "4x² + 12x + 9",
    explanation: {
      en: "(2x + 3)² = 4x² + 12x + 9",
      hi: "(2x + 3)² = 4x² + 12x + 9"
    }
  },
  {
    id: 8,
    question: {
      en: "The expansion of (3a - 5b)² is:",
      hi: "(3a - 5b)² का विस्तार है:"
    },
    options: ["9a² + 25b² + 30ab", "9a² - 25b² - 30ab", "9a² - 30ab + 25b²", "9a² + 30ab + 25b²"],
    answer: "9a² - 30ab + 25b²",
    explanation: {
      en: "(3a - 5b)² = 9a² - 2×3a×5b + 25b² = 9a² - 30ab + 25b²",
      hi: "9a² - 2×3a×5b + 25b² = 9a² - 30ab + 25b²"
    }
  },
  {
    id: 9,
    question: {
      en: "Use identity to find: (a + b)(a - b) when a = 5, b = 2",
      hi: "जब a = 5, b = 2 हो तो (a + b)(a - b) का मान सर्वनाम से निकालें।"
    },
    options: ["21", "7", "25", "5"],
    answer: "21",
    explanation: {
      en: "(a + b)(a - b) = a² - b² = 25 - 4 = 21",
      hi: "a² - b² = 25 - 4 = 21"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the expansion of (a - b)² + (a + b)²?",
      hi: "(a - b)² + (a + b)² का विस्तार क्या है?"
    },
    options: ["2a² + 2b²", "2a² - 2b²", "a² + b²", "2ab + 2b²"],
    answer: "2a² + 2b²",
    explanation: {
      en: "(a - b)² + (a + b)² = a² - 2ab + b² + a² + 2ab + b² = 2a² + 2b²",
      hi: "(a - b)² + (a + b)² = a² - 2ab + b² + a² + 2ab + b² = 2a² + 2b²"
    }
  }
];

export default identities;
