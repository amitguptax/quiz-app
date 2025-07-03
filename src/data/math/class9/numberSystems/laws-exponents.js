const lawsExponents = [
  {
    id: 1,
    question: {
      en: "What is the value of a⁰ (a ≠ 0)?",
      hi: "a⁰ का मान क्या है (a ≠ 0)?"
    },
    options: ["0", "a", "1", "Undefined"],
    answer: "1",
    explanation: {
      en: "Any non-zero number raised to the power 0 is always 1.",
      hi: "किसी भी गैर-शून्य संख्या की घात 0 होने पर उसका मान 1 होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "aᵐ × aⁿ = ?",
      hi: "aᵐ × aⁿ = ?"
    },
    options: ["aᵐ⁺ⁿ", "aᵐ⁻ⁿ", "aᵐⁿ", "aᵐ/ⁿ"],
    answer: "aᵐ⁺ⁿ",
    explanation: {
      en: "When multiplying powers with the same base, add the exponents.",
      hi: "एक ही आधार वाली घातों को गुणा करते समय घातों को जोड़ा जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "(aᵐ)ⁿ = ?",
      hi: "(aᵐ)ⁿ = ?"
    },
    options: ["aᵐ⁺ⁿ", "aᵐⁿ", "aᵐ⁻ⁿ", "aᵐ/ⁿ"],
    answer: "aᵐⁿ",
    explanation: {
      en: "When raising a power to another power, multiply the exponents.",
      hi: "घात की घात लेने पर, घातों का गुणन किया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "aᵐ ÷ aⁿ = ?",
      hi: "aᵐ ÷ aⁿ = ?"
    },
    options: ["aᵐ⁺ⁿ", "aᵐ⁻ⁿ", "aᵐⁿ", "aᵐ/ⁿ"],
    answer: "aᵐ⁻ⁿ",
    explanation: {
      en: "When dividing powers with the same base, subtract the exponents.",
      hi: "एक ही आधार वाली घातों को भाग करते समय घात घटाई जाती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is (ab)ⁿ?",
      hi: "(ab)ⁿ का मान क्या है?"
    },
    options: ["aⁿ + bⁿ", "aⁿbⁿ", "aⁿ/bⁿ", "(a + b)ⁿ"],
    answer: "aⁿbⁿ",
    explanation: {
      en: "(ab)ⁿ = aⁿ × bⁿ",
      hi: "(ab)ⁿ = aⁿ × bⁿ"
    }
  },
  {
    id: 6,
    question: {
      en: "(a/b)ⁿ = ?",
      hi: "(a/b)ⁿ = ?"
    },
    options: ["aⁿ/bⁿ", "aⁿ + bⁿ", "aⁿbⁿ", "(a + b)ⁿ"],
    answer: "aⁿ/bⁿ",
    explanation: {
      en: "When a fraction is raised to a power, both numerator and denominator are raised.",
      hi: "जब किसी भिन्न को घात दी जाती है तो अंश और हर दोनों को घात दी जाती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the value of 2⁻³?",
      hi: "2⁻³ का मान क्या है?"
    },
    options: ["8", "-8", "1/8", "-1/8"],
    answer: "1/8",
    explanation: {
      en: "Negative exponent means reciprocal: 2⁻³ = 1/2³ = 1/8",
      hi: "ऋणात्मक घात का अर्थ है व्युत्क्रमानुपाती: 2⁻³ = 1/2³ = 1/8"
    }
  },
  {
    id: 8,
    question: {
      en: "If a⁻² = 1/16, find a.",
      hi: "यदि a⁻² = 1/16, तो a का मान क्या होगा?"
    },
    options: ["4", "-4", "1/4", "-1/4"],
    answer: "4",
    explanation: {
      en: "a⁻² = 1/16 ⇒ a² = 16 ⇒ a = ±4",
      hi: "a⁻² = 1/16 ⇒ a² = 16 ⇒ a = ±4"
    }
  },
  {
    id: 9,
    question: {
      en: "Which law is used in: (ab)ⁿ = aⁿ × bⁿ?",
      hi: "इस समीकरण में कौन-सा नियम प्रयोग हुआ है: (ab)ⁿ = aⁿ × bⁿ?"
    },
    options: ["Multiplication Law", "Power of a product", "Negative exponent", "Quotient Law"],
    answer: "Power of a product",
    explanation: {
      en: "This is called the Power of a Product law.",
      hi: "इसे गुणनफल की घात का नियम कहते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Evaluate: (3²)³",
      hi: "(3²)³ का मान ज्ञात करें।"
    },
    options: ["27", "729", "81", "512"],
    answer: "729",
    explanation: {
      en: "(3²)³ = 3^(2×3) = 3⁶ = 729",
      hi: "(3²)³ = 3^(2×3) = 3⁶ = 729"
    }
  }
];

export default lawsExponents;
