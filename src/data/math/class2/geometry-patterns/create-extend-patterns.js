const questions = [
  {
    question: {
      en: "Create a pattern using ▲ and ●: ▲, ●, ▲, ●, ___?",
      hi: "▲ और ● से पैटर्न बनाएँ: ▲, ●, ▲, ●, ___?"
    },
    options: [
      { en: "▲", hi: "▲" },
      { en: "●", hi: "●" },
      { en: "■", hi: "■" },
      { en: "★", hi: "★" }
    ],
    correct: { en: "▲", hi: "▲" },
    explanation: {
      en: "The pattern alternates between ▲ and ●. So next is ▲.",
      hi: "यह पैटर्न ▲ और ● के बीच बदलता है। अगला होगा ▲।"
    }
  },
  {
    question: {
      en: "What comes next in this pattern: 2, 4, 6, 8, ___?",
      hi: "इस पैटर्न में अगला क्या होगा: 2, 4, 6, 8, ___?"
    },
    options: [
      { en: "10", hi: "10" },
      { en: "9", hi: "9" },
      { en: "11", hi: "11" },
      { en: "12", hi: "12" }
    ],
    correct: { en: "10", hi: "10" },
    explanation: {
      en: "Each number increases by 2. So 8 + 2 = 10.",
      hi: "प्रत्येक संख्या में 2 जोड़ा गया है। 8 + 2 = 10।"
    }
  },
  {
    question: {
      en: "Choose the correct shape to extend the pattern: ★, ★, ●, ★, ★, ●, ___?",
      hi: "पैटर्न बढ़ाने के लिए सही आकृति चुनें: ★, ★, ●, ★, ★, ●, ___?"
    },
    options: [
      { en: "★", hi: "★" },
      { en: "●", hi: "●" },
      { en: "■", hi: "■" },
      { en: "▲", hi: "▲" }
    ],
    correct: { en: "★", hi: "★" },
    explanation: {
      en: "Pattern is ★, ★, ● repeating. So next is ★.",
      hi: "यह पैटर्न ★, ★, ● दोहराता है। अगला होगा ★।"
    }
  },
  {
    question: {
      en: "Extend the pattern: A, B, A, B, ___?",
      hi: "पैटर्न को बढ़ाएँ: A, B, A, B, ___?"
    },
    options: [
      { en: "A", hi: "A" },
      { en: "B", hi: "B" },
      { en: "C", hi: "C" },
      { en: "D", hi: "D" }
    ],
    correct: { en: "A", hi: "A" },
    explanation: {
      en: "Alternating A and B. So next is A.",
      hi: "A और B का पैटर्न है। अगला A होगा।"
    }
  },
  {
    question: {
      en: "Make a growing pattern: 5, 10, 15, ___?",
      hi: "बढ़ता हुआ पैटर्न बनाएँ: 5, 10, 15, ___?"
    },
    options: [
      { en: "20", hi: "20" },
      { en: "18", hi: "18" },
      { en: "25", hi: "25" },
      { en: "12", hi: "12" }
    ],
    correct: { en: "20", hi: "20" },
    explanation: {
      en: "Pattern adds 5 each time. So 15 + 5 = 20.",
      hi: "हर बार 5 जोड़ा गया है। 15 + 5 = 20।"
    }
  },
  {
    question: {
      en: "What comes next in this pattern: Red, Blue, Green, Red, Blue, ___?",
      hi: "इस पैटर्न में अगला क्या होगा: लाल, नीला, हरा, लाल, नीला, ___?"
    },
    options: [
      { en: "Green", hi: "हरा" },
      { en: "Red", hi: "लाल" },
      { en: "Blue", hi: "नीला" },
      { en: "Yellow", hi: "पीला" }
    ],
    correct: { en: "Green", hi: "हरा" },
    explanation: {
      en: "Pattern is Red, Blue, Green. So next is Green.",
      hi: "पैटर्न है: लाल, नीला, हरा। अगला होगा हरा।"
    }
  },
  {
    question: {
      en: "Which number continues this pattern: 3, 6, 9, ___?",
      hi: "कौन-सी संख्या इस पैटर्न को जारी रखती है: 3, 6, 9, ___?"
    },
    options: [
      { en: "12", hi: "12" },
      { en: "11", hi: "11" },
      { en: "10", hi: "10" },
      { en: "15", hi: "15" }
    ],
    correct: { en: "12", hi: "12" },
    explanation: {
      en: "Pattern adds 3. 9 + 3 = 12.",
      hi: "हर बार 3 जोड़ा गया है। 9 + 3 = 12।"
    }
  },
  {
    question: {
      en: "Extend this pattern: ●, ●, ■, ●, ●, ■, ___?",
      hi: "पैटर्न को बढ़ाएँ: ●, ●, ■, ●, ●, ■, ___?"
    },
    options: [
      { en: "●", hi: "●" },
      { en: "■", hi: "■" },
      { en: "▲", hi: "▲" },
      { en: "★", hi: "★" }
    ],
    correct: { en: "●", hi: "●" },
    explanation: {
      en: "Two ● followed by one ■. So next is ●.",
      hi: "दो ● फिर एक ■। अगला होगा ●।"
    }
  },
  {
    question: {
      en: "What comes next: 1, 4, 7, 10, ___?",
      hi: "अगला क्या होगा: 1, 4, 7, 10, ___?"
    },
    options: [
      { en: "13", hi: "13" },
      { en: "12", hi: "12" },
      { en: "14", hi: "14" },
      { en: "15", hi: "15" }
    ],
    correct: { en: "13", hi: "13" },
    explanation: {
      en: "Each number increases by 3. So 10 + 3 = 13.",
      hi: "हर बार 3 जोड़ा गया है। 10 + 3 = 13।"
    }
  },
  {
    question: {
      en: "Which shape comes next: ◯, ◯, ◯, ■, ◯, ◯, ◯, ___?",
      hi: "अगली आकृति कौन-सी है: ◯, ◯, ◯, ■, ◯, ◯, ◯, ___?"
    },
    options: [
      { en: "■", hi: "■" },
      { en: "◯", hi: "◯" },
      { en: "▲", hi: "▲" },
      { en: "★", hi: "★" }
    ],
    correct: { en: "■", hi: "■" },
    explanation: {
      en: "Pattern: three ◯ followed by one ■. So next is ■.",
      hi: "तीन ◯ फिर एक ■ का पैटर्न है। अगला होगा ■।"
    }
  }
];

export default { questions };
