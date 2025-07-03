const questions = [
  {
    question: {
      en: "Which holds more: 1 litre bottle or 500 ml bottle?",
      hi: "कौन-सा अधिक धारिता रखता है: 1 लीटर की बोतल या 500 मिलीलीटर की बोतल?"
    },
    options: [
      { en: "1 litre bottle", hi: "1 लीटर की बोतल" },
      { en: "500 ml bottle", hi: "500 मिलीलीटर की बोतल" },
      { en: "Both same", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "1 litre bottle", hi: "1 लीटर की बोतल" },
    explanation: {
      en: "1 litre = 1000 ml which is more than 500 ml.",
      hi: "1 लीटर = 1000 मिलीलीटर जो 500 मिलीलीटर से अधिक है।"
    }
  },
  {
    question: {
      en: "Which has less capacity?",
      hi: "किसकी धारिता कम है?"
    },
    options: [
      { en: "250 ml glass", hi: "250 मिलीलीटर का गिलास" },
      { en: "1 litre jug", hi: "1 लीटर का जग" },
      { en: "500 ml bottle", hi: "500 मिलीलीटर की बोतल" },
      { en: "2 litre can", hi: "2 लीटर का डिब्बा" }
    ],
    correct: { en: "250 ml glass", hi: "250 मिलीलीटर का गिलास" },
    explanation: {
      en: "250 ml is the smallest capacity among all.",
      hi: "250 मिलीलीटर सबसे कम धारिता है।"
    }
  },
  {
    question: {
      en: "Which holds the most water?",
      hi: "कौन सबसे ज़्यादा पानी रख सकता है?"
    },
    options: [
      { en: "2 litre bottle", hi: "2 लीटर की बोतल" },
      { en: "1 litre jug", hi: "1 लीटर का जग" },
      { en: "750 ml bottle", hi: "750 मिलीलीटर की बोतल" },
      { en: "500 ml bottle", hi: "500 मिलीलीटर की बोतल" }
    ],
    correct: { en: "2 litre bottle", hi: "2 लीटर की बोतल" },
    explanation: {
      en: "2 litre = 2000 ml, which is the largest.",
      hi: "2 लीटर = 2000 मिलीलीटर, जो सबसे अधिक है।"
    }
  },
  {
    question: {
      en: "Which is more: 1.5 litre or 1200 ml?",
      hi: "1.5 लीटर और 1200 मिलीलीटर में कौन अधिक है?"
    },
    options: [
      { en: "1.5 litre", hi: "1.5 लीटर" },
      { en: "1200 ml", hi: "1200 मिलीलीटर" },
      { en: "Both same", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "1.5 litre", hi: "1.5 लीटर" },
    explanation: {
      en: "1.5 litre = 1500 ml, which is greater than 1200 ml.",
      hi: "1.5 लीटर = 1500 मिलीलीटर, जो 1200 मिलीलीटर से अधिक है।"
    }
  },
  {
    question: {
      en: "500 ml + 500 ml = ?",
      hi: "500 मिलीलीटर + 500 मिलीलीटर = ?"
    },
    options: [
      { en: "1 litre", hi: "1 लीटर" },
      { en: "100 ml", hi: "100 मिलीलीटर" },
      { en: "2000 ml", hi: "2000 मिलीलीटर" },
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
      en: "Which is equal to 1 litre?",
      hi: "कौन-सी मात्रा 1 लीटर के बराबर है?"
    },
    options: [
      { en: "1000 ml", hi: "1000 मिलीलीटर" },
      { en: "500 ml", hi: "500 मिलीलीटर" },
      { en: "1500 ml", hi: "1500 मिलीलीटर" },
      { en: "750 ml", hi: "750 मिलीलीटर" }
    ],
    correct: { en: "1000 ml", hi: "1000 मिलीलीटर" },
    explanation: {
      en: "1 litre = 1000 ml.",
      hi: "1 लीटर = 1000 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "Which set has the same capacity as 2 litres?",
      hi: "किस समूह की कुल धारिता 2 लीटर के बराबर है?"
    },
    options: [
      { en: "Four 500 ml bottles", hi: "चार 500 मिलीलीटर की बोतलें" },
      { en: "Two 1 litre bottles", hi: "दो 1 लीटर की बोतलें" },
      { en: "One 1000 ml + Two 500 ml", hi: "एक 1000 मिलीलीटर + दो 500 मिलीलीटर" },
      { en: "All of these", hi: "इनमें सभी" }
    ],
    correct: { en: "All of these", hi: "इनमें सभी" },
    explanation: {
      en: "All combinations total 2000 ml = 2 litres.",
      hi: "सभी संयोजन 2000 मिलीलीटर = 2 लीटर होते हैं।"
    }
  },
  {
    question: {
      en: "Which is more: 900 ml or 1 litre?",
      hi: "900 मिलीलीटर और 1 लीटर में कौन अधिक है?"
    },
    options: [
      { en: "1 litre", hi: "1 लीटर" },
      { en: "900 ml", hi: "900 मिलीलीटर" },
      { en: "Both same", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "1 litre", hi: "1 लीटर" },
    explanation: {
      en: "1 litre = 1000 ml > 900 ml.",
      hi: "1 लीटर = 1000 मिलीलीटर, जो 900 मिलीलीटर से अधिक है।"
    }
  },
  {
    question: {
      en: "Which is the correct order (small to big)?",
      hi: "सही क्रम (छोटे से बड़े) में क्या है?"
    },
    options: [
      { en: "250 ml, 500 ml, 750 ml, 1 litre", hi: "250, 500, 750, 1 लीटर" },
      { en: "1 litre, 750 ml, 500 ml, 250 ml", hi: "1 लीटर, 750, 500, 250" },
      { en: "500 ml, 1 litre, 750 ml, 250 ml", hi: "500, 1 लीटर, 750, 250" },
      { en: "750 ml, 250 ml, 500 ml, 1 litre", hi: "750, 250, 500, 1 लीटर" }
    ],
    correct: { en: "250 ml, 500 ml, 750 ml, 1 litre", hi: "250, 500, 750, 1 लीटर" },
    explanation: {
      en: "Arranged from least to greatest capacity.",
      hi: "सबसे कम से सबसे अधिक धारिता तक क्रमित।"
    }
  },
  {
    question: {
      en: "1.25 litre = ?",
      hi: "1.25 लीटर = ?"
    },
    options: [
      { en: "1250 ml", hi: "1250 मिलीलीटर" },
      { en: "1000 ml", hi: "1000 मिलीलीटर" },
      { en: "1500 ml", hi: "1500 मिलीलीटर" },
      { en: "750 ml", hi: "750 मिलीलीटर" }
    ],
    correct: { en: "1250 ml", hi: "1250 मिलीलीटर" },
    explanation: {
      en: "1.25 × 1000 = 1250 ml.",
      hi: "1.25 × 1000 = 1250 मिलीलीटर।"
    }
  }
];

export default { questions };
