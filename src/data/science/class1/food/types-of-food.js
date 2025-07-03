const questions = [
  {
    question: {
      en: "Which of these is a fruit?",
      hi: "इनमें से कौन सा फल है?"
    },
    options: [
      { en: "Apple", hi: "सेब" },
      { en: "Rice", hi: "चावल" },
      { en: "Potato", hi: "आलू" },
      { en: "Carrot", hi: "गाजर" }
    ],
    correct: { en: "Apple", hi: "सेब" },
    explanation: {
      en: "Apple is a fruit. It grows on trees and is sweet.",
      hi: "सेब एक फल है। यह पेड़ों पर उगता है और मीठा होता है।"
    }
  },
  {
    question: {
      en: "Which of the following is a vegetable?",
      hi: "निम्न में से कौन सी एक सब्ज़ी है?"
    },
    options: [
      { en: "Mango", hi: "आम" },
      { en: "Banana", hi: "केला" },
      { en: "Brinjal", hi: "बैंगन" },
      { en: "Grapes", hi: "अंगूर" }
    ],
    correct: { en: "Brinjal", hi: "बैंगन" },
    explanation: {
      en: "Brinjal is a vegetable used in cooking.",
      hi: "बैंगन एक सब्जी है जो खाना बनाने में इस्तेमाल होती है।"
    }
  },
  {
    question: {
      en: "Which is a dairy product?",
      hi: "कौन सा एक डेयरी उत्पाद है?"
    },
    options: [
      { en: "Milk", hi: "दूध" },
      { en: "Apple", hi: "सेब" },
      { en: "Potato", hi: "आलू" },
      { en: "Rice", hi: "चावल" }
    ],
    correct: { en: "Milk", hi: "दूध" },
    explanation: {
      en: "Milk is a dairy product obtained from cows and buffaloes.",
      hi: "दूध एक डेयरी उत्पाद है जो गायों और भैंसों से प्राप्त होता है।"
    }
  },
  {
    question: {
      en: "Which food item gives us energy?",
      hi: "कौन सा भोजन हमें ऊर्जा देता है?"
    },
    options: [
      { en: "Butter", hi: "मक्खन" },
      { en: "Salt", hi: "नमक" },
      { en: "Tea", hi: "चाय" },
      { en: "Spices", hi: "मसाले" }
    ],
    correct: { en: "Butter", hi: "मक्खन" },
    explanation: {
      en: "Butter contains fat which provides energy.",
      hi: "मक्खन में वसा होती है जो ऊर्जा देती है।"
    }
  },
  {
    question: {
      en: "Which is a cereal food?",
      hi: "कौन सा एक अनाज है?"
    },
    options: [
      { en: "Rice", hi: "चावल" },
      { en: "Tomato", hi: "टमाटर" },
      { en: "Milk", hi: "दूध" },
      { en: "Orange", hi: "संतरा" }
    ],
    correct: { en: "Rice", hi: "चावल" },
    explanation: {
      en: "Rice is a cereal commonly eaten in many parts of India.",
      hi: "चावल एक अनाज है जो भारत के कई भागों में खाया जाता है।"
    }
  },
  {
    question: {
      en: "Which of these is a source of protein?",
      hi: "इनमें से कौन प्रोटीन का स्रोत है?"
    },
    options: [
      { en: "Lentils (dal)", hi: "दाल" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Oil", hi: "तेल" },
      { en: "Salt", hi: "नमक" }
    ],
    correct: { en: "Lentils (dal)", hi: "दाल" },
    explanation: {
      en: "Lentils are rich in protein which helps build muscles.",
      hi: "दालों में प्रोटीन होता है जो मांसपेशियों को बनाता है।"
    }
  },
  {
    question: {
      en: "We get honey from:",
      hi: "हमें शहद कहाँ से मिलता है?"
    },
    options: [
      { en: "Bees", hi: "मधुमक्खी" },
      { en: "Cows", hi: "गाय" },
      { en: "Goats", hi: "बकरी" },
      { en: "Sheep", hi: "भेड़" }
    ],
    correct: { en: "Bees", hi: "मधुमक्खी" },
    explanation: {
      en: "Bees collect nectar and make honey.",
      hi: "मधुमक्खियाँ फूलों से रस इकट्ठा करके शहद बनाती हैं।"
    }
  },
  {
    question: {
      en: "Which one is an animal-based food?",
      hi: "इनमें से कौन जानवरों से प्राप्त भोजन है?"
    },
    options: [
      { en: "Meat", hi: "मांस" },
      { en: "Wheat", hi: "गेहूं" },
      { en: "Spinach", hi: "पालक" },
      { en: "Rice", hi: "चावल" }
    ],
    correct: { en: "Meat", hi: "मांस" },
    explanation: {
      en: "Meat comes from animals like chicken, goat, etc.",
      hi: "मांस जानवरों जैसे मुर्गी, बकरी से प्राप्त होता है।"
    }
  },
  {
    question: {
      en: "What do vegetarians avoid eating?",
      hi: "शाकाहारी लोग क्या नहीं खाते?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Vegetables", hi: "सब्ज़ियाँ" },
      { en: "Meat", hi: "मांस" },
      { en: "Lentils", hi: "दाल" }
    ],
    correct: { en: "Meat", hi: "मांस" },
    explanation: {
      en: "Vegetarians do not eat meat or animal flesh.",
      hi: "शाकाहारी लोग मांस नहीं खाते।"
    }
  },
  {
    question: {
      en: "Which food should we eat to stay healthy?",
      hi: "स्वस्थ रहने के लिए हमें कौन सा भोजन खाना चाहिए?"
    },
    options: [
      { en: "Fruits and vegetables", hi: "फल और सब्ज़ियाँ" },
      { en: "Chips", hi: "चिप्स" },
      { en: "Soft drinks", hi: "शीतल पेय" },
      { en: "Sweets", hi: "मिठाई" }
    ],
    correct: { en: "Fruits and vegetables", hi: "फल और सब्ज़ियाँ" },
    explanation: {
      en: "Fruits and vegetables keep us healthy and strong.",
      hi: "फल और सब्ज़ियाँ हमें स्वस्थ और मजबूत बनाती हैं।"
    }
  }
];

export default questions;
