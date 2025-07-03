const introLinearEq = [
  {
    question: {
      en: "What is the general form of a linear equation in two variables?",
      hi: "दो चरों में रेखीय समीकरण का सामान्य रूप क्या है?"
    },
    options: {
      a: { en: "ax + b = 0", hi: "ax + b = 0" },
      b: { en: "ax + by = c", hi: "ax + by = c" },
      c: { en: "x² + y² = 0", hi: "x² + y² = 0" },
      d: { en: "a/x + b/y = c", hi: "a/x + b/y = c" }
    },
    answer: "b",
    explanation: {
      en: "The standard form is ax + by = c where a, b, and c are real numbers."
    }
  },
  {
    question: {
      en: "How many solutions does a linear equation in two variables have?",
      hi: "दो चरों में रेखीय समीकरण के कितने हल होते हैं?"
    },
    options: {
      a: { en: "One", hi: "एक" },
      b: { en: "Two", hi: "दो" },
      c: { en: "Infinite", hi: "असीमित" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "There are infinite solutions because it represents a line on the graph."
    }
  },
  {
    question: {
      en: "Which of the following is a linear equation in two variables?",
      hi: "निम्न में से कौन दो चरों में रेखीय समीकरण है?"
    },
    options: {
      a: { en: "x + y = 3", hi: "x + y = 3" },
      b: { en: "x² + y = 4", hi: "x² + y = 4" },
      c: { en: "xy = 5", hi: "xy = 5" },
      d: { en: "y = 2x²", hi: "y = 2x²" }
    },
    answer: "a",
    explanation: {
      en: "x + y = 3 is of the form ax + by = c."
    }
  },
  {
    question: {
      en: "In the equation 2x + 3y = 6, what are the coefficients of x and y?",
      hi: "समीकरण 2x + 3y = 6 में x और y के गुणांक क्या हैं?"
    },
    options: {
      a: { en: "2 and 3", hi: "2 और 3" },
      b: { en: "3 and 2", hi: "3 और 2" },
      c: { en: "2 and 6", hi: "2 और 6" },
      d: { en: "3 and 6", hi: "3 और 6" }
    },
    answer: "a",
    explanation: {
      en: "The coefficient of x is 2 and of y is 3."
    }
  },
  {
    question: {
      en: "Which of the following is NOT a linear equation in two variables?",
      hi: "निम्न में से कौन दो चरों में रेखीय समीकरण नहीं है?"
    },
    options: {
      a: { en: "x + y = 0", hi: "x + y = 0" },
      b: { en: "2x - y = 7", hi: "2x - y = 7" },
      c: { en: "x² + y = 1", hi: "x² + y = 1" },
      d: { en: "x - y = 3", hi: "x - y = 3" }
    },
    answer: "c",
    explanation: {
      en: "x² is of degree 2, so the equation is not linear."
    }
  },
  {
    question: {
      en: "In the linear equation ax + by = c, which of the following must be true?",
      hi: "रेखीय समीकरण ax + by = c में निम्न में से क्या सत्य है?"
    },
    options: {
      a: { en: "a and b must be zero", hi: "a और b दोनों शून्य होने चाहिए" },
      b: { en: "a and b cannot both be zero", hi: "a और b दोनों शून्य नहीं हो सकते" },
      c: { en: "Only b can be zero", hi: "केवल b शून्य हो सकता है" },
      d: { en: "Only a can be zero", hi: "केवल a शून्य हो सकता है" }
    },
    answer: "b",
    explanation: {
      en: "If both a and b are zero, the equation becomes invalid."
    }
  },
  {
    question: {
      en: "What is the degree of a linear equation in two variables?",
      hi: "दो चरों में रेखीय समीकरण की घात क्या होती है?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "1", hi: "1" },
      c: { en: "2", hi: "2" },
      d: { en: "3", hi: "3" }
    },
    answer: "b",
    explanation: {
      en: "A linear equation has degree 1 (highest power of variable)."
    }
  },
  {
    question: {
      en: "Which of the following represents a solution of x - y = 0?",
      hi: "निम्न में से कौन x - y = 0 का हल है?"
    },
    options: {
      a: { en: "(1, 1)", hi: "(1, 1)" },
      b: { en: "(2, 3)", hi: "(2, 3)" },
      c: { en: "(0, 1)", hi: "(0, 1)" },
      d: { en: "(5, 4)", hi: "(5, 4)" }
    },
    answer: "a",
    explanation: {
      en: "1 - 1 = 0, so (1, 1) satisfies x - y = 0."
    }
  },
  {
    question: {
      en: "Which of the following is a solution of the equation x + 2y = 6?",
      hi: "x + 2y = 6 समीकरण का कौन सा हल है?"
    },
    options: {
      a: { en: "(2, 2)", hi: "(2, 2)" },
      b: { en: "(0, 3)", hi: "(0, 3)" },
      c: { en: "(1, 2)", hi: "(1, 2)" },
      d: { en: "(4, 2)", hi: "(4, 2)" }
    },
    answer: "b",
    explanation: {
      en: "0 + 2×3 = 6, so (0, 3) is a solution."
    }
  },
  {
    question: {
      en: "Which term is not found in a linear equation in two variables?",
      hi: "दो चरों में रेखीय समीकरण में कौन सा पद नहीं होता है?"
    },
    options: {
      a: { en: "xy", hi: "xy" },
      b: { en: "x", hi: "x" },
      c: { en: "y", hi: "y" },
      d: { en: "constant", hi: "स्थिरांक" }
    },
    answer: "a",
    explanation: {
      en: "Product of variables (like xy) makes it nonlinear."
    }
  }
];

export default introLinearEq;
