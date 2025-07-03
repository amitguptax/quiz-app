const homeSafety = [
  {
    id: 1,
    question: {
      en: "What should you do with sharp objects at home?",
      hi: "घर पर तेज चीजों के साथ क्या करना चाहिए?"
    },
    options: [
      { en: "Use them carefully", hi: "सावधानी से उपयोग करें" },
      { en: "Play with them", hi: "उनसे खेलें" },
      { en: "Leave them on the floor", hi: "उन्हें ज़मीन पर छोड़ दें" },
      { en: "Throw them", hi: "उन्हें फेंक दें" }
    ],
    correct: {
      en: "Use them carefully",
      hi: "सावधानी से उपयोग करें"
    },
    explanation: {
      en: "Sharp objects can hurt, so we must use them carefully.",
      hi: "तेज चीजें चोट पहुँचा सकती हैं, इसलिए सावधानी से उपयोग करना चाहिए।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should you do if you see water spilled on the floor?",
      hi: "अगर ज़मीन पर पानी गिरा हो तो आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Clean it immediately", hi: "तुरंत साफ करें" },
      { en: "Call friends to play", hi: "दोस्तों को खेलने के लिए बुलाएं" },
      { en: "Ignore it", hi: "अनदेखा करें" },
      { en: "Jump over it", hi: "उस पर कूदें" }
    ],
    correct: {
      en: "Clean it immediately",
      hi: "तुरंत साफ करें"
    },
    explanation: {
      en: "Spilled water can cause slipping. It should be cleaned quickly.",
      hi: "गिरा हुआ पानी फिसलन पैदा करता है, उसे तुरंत साफ करना चाहिए।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should you avoid touching at home?",
      hi: "घर पर किन चीजों को छूने से बचना चाहिए?"
    },
    options: [
      { en: "Electric switches", hi: "बिजली के स्विच" },
      { en: "Books", hi: "किताबें" },
      { en: "Toys", hi: "खिलौने" },
      { en: "Pillows", hi: "तकिए" }
    ],
    correct: {
      en: "Electric switches",
      hi: "बिजली के स्विच"
    },
    explanation: {
      en: "Electric switches can give a shock if touched carelessly.",
      hi: "बिजली के स्विच लापरवाही से छूने पर झटका दे सकते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why should we not play near the gas stove?",
      hi: "हमें गैस स्टोव के पास क्यों नहीं खेलना चाहिए?"
    },
    options: [
      { en: "It can cause fire", hi: "इससे आग लग सकती है" },
      { en: "It smells good", hi: "इसकी खुशबू अच्छी होती है" },
      { en: "It is colorful", hi: "यह रंगीन होता है" },
      { en: "It is fun", hi: "यह मज़ेदार होता है" }
    ],
    correct: {
      en: "It can cause fire",
      hi: "इससे आग लग सकती है"
    },
    explanation: {
      en: "Playing near fire sources like gas stove is dangerous.",
      hi: "गैस स्टोव जैसी चीजों के पास खेलना खतरनाक हो सकता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What should you do if you get hurt at home?",
      hi: "अगर आप घर पर चोटिल हो जाएं तो क्या करना चाहिए?"
    },
    options: [
      { en: "Tell an elder", hi: "बड़ों को बताएं" },
      { en: "Cry alone", hi: "अकेले रोएं" },
      { en: "Hide it", hi: "चुपाएं" },
      { en: "Do nothing", hi: "कुछ न करें" }
    ],
    correct: {
      en: "Tell an elder",
      hi: "बड़ों को बताएं"
    },
    explanation: {
      en: "Elders can help with first aid or take to a doctor.",
      hi: "बड़े प्राथमिक उपचार कर सकते हैं या डॉक्टर के पास ले जा सकते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Where should medicines be kept?",
      hi: "दवाइयाँ कहाँ रखनी चाहिए?"
    },
    options: [
      { en: "In a safe place", hi: "सुरक्षित स्थान पर" },
      { en: "In toy box", hi: "खिलौनों के डिब्बे में" },
      { en: "On the bed", hi: "बिस्तर पर" },
      { en: "On the dining table", hi: "डाइनिंग टेबल पर" }
    ],
    correct: {
      en: "In a safe place",
      hi: "सुरक्षित स्थान पर"
    },
    explanation: {
      en: "Medicines should be kept out of children's reach.",
      hi: "दवाइयों को बच्चों की पहुँच से दूर रखना चाहिए।"
    }
  },
  {
    id: 7,
    question: {
      en: "Should you run on stairs at home?",
      hi: "क्या घर की सीढ़ियों पर दौड़ना चाहिए?"
    },
    options: [
      { en: "No, it's risky", hi: "नहीं, यह खतरनाक है" },
      { en: "Yes, it's fun", hi: "हाँ, यह मज़ेदार है" },
      { en: "Sometimes", hi: "कभी-कभी" },
      { en: "When elders are away", hi: "जब बड़े न हों" }
    ],
    correct: {
      en: "No, it's risky",
      hi: "नहीं, यह खतरनाक है"
    },
    explanation: {
      en: "Running on stairs may cause falls and injuries.",
      hi: "सीढ़ियों पर दौड़ना गिरने और चोट का कारण बन सकता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should you not do with electrical wires?",
      hi: "बिजली के तारों के साथ क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Touch them", hi: "उन्हें छूना" },
      { en: "Look at them", hi: "उन्हें देखना" },
      { en: "Ask an adult to fix them", hi: "बड़ों से ठीक करवाना" },
      { en: "Call for help", hi: "मदद के लिए बुलाना" }
    ],
    correct: {
      en: "Touch them",
      hi: "उन्हें छूना"
    },
    explanation: {
      en: "Touching live wires can give electric shock.",
      hi: "बिजली के तारों को छूने से झटका लग सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why should we not play with matchsticks?",
      hi: "हमें माचिस की तीलियों से क्यों नहीं खेलना चाहिए?"
    },
    options: [
      { en: "They can cause fire", hi: "वे आग लगा सकती हैं" },
      { en: "They are toys", hi: "वे खिलौने हैं" },
      { en: "They are soft", hi: "वे मुलायम हैं" },
      { en: "They are colorful", hi: "वे रंगीन होती हैं" }
    ],
    correct: {
      en: "They can cause fire",
      hi: "वे आग लगा सकती हैं"
    },
    explanation: {
      en: "Matchsticks are dangerous and can cause accidents.",
      hi: "माचिस की तीलियाँ खतरनाक होती हैं और दुर्घटनाएं कर सकती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should you do before using a gas stove?",
      hi: "गैस स्टोव का उपयोग करने से पहले क्या करना चाहिए?"
    },
    options: [
      { en: "Ask an adult", hi: "किसी बड़े से पूछें" },
      { en: "Turn it on directly", hi: "सीधे चालू करें" },
      { en: "Put hand over it", hi: "हाथ उस पर रखें" },
      { en: "Light match first", hi: "पहले माचिस जलाएं" }
    ],
    correct: {
      en: "Ask an adult",
      hi: "किसी बड़े से पूछें"
    },
    explanation: {
      en: "Always use kitchen equipment under adult supervision.",
      hi: "रसोई के उपकरणों का उपयोग हमेशा बड़ों की निगरानी में करें।"
    }
  }
];

export default homeSafety;
