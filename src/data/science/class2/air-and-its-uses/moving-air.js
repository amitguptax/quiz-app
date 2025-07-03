const movingAir = [
  {
    id: 1,
    question: {
      en: "What is moving air called?",
      hi: "चलती हवा को क्या कहते हैं?"
    },
    options: [
      { en: "Wind", hi: "पवन" },
      { en: "Fire", hi: "आग" },
      { en: "Water", hi: "पानी" },
      { en: "Smoke", hi: "धुआँ" }
    ],
    correct: {
      en: "Wind",
      hi: "पवन"
    },
    explanation: {
      en: "Moving air is called wind.",
      hi: "चलती हुई हवा को पवन कहा जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What helps a kite to fly?",
      hi: "पतंग को उड़ने में क्या मदद करता है?"
    },
    options: [
      { en: "Wind", hi: "पवन" },
      { en: "Water", hi: "पानी" },
      { en: "Light", hi: "प्रकाश" },
      { en: "Rope", hi: "रस्सी" }
    ],
    correct: {
      en: "Wind",
      hi: "पवन"
    },
    explanation: {
      en: "Kites fly because of moving air (wind).",
      hi: "पतंग पवन की मदद से उड़ती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What do we feel on our face during wind?",
      hi: "पवन चलने पर हमारे चेहरे पर क्या महसूस होता है?"
    },
    options: [
      { en: "Coolness", hi: "ठंडक" },
      { en: "Heat", hi: "गर्मी" },
      { en: "Wetness", hi: "गीलापन" },
      { en: "Stickiness", hi: "चिपचिपापन" }
    ],
    correct: {
      en: "Coolness",
      hi: "ठंडक"
    },
    explanation: {
      en: "Wind makes us feel cool.",
      hi: "पवन से ठंडक महसूस होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What moves because of wind?",
      hi: "हवा चलने से क्या हिलता है?"
    },
    options: [
      { en: "Tree branches", hi: "पेड़ों की शाखाएँ" },
      { en: "Mountains", hi: "पहाड़" },
      { en: "Rocks", hi: "चट्टानें" },
      { en: "Buildings", hi: "इमारतें" }
    ],
    correct: {
      en: "Tree branches",
      hi: "पेड़ों की शाखाएँ"
    },
    explanation: {
      en: "Wind makes light objects like tree branches move.",
      hi: "पवन से पेड़ों की शाखाएँ हिलती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What runs with the help of wind?",
      hi: "हवा की मदद से क्या चलता है?"
    },
    options: [
      { en: "Windmill", hi: "पवनचक्की" },
      { en: "Fan", hi: "पंखा" },
      { en: "Torch", hi: "टॉर्च" },
      { en: "Pump", hi: "पंप" }
    ],
    correct: {
      en: "Windmill",
      hi: "पवनचक्की"
    },
    explanation: {
      en: "Windmills use wind to rotate their blades.",
      hi: "पवनचक्की हवा से चलती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which activity is difficult during strong wind?",
      hi: "तेज़ हवा में कौन सा कार्य कठिन होता है?"
    },
    options: [
      { en: "Walking", hi: "चलना" },
      { en: "Sleeping", hi: "सोना" },
      { en: "Eating", hi: "खाना" },
      { en: "Reading", hi: "पढ़ना" }
    ],
    correct: {
      en: "Walking",
      hi: "चलना"
    },
    explanation: {
      en: "Strong winds make walking hard.",
      hi: "तेज़ हवा में चलना कठिन हो जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What makes a sailboat move?",
      hi: "नाव को चलाने में क्या मदद करता है?"
    },
    options: [
      { en: "Wind", hi: "पवन" },
      { en: "Petrol", hi: "पेट्रोल" },
      { en: "Battery", hi: "बैटरी" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Wind",
      hi: "पवन"
    },
    explanation: {
      en: "Wind helps sailboats to move by pushing their sails.",
      hi: "पवन नाव के पाल को धक्का देकर नाव को चलाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What do we hear during strong wind?",
      hi: "तेज़ हवा के समय हम क्या सुनते हैं?"
    },
    options: [
      { en: "Whistling sound", hi: "सीटी जैसी आवाज़" },
      { en: "Singing", hi: "गाना" },
      { en: "Barking", hi: "भौंकना" },
      { en: "Meowing", hi: "म्याऊँ म्याऊँ" }
    ],
    correct: {
      en: "Whistling sound",
      hi: "सीटी जैसी आवाज़"
    },
    explanation: {
      en: "Strong winds make a whistling sound.",
      hi: "तेज़ हवा चलने पर सीटी जैसी आवाज़ आती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Wind can carry:",
      hi: "हवा क्या ले जा सकती है?"
    },
    options: [
      { en: "Dust and leaves", hi: "धूल और पत्तियाँ" },
      { en: "Mountains", hi: "पहाड़" },
      { en: "Cars", hi: "कार" },
      { en: "Rivers", hi: "नदियाँ" }
    ],
    correct: {
      en: "Dust and leaves",
      hi: "धूल और पत्तियाँ"
    },
    explanation: {
      en: "Moving air carries light objects like dust and leaves.",
      hi: "हवा धूल और पत्तियों जैसे हल्के पदार्थों को उड़ा सकती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which machine shows wind direction?",
      hi: "हवा की दिशा बताने वाली मशीन कौन सी है?"
    },
    options: [
      { en: "Weather vane", hi: "हवा मापक यंत्र" },
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Clock", hi: "घड़ी" },
      { en: "Ruler", hi: "फुटा" }
    ],
    correct: {
      en: "Weather vane",
      hi: "हवा मापक यंत्र"
    },
    explanation: {
      en: "A weather vane tells us the direction of the wind.",
      hi: "हवा मापक यंत्र हवा की दिशा बताता है।"
    }
  }
];

export default movingAir;
