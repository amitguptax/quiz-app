const dayNight = [
  {
    id: 1,
    question: {
      en: "What causes day and night on Earth?",
      hi: "पृथ्वी पर दिन और रात किस कारण होते हैं?"
    },
    options: [
      { en: "Sun's movement", hi: "सूर्य की गति" },
      { en: "Earth’s rotation", hi: "पृथ्वी का घूमना" },
      { en: "Moon's shadow", hi: "चाँद की छाया" },
      { en: "Clouds covering the Sun", hi: "बादलों का सूर्य को ढकना" }
    ],
    correct: {
      en: "Earth’s rotation",
      hi: "पृथ्वी का घूमना"
    },
    explanation: {
      en: "Day and night occur due to the Earth's rotation on its axis.",
      hi: "दिन और रात पृथ्वी के अपने अक्ष पर घूमने के कारण होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "How long does one complete rotation of the Earth take?",
      hi: "पृथ्वी को एक पूरा चक्कर लगाने में कितना समय लगता है?"
    },
    options: [
      { en: "12 hours", hi: "12 घंटे" },
      { en: "1 hour", hi: "1 घंटा" },
      { en: "24 hours", hi: "24 घंटे" },
      { en: "7 days", hi: "7 दिन" }
    ],
    correct: {
      en: "24 hours",
      hi: "24 घंटे"
    },
    explanation: {
      en: "Earth takes 24 hours to complete one rotation.",
      hi: "पृथ्वी को एक पूरा चक्कर लगाने में 24 घंटे लगते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Why does the Sun appear to move across the sky?",
      hi: "सूर्य आकाश में चलता हुआ क्यों दिखाई देता है?"
    },
    options: [
      { en: "Because Sun moves", hi: "क्योंकि सूर्य चलता है" },
      { en: "Due to Earth's rotation", hi: "पृथ्वी के घूमने के कारण" },
      { en: "Because of moon", hi: "चाँद के कारण" },
      { en: "Clouds move", hi: "बादल चलते हैं" }
    ],
    correct: {
      en: "Due to Earth's rotation",
      hi: "पृथ्वी के घूमने के कारण"
    },
    explanation: {
      en: "The Sun appears to move due to Earth's rotation.",
      hi: "पृथ्वी के घूमने के कारण सूर्य चलता हुआ प्रतीत होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which side of the Earth has day?",
      hi: "पृथ्वी का कौन सा भाग दिन का होता है?"
    },
    options: [
      { en: "Side facing the Sun", hi: "सूर्य की ओर मुख वाला भाग" },
      { en: "Side away from Sun", hi: "सूर्य से दूर वाला भाग" },
      { en: "North Pole", hi: "उत्तरी ध्रुव" },
      { en: "South Pole", hi: "दक्षिणी ध्रुव" }
    ],
    correct: {
      en: "Side facing the Sun",
      hi: "सूर्य की ओर मुख वाला भाग"
    },
    explanation: {
      en: "The part of Earth facing the Sun has day.",
      hi: "पृथ्वी का जो भाग सूर्य की ओर होता है, वहाँ दिन होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which side of the Earth has night?",
      hi: "पृथ्वी का कौन सा भाग रात का होता है?"
    },
    options: [
      { en: "Side facing the Sun", hi: "सूर्य की ओर वाला भाग" },
      { en: "Side opposite the Sun", hi: "सूर्य की विपरीत दिशा वाला भाग" },
      { en: "Both sides", hi: "दोनों ओर" },
      { en: "Equator", hi: "भूमध्य रेखा" }
    ],
    correct: {
      en: "Side opposite the Sun",
      hi: "सूर्य की विपरीत दिशा वाला भाग"
    },
    explanation: {
      en: "The part of Earth away from the Sun has night.",
      hi: "पृथ्वी का जो भाग सूर्य से दूर होता है, वहाँ रात होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "When does the Sun rise?",
      hi: "सूर्य कब उगता है?"
    },
    options: [
      { en: "Morning", hi: "सुबह" },
      { en: "Evening", hi: "शाम" },
      { en: "Afternoon", hi: "दोपहर" },
      { en: "Midnight", hi: "मध्यरात्रि" }
    ],
    correct: {
      en: "Morning",
      hi: "सुबह"
    },
    explanation: {
      en: "The Sun rises in the morning.",
      hi: "सूर्य सुबह के समय उगता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Where does the Sun set?",
      hi: "सूर्य कहाँ अस्त होता है?"
    },
    options: [
      { en: "East", hi: "पूरब" },
      { en: "North", hi: "उत्तर" },
      { en: "West", hi: "पश्चिम" },
      { en: "South", hi: "दक्षिण" }
    ],
    correct: {
      en: "West",
      hi: "पश्चिम"
    },
    explanation: {
      en: "The Sun sets in the west.",
      hi: "सूर्य पश्चिम दिशा में अस्त होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What comes after sunset?",
      hi: "सूर्यास्त के बाद क्या होता है?"
    },
    options: [
      { en: "Morning", hi: "सुबह" },
      { en: "Day", hi: "दिन" },
      { en: "Night", hi: "रात" },
      { en: "Rain", hi: "बारिश" }
    ],
    correct: {
      en: "Night",
      hi: "रात"
    },
    explanation: {
      en: "After the Sun sets, night begins.",
      hi: "सूर्यास्त के बाद रात होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "In which direction does the Sun rise?",
      hi: "सूर्य किस दिशा से उगता है?"
    },
    options: [
      { en: "West", hi: "पश्चिम" },
      { en: "North", hi: "उत्तर" },
      { en: "South", hi: "दक्षिण" },
      { en: "East", hi: "पूरब" }
    ],
    correct: {
      en: "East",
      hi: "पूरब"
    },
    explanation: {
      en: "The Sun rises in the east direction.",
      hi: "सूर्य पूरब दिशा से उगता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "How many times does Earth rotate in one day?",
      hi: "पृथ्वी एक दिन में कितनी बार घूमती है?"
    },
    options: [
      { en: "Once", hi: "एक बार" },
      { en: "Twice", hi: "दो बार" },
      { en: "Ten times", hi: "दस बार" },
      { en: "Not at all", hi: "बिल्कुल नहीं" }
    ],
    correct: {
      en: "Once",
      hi: "एक बार"
    },
    explanation: {
      en: "Earth completes one full rotation every 24 hours.",
      hi: "पृथ्वी हर 24 घंटे में एक बार पूरा घूमती है।"
    }
  }
];

export default dayNight;
