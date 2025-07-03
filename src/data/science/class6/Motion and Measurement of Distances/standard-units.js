const standardUnits = [
  {
    id: 1,
    question: {
      en: "Which of the following is the standard unit of length in the metric system?",
      hi: "मीट्रिक प्रणाली में लंबाई की मानक इकाई कौन सी है?"
    },
    options: [
      { en: "Foot", hi: "फुट" },
      { en: "Inch", hi: "इंच" },
      { en: "Metre", hi: "मीटर" },
      { en: "Yard", hi: "गज" }
    ],
    correct: {
      en: "Metre",
      hi: "मीटर"
    },
    explanation: {
      en: "Metre is the standard unit of length in the metric system.",
      hi: "मीटर मीट्रिक प्रणाली में लंबाई की मानक इकाई है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the standard unit of mass in the metric system?",
      hi: "मीट्रिक प्रणाली में द्रव्यमान की मानक इकाई क्या है?"
    },
    options: [
      { en: "Gram", hi: "ग्राम" },
      { en: "Kilogram", hi: "किलोग्राम" },
      { en: "Pound", hi: "पाउंड" },
      { en: "Ton", hi: "टन" }
    ],
    correct: {
      en: "Kilogram",
      hi: "किलोग्राम"
    },
    explanation: {
      en: "Kilogram is the standard unit of mass in the metric system.",
      hi: "किलोग्राम मीट्रिक प्रणाली में द्रव्यमान की मानक इकाई है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the standard unit of time?",
      hi: "समय की मानक इकाई क्या है?"
    },
    options: [
      { en: "Minute", hi: "मिनट" },
      { en: "Second", hi: "सेकंड" },
      { en: "Hour", hi: "घंटा" },
      { en: "Day", hi: "दिन" }
    ],
    correct: {
      en: "Second",
      hi: "सेकंड"
    },
    explanation: {
      en: "Second is the standard unit of time.",
      hi: "सेकंड समय की मानक इकाई है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which instrument is commonly used to measure length?",
      hi: "लंबाई मापने के लिए सामान्यतः कौन सा यंत्र प्रयोग किया जाता है?"
    },
    options: [
      { en: "Stopwatch", hi: "घड़ी" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Ruler", hi: "पैमाना" },
      { en: "Spring balance", hi: "स्प्रिंग बैलेंस" }
    ],
    correct: {
      en: "Ruler",
      hi: "पैमाना"
    },
    explanation: {
      en: "Ruler is used to measure short lengths accurately.",
      hi: "पैमाना छोटी लंबाई को सटीक रूप से मापने के लिए प्रयोग होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is NOT a metric unit?",
      hi: "निम्न में से कौन एक मीट्रिक इकाई नहीं है?"
    },
    options: [
      { en: "Metre", hi: "मीटर" },
      { en: "Kilogram", hi: "किलोग्राम" },
      { en: "Inch", hi: "इंच" },
      { en: "Litre", hi: "लीटर" }
    ],
    correct: {
      en: "Inch",
      hi: "इंच"
    },
    explanation: {
      en: "Inch is part of the imperial system, not the metric system.",
      hi: "इंच मीट्रिक प्रणाली की इकाई नहीं है, यह इम्पीरियल प्रणाली की है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the SI unit of temperature?",
      hi: "तापमान की एस.आई. (SI) इकाई क्या है?"
    },
    options: [
      { en: "Celsius", hi: "सेल्सियस" },
      { en: "Kelvin", hi: "केल्विन" },
      { en: "Fahrenheit", hi: "फारेनहाइट" },
      { en: "Degree", hi: "डिग्री" }
    ],
    correct: {
      en: "Kelvin",
      hi: "केल्विन"
    },
    explanation: {
      en: "Kelvin is the SI unit for measuring temperature.",
      hi: "तापमान मापने की एस.आई. इकाई केल्विन है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which unit would you use to measure the thickness of a coin?",
      hi: "सिक्के की मोटाई मापने के लिए आप किस इकाई का उपयोग करेंगे?"
    },
    options: [
      { en: "Metre", hi: "मीटर" },
      { en: "Kilometre", hi: "किलोमीटर" },
      { en: "Millimetre", hi: "मिलीमीटर" },
      { en: "Litre", hi: "लीटर" }
    ],
    correct: {
      en: "Millimetre",
      hi: "मिलीमीटर"
    },
    explanation: {
      en: "Small thickness is measured in millimetres.",
      hi: "बहुत कम मोटाई को मिलीमीटर में मापा जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the SI unit of distance?",
      hi: "दूरी की एस.आई. इकाई क्या है?"
    },
    options: [
      { en: "Yard", hi: "गज" },
      { en: "Mile", hi: "मील" },
      { en: "Metre", hi: "मीटर" },
      { en: "Inch", hi: "इंच" }
    ],
    correct: {
      en: "Metre",
      hi: "मीटर"
    },
    explanation: {
      en: "Metre is the SI unit of distance.",
      hi: "मीटर दूरी की एस.आई. इकाई है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is the correct abbreviation for the standard unit of length?",
      hi: "लंबाई की मानक इकाई का सही संक्षिप्त रूप कौन सा है?"
    },
    options: [
      { en: "kg", hi: "किग्रा" },
      { en: "m", hi: "मी" },
      { en: "cm", hi: "सेमी" },
      { en: "lt", hi: "ली" }
    ],
    correct: {
      en: "m",
      hi: "मी"
    },
    explanation: {
      en: "'m' is the symbol for metre, the standard unit of length.",
      hi: "'मी' लंबाई की मानक इकाई मीटर का संक्षिप्त रूप है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which device is used to measure time accurately?",
      hi: "समय को सटीक रूप से मापने के लिए कौन सा यंत्र प्रयोग किया जाता है?"
    },
    options: [
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Ruler", hi: "पैमाना" },
      { en: "Clock", hi: "घड़ी" },
      { en: "Balance", hi: "तराजू" }
    ],
    correct: {
      en: "Clock",
      hi: "घड़ी"
    },
    explanation: {
      en: "A clock or stopwatch is used to measure time accurately.",
      hi: "समय को सटीक रूप से मापने के लिए घड़ी या स्टॉपवॉच का उपयोग किया जाता है।"
    }
  }
];

export default standardUnits;
