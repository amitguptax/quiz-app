const questions = [
  {
    question: {
      en: "How many millilitres are in 1 litre?",
      hi: "1 लीटर में कितने मिलीलीटर होते हैं?"
    },
    options: [
      { en: "1000", hi: "1000" },
      { en: "100", hi: "100" },
      { en: "10", hi: "10" },
      { en: "500", hi: "500" }
    ],
    correct: { en: "1000", hi: "1000" },
    explanation: {
      en: "1 litre = 1000 millilitres.",
      hi: "1 लीटर = 1000 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "Which is more: 1500 ml or 1 litre?",
      hi: "1500 मिलीलीटर और 1 लीटर में कौन अधिक है?"
    },
    options: [
      { en: "1500 ml", hi: "1500 मिलीलीटर" },
      { en: "1 litre", hi: "1 लीटर" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "1500 ml", hi: "1500 मिलीलीटर" },
    explanation: {
      en: "1500 ml = 1.5 litre, which is more than 1 litre.",
      hi: "1500 मिलीलीटर = 1.5 लीटर, जो 1 लीटर से अधिक है।"
    }
  },
  {
    question: {
      en: "Which container holds more water?",
      hi: "कौन-सा पात्र अधिक पानी रखता है?"
    },
    options: [
      { en: "1 litre bottle", hi: "1 लीटर की बोतल" },
      { en: "750 ml bottle", hi: "750 मिलीलीटर की बोतल" },
      { en: "500 ml bottle", hi: "500 मिलीलीटर की बोतल" },
      { en: "200 ml bottle", hi: "200 मिलीलीटर की बोतल" }
    ],
    correct: { en: "1 litre bottle", hi: "1 लीटर की बोतल" },
    explanation: {
      en: "1 litre = 1000 ml, which is the highest here.",
      hi: "1 लीटर = 1000 मिलीलीटर, जो सबसे अधिक है।"
    }
  },
  {
    question: {
      en: "What is the total of 250 ml + 750 ml?",
      hi: "250 मिलीलीटर + 750 मिलीलीटर कुल कितना होगा?"
    },
    options: [
      { en: "1000 ml", hi: "1000 मिलीलीटर" },
      { en: "500 ml", hi: "500 मिलीलीटर" },
      { en: "1250 ml", hi: "1250 मिलीलीटर" },
      { en: "1 litre", hi: "1 लीटर" }
    ],
    correct: { en: "1000 ml", hi: "1000 मिलीलीटर" },
    explanation: {
      en: "250 ml + 750 ml = 1000 ml = 1 litre.",
      hi: "250 मिलीलीटर + 750 मिलीलीटर = 1000 मिलीलीटर = 1 लीटर।"
    }
  },
  {
    question: {
      en: "How much is 2 litres in millilitres?",
      hi: "2 लीटर में कितने मिलीलीटर होते हैं?"
    },
    options: [
      { en: "2000", hi: "2000" },
      { en: "1000", hi: "1000" },
      { en: "500", hi: "500" },
      { en: "1500", hi: "1500" }
    ],
    correct: { en: "2000", hi: "2000" },
    explanation: {
      en: "2 litres × 1000 = 2000 ml.",
      hi: "2 लीटर × 1000 = 2000 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "Which is equal to 1.5 litres?",
      hi: "1.5 लीटर किसके बराबर है?"
    },
    options: [
      { en: "1500 ml", hi: "1500 मिलीलीटर" },
      { en: "1000 ml", hi: "1000 मिलीलीटर" },
      { en: "500 ml", hi: "500 मिलीलीटर" },
      { en: "1200 ml", hi: "1200 मिलीलीटर" }
    ],
    correct: { en: "1500 ml", hi: "1500 मिलीलीटर" },
    explanation: {
      en: "1.5 × 1000 = 1500 ml.",
      hi: "1.5 × 1000 = 1500 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "Which is the smallest amount?",
      hi: "सबसे कम मात्रा कौन-सी है?"
    },
    options: [
      { en: "300 ml", hi: "300 मिलीलीटर" },
      { en: "0.5 litre", hi: "0.5 लीटर" },
      { en: "1000 ml", hi: "1000 मिलीलीटर" },
      { en: "750 ml", hi: "750 मिलीलीटर" }
    ],
    correct: { en: "300 ml", hi: "300 मिलीलीटर" },
    explanation: {
      en: "300 ml is smallest among all.",
      hi: "300 मिलीलीटर सबसे कम मात्रा है।"
    }
  },
  {
    question: {
      en: "What is the capacity of two 500 ml bottles?",
      hi: "दो 500 मिलीलीटर की बोतलों की कुल क्षमता कितनी है?"
    },
    options: [
      { en: "1 litre", hi: "1 लीटर" },
      { en: "500 ml", hi: "500 मिलीलीटर" },
      { en: "1500 ml", hi: "1500 मिलीलीटर" },
      { en: "2 litres", hi: "2 लीटर" }
    ],
    correct: { en: "1 litre", hi: "1 लीटर" },
    explanation: {
      en: "500 ml + 500 ml = 1000 ml = 1 litre.",
      hi: "500 + 500 = 1000 मिलीलीटर = 1 लीटर।"
    }
  },
  {
    question: {
      en: "Which of these is more than 1 litre?",
      hi: "इनमें से कौन 1 लीटर से अधिक है?"
    },
    options: [
      { en: "1250 ml", hi: "1250 मिलीलीटर" },
      { en: "500 ml", hi: "500 मिलीलीटर" },
      { en: "1000 ml", hi: "1000 मिलीलीटर" },
      { en: "750 ml", hi: "750 मिलीलीटर" }
    ],
    correct: { en: "1250 ml", hi: "1250 मिलीलीटर" },
    explanation: {
      en: "1250 ml = 1.25 litres, which is more than 1 litre.",
      hi: "1250 मिलीलीटर = 1.25 लीटर, जो 1 लीटर से अधिक है।"
    }
  },
  {
    question: {
      en: "How many 250 ml glasses are needed to fill a 1 litre jug?",
      hi: "1 लीटर जग भरने के लिए 250 मिलीलीटर के कितने गिलास चाहिए?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "2", hi: "2" },
      { en: "3", hi: "3" },
      { en: "5", hi: "5" }
    ],
    correct: { en: "4", hi: "4" },
    explanation: {
      en: "4 × 250 ml = 1000 ml = 1 litre.",
      hi: "4 × 250 = 1000 मिलीलीटर = 1 लीटर।"
    }
  }
];

export default { questions };
