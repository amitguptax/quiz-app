const questions = [
  {
    question: {
      en: "What is 47 + 58?",
      hi: "47 + 58 कितना होता है?"
    },
    options: [
      { en: "115", hi: "115" },
      { en: "95", hi: "95" },
      { en: "105", hi: "105" },
      { en: "100", hi: "100" }
    ],
    correct: { en: "105", hi: "105" },
    explanation: {
      en: "7 + 8 = 15 (carry 1), 4 + 5 + 1 = 10 → total = 105",
      hi: "7 + 8 = 15 (1 कैरी), 4 + 5 + 1 = 10 → कुल = 105"
    }
  },
  {
    question: {
      en: "Find 325 + 489",
      hi: "325 + 489 का योग करें।"
    },
    options: [
      { en: "804", hi: "804" },
      { en: "814", hi: "814" },
      { en: "794", hi: "794" },
      { en: "785", hi: "785" }
    ],
    correct: { en: "814", hi: "814" },
    explanation: {
      en: "5+9=14 (carry 1), 2+8+1=11 (carry 1), 3+4+1=8 → total = 814",
      hi: "5+9=14 (1 कैरी), 2+8+1=11 (1 कैरी), 3+4+1=8 → कुल = 814"
    }
  },
  {
    question: {
      en: "What is 602 - 385?",
      hi: "602 - 385 कितना होता है?"
    },
    options: [
      { en: "219", hi: "219" },
      { en: "227", hi: "227" },
      { en: "217", hi: "217" },
      { en: "237", hi: "237" }
    ],
    correct: { en: "217", hi: "217" },
    explanation: {
      en: "Need to borrow while subtracting 2 - 5 → result is 217",
      hi: "2 से 5 नहीं घट सकता, उधारी लेकर घटाएं → उत्तर 217"
    }
  },
  {
    question: {
      en: "Subtract: 504 - 289",
      hi: "504 - 289 घटाएं।"
    },
    options: [
      { en: "225", hi: "225" },
      { en: "205", hi: "205" },
      { en: "215", hi: "215" },
      { en: "195", hi: "195" }
    ],
    correct: { en: "215", hi: "215" },
    explanation: {
      en: "Borrow required in 4 - 9 and 0 - 8 steps → result = 215",
      hi: "घटाव में दो बार उधारी लेनी पड़ी → उत्तर 215"
    }
  },
  {
    question: {
      en: "Add 768 + 145",
      hi: "768 + 145 जोड़ें।"
    },
    options: [
      { en: "912", hi: "912" },
      { en: "914", hi: "914" },
      { en: "915", hi: "915" },
      { en: "913", hi: "913" },
    ],
    correct: { en: "913", hi: "913" },
    explanation: {
      en: "8+5=13 (carry 1), 6+4+1=11 (carry 1), 7+1+1=9 → total = 913",
      hi: "8+5=13 (1 कैरी), 6+4+1=11 (1 कैरी), 7+1+1=9 → कुल = 913"
    }
  },
  {
    question: {
      en: "Subtract 800 - 275",
      hi: "800 - 275 घटाएं।"
    },
    options: [
      { en: "535", hi: "535" },
      { en: "515", hi: "515" },
      { en: "525", hi: "525" },
      { en: "505", hi: "505" }
    ],
    correct: { en: "525", hi: "525" },
    explanation: {
      en: "Borrow from 0s → 800 - 275 = 525",
      hi: "800 से घटाव करते समय उधारी लेनी पड़ती है → उत्तर = 525"
    }
  },
  {
    question: {
      en: "Find: 653 + 389",
      hi: "653 + 389 का योग करें।"
    },
    options: [
      { en: "1032", hi: "1032" },
       { en: "1042", hi: "1042" },
      { en: "1041", hi: "1041" },
      { en: "1031", hi: "1031" }
    ],
    correct: { en: "1042", hi: "1042" },
    explanation: {
      en: "3+9=12 (carry 1), 5+8+1=14 (carry 1), 6+3+1=10 → total = 1042",
      hi: "कैरी दो बार हुआ → 653 + 389 = 1042"
    }
  },
  {
    question: {
      en: "What is 1000 - 659?",
      hi: "1000 - 659 कितना है?"
    },
    options: [
      { en: "351", hi: "351" },
      { en: "331", hi: "331" },
      { en: "339", hi: "339" },
       { en: "341", hi: "341" },
    ],
    correct: { en: "341", hi: "341" },
    explanation: {
      en: "Borrowing from 1000 to subtract 659 → result = 341",
      hi: "1000 से घटाव करने में उधारी लेनी पड़ी → उत्तर = 341"
    }
  },
  {
    question: {
      en: "Add: 587 + 466",
      hi: "587 + 466 जोड़ें।"
    },
    options: [
      { en: "1053", hi: "1053" },
      { en: "1043", hi: "1043" },
      { en: "1033", hi: "1033" },
      { en: "1023", hi: "1023" }
    ],
    correct: { en: "1053", hi: "1053" },
    explanation: {
      en: "7+6=13 (carry 1), 8+6+1=15 (carry 1), 5+4+1=10 → total = 1053",
      hi: "कैरी तीनों अंकों में हुआ → कुल = 1053"
    }
  },
  {
    question: {
      en: "What is 910 - 478?",
      hi: "910 - 478 कितना होता है?"
    },
    options: [
      { en: "422", hi: "422" },
      { en: "442", hi: "442" },
      { en: "452", hi: "452" },
      { en: "432", hi: "432" },
    ],
    correct: { en: "432", hi: "432" },
    explanation: {
      en: "0 - 8 needs borrow, 1 - 7 also needs borrow → result = 432",
      hi: "घटाव में दो बार उधारी लेने पर उत्तर 432 आता है।"
    }
  }
];

export default { questions };
