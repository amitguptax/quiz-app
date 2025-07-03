const sunMoonStars = [
  {
    id: 1,
    question: {
      en: "Which is the closest star to the Earth?",
      hi: "पृथ्वी के सबसे निकटतम तारा कौन सा है?"
    },
    options: [
      { en: "Moon", hi: "चाँद" },
      { en: "Mars", hi: "मंगल" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Venus", hi: "शुक्र" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "The Sun is the closest star to the Earth.",
      hi: "सूर्य पृथ्वी के सबसे निकटतम तारा है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which object appears brightest in the night sky?",
      hi: "रात के आकाश में कौन सी वस्तु सबसे चमकीली दिखाई देती है?"
    },
    options: [
      { en: "Star", hi: "तारा" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Moon", hi: "चाँद" },
      { en: "Mars", hi: "मंगल" }
    ],
    correct: {
      en: "Moon",
      hi: "चाँद"
    },
    explanation: {
      en: "The Moon reflects sunlight and appears brightest at night.",
      hi: "चाँद सूर्य के प्रकाश को परावर्तित करता है और रात में सबसे चमकीला दिखाई देता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What causes the twinkling of stars?",
      hi: "तारों के टिमटिमाने का कारण क्या है?"
    },
    options: [
      { en: "Stars blink", hi: "तारे पलक झपकाते हैं" },
      { en: "Clouds move", hi: "बादल चलते हैं" },
      { en: "Atmospheric disturbance", hi: "वायुमंडलीय गड़बड़ी" },
      { en: "Stars are small", hi: "तारे छोटे होते हैं" }
    ],
    correct: {
      en: "Atmospheric disturbance",
      hi: "वायुमंडलीय गड़बड़ी"
    },
    explanation: {
      en: "Stars twinkle due to the Earth's atmosphere disturbing the light.",
      hi: "तारे टिमटिमाते हैं क्योंकि पृथ्वी का वायुमंडल उनकी रोशनी को बाधित करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which heavenly body has its own light?",
      hi: "निम्न में से किस खगोलीय पिंड की अपनी रोशनी होती है?"
    },
    options: [
      { en: "Moon", hi: "चाँद" },
      { en: "Earth", hi: "पृथ्वी" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Saturn", hi: "शनि" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "The Sun is a star and has its own light.",
      hi: "सूर्य एक तारा है और इसकी अपनी रोशनी होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why does the Moon shine?",
      hi: "चाँद क्यों चमकता है?"
    },
    options: [
      { en: "It emits light", hi: "यह प्रकाश उत्पन्न करता है" },
      { en: "It reflects sunlight", hi: "यह सूर्य का प्रकाश परावर्तित करता है" },
      { en: "It glows in the dark", hi: "यह अंधेरे में चमकता है" },
      { en: "It has fire", hi: "इसमें आग है" }
    ],
    correct: {
      en: "It reflects sunlight",
      hi: "यह सूर्य का प्रकाश परावर्तित करता है"
    },
    explanation: {
      en: "The Moon shines by reflecting the light of the Sun.",
      hi: "चाँद सूर्य के प्रकाश को परावर्तित करके चमकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is a star?",
      hi: "निम्न में से कौन एक तारा है?"
    },
    options: [
      { en: "Earth", hi: "पृथ्वी" },
      { en: "Moon", hi: "चाँद" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Jupiter", hi: "बृहस्पति" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "The Sun is a star because it produces its own light and heat.",
      hi: "सूर्य एक तारा है क्योंकि यह अपनी रोशनी और गर्मी स्वयं उत्पन्न करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What do stars mostly consist of?",
      hi: "तारे मुख्य रूप से किससे बने होते हैं?"
    },
    options: [
      { en: "Water and air", hi: "पानी और हवा" },
      { en: "Rocks and dust", hi: "चट्टानें और धूल" },
      { en: "Gas and fire", hi: "गैस और अग्नि" },
      { en: "Ice and metal", hi: "बर्फ और धातु" }
    ],
    correct: {
      en: "Gas and fire",
      hi: "गैस और अग्नि"
    },
    explanation: {
      en: "Stars are made of hot gases and they burn like fire.",
      hi: "तारे गर्म गैसों से बने होते हैं और अग्नि की तरह जलते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why can’t we see stars during the day?",
      hi: "हम दिन में तारे क्यों नहीं देख सकते?"
    },
    options: [
      { en: "Stars are off", hi: "तारे बंद हो जाते हैं" },
      { en: "Sunlight is too bright", hi: "सूरज की रोशनी बहुत तेज होती है" },
      { en: "Stars go away", hi: "तारे चले जाते हैं" },
      { en: "Clouds cover stars", hi: "बादल तारे ढक लेते हैं" }
    ],
    correct: {
      en: "Sunlight is too bright",
      hi: "सूरज की रोशनी बहुत तेज होती है"
    },
    explanation: {
      en: "The bright sunlight hides the stars during the day.",
      hi: "सूरज की तेज़ रोशनी दिन में तारों को छिपा देती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is a natural satellite?",
      hi: "निम्न में से कौन एक प्राकृतिक उपग्रह है?"
    },
    options: [
      { en: "Mars", hi: "मंगल" },
      { en: "Moon", hi: "चाँद" },
      { en: "Rocket", hi: "रॉकेट" },
      { en: "Satellite TV", hi: "सैटेलाइट टीवी" }
    ],
    correct: {
      en: "Moon",
      hi: "चाँद"
    },
    explanation: {
      en: "The Moon is the Earth's natural satellite.",
      hi: "चाँद पृथ्वी का प्राकृतिक उपग्रह है।"
    }
  },
  {
    id: 10,
    question: {
      en: "When can we see the most stars?",
      hi: "हम सबसे अधिक तारे कब देख सकते हैं?"
    },
    options: [
      { en: "Daytime", hi: "दिन में" },
      { en: "Evening", hi: "शाम को" },
      { en: "During rain", hi: "बारिश के समय" },
      { en: "On a clear night", hi: "साफ रात में" }
    ],
    correct: {
      en: "On a clear night",
      hi: "साफ रात में"
    },
    explanation: {
      en: "We can see many stars on a night with a clear sky.",
      hi: "हम साफ रात में बहुत सारे तारे देख सकते हैं।"
    }
  }
];

export default sunMoonStars;
