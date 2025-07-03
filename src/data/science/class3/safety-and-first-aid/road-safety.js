const roadSafety = [
  {
    id: 1,
    question: {
      en: "What should you do before crossing the road?",
      hi: "सड़क पार करने से पहले आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Look both ways", hi: "दोनों तरफ देखें" },
      { en: "Run fast", hi: "तेज़ दौड़ें" },
      { en: "Close your eyes", hi: "आँखें बंद करें" },
      { en: "Follow others blindly", hi: "दूसरों के पीछे आँख मूँदकर चलें" }
    ],
    correct: {
      en: "Look both ways",
      hi: "दोनों तरफ देखें"
    },
    explanation: {
      en: "We should always look both sides for vehicles before crossing the road.",
      hi: "सड़क पार करने से पहले दोनों तरफ वाहन देखने चाहिए।"
    }
  },
  {
    id: 2,
    question: {
      en: "Where should pedestrians walk?",
      hi: "पैदल चलने वालों को कहाँ चलना चाहिए?"
    },
    options: [
      { en: "On the footpath", hi: "पैदल पथ पर" },
      { en: "On the road", hi: "सड़क पर" },
      { en: "On the divider", hi: "डिवाइडर पर" },
      { en: "In the middle of the road", hi: "सड़क के बीच में" }
    ],
    correct: {
      en: "On the footpath",
      hi: "पैदल पथ पर"
    },
    explanation: {
      en: "Footpaths are made for people to walk safely.",
      hi: "पैदल पथ पैदल चलने वालों के लिए सुरक्षित होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What color means 'Stop' in traffic lights?",
      hi: "ट्रैफिक लाइट में 'रुकें' का संकेत किस रंग से होता है?"
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
      en: "Red light means stop for vehicles and pedestrians.",
      hi: "लाल बत्ती का मतलब है—रुकें।"
    }
  },
  {
    id: 4,
    question: {
      en: "What does a green traffic light mean?",
      hi: "हरा ट्रैफिक लाइट किसे दर्शाता है?"
    },
    options: [
      { en: "Go", hi: "चलिए" },
      { en: "Stop", hi: "रुकें" },
      { en: "Slow", hi: "धीरे चलें" },
      { en: "Turn", hi: "मोड़ें" }
    ],
    correct: {
      en: "Go",
      hi: "चलिए"
    },
    explanation: {
      en: "Green light means you can go.",
      hi: "हरा बत्ती जाने का संकेत देती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What does a yellow traffic light mean?",
      hi: "पीली ट्रैफिक लाइट क्या दर्शाती है?"
    },
    options: [
      { en: "Get ready to stop", hi: "रुकने के लिए तैयार हो जाएं" },
      { en: "Go fast", hi: "तेज़ जाएं" },
      { en: "Sleep", hi: "सो जाएं" },
      { en: "Shout", hi: "चिल्लाएं" }
    ],
    correct: {
      en: "Get ready to stop",
      hi: "रुकने के लिए तैयार हो जाएं"
    },
    explanation: {
      en: "Yellow light means slow down and be ready to stop.",
      hi: "पीली बत्ती का मतलब है धीरे चलें और रुकने के लिए तैयार रहें।"
    }
  },
  {
    id: 6,
    question: {
      en: "Where should we cross the road?",
      hi: "हमें सड़क कहाँ से पार करनी चाहिए?"
    },
    options: [
      { en: "At the zebra crossing", hi: "जेब्रा क्रॉसिंग पर" },
      { en: "From anywhere", hi: "कहीं से भी" },
      { en: "Between parked cars", hi: "खड़ी गाड़ियों के बीच से" },
      { en: "From the corner", hi: "कोने से" }
    ],
    correct: {
      en: "At the zebra crossing",
      hi: "जेब्रा क्रॉसिंग पर"
    },
    explanation: {
      en: "Zebra crossing is the safest place to cross the road.",
      hi: "जेब्रा क्रॉसिंग सड़क पार करने का सबसे सुरक्षित स्थान है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which safety gear should be worn while riding a bicycle?",
      hi: "साइकिल चलाते समय कौन-सा सुरक्षा उपकरण पहनना चाहिए?"
    },
    options: [
      { en: "Helmet", hi: "हेलमेट" },
      { en: "Cap", hi: "टोपी" },
      { en: "Goggles", hi: "धूप के चश्मे" },
      { en: "Shoes", hi: "जूते" }
    ],
    correct: {
      en: "Helmet",
      hi: "हेलमेट"
    },
    explanation: {
      en: "A helmet protects our head during accidents.",
      hi: "हेलमेट दुर्घटना में हमारे सिर की रक्षा करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should you not do while walking on the road?",
      hi: "सड़क पर चलते समय आपको क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Use mobile phone", hi: "मोबाइल फोन का उपयोग करें" },
      { en: "Walk carefully", hi: "सावधानी से चलें" },
      { en: "Use footpath", hi: "पैदल पथ का उपयोग करें" },
      { en: "Follow signals", hi: "संकेतों का पालन करें" }
    ],
    correct: {
      en: "Use mobile phone",
      hi: "मोबाइल फोन का उपयोग करें"
    },
    explanation: {
      en: "Using phones while walking is unsafe and distracts attention.",
      hi: "चलते समय मोबाइल का उपयोग ध्यान भटका सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What helps to control traffic on the road?",
      hi: "सड़क पर ट्रैफिक को नियंत्रित करने में क्या मदद करता है?"
    },
    options: [
      { en: "Traffic lights", hi: "ट्रैफिक लाइट्स" },
      { en: "Street food", hi: "सड़क का खाना" },
      { en: "Shops", hi: "दुकानें" },
      { en: "Trees", hi: "पेड़" }
    ],
    correct: {
      en: "Traffic lights",
      hi: "ट्रैफिक लाइट्स"
    },
    explanation: {
      en: "Traffic lights manage movement of vehicles and people.",
      hi: "ट्रैफिक लाइट्स वाहनों और लोगों की गति को नियंत्रित करती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why should we follow road safety rules?",
      hi: "हमें सड़क सुरक्षा नियमों का पालन क्यों करना चाहिए?"
    },
    options: [
      { en: "To stay safe", hi: "सुरक्षित रहने के लिए" },
      { en: "To get chocolates", hi: "चॉकलेट पाने के लिए" },
      { en: "To play on roads", hi: "सड़कों पर खेलने के लिए" },
      { en: "To break rules", hi: "नियम तोड़ने के लिए" }
    ],
    correct: {
      en: "To stay safe",
      hi: "सुरक्षित रहने के लिए"
    },
    explanation: {
      en: "Following safety rules helps avoid accidents.",
      hi: "सुरक्षा नियमों का पालन दुर्घटनाओं से बचाता है।"
    }
  }
];

export default roadSafety;
