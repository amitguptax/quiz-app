const definitions = [
  {
    id: 1,
    question: {
      en: "Which of the following is a term in the expression 3x + 5?",
      hi: "3x + 5 में से कौन-सा एक पद (term) है?"
    },
    options: ["3", "x", "3x", "5x"],
    answer: "3x",
    explanation: {
      en: "'3x' is a term consisting of coefficient 3 and variable x.",
      hi: "'3x' एक पद है जिसमें 3 गुणांक और x चर शामिल है।"
    }
  },
  {
    id: 2,
    question: {
      en: "How many terms are there in the expression 4a + 7b - 2?",
      hi: "4a + 7b - 2 अभिव्यक्ति में कुल कितने पद (terms) हैं?"
    },
    options: ["2", "3", "4", "1"],
    answer: "3",
    explanation: {
      en: "The expression has 3 terms: 4a, 7b, and -2.",
      hi: "इस अभिव्यक्ति में 3 पद हैं: 4a, 7b और -2।"
    }
  },
  {
    id: 3,
    question: {
      en: "In the term -5xy, what is the coefficient?",
      hi: "-5xy पद में गुणांक (coefficient) क्या है?"
    },
    options: ["-5", "x", "xy", "-xy"],
    answer: "-5",
    explanation: {
      en: "The numerical part multiplying variables is called the coefficient.",
      hi: "चर को गुणा करने वाला संख्यात्मक भाग गुणांक कहलाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is a monomial?",
      hi: "निम्न में से कौन एक एकपदी (monomial) है?"
    },
    options: ["x + y", "3xy", "4x - 5", "x² + 1"],
    answer: "3xy",
    explanation: {
      en: "A monomial is an expression with only one term. 3xy is one term.",
      hi: "एकपदी में केवल एक पद होता है। 3xy एक पद है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is the coefficient of x² in the expression 7x² - 3x + 1?",
      hi: "7x² - 3x + 1 में x² का गुणांक क्या है?"
    },
    options: ["7", "-3", "1", "x"],
    answer: "7",
    explanation: {
      en: "Coefficient of x² is the number multiplying it, which is 7.",
      hi: "x² का गुणांक वह संख्या होती है जो उससे गुणा की गई होती है, यानी 7।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the expression 2x² + 3x - 4 is the constant term?",
      hi: "2x² + 3x - 4 अभिव्यक्ति में स्थिर पद (constant term) कौन-सा है?"
    },
    options: ["2x²", "3x", "-4", "x"],
    answer: "-4",
    explanation: {
      en: "The term without any variable is called the constant term.",
      hi: "जिस पद में कोई चर नहीं होता, वह स्थिर पद कहलाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which expression has three terms?",
      hi: "किस अभिव्यक्ति में तीन पद हैं?"
    },
    options: ["4x", "x² + 5", "2x + y + 7", "5a - 3a"],
    answer: "2x + y + 7",
    explanation: {
      en: "2x, y, and 7 are three separate terms.",
      hi: "2x, y और 7 तीन अलग-अलग पद हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "In the term -6ab, what are the factors?",
      hi: "-6ab पद में कौन-कौन से गुणक (factors) हैं?"
    },
    options: ["-6 and ab", "-6 and a", "a and b", "Only -6"],
    answer: "-6 and ab",
    explanation: {
      en: "The term -6ab can be split into -6 (numerical coefficient) and ab (variables).",
      hi: "-6ab को -6 (गुणांक) और ab (चर) में विभाजित किया जा सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "In which expression is 3 the coefficient?",
      hi: "किस अभिव्यक्ति में 3 गुणांक है?"
    },
    options: ["3x", "x³ + 3", "2x + 1", "x - 3"],
    answer: "3x",
    explanation: {
      en: "In 3x, 3 is the coefficient of x.",
      hi: "3x में 3, x का गुणांक है।"
    }
  },
  {
    id: 10,
    question: {
      en: "How many terms are there in 6x² + 3xy - 2y?",
      hi: "6x² + 3xy - 2y में कितने पद हैं?"
    },
    options: ["2", "3", "4", "1"],
    answer: "3",
    explanation: {
      en: "The expression has 3 terms: 6x², 3xy, and -2y.",
      hi: "इस अभिव्यक्ति में 3 पद हैं: 6x², 3xy और -2y।"
    }
  }
];

export default definitions;
