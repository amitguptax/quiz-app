const expUse = [
  {
    id: 1,
    question: {
      en: "What is the value of 10³?",
      hi: "10³ का मान क्या है?"
    },
    options: ["30", "100", "1000", "300"],
    answer: "1000",
    explanation: {
      en: "10³ means 10 × 10 × 10 = 1000.",
      hi: "10³ का अर्थ है 10 × 10 × 10 = 1000।"
    }
  },
  {
    id: 2,
    question: {
      en: "What does 10⁵ represent?",
      hi: "10⁵ किसे दर्शाता है?"
    },
    options: ["10 × 5", "10 added 5 times", "10 × 10 × 10 × 10 × 10", "5 × 5 × 5 × 5 × 5"],
    answer: "10 × 10 × 10 × 10 × 10",
    explanation: {
      en: "10⁵ is 10 multiplied by itself 5 times.",
      hi: "10⁵ का अर्थ है 10 को पाँच बार गुणा करना।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the value of 10⁰?",
      hi: "10⁰ का मान क्या है?"
    },
    options: ["0", "1", "10", "Undefined"],
    answer: "1",
    explanation: {
      en: "Any non-zero number raised to the power 0 is 1.",
      hi: "कोई भी शून्य से भिन्न संख्या जब 0 की घात में होती है तो उसका मान 1 होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the value of 10² + 10³?",
      hi: "10² + 10³ का मान क्या है?"
    },
    options: ["110", "120", "1000", "1100"],
    answer: "1100",
    explanation: {
      en: "10² = 100 and 10³ = 1000, so 100 + 1000 = 1100.",
      hi: "10² = 100 और 10³ = 1000, अतः 100 + 1000 = 1100।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is equal to 1 / 10²?",
      hi: "निम्न में से कौन 1 / 10² के बराबर है?"
    },
    options: ["0.01", "0.1", "0.001", "1"],
    answer: "0.01",
    explanation: {
      en: "10² = 100, so 1 / 100 = 0.01.",
      hi: "10² = 100, इसलिए 1 / 100 = 0.01।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is 10⁴ written as a number?",
      hi: "10⁴ को संख्या के रूप में कैसे लिखा जाएगा?"
    },
    options: ["100", "10000", "1000", "400"],
    answer: "10000",
    explanation: {
      en: "10 × 10 × 10 × 10 = 10000.",
      hi: "10 × 10 × 10 × 10 = 10000।"
    }
  },
  {
    id: 7,
    question: {
      en: "10⁻² equals to:",
      hi: "10⁻² किसके बराबर है?"
    },
    options: ["0.01", "100", "-2", "0.1"],
    answer: "0.01",
    explanation: {
      en: "10⁻² = 1 / 10² = 1 / 100 = 0.01.",
      hi: "10⁻² = 1 / 10² = 1 / 100 = 0.01।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is 10⁶ ÷ 10³?",
      hi: "10⁶ ÷ 10³ का मान क्या है?"
    },
    options: ["10³", "10⁹", "10⁶", "10"],
    answer: "10³",
    explanation: {
      en: "Using laws of exponents: 10⁶ ÷ 10³ = 10⁶⁻³ = 10³.",
      hi: "घातांक नियम: 10⁶ ÷ 10³ = 10⁶⁻³ = 10³।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which expression shows 1,000,000 using powers of 10?",
      hi: "1,000,000 को 10 की घात के रूप में कैसे दर्शाया जाएगा?"
    },
    options: ["10⁵", "10⁴", "10⁶", "10⁷"],
    answer: "10⁶",
    explanation: {
      en: "1 million = 10⁶.",
      hi: "10⁶ = 1,000,000।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is smallest in value?",
      hi: "निम्न में से कौन सबसे छोटा मान दर्शाता है?"
    },
    options: ["10⁰", "10⁻¹", "10⁻²", "10⁻³"],
    answer: "10⁻³",
    explanation: {
      en: "10⁻³ = 1 / 1000 = 0.001, which is the smallest.",
      hi: "10⁻³ = 1 / 1000 = 0.001, जो सबसे छोटा है।"
    }
  }
];

export default expUse;
