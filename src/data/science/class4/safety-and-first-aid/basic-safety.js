const basicSafety = [
  {
    id: 1,
    question: {
      en: "What should you do before crossing a road?",
      hi: "सड़क पार करने से पहले आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Run quickly", hi: "तेज़ दौड़ें" },
      { en: "Look both ways", hi: "दोनों दिशाओं में देखें" },
      { en: "Close your eyes", hi: "आँखें बंद करें" },
      { en: "Talk on the phone", hi: "फोन पर बात करें" }
    ],
    correct: {
      en: "Look both ways",
      hi: "दोनों दिशाओं में देखें"
    },
    explanation: {
      en: "Looking both ways ensures no vehicles are coming.",
      hi: "दोनों दिशाओं में देखने से सुनिश्चित होता है कि कोई वाहन नहीं आ रहा।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which number should you call in case of an emergency in India?",
      hi: "भारत में आपात स्थिति में कौन सा नंबर डायल करना चाहिए?"
    },
    options: [
      { en: "911", hi: "911" },
      { en: "100", hi: "100" },
      { en: "1010", hi: "1010" },
      { en: "999", hi: "999" }
    ],
    correct: {
      en: "100",
      hi: "100"
    },
    explanation: {
      en: "In India, 100 is the emergency police number.",
      hi: "भारत में 100 पुलिस आपातकालीन नंबर है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should you wear while riding a bicycle?",
      hi: "साइकिल चलाते समय आपको क्या पहनना चाहिए?"
    },
    options: [
      { en: "Helmet", hi: "हेलमेट" },
      { en: "Sunglasses", hi: "धूप का चश्मा" },
      { en: "Cap", hi: "टोपी" },
      { en: "Raincoat", hi: "रेनकोट" }
    ],
    correct: {
      en: "Helmet",
      hi: "हेलमेट"
    },
    explanation: {
      en: "Wearing a helmet protects your head in case of an accident.",
      hi: "हेलमेट पहनने से दुर्घटना में सिर की रक्षा होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the safest place to play?",
      hi: "खेलने के लिए सबसे सुरक्षित स्थान कौन सा है?"
    },
    options: [
      { en: "Middle of the road", hi: "सड़क के बीच में" },
      { en: "Playground", hi: "खेल का मैदान" },
      { en: "Parking lot", hi: "पार्किंग क्षेत्र" },
      { en: "Terrace", hi: "छत" }
    ],
    correct: {
      en: "Playground",
      hi: "खेल का मैदान"
    },
    explanation: {
      en: "A playground is designed for safe playing.",
      hi: "खेल का मैदान सुरक्षित खेलने के लिए बनाया गया है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What should you avoid while using sharp objects like scissors?",
      hi: "कैंची जैसे तेज़ वस्तुओं का उपयोग करते समय आपको क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Cut slowly", hi: "धीरे-धीरे काटना" },
      { en: "Hold properly", hi: "सही से पकड़ना" },
      { en: "Run while holding", hi: "पकड़कर दौड़ना" },
      { en: "Keep it away from face", hi: "चेहरे से दूर रखना" }
    ],
    correct: {
      en: "Run while holding",
      hi: "पकड़कर दौड़ना"
    },
    explanation: {
      en: "Running with sharp objects can cause injuries.",
      hi: "तेज़ वस्तुओं को पकड़कर दौड़ना चोट का कारण बन सकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why should we not touch electrical switches with wet hands?",
      hi: "हमें गीले हाथों से बिजली के स्विच क्यों नहीं छूने चाहिए?"
    },
    options: [
      { en: "It looks bad", hi: "यह खराब दिखता है" },
      { en: "It gives shocks", hi: "इससे झटका लग सकता है" },
      { en: "It is dirty", hi: "यह गंदा होता है" },
      { en: "It doesn’t work", hi: "यह काम नहीं करता" }
    ],
    correct: {
      en: "It gives shocks",
      hi: "इससे झटका लग सकता है"
    },
    explanation: {
      en: "Water conducts electricity and can cause shocks.",
      hi: "पानी बिजली का प्रवाह करता है और झटका लग सकता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these is a road safety rule?",
      hi: "इनमें से कौन एक सड़क सुरक्षा नियम है?"
    },
    options: [
      { en: "Jump red light", hi: "लाल बत्ती कूदना" },
      { en: "Follow traffic signals", hi: "ट्रैफिक संकेतों का पालन करना" },
      { en: "Run between cars", hi: "कारों के बीच दौड़ना" },
      { en: "Ignore zebra crossing", hi: "ज़ेब्रा क्रॉसिंग की अनदेखी करना" }
    ],
    correct: {
      en: "Follow traffic signals",
      hi: "ट्रैफिक संकेतों का पालन करना"
    },
    explanation: {
      en: "Following traffic signals prevents accidents.",
      hi: "ट्रैफिक संकेतों का पालन करने से दुर्घटनाओं से बचा जा सकता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should you do if you find a stranger trying to talk to you alone?",
      hi: "अगर कोई अनजान व्यक्ति अकेले में आपसे बात करने की कोशिश करे तो आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Talk to them", hi: "बात करें" },
      { en: "Run and inform an adult", hi: "भागें और किसी बड़े को बताएं" },
      { en: "Accept gifts", hi: "तोहफे स्वीकार करें" },
      { en: "Follow them", hi: "उनके साथ जाएं" }
    ],
    correct: {
      en: "Run and inform an adult",
      hi: "भागें और किसी बड़े को बताएं"
    },
    explanation: {
      en: "Informing an adult is the safest action.",
      hi: "किसी बड़े को बताना सबसे सुरक्षित कदम होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should you do in case of a fire?",
      hi: "आग लगने की स्थिति में आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Hide under bed", hi: "बिस्तर के नीचे छिपें" },
      { en: "Scream and run randomly", hi: "चिल्लाएं और इधर-उधर दौड़ें" },
      { en: "Use water or call for help", hi: "पानी का उपयोग करें या मदद बुलाएं" },
      { en: "Touch hot items", hi: "गर्म वस्तुओं को छुएं" }
    ],
    correct: {
      en: "Use water or call for help",
      hi: "पानी का उपयोग करें या मदद बुलाएं"
    },
    explanation: {
      en: "Try to extinguish safely or call for adult/fire help.",
      hi: "सुरक्षित रूप से बुझाने का प्रयास करें या किसी बड़े/फायर सेवा को बुलाएं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Where should you keep sharp and dangerous items at home?",
      hi: "घर पर तेज और खतरनाक वस्तुएं कहां रखनी चाहिए?"
    },
    options: [
      { en: "On the floor", hi: "फ़र्श पर" },
      { en: "In open areas", hi: "खुले स्थानों पर" },
      { en: "In safe and locked places", hi: "सुरक्षित और बंद जगहों पर" },
      { en: "Near children", hi: "बच्चों के पास" }
    ],
    correct: {
      en: "In safe and locked places",
      hi: "सुरक्षित और बंद जगहों पर"
    },
    explanation: {
      en: "Sharp items should be kept out of children's reach.",
      hi: "तेज़ वस्तुएं बच्चों की पहुँच से दूर रखनी चाहिए।"
    }
  }
];

export default basicSafety;
