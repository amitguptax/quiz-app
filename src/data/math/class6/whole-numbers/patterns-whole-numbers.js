const patternsWholeNumbers = [
  {
    question: {
      en: "What is the next number in the pattern: 2, 4, 6, 8, ...?",
      hi: "पैटर्न में अगला नंबर क्या होगा: 2, 4, 6, 8, ...?"
    },
    options: [
      { en: "10", hi: "10" },
      { en: "9", hi: "9" },
      { en: "12", hi: "12" },
      { en: "14", hi: "14" }
    ],
    correct: { en: "10", hi: "10" },
    explanation: {
      en: "The pattern increases by 2, so after 8 comes 10.",
      hi: "पैटर्न 2 से बढ़ रहा है, इसलिए 8 के बाद 10 आता है।"
    }
  },
  {
    question: {
      en: "Identify the pattern: 5, 10, 15, 20, ... What comes next?",
      hi: "पैटर्न पहचानिए: 5, 10, 15, 20, ... अगला क्या होगा?"
    },
    options: [
      { en: "25", hi: "25" },
      { en: "22", hi: "22" },
      { en: "30", hi: "30" },
      { en: "24", hi: "24" }
    ],
    correct: { en: "25", hi: "25" },
    explanation: {
      en: "The numbers increase by 5 each time.",
      hi: "संख्या हर बार 5 से बढ़ रही है।"
    }
  },
  {
    question: {
      en: "What is the rule of the pattern: 1, 4, 7, 10, ...?",
      hi: "पैटर्न का नियम क्या है: 1, 4, 7, 10, ...?"
    },
    options: [
      { en: "Add 2", hi: "2 जोड़ें" },
      { en: "Add 3", hi: "3 जोड़ें" },
      { en: "Add 4", hi: "4 जोड़ें" },
      { en: "Multiply by 2", hi: "2 से गुणा करें" }
    ],
    correct: { en: "Add 3", hi: "3 जोड़ें" },
    explanation: {
      en: "Each number is 3 more than the previous one.",
      hi: "हर संख्या पिछली संख्या से 3 अधिक है।"
    }
  },
  {
    question: {
      en: "Find the next number: 10, 20, 30, 40, ...",
      hi: "अगला नंबर क्या होगा: 10, 20, 30, 40, ...?"
    },
    options: [
      { en: "50", hi: "50" },
      { en: "45", hi: "45" },
      { en: "55", hi: "55" },
      { en: "60", hi: "60" }
    ],
    correct: { en: "50", hi: "50" },
    explanation: {
      en: "Numbers increase by 10.",
      hi: "संख्या 10 से बढ़ रही है।"
    }
  },
  {
    question: {
      en: "What comes next in the pattern: 3, 6, 9, 12, ...?",
      hi: "पैटर्न में अगला नंबर क्या होगा: 3, 6, 9, 12, ...?"
    },
    options: [
      { en: "15", hi: "15" },
      { en: "14", hi: "14" },
      { en: "16", hi: "16" },
      { en: "18", hi: "18" }
    ],
    correct: { en: "15", hi: "15" },
    explanation: {
      en: "The pattern increases by 3 each time.",
      hi: "पैटर्न हर बार 3 से बढ़ रहा है।"
    }
  },
  {
    question: {
      en: "Identify the pattern: 2, 4, 8, 16, ... What is the next number?",
      hi: "पैटर्न पहचानिए: 2, 4, 8, 16, ... अगला नंबर क्या होगा?"
    },
    options: [
      { en: "18", hi: "18" },
      { en: "24", hi: "24" },
      { en: "32", hi: "32" },
      { en: "64", hi: "64" }
    ],
    correct: { en: "32", hi: "32" },
    explanation: {
      en: "The numbers double each time (multiply by 2).",
      hi: "संख्या हर बार दोगुनी हो रही है।"
    }
  },
  {
    question: {
      en: "What is the next number: 100, 90, 80, 70, ...?",
      hi: "अगला नंबर क्या होगा: 100, 90, 80, 70, ...?"
    },
    options: [
      { en: "60", hi: "60" },
      { en: "65", hi: "65" },
      { en: "55", hi: "55" },
      { en: "75", hi: "75" }
    ],
    correct: { en: "60", hi: "60" },
    explanation: {
      en: "The numbers decrease by 10.",
      hi: "संख्या 10 से घट रही है।"
    }
  },
  {
    question: {
      en: "Find the missing number: 1, 3, 6, 10, __, 21",
      hi: "गायब संख्या खोजिए: 1, 3, 6, 10, __, 21"
    },
    options: [
      { en: "13", hi: "13" },
      { en: "14", hi: "14" },
      { en: "15", hi: "15" },
      { en: "16", hi: "16" }
    ],
    correct: { en: "15", hi: "15" },
    explanation: {
      en: "Pattern adds consecutive natural numbers: 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21.",
      hi: "पैटर्न में लगातार प्राकृतिक संख्याएँ जोड़ी जा रही हैं।"
    }
  },
  {
    question: {
      en: "Which pattern shows multiplication by 3?",
      hi: "कौन-सा पैटर्न 3 से गुणा करता है?"
    },
    options: [
      { en: "3, 6, 9, 12", hi: "3, 6, 9, 12" },
      { en: "3, 9, 27, 81", hi: "3, 9, 27, 81" },
      { en: "3, 5, 7, 9", hi: "3, 5, 7, 9" },
      { en: "3, 4, 5, 6", hi: "3, 4, 5, 6" }
    ],
    correct: { en: "3, 9, 27, 81", hi: "3, 9, 27, 81" },
    explanation: {
      en: "Each term is multiplied by 3 to get the next.",
      hi: "हर अगली संख्या पिछले को 3 से गुणा करके बनती है।"
    }
  },
  {
    question: {
      en: "What is the pattern rule for 2, 6, 18, 54, ...?",
      hi: "पैटर्न नियम क्या है: 2, 6, 18, 54, ...?"
    },
    options: [
      { en: "Multiply by 2", hi: "2 से गुणा करें" },
      { en: "Multiply by 3", hi: "3 से गुणा करें" },
      { en: "Add 4", hi: "4 जोड़ें" },
      { en: "Add 6", hi: "6 जोड़ें" }
    ],
    correct: { en: "Multiply by 3", hi: "3 से गुणा करें" },
    explanation: {
      en: "Each number is multiplied by 3 to get the next number.",
      hi: "हर संख्या को 3 से गुणा कर अगली संख्या प्राप्त होती है।"
    }
  }
];

export default {questions: patternsWholeNumbers};
