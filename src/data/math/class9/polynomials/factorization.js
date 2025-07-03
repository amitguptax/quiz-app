const factorization = [
  {
    question: {
      en: "What is meant by factorisation of a polynomial?",
      hi: "किसी बहुपद के कारक रूपांतरण का क्या अर्थ है?"
    },
    options: {
      a: { en: "Writing it as a sum of terms", hi: "इसे पदों के योग के रूप में लिखना" },
      b: { en: "Writing it as a product of polynomials", hi: "इसे बहुपदों के गुणनफल के रूप में लिखना" },
      c: { en: "Dividing it by a monomial", hi: "इसे एकपद से भाग देना" },
      d: { en: "Solving the polynomial", hi: "बहुपद का हल निकालना" }
    },
    answer: "b",
    explanation: {
      en: "Factorisation means expressing the polynomial as a product of its factors."
    }
  },
  {
    question: {
      en: "Which method is commonly used for factorising quadratic polynomials?",
      hi: "द्विघात बहुपदों को कारक रूप में लिखने के लिए कौन सी विधि सामान्यतः उपयोग की जाती है?"
    },
    options: {
      a: { en: "Splitting the middle term", hi: "मध्य पद को विभाजित करना" },
      b: { en: "Long division", hi: "दीर्घ भाजन" },
      c: { en: "Trial and error", hi: "परीक्षण एवं त्रुटि" },
      d: { en: "Synthetic division", hi: "सिंथेटिक भाजन" }
    },
    answer: "a",
    explanation: {
      en: "Splitting the middle term is a common technique for factoring quadratics like ax² + bx + c."
    }
  },
  {
    question: {
      en: "Factorise: x² - 5x + 6",
      hi: "x² - 5x + 6 को कारक रूप में लिखें।"
    },
    options: {
      a: { en: "(x - 2)(x - 3)", hi: "(x - 2)(x - 3)" },
      b: { en: "(x + 2)(x - 3)", hi: "(x + 2)(x - 3)" },
      c: { en: "(x + 2)(x + 3)", hi: "(x + 2)(x + 3)" },
      d: { en: "(x - 1)(x - 6)", hi: "(x - 1)(x - 6)" }
    },
    answer: "a",
    explanation: {
      en: "x² - 5x + 6 = (x - 2)(x - 3)"
    }
  },
  {
    question: {
      en: "Factorise: x² + 7x",
      hi: "x² + 7x को कारक रूप में लिखें।"
    },
    options: {
      a: { en: "x(x + 7)", hi: "x(x + 7)" },
      b: { en: "x(x - 7)", hi: "x(x - 7)" },
      c: { en: "(x + 1)(x + 7)", hi: "(x + 1)(x + 7)" },
      d: { en: "(x - 1)(x - 7)", hi: "(x - 1)(x - 7)" }
    },
    answer: "a",
    explanation: {
      en: "Take common factor x: x² + 7x = x(x + 7)"
    }
  },
  {
    question: {
      en: "Which identity helps factorise a² - b²?",
      hi: "a² - b² को कारक रूप में लिखने में कौन सी पहचान उपयोगी होती है?"
    },
    options: {
      a: { en: "(a - b)(a + b)", hi: "(a - b)(a + b)" },
      b: { en: "(a + b)²", hi: "(a + b)²" },
      c: { en: "(a - b)²", hi: "(a - b)²" },
      d: { en: "(a + b + c)", hi: "(a + b + c)" }
    },
    answer: "a",
    explanation: {
      en: "a² - b² is a standard identity: (a - b)(a + b)"
    }
  },
  {
    question: {
      en: "What is the factorised form of x² - 9?",
      hi: "x² - 9 का कारक रूप क्या है?"
    },
    options: {
      a: { en: "(x + 3)(x - 3)", hi: "(x + 3)(x - 3)" },
      b: { en: "(x - 9)(x + 1)", hi: "(x - 9)(x + 1)" },
      c: { en: "(x - 1)(x + 9)", hi: "(x - 1)(x + 9)" },
      d: { en: "(x + 1)(x - 1)", hi: "(x + 1)(x - 1)" }
    },
    answer: "a",
    explanation: {
      en: "x² - 9 = x² - 3² = (x + 3)(x - 3)"
    }
  },
  {
    question: {
      en: "Which of the following is not factorisable over real numbers?",
      hi: "निम्न में से कौन वास्तविक संख्याओं पर कारक रूप में नहीं लिखा जा सकता?"
    },
    options: {
      a: { en: "x² + 1", hi: "x² + 1" },
      b: { en: "x² - 4", hi: "x² - 4" },
      c: { en: "x² - 1", hi: "x² - 1" },
      d: { en: "x² - x", hi: "x² - x" }
    },
    answer: "a",
    explanation: {
      en: "x² + 1 has no real roots, hence not factorisable over real numbers."
    }
  },
  {
    question: {
      en: "Factorise: x² + 5x + 6",
      hi: "x² + 5x + 6 को कारक रूप में लिखें।"
    },
    options: {
      a: { en: "(x + 2)(x + 3)", hi: "(x + 2)(x + 3)" },
      b: { en: "(x - 2)(x - 3)", hi: "(x - 2)(x - 3)" },
      c: { en: "(x - 1)(x - 6)", hi: "(x - 1)(x - 6)" },
      d: { en: "(x + 1)(x + 6)", hi: "(x + 1)(x + 6)" }
    },
    answer: "a",
    explanation: {
      en: "Middle term splitting: 2 + 3 = 5, 2×3 = 6 → (x + 2)(x + 3)"
    }
  },
  {
    question: {
      en: "Factorise: 2x² + 8x",
      hi: "2x² + 8x को कारक रूप में लिखें।"
    },
    options: {
      a: { en: "2x(x + 4)", hi: "2x(x + 4)" },
      b: { en: "x(x + 4)", hi: "x(x + 4)" },
      c: { en: "2(x + 4)", hi: "2(x + 4)" },
      d: { en: "(x + 2)(x + 2)", hi: "(x + 2)(x + 2)" }
    },
    answer: "a",
    explanation: {
      en: "Take common factor: 2x² + 8x = 2x(x + 4)"
    }
  },
  {
    question: {
      en: "Which expression is the factorised form of x² - x - 6?",
      hi: "x² - x - 6 का कारक रूप कौन सा है?"
    },
    options: {
      a: { en: "(x - 3)(x + 2)", hi: "(x - 3)(x + 2)" },
      b: { en: "(x + 3)(x + 2)", hi: "(x + 3)(x + 2)" },
      c: { en: "(x - 2)(x - 3)", hi: "(x - 2)(x - 3)" },
      d: { en: "(x + 1)(x + 6)", hi: "(x + 1)(x + 6)" }
    },
    answer: "a",
    explanation: {
      en: "Split -x into -3x + 2x: x² - x - 6 = (x - 3)(x + 2)"
    }
  }
];

export default factorization;
