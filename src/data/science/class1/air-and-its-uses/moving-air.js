const questions = [
  {
    id: 1,
    question: {
      en: "What is moving air called?",
      hi: "चलती हवा को क्या कहते हैं?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Wind", hi: "पवन" },
      { en: "Light", hi: "प्रकाश" },
      { en: "Smoke", hi: "धुआँ" }
    ],
    correct: {
      en: "Wind",
      hi: "पवन"
    },
    explanation: {
      en: "Air in motion is called wind.",
      hi: "जो हवा चलती है उसे पवन कहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What helps a kite to fly?",
      hi: "पतंग उड़ाने में क्या मदद करता है?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Sun", hi: "सूरज" },
      { en: "Wind", hi: "पवन" },
      { en: "Clouds", hi: "बादल" }
    ],
    correct: {
      en: "Wind",
      hi: "पवन"
    },
    explanation: {
      en: "Wind helps kites fly high in the sky.",
      hi: "पवन की मदद से पतंग आसमान में उड़ती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these moves because of wind?",
      hi: "इनमें से कौन पवन के कारण चलता है?"
    },
    options: [
      { en: "Fan", hi: "पंखा" },
      { en: "Wheel", hi: "पहिया" },
      { en: "Windmill", hi: "पवनचक्की" },
      { en: "Bulb", hi: "बल्ब" }
    ],
    correct: {
      en: "Windmill",
      hi: "पवनचक्की"
    },
    explanation: {
      en: "Windmill rotates when the wind blows.",
      hi: "पवनचक्की हवा से चलती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What do we feel on our face when air moves?",
      hi: "जब हवा चलती है तो हमें चेहरे पर क्या महसूस होता है?"
    },
    options: [
      { en: "Heat", hi: "गर्मी" },
      { en: "Wetness", hi: "गीलापन" },
      { en: "Coolness", hi: "ठंडक" },
      { en: "Nothing", hi: "कुछ नहीं" }
    ],
    correct: {
      en: "Coolness",
      hi: "ठंडक"
    },
    explanation: {
      en: "Moving air gives a cooling effect.",
      hi: "चलती हवा से ठंडक महसूस होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is run by wind energy?",
      hi: "इनमें से कौन पवन ऊर्जा से चलता है?"
    },
    options: [
      { en: "Car", hi: "कार" },
      { en: "Windmill", hi: "पवनचक्की" },
      { en: "Train", hi: "रेलगाड़ी" },
      { en: "Boat", hi: "नाव" }
    ],
    correct: {
      en: "Windmill",
      hi: "पवनचक्की"
    },
    explanation: {
      en: "Windmills use wind to generate power.",
      hi: "पवनचक्की हवा की मदद से बिजली बनाती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What moves the leaves on trees?",
      hi: "पेड़ों पर पत्तियाँ किससे हिलती हैं?"
    },
    options: [
      { en: "Sun", hi: "सूरज" },
      { en: "Moon", hi: "चाँद" },
      { en: "Wind", hi: "पवन" },
      { en: "Birds", hi: "पक्षी" }
    ],
    correct: {
      en: "Wind",
      hi: "पवन"
    },
    explanation: {
      en: "Wind makes tree leaves move.",
      hi: "पवन से पत्तियाँ हिलती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What moves a sailboat on water?",
      hi: "पानी में नाव को कौन चलाता है?"
    },
    options: [
      { en: "Engine", hi: "इंजन" },
      { en: "Wind", hi: "पवन" },
      { en: "Rope", hi: "रस्सी" },
      { en: "Oar", hi: "चप्पू" }
    ],
    correct: {
      en: "Wind",
      hi: "पवन"
    },
    explanation: {
      en: "Wind pushes the sails and moves the boat.",
      hi: "पवन पालों को चलाता है और नाव आगे बढ़ती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What happens to an umbrella in strong wind?",
      hi: "तेज़ हवा में छाता क्या करता है?"
    },
    options: [
      { en: "Breaks", hi: "टूट जाता है" },
      { en: "Flies away", hi: "उड़ जाता है" },
      { en: "Folds", hi: "मुड़ जाता है" },
      { en: "All of these", hi: "इनमें से सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "इनमें से सभी"
    },
    explanation: {
      en: "Strong wind can blow away or damage the umbrella.",
      hi: "तेज़ हवा में छाता उड़ सकता है या टूट सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Wind is useful for:",
      hi: "पवन किसमें उपयोगी है?"
    },
    options: [
      { en: "Flying kites", hi: "पतंग उड़ाने में" },
      { en: "Drying clothes", hi: "कपड़े सुखाने में" },
      { en: "Running windmills", hi: "पवनचक्की चलाने में" },
      { en: "All of the above", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of the above",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "Wind is used in many ways in daily life.",
      hi: "पवन का उपयोग रोज़मर्रा के जीवन में कई तरह से होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What shows us the direction of wind?",
      hi: "पवन की दिशा बताने वाला उपकरण क्या है?"
    },
    options: [
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Wind vane", hi: "पवन दिग्दर्शक" },
      { en: "Rain gauge", hi: "वर्षा मापी" },
      { en: "Barometer", hi: "वायुमापक" }
    ],
    correct: {
      en: "Wind vane",
      hi: "पवन दिग्दर्शक"
    },
    explanation: {
      en: "A wind vane shows the direction in which the wind blows.",
      hi: "पवन दिग्दर्शक हवा की दिशा दिखाता है।"
    }
  }
];

export default questions;
