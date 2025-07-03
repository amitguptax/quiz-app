const algebraicIdentities = [
  {
    question: {
      en: "Which of the following is the identity for (a + b)²?",
      hi: "(a + b)² के लिए निम्नलिखित में से कौन सी समता है?"
    },
    options: {
      a: { en: "a² + b²", hi: "a² + b²" },
      b: { en: "a² + 2ab + b²", hi: "a² + 2ab + b²" },
      c: { en: "a² - 2ab + b²", hi: "a² - 2ab + b²" },
      d: { en: "a² + ab + b²", hi: "a² + ab + b²" }
    },
    answer: "b",
    explanation: {
      en: "(a + b)² = a² + 2ab + b², a standard algebraic identity."
    }
  },
  {
    question: {
      en: "What is the expansion of (a - b)²?",
      hi: "(a - b)² का विस्तार क्या है?"
    },
    options: {
      a: { en: "a² + 2ab + b²", hi: "a² + 2ab + b²" },
      b: { en: "a² - 2ab + b²", hi: "a² - 2ab + b²" },
      c: { en: "a² + b²", hi: "a² + b²" },
      d: { en: "a² - b²", hi: "a² - b²" }
    },
    answer: "b",
    explanation: {
      en: "(a - b)² = a² - 2ab + b² is a key identity."
    }
  },
  {
    question: {
      en: "What is (a + b)(a - b) equal to?",
      hi: "(a + b)(a - b) किसके बराबर होता है?"
    },
    options: {
      a: { en: "a² + b²", hi: "a² + b²" },
      b: { en: "a² - b²", hi: "a² - b²" },
      c: { en: "a² + ab + b²", hi: "a² + ab + b²" },
      d: { en: "a² - 2ab + b²", hi: "a² - 2ab + b²" }
    },
    answer: "b",
    explanation: {
      en: "(a + b)(a - b) = a² - b², known as the difference of squares."
    }
  },
  {
    question: {
      en: "Which identity is used in: x² + 6x + 9?",
      hi: "x² + 6x + 9 में कौन सी समता लागू होती है?"
    },
    options: {
      a: { en: "(x + 3)²", hi: "(x + 3)²" },
      b: { en: "(x - 3)²", hi: "(x - 3)²" },
      c: { en: "(x + 6)²", hi: "(x + 6)²" },
      d: { en: "(x + 2)(x + 4)", hi: "(x + 2)(x + 4)" }
    },
    answer: "a",
    explanation: {
      en: "x² + 6x + 9 = (x + 3)² using identity: a² + 2ab + b²."
    }
  },
  {
    question: {
      en: "Which identity helps to expand (x + y + z)²?",
      hi: "(x + y + z)² को विस्तार करने में कौन सी समता सहायक है?"
    },
    options: {
      a: { en: "x² + y² + z² + 2xy + 2yz + 2zx", hi: "x² + y² + z² + 2xy + 2yz + 2zx" },
      b: { en: "x² + y² + z²", hi: "x² + y² + z²" },
      c: { en: "x² + 2y² + z²", hi: "x² + 2y² + z²" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "(x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx"
    }
  },
  {
    question: {
      en: "Simplify using identity: (2x + 5)²",
      hi: "समता का उपयोग करके सरल करें: (2x + 5)²"
    },
    options: {
      a: { en: "4x² + 20x + 25", hi: "4x² + 20x + 25" },
      b: { en: "4x² + 10x + 25", hi: "4x² + 10x + 25" },
      c: { en: "2x² + 10x + 25", hi: "2x² + 10x + 25" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "(2x + 5)² = (2x)² + 2×2x×5 + 5² = 4x² + 20x + 25"
    }
  },
  {
    question: {
      en: "Find (a - b)² if a = 5, b = 2",
      hi: "यदि a = 5, b = 2 हो, तो (a - b)² का मान क्या है?"
    },
    options: {
      a: { en: "9", hi: "9" },
      b: { en: "7", hi: "7" },
      c: { en: "25", hi: "25" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "(5 - 2)² = 3² = 9"
    }
  },
  {
    question: {
      en: "Which identity is used in: (3a - 4b)²?",
      hi: "(3a - 4b)² में कौन सी समता उपयोग होती है?"
    },
    options: {
      a: { en: "a² - 2ab + b²", hi: "a² - 2ab + b²" },
      b: { en: "(a - b)²", hi: "(a - b)²" },
      c: { en: "a² + 2ab + b²", hi: "a² + 2ab + b²" },
      d: { en: "(3a)² - 2×3a×4b + (4b)²", hi: "(3a)² - 2×3a×4b + (4b)²" }
    },
    answer: "d",
    explanation: {
      en: "Use (a - b)² = a² - 2ab + b² with a = 3a and b = 4b"
    }
  },
  {
    question: {
      en: "What is the identity for a³ + b³?",
      hi: "a³ + b³ के लिए समता क्या है?"
    },
    options: {
      a: { en: "(a + b)(a² - ab + b²)", hi: "(a + b)(a² - ab + b²)" },
      b: { en: "(a + b)²", hi: "(a + b)²" },
      c: { en: "a² + ab + b²", hi: "a² + ab + b²" },
      d: { en: "(a - b)(a² + ab + b²)", hi: "(a - b)(a² + ab + b²)" }
    },
    answer: "a",
    explanation: {
      en: "a³ + b³ = (a + b)(a² - ab + b²), known as sum of cubes."
    }
  },
  {
    question: {
      en: "Use identity to expand (a + b)³",
      hi: "समता का उपयोग करके (a + b)³ को विस्तारित करें।"
    },
    options: {
      a: { en: "a³ + 3a²b + 3ab² + b³", hi: "a³ + 3a²b + 3ab² + b³" },
      b: { en: "a³ + b³", hi: "a³ + b³" },
      c: { en: "a² + 2ab + b²", hi: "a² + 2ab + b²" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "(a + b)³ = a³ + 3a²b + 3ab² + b³"
    }
  }
];

export default algebraicIdentities;
