const rationalNumberDefinition = [
  {
    id: 1,
    question: {
      en: "Which of the following is a rational number?",
      hi: "निम्न में से कौन एक परिमेय संख्या है?"
    },
    options: ["√2", "π", "3/4", "e"],
    answer: "3/4",
    explanation: {
      en: "A rational number is a number that can be written as p/q, where q ≠ 0.",
      hi: "परिमेय संख्या वह होती है जिसे p/q के रूप में लिखा जा सके, जहाँ q ≠ 0।"
    }
  },
  {
    id: 2,
    question: {
      en: "Is 5 a rational number?",
      hi: "क्या 5 एक परिमेय संख्या है?"
    },
    options: ["Yes", "No", "Only if written as decimal", "Depends on context"],
    answer: "Yes",
    explanation: {
      en: "5 can be written as 5/1, so it is rational.",
      hi: "5 को 5/1 के रूप में लिखा जा सकता है, इसलिए यह परिमेय है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is **not** a rational number?",
      hi: "इनमें से कौन **परिमेय संख्या नहीं** है?"
    },
    options: ["7/3", "0.25", "√3", "-2"],
    answer: "√3",
    explanation: {
      en: "√3 is an irrational number as it cannot be expressed in p/q form.",
      hi: "√3 परिमेय नहीं है क्योंकि इसे p/q के रूप में नहीं लिखा जा सकता।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the denominator condition for a rational number?",
      hi: "परिमेय संख्या के हर के लिए क्या शर्त होती है?"
    },
    options: ["Should be zero", "Should not be zero", "Should be negative", "Can be anything"],
    answer: "Should not be zero",
    explanation: {
      en: "The denominator q in p/q must not be zero.",
      hi: "p/q में हर q कभी भी शून्य नहीं होना चाहिए।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is a negative rational number?",
      hi: "इनमें से कौन एक ऋणात्मक परिमेय संख्या है?"
    },
    options: ["-3/5", "3", "0.4", "√2"],
    answer: "-3/5",
    explanation: {
      en: "-3/5 is in the form p/q with p and q integers and q ≠ 0.",
      hi: "-3/5 परिमेय संख्या है क्योंकि यह p/q के रूप में है और q ≠ 0।"
    }
  },
  {
    id: 6,
    question: {
      en: "Zero is a rational number because:",
      hi: "शून्य एक परिमेय संख्या है क्योंकि:"
    },
    options: [
      "It is neither positive nor negative",
      "It can be written as 0/1",
      "It is a whole number",
      "It is a natural number"
    ],
    answer: "It can be written as 0/1",
    explanation: {
      en: "0 can be expressed as 0/1, hence it's rational.",
      hi: "0 को 0/1 के रूप में लिखा जा सकता है, इसलिए यह परिमेय है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which number below is **irrational**?",
      hi: "नीचे दिए गए में से कौन सा संख्या **अपरिमेय** है?"
    },
    options: ["2/7", "-5", "√5", "0"],
    answer: "√5",
    explanation: {
      en: "√5 cannot be expressed as a fraction, hence irrational.",
      hi: "√5 को भिन्न रूप में नहीं लिखा जा सकता, अतः यह अपरिमेय है।"
    }
  },
  {
    id: 8,
    question: {
      en: "The number -7 can be written as a rational number as:",
      hi: "संख्या -7 को परिमेय संख्या के रूप में कैसे लिखा जा सकता है?"
    },
    options: ["-7/1", "1/-7", "7/-1", "All of these"],
    answer: "All of these",
    explanation: {
      en: "-7 = -7/1 = 1/(-7) = 7/(-1)",
      hi: "-7 को -7/1, 1/(-7), 7/(-1) के रूप में लिखा जा सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following rational numbers lies between 0 and 1?",
      hi: "निम्न परिमेय संख्याओं में से कौन 0 और 1 के बीच आती है?"
    },
    options: ["1/2", "-1/2", "2", "-3"],
    answer: "1/2",
    explanation: {
      en: "1/2 lies between 0 and 1.",
      hi: "1/2 शून्य और 1 के बीच आती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Every integer is a rational number. True or False?",
      hi: "प्रत्येक पूर्णांक एक परिमेय संख्या होता है। सही या गलत?"
    },
    options: ["True", "False"],
    answer: "True",
    explanation: {
      en: "Every integer can be written as n/1, hence is rational.",
      hi: "हर पूर्णांक को n/1 के रूप में लिखा जा सकता है, इसलिए यह परिमेय होता है।"
    }
  }
];

export default rationalNumberDefinition;
