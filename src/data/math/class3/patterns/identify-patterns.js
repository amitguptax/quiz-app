const identifyPatterns = {
  label: {
    en: "Identify and extend patterns",
    hi: "पैटर्न पहचानें एवं बढ़ाएँ"
  },
  questions: [
    {
      question: {
        en: "What comes next in the pattern: 🟢🔴🟢🔴?",
        hi: "पैटर्न में अगला क्या आएगा: 🟢🔴🟢🔴?"
      },
      options: [
        { en: "🟢", hi: "🟢" },
        { en: "🔵", hi: "🔵" },
        { en: "🔴", hi: "🔴" },
        { en: "🟡", hi: "🟡" }
      ],
      correct: { en: "🟢", hi: "🟢" },
      explanation: {
        en: "The pattern alternates between green and red, so 🟢 comes next.",
        hi: "पैटर्न में हरा और लाल बारी-बारी से आता है, इसलिए अगला 🟢 होगा।"
      }
    },
    {
      question: {
        en: "Which number completes the pattern: 2, 4, 6, ___, 10?",
        hi: "पैटर्न पूरा करें: 2, 4, 6, ___, 10?"
      },
      options: [
        { en: "8", hi: "8" },
        { en: "9", hi: "9" },
        { en: "7", hi: "7" },
        { en: "5", hi: "5" }
      ],
      correct: { en: "8", hi: "8" },
      explanation: {
        en: "The numbers are increasing by 2. So, after 6 comes 8.",
        hi: "संख्याएँ 2-2 बढ़ रही हैं, इसलिए 6 के बाद 8 आता है।"
      }
    },
    {
      question: {
        en: "What type of pattern is: 🔷🔷🔸🔷🔷🔸?",
        hi: "यह किस प्रकार का पैटर्न है: 🔷🔷🔸🔷🔷🔸?"
      },
      options: [
        { en: "AB", hi: "AB" },
        { en: "AAB", hi: "AAB" },
        { en: "ABC", hi: "ABC" },
        { en: "ABB", hi: "ABB" }
      ],
      correct: { en: "AAB", hi: "AAB" },
      explanation: {
        en: "🔷🔷🔸 repeats as AAB pattern.",
        hi: "🔷🔷🔸 का दोहराव AAB पैटर्न है।"
      }
    },
    {
      question: {
        en: "Which shape comes next: ◯ △ ◯ △ ◯ ___?",
        hi: "अगला आकार कौन सा होगा: ◯ △ ◯ △ ◯ ___?"
      },
      options: [
        { en: "△", hi: "△" },
        { en: "◯", hi: "◯" },
        { en: "⬜", hi: "⬜" },
        { en: "⬛", hi: "⬛" }
      ],
      correct: { en: "△", hi: "△" },
      explanation: {
        en: "Circle and triangle repeat alternatively. So next is △.",
        hi: "◯ और △ बारी-बारी से आ रहे हैं, इसलिए अगला △ है।"
      }
    },
    {
      question: {
        en: "What is the pattern in 5, 10, 15, 20?",
        hi: "5, 10, 15, 20 में पैटर्न क्या है?"
      },
      options: [
        { en: "Adding 5", hi: "5 जोड़ना" },
        { en: "Subtracting 5", hi: "5 घटाना" },
        { en: "Adding 2", hi: "2 जोड़ना" },
        { en: "Multiplying 2", hi: "2 गुणा करना" }
      ],
      correct: { en: "Adding 5", hi: "5 जोड़ना" },
      explanation: {
        en: "Each number increases by 5.",
        hi: "हर संख्या में 5 जोड़ा गया है।"
      }
    },
    {
      question: {
        en: "Find the missing number: 30, 28, __, 24, 22",
        hi: "खोई हुई संख्या खोजें: 30, 28, __, 24, 22"
      },
      options: [
        { en: "26", hi: "26" },
        { en: "25", hi: "25" },
        { en: "27", hi: "27" },
        { en: "23", hi: "23" }
      ],
      correct: { en: "26", hi: "26" },
      explanation: {
        en: "Each number decreases by 2.",
        hi: "हर संख्या 2 से घट रही है।"
      }
    },
    {
      question: {
        en: "Which letter continues the pattern: A, B, A, B, A, ___?",
        hi: "पैटर्न को पूरा करें: A, B, A, B, A, ___?"
      },
      options: [
        { en: "B", hi: "B" },
        { en: "C", hi: "C" },
        { en: "A", hi: "A" },
        { en: "D", hi: "D" }
      ],
      correct: { en: "B", hi: "B" },
      explanation: {
        en: "Pattern is alternating A and B.",
        hi: "पैटर्न में A और B बारी-बारी से आ रहे हैं।"
      }
    },
    {
      question: {
        en: "What pattern is in: 100, 90, 80, 70?",
        hi: "इसमें क्या पैटर्न है: 100, 90, 80, 70?"
      },
      options: [
        { en: "Subtracting 10", hi: "10 घटाना" },
        { en: "Adding 10", hi: "10 जोड़ना" },
        { en: "Subtracting 5", hi: "5 घटाना" },
        { en: "Dividing 2", hi: "2 से भाग देना" }
      ],
      correct: { en: "Subtracting 10", hi: "10 घटाना" },
      explanation: {
        en: "Each number is reduced by 10.",
        hi: "हर संख्या 10 से कम हो रही है।"
      }
    },
    {
      question: {
        en: "Complete the pattern: 🔺🔺🔻🔺🔺🔻🔺🔺___?",
        hi: "पैटर्न पूरा करें: 🔺🔺🔻🔺🔺🔻🔺🔺___?"
      },
      options: [
        { en: "🔻", hi: "🔻" },
        { en: "🔺", hi: "🔺" },
        { en: "🔵", hi: "🔵" },
        { en: "⬛", hi: "⬛" }
      ],
      correct: { en: "🔻", hi: "🔻" },
      explanation: {
        en: "Pattern repeats as 🔺🔺🔻, so next is 🔻.",
        hi: "पैटर्न 🔺🔺🔻 के रूप में दोहराया गया है, अगला 🔻 होगा।"
      }
    },
    {
      question: {
        en: "If pattern is 1, 4, 9, 16, what is next?",
        hi: "अगर पैटर्न है 1, 4, 9, 16, अगला क्या होगा?"
      },
      options: [
        { en: "25", hi: "25" },
        { en: "20", hi: "20" },
        { en: "22", hi: "22" },
        { en: "19", hi: "19" }
      ],
      correct: { en: "25", hi: "25" },
      explanation: {
        en: "These are square numbers: 1², 2², 3², 4², next is 5² = 25.",
        hi: "ये वर्ग संख्याएँ हैं: 1², 2², 3², 4², अगला 5² = 25 है।"
      }
    }
  ]
};

export default identifyPatterns;
