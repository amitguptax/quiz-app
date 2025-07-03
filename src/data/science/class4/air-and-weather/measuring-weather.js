const measuringWeather = [
  {
    id: 1,
    question: {
      en: "Which instrument is used to measure temperature?",
      hi: "तापमान मापने के लिए कौन सा उपकरण उपयोग किया जाता है?"
    },
    options: [
      { en: "Barometer", hi: "वायुदाब मापक" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Hygrometer", hi: "हाइग्रोमीटर" },
      { en: "Rain gauge", hi: "वर्षा मापक यंत्र" }
    ],
    correct: {
      en: "Thermometer",
      hi: "थर्मामीटर"
    },
    explanation: {
      en: "A thermometer is used to measure temperature.",
      hi: "थर्मामीटर का उपयोग तापमान मापने के लिए किया जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which device is used to measure rainfall?",
      hi: "वर्षा मापने के लिए किस उपकरण का उपयोग किया जाता है?"
    },
    options: [
      { en: "Rain gauge", hi: "वर्षा मापक यंत्र" },
      { en: "Barometer", hi: "वायुदाब मापक" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Wind vane", hi: "पवनदर्शी यंत्र" }
    ],
    correct: {
      en: "Rain gauge",
      hi: "वर्षा मापक यंत्र"
    },
    explanation: {
      en: "A rain gauge is used to measure the amount of rainfall.",
      hi: "वर्षा की मात्रा मापने के लिए वर्षा मापक यंत्र का उपयोग किया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What does a barometer measure?",
      hi: "वायुदाब मापक (Barometer) क्या मापता है?"
    },
    options: [
      { en: "Rainfall", hi: "वर्षा" },
      { en: "Humidity", hi: "नमी" },
      { en: "Air pressure", hi: "वायुदाब" },
      { en: "Wind speed", hi: "हवा की गति" }
    ],
    correct: {
      en: "Air pressure",
      hi: "वायुदाब"
    },
    explanation: {
      en: "A barometer is used to measure atmospheric pressure.",
      hi: "वायुदाब मापक वायुमंडलीय दबाव को मापने के लिए उपयोग किया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which instrument shows wind direction?",
      hi: "हवा की दिशा दिखाने वाला उपकरण कौन सा है?"
    },
    options: [
      { en: "Rain gauge", hi: "वर्षा मापक यंत्र" },
      { en: "Wind vane", hi: "पवनदर्शी यंत्र" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Hygrometer", hi: "हाइग्रोमीटर" }
    ],
    correct: {
      en: "Wind vane",
      hi: "पवनदर्शी यंत्र"
    },
    explanation: {
      en: "A wind vane indicates the direction from which wind is blowing.",
      hi: "पवनदर्शी यंत्र हवा की दिशा को दिखाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which device measures humidity in the air?",
      hi: "हवा में नमी को मापने के लिए किस यंत्र का उपयोग किया जाता है?"
    },
    options: [
      { en: "Barometer", hi: "वायुदाब मापक" },
      { en: "Hygrometer", hi: "हाइग्रोमीटर" },
      { en: "Anemometer", hi: "वातमापक" },
      { en: "Rain gauge", hi: "वर्षा मापक यंत्र" }
    ],
    correct: {
      en: "Hygrometer",
      hi: "हाइग्रोमीटर"
    },
    explanation: {
      en: "A hygrometer is used to measure humidity in the air.",
      hi: "हाइग्रोमीटर का उपयोग वायु में नमी मापने के लिए किया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which instrument is used to measure wind speed?",
      hi: "हवा की गति मापने के लिए कौन सा यंत्र प्रयोग होता है?"
    },
    options: [
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Rain gauge", hi: "वर्षा मापक यंत्र" },
      { en: "Anemometer", hi: "वातमापक" },
      { en: "Hygrometer", hi: "हाइग्रोमीटर" }
    ],
    correct: {
      en: "Anemometer",
      hi: "वातमापक"
    },
    explanation: {
      en: "Anemometer is used to measure the speed of wind.",
      hi: "वातमापक का उपयोग हवा की गति मापने के लिए किया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which unit is commonly used to measure temperature?",
      hi: "तापमान मापने के लिए सामान्यतः किस इकाई का उपयोग होता है?"
    },
    options: [
      { en: "Inches", hi: "इंच" },
      { en: "Kilometers", hi: "किलोमीटर" },
      { en: "Degrees Celsius", hi: "डिग्री सेल्सियस" },
      { en: "Grams", hi: "ग्राम" }
    ],
    correct: {
      en: "Degrees Celsius",
      hi: "डिग्री सेल्सियस"
    },
    explanation: {
      en: "Temperature is usually measured in degrees Celsius (°C).",
      hi: "तापमान सामान्यतः डिग्री सेल्सियस (°C) में मापा जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What do meteorologists study?",
      hi: "मौसम विज्ञानी (मौसम वैज्ञानिक) क्या अध्ययन करते हैं?"
    },
    options: [
      { en: "Rocks", hi: "चट्टानें" },
      { en: "Weather", hi: "मौसम" },
      { en: "Stars", hi: "तारे" },
      { en: "Animals", hi: "जानवर" }
    ],
    correct: {
      en: "Weather",
      hi: "मौसम"
    },
    explanation: {
      en: "Meteorologists are scientists who study weather and climate.",
      hi: "मौसम वैज्ञानिक (मौसम विज्ञानी) मौसम और जलवायु का अध्ययन करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which tool helps to forecast weather conditions?",
      hi: "मौसम की भविष्यवाणी करने में कौन सा उपकरण सहायक होता है?"
    },
    options: [
      { en: "Microscope", hi: "सूक्ष्मदर्शी" },
      { en: "Weather satellite", hi: "मौसम उपग्रह" },
      { en: "Calculator", hi: "कैलकुलेटर" },
      { en: "Compass", hi: "कंपास" }
    ],
    correct: {
      en: "Weather satellite",
      hi: "मौसम उपग्रह"
    },
    explanation: {
      en: "Weather satellites monitor Earth's atmosphere and help in forecasting.",
      hi: "मौसम उपग्रह पृथ्वी के वातावरण की निगरानी करते हैं और पूर्वानुमान में मदद करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What helps to record temperature throughout the day?",
      hi: "दिन भर के तापमान को रिकॉर्ड करने में क्या सहायक होता है?"
    },
    options: [
      { en: "Digital clock", hi: "डिजिटल घड़ी" },
      { en: "Maximum-minimum thermometer", hi: "अधिकतम-न्यूनतम थर्मामीटर" },
      { en: "Scale", hi: "तराजू" },
      { en: "Wind vane", hi: "पवनदर्शी यंत्र" }
    ],
    correct: {
      en: "Maximum-minimum thermometer",
      hi: "अधिकतम-न्यूनतम थर्मामीटर"
    },
    explanation: {
      en: "It records the highest and lowest temperatures in a day.",
      hi: "यह दिन के दौरान अधिकतम और न्यूनतम तापमान को रिकॉर्ड करता है।"
    }
  }
];

export default measuringWeather;
