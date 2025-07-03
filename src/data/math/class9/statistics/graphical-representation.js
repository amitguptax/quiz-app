const graphicalRepresentation = [
  {
    question: {
      en: "What does a bar graph represent?",
      hi: "बार ग्राफ क्या दर्शाता है?"
    },
    options: {
      a: { en: "Comparison of categories", hi: "श्रेणियों की तुलना" },
      b: { en: "Cumulative frequency", hi: "संचयी आवृत्ति" },
      c: { en: "Circle areas", hi: "वृत्तों का क्षेत्रफल" },
      d: { en: "Angles", hi: "कोण" }
    },
    answer: "a",
    explanation: {
      en: "Bar graphs visually compare quantities of different categories."
    }
  },
  {
    question: {
      en: "In a bar graph, bars can be:",
      hi: "बार ग्राफ में बार कैसे हो सकते हैं?"
    },
    options: {
      a: { en: "Horizontal or vertical", hi: "क्षैतिज या ऊर्ध्वाधर" },
      b: { en: "Only circular", hi: "केवल वृत्ताकार" },
      c: { en: "Only horizontal", hi: "केवल क्षैतिज" },
      d: { en: "Only vertical", hi: "केवल ऊर्ध्वाधर" }
    },
    answer: "a",
    explanation: {
      en: "Bar graphs can be drawn both horizontally and vertically."
    }
  },
  {
    question: {
      en: "What does the height of each bar in a bar graph represent?",
      hi: "बार ग्राफ में प्रत्येक बार की ऊँचाई क्या दर्शाती है?"
    },
    options: {
      a: { en: "Value or frequency", hi: "मान या आवृत्ति" },
      b: { en: "Time", hi: "समय" },
      c: { en: "Shape", hi: "आकार" },
      d: { en: "Length", hi: "लंबाई" }
    },
    answer: "a",
    explanation: {
      en: "The height of a bar indicates the quantity or frequency."
    }
  },
  {
    question: {
      en: "Which of these is not used in a bar graph?",
      hi: "इनमें से कौन सा बार ग्राफ में उपयोग नहीं होता?"
    },
    options: {
      a: { en: "Bars", hi: "बार" },
      b: { en: "X-axis", hi: "X-अक्ष" },
      c: { en: "Y-axis", hi: "Y-अक्ष" },
      d: { en: "Curves", hi: "वक्र" }
    },
    answer: "d",
    explanation: {
      en: "Curves are not used in bar graphs; they are used in line or frequency polygons."
    }
  },
  {
    question: {
      en: "What is a frequency polygon?",
      hi: "आवृत्ति बहुभुज क्या होता है?"
    },
    options: {
      a: { en: "A bar diagram", hi: "बार आरेख" },
      b: { en: "A line graph connecting midpoints", hi: "मध्य बिंदुओं को जोड़ने वाला रेखा ग्राफ" },
      c: { en: "Pie chart", hi: "पाई चार्ट" },
      d: { en: "Circle graph", hi: "वृत्त ग्राफ" }
    },
    answer: "b",
    explanation: {
      en: "Frequency polygons are formed by joining midpoints of histogram bars."
    }
  },
  {
    question: {
      en: "To construct a frequency polygon without histogram, what is used?",
      hi: "हिस्टोग्राम के बिना आवृत्ति बहुभुज बनाने के लिए क्या उपयोग होता है?"
    },
    options: {
      a: { en: "Frequency table", hi: "आवृत्ति तालिका" },
      b: { en: "Bar graph", hi: "बार ग्राफ" },
      c: { en: "Circles", hi: "वृत्त" },
      d: { en: "Tables", hi: "तालिकाएँ" }
    },
    answer: "a",
    explanation: {
      en: "We can draw frequency polygons directly from a frequency table."
    }
  },
  {
    question: {
      en: "In a frequency polygon, what is plotted on the X-axis?",
      hi: "आवृत्ति बहुभुज में X-अक्ष पर क्या प्लॉट किया जाता है?"
    },
    options: {
      a: { en: "Class intervals", hi: "वर्गांतराल" },
      b: { en: "Frequencies", hi: "आवृत्तियाँ" },
      c: { en: "Bar heights", hi: "बार की ऊँचाई" },
      d: { en: "Total values", hi: "कुल मान" }
    },
    answer: "a",
    explanation: {
      en: "The midpoints of class intervals are plotted along the X-axis."
    }
  },
  {
    question: {
      en: "Why do we use a frequency polygon?",
      hi: "हम आवृत्ति बहुभुज का उपयोग क्यों करते हैं?"
    },
    options: {
      a: { en: "To find exact values", hi: "सटीक मान निकालने के लिए" },
      b: { en: "To compare data trends", hi: "डेटा प्रवृत्तियों की तुलना करने के लिए" },
      c: { en: "To measure area", hi: "क्षेत्रफल मापने के लिए" },
      d: { en: "To draw circles", hi: "वृत्त बनाने के लिए" }
    },
    answer: "b",
    explanation: {
      en: "Frequency polygons are great for comparing trends between datasets."
    }
  },
  {
    question: {
      en: "Which is better for comparing multiple datasets?",
      hi: "कई डेटा सेटों की तुलना के लिए कौन सा बेहतर है?"
    },
    options: {
      a: { en: "Bar graph", hi: "बार ग्राफ" },
      b: { en: "Frequency polygon", hi: "आवृत्ति बहुभुज" },
      c: { en: "Line chart", hi: "रेखा चार्ट" },
      d: { en: "Pie chart", hi: "पाई चार्ट" }
    },
    answer: "b",
    explanation: {
      en: "Frequency polygons help visualize and compare multiple datasets easily."
    }
  },
  {
    question: {
      en: "What is the key difference between bar graph and histogram?",
      hi: "बार ग्राफ और हिस्टोग्राम में मुख्य अंतर क्या है?"
    },
    options: {
      a: { en: "Bars touch in histogram", hi: "हिस्टोग्राम में बार एक-दूसरे को छूते हैं" },
      b: { en: "Histogram uses angles", hi: "हिस्टोग्राम कोणों का उपयोग करता है" },
      c: { en: "Bar graph is only vertical", hi: "बार ग्राफ केवल ऊर्ध्वाधर होता है" },
      d: { en: "Histogram is circular", hi: "हिस्टोग्राम वृत्ताकार होता है" }
    },
    answer: "a",
    explanation: {
      en: "Bars in a histogram are continuous and touch each other, unlike in a bar graph."
    }
  }
];

export default graphicalRepresentation;
