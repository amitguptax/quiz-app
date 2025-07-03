const largeNumbersAndEstimation = {
  questions: [
    {
      question: {
        en: "Which of the following is the greatest number?",
        hi: "निम्न में से सबसे बड़ी संख्या कौन सी है?"
      },
      options: [
        { en: "92,835", hi: "92,835" },
        { en: "92,385", hi: "92,385" },
        { en: "93,258", hi: "93,258" },
        { en: "91,999", hi: "91,999" }
      ],
      correct: { en: "93,258", hi: "93,258" },
      explanation: {
        en: "93,258 > all other options.",
        hi: "93,258 बाकी सभी संख्याओं से बड़ी है।"
      }
    },
    {
      question: {
        en: "What is 98,641 rounded to the nearest thousand?",
        hi: "98,641 को निकटतम हजार में पूर्णांकित करें।"
      },
      options: [
        { en: "99,000", hi: "99,000" },
        { en: "98,000", hi: "98,000" },
        { en: "98,500", hi: "98,500" },
        { en: "97,000", hi: "97,000" }
      ],
      correct: { en: "99,000", hi: "99,000" },
      explanation: {
        en: "Since 641 ≥ 500, round up to 99,000.",
        hi: "क्योंकि 641 ≥ 500, इसलिए इसे 99,000 तक पूर्णांकित किया जाता है।"
      }
    },
    {
      question: {
        en: "Estimate the sum of 3,482 and 6,619 by rounding to nearest hundred.",
        hi: "3,482 और 6,619 का योग निकटतम सौ में पूर्णांकित कर अनुमानित करें।"
      },
      options: [
        { en: "10,000", hi: "10,000" },
        { en: "10,100", hi: "10,100" },
        { en: "10,200", hi: "10,200" },
        { en: "9,800", hi: "9,800" }
      ],
      correct: { en: "10,100", hi: "10,100" },
      explanation: {
        en: "Round: 3,500 + 6,600 = 10,100",
        hi: "पूर्णांकित करें: 3,500 + 6,600 = 10,100"
      }
    },
    {
      question: {
        en: "What is 1 lakh in numerical form?",
        hi: "1 लाख को अंकों में कैसे लिखा जाता है?"
      },
      options: [
        { en: "10,000", hi: "10,000" },
        { en: "1,00,000", hi: "1,00,000" },
        { en: "1,000", hi: "1,000" },
        { en: "10,00,000", hi: "10,00,000" }
      ],
      correct: { en: "1,00,000", hi: "1,00,000" },
      explanation: {
        en: "1 lakh = 1,00,000 in Indian number system.",
        hi: "भारतीय संख्या पद्धति में 1 लाख = 1,00,000 होता है।"
      }
    },
    {
      question: {
        en: "What is the value of the digit 6 in 6,48,379?",
        hi: "6,48,379 में अंक 6 का मान क्या है?"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "60,000", hi: "60,000" },
        { en: "6,00,000", hi: "6,00,000" },
        { en: "600", hi: "600" }
      ],
      correct: { en: "6,00,000", hi: "6,00,000" },
      explanation: {
        en: "6 is in lakh place: 6 × 1,00,000 = 6,00,000",
        hi: "6 लाख के स्थान पर है: 6 × 1,00,000 = 6,00,000"
      }
    },
    {
      question: {
        en: "Which is the correct estimate for 52,879 rounded to nearest ten thousand?",
        hi: "52,879 का निकटतम दस हज़ार में अनुमान क्या है?"
      },
      options: [
        { en: "50,000", hi: "50,000" },
        { en: "53,000", hi: "53,000" },
        { en: "55,000", hi: "55,000" },
        { en: "60,000", hi: "60,000" }
      ],
      correct: { en: "50,000", hi: "50,000" },
      explanation: {
        en: "Since 2,879 < 5,000, round down to 50,000",
        hi: "क्योंकि 2,879 < 5,000, इसलिए इसे 50,000 तक पूर्णांकित किया जाता है।"
      }
    },
    {
      question: {
        en: "What is the number name for 7,25,640?",
        hi: "7,25,640 का शब्दों में नाम क्या है?"
      },
      options: [
        {
          en: "Seven lakh twenty-five thousand six hundred forty",
          hi: "सात लाख पच्चीस हज़ार छह सौ चालीस"
        },
        {
          en: "Seventy-two thousand five hundred forty",
          hi: "बहत्तर हज़ार पाँच सौ चालीस"
        },
        {
          en: "Seven lakh twenty thousand five hundred sixty",
          hi: "सात लाख बीस हज़ार पाँच सौ साठ"
        },
        {
          en: "Seventy lakh two thousand six hundred forty",
          hi: "सत्तर लाख दो हज़ार छह सौ चालीस"
        }
      ],
      correct: {
        en: "Seven lakh twenty-five thousand six hundred forty",
        hi: "सात लाख पच्चीस हज़ार छह सौ चालीस"
      },
      explanation: {
        en: "Read place values to get the number name correctly.",
        hi: "स्थान मान के अनुसार संख्याओं को पढ़कर नाम बनाएं।"
      }
    },
    {
      question: {
        en: "Estimate 6,456 × 8 using rounding.",
        hi: "राउंडिंग का उपयोग करके 6,456 × 8 का अनुमान लगाएं।"
      },
      options: [
        { en: "48,000", hi: "48,000" },
        { en: "50,000", hi: "50,000" },
        { en: "52,000", hi: "52,000" },
        { en: "54,000", hi: "54,000" }
      ],
      correct: { en: "52,000", hi: "52,000" },
      explanation: {
        en: "Round 6,456 to 6,500 → 6,500 × 8 = 52,000",
        hi: "6,456 ≈ 6,500 → 6,500 × 8 = 52,000"
      }
    },
    {
      question: {
        en: "Which number is closest to 1 crore?",
        hi: "निम्न में से कौन सी संख्या 1 करोड़ के सबसे निकट है?"
      },
      options: [
        { en: "10,00,000", hi: "10,00,000" },
        { en: "1,00,00,000", hi: "1,00,00,000" },
        { en: "1,000", hi: "1,000" },
        { en: "10,000", hi: "10,000" }
      ],
      correct: { en: "1,00,00,000", hi: "1,00,00,000" },
      explanation: {
        en: "1 crore = 1,00,00,000 in Indian number system.",
        hi: "भारतीय पद्धति में 1 करोड़ = 1,00,00,000 होता है।"
      }
    },
    {
      question: {
        en: "What is the estimated difference of 87,432 and 29,601 rounded to nearest thousand?",
        hi: "87,432 और 29,601 का अनुमानित अंतर (निकटतम हजार में)?"
      },
      options: [
        { en: "58,000", hi: "58,000" },
        { en: "57,000", hi: "57,000" },
        { en: "60,000", hi: "60,000" },
        { en: "55,000", hi: "55,000" }
      ],
      correct: { en: "58,000", hi: "58,000" },
      explanation: {
        en: "Rounded: 87,000 - 29,000 = 58,000",
        hi: "पूर्णांकित मान: 87,000 - 29,000 = 58,000"
      }
    }
  ]
};

export default largeNumbersAndEstimation;
