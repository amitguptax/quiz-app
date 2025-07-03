const linearGraphs = [
  {
    id: 1,
    question: {
      en: "What does a straight line graph represent?",
      hi: "एक सीधी रेखा ग्राफ़ किसका प्रतिनिधित्व करती है?"
    },
    options: ["Linear relationship", "Circular path", "Exponential growth", "No relation"],
    answer: "Linear relationship",
    explanation: {
      en: "A straight line graph indicates a constant rate of change — a linear relationship.",
      hi: "सीधी रेखा ग्राफ़ एक समान परिवर्तन दर को दर्शाती है — एक रैखिक संबंध।"
    }
  },
  {
    id: 2,
    question: {
      en: "The graph of y = 2x is a:",
      hi: "y = 2x का ग्राफ़ कैसा होता है?"
    },
    options: ["Straight line", "Curve", "Circle", "Parabola"],
    answer: "Straight line",
    explanation: {
      en: "y = 2x is a linear equation; its graph is a straight line.",
      hi: "y = 2x एक रैखिक समीकरण है; इसका ग्राफ़ एक सीधी रेखा होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which axis represents the dependent variable?",
      hi: "निर्भर चर को कौन-सा अक्ष दर्शाता है?"
    },
    options: ["Y-axis", "X-axis", "Z-axis", "None"],
    answer: "Y-axis",
    explanation: {
      en: "The dependent variable is usually plotted on the Y-axis.",
      hi: "निर्भर चर को सामान्यतः Y-अक्ष पर प्लॉट किया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the slope of the line y = 3x + 2?",
      hi: "रेखा y = 3x + 2 की ढाल (slope) क्या है?"
    },
    options: ["3", "2", "-2", "0"],
    answer: "3",
    explanation: {
      en: "In y = mx + c, the coefficient of x (i.e., 3) is the slope.",
      hi: "y = mx + c में, x का गुणांक (3) ढाल होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "The point where the graph cuts the Y-axis is called:",
      hi: "जिस बिंदु पर ग्राफ़ Y-अक्ष को काटता है उसे क्या कहते हैं?"
    },
    options: ["Y-intercept", "X-intercept", "Origin", "Slope"],
    answer: "Y-intercept",
    explanation: {
      en: "The graph’s intersection with Y-axis is called the Y-intercept.",
      hi: "Y-अक्ष के साथ ग्राफ़ का छेदन Y-अवरोधक कहलाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the x-intercept of the line y = 4 - 2x?",
      hi: "रेखा y = 4 - 2x की x-अवरोध क्या है?"
    },
    options: ["2", "1", "0", "4"],
    answer: "2",
    explanation: {
      en: "Put y = 0 ⇒ 0 = 4 - 2x ⇒ x = 2",
      hi: "y = 0 रखने पर ⇒ 0 = 4 - 2x ⇒ x = 2"
    }
  },
  {
    id: 7,
    question: {
      en: "A line parallel to the X-axis will have a slope of:",
      hi: "X-अक्ष के समानांतर रेखा की ढाल होगी:"
    },
    options: ["0", "1", "∞", "-1"],
    answer: "0",
    explanation: {
      en: "Parallel to X-axis means no rise, only run ⇒ slope = 0",
      hi: "X-अक्ष के समानांतर का मतलब कोई ऊँचाई नहीं ⇒ ढाल = 0"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these graphs is NOT a linear graph?",
      hi: "इनमें से कौन-सा ग्राफ़ रैखिक नहीं है?"
    },
    options: ["y = 2x", "y = x + 1", "y = x²", "y = 3x - 5"],
    answer: "y = x²",
    explanation: {
      en: "y = x² is a quadratic equation; its graph is a curve.",
      hi: "y = x² एक द्विघात समीकरण है; इसका ग्राफ़ वक्र होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the slope of y = -x?",
      hi: "y = -x का ढाल क्या है?"
    },
    options: ["-1", "1", "0", "Undefined"],
    answer: "-1",
    explanation: {
      en: "Slope is the coefficient of x: here it is -1.",
      hi: "ढाल x का गुणांक होता है: यहाँ -1 है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is a linear equation?",
      hi: "इनमें से कौन-सी एक रैखिक समीकरण है?"
    },
    options: ["y = 2x", "y = x²", "y = √x", "y = 1/x"],
    answer: "y = 2x",
    explanation: {
      en: "Only y = 2x represents a linear graph (degree 1).",
      hi: "केवल y = 2x रैखिक ग्राफ़ को दर्शाता है (घात = 1)।"
    }
  }
];

export default linearGraphs;
