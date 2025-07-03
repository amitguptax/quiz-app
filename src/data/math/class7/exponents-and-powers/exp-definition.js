const expDefinition = [
  {
    id: 1,
    question: {
      en: "What is 2³ equal to?",
      hi: "2³ किसके बराबर है?"
    },
    options: ["6", "8", "9", "12"],
    answer: "8",
    explanation: {
      en: "2³ means 2 × 2 × 2 = 8.",
      hi: "2³ का मतलब है 2 × 2 × 2 = 8।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the base in the expression 5²?",
      hi: "5² में आधार (base) क्या है?"
    },
    options: ["2", "5", "25", "7"],
    answer: "5",
    explanation: {
      en: "In 5², 5 is the base and 2 is the exponent.",
      hi: "5² में, 5 आधार (base) है और 2 घातांक (exponent) है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the exponent in 3⁴?",
      hi: "3⁴ में घातांक क्या है?"
    },
    options: ["3", "4", "12", "7"],
    answer: "4",
    explanation: {
      en: "In 3⁴, 4 is the exponent, showing how many times 3 is multiplied.",
      hi: "3⁴ में, 4 घातांक है, जो दर्शाता है कि 3 को कितनी बार गुणा किया गया।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which law is represented by aⁿ × aᵐ = ?",
      hi: "aⁿ × aᵐ = ? किस नियम को दर्शाता है?"
    },
    options: [
      "Product of powers rule",
      "Power of a power rule",
      "Quotient of powers rule",
      "Zero exponent rule"
    ],
    answer: "Product of powers rule",
    explanation: {
      en: "aⁿ × aᵐ = aⁿ⁺ᵐ is called product of powers rule.",
      hi: "aⁿ × aᵐ = aⁿ⁺ᵐ को गुणन नियम (product rule) कहा जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the value of 10⁰?",
      hi: "10⁰ का मान क्या है?"
    },
    options: ["0", "1", "10", "Undefined"],
    answer: "1",
    explanation: {
      en: "Any non-zero number raised to power 0 is 1.",
      hi: "कोई भी गैर-शून्य संख्या की शून्य घात 1 होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is aⁿ ÷ aᵐ equal to?",
      hi: "aⁿ ÷ aᵐ किसके बराबर होता है?"
    },
    options: ["aⁿ⁺ᵐ", "aⁿ⁻ᵐ", "aᵐ⁻ⁿ", "aⁿ×ᵐ"],
    answer: "aⁿ⁻ᵐ",
    explanation: {
      en: "This is the quotient rule: aⁿ ÷ aᵐ = aⁿ⁻ᵐ",
      hi: "यह भाजन नियम है: aⁿ ÷ aᵐ = aⁿ⁻ᵐ"
    }
  },
  {
    id: 7,
    question: {
      en: "What is (2³)² equal to?",
      hi: "(2³)² किसके बराबर है?"
    },
    options: ["2⁵", "2⁶", "6", "8"],
    answer: "2⁶",
    explanation: {
      en: "(2³)² = 2³×² = 2⁶",
      hi: "(2³)² = 2³×² = 2⁶"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is a power form of 125?",
      hi: "125 का घातांक रूप कौन सा है?"
    },
    options: ["5³", "25²", "3⁵", "None"],
    answer: "5³",
    explanation: {
      en: "5 × 5 × 5 = 125 = 5³",
      hi: "5 × 5 × 5 = 125 = 5³"
    }
  },
  {
    id: 9,
    question: {
      en: "Which law is used in this expression: (aⁿ)ᵐ = ?",
      hi: "(aⁿ)ᵐ = ? किस नियम का उपयोग है?"
    },
    options: [
      "Power of a product",
      "Power of a power",
      "Quotient rule",
      "Base change rule"
    ],
    answer: "Power of a power",
    explanation: {
      en: "(aⁿ)ᵐ = aⁿ×ᵐ is power of a power law.",
      hi: "(aⁿ)ᵐ = aⁿ×ᵐ घात का घात नियम है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the simplified value of a³ × a⁴?",
      hi: "a³ × a⁴ का सरलीकृत मान क्या है?"
    },
    options: ["a⁷", "a¹²", "a¹", "a⁰"],
    answer: "a⁷",
    explanation: {
      en: "Using the product rule, a³ × a⁴ = a³⁺⁴ = a⁷",
      hi: "गुणन नियम के अनुसार a³ × a⁴ = a³⁺⁴ = a⁷"
    }
  }
];

export default expDefinition;
