const crossMultiplyMethod = [
  {
    question: {
      en: "What is the general form of linear equations used in cross-multiplication?",
      hi: "क्रॉस मल्टिप्लिकेशन विधि में रेखीय समीकरणों का सामान्य रूप क्या होता है?"
    },
    options: {
      a: { en: "ax + by = c", hi: "ax + by = c" },
      b: { en: "ax² + bx + c = 0", hi: "ax² + bx + c = 0" },
      c: { en: "a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0", hi: "a₁x + b₁y + c₁ = 0 और a₂x + b₂y + c₂ = 0" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "Cross-multiplication requires the general form a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0."
    }
  },
  {
    question: {
      en: "Which formula is used to find x in the cross-multiplication method?",
      hi: "क्रॉस मल्टिप्लिकेशन विधि में x प्राप्त करने के लिए कौन सा सूत्र प्रयोग होता है?"
    },
    options: {
      a: { en: "x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)", hi: "x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)" },
      b: { en: "x = (b₁ - b₂)/(a₁ - a₂)", hi: "x = (b₁ - b₂)/(a₁ - a₂)" },
      c: { en: "x = (a₁b₂ + b₁a₂)", hi: "x = (a₁b₂ + b₁a₂)" },
      d: { en: "x = (a₁ + a₂)/(c₁ + c₂)", hi: "x = (a₁ + a₂)/(c₁ + c₂)" }
    },
    answer: "a",
    explanation: {
      en: "Using the cross-multiplication formula: x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)."
    }
  },
  {
    question: {
      en: "Which of the following is the formula for y?",
      hi: "निम्न में से y के लिए सूत्र कौन सा है?"
    },
    options: {
      a: { en: "y = (a₂c₁ - a₁c₂)/(a₁b₂ - a₂b₁)", hi: "y = (a₂c₁ - a₁c₂)/(a₁b₂ - a₂b₁)" },
      b: { en: "y = (a₁c₂ + c₁a₂)/(b₁ - b₂)", hi: "y = (a₁c₂ + c₁a₂)/(b₁ - b₂)" },
      c: { en: "y = (a₁ - a₂)/(b₁ - b₂)", hi: "y = (a₁ - a₂)/(b₁ - b₂)" },
      d: { en: "y = (c₁ + c₂)/(a₁ + a₂)", hi: "y = (c₁ + c₂)/(a₁ + a₂)" }
    },
    answer: "a",
    explanation: {
      en: "y = (a₂c₁ - a₁c₂)/(a₁b₂ - a₂b₁) comes from cross multiplication."
    }
  },
  {
    question: {
      en: "What does it mean if denominator = 0 and numerator ≠ 0?",
      hi: "यदि हर = 0 और अंश ≠ 0 हो, तो इसका क्या अर्थ है?"
    },
    options: {
      a: { en: "Unique solution", hi: "एकमात्र हल" },
      b: { en: "Infinite solutions", hi: "अनंत हल" },
      c: { en: "No solution", hi: "कोई हल नहीं" },
      d: { en: "Incorrect method", hi: "गलत विधि" }
    },
    answer: "c",
    explanation: {
      en: "This condition implies the system is inconsistent (no solution)."
    }
  },
  {
    question: {
      en: "Which of the following is NOT part of cross multiplication setup?",
      hi: "निम्न में से कौन क्रॉस मल्टिप्लिकेशन की व्यवस्था में नहीं आता?"
    },
    options: {
      a: { en: "a₁", hi: "a₁" },
      b: { en: "c₂", hi: "c₂" },
      c: { en: "x", hi: "x" },
      d: { en: "d₁", hi: "d₁" }
    },
    answer: "d",
    explanation: {
      en: "Only a₁, b₁, c₁, a₂, b₂, c₂ are used. d₁ is not involved."
    }
  },
  {
    question: {
      en: "What is the condition for infinite solutions in cross multiplication?",
      hi: "क्रॉस मल्टिप्लिकेशन में अनंत हल के लिए क्या शर्त होती है?"
    },
    options: {
      a: { en: "a₁/a₂ ≠ b₁/b₂", hi: "a₁/a₂ ≠ b₁/b₂" },
      b: { en: "a₁/a₂ = b₁/b₂ = c₁/c₂", hi: "a₁/a₂ = b₁/b₂ = c₁/c₂" },
      c: { en: "a₁b₂ - a₂b₁ ≠ 0", hi: "a₁b₂ - a₂b₁ ≠ 0" },
      d: { en: "x = y", hi: "x = y" }
    },
    answer: "b",
    explanation: {
      en: "Equal ratios indicate coincident lines (infinite solutions)."
    }
  },
  {
    question: {
      en: "If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the pair of equations is:",
      hi: "यदि a₁/a₂ = b₁/b₂ ≠ c₁/c₂ हो, तो समीकरणों की जोड़ी कैसी होती है?"
    },
    options: {
      a: { en: "Consistent", hi: "सुसंगत" },
      b: { en: "Inconsistent", hi: "असंगत" },
      c: { en: "Dependent", hi: "निर्भर" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "This condition shows parallel lines which never intersect → No solution."
    }
  },
  {
    question: {
      en: "Which scenario gives a unique solution?",
      hi: "कौन सी स्थिति एकमात्र हल देती है?"
    },
    options: {
      a: { en: "a₁/a₂ ≠ b₁/b₂", hi: "a₁/a₂ ≠ b₁/b₂" },
      b: { en: "a₁/a₂ = b₁/b₂ = c₁/c₂", hi: "a₁/a₂ = b₁/b₂ = c₁/c₂" },
      c: { en: "a₁ = a₂ and b₁ = b₂", hi: "a₁ = a₂ और b₁ = b₂" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "When a₁/a₂ ≠ b₁/b₂, the system has a unique solution."
    }
  },
  {
    question: {
      en: "What is the cross multiplication formula visual structure?",
      hi: "क्रॉस मल्टिप्लिकेशन सूत्र का दृश्य संरचना क्या होती है?"
    },
    options: {
      a: { en: "x/y = c/b", hi: "x/y = c/b" },
      b: { en: "x : y : 1 = (b₁c₂ - b₂c₁) : (c₁a₂ - c₂a₁) : (a₁b₂ - a₂b₁)", hi: "x : y : 1 = (b₁c₂ - b₂c₁) : (c₁a₂ - c₂a₁) : (a₁b₂ - a₂b₁)" },
      c: { en: "x : y = a/b", hi: "x : y = a/b" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "This is the core cross multiplication structure used to find x and y."
    }
  },
  {
    question: {
      en: "What is the advantage of cross multiplication?",
      hi: "क्रॉस मल्टिप्लिकेशन का क्या लाभ है?"
    },
    options: {
      a: { en: "It avoids substitution", hi: "यह प्रतिस्थापन से बचाता है" },
      b: { en: "Works directly on standard form", hi: "यह सीधे मानक रूप पर कार्य करता है" },
      c: { en: "Saves time in exams", hi: "यह परीक्षा में समय बचाता है" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "It is fast, avoids substitution, and works best for equations in standard form."
    }
  }
];

export default crossMultiplyMethod;
