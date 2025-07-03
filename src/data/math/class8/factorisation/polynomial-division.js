const polynomialDivision = [
  {
    id: 1,
    question: {
      en: "Divide: (x² + 3x + 2) ÷ (x + 1)",
      hi: "(x² + 3x + 2) ÷ (x + 1) को विभाजित करें।"
    },
    options: ["x + 2", "x + 1", "x² + 2", "x - 1"],
    answer: "x + 2",
    explanation: {
      en: "(x² + 3x + 2) = (x + 1)(x + 2), so quotient = x + 2",
      hi: "(x² + 3x + 2) = (x + 1)(x + 2), अतः भागफल = x + 2"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the remainder when (x² - 1) is divided by (x - 1)?",
      hi: "(x² - 1) को (x - 1) से विभाजित करने पर शेषफल क्या होगा?"
    },
    options: ["0", "1", "-2", "2"],
    answer: "0",
    explanation: {
      en: "(x² - 1) = (x - 1)(x + 1), hence divisible → remainder = 0",
      hi: "(x² - 1) = (x - 1)(x + 1), इसलिए पूर्ण रूप से विभाज्य → शेषफल = 0"
    }
  },
  {
    id: 3,
    question: {
      en: "Find quotient: (3x² + 6x) ÷ 3x",
      hi: "(3x² + 6x) ÷ 3x का भागफल ज्ञात करें।"
    },
    options: ["x + 2", "x² + 2", "3x + 6", "x + 3"],
    answer: "x + 2",
    explanation: {
      en: "Divide each term by 3x: 3x² ÷ 3x = x, 6x ÷ 3x = 2 ⇒ x + 2",
      hi: "प्रत्येक पद को 3x से विभाजित करें: x + 2"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the result of (4x² - 9) ÷ (x - 1)?",
      hi: "(4x² - 9) ÷ (x - 1) का परिणाम क्या है?"
    },
    options: ["Not exactly divisible", "x + 3", "4x + 9", "x² - 1"],
    answer: "Not exactly divisible",
    explanation: {
      en: "4x² - 9 is not divisible by (x - 1) without remainder",
      hi: "4x² - 9 को (x - 1) से पूर्णतः विभाजित नहीं किया जा सकता"
    }
  },
  {
    id: 5,
    question: {
      en: "Divide (x³ - 8) ÷ (x - 2)",
      hi: "(x³ - 8) ÷ (x - 2) को विभाजित करें।"
    },
    options: ["x² + 2x + 4", "x² - 2x + 4", "x - 2", "x² - 4x + 4"],
    answer: "x² + 2x + 4",
    explanation: {
      en: "This is a³ - b³ = (x - 2)(x² + 2x + 4)",
      hi: "यह a³ - b³ रूप है: (x - 2)(x² + 2x + 4)"
    }
  },
  {
    id: 6,
    question: {
      en: "If f(x) = x² - 5x + 6, what is f(x) ÷ (x - 3)?",
      hi: "यदि f(x) = x² - 5x + 6 है, तो f(x) ÷ (x - 3) क्या होगा?"
    },
    options: ["x - 2", "x + 2", "x - 3", "x + 3"],
    answer: "x - 2",
    explanation: {
      en: "x² - 5x + 6 = (x - 3)(x - 2), so quotient = x - 2",
      hi: "x² - 5x + 6 = (x - 3)(x - 2), अतः भागफल = x - 2"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the degree of the quotient in (x³ + 3x² + 3x + 1) ÷ (x + 1)?",
      hi: "(x³ + 3x² + 3x + 1) ÷ (x + 1) में भागफल की घात क्या है?"
    },
    options: ["2", "3", "1", "0"],
    answer: "2",
    explanation: {
      en: "The degree of quotient = degree of numerator - degree of denominator = 3 - 1 = 2",
      hi: "घात = 3 - 1 = 2"
    }
  },
  {
    id: 8,
    question: {
      en: "Divide: (x² + x - 6) ÷ (x - 2)",
      hi: "(x² + x - 6) ÷ (x - 2) को विभाजित करें।"
    },
    options: ["x + 3", "x - 3", "x + 2", "x² + 2"],
    answer: "x + 3",
    explanation: {
      en: "x² + x - 6 = (x - 2)(x + 3) ⇒ quotient = x + 3",
      hi: "x² + x - 6 = (x - 2)(x + 3) ⇒ भागफल = x + 3"
    }
  },
  {
    id: 9,
    question: {
      en: "If (2x² + 7x + 6) ÷ (x + 2), what is the quotient?",
      hi: "यदि (2x² + 7x + 6) ÷ (x + 2) हो, तो भागफल क्या होगा?"
    },
    options: ["2x + 3", "x + 2", "x + 3", "2x + 2"],
    answer: "2x + 3",
    explanation: {
      en: "2x² + 7x + 6 = (x + 2)(2x + 3)",
      hi: "2x² + 7x + 6 = (x + 2)(2x + 3)"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the remainder when x² + 4 is divided by (x - 2)?",
      hi: "x² + 4 को (x - 2) से विभाजित करने पर शेषफल क्या होगा?"
    },
    options: ["8", "4", "0", "None of these"],
    answer: "8",
    explanation: {
      en: "Put x = 2 → 2² + 4 = 8, hence remainder = 8",
      hi: "x = 2 रखने पर x² + 4 = 8 ⇒ शेषफल = 8"
    }
  }
];

export default polynomialDivision;
