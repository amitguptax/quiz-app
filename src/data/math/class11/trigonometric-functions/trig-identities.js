const trigIdentities = [
  {
    question: {
      en: "What is the fundamental trigonometric identity?",
      hi: "मूल त्रिकोणमितीय पहचान क्या है?"
    },
    options: {
      a: { en: "sin²θ + cos²θ = 1", hi: "sin²θ + cos²θ = 1" },
      b: { en: "tan²θ + 1 = sec²θ", hi: "tan²θ + 1 = sec²θ" },
      c: { en: "cot²θ + 1 = csc²θ", hi: "cot²θ + 1 = csc²θ" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "All are standard trigonometric identities.",
      hi: "ये सभी मानक त्रिकोणमितीय पहचानें हैं।"
    }
  },
  {
    question: {
      en: "Which identity is derived from sin²θ + cos²θ = 1?",
      hi: "sin²θ + cos²θ = 1 से कौन सी पहचान प्राप्त होती है?"
    },
    options: {
      a: { en: "tan²θ = sec²θ - 1", hi: "tan²θ = sec²θ - 1" },
      b: { en: "cot²θ = csc²θ - 1", hi: "cot²θ = csc²θ - 1" },
      c: { en: "sec²θ - tan²θ = 1", hi: "sec²θ - tan²θ = 1" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "All are variations of standard identities.",
      hi: "ये सभी पहचानें मूल सूत्रों से प्राप्त होती हैं।"
    }
  },
  {
    question: {
      en: "What is the value of sin²θ + cos²θ?",
      hi: "sin²θ + cos²θ का मान क्या होता है?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "1", hi: "1" },
      c: { en: "2", hi: "2" },
      d: { en: "Undefined", hi: "अपरिभाषित" }
    },
    answer: "b",
    explanation: {
      en: "It is the fundamental identity of trigonometry.",
      hi: "यह त्रिकोणमिति की मूल पहचान है।"
    }
  },
  {
    question: {
      en: "sec²θ - tan²θ = ?",
      hi: "sec²θ - tan²θ = ?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "1", hi: "1" },
      c: { en: "tan²θ", hi: "tan²θ" },
      d: { en: "sec²θ", hi: "sec²θ" }
    },
    answer: "b",
    explanation: {
      en: "It’s one of the three fundamental identities.",
      hi: "यह तीन मूल त्रिकोणमितीय पहचान में से एक है।"
    }
  },
  {
    question: {
      en: "csc²θ - cot²θ equals:",
      hi: "csc²θ - cot²θ का मान क्या होता है?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "1", hi: "1" },
      c: { en: "cot²θ", hi: "cot²θ" },
      d: { en: "csc²θ", hi: "csc²θ" }
    },
    answer: "b",
    explanation: {
      en: "It’s a known identity: csc²θ - cot²θ = 1.",
      hi: "यह एक प्रसिद्ध पहचान है: csc²θ - cot²θ = 1।"
    }
  },
  {
    question: {
      en: "If tan²θ + 1 = sec²θ, then sec²θ - 1 = ?",
      hi: "यदि tan²θ + 1 = sec²θ, तो sec²θ - 1 = ?"
    },
    options: {
      a: { en: "tan²θ", hi: "tan²θ" },
      b: { en: "1", hi: "1" },
      c: { en: "sec²θ", hi: "sec²θ" },
      d: { en: "cot²θ", hi: "cot²θ" }
    },
    answer: "a",
    explanation: {
      en: "Rearranging identity gives sec²θ - 1 = tan²θ.",
      hi: "पहचान को पुनः व्यवस्थित करने पर sec²θ - 1 = tan²θ।"
    }
  },
  {
    question: {
      en: "If sinθ = 3/5, then cosθ = ?",
      hi: "यदि sinθ = 3/5, तो cosθ = ?"
    },
    options: {
      a: { en: "4/5", hi: "4/5" },
      b: { en: "5/4", hi: "5/4" },
      c: { en: "√(1 - 9/25)", hi: "√(1 - 9/25)" },
      d: { en: "16/25", hi: "16/25" }
    },
    answer: "a",
    explanation: {
      en: "cos²θ = 1 - sin²θ = 1 - 9/25 = 16/25 ⇒ cosθ = 4/5.",
      hi: "cos²θ = 1 - 9/25 = 16/25 ⇒ cosθ = 4/5।"
    }
  },
  {
    question: {
      en: "Which of the following is not an identity?",
      hi: "निम्न में से कौन एक पहचान नहीं है?"
    },
    options: {
      a: { en: "sinθ + cosθ = 1", hi: "sinθ + cosθ = 1" },
      b: { en: "sin²θ + cos²θ = 1", hi: "sin²θ + cos²θ = 1" },
      c: { en: "1 + tan²θ = sec²θ", hi: "1 + tan²θ = sec²θ" },
      d: { en: "1 + cot²θ = csc²θ", hi: "1 + cot²θ = csc²θ" }
    },
    answer: "a",
    explanation: {
      en: "sinθ + cosθ = 1 is not true for all θ, hence not an identity.",
      hi: "sinθ + cosθ = 1 सभी θ के लिए सही नहीं है।"
    }
  },
  {
    question: {
      en: "If cotA = 5/12, then cscA = ?",
      hi: "यदि cotA = 5/12, तो cscA = ?"
    },
    options: {
      a: { en: "13/5", hi: "13/5" },
      b: { en: "13/12", hi: "13/12" },
      c: { en: "13/1", hi: "13/1" },
      d: { en: "12/13", hi: "12/13" }
    },
    answer: "a",
    explanation: {
      en: "cotA = Adj/Opp ⇒ hypotenuse = √(5²+12²)=13 ⇒ cscA = hyp/opp = 13/5.",
      hi: "cotA = 5/12 ⇒ कर्ण = √(5²+12²)=13 ⇒ cscA = 13/5।"
    }
  },
  {
    question: {
      en: "If secA = x and tanA = y, then the identity is:",
      hi: "यदि secA = x और tanA = y, तो पहचान क्या होगी?"
    },
    options: {
      a: { en: "x² - y² = 1", hi: "x² - y² = 1" },
      b: { en: "x² + y² = 1", hi: "x² + y² = 1" },
      c: { en: "y² - x² = 1", hi: "y² - x² = 1" },
      d: { en: "x² - 1 = y²", hi: "x² - 1 = y²" }
    },
    answer: "d",
    explanation: {
      en: "sec²A - tan²A = 1 ⇒ x² - y² = 1 ⇒ x² - 1 = y².",
      hi: "sec²A - tan²A = 1 ⇒ x² - y² = 1 ⇒ x² - 1 = y²।"
    }
  }
];

export default trigIdentities;
