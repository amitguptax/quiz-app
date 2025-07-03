const questions = [
  {
    question: {
      en: "What comes next in the pattern: 2, 4, 6, 8, __?",
      hi: "पैटर्न में आगे क्या आएगा: 2, 4, 6, 8, __?"
    },
    options: ["9", "10", "11", "12"],
    correct: { en: "10", hi: "10" },
    explanation: {
      en: "The pattern increases by 2. So, next is 8 + 2 = 10.",
      hi: "यह पैटर्न 2-2 से बढ़ रहा है। इसलिए अगली संख्या 10 है।"
    }
  },
  {
    question: {
      en: "What is the missing number in the pattern: 5, 10, __, 20, 25?",
      hi: "पैटर्न में कौन सी संख्या गायब है: 5, 10, __, 20, 25?"
    },
    options: ["13", "15", "12", "17"],
    correct: { en: "15", hi: "15" },
    explanation: {
      en: "The pattern increases by 5. So, missing number is 10 + 5 = 15.",
      hi: "यह पैटर्न 5-5 से बढ़ रहा है। इसलिए अगली संख्या 15 होगी।"
    }
  },
  {
    question: {
      en: "Which pattern is correct?",
      hi: "निम्न में से कौन सा पैटर्न सही है?"
    },
    options: ["3, 6, 9, 11", "2, 4, 8, 10", "5, 10, 15, 20", "1, 2, 5, 6"],
    correct: { en: "5, 10, 15, 20", hi: "5, 10, 15, 20" },
    explanation: {
      en: "5 is added every time. It's an arithmetic pattern.",
      hi: "हर बार 5 जोड़ा गया है। यह एक गणितीय पैटर्न है।"
    }
  },
  {
    question: {
      en: "What comes next: A, B, C, D, __?",
      hi: "अगला क्या आएगा: A, B, C, D, __?"
    },
    options: ["F", "E", "G", "H"],
    correct: { en: "E", hi: "E" },
    explanation: {
      en: "The pattern follows the alphabet. E comes after D.",
      hi: "यह अक्षरों का क्रम है। D के बाद E आता है।"
    }
  },
  {
    question: {
      en: "Find the next shape: 🔺 🔵 🔺 🔵 __",
      hi: "अगली आकृति क्या होगी: 🔺 🔵 🔺 🔵 __"
    },
    options: ["🔴", "🔺", "🔶", "🔵"],
    correct: { en: "🔺", hi: "🔺" },
    explanation: {
      en: "It alternates between triangle and circle.",
      hi: "यह त्रिकोण और वृत्त के बीच बारी-बारी से चल रहा है।"
    }
  },
  {
    question: {
      en: "What comes next: 100, 90, 80, __?",
      hi: "अगला क्या आएगा: 100, 90, 80, __?"
    },
    options: ["85", "70", "75", "95"],
    correct: { en: "70", hi: "70" },
    explanation: {
      en: "10 is subtracted each time. 80 - 10 = 70.",
      hi: "हर बार 10 घटाया गया है। 80 - 10 = 70।"
    }
  },
  {
    question: {
      en: "Which number completes the pattern: 1, 4, 9, 16, __?",
      hi: "पैटर्न को पूरा करने वाला अगला अंक कौन सा है: 1, 4, 9, 16, __?"
    },
    options: ["20", "24", "25", "30"],
    correct: { en: "25", hi: "25" },
    explanation: {
      en: "These are square numbers: 1², 2², 3², 4², 5² = 25.",
      hi: "यह वर्ग संख्याएँ हैं: 1², 2², 3², 4², 5² = 25।"
    }
  },
  {
    question: {
      en: "What comes next: 2, 4, 8, 16, __?",
      hi: "अगला क्या आएगा: 2, 4, 8, 16, __?"
    },
    options: ["24", "30", "32", "20"],
    correct: { en: "32", hi: "32" },
    explanation: {
      en: "Each number is multiplied by 2.",
      hi: "हर संख्या को 2 से गुणा किया गया है।"
    }
  },
  {
    question: {
      en: "Which pattern follows odd numbers?",
      hi: "कौन सा पैटर्न विषम संख्याओं का है?"
    },
    options: ["2, 4, 6, 8", "1, 3, 5, 7", "10, 20, 30", "4, 8, 16"],
    correct: { en: "1, 3, 5, 7", hi: "1, 3, 5, 7" },
    explanation: {
      en: "1, 3, 5, 7 are all odd numbers.",
      hi: "1, 3, 5, 7 सभी विषम संख्याएँ हैं।"
    }
  },
  {
    question: {
      en: "In the pattern: 🔴🔴🔵🔴🔴🔵, what comes next?",
      hi: "पैटर्न में अगला क्या आएगा: 🔴🔴🔵🔴🔴🔵 __?"
    },
    options: ["🔴", "🔵", "🔴🔴", "🔵🔵"],
    correct: { en: "🔴", hi: "🔴" },
    explanation: {
      en: "Two red circles followed by a blue one is the pattern.",
      hi: "दो लाल वृत्त और फिर एक नीला वृत्त पैटर्न है।"
    }
  }
];

export default { questions };
