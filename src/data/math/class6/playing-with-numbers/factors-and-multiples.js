const factorsAndMultiples = {
  questions: [
    {
      question: {
        en: "Which of the following is a multiple of 6?",
        hi: "निम्न में से कौन 6 का गुणा है?"
      },
      options: [
        { en: "13", hi: "13" },
        { en: "18", hi: "18" },
        { en: "23", hi: "23" },
        { en: "7", hi: "7" }
      ],
      correct: {
        en: "18",
        hi: "18"
      },
      explanation: {
        en: "6 × 3 = 18, so 18 is a multiple of 6.",
        hi: "6 × 3 = 18, इसलिए 18 छह का गुणा है।"
      }
    },
    {
      question: {
        en: "Which of the following is a factor of 24?",
        hi: "निम्न में से कौन 24 का गुणक है?"
      },
      options: [
        { en: "3", hi: "3" },
        { en: "5", hi: "5" },
        { en: "7", hi: "7" },
        { en: "9", hi: "9" }
      ],
      correct: {
        en: "3",
        hi: "3"
      },
      explanation: {
        en: "3 × 8 = 24, so 3 is a factor of 24.",
        hi: "3 × 8 = 24, इसलिए 3, 24 का गुणक है।"
      }
    },
    {
      question: {
        en: "What is the smallest multiple of every number?",
        hi: "हर संख्या का सबसे छोटा गुणा कौन सा होता है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "The number itself", hi: "संख्या स्वयं" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: {
        en: "0",
        hi: "0"
      },
      explanation: {
        en: "0 is a multiple of every number.",
        hi: "0 हर संख्या का गुणा होता है।"
      }
    },
    {
      question: {
        en: "How many factors does the number 10 have?",
        hi: "संख्या 10 के कितने गुणक हैं?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" }
      ],
      correct: {
        en: "4",
        hi: "4"
      },
      explanation: {
        en: "Factors of 10 are 1, 2, 5, and 10.",
        hi: "10 के गुणक हैं: 1, 2, 5, 10।"
      }
    },
    {
      question: {
        en: "Which of the following is a common factor of 12 and 18?",
        hi: "12 और 18 का कौन-सा सामान्य गुणक है?"
      },
      options: [
        { en: "3", hi: "3" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" },
        { en: "7", hi: "7" }
      ],
      correct: {
        en: "3",
        hi: "3"
      },
      explanation: {
        en: "3 divides both 12 and 18.",
        hi: "3 दोनों 12 और 18 को विभाजित करता है।"
      }
    },
    {
      question: {
        en: "Is 7 a factor of 49?",
        hi: "क्या 7, 49 का गुणक है?"
      },
      options: [
        { en: "Yes", hi: "हाँ" },
        { en: "No", hi: "नहीं" },
        { en: "Only sometimes", hi: "कभी-कभी" },
        { en: "Can't say", hi: "कह नहीं सकते" }
      ],
      correct: {
        en: "Yes",
        hi: "हाँ"
      },
      explanation: {
        en: "7 × 7 = 49, so 7 is a factor.",
        hi: "7 × 7 = 49, इसलिए 7 गुणक है।"
      }
    },
    {
      question: {
        en: "Which number is a multiple of both 3 and 5?",
        hi: "कौन-सी संख्या 3 और 5 दोनों का गुणा है?"
      },
      options: [
        { en: "15", hi: "15" },
        { en: "10", hi: "10" },
        { en: "9", hi: "9" },
        { en: "18", hi: "18" }
      ],
      correct: {
        en: "15",
        hi: "15"
      },
      explanation: {
        en: "15 = 3 × 5, so it is a multiple of both.",
        hi: "15 = 3 × 5, इसलिए यह दोनों का गुणा है।"
      }
    },
    {
      question: {
        en: "Every number is a factor of which number?",
        hi: "हर संख्या किस संख्या का गुणक होता है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "Itself", hi: "स्वयं" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: {
        en: "0",
        hi: "0"
      },
      explanation: {
        en: "Every number divides 0, so every number is a factor of 0.",
        hi: "हर संख्या 0 को विभाजित कर सकती है, इसलिए 0 का हर संख्या गुणक है।"
      }
    },
    {
      question: {
        en: "Is 1 a factor of every number?",
        hi: "क्या 1 हर संख्या का गुणक है?"
      },
      options: [
        { en: "Yes", hi: "हाँ" },
        { en: "No", hi: "नहीं" },
        { en: "Sometimes", hi: "कभी-कभी" },
        { en: "Only even numbers", hi: "केवल सम संख्याएँ" }
      ],
      correct: {
        en: "Yes",
        hi: "हाँ"
      },
      explanation: {
        en: "1 divides all numbers, so it's a factor of every number.",
        hi: "1 सभी संख्याओं को विभाजित करता है।"
      }
    },
    {
      question: {
        en: "Which of the following is not a multiple of 4?",
        hi: "निम्न में से कौन 4 का गुणा नहीं है?"
      },
      options: [
        { en: "8", hi: "8" },
        { en: "12", hi: "12" },
        { en: "16", hi: "16" },
        { en: "18", hi: "18" }
      ],
      correct: {
        en: "18",
        hi: "18"
      },
      explanation: {
        en: "4 × 4 = 16; next is 20, so 18 is not a multiple of 4.",
        hi: "18, 4 से पूरी तरह विभाजित नहीं होता।"
      }
    }
  ]
};

export default factorsAndMultiples;
