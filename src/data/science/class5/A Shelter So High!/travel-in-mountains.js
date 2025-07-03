const travelInMountains = [
  {
    id: 1,
    question: {
      en: "Which mode of transport is most commonly used in hilly areas?",
      hi: "पहाड़ी क्षेत्रों में सबसे आम रूप से कौन सा परिवहन उपयोग किया जाता है?"
    },
    options: [
      { en: "Bus", hi: "बस" },
      { en: "Jeep", hi: "जीप" },
      { en: "Train", hi: "रेलगाड़ी" },
      { en: "Boat", hi: "नाव" }
    ],
    correct: {
      en: "Jeep",
      hi: "जीप"
    },
    explanation: {
      en: "Jeeps are suitable for rough and steep roads in the mountains.",
      hi: "जीप पहाड़ों की खड़ी और खराब सड़कों के लिए उपयुक्त होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Why are roads in mountainous areas often narrow and winding?",
      hi: "पहाड़ी क्षेत्रों में सड़कें अक्सर संकरी और घुमावदार क्यों होती हैं?"
    },
    options: [
      { en: "Because of limited space and terrain", hi: "सीमित जगह और भूभाग के कारण" },
      { en: "To slow down vehicles", hi: "वाहनों की गति धीमी करने के लिए" },
      { en: "For decoration", hi: "सजावट के लिए" },
      { en: "To confuse travelers", hi: "यात्रियों को भ्रमित करने के लिए" }
    ],
    correct: {
      en: "Because of limited space and terrain",
      hi: "सीमित जगह और भूभाग के कारण"
    },
    explanation: {
      en: "Mountain terrain and space constraints cause roads to be narrow and winding.",
      hi: "पहाड़ी भूभाग और जगह की कमी से सड़कें संकरी और घुमावदार होती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is a common challenge faced while traveling in mountains?",
      hi: "पहाड़ों में यात्रा करते समय आमतौर पर कौन सी समस्या आती है?"
    },
    options: [
      { en: "Heavy traffic jams", hi: "भारी ट्रैफिक जाम" },
      { en: "Steep slopes and landslides", hi: "खड़ी ढलान और भूस्खलन" },
      { en: "Flooded roads", hi: "बाढ़ से भरी सड़कें" },
      { en: "Long highways", hi: "लंबी राजमार्ग" }
    ],
    correct: {
      en: "Steep slopes and landslides",
      hi: "खड़ी ढलान और भूस्खलन"
    },
    explanation: {
      en: "Steep slopes and landslides make mountain travel risky.",
      hi: "खड़ी ढलान और भूस्खलन पहाड़ों में यात्रा को जोखिम भरा बनाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why are bridges important in mountain travel?",
      hi: "पहाड़ों में यात्रा में पुल क्यों महत्वपूर्ण होते हैं?"
    },
    options: [
      { en: "To cross rivers and valleys", hi: "नदियों और घाटियों को पार करने के लिए" },
      { en: "For sightseeing", hi: "दृश्य देखने के लिए" },
      { en: "To stop vehicles", hi: "वाहनों को रोकने के लिए" },
      { en: "For decoration", hi: "सजावट के लिए" }
    ],
    correct: {
      en: "To cross rivers and valleys",
      hi: "नदियों और घाटियों को पार करने के लिए"
    },
    explanation: {
      en: "Bridges help connect difficult mountain terrains by crossing rivers and valleys.",
      hi: "पुल नदियों और घाटियों को पार कर मुश्किल पहाड़ी इलाकों को जोड़ते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What kind of vehicle is preferred for transporting goods in mountains?",
      hi: "पहाड़ों में सामान ले जाने के लिए किस प्रकार का वाहन पसंद किया जाता है?"
    },
    options: [
      { en: "Heavy trucks", hi: "भारी ट्रक" },
      { en: "Small jeeps or tractors", hi: "छोटी जीप या ट्रैक्टर" },
      { en: "Motorcycles", hi: "मोटरसाइकिल" },
      { en: "Boats", hi: "नाव" }
    ],
    correct: {
      en: "Small jeeps or tractors",
      hi: "छोटी जीप या ट्रैक्टर"
    },
    explanation: {
      en: "Small and sturdy vehicles are preferred on narrow mountain roads.",
      hi: "संकरी पहाड़ी सड़कों के लिए छोटी और मजबूत वाहन पसंद की जाती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is a common mode of travel for tourists in mountain areas?",
      hi: "पहाड़ी क्षेत्रों में पर्यटकों के लिए आम यात्रा का साधन क्या है?"
    },
    options: [
      { en: "Cable cars or ropeways", hi: "केबल कार या रोपवे" },
      { en: "Subways", hi: "सबवे" },
      { en: "Ships", hi: "जहाज" },
      { en: "Trains", hi: "ट्रेन" }
    ],
    correct: {
      en: "Cable cars or ropeways",
      hi: "केबल कार या रोपवे"
    },
    explanation: {
      en: "Cable cars help tourists travel safely over steep terrain.",
      hi: "केबल कारें पर्यटकों को खड़ी जगहों पर सुरक्षित यात्रा प्रदान करती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which safety measure is important while traveling in mountains?",
      hi: "पहाड़ों में यात्रा करते समय कौन सी सुरक्षा सावधानी महत्वपूर्ण है?"
    },
    options: [
      { en: "Carrying enough water and food", hi: "पर्याप्त पानी और भोजन साथ रखना" },
      { en: "Ignoring weather updates", hi: "मौसम अपडेट्स को नजरअंदाज करना" },
      { en: "Driving fast on curves", hi: "मोड़ों पर तेज ड्राइविंग करना" },
      { en: "Using mobile phones while driving", hi: "ड्राइविंग के दौरान मोबाइल फोन का उपयोग करना" }
    ],
    correct: {
      en: "Carrying enough water and food",
      hi: "पर्याप्त पानी और भोजन साथ रखना"
    },
    explanation: {
      en: "Having enough supplies ensures safety during unexpected delays.",
      hi: "पर्याप्त सामान अप्रत्याशित देरी के दौरान सुरक्षा सुनिश्चित करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why is it difficult to build roads in mountainous regions?",
      hi: "पहाड़ी क्षेत्रों में सड़कें बनाना मुश्किल क्यों होता है?"
    },
    options: [
      { en: "Due to flat land", hi: "समतल भूमि के कारण" },
      { en: "Due to rocky and uneven terrain", hi: "पत्थर और असमान भूभाग के कारण" },
      { en: "Due to too many trees", hi: "बहुत सारे पेड़ों के कारण" },
      { en: "Due to frequent floods", hi: "बार-बार बाढ़ के कारण" }
    ],
    correct: {
      en: "Due to rocky and uneven terrain",
      hi: "पत्थर और असमान भूभाग के कारण"
    },
    explanation: {
      en: "Mountainous terrain is rocky and uneven, making road construction hard.",
      hi: "पहाड़ी भूभाग पत्थर वाला और असमान होता है, जिससे सड़क निर्माण कठिन होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should travelers avoid while driving on mountain roads?",
      hi: "पहाड़ी सड़कों पर ड्राइविंग करते समय यात्रियों को क्या बचाना चाहिए?"
    },
    options: [
      { en: "Overtaking at sharp curves", hi: "तीव्र मोड़ों पर ओवरटेकिंग" },
      { en: "Using seat belts", hi: "सीट बेल्ट का उपयोग" },
      { en: "Keeping headlights on", hi: "हेडलाइट चालू रखना" },
      { en: "Driving slowly", hi: "धीमी गति से ड्राइव करना" }
    ],
    correct: {
      en: "Overtaking at sharp curves",
      hi: "तीव्र मोड़ों पर ओवरटेकिंग"
    },
    explanation: {
      en: "Overtaking on sharp curves is dangerous and should be avoided.",
      hi: "तीव्र मोड़ों पर ओवरटेकिंग खतरनाक होता है और इससे बचना चाहिए।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following helps reduce accidents in mountain travel?",
      hi: "पहाड़ी यात्रा में दुर्घटनाओं को कम करने में कौन मदद करता है?"
    },
    options: [
      { en: "Good road signage and guardrails", hi: "अच्छे सड़क संकेत और गार्डरेल" },
      { en: "Ignoring speed limits", hi: "स्पीड लिमिट का उल्लंघन" },
      { en: "Driving at night without lights", hi: "रात में बिना लाइट के ड्राइविंग" },
      { en: "Distracted driving", hi: "ध्यान भंग करके ड्राइविंग" }
    ],
    correct: {
      en: "Good road signage and guardrails",
      hi: "अच्छे सड़क संकेत और गार्डरेल"
    },
    explanation: {
      en: "Proper signs and guardrails improve safety on mountain roads.",
      hi: "सही संकेत और गार्डरेल पहाड़ी सड़कों पर सुरक्षा बढ़ाते हैं।"
    }
  }
];

export default travelInMountains;
