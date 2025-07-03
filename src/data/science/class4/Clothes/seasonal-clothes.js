const seasonalClothes = [
  {
    id: 1,
    question: {
      en: "Which type of clothes are worn in summer?",
      hi: "गर्मियों में किस प्रकार के कपड़े पहने जाते हैं?"
    },
    options: [
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Cotton clothes", hi: "कपास के कपड़े" },
      { en: "Silk clothes", hi: "रेशम के कपड़े" },
      { en: "Leather clothes", hi: "चमड़े के कपड़े" }
    ],
    correct: {
      en: "Cotton clothes",
      hi: "कपास के कपड़े"
    },
    explanation: {
      en: "Cotton clothes keep us cool and absorb sweat in summer.",
      hi: "कपास के कपड़े हमें ठंडक देते हैं और पसीना सोखते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which clothes are suitable for winter season?",
      hi: "सर्दियों के मौसम में कौन से कपड़े उपयुक्त होते हैं?"
    },
    options: [
      { en: "Silk clothes", hi: "रेशम के कपड़े" },
      { en: "Raincoats", hi: "रेनकोट" },
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Cotton clothes", hi: "कपास के कपड़े" }
    ],
    correct: {
      en: "Woolen clothes",
      hi: "ऊन के कपड़े"
    },
    explanation: {
      en: "Woolen clothes keep our body warm in winter.",
      hi: "ऊन के कपड़े शरीर को सर्दियों में गर्म रखते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which clothing item is used during rainy season?",
      hi: "बरसात के मौसम में किस वस्त्र का उपयोग किया जाता है?"
    },
    options: [
      { en: "Sweater", hi: "स्वेटर" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Woolen cap", hi: "ऊन की टोपी" },
      { en: "Silk saree", hi: "रेशमी साड़ी" }
    ],
    correct: {
      en: "Raincoat",
      hi: "रेनकोट"
    },
    explanation: {
      en: "Raincoats protect us from getting wet during rain.",
      hi: "रेनकोट बारिश में भीगने से बचाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do we wear cotton clothes in summer?",
      hi: "हम गर्मियों में कपास के कपड़े क्यों पहनते हैं?"
    },
    options: [
      { en: "They are shiny", hi: "वे चमकदार होते हैं" },
      { en: "They absorb heat", hi: "वे गर्मी को सोखते हैं" },
      { en: "They absorb sweat", hi: "वे पसीना सोखते हैं" },
      { en: "They are thick", hi: "वे मोटे होते हैं" }
    ],
    correct: {
      en: "They absorb sweat",
      hi: "वे पसीना सोखते हैं"
    },
    explanation: {
      en: "Cotton clothes absorb sweat and keep the body cool.",
      hi: "कपास के कपड़े पसीना सोखते हैं और शरीर को ठंडा रखते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is not suitable for the rainy season?",
      hi: "इनमें से कौन वर्षा ऋतु के लिए उपयुक्त नहीं है?"
    },
    options: [
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Umbrella", hi: "छाता" },
      { en: "Woolen sweater", hi: "ऊन का स्वेटर" },
      { en: "Gumboots", hi: "गमबूट्स" }
    ],
    correct: {
      en: "Woolen sweater",
      hi: "ऊन का स्वेटर"
    },
    explanation: {
      en: "Woolen sweaters are not suitable for rainy season as they get wet easily.",
      hi: "ऊन के स्वेटर बारिश के मौसम में जल्दी भीग जाते हैं, इसलिए उपयुक्त नहीं हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which fabric is best for summer season?",
      hi: "गर्मियों के मौसम के लिए कौन सा कपड़ा सबसे अच्छा है?"
    },
    options: [
      { en: "Silk", hi: "रेशम" },
      { en: "Wool", hi: "ऊन" },
      { en: "Cotton", hi: "कपास" },
      { en: "Polyester", hi: "पॉलिएस्टर" }
    ],
    correct: {
      en: "Cotton",
      hi: "कपास"
    },
    explanation: {
      en: "Cotton is light and breathable, perfect for summer.",
      hi: "कपास हल्का और सांस लेने योग्य होता है, गर्मियों के लिए उत्तम।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which clothing item is worn to protect from cold?",
      hi: "ठंड से बचने के लिए कौन सा वस्त्र पहना जाता है?"
    },
    options: [
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Sweater", hi: "स्वेटर" },
      { en: "Shirt", hi: "कमीज़" },
      { en: "Cap", hi: "टोपी" }
    ],
    correct: {
      en: "Sweater",
      hi: "स्वेटर"
    },
    explanation: {
      en: "Sweaters are made of wool to protect from cold.",
      hi: "स्वेटर ऊन से बने होते हैं जो ठंड से बचाते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What kind of clothes do people wear during the monsoon?",
      hi: "मानसून में लोग किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "Light cotton clothes", hi: "हल्के कपास के कपड़े" },
      { en: "Raincoats and waterproof clothes", hi: "रेनकोट और वाटरप्रूफ कपड़े" },
      { en: "Woolen jackets", hi: "ऊन की जैकेट" },
      { en: "Heavy coats", hi: "भारी कोट" }
    ],
    correct: {
      en: "Raincoats and waterproof clothes",
      hi: "रेनकोट और वाटरप्रूफ कपड़े"
    },
    explanation: {
      en: "Waterproof clothes and raincoats help stay dry in monsoon.",
      hi: "वाटरप्रूफ कपड़े और रेनकोट मानसून में सूखा बनाए रखते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why are woolen clothes worn in winter?",
      hi: "सर्दियों में ऊनी कपड़े क्यों पहने जाते हैं?"
    },
    options: [
      { en: "They are stylish", hi: "वे स्टाइलिश होते हैं" },
      { en: "They keep us cool", hi: "वे हमें ठंडा रखते हैं" },
      { en: "They absorb sweat", hi: "वे पसीना सोखते हैं" },
      { en: "They keep us warm", hi: "वे हमें गर्म रखते हैं" }
    ],
    correct: {
      en: "They keep us warm",
      hi: "वे हमें गर्म रखते हैं"
    },
    explanation: {
      en: "Woolen clothes trap heat and keep the body warm in winter.",
      hi: "ऊन के कपड़े शरीर की गर्मी को बनाए रखते हैं और ठंड से बचाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which accessory is used to avoid rainwater on head?",
      hi: "बारिश में सिर को गीला होने से बचाने के लिए कौन सी वस्तु उपयोग की जाती है?"
    },
    options: [
      { en: "Woolen cap", hi: "ऊन की टोपी" },
      { en: "Scarf", hi: "दुपट्टा" },
      { en: "Umbrella", hi: "छाता" },
      { en: "Shawl", hi: "शॉल" }
    ],
    correct: {
      en: "Umbrella",
      hi: "छाता"
    },
    explanation: {
      en: "Umbrella is used during rain to protect from getting wet.",
      hi: "छाता बारिश में भीगने से बचाने के लिए उपयोग किया जाता है।"
    }
  }
];

export default seasonalClothes;
