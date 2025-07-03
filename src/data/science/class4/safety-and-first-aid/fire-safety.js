const fireAndElectricitySafety = [
  {
    id: 1,
    question: {
      en: "What should you do if there is a fire at home?",
      hi: "अगर घर में आग लग जाए तो आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Hide under the bed", hi: "बिस्तर के नीचे छिप जाएं" },
      { en: "Run out safely and call for help", hi: "सुरक्षित बाहर निकलें और मदद के लिए बुलाएं" },
      { en: "Throw water on everything", hi: "सब पर पानी फेंकें" },
      { en: "Touch the fire to check", hi: "आग को छूकर जांचें" }
    ],
    correct: {
      en: "Run out safely and call for help",
      hi: "सुरक्षित बाहर निकलें और मदद के लिए बुलाएं"
    },
    explanation: {
      en: "Evacuating safely and alerting emergency services is the priority.",
      hi: "सुरक्षित बाहर निकलना और आपातकालीन सेवा को बुलाना सबसे जरूरी है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which number should you call in India to report a fire?",
      hi: "भारत में आग लगने की सूचना देने के लिए कौन सा नंबर डायल करें?"
    },
    options: [
      { en: "100", hi: "100" },
      { en: "101", hi: "101" },
      { en: "102", hi: "102" },
      { en: "108", hi: "108" }
    ],
    correct: {
      en: "101",
      hi: "101"
    },
    explanation: {
      en: "101 is the emergency number for the fire department in India.",
      hi: "101 भारत में अग्निशमन सेवा का आपातकालीन नंबर है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should never be used on an electric fire?",
      hi: "बिजली की आग पर कभी क्या इस्तेमाल नहीं करना चाहिए?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Sand", hi: "रेत" },
      { en: "Fire extinguisher", hi: "अग्निशामक यंत्र" },
      { en: "Blanket", hi: "कंबल" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "Water conducts electricity and may cause electric shock.",
      hi: "पानी बिजली का प्रवाह करता है और झटका लग सकता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these can help stop a small fire?",
      hi: "इनमें से क्या छोटी आग को बुझाने में मदद कर सकता है?"
    },
    options: [
      { en: "Paper", hi: "कागज" },
      { en: "Kerosene", hi: "मिट्टी का तेल" },
      { en: "Sand", hi: "रेत" },
      { en: "Petrol", hi: "पेट्रोल" }
    ],
    correct: {
      en: "Sand",
      hi: "रेत"
    },
    explanation: {
      en: "Sand can cover and suffocate small fires by cutting off oxygen.",
      hi: "रेत आग को ढककर ऑक्सीजन से दूर करके बुझा सकती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why should we not overload electrical sockets?",
      hi: "हमें बिजली के सॉकेट को अधिक लोड क्यों नहीं करना चाहिए?"
    },
    options: [
      { en: "It looks messy", hi: "यह गन्दा दिखता है" },
      { en: "It saves power", hi: "यह बिजली बचाता है" },
      { en: "It may cause fire", hi: "इससे आग लग सकती है" },
      { en: "It makes the room warm", hi: "इससे कमरा गर्म होता है" }
    ],
    correct: {
      en: "It may cause fire",
      hi: "इससे आग लग सकती है"
    },
    explanation: {
      en: "Overloading sockets can overheat and cause short circuits or fire.",
      hi: "सॉकेट को ज़्यादा लोड करने से शॉर्ट सर्किट और आग लग सकती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should you do if an electrical wire is damaged?",
      hi: "अगर कोई विद्युत तार क्षतिग्रस्त हो जाए तो आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Touch it to check", hi: "जांचने के लिए छुएं" },
      { en: "Use it as it is", hi: "जैसा है वैसा इस्तेमाल करें" },
      { en: "Cover with cloth", hi: "कपड़े से ढक दें" },
      { en: "Stop using and inform an adult", hi: "इस्तेमाल बंद करें और किसी बड़े को बताएं" }
    ],
    correct: {
      en: "Stop using and inform an adult",
      hi: "इस्तेमाल बंद करें और किसी बड़े को बताएं"
    },
    explanation: {
      en: "Using damaged wires is dangerous; report it immediately.",
      hi: "क्षतिग्रस्त तार खतरनाक होते हैं; तुरंत किसी को सूचित करें।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is a fire safety rule?",
      hi: "निम्न में से कौन सा आग से सुरक्षा का नियम है?"
    },
    options: [
      { en: "Play with matchsticks", hi: "माचिस से खेलें" },
      { en: "Keep flammable items near gas", hi: "ज्वलनशील वस्तुएं गैस के पास रखें" },
      { en: "Keep emergency numbers handy", hi: "आपातकालीन नंबर पास में रखें" },
      { en: "Use faulty electric wires", hi: "खराब तारों का उपयोग करें" }
    ],
    correct: {
      en: "Keep emergency numbers handy",
      hi: "आपातकालीन नंबर पास में रखें"
    },
    explanation: {
      en: "Emergency numbers help get quick assistance in fire cases.",
      hi: "आपातकालीन नंबर से जल्दी मदद मिलती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should you do before leaving the kitchen?",
      hi: "रसोई छोड़ने से पहले आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Leave gas on", hi: "गैस चालू छोड़ दें" },
      { en: "Keep food on stove", hi: "भोजन स्टोव पर रखें" },
      { en: "Switch off the gas", hi: "गैस बंद करें" },
      { en: "Forget about it", hi: "उसे भूल जाएं" }
    ],
    correct: {
      en: "Switch off the gas",
      hi: "गैस बंद करें"
    },
    explanation: {
      en: "Turning off the gas prevents fire hazards.",
      hi: "गैस बंद करने से आग लगने की संभावना कम होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which is safer to use in wet hands?",
      hi: "गीले हाथों से किसका उपयोग करना सुरक्षित है?"
    },
    options: [
      { en: "Electric switch", hi: "बिजली का स्विच" },
      { en: "Battery-powered torch", hi: "बैटरी से चलने वाली टॉर्च" },
      { en: "Iron", hi: "इस्त्री" },
      { en: "Microwave", hi: "माइक्रोवेव" }
    ],
    correct: {
      en: "Battery-powered torch",
      hi: "बैटरी से चलने वाली टॉर्च"
    },
    explanation: {
      en: "Battery devices are safer than mains electricity when wet.",
      hi: "गीले हाथों से बैटरी उपकरण ज़्यादा सुरक्षित होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should you do if a fire starts in school?",
      hi: "अगर स्कूल में आग लग जाए तो क्या करना चाहिए?"
    },
    options: [
      { en: "Panic and scream", hi: "घबरा जाएं और चिल्लाएं" },
      { en: "Run here and there", hi: "इधर-उधर दौड़ें" },
      { en: "Follow the teacher and fire drill plan", hi: "शिक्षक और फायर ड्रिल योजना का पालन करें" },
      { en: "Hide in a cupboard", hi: "अलमारी में छिप जाएं" }
    ],
    correct: {
      en: "Follow the teacher and fire drill plan",
      hi: "शिक्षक और फायर ड्रिल योजना का पालन करें"
    },
    explanation: {
      en: "Following a practiced drill ensures orderly and safe evacuation.",
      hi: "फायर ड्रिल का पालन करने से सुरक्षित निकासी होती है।"
    }
  }
];

export default fireAndElectricitySafety;
