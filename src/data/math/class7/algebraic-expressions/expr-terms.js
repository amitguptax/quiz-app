const exprTerms = [
  {
    id: 1,
    question: {
      en: "What is a term in an algebraic expression?",
      hi: "बीजगणितीय अभिव्यक्ति में 'पद' क्या होता है?"
    },
    options: [
      "Only numbers",
      "Only variables",
      "Product of numbers and variables",
      "Only operators"
    ],
    answer: "Product of numbers and variables",
    explanation: {
      en: "A term is a product of constants and variables in an algebraic expression.",
      hi: "बीजगणितीय अभिव्यक्ति में पद संख्याओं और चरों का गुणनफल होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "How many terms are there in the expression 3x + 4y - 7?",
      hi: "अभिव्यक्ति 3x + 4y - 7 में कितने पद हैं?"
    },
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: {
      en: "3x, 4y, and -7 are three separate terms.",
      hi: "3x, 4y और -7 तीन अलग-अलग पद हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "In the term -5xy, what is the coefficient?",
      hi: "पद -5xy में गुणांक क्या है?"
    },
    options: ["-5", "x", "y", "-5xy"],
    answer: "-5",
    explanation: {
      en: "The numerical part multiplied with variables is called the coefficient.",
      hi: "जो संख्या चर के साथ गुणा की जाती है, वह गुणांक कहलाती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is not a term?",
      hi: "निम्न में से कौन सा पद नहीं है?"
    },
    options: ["2xy", "5", "x + y", "-3a"],
    answer: "x + y",
    explanation: {
      en: "x + y has two terms; it's an expression, not a single term.",
      hi: "x + y दो पदों वाला अभिव्यक्ति है, यह एकल पद नहीं है।"
    }
  },
  {
    id: 5,
    question: {
      en: "In the term 7a²b, how many factors are there?",
      hi: "पद 7a²b में कितने गुणक हैं?"
    },
    options: ["2", "3", "4", "1"],
    answer: "3",
    explanation: {
      en: "7, a², and b are the three factors.",
      hi: "7, a² और b तीन गुणक हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the coefficient of y in the term -3y²?",
      hi: "पद -3y² में y का गुणांक क्या है?"
    },
    options: ["-3", "-6", "2", "-3y"],
    answer: "-3",
    explanation: {
      en: "The numerical part of the term is the coefficient.",
      hi: "पद का संख्यात्मक भाग गुणांक होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which term has a variable and a coefficient?",
      hi: "निम्न में से किस पद में चर और गुणांक दोनों होते हैं?"
    },
    options: ["9", "x", "5x", "-1"],
    answer: "5x",
    explanation: {
      en: "5 is the coefficient and x is the variable.",
      hi: "5 गुणांक है और x चर है।"
    }
  },
  {
    id: 8,
    question: {
      en: "In the term 4ab, identify the variable(s).",
      hi: "पद 4ab में चर कौन से हैं?"
    },
    options: ["4", "a", "ab", "a and b"],
    answer: "a and b",
    explanation: {
      en: "Both a and b are variables; 4 is the coefficient.",
      hi: "a और b दोनों चर हैं; 4 गुणांक है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What do we call the parts of a term that are multiplied?",
      hi: "किसी पद के उन भागों को क्या कहते हैं जो गुणा किए जाते हैं?"
    },
    options: ["Coefficients", "Operators", "Terms", "Factors"],
    answer: "Factors",
    explanation: {
      en: "Each element in multiplication is called a factor.",
      hi: "गुणा किए गए प्रत्येक भाग को गुणक कहते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "In which term is the coefficient negative?",
      hi: "निम्न में से किस पद में गुणांक ऋणात्मक है?"
    },
    options: ["3x", "-2y", "x²", "7ab"],
    answer: "-2y",
    explanation: {
      en: "The coefficient -2 is negative.",
      hi: "गुणांक -2 ऋणात्मक है।"
    }
  }
];

export default exprTerms;
