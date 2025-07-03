const distanceFormula = [
  {
    question: {
      en: "What is the distance formula between two points A(x₁, y₁) and B(x₂, y₂)?",
      hi: "दो बिंदुओं A(x₁, y₁) और B(x₂, y₂) के बीच की दूरी का सूत्र क्या है?"
    },
    options: {
      a: { en: "(x₂ + x₁)² + (y₂ + y₁)²", hi: "(x₂ + x₁)² + (y₂ + y₁)²" },
      b: { en: "√[(x₂ - x₁)² + (y₂ - y₁)²]", hi: "√[(x₂ - x₁)² + (y₂ - y₁)²]" },
      c: { en: "(x₂ - x₁)² - (y₂ - y₁)²", hi: "(x₂ - x₁)² - (y₂ - y₁)²" },
      d: { en: "(x₂y₂ - x₁y₁)", hi: "(x₂y₂ - x₁y₁)" }
    },
    answer: "b",
    explanation: {
      en: "The standard formula to find the distance between two points is √[(x₂ - x₁)² + (y₂ - y₁)²].",
      hi: "दो बिंदुओं के बीच दूरी निकालने का सूत्र √[(x₂ - x₁)² + (y₂ - y₁)²] होता है।"
    }
  },
  {
    question: {
      en: "Find the distance between the points (3, 4) and (0, 0).",
      hi: "बिंदु (3, 4) और (0, 0) के बीच की दूरी ज्ञात करें।"
    },
    options: {
      a: { en: "7", hi: "7" },
      b: { en: "5", hi: "5" },
      c: { en: "9", hi: "9" },
      d: { en: "2", hi: "2" }
    },
    answer: "b",
    explanation: {
      en: "√[(3-0)² + (4-0)²] = √(9+16) = √25 = 5",
      hi: "√[(3-0)² + (4-0)²] = √(9+16) = √25 = 5"
    }
  },
  {
    question: {
      en: "What is the distance between the points (-1, -1) and (2, 3)?",
      hi: "बिंदु (-1, -1) और (2, 3) के बीच की दूरी क्या है?"
    },
    options: {
      a: { en: "4", hi: "4" },
      b: { en: "5", hi: "5" },
      c: { en: "6", hi: "6" },
      d: { en: "3", hi: "3" }
    },
    answer: "b",
    explanation: {
      en: "√[(2+1)² + (3+1)²] = √(9 + 16) = √25 = 5",
      hi: "√[(2+1)² + (3+1)²] = √(9 + 16) = √25 = 5"
    }
  },
  {
    question: {
      en: "Which of the following points lies at a distance of 5 units from origin?",
      hi: "निम्न में से कौन सा बिंदु मूल से 5 इकाई दूरी पर स्थित है?"
    },
    options: {
      a: { en: "(5, 0)", hi: "(5, 0)" },
      b: { en: "(0, 5)", hi: "(0, 5)" },
      c: { en: "(3, 4)", hi: "(3, 4)" },
      d: { en: "(2, 2)", hi: "(2, 2)" }
    },
    answer: "c",
    explanation: {
      en: "√(3² + 4²) = √25 = 5",
      hi: "√(3² + 4²) = √25 = 5"
    }
  },
  {
    question: {
      en: "Find the distance between (2, -1) and (-3, -5).",
      hi: "बिंदु (2, -1) और (-3, -5) के बीच की दूरी ज्ञात करें।"
    },
    options: {
      a: { en: "5", hi: "5" },
      b: { en: "6.4", hi: "6.4" },
      c: { en: "4", hi: "4" },
      d: { en: "6.40", hi: "6.40" }
    },
    answer: "b",
    explanation: {
      en: "√[(2+3)² + (-1+5)²] = √(25 + 16) = √41 ≈ 6.4",
      hi: "√[(2+3)² + (-1+5)²] = √(25 + 16) = √41 ≈ 6.4"
    }
  },
  {
    question: {
      en: "Distance between (a, b) and (a, -b) is:",
      hi: "(a, b) और (a, -b) के बीच की दूरी क्या है?"
    },
    options: {
      a: { en: "2b", hi: "2b" },
      b: { en: "0", hi: "0" },
      c: { en: "b", hi: "b" },
      d: { en: "2a", hi: "2a" }
    },
    answer: "a",
    explanation: {
      en: "Only y-coordinates differ: distance = |b - (-b)| = 2b",
      hi: "केवल y-निर्देशांक में अंतर है: दूरी = |b - (-b)| = 2b"
    }
  },
  {
    question: {
      en: "Which two points are at a distance of √2 from each other?",
      hi: "निम्न में से कौन से दो बिंदु √2 दूरी पर हैं?"
    },
    options: {
      a: { en: "(0,0) and (1,1)", hi: "(0,0) और (1,1)" },
      b: { en: "(1,1) and (2,2)", hi: "(1,1) और (2,2)" },
      c: { en: "(0,0) and (2,2)", hi: "(0,0) और (2,2)" },
      d: { en: "(1,1) and (3,3)", hi: "(1,1) और (3,3)" }
    },
    answer: "a",
    explanation: {
      en: "Distance = √[(1-0)² + (1-0)²] = √2",
      hi: "दूरी = √[(1-0)² + (1-0)²] = √2"
    }
  },
  {
    question: {
      en: "What is the distance between points (5, 1) and (1, 1)?",
      hi: "बिंदु (5,1) और (1,1) के बीच की दूरी क्या है?"
    },
    options: {
      a: { en: "4", hi: "4" },
      b: { en: "0", hi: "0" },
      c: { en: "6", hi: "6" },
      d: { en: "5", hi: "5" }
    },
    answer: "a",
    explanation: {
      en: "Same y, so distance = |5 - 1| = 4",
      hi: "y समान है, दूरी = |5 - 1| = 4"
    }
  },
  {
    question: {
      en: "Which of the following will result in maximum distance?",
      hi: "निम्न में से कौन अधिकतम दूरी देगा?"
    },
    options: {
      a: { en: "(0, 0) & (0, 7)", hi: "(0, 0) और (0, 7)" },
      b: { en: "(1, 1) & (5, 1)", hi: "(1, 1) और (5, 1)" },
      c: { en: "(3, 4) & (0, 0)", hi: "(3, 4) और (0, 0)" },
      d: { en: "(2, 2) & (2, 2)", hi: "(2, 2) और (2, 2)" }
    },
    answer: "c",
    explanation: {
      en: "Distance = √(3² + 4²) = 5; others are less or equal.",
      hi: "दूरी = √(3² + 4²) = 5; अन्य कम या बराबर हैं।"
    }
  },
  {
    question: {
      en: "If P(x, y) is equidistant from A(1, 2) and B(5, 6), then:",
      hi: "यदि P(x, y) बिंदुओं A(1,2) और B(5,6) से समदूरी पर है, तो:"
    },
    options: {
      a: { en: "PA = PB", hi: "PA = PB" },
      b: { en: "PA > PB", hi: "PA > PB" },
      c: { en: "PA < PB", hi: "PA < PB" },
      d: { en: "No relation", hi: "कोई संबंध नहीं" }
    },
    answer: "a",
    explanation: {
      en: "Equidistant means distance from both points is same.",
      hi: "समदूरी का अर्थ है दोनों बिंदुओं से दूरी समान है।"
    }
  }
];

export default distanceFormula;
