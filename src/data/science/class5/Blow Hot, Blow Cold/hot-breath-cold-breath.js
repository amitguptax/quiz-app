const hotBreathColdBreath = [
  {
    id: 1,
    question: {
      en: "Why does hot breath feel warm?",
      hi: "गरम साँस गर्म क्यों महसूस होती है?"
    },
    options: [
      { en: "Because air inside lungs is warm", hi: "क्योंकि फेफड़ों के अंदर हवा गर्म होती है" },
      { en: "Because air is cold outside", hi: "क्योंकि बाहर हवा ठंडी होती है" },
      { en: "Because breath has water", hi: "क्योंकि साँस में पानी होता है" },
      { en: "Because breath is fast", hi: "क्योंकि साँस तेज होती है" }
    ],
    correct: {
      en: "Because air inside lungs is warm",
      hi: "क्योंकि फेफड़ों के अंदर हवा गर्म होती है"
    },
    explanation: {
      en: "Breath feels warm as it comes from inside the warm lungs.",
      hi: "साँस गर्म महसूस होती है क्योंकि यह गर्म फेफड़ों से आती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What happens when you blow cold breath on your hand?",
      hi: "जब आप अपनी ठंडी साँस अपने हाथ पर उड़ाते हैं तो क्या होता है?"
    },
    options: [
      { en: "Hand feels cold", hi: "हाथ ठंडा महसूस करता है" },
      { en: "Hand feels hot", hi: "हाथ गर्म महसूस करता है" },
      { en: "Hand feels wet", hi: "हाथ गीला महसूस करता है" },
      { en: "No change", hi: "कोई बदलाव नहीं" }
    ],
    correct: {
      en: "Hand feels cold",
      hi: "हाथ ठंडा महसूस करता है"
    },
    explanation: {
      en: "Cold breath cools the skin making the hand feel cold.",
      hi: "ठंडी साँस त्वचा को ठंडा करती है जिससे हाथ ठंडा लगता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What causes breath to feel cold?",
      hi: "साँस ठंडी क्यों महसूस होती है?"
    },
    options: [
      { en: "Breath passes through mouth quickly", hi: "साँस मुँह से तेज़ गुजरती है" },
      { en: "Breath is from lungs", hi: "साँस फेफड़ों से आती है" },
      { en: "Breath mixes with cold air outside", hi: "साँस बाहर की ठंडी हवा से मिलती है" },
      { en: "Breath contains cold water", hi: "साँस में ठंडा पानी होता है" }
    ],
    correct: {
      en: "Breath passes through mouth quickly",
      hi: "साँस मुँह से तेज़ गुजरती है"
    },
    explanation: {
      en: "Breath feels cold because air moves quickly and cools down.",
      hi: "साँस ठंडी महसूस होती है क्योंकि हवा तेजी से गुजरती है और ठंडी हो जाती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "How does temperature affect breath?",
      hi: "तापमान साँस को कैसे प्रभावित करता है?"
    },
    options: [
      { en: "Hot temperature makes breath warm", hi: "गर्म तापमान साँस को गर्म बनाता है" },
      { en: "Cold temperature makes breath warm", hi: "ठंडा तापमान साँस को गर्म बनाता है" },
      { en: "Temperature has no effect", hi: "तापमान का कोई प्रभाव नहीं" },
      { en: "Breath always feels the same", hi: "साँस हमेशा समान महसूस होती है" }
    ],
    correct: {
      en: "Hot temperature makes breath warm",
      hi: "गर्म तापमान साँस को गर्म बनाता है"
    },
    explanation: {
      en: "When surrounding temperature is high, breath feels warm.",
      hi: "जब आसपास का तापमान उच्च होता है तो साँस गर्म लगती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the main reason for breath feeling cold in winter?",
      hi: "सर्दियों में साँस ठंडी महसूस होने का मुख्य कारण क्या है?"
    },
    options: [
      { en: "Lungs are cold", hi: "फेफड़े ठंडे होते हैं" },
      { en: "Outside air is cold", hi: "बाहर की हवा ठंडी होती है" },
      { en: "Mouth is cold", hi: "मुँह ठंडा होता है" },
      { en: "Breath has no temperature", hi: "साँस का कोई तापमान नहीं होता" }
    ],
    correct: {
      en: "Outside air is cold",
      hi: "बाहर की हवा ठंडी होती है"
    },
    explanation: {
      en: "Cold outside air cools the breath making it feel cold.",
      hi: "ठंडी बाहर की हवा साँस को ठंडा कर देती है जिससे वह ठंडी लगती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What happens when hot breath meets cold air?",
      hi: "जब गर्म साँस ठंडी हवा से मिलती है तो क्या होता है?"
    },
    options: [
      { en: "Steam forms", hi: "भाप बनती है" },
      { en: "Breath disappears", hi: "साँस गायब हो जाती है" },
      { en: "Breath turns cold immediately", hi: "साँस तुरंत ठंडी हो जाती है" },
      { en: "No change", hi: "कोई बदलाव नहीं" }
    ],
    correct: {
      en: "Steam forms",
      hi: "भाप बनती है"
    },
    explanation: {
      en: "Hot breath meets cold air and forms visible steam or mist.",
      hi: "गरम साँस ठंडी हवा से मिलती है और भाप या धुंध बनाती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why does cold breath feel cooler than the surrounding air?",
      hi: "ठंडी साँस आसपास की हवा से ठंडी क्यों महसूस होती है?"
    },
    options: [
      { en: "Because it moves faster", hi: "क्योंकि यह तेज़ चलती है" },
      { en: "Because it absorbs heat", hi: "क्योंकि यह गर्मी अवशोषित करती है" },
      { en: "Because lungs cool the air", hi: "क्योंकि फेफड़े हवा को ठंडा करते हैं" },
      { en: "Because it loses heat while passing through mouth", hi: "क्योंकि यह मुँह से गुजरते समय गर्मी खो देती है" }
    ],
    correct: {
      en: "Because it loses heat while passing through mouth",
      hi: "क्योंकि यह मुँह से गुजरते समय गर्मी खो देती है"
    },
    explanation: {
      en: "Breath cools down as it passes through the mouth making it feel cold.",
      hi: "साँस मुँह से गुजरते समय ठंडी हो जाती है इसलिए ठंडी लगती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "How does blowing hot breath affect a cold object?",
      hi: "ठंडी वस्तु पर गरम साँस उड़ाने से क्या होता है?"
    },
    options: [
      { en: "Object warms up", hi: "वस्तु गर्म हो जाती है" },
      { en: "Object cools down", hi: "वस्तु ठंडी हो जाती है" },
      { en: "No effect", hi: "कोई प्रभाव नहीं" },
      { en: "Object changes color", hi: "वस्तु का रंग बदल जाता है" }
    ],
    correct: {
      en: "Object warms up",
      hi: "वस्तु गर्म हो जाती है"
    },
    explanation: {
      en: "Hot breath transfers heat to the cold object warming it.",
      hi: "गरम साँस ठंडी वस्तु को गर्म कर देती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why do we see our breath in cold weather?",
      hi: "सर्द मौसम में हमारी साँस क्यों दिखाई देती है?"
    },
    options: [
      { en: "Because breath is hot and condenses", hi: "क्योंकि साँस गर्म होती है और संघनित होती है" },
      { en: "Because breath is cold", hi: "क्योंकि साँस ठंडी होती है" },
      { en: "Because breath has smoke", hi: "क्योंकि साँस में धुआं होता है" },
      { en: "Because breath glows", hi: "क्योंकि साँस चमकती है" }
    ],
    correct: {
      en: "Because breath is hot and condenses",
      hi: "क्योंकि साँस गर्म होती है और संघनित होती है"
    },
    explanation: {
      en: "Hot breath meets cold air, causing water vapor to condense and become visible.",
      hi: "गरम साँस ठंडी हवा से मिलती है, जिससे जलवाष्प संघनित होकर दिखाई देती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What happens to breath temperature when you hold your breath?",
      hi: "जब आप अपनी साँस रोकते हैं तो साँस का तापमान क्या होता है?"
    },
    options: [
      { en: "It stays the same", hi: "यह समान रहता है" },
      { en: "It becomes hotter", hi: "यह गर्म हो जाता है" },
      { en: "It becomes colder", hi: "यह ठंडा हो जाता है" },
      { en: "It disappears", hi: "यह गायब हो जाता है" }
    ],
    correct: {
      en: "It stays the same",
      hi: "यह समान रहता है"
    },
    explanation: {
      en: "Holding breath does not change its temperature.",
      hi: "साँस रोकने से उसका तापमान नहीं बदलता।"
    }
  }
];

export default hotBreathColdBreath;
