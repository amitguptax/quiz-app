const weatherVsClimate = [
  {
    id: 1,
    question: {
      en: "What is weather?",
      hi: "मौसम क्या है?"
    },
    options: [
      { en: "Average atmospheric condition over years", hi: "वर्षों का औसत वायुमंडलीय स्थिति" },
      { en: "Day-to-day atmospheric condition", hi: "दैनिक वायुमंडलीय स्थिति" },
      { en: "Condition of oceans", hi: "महासागरों की स्थिति" },
      { en: "Seasonal rainfall", hi: "मौसमी वर्षा" }
    ],
    correct: {
      en: "Day-to-day atmospheric condition",
      hi: "दैनिक वायुमंडलीय स्थिति"
    },
    explanation: {
      en: "Weather refers to daily atmospheric conditions like temperature, humidity, etc.",
      hi: "मौसम का तात्पर्य दैनिक वायुमंडलीय स्थितियों से है जैसे तापमान, आर्द्रता आदि।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is climate?",
      hi: "जलवायु क्या है?"
    },
    options: [
      { en: "Short-term changes in weather", hi: "मौसम में अल्पकालिक परिवर्तन" },
      { en: "Daily temperature readings", hi: "दैनिक तापमान मापन" },
      { en: "Average weather over a long time", hi: "लंबे समय का औसत मौसम" },
      { en: "Sudden weather condition", hi: "अचानक मौसम की स्थिति" }
    ],
    correct: {
      en: "Average weather over a long time",
      hi: "लंबे समय का औसत मौसम"
    },
    explanation: {
      en: "Climate is the average weather pattern recorded over 25–30 years.",
      hi: "जलवायु वह औसत मौसम है जो 25–30 वर्षों में रिकॉर्ड किया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following affects the weather of a place?",
      hi: "निम्न में से कौन किसी स्थान के मौसम को प्रभावित करता है?"
    },
    options: [
      { en: "Temperature", hi: "तापमान" },
      { en: "Humidity", hi: "आर्द्रता" },
      { en: "Rainfall", hi: "वर्षा" },
      { en: "All of these", hi: "इनमें से सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "इनमें से सभी"
    },
    explanation: {
      en: "Weather depends on multiple factors like temperature, humidity, rainfall, etc.",
      hi: "मौसम तापमान, आर्द्रता, वर्षा आदि जैसे कई कारकों पर निर्भर करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which one changes frequently: weather or climate?",
      hi: "मौसम और जलवायु में से कौन अधिक बार बदलता है?"
    },
    options: [
      { en: "Weather", hi: "मौसम" },
      { en: "Climate", hi: "जलवायु" },
      { en: "Both", hi: "दोनों" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Weather",
      hi: "मौसम"
    },
    explanation: {
      en: "Weather changes frequently, while climate is stable over years.",
      hi: "मौसम बार-बार बदलता है जबकि जलवायु वर्षों तक स्थिर रहती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "How is climate of a region determined?",
      hi: "किसी क्षेत्र की जलवायु कैसे निर्धारित की जाती है?"
    },
    options: [
      { en: "By one day's weather", hi: "एक दिन के मौसम से" },
      { en: "By weather in one season", hi: "एक ऋतु के मौसम से" },
      { en: "By average weather over many years", hi: "कई वर्षों के औसत मौसम से" },
      { en: "By cloud color", hi: "बादलों के रंग से" }
    ],
    correct: {
      en: "By average weather over many years",
      hi: "कई वर्षों के औसत मौसम से"
    },
    explanation: {
      en: "Climate is based on long-term weather patterns.",
      hi: "जलवायु लंबे समय की मौसमीय प्रवृत्तियों पर आधारित होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is NOT a weather element?",
      hi: "निम्न में से कौन मौसम का घटक नहीं है?"
    },
    options: [
      { en: "Temperature", hi: "तापमान" },
      { en: "Humidity", hi: "आर्द्रता" },
      { en: "Rainfall", hi: "वर्षा" },
      { en: "Soil type", hi: "मिट्टी का प्रकार" }
    ],
    correct: {
      en: "Soil type",
      hi: "मिट्टी का प्रकार"
    },
    explanation: {
      en: "Soil type is a geographic factor, not a weather condition.",
      hi: "मिट्टी का प्रकार एक भौगोलिक कारक है, न कि मौसमीय घटक।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which instrument is used to measure temperature?",
      hi: "तापमान मापने के लिए कौन सा यंत्र प्रयोग होता है?"
    },
    options: [
      { en: "Barometer", hi: "बैरोमीटर" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Hygrometer", hi: "हाइग्रोमीटर" },
      { en: "Anemometer", hi: "एनेमोमीटर" }
    ],
    correct: {
      en: "Thermometer",
      hi: "थर्मामीटर"
    },
    explanation: {
      en: "A thermometer measures the air temperature.",
      hi: "थर्मामीटर वायु के तापमान को मापता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which instrument measures rainfall?",
      hi: "वर्षा मापने के लिए कौन सा यंत्र प्रयोग होता है?"
    },
    options: [
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Barometer", hi: "बैरोमीटर" },
      { en: "Rain gauge", hi: "रेन गेज" },
      { en: "Compass", hi: "कंपास" }
    ],
    correct: {
      en: "Rain gauge",
      hi: "रेन गेज"
    },
    explanation: {
      en: "Rain gauge is used to measure the amount of rainfall.",
      hi: "रेन गेज वर्षा की मात्रा मापने के लिए उपयोग होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What does a barometer measure?",
      hi: "बैरोमीटर क्या मापता है?"
    },
    options: [
      { en: "Humidity", hi: "आर्द्रता" },
      { en: "Wind speed", hi: "पवन की गति" },
      { en: "Air pressure", hi: "वायुदाब" },
      { en: "Rainfall", hi: "वर्षा" }
    ],
    correct: {
      en: "Air pressure",
      hi: "वायुदाब"
    },
    explanation: {
      en: "Barometer is used to measure air pressure.",
      hi: "बैरोमीटर वायुदाब मापने के लिए प्रयोग होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following represents climate and not weather?",
      hi: "निम्न में से कौन जलवायु को दर्शाता है, मौसम को नहीं?"
    },
    options: [
      { en: "A rainy Monday", hi: "बरसात वाला सोमवार" },
      { en: "A hot afternoon", hi: "गर्म दोपहर" },
      { en: "Cold winters in Kashmir", hi: "कश्मीर में ठंडी सर्दियाँ" },
      { en: "Windy morning", hi: "हवादार सुबह" }
    ],
    correct: {
      en: "Cold winters in Kashmir",
      hi: "कश्मीर में ठंडी सर्दियाँ"
    },
    explanation: {
      en: "Cold winters in Kashmir describe the long-term weather pattern i.e., climate.",
      hi: "कश्मीर में ठंडी सर्दियाँ लंबे समय की मौसमीय प्रवृत्ति को दर्शाती हैं, यानी जलवायु।"
    }
  }
];

export default weatherVsClimate;
