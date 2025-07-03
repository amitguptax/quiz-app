const questions = [
  {
    question: {
      en: "Which of the following is equivalent to 1/2?",
      hi: "निम्न में से कौन 1/2 के समतुल्य है?"
    },
    options: ["2/3", "2/4", "3/5", "4/8"],
    correct: { en: "2/4", hi: "2/4" },
    explanation: {
      en: "2/4 = 1/2 after simplification.",
      hi: "2/4 को सरल करने पर 1/2 मिलता है।"
    }
  },
  {
    question: {
      en: "What is an equivalent fraction of 3/5?",
      hi: "3/5 की एक समतुल्य भिन्न कौन सी है?"
    },
    options: ["6/10", "4/6", "2/3", "9/12"],
    correct: { en: "6/10", hi: "6/10" },
    explanation: {
      en: "3/5 × 2/2 = 6/10",
      hi: "3/5 × 2/2 = 6/10, जो कि समतुल्य है।"
    }
  },
  {
    question: {
      en: "Which of the following is NOT equivalent to 1/3?",
      hi: "निम्न में से कौन 1/3 के समतुल्य नहीं है?"
    },
    options: ["2/6", "3/9", "4/12", "3/6"],
    correct: { en: "3/6", hi: "3/6" },
    explanation: {
      en: "3/6 = 1/2, not 1/3.",
      hi: "3/6 = 1/2 होता है, 1/3 नहीं।"
    }
  },
  {
    question: {
      en: "Which is an equivalent fraction of 4/6?",
      hi: "4/6 की समतुल्य भिन्न कौन सी है?"
    },
    options: ["2/3", "3/4", "1/2", "5/6"],
    correct: { en: "2/3", hi: "2/3" },
    explanation: {
      en: "4/6 = 2/3 after dividing by 2.",
      hi: "4/6 को 2 से विभाजित करने पर 2/3 मिलता है।"
    }
  },
  {
    question: {
      en: "What is 5/10 equivalent to?",
      hi: "5/10 किसके समतुल्य है?"
    },
    options: ["1/2", "2/3", "3/5", "4/8"],
    correct: { en: "1/2", hi: "1/2" },
    explanation: {
      en: "5/10 = 1/2 after simplification.",
      hi: "5/10 को सरल करने पर 1/2 होता है।"
    }
  },
  {
    question: {
      en: "Which fraction is equal to 3/4?",
      hi: "3/4 के बराबर कौन सी भिन्न है?"
    },
    options: ["6/8", "4/5", "2/3", "5/6"],
    correct: { en: "6/8", hi: "6/8" },
    explanation: {
      en: "3/4 × 2 = 6/8, which is equivalent.",
      hi: "3/4 × 2 = 6/8, जो समतुल्य है।"
    }
  },
  {
    question: {
      en: "What do we call fractions that look different but are equal?",
      hi: "ऐसी भिन्नों को क्या कहते हैं जो अलग दिखती हैं पर बराबर होती हैं?"
    },
    options: ["Improper fractions", "Mixed numbers", "Equivalent fractions", "Decimal"],
    correct: { en: "Equivalent fractions", hi: "समतुल्य भिन्न" },
    explanation: {
      en: "Fractions with different numerators and denominators but same value are equivalent fractions.",
      hi: "अलग-अलग अंश और हर होने पर भी जो भिन्न समान हों, उन्हें समतुल्य भिन्न कहते हैं।"
    }
  },
  {
    question: {
      en: "Which of the following is equivalent to 2/3?",
      hi: "निम्न में से कौन 2/3 के समतुल्य है?"
    },
    options: ["4/6", "3/5", "1/2", "5/8"],
    correct: { en: "4/6", hi: "4/6" },
    explanation: {
      en: "2/3 × 2 = 4/6",
      hi: "2/3 × 2 = 4/6, यह समतुल्य है।"
    }
  },
  {
    question: {
      en: "What is 6/9 equivalent to?",
      hi: "6/9 किसके बराबर है?"
    },
    options: ["1/2", "2/3", "3/4", "5/6"],
    correct: { en: "2/3", hi: "2/3" },
    explanation: {
      en: "6/9 = 2/3 after dividing by 3.",
      hi: "6/9 को 3 से विभाजित करने पर 2/3 मिलता है।"
    }
  },
  {
    question: {
      en: "What is 10/20 equal to?",
      hi: "10/20 किसके बराबर है?"
    },
    options: ["1/4", "1/2", "3/4", "2/3"],
    correct: { en: "1/2", hi: "1/2" },
    explanation: {
      en: "10/20 = 1/2 when simplified.",
      hi: "10/20 को सरल करने पर 1/2 होता है।"
    }
  }
];

export default { questions };
