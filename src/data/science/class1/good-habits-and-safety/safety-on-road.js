const questions = [
  {
    id: 1,
    question: {
      en: "What color in a traffic light means 'Stop'?",
      hi: "ट्रैफिक लाइट में किस रंग का मतलब 'रुको' होता है?"
    },
    options: [
      { en: "Green", hi: "हरा" },
      { en: "Yellow", hi: "पीला" },
      { en: "Red", hi: "लाल" },
      { en: "Blue", hi: "नीला" }
    ],
    correct: {
      en: "Red",
      hi: "लाल"
    },
    explanation: {
      en: "Red light means you must stop your vehicle.",
      hi: "लाल बत्ती का मतलब है कि आपको रुकना चाहिए।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should you do before crossing a road?",
      hi: "सड़क पार करने से पहले आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Look left and right", hi: "बाएं और दाएं देखें" },
      { en: "Run quickly", hi: "जल्दी दौड़ें" },
      { en: "Close your eyes", hi: "आँखें बंद करें" },
      { en: "Shout loudly", hi: "जोर से चिल्लाएं" }
    ],
    correct: {
      en: "Look left and right",
      hi: "बाएं और दाएं देखें"
    },
    explanation: {
      en: "Always check both sides of the road before crossing.",
      hi: "सड़क पार करने से पहले दोनों ओर देखना चाहिए।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which place is safe to cross a road?",
      hi: "सड़क पार करने के लिए सबसे सुरक्षित स्थान कौन-सा है?"
    },
    options: [
      { en: "Middle of the road", hi: "सड़क के बीच से" },
      { en: "Zebra crossing", hi: "ज़ेब्रा क्रॉसिंग" },
      { en: "Behind a car", hi: "गाड़ी के पीछे" },
      { en: "Sharp turn", hi: "मुड़ाव से" }
    ],
    correct: {
      en: "Zebra crossing",
      hi: "ज़ेब्रा क्रॉसिंग"
    },
    explanation: {
      en: "Zebra crossings are made for pedestrians to cross safely.",
      hi: "ज़ेब्रा क्रॉसिंग पैदल यात्रियों की सुरक्षा के लिए बनाई जाती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What does the green light mean?",
      hi: "हरा सिग्नल किस बात को दर्शाता है?"
    },
    options: [
      { en: "Get ready", hi: "तैयार हो जाओ" },
      { en: "Stop", hi: "रुको" },
      { en: "Go", hi: "जाओ" },
      { en: "Turn off engine", hi: "इंजन बंद करो" }
    ],
    correct: {
      en: "Go",
      hi: "जाओ"
    },
    explanation: {
      en: "Green signal means it's safe to go.",
      hi: "हरा संकेत चलने का इशारा होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why should you not play on the road?",
      hi: "आपको सड़क पर क्यों नहीं खेलना चाहिए?"
    },
    options: [
      { en: "It’s fun", hi: "यह मजेदार है" },
      { en: "Cars can hit you", hi: "गाड़ियाँ टकरा सकती हैं" },
      { en: "Friends call you", hi: "दोस्त बुलाते हैं" },
      { en: "More space there", hi: "वहाँ ज्यादा जगह होती है" }
    ],
    correct: {
      en: "Cars can hit you",
      hi: "गाड़ियाँ टकरा सकती हैं"
    },
    explanation: {
      en: "Roads are for vehicles and not safe for playing.",
      hi: "सड़कें गाड़ियों के लिए होती हैं, खेलना वहाँ खतरनाक होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What safety gear should you wear when riding a bicycle?",
      hi: "साइकिल चलाते समय कौन-सा सुरक्षा उपकरण पहनना चाहिए?"
    },
    options: [
      { en: "Cap", hi: "टोपी" },
      { en: "Helmet", hi: "हेलमेट" },
      { en: "Shirt", hi: "कमीज़" },
      { en: "Scarf", hi: "स्कार्फ़" }
    ],
    correct: {
      en: "Helmet",
      hi: "हेलमेट"
    },
    explanation: {
      en: "Wearing a helmet protects your head while riding.",
      hi: "हेलमेट पहनने से सिर की सुरक्षा होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What color in traffic light means 'Get ready'?",
      hi: "ट्रैफिक लाइट में 'तैयार हो जाओ' का संकेत किस रंग से मिलता है?"
    },
    options: [
      { en: "Red", hi: "लाल" },
      { en: "Green", hi: "हरा" },
      { en: "Yellow", hi: "पीला" },
      { en: "Blue", hi: "नीला" }
    ],
    correct: {
      en: "Yellow",
      hi: "पीला"
    },
    explanation: {
      en: "Yellow light means be ready to stop or go.",
      hi: "पीला संकेत रुकने या चलने के लिए तैयार रहने का होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "When should you use a footpath?",
      hi: "आपको फुटपाथ का उपयोग कब करना चाहिए?"
    },
    options: [
      { en: "When walking near the road", hi: "सड़क के पास चलते समय" },
      { en: "When riding a bike", hi: "बाइक चलाते समय" },
      { en: "When driving a car", hi: "कार चलाते समय" },
      { en: "When playing", hi: "खेलते समय" }
    ],
    correct: {
      en: "When walking near the road",
      hi: "सड़क के पास चलते समय"
    },
    explanation: {
      en: "Footpaths are safe areas for walking beside roads.",
      hi: "फुटपाथ पैदल चलने वालों के लिए सुरक्षित जगह होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Should you cross the road while using a phone?",
      hi: "क्या आपको फोन का इस्तेमाल करते हुए सड़क पार करनी चाहिए?"
    },
    options: [
      { en: "Yes, it's fine", hi: "हाँ, यह ठीक है" },
      { en: "No, it is unsafe", hi: "नहीं, यह असुरक्षित है" },
      { en: "Only in the evening", hi: "केवल शाम को" },
      { en: "If there's no traffic", hi: "अगर ट्रैफिक न हो" }
    ],
    correct: {
      en: "No, it is unsafe",
      hi: "नहीं, यह असुरक्षित है"
    },
    explanation: {
      en: "Using a phone while crossing distracts you and can be dangerous.",
      hi: "फोन का उपयोग करते हुए सड़क पार करना ध्यान भटका सकता है और खतरनाक होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should you do if the road is crowded?",
      hi: "अगर सड़क भीड़भाड़ वाली हो तो आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Walk carefully and slowly", hi: "सावधानी से और धीरे चलें" },
      { en: "Push others", hi: "दूसरों को धक्का दें" },
      { en: "Run through the crowd", hi: "भीड़ में दौड़ लगाएं" },
      { en: "Shout loudly", hi: "जोर से चिल्लाएं" }
    ],
    correct: {
      en: "Walk carefully and slowly",
      hi: "सावधानी से और धीरे चलें"
    },
    explanation: {
      en: "Being careful in a crowd prevents accidents and confusion.",
      hi: "भीड़ में सावधानी से चलना दुर्घटना से बचाता है।"
    }
  }
];

export default questions;
