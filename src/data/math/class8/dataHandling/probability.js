const probability = [
  {
    id: 1,
    question: {
      en: "What is probability?",
      hi: "संभावना क्या है?"
    },
    options: [
      "Guesswork",
      "A type of graph",
      "A measure of chance",
      "Measurement of distance"
    ],
    answer: "A measure of chance",
    explanation: {
      en: "Probability measures the likelihood of an event occurring.",
      hi: "संभावना किसी घटना के घटित होने की संभावना को मापती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the probability of getting heads in a fair coin toss?",
      hi: "समान सिक्के को उछालने पर हेड आने की संभावना क्या है?"
    },
    options: ["1", "0", "1/2", "2"],
    answer: "1/2",
    explanation: {
      en: "A fair coin has two outcomes: heads and tails, so probability is 1/2.",
      hi: "समान सिक्के में दो परिणाम होते हैं: हेड और टेल, इसलिए संभावना 1/2 होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the range of probability?",
      hi: "संभावना की सीमा क्या होती है?"
    },
    options: ["0 to 10", "1 to 100", "0 to 1", "−1 to 1"],
    answer: "0 to 1",
    explanation: {
      en: "Probability values always lie between 0 and 1.",
      hi: "संभावना का मान हमेशा 0 से 1 के बीच होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What does a probability of 0 mean?",
      hi: "0 की संभावना का क्या अर्थ है?"
    },
    options: [
      "The event is certain",
      "The event is impossible",
      "The event is sure",
      "It may happen"
    ],
    answer: "The event is impossible",
    explanation: {
      en: "If probability is 0, the event cannot occur.",
      hi: "अगर संभावना 0 है, तो घटना कभी नहीं घट सकती।"
    }
  },
  {
    id: 5,
    question: {
      en: "What does a probability of 1 mean?",
      hi: "1 की संभावना का क्या अर्थ है?"
    },
    options: [
      "The event is unlikely",
      "The event is possible",
      "The event is certain",
      "The event is impossible"
    ],
    answer: "The event is certain",
    explanation: {
      en: "If probability is 1, the event will definitely occur.",
      hi: "अगर संभावना 1 है, तो घटना निश्चित रूप से घटेगी।"
    }
  },
  {
    id: 6,
    question: {
      en: "If a die is rolled, what is the probability of getting a number less than 7?",
      hi: "यदि पासा फेंका जाए, तो 7 से कम संख्या आने की संभावना क्या है?"
    },
    options: ["6/6", "5/6", "0", "1/2"],
    answer: "6/6",
    explanation: {
      en: "All numbers on a die (1 to 6) are less than 7.",
      hi: "पासे पर सभी संख्याएँ (1 से 6) 7 से कम होती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following cannot be a probability value?",
      hi: "निम्न में से कौन-सा मान संभावना नहीं हो सकता?"
    },
    options: ["0.7", "1", "−0.2", "0"],
    answer: "−0.2",
    explanation: {
      en: "Probability cannot be negative.",
      hi: "संभावना कभी ऋणात्मक नहीं हो सकती।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the probability of getting a vowel when a letter is picked from A to Z?",
      hi: "A से Z तक किसी एक अक्षर को चुनने पर स्वर आने की संभावना क्या है?"
    },
    options: ["5/26", "1/5", "21/26", "1/26"],
    answer: "5/26",
    explanation: {
      en: "There are 5 vowels (A, E, I, O, U) in 26 letters.",
      hi: "A से Z तक 26 अक्षरों में से 5 स्वर होते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "In an experiment, if 4 out of 10 marbles are red, what is the chance of getting a red marble?",
      hi: "एक प्रयोग में 10 में से 4 गोलियाँ लाल हैं, लाल गोली आने की संभावना क्या है?"
    },
    options: ["2/5", "4/10", "0.4", "All of the above"],
    answer: "All of the above",
    explanation: {
      en: "All represent the same value: 0.4 = 4/10 = 2/5.",
      hi: "सभी मान 0.4 के बराबर हैं: 4/10 = 2/5।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is experimental probability?",
      hi: "प्रायोगिक संभावना क्या होती है?"
    },
    options: [
      "Probability by formula",
      "Based on actual experiments",
      "Always equal to 1",
      "Always theoretical"
    ],
    answer: "Based on actual experiments",
    explanation: {
      en: "Experimental probability is found by performing trials or experiments.",
      hi: "प्रायोगिक संभावना प्रयोगों के आधार पर प्राप्त होती है।"
    }
  }
];

export default probability;
