const questions = [
  {
    question: {
      en: "How many grams are there in 2 kilograms?",
      hi: "2 किलोग्राम में कितने ग्राम होते हैं?"
    },
    options: ["200 g", "1000 g", "2000 g", "5000 g"],
    correct: { en: "2000 g", hi: "2000 ग्राम" },
    explanation: {
      en: "1 kg = 1000 g, so 2 kg = 2 × 1000 = 2000 g.",
      hi: "1 किग्रा = 1000 ग्राम, इसलिए 2 किग्रा = 2000 ग्राम।"
    }
  },
  {
    question: {
      en: "Which is heavier: 1500 g or 1.2 kg?",
      hi: "कौन भारी है: 1500 ग्राम या 1.2 किग्रा?"
    },
    options: ["1500 g", "1.2 kg", "Equal", "Can't say"],
    correct: { en: "1500 g", hi: "1500 ग्राम" },
    explanation: {
      en: "1.2 kg = 1200 g, so 1500 g is heavier.",
      hi: "1.2 किग्रा = 1200 ग्राम, इसलिए 1500 ग्राम भारी है।"
    }
  },
  {
    question: {
      en: "Convert 4500 g into kg.",
      hi: "4500 ग्राम को किलोग्राम में बदलें।"
    },
    options: ["4.5 kg", "45 kg", "0.45 kg", "5.5 kg"],
    correct: { en: "4.5 kg", hi: "4.5 किग्रा" },
    explanation: {
      en: "4500 ÷ 1000 = 4.5 kg.",
      hi: "4500 को 1000 से विभाजित करने पर 4.5 किग्रा मिलता है।"
    }
  },
  {
    question: {
      en: "A watermelon weighs 3.25 kg. What is its weight in grams?",
      hi: "एक तरबूज का वजन 3.25 किग्रा है। उसका वजन ग्राम में क्या होगा?"
    },
    options: ["3200 g", "3250 g", "3500 g", "3000 g"],
    correct: { en: "3250 g", hi: "3250 ग्राम" },
    explanation: {
      en: "3.25 × 1000 = 3250 g.",
      hi: "3.25 × 1000 = 3250 ग्राम।"
    }
  },
  {
    question: {
      en: "What is the total weight of 2 kg sugar and 750 g rice?",
      hi: "2 किग्रा चीनी और 750 ग्राम चावल का कुल वजन क्या है?"
    },
    options: ["2.75 kg", "2750 kg", "3.5 kg", "1.75 kg"],
    correct: { en: "2.75 kg", hi: "2.75 किग्रा" },
    explanation: {
      en: "750 g = 0.75 kg, so total = 2 + 0.75 = 2.75 kg.",
      hi: "750 ग्राम = 0.75 किग्रा, तो कुल = 2 + 0.75 = 2.75 किग्रा।"
    }
  },
  {
    question: {
      en: "Which of these weighs the least?",
      hi: "इनमें से सबसे कम वजन किसका है?"
    },
    options: ["1.2 kg", "950 g", "1000 g", "1 kg"],
    correct: { en: "950 g", hi: "950 ग्राम" },
    explanation: {
      en: "950 g < 1 kg (1000 g).",
      hi: "950 ग्राम, 1 किग्रा (1000 ग्राम) से कम है।"
    }
  },
  {
    question: {
      en: "Convert 3.75 kg to grams.",
      hi: "3.75 किग्रा को ग्राम में बदलें।"
    },
    options: ["375 g", "3750 g", "7350 g", "3700 g"],
    correct: { en: "3750 g", hi: "3750 ग्राम" },
    explanation: {
      en: "3.75 × 1000 = 3750 g.",
      hi: "3.75 × 1000 = 3750 ग्राम।"
    }
  },
  {
    question: {
      en: "A packet weighs 0.5 kg. How many grams is that?",
      hi: "एक पैकेट का वजन 0.5 किग्रा है। वह कितने ग्राम का होगा?"
    },
    options: ["5 g", "50 g", "500 g", "5000 g"],
    correct: { en: "500 g", hi: "500 ग्राम" },
    explanation: {
      en: "0.5 × 1000 = 500 g.",
      hi: "0.5 × 1000 = 500 ग्राम।"
    }
  },
  {
    question: {
      en: "Which is the correct conversion: 6.2 kg = ? g",
      hi: "सही रूपांतरण क्या है: 6.2 किग्रा = ? ग्राम"
    },
    options: ["620 g", "6200 g", "6020 g", "6002 g"],
    correct: { en: "6200 g", hi: "6200 ग्राम" },
    explanation: {
      en: "6.2 × 1000 = 6200 g.",
      hi: "6.2 × 1000 = 6200 ग्राम।"
    }
  },
  {
    question: {
      en: "Which is equal to 2500 g?",
      hi: "2500 ग्राम किसके बराबर है?"
    },
    options: ["2.5 kg", "25 kg", "0.25 kg", "5 kg"],
    correct: { en: "2.5 kg", hi: "2.5 किग्रा" },
    explanation: {
      en: "2500 ÷ 1000 = 2.5 kg.",
      hi: "2500 को 1000 से विभाजित करें: 2.5 किग्रा।"
    }
  }
];

export default { questions };
