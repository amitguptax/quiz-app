const indianSeasons = [
  {
    id: 1,
    question: {
      en: "How many main seasons are there in India?",
      hi: "भारत में मुख्य रूप से कितनी ऋतुएँ होती हैं?"
    },
    options: [
      { en: "Three", hi: "तीन" },
      { en: "Two", hi: "दो" },
      { en: "Four", hi: "चार" },
      { en: "Five", hi: "पाँच" }
    ],
    correct: {
      en: "Three",
      hi: "तीन"
    },
    explanation: {
      en: "India mainly has three seasons: summer, rainy, and winter.",
      hi: "भारत में मुख्य रूप से तीन ऋतुएँ होती हैं: गर्मी, बरसात और सर्दी।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which season comes after summer in India?",
      hi: "भारत में गर्मी के बाद कौन सी ऋतु आती है?"
    },
    options: [
      { en: "Rainy", hi: "बरसात" },
      { en: "Winter", hi: "सर्दी" },
      { en: "Spring", hi: "वसंत" },
      { en: "Autumn", hi: "पतझड़" }
    ],
    correct: {
      en: "Rainy",
      hi: "बरसात"
    },
    explanation: {
      en: "The rainy season comes after summer.",
      hi: "गर्मी के बाद बरसात का मौसम आता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What do we use in the rainy season?",
      hi: "बरसात के मौसम में हम क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Umbrella", hi: "छाता" },
      { en: "Woollen clothes", hi: "ऊन के कपड़े" },
      { en: "Fans", hi: "पंखा" },
      { en: "Sunglasses", hi: "धूप का चश्मा" }
    ],
    correct: {
      en: "Umbrella",
      hi: "छाता"
    },
    explanation: {
      en: "We use an umbrella to protect ourselves from rain.",
      hi: "बरसात से बचने के लिए हम छाता इस्तेमाल करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "When do we wear woollen clothes?",
      hi: "हम ऊनी कपड़े कब पहनते हैं?"
    },
    options: [
      { en: "Winter", hi: "सर्दी" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Spring", hi: "वसंत" }
    ],
    correct: {
      en: "Winter",
      hi: "सर्दी"
    },
    explanation: {
      en: "Woollen clothes keep us warm in winter.",
      hi: "सर्दियों में ऊनी कपड़े हमें गर्म रखते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the weather like in summer?",
      hi: "गर्मियों में मौसम कैसा होता है?"
    },
    options: [
      { en: "Hot", hi: "गर्म" },
      { en: "Cold", hi: "ठंडा" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Snowy", hi: "बर्फबारी" }
    ],
    correct: {
      en: "Hot",
      hi: "गर्म"
    },
    explanation: {
      en: "Summer is the hottest season in India.",
      hi: "भारत में गर्मी सबसे गर्म मौसम होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "In which season do crops grow well due to rain?",
      hi: "किस ऋतु में बारिश के कारण फसलें अच्छी होती हैं?"
    },
    options: [
      { en: "Rainy", hi: "बरसात" },
      { en: "Winter", hi: "सर्दी" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Spring", hi: "वसंत" }
    ],
    correct: {
      en: "Rainy",
      hi: "बरसात"
    },
    explanation: {
      en: "Rainwater helps crops to grow well.",
      hi: "बरसात का पानी फसलों के लिए लाभकारी होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which festival is celebrated in winter?",
      hi: "सर्दियों में कौन सा त्योहार मनाया जाता है?"
    },
    options: [
      { en: "Christmas", hi: "क्रिसमस" },
      { en: "Holi", hi: "होली" },
      { en: "Diwali", hi: "दीवाली" },
      { en: "Raksha Bandhan", hi: "रक्षाबंधन" }
    ],
    correct: {
      en: "Christmas",
      hi: "क्रिसमस"
    },
    explanation: {
      en: "Christmas is celebrated in December during the winter season.",
      hi: "क्रिसमस सर्दियों के मौसम में दिसंबर में मनाया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which season is known for hot winds?",
      hi: "कौन सा मौसम गर्म हवाओं के लिए जाना जाता है?"
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
      en: "Hot winds called 'loo' blow in summer.",
      hi: "गर्मी में 'लू' नामक गर्म हवाएँ चलती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is a feature of winter season?",
      hi: "सर्दियों की एक विशेषता क्या है?"
    },
    options: [
      { en: "Cold and foggy", hi: "ठंड और कोहरा" },
      { en: "Hot and sunny", hi: "गर्मी और धूप" },
      { en: "Wet and rainy", hi: "गीला और बरसात" },
      { en: "Windy and dusty", hi: "हवादार और धूल भरा" }
    ],
    correct: {
      en: "Cold and foggy",
      hi: "ठंड और कोहरा"
    },
    explanation: {
      en: "In winter, weather is cold and fog is common.",
      hi: "सर्दियों में मौसम ठंडा होता है और कोहरा होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should we drink more of in summer?",
      hi: "गर्मी में हमें किसका अधिक सेवन करना चाहिए?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Hot milk", hi: "गर्म दूध" },
      { en: "Tea", hi: "चाय" },
      { en: "Soup", hi: "सूप" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "In summer, we sweat more and need to stay hydrated.",
      hi: "गर्मी में पसीना अधिक आता है, इसलिए पानी पीना ज़रूरी है।"
    }
  }
];

export default indianSeasons;
