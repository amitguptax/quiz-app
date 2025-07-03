const graphicalMethod = [
  {
    question: {
      en: "What is the graphical representation of a linear equation in two variables?",
      hi: "दो चर वाले रेखीय समीकरण का ग्राफ़ीय प्रतिनिधित्व क्या होता है?"
    },
    options: {
      a: { en: "A curve", hi: "एक वक्र" },
      b: { en: "A circle", hi: "एक वृत्त" },
      c: { en: "A straight line", hi: "एक सीधी रेखा" },
      d: { en: "A parabola", hi: "एक परवलय" }
    },
    answer: "c",
    explanation: {
      en: "A linear equation in two variables is always represented by a straight line."
    }
  },
  {
    question: {
      en: "What does the point of intersection of two lines represent?",
      hi: "दो रेखाओं का प्रतिछेदन बिंदु क्या दर्शाता है?"
    },
    options: {
      a: { en: "No solution", hi: "कोई हल नहीं" },
      b: { en: "Infinite solutions", hi: "अनंत हल" },
      c: { en: "A unique solution", hi: "एक अद्वितीय हल" },
      d: { en: "No relation", hi: "कोई संबंध नहीं" }
    },
    answer: "c",
    explanation: {
      en: "If two lines intersect at a point, that point is the unique solution to the system of equations."
    }
  },
  {
    question: {
      en: "What does it mean when two lines are parallel in a graph?",
      hi: "जब ग्राफ़ में दो रेखाएँ समांतर होती हैं, तो इसका क्या अर्थ होता है?"
    },
    options: {
      a: { en: "Infinite solutions", hi: "अनंत हल" },
      b: { en: "One solution", hi: "एक हल" },
      c: { en: "No solution", hi: "कोई हल नहीं" },
      d: { en: "Two solutions", hi: "दो हल" }
    },
    answer: "c",
    explanation: {
      en: "Parallel lines never meet, so they have no solution in common."
    }
  },
  {
    question: {
      en: "What is the condition for two equations to have infinitely many solutions?",
      hi: "दो समीकरणों के अनंत हल होने की क्या शर्त है?"
    },
    options: {
      a: { en: "Lines intersect", hi: "रेखाएँ प्रतिच्छेद करती हैं" },
      b: { en: "Lines are parallel", hi: "रेखाएँ समांतर होती हैं" },
      c: { en: "Lines coincide", hi: "रेखाएँ मेल खाती हैं" },
      d: { en: "None of the above", hi: "उपरोक्त में से कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "When two lines lie on top of each other, they have infinite common solutions."
    }
  },
  {
    question: {
      en: "Which pair of equations will have a unique solution?",
      hi: "कौन सा समीकरण युग्म एक अद्वितीय हल देगा?"
    },
    options: {
      a: { en: "Lines coincide", hi: "रेखाएँ मेल खाती हैं" },
      b: { en: "Lines intersect", hi: "रेखाएँ प्रतिच्छेद करती हैं" },
      c: { en: "Lines are parallel", hi: "रेखाएँ समांतर होती हैं" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Intersecting lines give a unique point as solution to both equations."
    }
  },
  {
    question: {
      en: "Which of the following is a solution of the equation 2x + y = 7?",
      hi: "निम्नलिखित में से कौन सा समीकरण 2x + y = 7 का हल है?"
    },
    options: {
      a: { en: "(1, 5)", hi: "(1, 5)" },
      b: { en: "(2, 3)", hi: "(2, 3)" },
      c: { en: "(3, 1)", hi: "(3, 1)" },
      d: { en: "(0, 7)", hi: "(0, 7)" }
    },
    answer: "b",
    explanation: {
      en: "2×2 + 3 = 7, so (2, 3) satisfies the equation."
    }
  },
  {
    question: {
      en: "If lines do not intersect and are not parallel, what do they represent?",
      hi: "यदि रेखाएँ प्रतिच्छेद नहीं करती और समांतर भी नहीं हैं, तो वे क्या दर्शाती हैं?"
    },
    options: {
      a: { en: "No solution", hi: "कोई हल नहीं" },
      b: { en: "Incorrect data", hi: "गलत डेटा" },
      c: { en: "They intersect at infinity", hi: "वे अनंत पर प्रतिच्छेद करती हैं" },
      d: { en: "Not possible for linear equations", hi: "रेखीय समीकरणों के लिए संभव नहीं" }
    },
    answer: "d",
    explanation: {
      en: "In linear equations, lines are either parallel, coinciding or intersecting."
    }
  },
  {
    question: {
      en: "Which axis does the equation x = 3 parallel to?",
      hi: "x = 3 समीकरण किस अक्ष के समानांतर होता है?"
    },
    options: {
      a: { en: "X-axis", hi: "x-अक्ष" },
      b: { en: "Y-axis", hi: "y-अक्ष" },
      c: { en: "Z-axis", hi: "z-अक्ष" },
      d: { en: "Origin", hi: "मूल बिंदु" }
    },
    answer: "b",
    explanation: {
      en: "x = 3 is a vertical line, parallel to the y-axis."
    }
  },
  {
    question: {
      en: "How many points are needed to draw a line?",
      hi: "एक रेखा खींचने के लिए कितने बिंदुओं की आवश्यकता होती है?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "2", hi: "2" },
      c: { en: "3", hi: "3" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Two distinct points determine a unique straight line."
    }
  },
  {
    question: {
      en: "Which of these graphs represent inconsistent equations?",
      hi: "इनमें से कौन सा ग्राफ़ असंगत समीकरण दर्शाता है?"
    },
    options: {
      a: { en: "Intersecting lines", hi: "प्रतिच्छेद रेखाएँ" },
      b: { en: "Coinciding lines", hi: "मेल खाती रेखाएँ" },
      c: { en: "Parallel lines", hi: "समांतर रेखाएँ" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "Parallel lines don’t meet, hence the system is inconsistent (no solution)."
    }
  }
];

export default graphicalMethod;
