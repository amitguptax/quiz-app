const representation = [
  {
    id: 1,
    question: {
      en: "Which of the following can be represented on a number line?",
      hi: "निम्न में से किसे संख्या रेखा पर निरूपित किया जा सकता है?"
    },
    options: ["Only whole numbers", "Only integers", "Only positive numbers", "All rational numbers"],
    answer: "All rational numbers",
    explanation: {
      en: "All rational numbers (including fractions and negatives) can be represented on a number line.",
      hi: "सभी परिमेय संख्याएँ (भिन्न और ऋणात्मक सहित) संख्या रेखा पर दर्शायी जा सकती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Where is the rational number -3/4 located on the number line?",
      hi: "संख्या रेखा पर -3/4 किस ओर स्थित होता है?"
    },
    options: ["Right of 0", "Left of 0", "At 0", "Right of 1"],
    answer: "Left of 0",
    explanation: {
      en: "Negative rational numbers lie to the left of 0 on the number line.",
      hi: "ऋणात्मक परिमेय संख्याएँ शून्य के बाएँ ओर होती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which rational number lies exactly halfway between 0 and 1?",
      hi: "0 और 1 के बीच में ठीक मध्य में कौन सी परिमेय संख्या होती है?"
    },
    options: ["1/4", "1/2", "1/3", "3/4"],
    answer: "1/2",
    explanation: {
      en: "1/2 is equidistant from both 0 and 1.",
      hi: "1/2, 0 और 1 दोनों के बीच में समान दूरी पर होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is the correct representation of 3/5 on a number line?",
      hi: "3/5 को संख्या रेखा पर कैसे दर्शाया जाता है?"
    },
    options: [
      "Divide the unit into 3 parts and mark the 5th",
      "Divide 1 unit into 5 parts and take 3 steps to the right",
      "Divide into 5 parts and move 3 left",
      "Place 3 over 5 on the axis"
    ],
    answer: "Divide 1 unit into 5 parts and take 3 steps to the right",
    explanation: {
      en: "To show 3/5, divide one unit into 5 equal parts and count 3 to the right.",
      hi: "3/5 दिखाने के लिए 1 इकाई को 5 भागों में बाँटकर 3 कदम दाएँ बढ़ाएँ।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the distance between 1/2 and 3/4 on a number line?",
      hi: "संख्या रेखा पर 1/2 और 3/4 के बीच की दूरी कितनी है?"
    },
    options: ["1/4", "1/2", "2/4", "3/4"],
    answer: "1/4",
    explanation: {
      en: "3/4 − 1/2 = 1/4",
      hi: "3/4 − 1/2 = 1/4 होती है, जो दोनों के बीच की दूरी है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which number is at equal distance from -1 and 1 on the number line?",
      hi: "-1 और 1 के बीच में कौन सी संख्या समान दूरी पर है?"
    },
    options: ["1", "0", "-1", "2"],
    answer: "0",
    explanation: {
      en: "0 is the midpoint between -1 and 1 on the number line.",
      hi: "0, -1 और 1 के बीच में बिल्कुल बीच में होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which rational number lies between 1/2 and 2/3?",
      hi: "1/2 और 2/3 के बीच कौन सी परिमेय संख्या है?"
    },
    options: ["1/3", "3/4", "5/8", "2/5"],
    answer: "5/8",
    explanation: {
      en: "5/8 is approximately 0.625, which lies between 0.5 and 0.666.",
      hi: "5/8 ≈ 0.625 है, जो 1/2 (0.5) और 2/3 (0.666) के बीच आता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the position of -1/2 on the number line?",
      hi: "संख्या रेखा पर -1/2 की स्थिति क्या है?"
    },
    options: ["Right of 0", "Left of 0", "At 1", "At -1"],
    answer: "Left of 0",
    explanation: {
      en: "Negative fractions are always to the left of zero.",
      hi: "ऋणात्मक भिन्न हमेशा शून्य के बाईं ओर होते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which rational number is closer to 0?",
      hi: "कौन सी परिमेय संख्या 0 के अधिक निकट है?"
    },
    options: ["1/5", "1/2", "3/4", "4/5"],
    answer: "1/5",
    explanation: {
      en: "Among these, 1/5 = 0.2 is the smallest positive value, closest to 0.",
      hi: "1/5 = 0.2 सबसे छोटी संख्या है, जो 0 के सबसे पास है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the rational number exactly between -1 and 0?",
      hi: "-1 और 0 के बीच में कौन सी परिमेय संख्या ठीक मध्य में होती है?"
    },
    options: ["-1/2", "-1/3", "-1/4", "1/2"],
    answer: "-1/2",
    explanation: {
      en: "-1/2 is halfway between -1 and 0.",
      hi: "-1 और 0 के बीच में ठीक -1/2 आता है।"
    }
  }
];

export default representation;
