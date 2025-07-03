const specialLines = [
  {
    question: {
      en: "What is the graph of x = 3?",
      hi: "x = 3 का ग्राफ़ क्या दर्शाता है?"
    },
    options: {
      a: { en: "A line parallel to x-axis", hi: "x-अक्ष के समानांतर रेखा" },
      b: { en: "A line parallel to y-axis", hi: "y-अक्ष के समानांतर रेखा" },
      c: { en: "A curve", hi: "एक वक्र" },
      d: { en: "A diagonal line", hi: "तिरछी रेखा" }
    },
    answer: "b",
    explanation: {
      en: "x = 3 represents a vertical line parallel to the y-axis."
    }
  },
  {
    question: {
      en: "Which equation represents a line parallel to the x-axis?",
      hi: "कौन सा समीकरण x-अक्ष के समानांतर रेखा को दर्शाता है?"
    },
    options: {
      a: { en: "x = 5", hi: "x = 5" },
      b: { en: "y = 2", hi: "y = 2" },
      c: { en: "x + y = 0", hi: "x + y = 0" },
      d: { en: "xy = 1", hi: "xy = 1" }
    },
    answer: "b",
    explanation: {
      en: "y = constant is a horizontal line, hence parallel to x-axis."
    }
  },
  {
    question: {
      en: "Which of these represents a vertical line?",
      hi: "निम्न में से कौन एक लंबवत रेखा दर्शाता है?"
    },
    options: {
      a: { en: "y = 4", hi: "y = 4" },
      b: { en: "x = -2", hi: "x = -2" },
      c: { en: "y = x", hi: "y = x" },
      d: { en: "x + y = 0", hi: "x + y = 0" }
    },
    answer: "b",
    explanation: {
      en: "x = constant gives a vertical line."
    }
  },
  {
    question: {
      en: "Which axis is the line y = 0 on?",
      hi: "रेखा y = 0 किस अक्ष पर होती है?"
    },
    options: {
      a: { en: "x-axis", hi: "x-अक्ष" },
      b: { en: "y-axis", hi: "y-अक्ष" },
      c: { en: "Origin", hi: "मूल बिंदु" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "y = 0 lies along the x-axis."
    }
  },
  {
    question: {
      en: "What type of line is represented by y = 5?",
      hi: "y = 5 किस प्रकार की रेखा को दर्शाता है?"
    },
    options: {
      a: { en: "Vertical", hi: "लंबवत" },
      b: { en: "Horizontal", hi: "क्षैतिज" },
      c: { en: "Diagonal", hi: "तिरछी" },
      d: { en: "Curved", hi: "वक्र" }
    },
    answer: "b",
    explanation: {
      en: "y = constant gives a horizontal line."
    }
  },
  {
    question: {
      en: "The graph of x = 0 lies on which axis?",
      hi: "x = 0 का ग्राफ़ किस अक्ष पर स्थित होता है?"
    },
    options: {
      a: { en: "x-axis", hi: "x-अक्ष" },
      b: { en: "y-axis", hi: "y-अक्ष" },
      c: { en: "Both axes", hi: "दोनों अक्ष" },
      d: { en: "Diagonal", hi: "तिरछी रेखा" }
    },
    answer: "b",
    explanation: {
      en: "x = 0 lies along the y-axis."
    }
  },
  {
    question: {
      en: "If the equation is y = -3, where does the line lie?",
      hi: "यदि समीकरण y = -3 है, तो रेखा कहाँ स्थित होती है?"
    },
    options: {
      a: { en: "Above x-axis", hi: "x-अक्ष के ऊपर" },
      b: { en: "On x-axis", hi: "x-अक्ष पर" },
      c: { en: "Below x-axis", hi: "x-अक्ष के नीचे" },
      d: { en: "On y-axis", hi: "y-अक्ष पर" }
    },
    answer: "c",
    explanation: {
      en: "y = -3 is below x-axis and parallel to it."
    }
  },
  {
    question: {
      en: "Which line passes through all points where x = 1?",
      hi: "x = 1 सभी बिंदुओं से गुजरने वाली रेखा क्या है?"
    },
    options: {
      a: { en: "A horizontal line at y = 1", hi: "y = 1 पर क्षैतिज रेखा" },
      b: { en: "A vertical line at x = 1", hi: "x = 1 पर लंबवत रेखा" },
      c: { en: "Line y = x", hi: "रेखा y = x" },
      d: { en: "Line y = 1", hi: "रेखा y = 1" }
    },
    answer: "b",
    explanation: {
      en: "x = 1 is a vertical line passing through all (1, y)."
    }
  },
  {
    question: {
      en: "Which of these is not a line parallel to either axis?",
      hi: "इनमें से कौन सी रेखा किसी भी अक्ष के समानांतर नहीं है?"
    },
    options: {
      a: { en: "x = 0", hi: "x = 0" },
      b: { en: "y = 7", hi: "y = 7" },
      c: { en: "x + y = 5", hi: "x + y = 5" },
      d: { en: "x = -5", hi: "x = -5" }
    },
    answer: "c",
    explanation: {
      en: "x + y = 5 is a diagonal line, not parallel to axes."
    }
  },
  {
    question: {
      en: "Which of the following equations represents a horizontal line?",
      hi: "निम्न में से कौन सा समीकरण क्षैतिज रेखा को दर्शाता है?"
    },
    options: {
      a: { en: "x = 6", hi: "x = 6" },
      b: { en: "y = -2", hi: "y = -2" },
      c: { en: "x + y = 0", hi: "x + y = 0" },
      d: { en: "x = y", hi: "x = y" }
    },
    answer: "b",
    explanation: {
      en: "y = constant is a horizontal line."
    }
  }
];

export default specialLines;
