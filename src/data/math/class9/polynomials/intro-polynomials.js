const introPolynomials = [
  {
    id: 1,
    question: {
      en: "What is a polynomial?",
      hi: "बहुपद क्या है?"
    },
    options: [
      "An expression with only constants",
      "An expression with variables and powers that are whole numbers",
      "An equation with equal sign",
      "An expression with square roots"
    ],
    answer: "An expression with variables and powers that are whole numbers",
    explanation: {
      en: "A polynomial consists of variables and coefficients, using only addition, subtraction, multiplication, and non-negative integer exponents.",
      hi: "बहुपद में चर और गुणांक होते हैं, जिनमें केवल जोड़, घटाव, गुणा और पूर्णांक घात होती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a polynomial?",
      hi: "निम्न में से कौन एक बहुपद है?"
    },
    options: ["2x^2 + 3x + 1", "x^-1 + 2", "√x + 1", "1/x + 5"],
    answer: "2x^2 + 3x + 1",
    explanation: {
      en: "Only the first option has whole number powers and no division by variable or roots.",
      hi: "केवल पहला विकल्प पूर्णांक घात वाला है और इसमें चर के साथ भाग या मूल नहीं है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Degree of the polynomial 4x^3 + 3x^2 + x + 5 is:",
      hi: "बहुपद 4x^3 + 3x^2 + x + 5 की घात क्या है?"
    },
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: {
      en: "The highest power of the variable is 3.",
      hi: "चर की उच्चतम घात 3 है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which term is the constant in 7x^2 + 5x + 9?",
      hi: "7x^2 + 5x + 9 में स्थिर पद कौन सा है?"
    },
    options: ["7x^2", "5x", "9", "None"],
    answer: "9",
    explanation: {
      en: "The term without a variable is called the constant term.",
      hi: "जिस पद में कोई चर नहीं होता, वह स्थिर पद कहलाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "How many terms are there in the polynomial x^3 + 2x^2 + 3x + 4?",
      hi: "बहुपद x^3 + 2x^2 + 3x + 4 में कितने पद हैं?"
    },
    options: ["2", "3", "4", "5"],
    answer: "4",
    explanation: {
      en: "There are 4 terms separated by + sign.",
      hi: "+ चिन्ह द्वारा विभाजित 4 पद हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "A polynomial of degree 1 is called:",
      hi: "घात 1 वाले बहुपद को क्या कहते हैं?"
    },
    options: ["Quadratic", "Constant", "Linear", "Cubic"],
    answer: "Linear",
    explanation: {
      en: "A polynomial of degree 1 is a linear polynomial.",
      hi: "घात 1 वाला बहुपद एक रैखिक बहुपद होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is NOT a polynomial?",
      hi: "निम्न में से कौन एक बहुपद नहीं है?"
    },
    options: ["x^2 + 2x + 1", "1/x + x", "x^3 - x", "x + 7"],
    answer: "1/x + x",
    explanation: {
      en: "Polynomials do not have variables in the denominator.",
      hi: "बहुपदों में चर हर में नहीं होते।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the degree of the polynomial 5?",
      hi: "बहुपद 5 की घात क्या है?"
    },
    options: ["0", "1", "5", "Undefined"],
    answer: "0",
    explanation: {
      en: "A constant polynomial has degree 0.",
      hi: "स्थिर बहुपद की घात 0 होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which polynomial has 2 terms?",
      hi: "किस बहुपद में 2 पद हैं?"
    },
    options: ["x^2 + x + 1", "x + 5", "3x^2 - 4x", "7"],
    answer: "3x^2 - 4x",
    explanation: {
      en: "It has two terms: 3x² and -4x.",
      hi: "इसमें दो पद हैं: 3x² और -4x।"
    }
  },
  {
    id: 10,
    question: {
      en: "Identify the binomial from the list:",
      hi: "सूची में द्विपद की पहचान करें:" 
    },
    options: ["x^2 + 3x + 2", "x + 1", "x", "x^3 - x^2 + x"],
    answer: "x + 1",
    explanation: {
      en: "A binomial has exactly two terms.",
      hi: "द्विपद में ठीक दो पद होते हैं।"
    }
  }
];

export default introPolynomials;
