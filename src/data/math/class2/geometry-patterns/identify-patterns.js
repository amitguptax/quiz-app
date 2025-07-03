const questions = [
  {
    question: {
      en: "What comes next in the pattern: ●, ■, ●, ■, ___?",
      hi: "पैटर्न में अगला क्या होगा: ●, ■, ●, ■, ___?"
    },
    options: [
      { en: "●", hi: "●" },
      { en: "■", hi: "■" },
      { en: "▲", hi: "▲" },
      { en: "★", hi: "★" }
    ],
    correct: { en: "●", hi: "●" },
    explanation: {
      en: "The pattern alternates between ● and ■. So, ● comes next.",
      hi: "यह पैटर्न ● और ■ के बीच बदलता है। अगला ● होगा।"
    }
  },
  {
    question: {
      en: "What comes next: Red, Blue, Red, Blue, ___?",
      hi: "अगला रंग क्या होगा: लाल, नीला, लाल, नीला, ___?"
    },
    options: [
      { en: "Red", hi: "लाल" },
      { en: "Blue", hi: "नीला" },
      { en: "Green", hi: "हरा" },
      { en: "Yellow", hi: "पीला" }
    ],
    correct: { en: "Red", hi: "लाल" },
    explanation: {
      en: "The pattern repeats every 2 colors: Red, Blue. So next is Red.",
      hi: "यह पैटर्न दो रंगों में दोहराता है: लाल, नीला। अगला रंग लाल होगा।"
    }
  },
  {
    question: {
      en: "What comes next: △, △, ●, △, △, ●, ___?",
      hi: "अगला क्या होगा: △, △, ●, △, △, ●, ___?"
    },
    options: [
      { en: "●", hi: "●" },
      { en: "△", hi: "△" },
      { en: "■", hi: "■" },
      { en: "★", hi: "★" }
    ],
    correct: { en: "△", hi: "△" },
    explanation: {
      en: "The pattern is: two △, one ●. Next is △.",
      hi: "यह पैटर्न है: दो △, एक ●। अगला △ होगा।"
    }
  },
  {
    question: {
      en: "Which shape completes the pattern: ■, ▲, ▲, ■, ▲, ▲, ___?",
      hi: "पैटर्न पूरा करें: ■, ▲, ▲, ■, ▲, ▲, ___?"
    },
    options: [
      { en: "■", hi: "■" },
      { en: "▲", hi: "▲" },
      { en: "●", hi: "●" },
      { en: "★", hi: "★" }
    ],
    correct: { en: "■", hi: "■" },
    explanation: {
      en: "Pattern is: ■, ▲, ▲ repeating. So next is ■.",
      hi: "यह पैटर्न है: ■, ▲, ▲ दोहराया जा रहा है। अगला ■ होगा।"
    }
  },
  {
    question: {
      en: "What is the missing number: 2, 4, 6, __, 10?",
      hi: "गुम संख्या क्या है: 2, 4, 6, __, 10?"
    },
    options: [
      { en: "8", hi: "8" },
      { en: "9", hi: "9" },
      { en: "7", hi: "7" },
      { en: "5", hi: "5" }
    ],
    correct: { en: "8", hi: "8" },
    explanation: {
      en: "Numbers increase by 2. So, 6 + 2 = 8.",
      hi: "संख्या 2 से बढ़ रही है। इसलिए 6 + 2 = 8।"
    }
  },
  {
    question: {
      en: "What is the pattern: ★, ★, ●, ★, ★, ●, ___?",
      hi: "पैटर्न क्या है: ★, ★, ●, ★, ★, ●, ___?"
    },
    options: [
      { en: "★", hi: "★" },
      { en: "●", hi: "●" },
      { en: "■", hi: "■" },
      { en: "▲", hi: "▲" }
    ],
    correct: { en: "★", hi: "★" },
    explanation: {
      en: "Pattern is: ★, ★, ●. Repeats. So next is ★.",
      hi: "यह पैटर्न है: ★, ★, ●. अगला ★ होगा।"
    }
  },
  {
    question: {
      en: "What comes next: 10, 20, 30, ___?",
      hi: "अगला क्या होगा: 10, 20, 30, ___?"
    },
    options: [
      { en: "40", hi: "40" },
      { en: "50", hi: "50" },
      { en: "25", hi: "25" },
      { en: "35", hi: "35" }
    ],
    correct: { en: "40", hi: "40" },
    explanation: {
      en: "Pattern increases by 10 each time. So next is 40.",
      hi: "संख्या हर बार 10 से बढ़ रही है। अगला 40 होगा।"
    }
  },
  {
    question: {
      en: "Which letter comes next: A, B, A, B, ___?",
      hi: "अगला अक्षर क्या होगा: A, B, A, B, ___?"
    },
    options: [
      { en: "A", hi: "A" },
      { en: "B", hi: "B" },
      { en: "C", hi: "C" },
      { en: "D", hi: "D" }
    ],
    correct: { en: "A", hi: "A" },
    explanation: {
      en: "Alternating A and B. Next will be A.",
      hi: "A और B का पैटर्न है। अगला A होगा।"
    }
  },
  {
    question: {
      en: "What comes next: 🟡, 🔴, 🟡, 🔴, ___?",
      hi: "अगला क्या होगा: 🟡, 🔴, 🟡, 🔴, ___?"
    },
    options: [
      { en: "🟡", hi: "🟡" },
      { en: "🔴", hi: "🔴" },
      { en: "🔵", hi: "🔵" },
      { en: "🟢", hi: "🟢" }
    ],
    correct: { en: "🟡", hi: "🟡" },
    explanation: {
      en: "Pattern alternates between 🟡 and 🔴. Next is 🟡.",
      hi: "यह पैटर्न 🟡 और 🔴 के बीच है। अगला 🟡 होगा।"
    }
  },
  {
    question: {
      en: "What comes next: 5, 10, 15, ___?",
      hi: "अगला क्या होगा: 5, 10, 15, ___?"
    },
    options: [
      { en: "20", hi: "20" },
      { en: "18", hi: "18" },
      { en: "25", hi: "25" },
      { en: "12", hi: "12" }
    ],
    correct: { en: "20", hi: "20" },
    explanation: {
      en: "The pattern adds 5 each time. So next is 20.",
      hi: "हर बार 5 जोड़ रहे हैं। अगला 20 होगा।"
    }
  }
];

export default { questions };
