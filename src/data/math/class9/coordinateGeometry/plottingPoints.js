const plottingPoints = [
  {
    question: {
      en: "What does the coordinate (2, 3) represent?",
      hi: "निर्देशांक (2, 3) का क्या अर्थ है?"
    },
    options: {
      a: { en: "2 units left, 3 units down", hi: "2 इकाई बाएँ, 3 इकाई नीचे" },
      b: { en: "2 units right, 3 units up", hi: "2 इकाई दाएँ, 3 इकाई ऊपर" },
      c: { en: "3 units right, 2 units up", hi: "3 इकाई दाएँ, 2 इकाई ऊपर" },
      d: { en: "Origin", hi: "मूल बिंदु" }
    },
    answer: "b",
    explanation: {
      en: "First value (x) is right; second value (y) is up."
    }
  },
  {
    question: {
      en: "Which tool is used to plot points on paper?",
      hi: "कागज पर बिंदु लगाने के लिए किस उपकरण का उपयोग किया जाता है?"
    },
    options: {
      a: { en: "Compass", hi: "कंपास" },
      b: { en: "Graph paper", hi: "ग्राफ़ पेपर" },
      c: { en: "Divider", hi: "डिवाइडर" },
      d: { en: "Protractor", hi: "प्रोट्रैक्टर" }
    },
    answer: "b",
    explanation: {
      en: "Graph paper is used to accurately mark (x, y) points."
    }
  },
  {
    question: {
      en: "Which point lies on the x-axis?",
      hi: "निम्न में से कौन सा बिंदु x-अक्ष पर स्थित है?"
    },
    options: {
      a: { en: "(0, 5)", hi: "(0, 5)" },
      b: { en: "(3, 0)", hi: "(3, 0)" },
      c: { en: "(2, 2)", hi: "(2, 2)" },
      d: { en: "(1, -1)", hi: "(1, -1)" }
    },
    answer: "b",
    explanation: {
      en: "x-axis → y = 0, so (3, 0)"
    }
  },
  {
    question: {
      en: "Which point lies on the y-axis?",
      hi: "निम्न में से कौन सा बिंदु y-अक्ष पर स्थित है?"
    },
    options: {
      a: { en: "(2, 2)", hi: "(2, 2)" },
      b: { en: "(3, 0)", hi: "(3, 0)" },
      c: { en: "(0, 4)", hi: "(0, 4)" },
      d: { en: "(5, 1)", hi: "(5, 1)" }
    },
    answer: "c",
    explanation: {
      en: "y-axis → x = 0, so (0, 4)"
    }
  },
  {
    question: {
      en: "What is the x-coordinate in (5, -7)?",
      hi: "(5, -7) में x-निर्देशांक क्या है?"
    },
    options: {
      a: { en: "5", hi: "5" },
      b: { en: "-7", hi: "-7" },
      c: { en: "0", hi: "0" },
      d: { en: "1", hi: "1" }
    },
    answer: "a",
    explanation: {
      en: "First value = x-coordinate"
    }
  },
  {
    question: {
      en: "What does (0, 0) represent in coordinate geometry?",
      hi: "निर्देशांक ज्यामिति में (0, 0) क्या दर्शाता है?"
    },
    options: {
      a: { en: "Y-axis", hi: "y-अक्ष" },
      b: { en: "X-axis", hi: "x-अक्ष" },
      c: { en: "Origin", hi: "मूल बिंदु" },
      d: { en: "Quadrant I", hi: "प्रथम चतुर्थांश" }
    },
    answer: "c",
    explanation: {
      en: "(0, 0) is called the origin."
    }
  },
  {
    question: {
      en: "Point (-2, -4) lies in which quadrant?",
      hi: "बिंदु (-2, -4) किस चतुर्थांश में है?"
    },
    options: {
      a: { en: "I", hi: "प्रथम" },
      b: { en: "II", hi: "द्वितीय" },
      c: { en: "III", hi: "तृतीय" },
      d: { en: "IV", hi: "चतुर्थ" }
    },
    answer: "c",
    explanation: {
      en: "Both x and y are negative → Quadrant III"
    }
  },
  {
    question: {
      en: "Plotting a point (x, y) means:",
      hi: "(x, y) बिंदु लगाना का अर्थ है:"
    },
    options: {
      a: { en: "Drawing a line", hi: "रेखा खींचना" },
      b: { en: "Marking on graph as per x and y", hi: "x और y के अनुसार ग्राफ़ पर बिंदु अंकित करना" },
      c: { en: "Calculating distance", hi: "दूरी निकालना" },
      d: { en: "Finding area", hi: "क्षेत्रफल निकालना" }
    },
    answer: "b",
    explanation: {
      en: "Plotting means marking x, y on graph."
    }
  },
  {
    question: {
      en: "If x = 0 and y ≠ 0, the point lies on:",
      hi: "यदि x = 0 और y ≠ 0 हो, तो बिंदु किस पर होगा?"
    },
    options: {
      a: { en: "X-axis", hi: "x-अक्ष" },
      b: { en: "Y-axis", hi: "y-अक्ष" },
      c: { en: "Origin", hi: "मूल" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "x = 0 → y-axis"
    }
  },
  {
    question: {
      en: "Which coordinate pair lies in the first quadrant?",
      hi: "निम्न में से कौन सा निर्देशांक प्रथम चतुर्थांश में आता है?"
    },
    options: {
      a: { en: "(-3, 4)", hi: "(-3, 4)" },
      b: { en: "(3, -4)", hi: "(3, -4)" },
      c: { en: "(-3, -4)", hi: "(-3, -4)" },
      d: { en: "(3, 4)", hi: "(3, 4)" }
    },
    answer: "d",
    explanation: {
      en: "First quadrant → both x and y are positive"
    }
  }
];

export default plottingPoints;
