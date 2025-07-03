const midpointFormula = [
  {
    question: {
      en: "What is the midpoint formula for a line joining points A(x₁, y₁) and B(x₂, y₂)?",
      hi: "बिंदुओं A(x₁, y₁) और B(x₂, y₂) को जोड़ने वाली रेखा का मध्य बिंदु सूत्र क्या है?"
    },
    options: {
      a: { en: "[(x₁ + x₂)/2, (y₁ + y₂)/2]", hi: "[(x₁ + x₂)/2, (y₁ + y₂)/2]" },
      b: { en: "[(x₁ - x₂)/2, (y₁ - y₂)/2]", hi: "[(x₁ - x₂)/2, (y₁ - y₂)/2]" },
      c: { en: "[x₁x₂, y₁y₂]", hi: "[x₁x₂, y₁y₂]" },
      d: { en: "[(x₁x₂)/2, (y₁y₂)/2]", hi: "[(x₁x₂)/2, (y₁y₂)/2]" }
    },
    answer: "a",
    explanation: {
      en: "Midpoint formula: [(x₁ + x₂)/2, (y₁ + y₂)/2]",
      hi: "मध्यांक सूत्र: [(x₁ + x₂)/2, (y₁ + y₂)/2]"
    }
  },
  {
    question: {
      en: "Find the midpoint of points (2, 4) and (6, 8).",
      hi: "(2, 4) और (6, 8) का मध्यबिंदु ज्ञात करें।"
    },
    options: {
      a: { en: "(4, 6)", hi: "(4, 6)" },
      b: { en: "(5, 5)", hi: "(5, 5)" },
      c: { en: "(3, 3)", hi: "(3, 3)" },
      d: { en: "(8, 12)", hi: "(8, 12)" }
    },
    answer: "a",
    explanation: {
      en: "Midpoint = [(2+6)/2, (4+8)/2] = (4, 6)",
      hi: "मध्यबिंदु = [(2+6)/2, (4+8)/2] = (4, 6)"
    }
  },
  {
    question: {
      en: "Midpoint of (0, 0) and (4, 6) is:",
      hi: "(0, 0) और (4, 6) का मध्यबिंदु है:"
    },
    options: {
      a: { en: "(2, 3)", hi: "(2, 3)" },
      b: { en: "(4, 6)", hi: "(4, 6)" },
      c: { en: "(0, 6)", hi: "(0, 6)" },
      d: { en: "(1, 1)", hi: "(1, 1)" }
    },
    answer: "a",
    explanation: {
      en: "Midpoint = [(0+4)/2, (0+6)/2] = (2, 3)",
      hi: "मध्यबिंदु = [(0+4)/2, (0+6)/2] = (2, 3)"
    }
  },
  {
    question: {
      en: "If midpoint of A(x, 4) and B(6, y) is (5, 6), then x and y are:",
      hi: "यदि A(x, 4) और B(6, y) का मध्यबिंदु (5, 6) है, तो x और y क्या होंगे?"
    },
    options: {
      a: { en: "x = 4, y = 8", hi: "x = 4, y = 8" },
      b: { en: "x = 6, y = 4", hi: "x = 6, y = 4" },
      c: { en: "x = 2, y = 10", hi: "x = 2, y = 10" },
      d: { en: "x = 5, y = 5", hi: "x = 5, y = 5" }
    },
    answer: "a",
    explanation: {
      en: "(x+6)/2 = 5 → x=4, (4+y)/2=6 → y=8",
      hi: "(x+6)/2 = 5 → x=4, (4+y)/2=6 → y=8"
    }
  },
  {
    question: {
      en: "Midpoint of (–3, –2) and (3, 4) is:",
      hi: "(–3, –2) और (3, 4) का मध्यबिंदु है:"
    },
    options: {
      a: { en: "(0, 1)", hi: "(0, 1)" },
      b: { en: "(3, 4)", hi: "(3, 4)" },
      c: { en: "(–6, –6)", hi: "(–6, –6)" },
      d: { en: "(1, 1)", hi: "(1, 1)" }
    },
    answer: "a",
    explanation: {
      en: "Midpoint = [(–3+3)/2, (–2+4)/2] = (0, 1)",
      hi: "मध्यबिंदु = [(–3+3)/2, (–2+4)/2] = (0, 1)"
    }
  },
  {
    question: {
      en: "Midpoint lies exactly:",
      hi: "मध्यबिंदु ठीक कहां स्थित होता है?"
    },
    options: {
      a: { en: "Between the endpoints", hi: "अंत बिंदुओं के बीच" },
      b: { en: "Away from the line", hi: "रेखा से दूर" },
      c: { en: "Always on origin", hi: "हमेशा मूल पर" },
      d: { en: "Outside the segment", hi: "खंड के बाहर" }
    },
    answer: "a",
    explanation: {
      en: "Midpoint is equidistant from both endpoints.",
      hi: "मध्यबिंदु दोनों सिरों से समान दूरी पर होता है।"
    }
  },
  {
    question: {
      en: "The coordinates of midpoint are average of:",
      hi: "मध्यबिंदु के निर्देशांक किसका औसत होते हैं?"
    },
    options: {
      a: { en: "x and y of both points", hi: "दोनों बिंदुओं के x और y का औसत" },
      b: { en: "Only x-values", hi: "केवल x-मूल्य" },
      c: { en: "Only y-values", hi: "केवल y-मूल्य" },
      d: { en: "Product of coordinates", hi: "निर्देशांकों का गुणनफल" }
    },
    answer: "a",
    explanation: {
      en: "Midpoint is the mean of corresponding coordinates.",
      hi: "मध्यबिंदु संबंधित निर्देशांकों का औसत होता है।"
    }
  },
  {
    question: {
      en: "If A and B lie on a line and midpoint is (0, 0), then A and B are:",
      hi: "यदि A और B एक रेखा पर हैं और मध्यबिंदु (0, 0) है, तो A और B क्या होंगे?"
    },
    options: {
      a: { en: "Equally distant from origin", hi: "मूल से समान दूरी पर" },
      b: { en: "At same place", hi: "एक ही स्थान पर" },
      c: { en: "On y-axis", hi: "y-अक्ष पर" },
      d: { en: "On different lines", hi: "विभिन्न रेखाओं पर" }
    },
    answer: "a",
    explanation: {
      en: "Midpoint at origin implies A & B are mirror images around origin.",
      hi: "मूल पर मध्यबिंदु होने का अर्थ है कि A और B मूल के चारों ओर समदूरी पर हैं।"
    }
  },
  {
    question: {
      en: "Midpoint of (x₁, y₁) and (x₂, y₂) is same as:",
      hi: "(x₁, y₁) और (x₂, y₂) का मध्यबिंदु किसके बराबर होता है?"
    },
    options: {
      a: { en: "Mean of x and y values", hi: "x और y मूल्यों का औसत" },
      b: { en: "Sum of x and y", hi: "x और y का योग" },
      c: { en: "Product of x and y", hi: "x और y का गुणनफल" },
      d: { en: "Difference of x and y", hi: "x और y का अंतर" }
    },
    answer: "a",
    explanation: {
      en: "Midpoint uses average of coordinates.",
      hi: "मध्यबिंदु निर्देशांकों का औसत होता है।"
    }
  },
  {
    question: {
      en: "Midpoint of (–6, –2) and (4, 6) is:",
      hi: "(–6, –2) और (4, 6) का मध्यबिंदु क्या है?"
    },
    options: {
      a: { en: "(-1, 2)", hi: "(-1, 2)" },
      b: { en: "(0, 4)", hi: "(0, 4)" },
      c: { en: "(1, 1)", hi: "(1, 1)" },
      d: { en: "(–2, –1)", hi: "(–2, –1)" }
    },
    answer: "a",
    explanation: {
      en: "x = (-6 + 4)/2 = -1, y = (-2 + 6)/2 = 2",
      hi: "x = (-6 + 4)/2 = -1, y = (-2 + 6)/2 = 2"
    }
  }
];

export default midpointFormula;
