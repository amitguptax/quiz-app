const romanNumerals = {
  questions: [
    {
      question: {
        en: "What is the Roman numeral for 5?",
        hi: "5 का रोमन अंक क्या है?"
      },
      options: [
        { en: "V", hi: "V" },
        { en: "X", hi: "X" },
        { en: "I", hi: "I" },
        { en: "L", hi: "L" }
      ],
      correct: { en: "V", hi: "V" },
      explanation: {
        en: "V stands for 5 in Roman numerals.",
        hi: "रोमन अंकों में V का अर्थ 5 होता है।"
      }
    },
    {
      question: {
        en: "What is the value of the Roman numeral ‘X’?",
        hi: "रोमन अंक ‘X’ का मान क्या है?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "10", hi: "10" },
        { en: "50", hi: "50" },
        { en: "100", hi: "100" }
      ],
      correct: { en: "10", hi: "10" },
      explanation: {
        en: "X = 10 in Roman numerals.",
        hi: "रोमन अंकों में X = 10 होता है।"
      }
    },
    {
      question: {
        en: "Which Roman numeral represents the number 50?",
        hi: "कौन सा रोमन अंक 50 को दर्शाता है?"
      },
      options: [
        { en: "L", hi: "L" },
        { en: "C", hi: "C" },
        { en: "D", hi: "D" },
        { en: "V", hi: "V" }
      ],
      correct: { en: "L", hi: "L" },
      explanation: {
        en: "L is used to represent 50.",
        hi: "L 50 को दर्शाने के लिए प्रयोग होता है।"
      }
    },
    {
      question: {
        en: "What is the Roman numeral for 100?",
        hi: "100 का रोमन अंक क्या है?"
      },
      options: [
        { en: "C", hi: "C" },
        { en: "D", hi: "D" },
        { en: "M", hi: "M" },
        { en: "L", hi: "L" }
      ],
      correct: { en: "C", hi: "C" },
      explanation: {
        en: "C = 100 in Roman system.",
        hi: "रोमन प्रणाली में C = 100 होता है।"
      }
    },
    {
      question: {
        en: "What does the Roman numeral ‘IX’ mean?",
        hi: "रोमन अंक ‘IX’ का क्या अर्थ है?"
      },
      options: [
        { en: "11", hi: "11" },
        { en: "9", hi: "9" },
        { en: "19", hi: "19" },
        { en: "6", hi: "6" }
      ],
      correct: { en: "9", hi: "9" },
      explanation: {
        en: "I before X means 10 - 1 = 9.",
        hi: "I X से पहले है, इसका अर्थ है 10 - 1 = 9।"
      }
    },
    {
      question: {
        en: "How is 40 written in Roman numerals?",
        hi: "40 को रोमन अंकों में कैसे लिखा जाता है?"
      },
      options: [
        { en: "XXXX", hi: "XXXX" },
        { en: "XL", hi: "XL" },
        { en: "IL", hi: "IL" },
        { en: "XD", hi: "XD" }
      ],
      correct: { en: "XL", hi: "XL" },
      explanation: {
        en: "X before L means 50 - 10 = 40.",
        hi: "X, L से पहले है: 50 - 10 = 40"
      }
    },
    {
      question: {
        en: "Which of these is the correct Roman numeral for 29?",
        hi: "29 के लिए सही रोमन अंक कौन सा है?"
      },
      options: [
        { en: "XXIX", hi: "XXIX" },
        { en: "XIX", hi: "XIX" },
        { en: "XXI", hi: "XXI" },
        { en: "XXIXX", hi: "XXIXX" }
      ],
      correct: { en: "XXIX", hi: "XXIX" },
      explanation: {
        en: "XX = 20, IX = 9 → XXIX = 29",
        hi: "XX = 20, IX = 9 → XXIX = 29"
      }
    },
    {
      question: {
        en: "Which number is represented by the Roman numeral ‘XLII’?",
        hi: "रोमन अंक ‘XLII’ कौन से अंक को दर्शाता है?"
      },
      options: [
        { en: "42", hi: "42" },
        { en: "52", hi: "52" },
        { en: "62", hi: "62" },
        { en: "32", hi: "32" }
      ],
      correct: { en: "42", hi: "42" },
      explanation: {
        en: "XL = 40, II = 2 → 40 + 2 = 42",
        hi: "XL = 40, II = 2 → कुल = 42"
      }
    },
    {
      question: {
        en: "What is the Roman numeral for 99?",
        hi: "99 का रोमन अंक क्या है?"
      },
      options: [
        { en: "XCIX", hi: "XCIX" },
        { en: "IC", hi: "IC" },
        { en: "LXLIX", hi: "LXLIX" },
        { en: "XCX", hi: "XCX" }
      ],
      correct: { en: "XCIX", hi: "XCIX" },
      explanation: {
        en: "XC = 90, IX = 9 → 90 + 9 = 99",
        hi: "XC = 90, IX = 9 → 99"
      }
    },
    {
      question: {
        en: "Which of the following is **not** a valid Roman numeral?",
        hi: "निम्न में से कौन सा **अमान्य** रोमन अंक है?"
      },
      options: [
        { en: "IC", hi: "IC" },
        { en: "XX", hi: "XX" },
        { en: "XL", hi: "XL" },
        { en: "XC", hi: "XC" }
      ],
      correct: { en: "IC", hi: "IC" },
      explanation: {
        en: "IC is invalid because I can’t be subtracted from C.",
        hi: "IC अमान्य है क्योंकि I को C से घटाया नहीं जा सकता।"
      }
    }
  ]
};

export default romanNumerals;
