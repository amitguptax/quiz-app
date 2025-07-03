const dayNight = [
  {
    id: 1,
    question: {
      en: "What causes day and night?",
      hi: "दिन और रात का कारण क्या है?"
    },
    options: [
      { en: "Rotation of the Earth", hi: "पृथ्वी का घूर्णन" },
      { en: "Sun moving around Earth", hi: "सूरज का पृथ्वी के चारों ओर घूमना" },
      { en: "Moonlight", hi: "चंद्रमा की रोशनी" },
      { en: "Clouds in the sky", hi: "आसमान में बादल" }
    ],
    correct: {
      en: "Rotation of the Earth",
      hi: "पृथ्वी का घूर्णन"
    },
    explanation: {
      en: "Earth's rotation causes different parts to face the sun or be in darkness.",
      hi: "पृथ्वी के घूमने से उसका एक हिस्सा सूर्य की ओर होता है जिससे दिन और दूसरा हिस्सा अंधेरे में जिससे रात होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What do we see in the sky during the day?",
      hi: "दिन में हम आकाश में क्या देखते हैं?"
    },
    options: [
      { en: "Sun", hi: "सूरज" },
      { en: "Moon", hi: "चाँद" },
      { en: "Stars", hi: "तारे" },
      { en: "None of these", hi: "इनमें से कोई नहीं" }
    ],
    correct: {
      en: "Sun",
      hi: "सूरज"
    },
    explanation: {
      en: "We see the sun shining in the sky during the day.",
      hi: "दिन में हम आकाश में चमकता हुआ सूरज देखते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "When do we see stars in the sky?",
      hi: "हम तारे कब देखते हैं?"
    },
    options: [
      { en: "At night", hi: "रात में" },
      { en: "In the morning", hi: "सुबह में" },
      { en: "In the afternoon", hi: "दोपहर में" },
      { en: "During sunrise", hi: "सूर्योदय के समय" }
    ],
    correct: {
      en: "At night",
      hi: "रात में"
    },
    explanation: {
      en: "Stars are visible at night when the sky is dark.",
      hi: "तारे रात में दिखाई देते हैं जब आकाश अंधेरा होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "When does the sun rise?",
      hi: "सूरज कब उगता है?"
    },
    options: [
      { en: "Morning", hi: "सुबह" },
      { en: "Afternoon", hi: "दोपहर" },
      { en: "Evening", hi: "शाम" },
      { en: "Night", hi: "रात" }
    ],
    correct: {
      en: "Morning",
      hi: "सुबह"
    },
    explanation: {
      en: "The sun rises in the morning and gives us light.",
      hi: "सूरज सुबह उगता है और हमें रोशनी देता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What happens when it is night on one side of the Earth?",
      hi: "पृथ्वी के एक ओर रात होने पर दूसरी ओर क्या होता है?"
    },
    options: [
      { en: "It is day", hi: "दिन होता है" },
      { en: "It is night", hi: "रात होती है" },
      { en: "It rains", hi: "बारिश होती है" },
      { en: "It snows", hi: "बर्फ गिरती है" }
    ],
    correct: {
      en: "It is day",
      hi: "दिन होता है"
    },
    explanation: {
      en: "When one side faces the sun (day), the other side is in darkness (night).",
      hi: "जब पृथ्वी का एक हिस्सा सूर्य की ओर होता है तो वहाँ दिन और दूसरे हिस्से में रात होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What gives us light during the day?",
      hi: "दिन में हमें रोशनी कौन देता है?"
    },
    options: [
      { en: "The Sun", hi: "सूरज" },
      { en: "The Moon", hi: "चाँद" },
      { en: "Stars", hi: "तारे" },
      { en: "Fire", hi: "आग" }
    ],
    correct: {
      en: "The Sun",
      hi: "सूरज"
    },
    explanation: {
      en: "Sunlight brightens the day and helps us see.",
      hi: "सूरज की रोशनी से दिन में हमें रोशनी मिलती है और हम देख पाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which direction does the sun rise from?",
      hi: "सूरज किस दिशा से उगता है?"
    },
    options: [
      { en: "East", hi: "पूर्व" },
      { en: "West", hi: "पश्चिम" },
      { en: "North", hi: "उत्तर" },
      { en: "South", hi: "दक्षिण" }
    ],
    correct: {
      en: "East",
      hi: "पूर्व"
    },
    explanation: {
      en: "The sun always rises in the east.",
      hi: "सूरज हमेशा पूर्व दिशा में उगता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What happens when the sun sets?",
      hi: "जब सूरज डूबता है तो क्या होता है?"
    },
    options: [
      { en: "It becomes night", hi: "रात हो जाती है" },
      { en: "It becomes afternoon", hi: "दोपहर हो जाती है" },
      { en: "It rains", hi: "बारिश होती है" },
      { en: "It gets hot", hi: "गर्मी बढ़ती है" }
    ],
    correct: {
      en: "It becomes night",
      hi: "रात हो जाती है"
    },
    explanation: {
      en: "Sunset leads to darkness and night begins.",
      hi: "सूरज के डूबने पर अंधेरा होता है और रात होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What helps us tell the time of day?",
      hi: "हमें दिन के समय को जानने में कौन मदद करता है?"
    },
    options: [
      { en: "The position of the Sun", hi: "सूरज की स्थिति" },
      { en: "The stars", hi: "तारे" },
      { en: "The moon", hi: "चाँद" },
      { en: "The clouds", hi: "बादल" }
    ],
    correct: {
      en: "The position of the Sun",
      hi: "सूरज की स्थिति"
    },
    explanation: {
      en: "The Sun’s position helps us know whether it's morning, noon, or evening.",
      hi: "सूरज की स्थिति से हमें पता चलता है कि सुबह, दोपहर या शाम है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why is it dark at night?",
      hi: "रात में अंधेरा क्यों होता है?"
    },
    options: [
      { en: "Because the sun is not visible", hi: "क्योंकि सूरज दिखाई नहीं देता" },
      { en: "Because of clouds", hi: "बादलों के कारण" },
      { en: "Because of rain", hi: "बारिश के कारण" },
      { en: "Because of fog", hi: "कोहरे के कारण" }
    ],
    correct: {
      en: "Because the sun is not visible",
      hi: "क्योंकि सूरज दिखाई नहीं देता"
    },
    explanation: {
      en: "At night, the sun does not shine on that part of the Earth.",
      hi: "रात में पृथ्वी का वह हिस्सा सूर्य की रोशनी से दूर होता है।"
    }
  }
];

export default dayNight;
