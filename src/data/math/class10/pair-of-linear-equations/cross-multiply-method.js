const crossMultiplyMethod = [
  {
    question: {
      en: "What is the standard form for applying cross multiplication?",
      hi: "क्रॉस मल्टिप्लिकेशन विधि के लिए मानक रूप क्या है?"
    },
    options: {
      a: { en: "x + y = c", hi: "x + y = c" },
      b: { en: "a₁x + b₁y + c₁ = 0", hi: "a₁x + b₁y + c₁ = 0" },
      c: { en: "ax = by + c", hi: "ax = by + c" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Equations must be written in the form: a₁x + b₁y + c₁ = 0."
    }
  },
  {
    question: {
      en: "In cross multiplication method, x is calculated using:",
      hi: "क्रॉस मल्टिप्लिकेशन विधि में x कैसे ज्ञात किया जाता है?"
    },
    options: {
      a: { en: "(b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)", hi: "(b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁)" },
      b: { en: "(c₁b₂ - c₂b₁)/(a₁b₂ - a₂b₁)", hi: "(c₁b₂ - c₂b₁)/(a₁b₂ - a₂b₁)" },
      c: { en: "(b₂c₁ - b₁c₂)/(a₁b₂ - a₂b₁)", hi: "(b₂c₁ - b₁c₂)/(a₁b₂ - a₂b₁)" },
      d: { en: "(b₁c₁ + b₂c₂)/(a₁b₁ + a₂b₂)", hi: "(b₁c₁ + b₂c₂)/(a₁b₁ + a₂b₂)" }
    },
    answer: "c",
    explanation: {
      en: "x = (b₂c₁ - b₁c₂) / (a₁b₂ - a₂b₁)"
    }
  },
  {
    question: {
      en: "Which step comes first in the cross multiplication method?",
      hi: "क्रॉस मल्टिप्लिकेशन विधि में पहला कदम क्या होता है?"
    },
    options: {
      a: { en: "Graph both lines", hi: "दोनों रेखाएँ खींचना" },
      b: { en: "Convert to ax + by + c = 0 form", hi: "ax + by + c = 0 रूप में बदलना" },
      c: { en: "Eliminate one variable", hi: "एक चर को हटाना" },
      d: { en: "Add both equations", hi: "दोनों समीकरणों को जोड़ना" }
    },
    answer: "b",
    explanation: {
      en: "Convert both equations to standard form to apply cross multiplication."
    }
  },
  {
    question: {
      en: "In cross multiplication, if denominator = 0 and numerator ≠ 0, then:",
      hi: "यदि हर = 0 और अंश ≠ 0 हो, तो क्या निष्कर्ष निकलता है?"
    },
    options: {
      a: { en: "Unique solution", hi: "एकमात्र हल" },
      b: { en: "Infinite solutions", hi: "अनंत हल" },
      c: { en: "No solution", hi: "कोई हल नहीं" },
      d: { en: "Can't say", hi: "कहा नहीं जा सकता" }
    },
    answer: "c",
    explanation: {
      en: "If denominator is zero and numerator is not zero, lines are parallel → no solution."
    }
  },
  {
    question: {
      en: "What is the condition for unique solution in cross multiplication?",
      hi: "क्रॉस मल्टिप्लिकेशन में एकमात्र हल की शर्त क्या है?"
    },
    options: {
      a: { en: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂", hi: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂" },
      b: { en: "a₁/a₂ ≠ b₁/b₂", hi: "a₁/a₂ ≠ b₁/b₂" },
      c: { en: "a₁/a₂ = b₁/b₂ = c₁/c₂", hi: "a₁/a₂ = b₁/b₂ = c₁/c₂" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "If ratios of a and b are unequal, lines intersect once → unique solution."
    }
  },
  {
    question: {
      en: "What if a₁/a₂ = b₁/b₂ = c₁/c₂ in cross multiplication?",
      hi: "यदि a₁/a₂ = b₁/b₂ = c₁/c₂ हो तो क्या होगा?"
    },
    options: {
      a: { en: "No solution", hi: "कोई हल नहीं" },
      b: { en: "Infinite solutions", hi: "अनंत हल" },
      c: { en: "Unique solution", hi: "एकमात्र हल" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "This condition indicates coincident lines → infinite solutions."
    }
  },
  {
    question: {
      en: "Find x: 3x + 2y = 5, 4x - y = 6 using cross multiplication",
      hi: "क्रॉस मल्टिप्लिकेशन विधि से x ज्ञात करें: 3x + 2y = 5, 4x - y = 6"
    },
    options: {
      a: { en: "x = 2", hi: "x = 2" },
      b: { en: "x = 1", hi: "x = 1" },
      c: { en: "x = 0", hi: "x = 0" },
      d: { en: "x = -1", hi: "x = -1" }
    },
    answer: "a",
    explanation: {
      en: "Solving using cross multiplication: x = 2."
    }
  },
  {
    question: {
      en: "Cross multiplication uses which part of equation coefficients?",
      hi: "क्रॉस मल्टिप्लिकेशन में समीकरण के कौन से भागों का प्रयोग होता है?"
    },
    options: {
      a: { en: "Only a and b", hi: "केवल a और b" },
      b: { en: "Only x and y", hi: "केवल x और y" },
      c: { en: "All coefficients a, b, c", hi: "सभी गुणांक a, b, c" },
      d: { en: "Only c values", hi: "केवल c मान" }
    },
    answer: "c",
    explanation: {
      en: "All coefficients a₁, b₁, c₁ and a₂, b₂, c₂ are used."
    }
  },
  {
    question: {
      en: "Which method uses determinant-like formula to solve equations?",
      hi: "कौन सी विधि समीकरण हल करने के लिए डिटर्मिनेंट जैसी विधि का उपयोग करती है?"
    },
    options: {
      a: { en: "Substitution", hi: "प्रतिस्थापन" },
      b: { en: "Elimination", hi: "उन्मूलन" },
      c: { en: "Graphical", hi: "ग्राफ़" },
      d: { en: "Cross multiplication", hi: "क्रॉस मल्टिप्लिकेशन" }
    },
    answer: "d",
    explanation: {
      en: "Cross multiplication resembles determinant structure to find x and y."
    }
  }
];

export default crossMultiplyMethod;
