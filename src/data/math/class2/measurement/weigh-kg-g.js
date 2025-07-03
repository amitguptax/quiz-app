const questions = [
  {
    question: {
      en: "How many grams are there in 1 kilogram?",
      hi: "1 कि.ग्रा. में कितने ग्राम होते हैं?"
    },
    options: [
      { en: "10 g", hi: "10 ग्राम" },
      { en: "100 g", hi: "100 ग्राम" },
      { en: "500 g", hi: "500 ग्राम" },
      { en: "1000 g", hi: "1000 ग्राम" }
    ],
    correct: { en: "1000 g", hi: "1000 ग्राम" },
    explanation: {
      en: "1 kilogram = 1000 grams.",
      hi: "1 कि.ग्रा. = 1000 ग्राम।"
    }
  },
  {
    question: {
      en: "Which is heavier: 2 kg or 1500 g?",
      hi: "2 कि.ग्रा. और 1500 ग्राम में कौन भारी है?"
    },
    options: [
      { en: "2 kg", hi: "2 कि.ग्रा." },
      { en: "1500 g", hi: "1500 ग्राम" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "2 kg", hi: "2 कि.ग्रा." },
    explanation: {
      en: "2 kg = 2000 g which is more than 1500 g.",
      hi: "2 कि.ग्रा. = 2000 ग्राम, जो 1500 ग्राम से अधिक है।"
    }
  },
  {
    question: {
      en: "500 grams is equal to how many kilograms?",
      hi: "500 ग्राम कितने कि.ग्रा. के बराबर है?"
    },
    options: [
      { en: "0.25 kg", hi: "0.25 कि.ग्रा." },
      { en: "0.5 kg", hi: "0.5 कि.ग्रा." },
      { en: "1 kg", hi: "1 कि.ग्रा." },
      { en: "2 kg", hi: "2 कि.ग्रा." }
    ],
    correct: { en: "0.5 kg", hi: "0.5 कि.ग्रा." },
    explanation: {
      en: "500 g = 0.5 kg.",
      hi: "500 ग्राम = 0.5 कि.ग्रा।"
    }
  },
  {
    question: {
      en: "Which unit is smaller: kilogram or gram?",
      hi: "कि.ग्रा. और ग्राम में कौन-सी इकाई छोटी है?"
    },
    options: [
      { en: "Kilogram", hi: "कि.ग्रा." },
      { en: "Gram", hi: "ग्राम" },
      { en: "Both same", hi: "दोनों बराबर" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: { en: "Gram", hi: "ग्राम" },
    explanation: {
      en: "Gram is smaller; 1000 grams make 1 kg.",
      hi: "ग्राम छोटी इकाई है; 1000 ग्राम = 1 कि.ग्रा।"
    }
  },
  {
    question: {
      en: "If a watermelon weighs 3 kg, how many grams is that?",
      hi: "यदि एक तरबूज का वजन 3 कि.ग्रा. है, तो वह कितने ग्राम होगा?"
    },
    options: [
      { en: "300 g", hi: "300 ग्राम" },
      { en: "3000 g", hi: "3000 ग्राम" },
      { en: "30 g", hi: "30 ग्राम" },
      { en: "3 g", hi: "3 ग्राम" }
    ],
    correct: { en: "3000 g", hi: "3000 ग्राम" },
    explanation: {
      en: "3 kg = 3000 g.",
      hi: "3 कि.ग्रा. = 3000 ग्राम।"
    }
  },
  {
    question: {
      en: "Which is heavier: 750 g or 1 kg?",
      hi: "750 ग्राम और 1 कि.ग्रा. में कौन भारी है?"
    },
    options: [
      { en: "750 g", hi: "750 ग्राम" },
      { en: "1 kg", hi: "1 कि.ग्रा." },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "1 kg", hi: "1 कि.ग्रा." },
    explanation: {
      en: "1 kg = 1000 g, which is more than 750 g.",
      hi: "1 कि.ग्रा. = 1000 ग्राम, जो 750 ग्राम से अधिक है।"
    }
  },
  {
    question: {
      en: "Which item is usually measured in grams?",
      hi: "निम्न में से किसका वजन सामान्यतः ग्राम में मापा जाता है?"
    },
    options: [
      { en: "Sugar", hi: "चीनी" },
      { en: "Car", hi: "कार" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Table", hi: "मेज़" }
    ],
    correct: { en: "Sugar", hi: "चीनी" },
    explanation: {
      en: "Light items like sugar are measured in grams.",
      hi: "चीनी जैसे हल्के पदार्थ ग्राम में मापे जाते हैं।"
    }
  },
  {
    question: {
      en: "What is the weight of 2.5 kg in grams?",
      hi: "2.5 कि.ग्रा. का वजन ग्राम में कितना होगा?"
    },
    options: [
      { en: "250 g", hi: "250 ग्राम" },
      { en: "2500 g", hi: "2500 ग्राम" },
      { en: "25 g", hi: "25 ग्राम" },
      { en: "2050 g", hi: "2050 ग्राम" }
    ],
    correct: { en: "2500 g", hi: "2500 ग्राम" },
    explanation: {
      en: "2.5 kg = 2500 g.",
      hi: "2.5 कि.ग्रा. = 2500 ग्राम।"
    }
  },
  {
    question: {
      en: "Which is lighter: 1 kg or 800 g?",
      hi: "1 कि.ग्रा. और 800 ग्राम में कौन हल्का है?"
    },
    options: [
      { en: "1 kg", hi: "1 कि.ग्रा." },
      { en: "800 g", hi: "800 ग्राम" },
      { en: "Both equal", hi: "दोनों बराबर" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: { en: "800 g", hi: "800 ग्राम" },
    explanation: {
      en: "800 g is less than 1000 g (1 kg).",
      hi: "800 ग्राम, 1000 ग्राम (1 कि.ग्रा.) से कम है।"
    }
  },
  {
    question: {
      en: "Which is a correct match?",
      hi: "सही मेल कौन-सा है?"
    },
    options: [
      { en: "1 kg = 500 g", hi: "1 कि.ग्रा. = 500 ग्राम" },
      { en: "2 kg = 1000 g", hi: "2 कि.ग्रा. = 1000 ग्राम" },
      { en: "1 kg = 1000 g", hi: "1 कि.ग्रा. = 1000 ग्राम" },
      { en: "0.5 kg = 1000 g", hi: "0.5 कि.ग्रा. = 1000 ग्राम" }
    ],
    correct: { en: "1 kg = 1000 g", hi: "1 कि.ग्रा. = 1000 ग्राम" },
    explanation: {
      en: "1 kilogram is exactly 1000 grams.",
      hi: "1 कि.ग्रा. = ठीक 1000 ग्राम होता है।"
    }
  }
];

export default { questions };
