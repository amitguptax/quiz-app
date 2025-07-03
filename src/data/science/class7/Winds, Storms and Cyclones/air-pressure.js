const airPressureAndWind = [
  {
    id: 1,
    question: {
      en: "What causes wind to blow?",
      hi: "हवा चलने का कारण क्या है?"
    },
    options: [
      { en: "Sunlight", hi: "सूर्य का प्रकाश" },
      { en: "Air pressure difference", hi: "वायु दाब में अंतर" },
      { en: "Clouds", hi: "बादल" },
      { en: "Humidity", hi: "आर्द्रता" }
    ],
    correct: {
      en: "Air pressure difference",
      hi: "वायु दाब में अंतर"
    },
    explanation: {
      en: "Wind blows from high pressure to low pressure areas.",
      hi: "हवा उच्च दाब क्षेत्र से निम्न दाब क्षेत्र की ओर चलती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Air moves from",
      hi: "हवा किस दिशा में चलती है?"
    },
    options: [
      { en: "Low pressure to high pressure", hi: "निम्न दाब से उच्च दाब" },
      { en: "High pressure to low pressure", hi: "उच्च दाब से निम्न दाब" },
      { en: "North to South", hi: "उत्तर से दक्षिण" },
      { en: "East to West", hi: "पूर्व से पश्चिम" }
    ],
    correct: {
      en: "High pressure to low pressure",
      hi: "उच्च दाब से निम्न दाब"
    },
    explanation: {
      en: "Air always moves from high pressure areas to low pressure areas.",
      hi: "हवा हमेशा उच्च दाब से निम्न दाब क्षेत्रों की ओर चलती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What creates differences in air pressure?",
      hi: "वायु दाब में अंतर किससे उत्पन्न होता है?"
    },
    options: [
      { en: "Uneven heating", hi: "असमान ताप" },
      { en: "Rainfall", hi: "वर्षा" },
      { en: "Pollution", hi: "प्रदूषण" },
      { en: "Clouds", hi: "बादल" }
    ],
    correct: {
      en: "Uneven heating",
      hi: "असमान ताप"
    },
    explanation: {
      en: "Uneven heating of land and water causes air pressure differences.",
      hi: "भूमि और जल के असमान ताप से वायु दाब में अंतर आता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Fast moving air is called",
      hi: "तेज़ गति से चलने वाली हवा को क्या कहते हैं?"
    },
    options: [
      { en: "Storm", hi: "तूफान" },
      { en: "Wind", hi: "हवा" },
      { en: "Cyclone", hi: "चक्रवात" },
      { en: "Breeze", hi: "सुगंधित हवा" }
    ],
    correct: {
      en: "Wind",
      hi: "हवा"
    },
    explanation: {
      en: "Fast moving air is simply called wind.",
      hi: "तेज़ गति से चलने वाली हवा को हवा कहते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Warm air is ______ than cold air.",
      hi: "गर्म हवा ठंडी हवा की तुलना में ______ होती है।"
    },
    options: [
      { en: "Heavier", hi: "भारी" },
      { en: "Denser", hi: "सघन" },
      { en: "Lighter", hi: "हल्की" },
      { en: "Cooler", hi: "ठंडी" }
    ],
    correct: {
      en: "Lighter",
      hi: "हल्की"
    },
    explanation: {
      en: "Warm air is lighter and rises up.",
      hi: "गर्म हवा हल्की होती है और ऊपर उठती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which instrument is used to measure air pressure?",
      hi: "वायु दाब मापने के लिए कौन सा यंत्र प्रयोग होता है?"
    },
    options: [
      { en: "Barometer", hi: "बैरोमीटर" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Anemometer", hi: "ऐनेमोमीटर" },
      { en: "Wind vane", hi: "पवनदर्शक" }
    ],
    correct: {
      en: "Barometer",
      hi: "बैरोमीटर"
    },
    explanation: {
      en: "Barometer is used to measure air pressure.",
      hi: "वायु दाब मापने के लिए बैरोमीटर का प्रयोग किया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which gas is most abundant in air?",
      hi: "वायु में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Nitrogen",
      hi: "नाइट्रोजन"
    },
    explanation: {
      en: "Air contains about 78% nitrogen.",
      hi: "वायु में लगभग 78% नाइट्रोजन होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Air pressure is ______ at sea level.",
      hi: "समुद्र तल पर वायु दाब कैसा होता है?"
    },
    options: [
      { en: "Lowest", hi: "सबसे कम" },
      { en: "Highest", hi: "सबसे अधिक" },
      { en: "Zero", hi: "शून्य" },
      { en: "Same everywhere", hi: "हर जगह समान" }
    ],
    correct: {
      en: "Highest",
      hi: "सबसे अधिक"
    },
    explanation: {
      en: "Air pressure is highest at sea level and decreases with height.",
      hi: "समुद्र तल पर वायु दाब सबसे अधिक होता है और ऊंचाई के साथ घटता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What does an anemometer measure?",
      hi: "ऐनेमोमीटर क्या मापता है?"
    },
    options: [
      { en: "Air pressure", hi: "वायु दाब" },
      { en: "Wind speed", hi: "हवा की गति" },
      { en: "Temperature", hi: "तापमान" },
      { en: "Rainfall", hi: "वर्षा" }
    ],
    correct: {
      en: "Wind speed",
      hi: "हवा की गति"
    },
    explanation: {
      en: "Anemometer is used to measure the speed of wind.",
      hi: "हवा की गति मापने के लिए ऐनेमोमीटर का प्रयोग होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What happens when warm air rises?",
      hi: "जब गर्म हवा ऊपर उठती है तो क्या होता है?"
    },
    options: [
      { en: "Air pressure increases", hi: "वायु दाब बढ़ता है" },
      { en: "Clouds disappear", hi: "बादल गायब हो जाते हैं" },
      { en: "Low pressure area is created", hi: "निम्न दाब क्षेत्र बनता है" },
      { en: "Wind stops", hi: "हवा रुक जाती है" }
    ],
    correct: {
      en: "Low pressure area is created",
      hi: "निम्न दाब क्षेत्र बनता है"
    },
    explanation: {
      en: "Warm rising air creates a low pressure zone.",
      hi: "गर्म हवा के ऊपर उठने से निम्न दाब क्षेत्र बनता है।"
    }
  }
];
export default airPressureAndWind;