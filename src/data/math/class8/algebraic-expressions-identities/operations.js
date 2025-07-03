const operations = [
  {
    id: 1,
    question: {
      en: "What is the result of (3x + 5) + (4x - 2)?",
      hi: "(3x + 5) + (4x - 2) का परिणाम क्या है?"
    },
    options: ["7x + 3", "7x + 7", "x + 3", "x + 7"],
    answer: "7x + 3",
    explanation: {
      en: "Add like terms: 3x + 4x = 7x, 5 - 2 = 3.",
      hi: "सदृश पद जोड़ें: 3x + 4x = 7x, 5 - 2 = 3।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the result of (2a - 3b) - (a + b)?",
      hi: "(2a - 3b) - (a + b) का परिणाम क्या है?"
    },
    options: ["a - 4b", "a - 2b", "3a - 4b", "a + 4b"],
    answer: "a - 4b",
    explanation: {
      en: "2a - a = a, -3b - b = -4b",
      hi: "2a - a = a, -3b - b = -4b"
    }
  },
  {
    id: 3,
    question: {
      en: "Simplify: (x + 2)(x + 3)",
      hi: "सरलीकृत करें: (x + 2)(x + 3)"
    },
    options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 3x + 2", "x² + 2x + 3"],
    answer: "x² + 5x + 6",
    explanation: {
      en: "Use FOIL: x² + 3x + 2x + 6 = x² + 5x + 6",
      hi: "FOIL विधि: x² + 3x + 2x + 6 = x² + 5x + 6"
    }
  },
  {
    id: 4,
    question: {
      en: "Find the product of (x)(x + 4)",
      hi: "(x)(x + 4) का गुणनफल ज्ञात करें।"
    },
    options: ["x² + 4x", "x² + 4", "x + 4x", "x² - 4x"],
    answer: "x² + 4x",
    explanation: {
      en: "Multiply x with each term: x×x = x², x×4 = 4x",
      hi: "x को हर पद से गुणा करें: x×x = x², x×4 = 4x"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the simplified form of (2x² + 3x) - (x² - 2x)?",
      hi: "(2x² + 3x) - (x² - 2x) का सरलीकृत रूप क्या है?"
    },
    options: ["x² + 5x", "x² + x", "3x² + x", "x² + x + 2x"],
    answer: "x² + 5x",
    explanation: {
      en: "2x² - x² = x², 3x - (-2x) = 3x + 2x = 5x",
      hi: "2x² - x² = x², 3x - (-2x) = 3x + 2x = 5x"
    }
  },
  {
    id: 6,
    question: {
      en: "Multiply: (x - 2)(x - 3)",
      hi: "गुणा करें: (x - 2)(x - 3)"
    },
    options: ["x² - 5x + 6", "x² + 5x + 6", "x² - x - 6", "x² + x + 6"],
    answer: "x² - 5x + 6",
    explanation: {
      en: "x² - 3x - 2x + 6 = x² - 5x + 6",
      hi: "x² - 3x - 2x + 6 = x² - 5x + 6"
    }
  },
  {
    id: 7,
    question: {
      en: "Subtract: (5x² + 2x - 1) - (2x² + 3x - 4)",
      hi: "घटाएं: (5x² + 2x - 1) - (2x² + 3x - 4)"
    },
    options: ["3x² - x + 3", "7x² - x + 3", "3x² + x - 3", "3x² - x - 3"],
    answer: "3x² - x + 3",
    explanation: {
      en: "5x² - 2x² = 3x², 2x - 3x = -x, -1 - (-4) = -1 + 4 = 3",
      hi: "5x² - 2x² = 3x², 2x - 3x = -x, -1 - (-4) = -1 + 4 = 3"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the result of (a + b)(a - b)?",
      hi: "(a + b)(a - b) का परिणाम क्या है?"
    },
    options: ["a² - b²", "a² + b²", "ab + ba", "2ab"],
    answer: "a² - b²",
    explanation: {
      en: "It is a standard identity: (a + b)(a - b) = a² - b²",
      hi: "यह एक मानक सर्वनाम है: (a + b)(a - b) = a² - b²"
    }
  },
  {
    id: 9,
    question: {
      en: "Add: (3x² - 4x + 2) + (x² + x - 5)",
      hi: "जोड़ें: (3x² - 4x + 2) + (x² + x - 5)"
    },
    options: ["4x² - 3x - 3", "4x² - 3x + 3", "2x² - 5x + 7", "4x² - 3x - 7"],
    answer: "4x² - 3x - 3",
    explanation: {
      en: "3x² + x² = 4x², -4x + x = -3x, 2 - 5 = -3",
      hi: "3x² + x² = 4x², -4x + x = -3x, 2 - 5 = -3"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the result of (2x)(-3x)?",
      hi: "(2x)(-3x) का परिणाम क्या है?"
    },
    options: ["-6x²", "6x²", "-6x", "-5x²"],
    answer: "-6x²",
    explanation: {
      en: "2 × -3 = -6, x × x = x², so total is -6x²",
      hi: "2 × -3 = -6, x × x = x², कुल परिणाम: -6x²"
    }
  }
];

export default operations;
