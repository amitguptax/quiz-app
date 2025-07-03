const factorisationBasics = [
  {
    id: 1,
    question: {
      en: "What is the factorised form of x² + 5x?",
      hi: "x² + 5x का गुणांकीय रूप क्या है?"
    },
    options: ["x(x + 5)", "(x + 5)²", "x²(1 + 5)", "x + 5"],
    answer: "x(x + 5)",
    explanation: {
      en: "x is common in both terms: x² + 5x = x(x + 5)",
      hi: "दोनों पदों में x सामान्य है: x² + 5x = x(x + 5)"
    }
  },
  {
    id: 2,
    question: {
      en: "Factorise: x² - 9",
      hi: "x² - 9 को गुणांकों में विभाजित कीजिए।"
    },
    options: ["(x - 9)(x + 1)", "(x - 3)(x + 3)", "(x - 9)²", "(x + 9)(x - 1)"],
    answer: "(x - 3)(x + 3)",
    explanation: {
      en: "This is a difference of squares: x² - 9 = (x - 3)(x + 3)",
      hi: "यह वर्गों का अंतर है: x² - 9 = (x - 3)(x + 3)"
    }
  },
  {
    id: 3,
    question: {
      en: "Factorise: 2x² + 6x",
      hi: "2x² + 6x को गुणांकों में विभाजित करें।"
    },
    options: ["2x(x + 3)", "x(2x + 6)", "2(x² + 3x)", "None"],
    answer: "2x(x + 3)",
    explanation: {
      en: "2x is common: 2x² + 6x = 2x(x + 3)",
      hi: "2x सामान्य है: 2x² + 6x = 2x(x + 3)"
    }
  },
  {
    id: 4,
    question: {
      en: "What is common in 4x² and 12x?",
      hi: "4x² और 12x में सामान्य गुणक क्या है?"
    },
    options: ["4x", "x", "4", "12x"],
    answer: "4x",
    explanation: {
      en: "GCF of 4 and 12 is 4, and both have x → 4x",
      hi: "4 और 12 का महत्तम समापवर्त्य 4 है और दोनों में x है → 4x"
    }
  },
  {
    id: 5,
    question: {
      en: "Factorise: x² + 6x + 9",
      hi: "x² + 6x + 9 को गुणांकों में विभाजित करें।"
    },
    options: ["(x + 3)²", "(x + 9)(x - 3)", "(x - 3)²", "(x + 1)(x + 9)"],
    answer: "(x + 3)²",
    explanation: {
      en: "Perfect square trinomial: x² + 6x + 9 = (x + 3)²",
      hi: "पूर्ण वर्ग त्रिपद: x² + 6x + 9 = (x + 3)²"
    }
  },
  {
    id: 6,
    question: {
      en: "Factorise: a² - b²",
      hi: "a² - b² को गुणांकों में विभाजित करें।"
    },
    options: ["(a - b)(a + b)", "(a - b)²", "(a + b)²", "ab(a + b)"],
    answer: "(a - b)(a + b)",
    explanation: {
      en: "Difference of squares: a² - b² = (a - b)(a + b)",
      hi: "वर्गों का अंतर: a² - b² = (a - b)(a + b)"
    }
  },
  {
    id: 7,
    question: {
      en: "Factorise: 3x² + 12x",
      hi: "3x² + 12x को गुणांकों में विभाजित करें।"
    },
    options: ["3x(x + 4)", "x(3x + 12)", "3(x² + 4x)", "None of these"],
    answer: "3x(x + 4)",
    explanation: {
      en: "3x common: 3x² + 12x = 3x(x + 4)",
      hi: "3x सामान्य: 3x² + 12x = 3x(x + 4)"
    }
  },
  {
    id: 8,
    question: {
      en: "Factorise: x² - 16",
      hi: "x² - 16 को गुणांकों में विभाजित करें।"
    },
    options: ["(x + 4)(x - 4)", "(x - 4)²", "(x + 8)(x - 2)", "(x - 2)(x - 8)"],
    answer: "(x + 4)(x - 4)",
    explanation: {
      en: "x² - 16 = (x + 4)(x - 4) [difference of squares]",
      hi: "x² - 16 = (x + 4)(x - 4) [वर्गों का अंतर]"
    }
  },
  {
    id: 9,
    question: {
      en: "Factorise: 5x² - 20x",
      hi: "5x² - 20x को गुणांकों में विभाजित करें।"
    },
    options: ["5x(x - 4)", "x(5x - 20)", "5(x² - 4x)", "None"],
    answer: "5x(x - 4)",
    explanation: {
      en: "5x common: 5x² - 20x = 5x(x - 4)",
      hi: "5x सामान्य: 5x² - 20x = 5x(x - 4)"
    }
  },
  {
    id: 10,
    question: {
      en: "Which method is used to factorise quadratic trinomials?",
      hi: "द्विघात त्रिपदों को गुणांकों में विभाजित करने के लिए कौन-सी विधि उपयोग होती है?"
    },
    options: [
      "Middle term splitting",
      "Cross multiplication",
      "Laws of exponents",
      "Direct proportion"
    ],
    answer: "Middle term splitting",
    explanation: {
      en: "Middle term splitting is used to factor quadratic expressions like ax² + bx + c.",
      hi: "मध्य पद विधि ax² + bx + c को गुणांकों में विभाजित करने के लिए उपयोगी है।"
    }
  }
];

export default factorisationBasics;
