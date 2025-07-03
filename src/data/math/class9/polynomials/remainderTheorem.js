const remainderTheorem = [
  {
    question: {
      en: "What does the Remainder Theorem state?",
      hi: "अवशिष्ट सिद्धांत क्या बताता है?"
    },
    options: {
      a: {
        en: "The remainder when a polynomial f(x) is divided by (x - a) is f(a).",
        hi: "जब किसी बहुपद f(x) को (x - a) से भाग दिया जाता है, तो शेषफल f(a) होता है।"
      },
      b: {
        en: "The remainder is always 0.",
        hi: "शेषफल हमेशा 0 होता है।"
      },
      c: {
        en: "It gives the degree of a polynomial.",
        hi: "यह बहुपद की घात बताता है।"
      },
      d: {
        en: "It is used for factoring equations.",
        hi: "यह समीकरणों को गुणनखंड करने के लिए उपयोग किया जाता है।"
      }
    },
    answer: "a",
    explanation: {
      en: "Remainder Theorem states that if a polynomial f(x) is divided by (x - a), the remainder is f(a)."
    }
  },
  {
    question: {
      en: "If f(x) = x² + 2x + 3, what is the remainder when divided by (x - 1)?",
      hi: "यदि f(x) = x² + 2x + 3 है, तो (x - 1) से भाग देने पर शेषफल क्या होगा?"
    },
    options: {
      a: { en: "6", hi: "6" },
      b: { en: "4", hi: "4" },
      c: { en: "2", hi: "2" },
      d: { en: "0", hi: "0" }
    },
    answer: "a",
    explanation: {
      en: "f(1) = 1² + 2×1 + 3 = 6. So remainder = 6."
    }
  },
  {
    question: {
      en: "If the remainder when f(x) is divided by (x - a) is 0, what does it imply?",
      hi: "यदि f(x) को (x - a) से भाग देने पर शेषफल 0 आता है, तो इसका क्या अर्थ है?"
    },
    options: {
      a: { en: "a is a root of the polynomial", hi: "a बहुपद का एक मूल है" },
      b: { en: "a is not in the domain", hi: "a डोमेन में नहीं है" },
      c: { en: "Polynomial is constant", hi: "बहुपद एक स्थिरांक है" },
      d: { en: "The polynomial has no solution", hi: "बहुपद का कोई हल नहीं है" }
    },
    answer: "a",
    explanation: {
      en: "If f(a) = 0, then (x - a) is a factor and a is a root of f(x)."
    }
  },
  {
    question: {
      en: "Find the remainder when f(x) = x³ + 4x² + x + 6 is divided by (x + 1).",
      hi: "f(x) = x³ + 4x² + x + 6 को (x + 1) से भाग देने पर शेषफल क्या होगा?"
    },
    options: {
      a: { en: "8", hi: "8" },
      b: { en: "12", hi: "12" },
      c: { en: "10", hi: "10" },
      d: { en: "0", hi: "0" }
    },
    answer: "a",
    explanation: {
      en: "f(-1) = (-1)³ + 4×(-1)² + (-1) + 6 = -1 + 4 -1 + 6 = 8."
    }
  },
  {
    question: {
      en: "Which of the following is not used in Remainder Theorem?",
      hi: "निम्न में से कौन अवशिष्ट सिद्धांत में उपयोग नहीं होता?"
    },
    options: {
      a: { en: "Value of a", hi: "a का मान" },
      b: { en: "Degree of polynomial", hi: "बहुपद की घात" },
      c: { en: "Function f(x)", hi: "सापेक्ष f(x)" },
      d: { en: "Divisor (x - a)", hi: "भाजक (x - a)" }
    },
    answer: "b",
    explanation: {
      en: "The degree is not directly used in computing the remainder using the theorem."
    }
  },
  {
    question: {
      en: "What is the remainder when f(x) = 2x² - 3x + 4 is divided by (x - 2)?",
      hi: "f(x) = 2x² - 3x + 4 को (x - 2) से भाग देने पर शेषफल क्या होगा?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "6", hi: "6" },
      c: { en: "10", hi: "10" },
      d: { en: "0", hi: "0" }
    },
    answer: "b",
    explanation: {
      en: "f(2) = 2×4 - 3×2 + 4 = 8 - 6 + 4 = 6."
    }
  },
  {
    question: {
      en: "Which is true according to the Remainder Theorem?",
      hi: "अवशिष्ट सिद्धांत के अनुसार कौन सा सही है?"
    },
    options: {
      a: { en: "f(a) is the quotient", hi: "f(a) भाजक है" },
      b: { en: "f(a) is the factor", hi: "f(a) गुणनखंड है" },
      c: { en: "f(a) is the remainder", hi: "f(a) शेषफल है" },
      d: { en: "f(a) is the divisor", hi: "f(a) भाजक है" }
    },
    answer: "c",
    explanation: {
      en: "Remainder when dividing by (x - a) is f(a)."
    }
  },
  {
    question: {
      en: "When is (x - a) a factor of f(x)?",
      hi: "f(x) के लिए (x - a) कब एक गुणनखंड होता है?"
    },
    options: {
      a: { en: "f(a) ≠ 0", hi: "f(a) ≠ 0" },
      b: { en: "f(a) = 0", hi: "f(a) = 0" },
      c: { en: "f(x) = 0", hi: "f(x) = 0" },
      d: { en: "a = 0", hi: "a = 0" }
    },
    answer: "b",
    explanation: {
      en: "By the Factor Theorem, if f(a) = 0, then (x - a) is a factor."
    }
  },
  {
    question: {
      en: "What is f(-2) if f(x) = x² - x - 6?",
      hi: "यदि f(x) = x² - x - 6 हो तो f(-2) क्या होगा?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "4", hi: "4" },
      c: { en: "8", hi: "8" },
      d: { en: "12", hi: "12" }
    },
    answer: "a",
    explanation: {
      en: "f(-2) = (-2)² - (-2) - 6 = 4 + 2 - 6 = 0."
    }
  },
  {
    question: {
      en: "Use Remainder Theorem to find remainder: f(x) = 3x² - 2x + 5, divide by (x + 1)",
      hi: "अवशिष्ट सिद्धांत का उपयोग करके शेषफल निकालें: f(x) = 3x² - 2x + 5, (x + 1) से भाग करें"
    },
    options: {
      a: { en: "10", hi: "10" },
      b: { en: "6", hi: "6" },
      c: { en: "0", hi: "0" },
      d: { en: "4", hi: "4" }
    },
    answer: "a",
    explanation: {
      en: "f(-1) = 3×1 + 2 + 5 = 10."
    }
  }
];

export default remainderTheorem;
