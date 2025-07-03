const roundNumbers = {
  label: {
    en: "Round numbers to nearest ten/hundred",
    hi: "संख्याओं को निकटतम दस/सैकड़ा में पूर्ण करें"
  },
  questions: [
    {
      question: {
        en: "Round 36 to the nearest ten.",
        hi: "36 को निकटतम दस में पूर्ण करें।"
      },
      options: [
        { en: "30", hi: "30" },
        { en: "35", hi: "35" },
        { en: "40", hi: "40" },
        { en: "50", hi: "50" }
      ],
      correct: { en: "40", hi: "40" },
      explanation: {
        en: "36 is closer to 40 than to 30.",
        hi: "36, 30 की तुलना में 40 के अधिक निकट है।"
      }
    },
    {
      question: {
        en: "What is 72 rounded to the nearest ten?",
        hi: "72 को निकटतम दस में पूर्ण करने पर क्या होगा?"
      },
      options: [
        { en: "70", hi: "70" },
        { en: "60", hi: "60" },
        { en: "80", hi: "80" },
        { en: "75", hi: "75" }
      ],
      correct: { en: "70", hi: "70" },
      explanation: {
        en: "72 is closer to 70 than 80.",
        hi: "72, 80 की तुलना में 70 के अधिक निकट है।"
      }
    },
    {
      question: {
        en: "Round 145 to the nearest hundred.",
        hi: "145 को निकटतम सैकड़ा में पूर्ण करें।"
      },
      options: [
        { en: "100", hi: "100" },
        { en: "140", hi: "140" },
        { en: "150", hi: "150" },
        { en: "200", hi: "200" }
      ],
      correct: { en: "100", hi: "100" },
      explanation: {
        en: "145 is closer to 100 than 200.",
        hi: "145, 200 की तुलना में 100 के अधिक निकट है।"
      }
    },
    {
      question: {
        en: "Round 258 to the nearest hundred.",
        hi: "258 को निकटतम सैकड़ा में पूर्ण करें।"
      },
      options: [
        { en: "200", hi: "200" },
        { en: "250", hi: "250" },
        { en: "300", hi: "300" },
        { en: "280", hi: "280" }
      ],
      correct: { en: "300", hi: "300" },
      explanation: {
        en: "258 is closer to 300 than 200.",
        hi: "258, 200 की तुलना में 300 के अधिक निकट है।"
      }
    },
    {
      question: {
        en: "What is 89 rounded to the nearest ten?",
        hi: "89 को निकटतम दस में पूर्ण करने पर क्या होगा?"
      },
      options: [
        { en: "80", hi: "80" },
        { en: "90", hi: "90" },
        { en: "85", hi: "85" },
        { en: "100", hi: "100" }
      ],
      correct: { en: "90", hi: "90" },
      explanation: {
        en: "89 is closer to 90 than 80.",
        hi: "89, 80 की तुलना में 90 के अधिक निकट है।"
      }
    },
    {
      question: {
        en: "Round 811 to the nearest hundred.",
        hi: "811 को निकटतम सैकड़ा में पूर्ण करें।"
      },
      options: [
        { en: "800", hi: "800" },
        { en: "810", hi: "810" },
        { en: "820", hi: "820" },
        { en: "900", hi: "900" }
      ],
      correct: { en: "800", hi: "800" },
      explanation: {
        en: "811 is closer to 800 than 900.",
        hi: "811, 900 की तुलना में 800 के अधिक निकट है।"
      }
    },
    {
      question: {
        en: "Round 764 to the nearest hundred.",
        hi: "764 को निकटतम सैकड़ा में पूर्ण करें।"
      },
      options: [
        { en: "700", hi: "700" },
        { en: "750", hi: "750" },
        { en: "800", hi: "800" },
        { en: "760", hi: "760" }
      ],
      correct: { en: "800", hi: "800" },
      explanation: {
        en: "764 is closer to 800.",
        hi: "764, 800 के अधिक निकट है।"
      }
    },
    {
      question: {
        en: "What is 233 rounded to nearest ten?",
        hi: "233 को निकटतम दस में पूर्ण करें।"
      },
      options: [
        { en: "240", hi: "240" },
        { en: "230", hi: "230" },
        { en: "250", hi: "250" },
        { en: "200", hi: "200" }
      ],
      correct: { en: "230", hi: "230" },
      explanation: {
        en: "233 is closer to 230 than 240.",
        hi: "233, 240 की तुलना में 230 के अधिक निकट है।"
      }
    },
    {
      question: {
        en: "What is 99 rounded to nearest ten?",
        hi: "99 को निकटतम दस में पूर्ण करें।"
      },
      options: [
        { en: "90", hi: "90" },
        { en: "100", hi: "100" },
        { en: "95", hi: "95" },
        { en: "110", hi: "110" }
      ],
      correct: { en: "100", hi: "100" },
      explanation: {
        en: "99 is closer to 100.",
        hi: "99, 100 के अधिक निकट है।"
      }
    },
    {
      question: {
        en: "Round 551 to the nearest hundred.",
        hi: "551 को निकटतम सैकड़ा में पूर्ण करें।"
      },
      options: [
        { en: "500", hi: "500" },
        { en: "600", hi: "600" },
        { en: "550", hi: "550" },
        { en: "580", hi: "580" }
      ],
      correct: { en: "600", hi: "600" },
      explanation: {
        en: "Since 551 is above 550, it rounds to 600.",
        hi: "क्योंकि 551, 550 से अधिक है, यह 600 की ओर पूर्ण होता है।"
      }
    }
  ]
};

export default roundNumbers;
