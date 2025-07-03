const lawsOfExponents = [
  {
    id: 1,
    question: {
      en: "What is the value of 2³ × 2²?",
      hi: "2³ × 2² का मान क्या है?"
    },
    options: ["2⁵", "2⁶", "2¹", "2⁰"],
    answer: "2⁵",
    explanation: {
      en: "Use the law aᵐ × aⁿ = aᵐ⁺ⁿ → 2³ × 2² = 2⁵",
      hi: "नियम aᵐ × aⁿ = aᵐ⁺ⁿ का प्रयोग करें → 2³ × 2² = 2⁵"
    }
  },
  {
    id: 2,
    question: {
      en: "Simplify: (3⁴) ÷ (3²)",
      hi: "सरलीकृत करें: (3⁴) ÷ (3²)"
    },
    options: ["3²", "3⁶", "3⁷", "3"],
    answer: "3²",
    explanation: {
      en: "Use: aᵐ ÷ aⁿ = aᵐ⁻ⁿ → 3⁴ ÷ 3² = 3²",
      hi: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ → 3⁴ ÷ 3² = 3²"
    }
  },
  {
    id: 3,
    question: {
      en: "What is (2³)² equal to?",
      hi: "(2³)² किसके बराबर है?"
    },
    options: ["2⁶", "2⁵", "2⁹", "6²"],
    answer: "2⁶",
    explanation: {
      en: "Use: (aᵐ)ⁿ = aᵐ×ⁿ → (2³)² = 2⁶",
      hi: "(aᵐ)ⁿ = aᵐ×ⁿ → (2³)² = 2⁶"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the value of 5⁰?",
      hi: "5⁰ का मान क्या है?"
    },
    options: ["0", "1", "5", "undefined"],
    answer: "1",
    explanation: {
      en: "Any non-zero number raised to the power 0 is 1.",
      hi: "कोई भी शून्य से भिन्न संख्या की घात 0 होने पर मान 1 होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Simplify: (4 × 3)²",
      hi: "सरलीकृत करें: (4 × 3)²"
    },
    options: ["4² × 3²", "4 + 3", "4² + 3²", "12² + 12"],
    answer: "4² × 3²",
    explanation: {
      en: "(ab)ⁿ = aⁿ × bⁿ, so (4 × 3)² = 4² × 3²",
      hi: "(ab)ⁿ = aⁿ × bⁿ → (4 × 3)² = 4² × 3²"
    }
  },
  {
    id: 6,
    question: {
      en: "Simplify: (x² × x³)",
      hi: "सरलीकृत करें: (x² × x³)"
    },
    options: ["x⁶", "x⁵", "x⁴", "x"],
    answer: "x⁵",
    explanation: {
      en: "Add powers: x² × x³ = x²⁺³ = x⁵",
      hi: "घात जोड़ें: x² × x³ = x²⁺³ = x⁵"
    }
  },
  {
    id: 7,
    question: {
      en: "What is (x⁴)⁰ equal to?",
      hi: "(x⁴)⁰ किसके बराबर है?"
    },
    options: ["x⁴", "1", "0", "undefined"],
    answer: "1",
    explanation: {
      en: "Any expression with power 0 is 1, if base ≠ 0.",
      hi: "किसी भी शून्य से भिन्न आधार की शून्य घात 1 होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the result of (5⁻¹) × (5⁴)?",
      hi: "(5⁻¹) × (5⁴) का परिणाम क्या है?"
    },
    options: ["5⁵", "5³", "5⁻³", "5⁴"],
    answer: "5³",
    explanation: {
      en: "a⁻ᵐ × aⁿ = a⁻ᵐ⁺ⁿ → 5⁻¹ × 5⁴ = 5³",
      hi: "a⁻ᵐ × aⁿ = a⁻ᵐ⁺ⁿ → 5⁻¹ × 5⁴ = 5³"
    }
  },
  {
    id: 9,
    question: {
      en: "Which law is used in: (a × b)ⁿ = aⁿ × bⁿ?",
      hi: "कौन-सा नियम (a × b)ⁿ = aⁿ × bⁿ में प्रयोग हुआ है?"
    },
    options: [
      "Power of a product",
      "Multiplication law",
      "Negative exponent law",
      "Reciprocal law"
    ],
    answer: "Power of a product",
    explanation: {
      en: "It is the 'power of a product' law of exponents.",
      hi: "यह 'गुणन का घातांक नियम' है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the value of (7⁵) ÷ (7⁷)?",
      hi: "(7⁵) ÷ (7⁷) का मान क्या है?"
    },
    options: ["7¹²", "7⁻²", "7²", "7⁰"],
    answer: "7⁻²",
    explanation: {
      en: "Use: aᵐ ÷ aⁿ = aᵐ⁻ⁿ → 7⁵ ÷ 7⁷ = 7⁻²",
      hi: "नियम: aᵐ ÷ aⁿ = aᵐ⁻ⁿ → 7⁵ ÷ 7⁷ = 7⁻²"
    }
  }
];

export default lawsOfExponents;
