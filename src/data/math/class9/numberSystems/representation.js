const representation = [
  {
    id: 1,
    question: {
      en: "Which point represents √2 approximately on the number line?",
      hi: "संख्या रेखा पर √2 को लगभग कौन-सा बिंदु दर्शाता है?"
    },
    options: ["1.4", "1.7", "2", "1.2"],
    answer: "1.4",
    explanation: {
      en: "√2 ≈ 1.414, so it lies close to 1.4",
      hi: "√2 लगभग 1.414 होता है, इसलिए यह 1.4 के करीब होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is an irrational number on the number line?",
      hi: "निम्नलिखित में से कौन-सी संख्या रेखा पर अपरिमेय संख्या है?"
    },
    options: ["1.732", "√3", "1.5", "5/2"],
    answer: "√3",
    explanation: {
      en: "√3 is irrational and cannot be expressed exactly as a fraction.",
      hi: "√3 अपरिमेय है और इसे ठीक-ठीक भिन्न रूप में व्यक्त नहीं किया जा सकता।"
    }
  },
  {
    id: 3,
    question: {
      en: "What type of number is √4?",
      hi: "√4 किस प्रकार की संख्या है?"
    },
    options: ["Rational", "Irrational", "Negative", "Imaginary"],
    answer: "Rational",
    explanation: {
      en: "√4 = 2, which is a rational number.",
      hi: "√4 = 2, जो कि परिमेय संख्या है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which tool helps in constructing √2 on the number line?",
      hi: "संख्या रेखा पर √2 को दर्शाने के लिए कौन-सा उपकरण सहायक है?"
    },
    options: ["Ruler and compass", "Divider only", "Protractor", "Set square"],
    answer: "Ruler and compass",
    explanation: {
      en: "√2 can be drawn geometrically using Pythagoras’ theorem with ruler and compass.",
      hi: "√2 को रूलर और कंपास से पाइथागोरस प्रमेय द्वारा दर्शाया जा सकता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the square root of 16 represented on the number line?",
      hi: "संख्या रेखा पर 16 का वर्गमूल कौन-सा है?"
    },
    options: ["3", "4", "5", "2"],
    answer: "4",
    explanation: {
      en: "√16 = 4, which can be plotted on the number line.",
      hi: "√16 = 4, जो संख्या रेखा पर दर्शाया जा सकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which point lies between √2 and √3 on the number line?",
      hi: "संख्या रेखा पर √2 और √3 के बीच कौन-सा बिंदु स्थित है?"
    },
    options: ["1.3", "1.6", "1.9", "2.1"],
    answer: "1.6",
    explanation: {
      en: "√2 ≈ 1.41, √3 ≈ 1.73 → 1.6 lies between them.",
      hi: "√2 ≈ 1.41, √3 ≈ 1.73 इसलिए 1.6 इनके बीच आता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Real numbers can be represented on:",
      hi: "वास्तविक संख्याएँ कहाँ पर दर्शाई जा सकती हैं?"
    },
    options: ["Only ruler", "Only compass", "Number line", "Graph paper"],
    answer: "Number line",
    explanation: {
      en: "All real numbers have a unique position on the number line.",
      hi: "हर वास्तविक संख्या का संख्या रेखा पर एक अद्वितीय स्थान होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "The point at 0 on number line represents:",
      hi: "संख्या रेखा पर 0 पर स्थित बिंदु किसे दर्शाता है?"
    },
    options: ["Origin", "Midpoint", "Infinity", "Undefined"],
    answer: "Origin",
    explanation: {
      en: "0 is the origin on the number line.",
      hi: "0 को संख्या रेखा पर मूल (origin) कहा जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which statement is true?",
      hi: "कौन-सा कथन सत्य है?"
    },
    options: [
      "All rational numbers can be plotted on number line",
      "Irrational numbers cannot be shown",
      "Only integers are plotted",
      "Only natural numbers lie on number line"
    ],
    answer: "All rational numbers can be plotted on number line",
    explanation: {
      en: "Rational, irrational, integers – all real numbers can be plotted.",
      hi: "परिमेय, अपरिमेय, पूर्णांक – सभी वास्तविक संख्याएँ रेखा पर दर्शाई जा सकती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "√5 lies between which two integers on the number line?",
      hi: "√5 संख्या रेखा पर किन दो पूर्णांकों के बीच आता है?"
    },
    options: ["2 and 3", "3 and 4", "1 and 2", "4 and 5"],
    answer: "2 and 3",
    explanation: {
      en: "√5 ≈ 2.236 lies between 2 and 3",
      hi: "√5 लगभग 2.236 होता है, जो 2 और 3 के बीच आता है।"
    }
  }
];

export default representation;
