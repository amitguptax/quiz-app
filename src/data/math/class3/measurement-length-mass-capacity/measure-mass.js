const questions = [
  {
    question: {
      en: "What is the mass of an average watermelon?",
      hi: "एक सामान्य तरबूज का द्रव्यमान कितना होता है?"
    },
    options: [
      { en: "3 kg", hi: "3 कि.ग्रा." },
      { en: "3 g", hi: "3 ग्राम" },
      { en: "30 g", hi: "30 ग्राम" },
      { en: "300 kg", hi: "300 कि.ग्रा." }
    ],
    correct: {
      en: "3 kg",
      hi: "3 कि.ग्रा."
    },
    explanation: {
      en: "A medium-sized watermelon typically weighs around 3 kg.",
      hi: "एक मध्यम आकार का तरबूज आमतौर पर लगभग 3 कि.ग्रा. का होता है।"
    }
  },
  {
    question: {
      en: "Which is heavier: 1 kg or 500 g?",
      hi: "कौन अधिक भारी है: 1 कि.ग्रा. या 500 ग्राम?"
    },
    options: [
      { en: "1 kg", hi: "1 कि.ग्रा." },
      { en: "500 g", hi: "500 ग्राम" },
      { en: "Both are equal", hi: "दोनों बराबर हैं" },
      { en: "Can't say", hi: "कहा नहीं जा सकता" }
    ],
    correct: {
      en: "1 kg",
      hi: "1 कि.ग्रा."
    },
    explanation: {
      en: "1 kg = 1000 g, which is heavier than 500 g.",
      hi: "1 कि.ग्रा. = 1000 ग्राम, जो कि 500 ग्राम से अधिक है।"
    }
  },
  {
    question: {
      en: "How many grams are there in 2 kg?",
      hi: "2 कि.ग्रा. में कितने ग्राम होते हैं?"
    },
    options: [
      { en: "2000 g", hi: "2000 ग्राम" },
      { en: "20 g", hi: "20 ग्राम" },
      { en: "100 g", hi: "100 ग्राम" },
      { en: "500 g", hi: "500 ग्राम" }
    ],
    correct: {
      en: "2000 g",
      hi: "2000 ग्राम"
    },
    explanation: {
      en: "1 kg = 1000 g, so 2 kg = 2000 g.",
      hi: "1 कि.ग्रा. = 1000 ग्राम, इसलिए 2 कि.ग्रा. = 2000 ग्राम।"
    }
  },
  {
    question: {
      en: "Which unit is best to measure the weight of a rice sack?",
      hi: "चावल की बोरी का भार मापने के लिए कौन-सी इकाई सबसे उपयुक्त है?"
    },
    options: [
      { en: "kg", hi: "कि.ग्रा." },
      { en: "g", hi: "ग्राम" },
      { en: "mg", hi: "मिलीग्राम" },
      { en: "l", hi: "लीटर" }
    ],
    correct: {
      en: "kg",
      hi: "कि.ग्रा."
    },
    explanation: {
      en: "Sacks are heavy, so kilograms are the appropriate unit.",
      hi: "बोरी भारी होती है, इसलिए कि.ग्रा. उपयुक्त इकाई है।"
    }
  },
  {
    question: {
      en: "A chocolate weighs 250 g. What is its weight in kg?",
      hi: "एक चॉकलेट का वजन 250 ग्राम है। इसका वजन कि.ग्रा. में क्या होगा?"
    },
    options: [
      { en: "0.25 kg", hi: "0.25 कि.ग्रा." },
      { en: "2.5 kg", hi: "2.5 कि.ग्रा." },
      { en: "25 kg", hi: "25 कि.ग्रा." },
      { en: "1 kg", hi: "1 कि.ग्रा." }
    ],
    correct: {
      en: "0.25 kg",
      hi: "0.25 कि.ग्रा."
    },
    explanation: {
      en: "250 g = 250/1000 = 0.25 kg.",
      hi: "250 ग्राम = 250/1000 = 0.25 कि.ग्रा."
    }
  },
  {
    question: {
      en: "Which of the following is the lightest?",
      hi: "निम्न में से सबसे हल्का क्या है?"
    },
    options: [
      { en: "1 g", hi: "1 ग्राम" },
      { en: "1000 mg", hi: "1000 मिलीग्राम" },
      { en: "1 kg", hi: "1 कि.ग्रा." },
      { en: "100 g", hi: "100 ग्राम" }
    ],
    correct: {
      en: "1000 mg",
      hi: "1000 मिलीग्राम"
    },
    explanation: {
      en: "1000 mg = 1 g, but mg is a smaller unit.",
      hi: "1000 मिलीग्राम = 1 ग्राम, लेकिन मिलीग्राम सबसे छोटी इकाई है।"
    }
  },
  {
    question: {
      en: "A sack of potatoes weighs 10 kg. What is this in grams?",
      hi: "10 कि.ग्रा. आलू की बोरी का भार ग्राम में कितना होगा?"
    },
    options: [
      { en: "10000 g", hi: "10000 ग्राम" },
      { en: "1000 g", hi: "1000 ग्राम" },
      { en: "10 g", hi: "10 ग्राम" },
      { en: "5000 g", hi: "5000 ग्राम" }
    ],
    correct: {
      en: "10000 g",
      hi: "10000 ग्राम"
    },
    explanation: {
      en: "1 kg = 1000 g, so 10 kg = 10 × 1000 = 10000 g.",
      hi: "1 कि.ग्रा. = 1000 ग्राम, तो 10 कि.ग्रा. = 10000 ग्राम।"
    }
  },
  {
    question: {
      en: "Which is suitable for weighing a mango?",
      hi: "आम का वजन मापने के लिए कौन-सी इकाई उपयुक्त है?"
    },
    options: [
      { en: "g", hi: "ग्राम" },
      { en: "kg", hi: "कि.ग्रा." },
      { en: "mg", hi: "मिलीग्राम" },
      { en: "l", hi: "लीटर" }
    ],
    correct: {
      en: "g",
      hi: "ग्राम"
    },
    explanation: {
      en: "A mango usually weighs a few hundred grams.",
      hi: "आम का वजन आमतौर पर कुछ सौ ग्राम होता है।"
    }
  },
  {
    question: {
      en: "If a packet of flour weighs 5 kg, how many such packets make 20 kg?",
      hi: "यदि आटे के एक पैकेट का वजन 5 कि.ग्रा. है, तो 20 कि.ग्रा. बनाने के लिए कितने पैकेट चाहिए?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "5", hi: "5" },
      { en: "3", hi: "3" },
      { en: "2", hi: "2" }
    ],
    correct: {
      en: "4",
      hi: "4"
    },
    explanation: {
      en: "20 ÷ 5 = 4 packets.",
      hi: "20 ÷ 5 = 4 पैकेट।"
    }
  },
  {
    question: {
      en: "Which tool is used to measure mass accurately?",
      hi: "द्रव्यमान को सटीक रूप से मापने के लिए कौन-सा उपकरण प्रयोग किया जाता है?"
    },
    options: [
      { en: "Weighing scale", hi: "वज़न मापने वाला तराजू" },
      { en: "Ruler", hi: "पैमाना" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Measuring tape", hi: "मेजरिंग टेप" }
    ],
    correct: {
      en: "Weighing scale",
      hi: "वज़न मापने वाला तराजू"
    },
    explanation: {
      en: "Weighing scales are used to measure weight or mass.",
      hi: "वज़न मापने वाला तराजू द्रव्यमान मापने के लिए उपयोग किया जाता है।"
    }
  }
];

export default { questions };
