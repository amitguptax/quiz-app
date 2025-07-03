const weatherChanges = [
  {
    id: 1,
    question: {
      en: "What is weather?",
      hi: "मौसम क्या होता है?"
    },
    options: [
      { en: "Changes in air only", hi: "केवल हवा में परिवर्तन" },
      { en: "Daily changes in atmosphere", hi: "वायुमंडल में दैनिक परिवर्तन" },
      { en: "Change in water only", hi: "केवल पानी में परिवर्तन" },
      { en: "Change in sunlight only", hi: "केवल धूप में परिवर्तन" }
    ],
    correct: {
      en: "Daily changes in atmosphere",
      hi: "वायुमंडल में दैनिक परिवर्तन"
    },
    explanation: {
      en: "Weather refers to the daily changes in the atmosphere.",
      hi: "मौसम वायुमंडल में प्रतिदिन होने वाले परिवर्तनों को कहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is NOT a type of weather?",
      hi: "निम्न में से कौन मौसम का प्रकार नहीं है?"
    },
    options: [
      { en: "Sunny", hi: "धूप वाला" },
      { en: "Rainy", hi: "बारिश वाला" },
      { en: "Windy", hi: "तेज हवा वाला" },
      { en: "Rocky", hi: "पथरीला" }
    ],
    correct: {
      en: "Rocky",
      hi: "पथरीला"
    },
    explanation: {
      en: "Rocky is not related to weather. Sunny, rainy, and windy are weather types.",
      hi: "‘पथरीला’ मौसम नहीं है; धूप वाला, बारिश वाला, और तेज हवा वाला मौसम होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What kind of clothes do we wear on a hot sunny day?",
      hi: "गर्म धूप वाले दिन हम किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "Woolen", hi: "ऊन वाले" },
      { en: "Cotton", hi: "सूत वाले" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Silk", hi: "रेशमी" }
    ],
    correct: {
      en: "Cotton",
      hi: "सूत वाले"
    },
    explanation: {
      en: "Cotton clothes keep us cool in hot weather.",
      hi: "गर्म मौसम में सूती कपड़े शरीर को ठंडा रखते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which season brings the most rainfall?",
      hi: "कौन सा मौसम सबसे अधिक वर्षा लाता है?"
    },
    options: [
      { en: "Winter", hi: "सर्दी" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Monsoon", hi: "मानसून" },
      { en: "Spring", hi: "वसंत" }
    ],
    correct: {
      en: "Monsoon",
      hi: "मानसून"
    },
    explanation: {
      en: "Monsoon season is known for heavy rainfall.",
      hi: "मानसून के मौसम में भारी वर्षा होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following causes changes in weather?",
      hi: "निम्न में से कौन मौसम में परिवर्तन लाता है?"
    },
    options: [
      { en: "Sun", hi: "सूर्य" },
      { en: "Moon", hi: "चाँद" },
      { en: "Mountains", hi: "पहाड़" },
      { en: "Trees", hi: "पेड़" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "The Sun’s heat causes changes in temperature and weather.",
      hi: "सूर्य की गर्मी तापमान और मौसम में परिवर्तन लाती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "How does weather affect our daily life?",
      hi: "मौसम हमारे दैनिक जीवन को कैसे प्रभावित करता है?"
    },
    options: [
      { en: "Only changes school hours", hi: "केवल स्कूल का समय बदलता है" },
      { en: "Decides our clothes, food, activities", hi: "हमारे कपड़े, भोजन, गतिविधियाँ तय करता है" },
      { en: "It doesn't affect us", hi: "इसका कोई असर नहीं होता" },
      { en: "Changes our names", hi: "हमारे नाम बदलता है" }
    ],
    correct: {
      en: "Decides our clothes, food, activities",
      hi: "हमारे कपड़े, भोजन, गतिविधियाँ तय करता है"
    },
    explanation: {
      en: "Weather influences what we wear, eat, and do.",
      hi: "मौसम तय करता है कि हम क्या पहनते, खाते और करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which weather condition is best for flying kites?",
      hi: "पतंग उड़ाने के लिए कौन सा मौसम सबसे अच्छा है?"
    },
    options: [
      { en: "Windy", hi: "तेज हवा वाला" },
      { en: "Rainy", hi: "बारिश वाला" },
      { en: "Snowy", hi: "बर्फीला" },
      { en: "Foggy", hi: "कोहरा वाला" }
    ],
    correct: {
      en: "Windy",
      hi: "तेज हवा वाला"
    },
    explanation: {
      en: "Windy weather helps kites fly high.",
      hi: "तेज हवा में पतंगें अच्छी तरह उड़ती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "In which season do we wear woolen clothes?",
      hi: "हम ऊनी कपड़े किस मौसम में पहनते हैं?"
    },
    options: [
      { en: "Rainy", hi: "बरसात" },
      { en: "Winter", hi: "सर्दी" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Spring", hi: "वसंत" }
    ],
    correct: {
      en: "Winter",
      hi: "सर्दी"
    },
    explanation: {
      en: "We wear woolen clothes to keep warm during winter.",
      hi: "सर्दी में गर्म रहने के लिए हम ऊनी कपड़े पहनते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What do people use during rainy weather?",
      hi: "बारिश के मौसम में लोग क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Scarf", hi: "स्कार्फ" },
      { en: "Umbrella", hi: "छाता" },
      { en: "Sunglasses", hi: "धूप के चश्मे" },
      { en: "Heater", hi: "हीटर" }
    ],
    correct: {
      en: "Umbrella",
      hi: "छाता"
    },
    explanation: {
      en: "An umbrella protects us from getting wet during rain.",
      hi: "बारिश में छाता हमें भीगने से बचाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which device helps to know about weather?",
      hi: "कौन सा उपकरण मौसम की जानकारी देता है?"
    },
    options: [
      { en: "Barometer", hi: "वायुदाब मापक" },
      { en: "Odometer", hi: "ओडोमीटर" },
      { en: "Microscope", hi: "सूक्ष्मदर्शी" },
      { en: "Stethoscope", hi: "स्ट्रेथोस्कोप" }
    ],
    correct: {
      en: "Barometer",
      hi: "वायुदाब मापक"
    },
    explanation: {
      en: "Barometer measures air pressure and helps predict weather.",
      hi: "वायुदाब मापक हवा के दबाव को मापता है और मौसम की भविष्यवाणी में मदद करता है।"
    }
  }
];

export default weatherChanges;
