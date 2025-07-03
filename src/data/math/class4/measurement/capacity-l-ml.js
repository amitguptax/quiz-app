const questions = [
  {
    question: {
      en: "How many milliliters are there in 3 liters?",
      hi: "3 लीटर में कितने मिलीलीटर होते हैं?"
    },
    options: ["300 ml", "3000 ml", "30 ml", "1000 ml"],
    correct: { en: "3000 ml", hi: "3000 मिलीलीटर" },
    explanation: {
      en: "1 liter = 1000 ml, so 3 liters = 3 × 1000 = 3000 ml.",
      hi: "1 लीटर = 1000 मिलीलीटर, इसलिए 3 लीटर = 3000 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "Convert 2500 ml to liters.",
      hi: "2500 मिलीलीटर को लीटर में बदलें।"
    },
    options: ["2.5 L", "25 L", "0.25 L", "3 L"],
    correct: { en: "2.5 L", hi: "2.5 लीटर" },
    explanation: {
      en: "2500 ÷ 1000 = 2.5 L.",
      hi: "2500 को 1000 से विभाजित करने पर 2.5 लीटर मिलता है।"
    }
  },
  {
    question: {
      en: "Which is more: 1.5 L or 1800 ml?",
      hi: "कौन अधिक है: 1.5 लीटर या 1800 मिलीलीटर?"
    },
    options: ["1.5 L", "1800 ml", "Equal", "Can't say"],
    correct: { en: "1800 ml", hi: "1800 मिलीलीटर" },
    explanation: {
      en: "1.5 L = 1500 ml, and 1800 ml > 1500 ml.",
      hi: "1.5 लीटर = 1500 मिलीलीटर, और 1800 मिलीलीटर अधिक है।"
    }
  },
  {
    question: {
      en: "How much is 0.75 L in ml?",
      hi: "0.75 लीटर कितने मिलीलीटर होते हैं?"
    },
    options: ["750 ml", "75 ml", "705 ml", "1000 ml"],
    correct: { en: "750 ml", hi: "750 मिलीलीटर" },
    explanation: {
      en: "0.75 × 1000 = 750 ml.",
      hi: "0.75 × 1000 = 750 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "You have 1 L of milk. You pour 400 ml. How much is left?",
      hi: "आपके पास 1 लीटर दूध है। आप 400 मिलीलीटर डालते हैं। कितना बचा?"
    },
    options: ["600 ml", "400 ml", "1000 ml", "900 ml"],
    correct: { en: "600 ml", hi: "600 मिलीलीटर" },
    explanation: {
      en: "1000 ml - 400 ml = 600 ml.",
      hi: "1000 मिलीलीटर - 400 मिलीलीटर = 600 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "A jug holds 2.25 L of water. What is its capacity in ml?",
      hi: "एक जग में 2.25 लीटर पानी आता है। उसकी धारिता कितनी है?"
    },
    options: ["2250 ml", "2500 ml", "2000 ml", "2150 ml"],
    correct: { en: "2250 ml", hi: "2250 मिलीलीटर" },
    explanation: {
      en: "2.25 × 1000 = 2250 ml.",
      hi: "2.25 × 1000 = 2250 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "Which of the following is smallest?",
      hi: "निम्न में से सबसे कम कौन है?"
    },
    options: ["0.5 L", "600 ml", "750 ml", "1 L"],
    correct: { en: "0.5 L", hi: "0.5 लीटर" },
    explanation: {
      en: "0.5 L = 500 ml, which is less than all others.",
      hi: "0.5 लीटर = 500 मिलीलीटर, जो सबसे कम है।"
    }
  },
  {
    question: {
      en: "Convert 4.8 L into milliliters.",
      hi: "4.8 लीटर को मिलीलीटर में बदलें।"
    },
    options: ["480 ml", "4800 ml", "8400 ml", "4008 ml"],
    correct: { en: "4800 ml", hi: "4800 मिलीलीटर" },
    explanation: {
      en: "4.8 × 1000 = 4800 ml.",
      hi: "4.8 × 1000 = 4800 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "A tank holds 10 L of water. How much is it in ml?",
      hi: "एक टंकी में 10 लीटर पानी आता है। वह कितने मिलीलीटर होगा?"
    },
    options: ["1000 ml", "10,000 ml", "5000 ml", "100 ml"],
    correct: { en: "10,000 ml", hi: "10,000 मिलीलीटर" },
    explanation: {
      en: "10 × 1000 = 10,000 ml.",
      hi: "10 × 1000 = 10,000 मिलीलीटर।"
    }
  },
  {
    question: {
      en: "Which is equal to 1500 ml?",
      hi: "1500 मिलीलीटर किसके बराबर है?"
    },
    options: ["1.5 L", "15 L", "0.15 L", "150 L"],
    correct: { en: "1.5 L", hi: "1.5 लीटर" },
    explanation: {
      en: "1500 ÷ 1000 = 1.5 L.",
      hi: "1500 को 1000 से विभाजित करें = 1.5 लीटर।"
    }
  }
];

export default { questions };
