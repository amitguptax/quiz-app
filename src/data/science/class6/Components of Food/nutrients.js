const nutrients = [
  {
    id: 1,
    question: {
      en: "Which of the following is a body-building nutrient?",
      hi: "निम्न में से कौन सा पोषक तत्व शरीर बनाने में सहायक है?"
    },
    options: [
      { en: "Carbohydrates", hi: "कार्बोहाइड्रेट" },
      { en: "Fats", hi: "वसा" },
      { en: "Proteins", hi: "प्रोटीन" },
      { en: "Vitamins", hi: "विटामिन" }
    ],
    correct: {
      en: "Proteins",
      hi: "प्रोटीन"
    },
    explanation: {
      en: "Proteins help in body growth and repair.",
      hi: "प्रोटीन शरीर की वृद्धि और मरम्मत में सहायक होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which nutrient provides instant energy?",
      hi: "कौन सा पोषक तत्व त्वरित ऊर्जा प्रदान करता है?"
    },
    options: [
      { en: "Vitamins", hi: "विटामिन" },
      { en: "Proteins", hi: "प्रोटीन" },
      { en: "Carbohydrates", hi: "कार्बोहाइड्रेट" },
      { en: "Minerals", hi: "खनिज" }
    ],
    correct: {
      en: "Carbohydrates",
      hi: "कार्बोहाइड्रेट"
    },
    explanation: {
      en: "Carbohydrates are the main source of energy.",
      hi: "कार्बोहाइड्रेट ऊर्जा का मुख्य स्रोत हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which nutrient protects our body from diseases?",
      hi: "कौन सा पोषक तत्व शरीर को बीमारियों से बचाता है?"
    },
    options: [
      { en: "Proteins", hi: "प्रोटीन" },
      { en: "Vitamins", hi: "विटामिन" },
      { en: "Carbohydrates", hi: "कार्बोहाइड्रेट" },
      { en: "Fats", hi: "वसा" }
    ],
    correct: {
      en: "Vitamins",
      hi: "विटामिन"
    },
    explanation: {
      en: "Vitamins help in fighting against diseases.",
      hi: "विटामिन शरीर को बीमारियों से लड़ने में मदद करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which nutrient helps in keeping bones and teeth strong?",
      hi: "कौन सा पोषक तत्व हड्डियों और दाँतों को मजबूत बनाता है?"
    },
    options: [
      { en: "Iron", hi: "लोहा" },
      { en: "Calcium", hi: "कैल्शियम" },
      { en: "Vitamin C", hi: "विटामिन C" },
      { en: "Protein", hi: "प्रोटीन" }
    ],
    correct: {
      en: "Calcium",
      hi: "कैल्शियम"
    },
    explanation: {
      en: "Calcium strengthens bones and teeth.",
      hi: "कैल्शियम हड्डियों और दाँतों को मजबूत बनाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Fats are needed in the body to:",
      hi: "शरीर में वसा की आवश्यकता होती है:"
    },
    options: [
      { en: "Build muscles", hi: "मांसपेशियाँ बनाने के लिए" },
      { en: "Provide energy and warmth", hi: "ऊर्जा और गर्मी देने के लिए" },
      { en: "Fight diseases", hi: "बीमारियों से लड़ने के लिए" },
      { en: "Improve digestion", hi: "पाचन सुधारने के लिए" }
    ],
    correct: {
      en: "Provide energy and warmth",
      hi: "ऊर्जा और गर्मी देने के लिए"
    },
    explanation: {
      en: "Fats store energy and keep the body warm.",
      hi: "वसा ऊर्जा को संग्रहित करती है और शरीर को गर्म रखती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following contains protein?",
      hi: "निम्न में से किसमें प्रोटीन होता है?"
    },
    options: [
      { en: "Milk", hi: "दूध" },
      { en: "Ghee", hi: "घी" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Milk",
      hi: "दूध"
    },
    explanation: {
      en: "Milk is a good source of protein and calcium.",
      hi: "दूध प्रोटीन और कैल्शियम का अच्छा स्रोत है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the function of roughage in food?",
      hi: "भोजन में रेशा (रफेज) का कार्य क्या है?"
    },
    options: [
      { en: "Give energy", hi: "ऊर्जा देना" },
      { en: "Help digestion", hi: "पाचन में सहायता करना" },
      { en: "Build muscles", hi: "मांसपेशियाँ बनाना" },
      { en: "Fight infection", hi: "संक्रमण से लड़ना" }
    ],
    correct: {
      en: "Help digestion",
      hi: "पाचन में सहायता करना"
    },
    explanation: {
      en: "Roughage helps in proper digestion and bowel movement.",
      hi: "रेशा पाचन में सहायता करता है और मल त्याग को सही बनाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which vitamin is obtained from sunlight?",
      hi: "सूर्य की रोशनी से कौन सा विटामिन प्राप्त होता है?"
    },
    options: [
      { en: "Vitamin A", hi: "विटामिन A" },
      { en: "Vitamin B", hi: "विटामिन B" },
      { en: "Vitamin C", hi: "विटामिन C" },
      { en: "Vitamin D", hi: "विटामिन D" }
    ],
    correct: {
      en: "Vitamin D",
      hi: "विटामिन D"
    },
    explanation: {
      en: "Vitamin D is synthesized by the skin in sunlight.",
      hi: "विटामिन D सूर्य की रोशनी में त्वचा द्वारा बनता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which mineral is essential for making red blood cells?",
      hi: "लाल रक्त कणिकाओं के निर्माण के लिए कौन सा खनिज आवश्यक है?"
    },
    options: [
      { en: "Iron", hi: "लोहा" },
      { en: "Calcium", hi: "कैल्शियम" },
      { en: "Phosphorus", hi: "फॉस्फोरस" },
      { en: "Zinc", hi: "जिंक" }
    ],
    correct: {
      en: "Iron",
      hi: "लोहा"
    },
    explanation: {
      en: "Iron helps in the formation of hemoglobin in blood.",
      hi: "लोहा रक्त में हीमोग्लोबिन के निर्माण में सहायक होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which nutrient is needed in very small amounts but is essential?",
      hi: "कौन सा पोषक तत्व बहुत कम मात्रा में आवश्यक होता है लेकिन जरूरी होता है?"
    },
    options: [
      { en: "Carbohydrates", hi: "कार्बोहाइड्रेट" },
      { en: "Fats", hi: "वसा" },
      { en: "Proteins", hi: "प्रोटीन" },
      { en: "Vitamins", hi: "विटामिन" }
    ],
    correct: {
      en: "Vitamins",
      hi: "विटामिन"
    },
    explanation: {
      en: "Vitamins are required in small amounts but are essential for health.",
      hi: "विटामिन बहुत कम मात्रा में आवश्यक होते हैं लेकिन स्वास्थ्य के लिए जरूरी होते हैं।"
    }
  }
];

export default nutrients;
