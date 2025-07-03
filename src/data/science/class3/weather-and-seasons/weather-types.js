const weatherTypes = [
  {
    id: 1,
    question: {
      en: "Which of the following is a type of weather?",
      hi: "निम्नलिखित में से कौन मौसम का एक प्रकार है?"
    },
    options: [
      { en: "Sunny", hi: "धूप वाला" },
      { en: "Books", hi: "किताबें" },
      { en: "Chair", hi: "कुर्सी" },
      { en: "Window", hi: "खिड़की" }
    ],
    correct: {
      en: "Sunny",
      hi: "धूप वाला"
    },
    explanation: {
      en: "Sunny is a type of weather when the sun shines brightly.",
      hi: "धूप वाला मौसम तब होता है जब सूरज तेज़ चमकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the weather like during rainy days?",
      hi: "बरसात के दिनों में मौसम कैसा होता है?"
    },
    options: [
      { en: "Wet and cloudy", hi: "गीला और बादलों वाला" },
      { en: "Hot and dry", hi: "गर्म और सूखा" },
      { en: "Cold and snowy", hi: "ठंडा और बर्फीला" },
      { en: "Windy", hi: "तेज़ हवा वाला" }
    ],
    correct: {
      en: "Wet and cloudy",
      hi: "गीला और बादलों वाला"
    },
    explanation: {
      en: "Rainy weather is wet and has many clouds in the sky.",
      hi: "बरसात के मौसम में आकाश में बादल होते हैं और चारों ओर नमी रहती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What happens in windy weather?",
      hi: "तेज़ हवा वाले मौसम में क्या होता है?"
    },
    options: [
      { en: "Leaves fly", hi: "पत्तियाँ उड़ती हैं" },
      { en: "It rains", hi: "बारिश होती है" },
      { en: "It snows", hi: "बर्फ गिरती है" },
      { en: "It is very hot", hi: "बहुत गर्मी होती है" }
    ],
    correct: {
      en: "Leaves fly",
      hi: "पत्तियाँ उड़ती हैं"
    },
    explanation: {
      en: "In windy weather, air moves fast and can blow leaves and dust.",
      hi: "तेज़ हवा में पत्तियाँ और धूल उड़ सकती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which weather is best for wearing woollen clothes?",
      hi: "ऊन के कपड़े पहनने के लिए कौन सा मौसम सबसे अच्छा है?"
    },
    options: [
      { en: "Cold", hi: "ठंडा" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Hot", hi: "गर्म" },
      { en: "Windy", hi: "तेज़ हवा" }
    ],
    correct: {
      en: "Cold",
      hi: "ठंडा"
    },
    explanation: {
      en: "Woollen clothes keep us warm during cold weather.",
      hi: "ठंडे मौसम में ऊनी कपड़े हमें गर्म रखते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What do we use during rainy weather?",
      hi: "बरसात के मौसम में हम क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Umbrella", hi: "छाता" },
      { en: "Woollen cap", hi: "ऊन की टोपी" },
      { en: "Sunglasses", hi: "धूप का चश्मा" },
      { en: "Blanket", hi: "कंबल" }
    ],
    correct: {
      en: "Umbrella",
      hi: "छाता"
    },
    explanation: {
      en: "An umbrella helps us stay dry in rainy weather.",
      hi: "बरसात में छाता हमें भीगने से बचाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which season has hot weather?",
      hi: "कौन सा मौसम गर्म होता है?"
    },
    options: [
      { en: "Summer", hi: "गर्मी" },
      { en: "Winter", hi: "सर्दी" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Spring", hi: "वसंत" }
    ],
    correct: {
      en: "Summer",
      hi: "गर्मी"
    },
    explanation: {
      en: "The summer season is known for its hot weather.",
      hi: "गर्मी का मौसम गर्म होने के लिए जाना जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which weather makes us feel cold?",
      hi: "कौन सा मौसम हमें ठंडा महसूस कराता है?"
    },
    options: [
      { en: "Cold", hi: "ठंडा" },
      { en: "Hot", hi: "गर्म" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Windy", hi: "हवादार" }
    ],
    correct: {
      en: "Cold",
      hi: "ठंडा"
    },
    explanation: {
      en: "Cold weather makes us feel chilly and we wear warm clothes.",
      hi: "ठंडे मौसम में हमें सर्दी लगती है और हम गर्म कपड़े पहनते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What does the sun do during sunny weather?",
      hi: "धूप वाले मौसम में सूरज क्या करता है?"
    },
    options: [
      { en: "Shines brightly", hi: "तेज़ चमकता है" },
      { en: "Rains", hi: "बारिश करता है" },
      { en: "Makes wind", hi: "हवा चलाता है" },
      { en: "Brings clouds", hi: "बादल लाता है" }
    ],
    correct: {
      en: "Shines brightly",
      hi: "तेज़ चमकता है"
    },
    explanation: {
      en: "In sunny weather, the sun shines brightly and makes the day warm.",
      hi: "धूप वाले मौसम में सूरज तेज़ चमकता है और दिन गर्म हो जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which weather is best for flying kites?",
      hi: "पतंग उड़ाने के लिए कौन सा मौसम सबसे अच्छा होता है?"
    },
    options: [
      { en: "Windy", hi: "हवादार" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Snowy", hi: "बर्फीला" },
      { en: "Foggy", hi: "कोहरे वाला" }
    ],
    correct: {
      en: "Windy",
      hi: "हवादार"
    },
    explanation: {
      en: "Kites fly well in windy weather.",
      hi: "हवादार मौसम में पतंग अच्छी तरह उड़ती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What kind of clothes do we wear in sunny weather?",
      hi: "धूप वाले मौसम में हम किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "Light cotton clothes", hi: "हल्के सूती कपड़े" },
      { en: "Raincoats", hi: "रेनकोट" },
      { en: "Woollen clothes", hi: "ऊन के कपड़े" },
      { en: "Leather jackets", hi: "चमड़े की जैकेट" }
    ],
    correct: {
      en: "Light cotton clothes",
      hi: "हल्के सूती कपड़े"
    },
    explanation: {
      en: "Light cotton clothes keep us cool in sunny weather.",
      hi: "धूप वाले मौसम में हल्के कपड़े हमें ठंडक देते हैं।"
    }
  }
];

export default weatherTypes;
