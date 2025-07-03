const negativeExponents = [
  {
    id: 1,
    question: {
      en: "What is the value of 2⁻³?",
      hi: "2⁻³ का मान क्या है?"
    },
    options: ["-6", "1/6", "1/8", "8"],
    answer: "1/8",
    explanation: {
      en: "2⁻³ = 1 / (2³) = 1 / 8",
      hi: "2⁻³ = 1 / (2³) = 1 / 8"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following equals 5⁻²?",
      hi: "निम्न में से कौन 5⁻² के बराबर है?"
    },
    options: ["1/25", "-25", "25", "1/10"],
    answer: "1/25",
    explanation: {
      en: "5⁻² = 1 / (5²) = 1 / 25",
      hi: "5⁻² = 1 / (5²) = 1 / 25"
    }
  },
  {
    id: 3,
    question: {
      en: "Evaluate: 10⁻¹",
      hi: "गणना करें: 10⁻¹"
    },
    options: ["1/100", "1/10", "10", "-10"],
    answer: "1/10",
    explanation: {
      en: "10⁻¹ = 1 / 10",
      hi: "10⁻¹ = 1 / 10"
    }
  },
  {
    id: 4,
    question: {
      en: "Which rule applies for a⁻ⁿ?",
      hi: "a⁻ⁿ के लिए कौन-सा नियम लागू होता है?"
    },
    options: ["a⁻ⁿ = -aⁿ", "a⁻ⁿ = a × n", "a⁻ⁿ = 1/aⁿ", "a⁻ⁿ = n/a"],
    answer: "a⁻ⁿ = 1/aⁿ",
    explanation: {
      en: "Negative exponent means reciprocal: a⁻ⁿ = 1 / aⁿ",
      hi: "ऋण घातांक का अर्थ है व्युत्क्रम: a⁻ⁿ = 1 / aⁿ"
    }
  },
  {
    id: 5,
    question: {
      en: "Find the value of (3/4)⁻²",
      hi: "(3/4)⁻² का मान ज्ञात करें।"
    },
    options: ["16/9", "9/16", "3/4", "4/3"],
    answer: "16/9",
    explanation: {
      en: "(3/4)⁻² = (4/3)² = 16/9",
      hi: "(3/4)⁻² = (4/3)² = 16/9"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these equals 1⁻⁵?",
      hi: "इनमें से कौन 1⁻⁵ के बराबर है?"
    },
    options: ["1", "-1", "0", "5"],
    answer: "1",
    explanation: {
      en: "1 to any power, positive or negative, is always 1.",
      hi: "1 की कोई भी घात (ऋणात्मक या धनात्मक) हो, उत्तर 1 ही होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Simplify: (2⁻²) × (2³)",
      hi: "सरलीकृत करें: (2⁻²) × (2³)"
    },
    options: ["2⁵", "2", "2¹", "2⁻⁵"],
    answer: "2¹",
    explanation: {
      en: "Use exponent rule: aᵐ × aⁿ = aᵐ⁺ⁿ → 2⁻² × 2³ = 2¹",
      hi: "घातांक नियम: aᵐ × aⁿ = aᵐ⁺ⁿ → 2⁻² × 2³ = 2¹"
    }
  },
  {
    id: 8,
    question: {
      en: "If a⁻² = 1/25, what is a?",
      hi: "यदि a⁻² = 1/25 है, तो a का मान क्या है?"
    },
    options: ["5", "-5", "±5", "25"],
    answer: "±5",
    explanation: {
      en: "1/a² = 1/25 → a² = 25 → a = ±5",
      hi: "1/a² = 1/25 → a² = 25 → a = ±5"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the reciprocal of 2⁻⁴?",
      hi: "2⁻⁴ का व्युत्क्रम क्या है?"
    },
    options: ["2⁴", "1/2⁴", "-2⁴", "4²"],
    answer: "2⁴",
    explanation: {
      en: "2⁻⁴ = 1/2⁴ → Reciprocal = 2⁴",
      hi: "2⁻⁴ = 1/2⁴ → व्युत्क्रम = 2⁴"
    }
  },
  {
    id: 10,
    question: {
      en: "Simplify: (5⁻² × 5⁴)",
      hi: "सरलीकृत करें: (5⁻² × 5⁴)"
    },
    options: ["5²", "5⁶", "5", "25"],
    answer: "5²",
    explanation: {
      en: "Use rule: aᵐ × aⁿ = aᵐ⁺ⁿ → 5⁻² × 5⁴ = 5²",
      hi: "नियम: aᵐ × aⁿ = aᵐ⁺ⁿ → 5⁻² × 5⁴ = 5²"
    }
  }
];

export default negativeExponents;
