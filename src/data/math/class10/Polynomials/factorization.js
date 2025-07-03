const questions = [
  {
    question: {
      en: "What is factorization of a polynomial?",
      hi: "बहुपद का गुणनखंडकरण क्या होता है?"
    },
    options: {
      a: { en: "Finding its zeros", hi: "इसके शून्यांक खोजना" },
      b: { en: "Multiplying polynomials", hi: "बहुपदों का गुणा करना" },
      c: { en: "Expressing it as a product of factors", hi: "इसे गुणनखंडों के रूप में व्यक्त करना" },
      d: { en: "Dividing it", hi: "इसे विभाजित करना" }
    },
    answer: "c",
    explanation: {
      en: "Factorization means expressing the polynomial as a product of simpler polynomials or factors.",
      hi: "गुणनखंडकरण का अर्थ है बहुपद को सरल बहुपदों या गुणनखंडों के गुणनफल के रूप में व्यक्त करना।"
    }
  },
  {
    question: {
      en: "What is the factorized form of x² - 9?",
      hi: "x² - 9 का गुणनखंडित रूप क्या है?"
    },
    options: {
      a: { en: "(x - 3)(x + 3)", hi: "(x - 3)(x + 3)" },
      b: { en: "(x + 9)(x - 1)", hi: "(x + 9)(x - 1)" },
      c: { en: "(x - 9)(x + 1)", hi: "(x - 9)(x + 1)" },
      d: { en: "(x + 3)(x + 3)", hi: "(x + 3)(x + 3)" }
    },
    answer: "a",
    explanation: {
      en: "x² - 9 is a difference of squares: (x - 3)(x + 3).",
      hi: "x² - 9 अंतर का वर्ग है: (x - 3)(x + 3)।"
    }
  },
  {
    question: {
      en: "Factorize x² + 5x + 6",
      hi: "x² + 5x + 6 का गुणनखंड कीजिए।"
    },
    options: {
      a: { en: "(x + 2)(x + 3)", hi: "(x + 2)(x + 3)" },
      b: { en: "(x - 2)(x - 3)", hi: "(x - 2)(x - 3)" },
      c: { en: "(x + 1)(x + 6)", hi: "(x + 1)(x + 6)" },
      d: { en: "(x - 1)(x - 6)", hi: "(x - 1)(x - 6)" }
    },
    answer: "a",
    explanation: {
      en: "The middle term splits into 2 and 3 such that 2 + 3 = 5 and 2×3 = 6.",
      hi: "मध्य पद 2 और 3 में विभाजित होता है जिससे 2 + 3 = 5 और 2×3 = 6।"
    }
  },
  {
    question: {
      en: "Which identity is used to factorize x² - 2xy + y²?",
      hi: "x² - 2xy + y² को गुणनखंडित करने के लिए कौन-सी पहचान का उपयोग होता है?"
    },
    options: {
      a: { en: "(x - y)²", hi: "(x - y)²" },
      b: { en: "(x + y)²", hi: "(x + y)²" },
      c: { en: "(x - y)(x + y)", hi: "(x - y)(x + y)" },
      d: { en: "(x + y)(x + y)", hi: "(x + y)(x + y)" }
    },
    answer: "a",
    explanation: {
      en: "x² - 2xy + y² is a perfect square identity: (x - y)².",
      hi: "x² - 2xy + y² पूर्ण वर्ग पहचान है: (x - y)²।"
    }
  },
  {
    question: {
      en: "What is the factorized form of x² - 2x - 35?",
      hi: "x² - 2x - 35 का गुणनखंड क्या है?"
    },
    options: {
      a: { en: "(x - 7)(x + 5)", hi: "(x - 7)(x + 5)" },
      b: { en: "(x + 7)(x - 5)", hi: "(x + 7)(x - 5)" },
      c: { en: "(x - 5)(x - 7)", hi: "(x - 5)(x - 7)" },
      d: { en: "(x + 5)(x + 7)", hi: "(x + 5)(x + 7)" }
    },
    answer: "a",
    explanation: {
      en: "Middle term splitting: -7 and +5. (-7) + 5 = -2 and (-7)×5 = -35.",
      hi: "मध्य पद को -7 और +5 में विभाजित करें। (-7) + 5 = -2 और (-7)×5 = -35।"
    }
  },
  {
    question: {
      en: "Factorize x² - 16",
      hi: "x² - 16 का गुणनखंड करें।"
    },
    options: {
      a: { en: "(x - 4)(x + 4)", hi: "(x - 4)(x + 4)" },
      b: { en: "(x + 4)(x + 4)", hi: "(x + 4)(x + 4)" },
      c: { en: "(x - 8)(x + 2)", hi: "(x - 8)(x + 2)" },
      d: { en: "(x - 2)(x + 8)", hi: "(x - 2)(x + 8)" }
    },
    answer: "a",
    explanation: {
      en: "x² - 16 is a difference of squares = (x - 4)(x + 4).",
      hi: "x² - 16 वर्गों का अंतर है = (x - 4)(x + 4)।"
    }
  },
  {
    question: {
      en: "Which of the following is a factor of x² + 7x + 10?",
      hi: "x² + 7x + 10 का कौन-सा एक गुणनखंड है?"
    },
    options: {
      a: { en: "(x + 5)", hi: "(x + 5)" },
      b: { en: "(x - 5)", hi: "(x - 5)" },
      c: { en: "(x + 2)", hi: "(x + 2)" },
      d: { en: "Both (x + 5) and (x + 2)", hi: "(x + 5) और (x + 2) दोनों" }
    },
    answer: "d",
    explanation: {
      en: "x² + 7x + 10 = (x + 2)(x + 5), so both are factors.",
      hi: "x² + 7x + 10 = (x + 2)(x + 5), इसलिए दोनों गुणनखंड हैं।"
    }
  },
  {
    question: {
      en: "Factorize: x² - 5x",
      hi: "x² - 5x का गुणनखंड करें।"
    },
    options: {
      a: { en: "x(x - 5)", hi: "x(x - 5)" },
      b: { en: "(x - 5)(x - 1)", hi: "(x - 5)(x - 1)" },
      c: { en: "(x + 5)(x - 1)", hi: "(x + 5)(x - 1)" },
      d: { en: "(x - 2)(x - 3)", hi: "(x - 2)(x - 3)" }
    },
    answer: "a",
    explanation: {
      en: "Take common factor x: x(x - 5).",
      hi: "x को सामान्य रूप में निकालें: x(x - 5)।"
    }
  },
  {
    question: {
      en: "Which method is used to factorize x² + bx + c?",
      hi: "x² + bx + c को गुणनखंड करने के लिए कौन-सी विधि प्रयुक्त होती है?"
    },
    options: {
      a: { en: "Splitting the middle term", hi: "मध्य पद को विभाजित करना" },
      b: { en: "Taking square root", hi: "वर्गमूल निकालना" },
      c: { en: "Using cube identity", hi: "घन पहचान का उपयोग करना" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "Splitting the middle term is a common method for quadratic trinomials.",
      hi: "द्विघात त्रिपदों के लिए मध्य पद विभाजन सामान्य विधि है।"
    }
  },
  {
    question: {
      en: "What is the factorized form of x³ - 27?",
      hi: "x³ - 27 का गुणनखंड क्या है?"
    },
    options: {
      a: { en: "(x - 3)(x² + 3x + 9)", hi: "(x - 3)(x² + 3x + 9)" },
      b: { en: "(x - 3)(x² - 3x + 9)", hi: "(x - 3)(x² - 3x + 9)" },
      c: { en: "(x + 3)(x² - 3x + 9)", hi: "(x + 3)(x² - 3x + 9)" },
      d: { en: "(x + 3)(x² + 3x + 9)", hi: "(x + 3)(x² + 3x + 9)" }
    },
    answer: "a",
    explanation: {
      en: "x³ - a³ = (x - a)(x² + ax + a²); here a = 3.",
      hi: "x³ - a³ = (x - a)(x² + ax + a²); यहाँ a = 3।"
    }
  }
];

export default { questions };
