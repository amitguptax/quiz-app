const questions = [
  {
    question: {
      en: "What comes next in the pattern: 🔴 🟢 🔴 🟢 __?",
      hi: "पैटर्न में आगे क्या आएगा: 🔴 🟢 🔴 🟢 __?"
    },
    options: [
      { en: "🔴", hi: "🔴" },
      { en: "🟢", hi: "🟢" },
      { en: "🔵", hi: "🔵" },
      { en: "🟡", hi: "🟡" }
    ],
    correct: {
      en: "🔴",
      hi: "🔴"
    },
    explanation: {
      en: "The pattern repeats 🔴 🟢.",
      hi: "पैटर्न 🔴 🟢 दोहराया गया है।"
    }
  },
  {
    question: {
      en: "What is the next shape: 🔺 🔷 🔺 🔷 __?",
      hi: "अगला आकार क्या होगा: 🔺 🔷 🔺 🔷 __?"
    },
    options: [
      { en: "🔺", hi: "🔺" },
      { en: "🔷", hi: "🔷" },
      { en: "🟥", hi: "🟥" },
      { en: "⬛", hi: "⬛" }
    ],
    correct: {
      en: "🔺",
      hi: "🔺"
    },
    explanation: {
      en: "The pattern alternates between 🔺 and 🔷.",
      hi: "यह पैटर्न 🔺 और 🔷 के बीच बारी-बारी से चलता है।"
    }
  },
  {
    question: {
      en: "Choose the next number: 2, 4, 6, 8, __?",
      hi: "अगली संख्या चुनें: 2, 4, 6, 8, __?"
    },
    options: [
      { en: "10", hi: "10" },
      { en: "9", hi: "9" },
      { en: "11", hi: "11" },
      { en: "12", hi: "12" }
    ],
    correct: {
      en: "10",
      hi: "10"
    },
    explanation: {
      en: "Numbers increase by 2 each time.",
      hi: "संख्याएँ हर बार 2 से बढ़ रही हैं।"
    }
  },
  {
    question: {
      en: "What comes next: 🟡 🔴 🟡 🔴 __?",
      hi: "अगला क्या आएगा: 🟡 🔴 🟡 🔴 __?"
    },
    options: [
      { en: "🔴", hi: "🔴" },
      { en: "🟡", hi: "🟡" },
      { en: "🟢", hi: "🟢" },
      { en: "🔵", hi: "🔵" }
    ],
    correct: {
      en: "🟡",
      hi: "🟡"
    },
    explanation: {
      en: "The pattern is 🟡 🔴 repeating.",
      hi: "पैटर्न 🟡 🔴 दोहराया जा रहा है।"
    }
  },
  {
    question: {
      en: "Select the next: 🟥 🟥 🟩 🟩 🟥 🟥 __ __?",
      hi: "अगले दो चिह्न चुनें: 🟥 🟥 🟩 🟩 🟥 🟥 __ __?"
    },
    options: [
      { en: "🟩 🟩", hi: "🟩 🟩" },
      { en: "🟥 🟥", hi: "🟥 🟥" },
      { en: "🟩 🟥", hi: "🟩 🟥" },
      { en: "⬛ ⬛", hi: "⬛ ⬛" }
    ],
    correct: {
      en: "🟩 🟩",
      hi: "🟩 🟩"
    },
    explanation: {
      en: "Pattern repeats: 2 red, 2 green.",
      hi: "पैटर्न: 2 लाल, 2 हरे।"
    }
  },
  {
    question: {
      en: "Which pattern is correct: 🔺 🔺 🔺 🔺 __?",
      hi: "कौन-सा पैटर्न सही है: 🔺 🔺 🔺 🔺 __?"
    },
    options: [
      { en: "🔺", hi: "🔺" },
      { en: "🔵", hi: "🔵" },
      { en: "🔷", hi: "🔷" },
      { en: "🟡", hi: "🟡" }
    ],
    correct: {
      en: "🔺",
      hi: "🔺"
    },
    explanation: {
      en: "All shapes are the same: 🔺 repeated.",
      hi: "सभी आकार समान हैं: 🔺 दोहराया गया है।"
    }
  },
  {
    question: {
      en: "Which number fits: 5, 10, 15, __?",
      hi: "कौन-सी संख्या सही है: 5, 10, 15, __?"
    },
    options: [
      { en: "20", hi: "20" },
      { en: "18", hi: "18" },
      { en: "16", hi: "16" },
      { en: "14", hi: "14" }
    ],
    correct: {
      en: "20",
      hi: "20"
    },
    explanation: {
      en: "Each number increases by 5.",
      hi: "हर संख्या 5 से बढ़ रही है।"
    }
  },
  {
    question: {
      en: "What shape comes next: 🔵 🔴 🔵 🔴 __?",
      hi: "अगला आकार क्या होगा: 🔵 🔴 🔵 🔴 __?"
    },
    options: [
      { en: "🔵", hi: "🔵" },
      { en: "🔴", hi: "🔴" },
      { en: "🟢", hi: "🟢" },
      { en: "🔷", hi: "🔷" }
    ],
    correct: {
      en: "🔵",
      hi: "🔵"
    },
    explanation: {
      en: "Repeating pattern: 🔵 🔴",
      hi: "🔵 🔴 पैटर्न दोहराया गया।"
    }
  },
  {
    question: {
      en: "Which pattern continues: 🔵 🟢 🟢 🔵 🟢 🟢 __ __?",
      hi: "पैटर्न कैसे आगे बढ़ेगा: 🔵 🟢 🟢 🔵 🟢 🟢 __ __?"
    },
    options: [
      { en: "🔵 🟢", hi: "🔵 🟢" },
      { en: "🔵 🟢 🟢", hi: "🔵 🟢 🟢" },
      { en: "🟢 🔵", hi: "🟢 🔵" },
      { en: "🟢 🟢", hi: "🟢 🟢" }
    ],
    correct: {
      en: "🔵 🟢 🟢",
      hi: "🔵 🟢 🟢"
    },
    explanation: {
      en: "Pattern: 🔵 🟢 🟢 repeating.",
      hi: "पैटर्न 🔵 🟢 🟢 दोहराया गया।"
    }
  },
  {
    question: {
      en: "Which pattern completes the sequence: A B A B __?",
      hi: "कौन-सा पैटर्न पूरा करेगा: A B A B __?"
    },
    options: [
      { en: "A", hi: "A" },
      { en: "B", hi: "B" },
      { en: "C", hi: "C" },
      { en: "D", hi: "D" }
    ],
    correct: {
      en: "A",
      hi: "A"
    },
    explanation: {
      en: "The pattern is A B repeating.",
      hi: "पैटर्न A B बार-बार दोहराया गया।"
    }
  }
];

export default { questions };
