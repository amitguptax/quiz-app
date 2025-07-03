const graphing = [
  {
    question: {
      en: "What shape does the graph of a linear equation in two variables represent?",
      hi: "दो चरों में रेखीय समीकरण का ग्राफ़ किस आकृति का होता है?"
    },
    options: {
      a: { en: "Circle", hi: "वृत्त" },
      b: { en: "Line", hi: "रेखा" },
      c: { en: "Parabola", hi: "परवलय" },
      d: { en: "Ellipse", hi: "दीर्घवृत्त" }
    },
    answer: "b",
    explanation: {
      en: "Graph of a linear equation in two variables is always a straight line."
    }
  },
  {
    question: {
      en: "Which of the following points lie on the line x + y = 5?",
      hi: "निम्न में से कौन सा बिंदु x + y = 5 रेखा पर स्थित है?"
    },
    options: {
      a: { en: "(2, 3)", hi: "(2, 3)" },
      b: { en: "(1, 2)", hi: "(1, 2)" },
      c: { en: "(3, 1)", hi: "(3, 1)" },
      d: { en: "(5, 5)", hi: "(5, 5)" }
    },
    answer: "a",
    explanation: {
      en: "2 + 3 = 5, so (2, 3) lies on the line x + y = 5."
    }
  },
  {
    question: {
      en: "What is the x-intercept of the line x + y = 4?",
      hi: "रेखा x + y = 4 का x-अवरोध क्या है?"
    },
    options: {
      a: { en: "4", hi: "4" },
      b: { en: "0", hi: "0" },
      c: { en: "(4, 0)", hi: "(4, 0)" },
      d: { en: "(0, 4)", hi: "(0, 4)" }
    },
    answer: "c",
    explanation: {
      en: "Put y = 0 ⇒ x = 4, so x-intercept = (4, 0)."
    }
  },
  {
    question: {
      en: "If the graph passes through (0, 0), what is it called?",
      hi: "यदि ग्राफ (0, 0) से गुजरता है, तो इसे क्या कहते हैं?"
    },
    options: {
      a: { en: "Intercept", hi: "अवरोध" },
      b: { en: "Origin", hi: "मूल बिंदु" },
      c: { en: "Parallel line", hi: "समानांतर रेखा" },
      d: { en: "Vertex", hi: "शिखर" }
    },
    answer: "b",
    explanation: {
      en: "The point (0, 0) is known as the origin."
    }
  },
  {
    question: {
      en: "How many points are needed to draw a linear graph?",
      hi: "रेखीय ग्राफ बनाने के लिए कितने बिंदुओं की आवश्यकता होती है?"
    },
    options: {
      a: { en: "One", hi: "एक" },
      b: { en: "Two", hi: "दो" },
      c: { en: "Three", hi: "तीन" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Two distinct points are enough to draw a straight line."
    }
  },
  {
    question: {
      en: "Which equation represents a line passing through the origin?",
      hi: "कौन सा समीकरण मूल बिंदु से गुजरने वाली रेखा को दर्शाता है?"
    },
    options: {
      a: { en: "x + y = 1", hi: "x + y = 1" },
      b: { en: "x - y = 0", hi: "x - y = 0" },
      c: { en: "x + y = 5", hi: "x + y = 5" },
      d: { en: "x = 2", hi: "x = 2" }
    },
    answer: "b",
    explanation: {
      en: "x - y = 0 passes through (0,0)."
    }
  },
  {
    question: {
      en: "If a line is parallel to the x-axis, what is its equation?",
      hi: "यदि कोई रेखा x-अक्ष के समानांतर है, तो उसका समीकरण क्या होगा?"
    },
    options: {
      a: { en: "x = a", hi: "x = a" },
      b: { en: "y = a", hi: "y = a" },
      c: { en: "x + y = a", hi: "x + y = a" },
      d: { en: "x - y = 1", hi: "x - y = 1" }
    },
    answer: "b",
    explanation: {
      en: "y = constant gives a horizontal line (parallel to x-axis)."
    }
  },
  {
    question: {
      en: "What is the slope of the line y = 3x + 2?",
      hi: "रेखा y = 3x + 2 की ढाल (slope) क्या है?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "3", hi: "3" },
      c: { en: "1", hi: "1" },
      d: { en: "-3", hi: "-3" }
    },
    answer: "b",
    explanation: {
      en: "The slope is the coefficient of x, which is 3."
    }
  },
  {
    question: {
      en: "What happens if all solutions of a linear equation are plotted?",
      hi: "यदि एक रेखीय समीकरण के सभी हलों को ग्राफ पर दर्शाया जाए, तो क्या होता है?"
    },
    options: {
      a: { en: "They form a curve", hi: "वे एक वक्र बनाते हैं" },
      b: { en: "They form a straight line", hi: "वे एक सीधी रेखा बनाते हैं" },
      c: { en: "They form a circle", hi: "वे एक वृत्त बनाते हैं" },
      d: { en: "They form no pattern", hi: "कोई पैटर्न नहीं बनाते" }
    },
    answer: "b",
    explanation: {
      en: "A linear equation in two variables plots as a straight line."
    }
  },
  {
    question: {
      en: "Which pair of points lie on the line y = 2x?",
      hi: "निम्न में से कौन से बिंदु y = 2x रेखा पर स्थित हैं?"
    },
    options: {
      a: { en: "(1, 2)", hi: "(1, 2)" },
      b: { en: "(2, 4)", hi: "(2, 4)" },
      c: { en: "(3, 6)", hi: "(3, 6)" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "All points satisfy the equation y = 2x."
    }
  }
];

export default graphing;
