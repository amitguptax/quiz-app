const roadSafety = [
  {
    id: 1,
    question: {
      en: "What should you do before crossing the road?",
      hi: "सड़क पार करने से पहले आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Look both ways", hi: "दोनो ओर देखें" },
      { en: "Run quickly", hi: "तेज़ दौड़ें" },
      { en: "Close your eyes", hi: "आँखें बंद करें" },
      { en: "Talk on phone", hi: "फोन पर बात करें" }
    ],
    correct: {
      en: "Look both ways",
      hi: "दोनो ओर देखें"
    },
    explanation: {
      en: "We should look both ways to check for vehicles before crossing.",
      hi: "हमें वाहन देखने के लिए दोनों ओर देखना चाहिए।"
    }
  },
  {
    id: 2,
    question: {
      en: "Where should you cross the road?",
      hi: "आपको सड़क कहाँ पार करनी चाहिए?"
    },
    options: [
      { en: "At the zebra crossing", hi: "ज़ेब्रा क्रॉसिंग पर" },
      { en: "Anywhere", hi: "कहीं भी" },
      { en: "Behind a vehicle", hi: "वाहन के पीछे" },
      { en: "At a turn", hi: "मोड़ पर" }
    ],
    correct: {
      en: "At the zebra crossing",
      hi: "ज़ेब्रा क्रॉसिंग पर"
    },
    explanation: {
      en: "Zebra crossings are safe places to cross the road.",
      hi: "ज़ेब्रा क्रॉसिंग सड़क पार करने के लिए सुरक्षित जगह होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What color signal means 'stop'?",
      hi: "कौन सा सिग्नल रंग 'रुको' का मतलब होता है?"
    },
    options: [
      { en: "Red", hi: "लाल" },
      { en: "Green", hi: "हरा" },
      { en: "Yellow", hi: "पीला" },
      { en: "Blue", hi: "नीला" }
    ],
    correct: {
      en: "Red",
      hi: "लाल"
    },
    explanation: {
      en: "Red signal tells vehicles to stop.",
      hi: "लाल सिग्नल वाहनों को रुकने का संकेत देता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why should you not play on the road?",
      hi: "आपको सड़क पर क्यों नहीं खेलना चाहिए?"
    },
    options: [
      { en: "It's dangerous", hi: "यह खतरनाक है" },
      { en: "It's fun", hi: "यह मज़ेदार है" },
      { en: "It's clean", hi: "यह साफ है" },
      { en: "Friends are there", hi: "वहाँ दोस्त होते हैं" }
    ],
    correct: {
      en: "It's dangerous",
      hi: "यह खतरनाक है"
    },
    explanation: {
      en: "Roads are for vehicles, not for playing.",
      hi: "सड़कें खेलने के लिए नहीं, वाहनों के लिए होती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which side should we walk on the road?",
      hi: "हमें सड़क पर किस ओर चलना चाहिए?"
    },
    options: [
      { en: "On the footpath", hi: "पैदल पथ पर" },
      { en: "In the middle", hi: "बीच में" },
      { en: "On the right side", hi: "दाईं ओर" },
      { en: "With traffic", hi: "ट्रैफ़िक के साथ" }
    ],
    correct: {
      en: "On the footpath",
      hi: "पैदल पथ पर"
    },
    explanation: {
      en: "Footpaths are made for pedestrians to walk safely.",
      hi: "पैदल पथ पैदल चलने वालों के लिए सुरक्षित होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should you wear while riding a bicycle?",
      hi: "साइकिल चलाते समय आपको क्या पहनना चाहिए?"
    },
    options: [
      { en: "Helmet", hi: "हेलमेट" },
      { en: "Cap", hi: "टोपी" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Scarf", hi: "स्कार्फ़" }
    ],
    correct: {
      en: "Helmet",
      hi: "हेलमेट"
    },
    explanation: {
      en: "Helmet protects the head in case of accidents.",
      hi: "दुर्घटना की स्थिति में हेलमेट सिर की सुरक्षा करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "When should you use the pedestrian crossing?",
      hi: "आपको पैदल यात्री क्रॉसिंग का उपयोग कब करना चाहिए?"
    },
    options: [
      { en: "While crossing roads", hi: "सड़क पार करते समय" },
      { en: "While running", hi: "दौड़ते समय" },
      { en: "While cycling", hi: "साइकिल चलाते समय" },
      { en: "While waiting", hi: "इंतजार करते समय" }
    ],
    correct: {
      en: "While crossing roads",
      hi: "सड़क पार करते समय"
    },
    explanation: {
      en: "Pedestrian crossings are meant for safely crossing roads.",
      hi: "पैदल यात्री क्रॉसिंग सड़क पार करने के लिए होती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should you do when the signal is green?",
      hi: "जब सिग्नल हरा हो तब आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Cross the road", hi: "सड़क पार करें" },
      { en: "Stop", hi: "रुकें" },
      { en: "Close eyes", hi: "आँखें बंद करें" },
      { en: "Run fast", hi: "तेज़ दौड़ें" }
    ],
    correct: {
      en: "Cross the road",
      hi: "सड़क पार करें"
    },
    explanation: {
      en: "Green signal means it is safe to cross.",
      hi: "हरा सिग्नल सुरक्षित पार करने का संकेत देता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the role of traffic police?",
      hi: "ट्रैफिक पुलिस की भूमिका क्या होती है?"
    },
    options: [
      { en: "To control traffic", hi: "यातायात को नियंत्रित करना" },
      { en: "To play with kids", hi: "बच्चों के साथ खेलना" },
      { en: "To teach", hi: "पढ़ाना" },
      { en: "To drive cars", hi: "गाड़ी चलाना" }
    ],
    correct: {
      en: "To control traffic",
      hi: "यातायात को नियंत्रित करना"
    },
    explanation: {
      en: "Traffic police manage road safety and traffic flow.",
      hi: "ट्रैफिक पुलिस सड़क सुरक्षा और यातायात व्यवस्था संभालती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Is it safe to stick hands out of a moving vehicle?",
      hi: "क्या चलती गाड़ी से हाथ बाहर निकालना सुरक्षित है?"
    },
    options: [
      { en: "No", hi: "नहीं" },
      { en: "Yes", hi: "हाँ" },
      { en: "Sometimes", hi: "कभी-कभी" },
      { en: "If friends are outside", hi: "अगर दोस्त बाहर हों" }
    ],
    correct: {
      en: "No",
      hi: "नहीं"
    },
    explanation: {
      en: "Putting hands outside a vehicle is risky and can hurt you.",
      hi: "गाड़ी से हाथ बाहर निकालना खतरनाक होता है और चोट लग सकती है।"
    }
  }
];

export default roadSafety;
