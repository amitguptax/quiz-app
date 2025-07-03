const transportModes = [
  {
    id: 1,
    question: {
      en: "Which of the following is a land transport?",
      hi: "निम्न में से कौन भूमि परिवहन है?"
    },
    options: [
      { en: "Car", hi: "कार" },
      { en: "Ship", hi: "जहाज़" },
      { en: "Helicopter", hi: "हेलीकॉप्टर" },
      { en: "Boat", hi: "नाव" }
    ],
    correct: {
      en: "Car",
      hi: "कार"
    },
    explanation: {
      en: "Cars move on roads and are a type of land transport.",
      hi: "कारें सड़कों पर चलती हैं और भूमि परिवहन का एक प्रकार हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which is used for air transport?",
      hi: "हवाई परिवहन के लिए क्या उपयोग किया जाता है?"
    },
    options: [
      { en: "Airplane", hi: "हवाई जहाज" },
      { en: "Train", hi: "ट्रेन" },
      { en: "Bus", hi: "बस" },
      { en: "Scooter", hi: "स्कूटर" }
    ],
    correct: {
      en: "Airplane",
      hi: "हवाई जहाज"
    },
    explanation: {
      en: "Airplanes fly in the sky and are used for air transport.",
      hi: "हवाई जहाज आसमान में उड़ते हैं और हवाई परिवहन के लिए उपयोग किए जाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which vehicle moves on water?",
      hi: "कौन सा वाहन पानी पर चलता है?"
    },
    options: [
      { en: "Boat", hi: "नाव" },
      { en: "Bicycle", hi: "साइकिल" },
      { en: "Truck", hi: "ट्रक" },
      { en: "Aeroplane", hi: "विमान" }
    ],
    correct: {
      en: "Boat",
      hi: "नाव"
    },
    explanation: {
      en: "Boats and ships are water transports.",
      hi: "नाव और जहाज़ जल परिवहन हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is not a land transport?",
      hi: "निम्न में से कौन भूमि परिवहन नहीं है?"
    },
    options: [
      { en: "Ship", hi: "जहाज़" },
      { en: "Bus", hi: "बस" },
      { en: "Truck", hi: "ट्रक" },
      { en: "Scooter", hi: "स्कूटर" }
    ],
    correct: {
      en: "Ship",
      hi: "जहाज़"
    },
    explanation: {
      en: "Ship is a water transport, not land.",
      hi: "जहाज़ जल परिवहन है, भूमि परिवहन नहीं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which vehicle is commonly used for long air travel?",
      hi: "लंबी हवाई यात्रा के लिए आमतौर पर कौन सा वाहन उपयोग किया जाता है?"
    },
    options: [
      { en: "Aeroplane", hi: "हवाई जहाज" },
      { en: "Bicycle", hi: "साइकिल" },
      { en: "Boat", hi: "नाव" },
      { en: "Scooter", hi: "स्कूटर" }
    ],
    correct: {
      en: "Aeroplane",
      hi: "हवाई जहाज"
    },
    explanation: {
      en: "Airplanes are used to travel long distances quickly.",
      hi: "हवाई जहाज लंबी दूरी की यात्रा को जल्दी तय करने के लिए उपयोग किए जाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which mode of transport is the slowest?",
      hi: "निम्न में से कौन सबसे धीमा परिवहन साधन है?"
    },
    options: [
      { en: "Bicycle", hi: "साइकिल" },
      { en: "Train", hi: "ट्रेन" },
      { en: "Airplane", hi: "हवाई जहाज" },
      { en: "Car", hi: "कार" }
    ],
    correct: {
      en: "Bicycle",
      hi: "साइकिल"
    },
    explanation: {
      en: "Bicycles are slower than other transport modes.",
      hi: "साइकिल अन्य परिवहन साधनों की तुलना में धीमी होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which transport is best for traveling to another country?",
      hi: "किस परिवहन से दूसरे देश की यात्रा करना सबसे अच्छा होता है?"
    },
    options: [
      { en: "Airplane", hi: "हवाई जहाज" },
      { en: "Bus", hi: "बस" },
      { en: "Truck", hi: "ट्रक" },
      { en: "Train", hi: "ट्रेन" }
    ],
    correct: {
      en: "Airplane",
      hi: "हवाई जहाज"
    },
    explanation: {
      en: "Airplanes are fastest for international travel.",
      hi: "हवाई जहाज अंतरराष्ट्रीय यात्रा के लिए सबसे तेज़ होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is a public transport?",
      hi: "इनमें से कौन सार्वजनिक परिवहन है?"
    },
    options: [
      { en: "Bus", hi: "बस" },
      { en: "Scooter", hi: "स्कूटर" },
      { en: "Car", hi: "कार" },
      { en: "Bicycle", hi: "साइकिल" }
    ],
    correct: {
      en: "Bus",
      hi: "बस"
    },
    explanation: {
      en: "Buses are used by many people and are public transport.",
      hi: "बसें कई लोगों द्वारा उपयोग की जाती हैं और सार्वजनिक परिवहन होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these runs on tracks?",
      hi: "इनमें से कौन पटरियों पर चलता है?"
    },
    options: [
      { en: "Train", hi: "ट्रेन" },
      { en: "Car", hi: "कार" },
      { en: "Bus", hi: "बस" },
      { en: "Scooter", hi: "स्कूटर" }
    ],
    correct: {
      en: "Train",
      hi: "ट्रेन"
    },
    explanation: {
      en: "Trains run on railway tracks.",
      hi: "ट्रेनें रेलवे पटरियों पर चलती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which mode of transport flies in the sky?",
      hi: "कौन सा परिवहन साधन आकाश में उड़ता है?"
    },
    options: [
      { en: "Helicopter", hi: "हेलीकॉप्टर" },
      { en: "Train", hi: "ट्रेन" },
      { en: "Bus", hi: "बस" },
      { en: "Boat", hi: "नाव" }
    ],
    correct: {
      en: "Helicopter",
      hi: "हेलीकॉप्टर"
    },
    explanation: {
      en: "Helicopters fly in the air like airplanes.",
      hi: "हेलीकॉप्टर भी हवाई जहाज की तरह आसमान में उड़ते हैं।"
    }
  }
];

export default transportModes;
