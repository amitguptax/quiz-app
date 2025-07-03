const createPatterns = {
  label: {
    en: "Create new patterns",
    hi: "नए पैटर्न बनाएं"
  },
  questions: [
    {
      question: {
        en: "Which of the following is a repeating pattern?",
        hi: "निम्न में से कौन सा दोहराने वाला पैटर्न है?"
      },
      options: [
        { en: "🔺🔵🔺🔵", hi: "🔺🔵🔺🔵" },
        { en: "🔷🔺🔵🔸", hi: "🔷🔺🔵🔸" },
        { en: "🔴🔴🔴🔵", hi: "🔴🔴🔴🔵" },
        { en: "🔵🔺🔷🔴", hi: "🔵🔺🔷🔴" }
      ],
      correct: { en: "🔺🔵🔺🔵", hi: "🔺🔵🔺🔵" },
      explanation: {
        en: "The pattern 🔺🔵 repeats.",
        hi: "🔺🔵 पैटर्न दोहराया गया है।"
      }
    },
    {
      question: {
        en: "Which pattern follows AAB rule?",
        hi: "कौन सा पैटर्न AAB नियम का पालन करता है?"
      },
      options: [
        { en: "⚫⚫⚪⚫⚫⚪", hi: "⚫⚫⚪⚫⚫⚪" },
        { en: "🔴🔵🔴🔵", hi: "🔴🔵🔴🔵" },
        { en: "⬛⬛⬛⬜", hi: "⬛⬛⬛⬜" },
        { en: "◯◯⬤⬤", hi: "◯◯⬤⬤" }
      ],
      correct: { en: "⚫⚫⚪⚫⚫⚪", hi: "⚫⚫⚪⚫⚫⚪" },
      explanation: {
        en: "⚫⚫⚪ follows AAB pattern.",
        hi: "⚫⚫⚪ AAB पैटर्न है।"
      }
    },
    {
      question: {
        en: "Which number pattern increases by 3?",
        hi: "कौन सा संख्या पैटर्न 3 से बढ़ रहा है?"
      },
      options: [
        { en: "3, 6, 9, 12", hi: "3, 6, 9, 12" },
        { en: "5, 10, 15", hi: "5, 10, 15" },
        { en: "2, 4, 6, 8", hi: "2, 4, 6, 8" },
        { en: "1, 2, 3, 4", hi: "1, 2, 3, 4" }
      ],
      correct: { en: "3, 6, 9, 12", hi: "3, 6, 9, 12" },
      explanation: {
        en: "Each number is increased by 3.",
        hi: "हर संख्या में 3 जोड़ा गया है।"
      }
    },
    {
      question: {
        en: "Which is an ABAB pattern?",
        hi: "कौन सा ABAB पैटर्न है?"
      },
      options: [
        { en: "⭐🔶⭐🔶", hi: "⭐🔶⭐🔶" },
        { en: "🔺🔺🔵", hi: "🔺🔺🔵" },
        { en: "⚫⚫⚫⚪", hi: "⚫⚫⚫⚪" },
        { en: "⬛⬛⬜⬜", hi: "⬛⬛⬜⬜" }
      ],
      correct: { en: "⭐🔶⭐🔶", hi: "⭐🔶⭐🔶" },
      explanation: {
        en: "It alternates between two shapes, ABAB.",
        hi: "यह दो आकृतियों के बीच बारी-बारी से है, ABAB।"
      }
    },
    {
      question: {
        en: "Choose a pattern using numbers and letters: 1A, 2B, 3C, ___",
        hi: "संख्याएँ और अक्षरों से बना पैटर्न चुनें: 1A, 2B, 3C, ___"
      },
      options: [
        { en: "4D", hi: "4D" },
        { en: "4A", hi: "4A" },
        { en: "4E", hi: "4E" },
        { en: "5D", hi: "5D" }
      ],
      correct: { en: "4D", hi: "4D" },
      explanation: {
        en: "Both numbers and letters increase in sequence.",
        hi: "संख्या और अक्षर क्रम से बढ़ रहे हैं।"
      }
    },
    {
      question: {
        en: "Which pattern shows a growing shape?",
        hi: "कौन सा पैटर्न बढ़ती हुई आकृति दिखाता है?"
      },
      options: [
        { en: "◯, ◯◯, ◯◯◯", hi: "◯, ◯◯, ◯◯◯" },
        { en: "⬤⬤⬤, ⬤⬤⬤", hi: "⬤⬤⬤, ⬤⬤⬤" },
        { en: "⬛⬜⬛⬜", hi: "⬛⬜⬛⬜" },
        { en: "🔺🔺🔵", hi: "🔺🔺🔵" }
      ],
      correct: { en: "◯, ◯◯, ◯◯◯", hi: "◯, ◯◯, ◯◯◯" },
      explanation: {
        en: "The number of circles increases step by step.",
        hi: "घेरों की संख्या क्रमशः बढ़ रही है।"
      }
    },
    {
      question: {
        en: "Which pattern is a mirror pattern?",
        hi: "कौन सा पैटर्न दर्पण (mirror) जैसा है?"
      },
      options: [
        { en: "⬜⬛⬛⬜", hi: "⬜⬛⬛⬜" },
        { en: "⬛⬜⬛⬜", hi: "⬛⬜⬛⬜" },
        { en: "⬜⬜⬜⬛", hi: "⬜⬜⬜⬛" },
        { en: "⬛⬛⬛⬜", hi: "⬛⬛⬛⬜" }
      ],
      correct: { en: "⬜⬛⬛⬜", hi: "⬜⬛⬛⬜" },
      explanation: {
        en: "It's the same on both sides – mirror image.",
        hi: "यह दोनों ओर से एक जैसा है – दर्पण छवि।"
      }
    },
    {
      question: {
        en: "Which of these is a zigzag pattern?",
        hi: "इनमें से कौन सा ज़िगज़ैग पैटर्न है?"
      },
      options: [
        { en: "/\\/\\/\\", hi: "/\\/\\/\\ " },
        { en: "------", hi: "------" },
        { en: "ooooo", hi: "ooooo" },
        { en: "^^^^", hi: "^^^^" }
      ],
      correct: { en: "/\\/\\/\\", hi: "/\\/\\/\\ " },
      explanation: {
        en: "Zigzag has sharp turns like this.",
        hi: "ज़िगज़ैग में ऐसे तीखे मोड़ होते हैं।"
      }
    },
    {
      question: {
        en: "What pattern comes next in: 1, 3, 6, 10, ___?",
        hi: "इस पैटर्न में अगला क्या होगा: 1, 3, 6, 10, ___?"
      },
      options: [
        { en: "15", hi: "15" },
        { en: "13", hi: "13" },
        { en: "12", hi: "12" },
        { en: "11", hi: "11" }
      ],
      correct: { en: "15", hi: "15" },
      explanation: {
        en: "Pattern increases by 2, 3, 4… next is +5 → 15.",
        hi: "पैटर्न क्रमशः 2, 3, 4 से बढ़ रहा है, अगला +5 → 15 होगा।"
      }
    },
    {
      question: {
        en: "Select the odd pattern out:",
        hi: "असंगत पैटर्न चुनें:"
      },
      options: [
        { en: "🔴🔵🔴🔵", hi: "🔴🔵🔴🔵" },
        { en: "⭐⭐⭐⭐", hi: "⭐⭐⭐⭐" },
        { en: "⬜⬛⬜⬛", hi: "⬜⬛⬜⬛" },
        { en: "🔺🔵🔺🔵", hi: "🔺🔵🔺🔵" }
      ],
      correct: { en: "⭐⭐⭐⭐", hi: "⭐⭐⭐⭐" },
      explanation: {
        en: "⭐⭐⭐⭐ does not change – not a pattern.",
        hi: "⭐⭐⭐⭐ में कोई बदलाव नहीं है – यह पैटर्न नहीं है।"
      }
    }
  ]
};

export default createPatterns;
