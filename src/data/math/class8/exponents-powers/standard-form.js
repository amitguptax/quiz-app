const standardForm = [
  {
    id: 1,
    question: {
      en: "What is the standard form of 0.00056?",
      hi: "0.00056 का मानक रूप क्या है?"
    },
    options: ["5.6 × 10⁻⁴", "5.6 × 10⁻³", "56 × 10⁻⁵", "0.56 × 10⁻³"],
    answer: "5.6 × 10⁻⁴",
    explanation: {
      en: "Move decimal 4 places right: 5.6 × 10⁻⁴",
      hi: "दशमलव को 4 स्थान दाईं ओर ले जाएं: 5.6 × 10⁻⁴"
    }
  },
  {
    id: 2,
    question: {
      en: "Express 3.2 × 10⁻³ in decimal form.",
      hi: "3.2 × 10⁻³ को दशमलव रूप में व्यक्त करें।"
    },
    options: ["0.0032", "0.032", "0.00032", "0.000032"],
    answer: "0.0032",
    explanation: {
      en: "Move decimal 3 places left → 0.0032",
      hi: "दशमलव बाएँ 3 स्थान → 0.0032"
    }
  },
  {
    id: 3,
    question: {
      en: "Which number is correctly written in standard form?",
      hi: "कौन-सी संख्या मानक रूप में सही लिखी गई है?"
    },
    options: [
      "34 × 10⁻⁵",
      "0.34 × 10⁻³",
      "3.4 × 10⁻⁴",
      "340 × 10⁻⁶"
    ],
    answer: "3.4 × 10⁻⁴",
    explanation: {
      en: "Standard form is a number between 1 and 10 × power of 10",
      hi: "मानक रूप में संख्या 1 और 10 के बीच × 10 की घात होती है"
    }
  },
  {
    id: 4,
    question: {
      en: "Convert 0.000089 to standard form.",
      hi: "0.000089 को मानक रूप में बदलें।"
    },
    options: [
      "8.9 × 10⁻⁵",
      "0.89 × 10⁻⁴",
      "89 × 10⁻⁶",
      "8.9 × 10⁻⁶"
    ],
    answer: "8.9 × 10⁻⁵",
    explanation: {
      en: "Decimal moves 5 places right: 8.9 × 10⁻⁵",
      hi: "दशमलव 5 स्थान दाईं ओर गया: 8.9 × 10⁻⁵"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is NOT in standard form?",
      hi: "निम्न में से कौन मानक रूप में नहीं है?"
    },
    options: [
      "7.2 × 10⁻⁴",
      "0.72 × 10⁻³",
      "3.5 × 10⁻⁶",
      "9.8 × 10⁻²"
    ],
    answer: "0.72 × 10⁻³",
    explanation: {
      en: "Coefficient must be between 1 and 10",
      hi: "गुणांक 1 और 10 के बीच होना चाहिए"
    }
  },
  {
    id: 6,
    question: {
      en: "Express 6.9 × 10⁻² as a decimal.",
      hi: "6.9 × 10⁻² को दशमलव रूप में व्यक्त करें।"
    },
    options: ["0.069", "0.0069", "0.69", "0.00069"],
    answer: "0.069",
    explanation: {
      en: "Move decimal 2 places left → 0.069",
      hi: "दशमलव बाएँ 2 स्थान → 0.069"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the standard form of 0.0000057?",
      hi: "0.0000057 का मानक रूप क्या है?"
    },
    options: [
      "5.7 × 10⁻⁵",
      "0.57 × 10⁻⁶",
      "5.7 × 10⁻⁶",
      "57 × 10⁻⁷"
    ],
    answer: "5.7 × 10⁻⁶",
    explanation: {
      en: "Move decimal 6 places right: 5.7 × 10⁻⁶",
      hi: "दशमलव 6 स्थान दाईं ओर गया: 5.7 × 10⁻⁶"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the decimal value of 9.1 × 10⁻⁴?",
      hi: "9.1 × 10⁻⁴ का दशमलव मान क्या है?"
    },
    options: ["0.00091", "0.000091", "0.00091", "0.0091"],
    answer: "0.00091",
    explanation: {
      en: "Move decimal 4 places left → 0.00091",
      hi: "दशमलव को 4 स्थान बाएँ ले जाएं → 0.00091"
    }
  },
  {
    id: 9,
    question: {
      en: "Choose the correct standard form of 0.00000042.",
      hi: "0.00000042 का सही मानक रूप चुनें।"
    },
    options: [
      "4.2 × 10⁻⁷",
      "42 × 10⁻⁷",
      "0.42 × 10⁻⁶",
      "4.2 × 10⁻⁶"
    ],
    answer: "4.2 × 10⁻⁷",
    explanation: {
      en: "Decimal moves 7 places right: 4.2 × 10⁻⁷",
      hi: "दशमलव 7 स्थान दाईं ओर गया: 4.2 × 10⁻⁷"
    }
  },
  {
    id: 10,
    question: {
      en: "In standard form, the power of 10 is negative when:",
      hi: "मानक रूप में 10 की घात ऋणात्मक होती है जब:"
    },
    options: [
      "The number is very large",
      "The number is a decimal < 1",
      "The number is > 100",
      "None of these"
    ],
    answer: "The number is a decimal < 1",
    explanation: {
      en: "Negative exponent is used for small decimal values.",
      hi: "छोटी दशमलव संख्याओं के लिए ऋणात्मक घातांक प्रयोग किया जाता है।"
    }
  }
];

export default standardForm;
