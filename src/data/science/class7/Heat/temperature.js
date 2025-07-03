const measuringTemperature = [
  {
    id: 1,
    question: {
      en: "Which instrument is used to measure temperature?",
      hi: "तापमान मापने के लिए कौन सा यंत्र उपयोग किया जाता है?"
    },
    options: [
      { en: "Barometer", hi: "बैरोमीटर" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Hygrometer", hi: "हाइग्रोमीटर" },
      { en: "Anemometer", hi: "एनीमोमीटर" }
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
      en: "Which unit is commonly used to measure body temperature?",
      hi: "शरीर के तापमान को मापने के लिए सामान्यतः कौन सी इकाई उपयोग की जाती है?"
    },
    options: [
      { en: "Kelvin", hi: "केल्विन" },
      { en: "Celsius", hi: "सेल्सियस" },
      { en: "Fahrenheit", hi: "फारेनहाइट" },
      { en: "Joule", hi: "जूल" }
    ],
    correct: {
      en: "Fahrenheit",
      hi: "फारेनहाइट"
    },
    explanation: {
      en: "Body temperature is commonly measured in Fahrenheit.",
      hi: "शरीर का तापमान सामान्यतः फारेनहाइट में मापा जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the normal human body temperature in Fahrenheit?",
      hi: "मानव शरीर का सामान्य तापमान फारेनहाइट में कितना होता है?"
    },
    options: [
      { en: "96.4°F", hi: "96.4°F" },
      { en: "98.6°F", hi: "98.6°F" },
      { en: "100°F", hi: "100°F" },
      { en: "101°F", hi: "101°F" }
    ],
    correct: {
      en: "98.6°F",
      hi: "98.6°F"
    },
    explanation: {
      en: "Normal body temperature is 98.6°F.",
      hi: "मानव शरीर का सामान्य तापमान 98.6°F होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "In which unit is temperature measured in laboratories?",
      hi: "प्रयोगशालाओं में तापमान किस इकाई में मापा जाता है?"
    },
    options: [
      { en: "Joule", hi: "जूल" },
      { en: "Fahrenheit", hi: "फारेनहाइट" },
      { en: "Celsius", hi: "सेल्सियस" },
      { en: "Gram", hi: "ग्राम" }
    ],
    correct: {
      en: "Celsius",
      hi: "सेल्सियस"
    },
    explanation: {
      en: "Temperature in labs is usually measured in Celsius.",
      hi: "प्रयोगशालाओं में तापमान प्रायः सेल्सियस में मापा जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which thermometer is used by doctors?",
      hi: "डॉक्टर किस थर्मामीटर का उपयोग करते हैं?"
    },
    options: [
      { en: "Clinical thermometer", hi: "क्लिनिकल थर्मामीटर" },
      { en: "Laboratory thermometer", hi: "प्रयोगशाला थर्मामीटर" },
      { en: "Digital scale", hi: "डिजिटल स्केल" },
      { en: "Mercury barometer", hi: "मरकरी बैरोमीटर" }
    ],
    correct: {
      en: "Clinical thermometer",
      hi: "क्लिनिकल थर्मामीटर"
    },
    explanation: {
      en: "Doctors use clinical thermometers to check body temperature.",
      hi: "डॉक्टर शरीर का तापमान मापने के लिए क्लिनिकल थर्मामीटर का उपयोग करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What liquid is usually found in a traditional thermometer?",
      hi: "पारंपरिक थर्मामीटर में आमतौर पर कौन सा तरल होता है?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Alcohol", hi: "एल्कोहल" },
      { en: "Mercury", hi: "पारा" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Mercury",
      hi: "पारा"
    },
    explanation: {
      en: "Mercury expands with heat and is used in thermometers.",
      hi: "पारा ऊष्मा के साथ फैलता है और थर्मामीटर में उपयोग किया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why is mercury used in thermometers?",
      hi: "थर्मामीटर में पारे का उपयोग क्यों किया जाता है?"
    },
    options: [
      { en: "It is colorful", hi: "यह रंगीन होता है" },
      { en: "It is a gas", hi: "यह गैस होता है" },
      { en: "It expands uniformly", hi: "यह समान रूप से फैलता है" },
      { en: "It glows", hi: "यह चमकता है" }
    ],
    correct: {
      en: "It expands uniformly",
      hi: "यह समान रूप से फैलता है"
    },
    explanation: {
      en: "Mercury expands uniformly with temperature.",
      hi: "पारा तापमान के साथ समान रूप से फैलता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the range of a clinical thermometer?",
      hi: "क्लिनिकल थर्मामीटर की रेंज क्या होती है?"
    },
    options: [
      { en: "0°C to 50°C", hi: "0°C से 50°C" },
      { en: "35°C to 42°C", hi: "35°C से 42°C" },
      { en: "50°C to 100°C", hi: "50°C से 100°C" },
      { en: "0°C to 100°C", hi: "0°C से 100°C" }
    ],
    correct: {
      en: "35°C to 42°C",
      hi: "35°C से 42°C"
    },
    explanation: {
      en: "Clinical thermometers measure temperatures in the range 35°C to 42°C.",
      hi: "क्लिनिकल थर्मामीटर 35°C से 42°C के बीच का तापमान मापते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should be done before using a clinical thermometer?",
      hi: "क्लिनिकल थर्मामीटर उपयोग करने से पहले क्या करना चाहिए?"
    },
    options: [
      { en: "Break it", hi: "इसे तोड़ना चाहिए" },
      { en: "Shake it to bring mercury below 35°C", hi: "पारे को 35°C से नीचे लाने के लिए हिलाना चाहिए" },
      { en: "Freeze it", hi: "इसे फ्रीज़ करना चाहिए" },
      { en: "Boil it", hi: "इसे उबालना चाहिए" }
    ],
    correct: {
      en: "Shake it to bring mercury below 35°C",
      hi: "पारे को 35°C से नीचे लाने के लिए हिलाना चाहिए"
    },
    explanation: {
      en: "Before use, mercury should be shaken below the minimum reading.",
      hi: "थर्मामीटर उपयोग से पहले पारे को न्यूनतम स्तर से नीचे हिलाना चाहिए।"
    }
  },
  {
    id: 10,
    question: {
      en: "How long should a clinical thermometer be kept under the tongue?",
      hi: "क्लिनिकल थर्मामीटर को जीभ के नीचे कितनी देर रखना चाहिए?"
    },
    options: [
      { en: "5 seconds", hi: "5 सेकंड" },
      { en: "1 minute", hi: "1 मिनट" },
      { en: "10 minutes", hi: "10 मिनट" },
      { en: "30 seconds", hi: "30 सेकंड" }
    ],
    correct: {
      en: "1 minute",
      hi: "1 मिनट"
    },
    explanation: {
      en: "To get an accurate reading, it should be kept for about 1 minute.",
      hi: "सटीक माप के लिए थर्मामीटर को लगभग 1 मिनट तक रखना चाहिए।"
    }
  }
];

export default measuringTemperature;
