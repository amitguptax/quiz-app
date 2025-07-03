const questions = [
  {
    question: {
      en: "Which is greater: 1/2 or 1/3?",
      hi: "इनमें से कौन बड़ा है: 1/2 या 1/3?"
    },
    options: ["1/2", "1/3", "Equal", "Can't say"],
    correct: { en: "1/2", hi: "1/2" },
    explanation: {
      en: "1/2 is greater than 1/3 because it represents a larger part of the whole.",
      hi: "1/2, 1/3 से बड़ा है क्योंकि यह पूरे हिस्से का बड़ा भाग दर्शाता है।"
    }
  },
  {
    question: {
      en: "Which is smaller: 2/5 or 3/5?",
      hi: "इनमें से कौन छोटा है: 2/5 या 3/5?"
    },
    options: ["2/5", "3/5", "Equal", "Can't say"],
    correct: { en: "2/5", hi: "2/5" },
    explanation: {
      en: "Both have the same denominator, so compare numerators. 2 < 3.",
      hi: "दोनों का हर समान है, अंश की तुलना करें। 2 < 3।"
    }
  },
  {
    question: {
      en: "Which fraction is greater: 4/6 or 2/3?",
      hi: "कौन सी भिन्न बड़ी है: 4/6 या 2/3?"
    },
    options: ["4/6", "2/3", "Equal", "Can't say"],
    correct: { en: "Equal", hi: "समान" },
    explanation: {
      en: "4/6 simplifies to 2/3. So both are equal.",
      hi: "4/6 को सरल करने पर 2/3 मिलता है, इसलिए दोनों समान हैं।"
    }
  },
  {
    question: {
      en: "Which is greater: 5/8 or 3/4?",
      hi: "कौन बड़ा है: 5/8 या 3/4?"
    },
    options: ["5/8", "3/4", "Equal", "Can't say"],
    correct: { en: "3/4", hi: "3/4" },
    explanation: {
      en: "Convert to common denominator or compare decimals: 0.625 < 0.75.",
      hi: "दशमलव में तुलना करें: 5/8 = 0.625 और 3/4 = 0.75, इसलिए 3/4 बड़ा है।"
    }
  },
  {
    question: {
      en: "Which is smaller: 2/3 or 3/4?",
      hi: "कौन छोटा है: 2/3 या 3/4?"
    },
    options: ["2/3", "3/4", "Equal", "Can't say"],
    correct: { en: "2/3", hi: "2/3" },
    explanation: {
      en: "2/3 = 0.666 and 3/4 = 0.75. So 2/3 is smaller.",
      hi: "2/3 = 0.666 और 3/4 = 0.75, इसलिए 2/3 छोटा है।"
    }
  },
  {
    question: {
      en: "Which is greater: 1/4 or 1/5?",
      hi: "कौन बड़ा है: 1/4 या 1/5?"
    },
    options: ["1/4", "1/5", "Equal", "Can't say"],
    correct: { en: "1/4", hi: "1/4" },
    explanation: {
      en: "1/4 = 0.25 and 1/5 = 0.20, so 1/4 is greater.",
      hi: "1/4 = 0.25 और 1/5 = 0.20, इसलिए 1/4 बड़ा है।"
    }
  },
  {
    question: {
      en: "Which of the following is the largest?",
      hi: "निम्न में से सबसे बड़ी कौन सी है?"
    },
    options: ["2/5", "3/7", "4/9", "1/2"],
    correct: { en: "1/2", hi: "1/2" },
    explanation: {
      en: "Convert each to decimal: 2/5 = 0.4, 3/7 ≈ 0.428, 4/9 ≈ 0.444, 1/2 = 0.5. So 1/2 is largest.",
      hi: "सभी को दशमलव में बदलें और तुलना करें: 1/2 = 0.5 सबसे बड़ा है।"
    }
  },
  {
    question: {
      en: "Which is greater: 6/10 or 3/5?",
      hi: "कौन बड़ा है: 6/10 या 3/5?"
    },
    options: ["6/10", "3/5", "Equal", "Can't say"],
    correct: { en: "Equal", hi: "समान" },
    explanation: {
      en: "6/10 simplifies to 3/5.",
      hi: "6/10 को सरल करने पर 3/5 मिलता है।"
    }
  },
  {
    question: {
      en: "Which is smaller: 7/10 or 3/4?",
      hi: "कौन छोटा है: 7/10 या 3/4?"
    },
    options: ["7/10", "3/4", "Equal", "Can't say"],
    correct: { en: "7/10", hi: "7/10" },
    explanation: {
      en: "7/10 = 0.7, 3/4 = 0.75. So 7/10 is smaller.",
      hi: "7/10 = 0.7, 3/4 = 0.75. इसलिए 7/10 छोटा है।"
    }
  },
  {
    question: {
      en: "Which of the following is the smallest?",
      hi: "निम्न में से सबसे छोटी भिन्न कौन सी है?"
    },
    options: ["3/4", "2/3", "1/2", "4/5"],
    correct: { en: "1/2", hi: "1/2" },
    explanation: {
      en: "Compare: 1/2 = 0.5, others are greater than 0.5.",
      hi: "1/2 = 0.5 है, अन्य सभी उससे बड़े हैं।"
    }
  }
];

export default { questions };
