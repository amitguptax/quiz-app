const questions = [
  {
    question: {
      en: "What is 21 + 32?",
      hi: "21 + 32 कितना होता है?"
    },
    options: [
      { en: "53", hi: "53" },
      { en: "54", hi: "54" },
      { en: "51", hi: "51" },
      { en: "55", hi: "55" }
    ],
    correct: { en: "53", hi: "53" },
    explanation: {
      en: "Add tens and ones separately: 20+30 = 50, 1+2 = 3 → 50+3 = 53",
      hi: "दहाई और इकाई अलग जोड़ें: 20+30 = 50, 1+2 = 3 → 50+3 = 53"
    }
  },
  {
    question: {
      en: "Add 42 and 14.",
      hi: "42 और 14 को जोड़ें।"
    },
    options: [
      { en: "55", hi: "55" },
      { en: "56", hi: "56" },
      { en: "58", hi: "58" },
      { en: "60", hi: "60" }
    ],
    correct: { en: "56", hi: "56" },
    explanation: {
      en: "40+10 = 50, 2+4 = 6 → 50+6 = 56",
      hi: "40+10 = 50, 2+4 = 6 → 50+6 = 56"
    }
  },
  {
    question: {
      en: "What is 63 + 25?",
      hi: "63 + 25 कितना होता है?"
    },
    options: [
      { en: "88", hi: "88" },
      { en: "86", hi: "86" },
      { en: "84", hi: "84" },
      { en: "87", hi: "87" }
    ],
    correct: { en: "88", hi: "88" },
    explanation: {
      en: "60+20 = 80, 3+5 = 8 → 80+8 = 88",
      hi: "60+20 = 80, 3+5 = 8 → 80+8 = 88"
    }
  },
  {
    question: {
      en: "Add: 11 + 44",
      hi: "11 + 44 जोड़ें"
    },
    options: [
      { en: "55", hi: "55" },
      { en: "56", hi: "56" },
      { en: "54", hi: "54" },
      { en: "53", hi: "53" }
    ],
    correct: { en: "55", hi: "55" },
    explanation: {
      en: "10+40 = 50, 1+4 = 5 → 50+5 = 55",
      hi: "10+40 = 50, 1+4 = 5 → 50+5 = 55"
    }
  },
  {
    question: {
      en: "Find the sum: 72 + 16",
      hi: "योग ज्ञात करें: 72 + 16"
    },
    options: [
      { en: "88", hi: "88" },
      { en: "87", hi: "87" },
      { en: "89", hi: "89" },
      { en: "86", hi: "86" }
    ],
    correct: { en: "88", hi: "88" },
    explanation: {
      en: "70+10 = 80, 2+6 = 8 → 80+8 = 88",
      hi: "70+10 = 80, 2+6 = 8 → 80+8 = 88"
    }
  },
  {
    question: {
      en: "What is 35 + 42?",
      hi: "35 + 42 कितना होता है?"
    },
    options: [
      { en: "76", hi: "76" },
      { en: "77", hi: "77" },
      { en: "78", hi: "78" },
      { en: "79", hi: "79" }
    ],
    correct: { en: "77", hi: "77" },
    explanation: {
      en: "30+40 = 70, 5+2 = 7 → 70+7 = 77",
      hi: "30+40 = 70, 5+2 = 7 → 70+7 = 77"
    }
  },
  {
    question: {
      en: "Add 61 and 12.",
      hi: "61 और 12 जोड़ें।"
    },
    options: [
      { en: "73", hi: "73" },
      { en: "72", hi: "72" },
      { en: "71", hi: "71" },
      { en: "74", hi: "74" }
    ],
    correct: { en: "73", hi: "73" },
    explanation: {
      en: "60+10 = 70, 1+2 = 3 → 70+3 = 73",
      hi: "60+10 = 70, 1+2 = 3 → 70+3 = 73"
    }
  },
  {
    question: {
      en: "What is 50 + 30?",
      hi: "50 + 30 कितना होता है?"
    },
    options: [
      { en: "70", hi: "70" },
      { en: "80", hi: "80" },
      { en: "90", hi: "90" },
      { en: "60", hi: "60" }
    ],
    correct: { en: "80", hi: "80" },
    explanation: {
      en: "50 + 30 = 80 (no ones to add)",
      hi: "50 + 30 = 80 (इकाई जोड़ने की ज़रूरत नहीं)"
    }
  },
  {
    question: {
      en: "Add: 22 + 13",
      hi: "22 + 13 जोड़ें।"
    },
    options: [
      { en: "35", hi: "35" },
      { en: "34", hi: "34" },
      { en: "36", hi: "36" },
      { en: "33", hi: "33" }
    ],
    correct: { en: "35", hi: "35" },
    explanation: {
      en: "20+10 = 30, 2+3 = 5 → 30+5 = 35",
      hi: "20+10 = 30, 2+3 = 5 → 30+5 = 35"
    }
  },
  {
    question: {
      en: "Find: 66 + 11",
      hi: "66 + 11 ज्ञात करें।"
    },
    options: [
      { en: "77", hi: "77" },
      { en: "78", hi: "78" },
      { en: "76", hi: "76" },
      { en: "75", hi: "75" }
    ],
    correct: { en: "77", hi: "77" },
    explanation: {
      en: "60+10 = 70, 6+1 = 7 → 70+7 = 77",
      hi: "60+10 = 70, 6+1 = 7 → 70+7 = 77"
    }
  }
];

export default { questions };
