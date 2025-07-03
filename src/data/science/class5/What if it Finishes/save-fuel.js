const saveFuel = [
  {
    id: 1,
    question: {
      en: "Why is it important to save fuel?",
      hi: "ईंधन बचाना क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "Because fuel is unlimited", hi: "क्योंकि ईंधन असीमित है" },
      { en: "Because fuel is costly and limited", hi: "क्योंकि ईंधन महंगा और सीमित है" },
      { en: "Because saving fuel causes pollution", hi: "क्योंकि ईंधन बचाने से प्रदूषण होता है" },
      { en: "Because fuel is not used in daily life", hi: "क्योंकि ईंधन का दैनिक जीवन में उपयोग नहीं होता" }
    ],
    correct: {
      en: "Because fuel is costly and limited",
      hi: "क्योंकि ईंधन महंगा और सीमित है"
    },
    explanation: {
      en: "Fuel is a limited resource and saving it reduces cost and pollution.",
      hi: "ईंधन सीमित संसाधन है और इसे बचाने से लागत और प्रदूषण कम होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which practice helps in saving fuel while driving?",
      hi: "गाड़ी चलाते समय कौन सी आदत ईंधन बचाने में मदद करती है?"
    },
    options: [
      { en: "Driving at high speed", hi: "तेज गति से गाड़ी चलाना" },
      { en: "Maintaining steady speed", hi: "लगातार समान गति बनाए रखना" },
      { en: "Frequent braking and accelerating", hi: "बार-बार ब्रेक लगाना और तेज करना" },
      { en: "Keeping engine idle for long", hi: "इंजन को लंबा समय चलने देना" }
    ],
    correct: {
      en: "Maintaining steady speed",
      hi: "लगातार समान गति बनाए रखना"
    },
    explanation: {
      en: "Maintaining steady speed saves fuel by reducing engine load.",
      hi: "लगातार समान गति बनाए रखने से इंजन पर कम दबाव पड़ता है और ईंधन बचता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "How does using public transport save fuel?",
      hi: "सार्वजनिक परिवहन का उपयोग करने से ईंधन कैसे बचता है?"
    },
    options: [
      { en: "By increasing number of vehicles on road", hi: "सड़क पर वाहनों की संख्या बढ़ाकर" },
      { en: "By reducing individual vehicle use", hi: "व्यक्तिगत वाहनों के उपयोग को कम करके" },
      { en: "By wasting time", hi: "समय बर्बाद करके" },
      { en: "By making trips longer", hi: "यात्रा लंबी करके" }
    ],
    correct: {
      en: "By reducing individual vehicle use",
      hi: "व्यक्तिगत वाहनों के उपयोग को कम करके"
    },
    explanation: {
      en: "Using public transport reduces the total fuel consumption per person.",
      hi: "सार्वजनिक परिवहन का उपयोग प्रति व्यक्ति कुल ईंधन की खपत कम करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following helps save fuel in vehicles?",
      hi: "वाहनों में ईंधन बचाने में कौन मदद करता है?"
    },
    options: [
      { en: "Overloading the vehicle", hi: "वाहन को अधिक लोड करना" },
      { en: "Regular maintenance", hi: "नियमित रखरखाव" },
      { en: "Using old tires", hi: "पुरानी टायर का उपयोग" },
      { en: "Ignoring engine problems", hi: "इंजन की समस्याओं की अनदेखी" }
    ],
    correct: {
      en: "Regular maintenance",
      hi: "नियमित रखरखाव"
    },
    explanation: {
      en: "Regular vehicle maintenance ensures efficient fuel use.",
      hi: "नियमित रखरखाव से वाहन का ईंधन कुशलता से उपयोग होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Turning off the engine at traffic signals helps in",
      hi: "ट्रैफिक सिग्नल पर इंजन बंद करने से क्या मदद मिलती है?"
    },
    options: [
      { en: "Saving fuel", hi: "ईंधन बचाने में" },
      { en: "Increasing pollution", hi: "प्रदूषण बढ़ाने में" },
      { en: "Wasting fuel", hi: "ईंधन की बर्बादी में" },
      { en: "Damaging engine", hi: "इंजन को नुकसान पहुँचाने में" }
    ],
    correct: {
      en: "Saving fuel",
      hi: "ईंधन बचाने में"
    },
    explanation: {
      en: "Switching off engine while waiting saves fuel consumption.",
      hi: "रुकते समय इंजन बंद करने से ईंधन की खपत बचती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Using energy-efficient appliances helps in",
      hi: "ऊर्जा-कुशल उपकरणों के उपयोग से क्या होता है?"
    },
    options: [
      { en: "Increasing fuel use", hi: "ईंधन की खपत बढ़ती है" },
      { en: "Saving fuel", hi: "ईंधन बचता है" },
      { en: "Polluting environment", hi: "पर्यावरण प्रदूषित होता है" },
      { en: "Damaging appliances", hi: "उपकरणों को नुकसान होता है" }
    ],
    correct: {
      en: "Saving fuel",
      hi: "ईंधन बचता है"
    },
    explanation: {
      en: "Energy-efficient devices reduce fuel and electricity consumption.",
      hi: "ऊर्जा-कुशल उपकरण ईंधन और बिजली की खपत कम करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why should vehicles not be overloaded?",
      hi: "वाहनों को अधिक लोड क्यों नहीं करना चाहिए?"
    },
    options: [
      { en: "It reduces fuel consumption", hi: "यह ईंधन की खपत कम करता है" },
      { en: "It increases fuel consumption", hi: "यह ईंधन की खपत बढ़ाता है" },
      { en: "It makes driving easier", hi: "यह ड्राइविंग आसान बनाता है" },
      { en: "It does not affect fuel use", hi: "इसका ईंधन उपयोग पर कोई असर नहीं होता" }
    ],
    correct: {
      en: "It increases fuel consumption",
      hi: "यह ईंधन की खपत बढ़ाता है"
    },
    explanation: {
      en: "Overloading a vehicle causes the engine to work harder and use more fuel.",
      hi: "वाहन को अधिक लोड करने से इंजन अधिक मेहनत करता है और अधिक ईंधन खर्च होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which fuel-saving habit can reduce pollution?",
      hi: "कौन सी ईंधन बचाने की आदत प्रदूषण कम कर सकती है?"
    },
    options: [
      { en: "Using personal vehicle for short trips", hi: "छोटी यात्राओं के लिए निजी वाहन का उपयोग" },
      { en: "Carpooling with others", hi: "दूसरों के साथ कार साझा करना" },
      { en: "Keeping engine running while parked", hi: "पार्किंग में इंजन चालू रखना" },
      { en: "Driving at high speed", hi: "तेज गति से गाड़ी चलाना" }
    ],
    correct: {
      en: "Carpooling with others",
      hi: "दूसरों के साथ कार साझा करना"
    },
    explanation: {
      en: "Carpooling reduces the number of vehicles on road, saving fuel and reducing pollution.",
      hi: "कारपूलिंग से सड़क पर वाहनों की संख्या कम होती है, जिससे ईंधन बचता है और प्रदूषण घटता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How can proper tyre pressure help in saving fuel?",
      hi: "सही टायर दबाव से ईंधन कैसे बचता है?"
    },
    options: [
      { en: "It increases friction and fuel use", hi: "यह घर्षण और ईंधन उपयोग बढ़ाता है" },
      { en: "It decreases friction and fuel use", hi: "यह घर्षण और ईंधन उपयोग घटाता है" },
      { en: "It has no effect on fuel use", hi: "इसका ईंधन उपयोग पर कोई प्रभाव नहीं होता" },
      { en: "It damages tyres", hi: "यह टायरों को नुकसान पहुंचाता है" }
    ],
    correct: {
      en: "It decreases friction and fuel use",
      hi: "यह घर्षण और ईंधन उपयोग घटाता है"
    },
    explanation: {
      en: "Proper tyre pressure reduces friction and helps save fuel.",
      hi: "सही टायर दबाव घर्षण कम करता है और ईंधन बचाने में मदद करता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is a good practice to save fuel at home?",
      hi: "घर में ईंधन बचाने के लिए कौन सी अच्छी आदत है?"
    },
    options: [
      { en: "Leaving lights on when not needed", hi: "जब जरूरत न हो तो लाइट चालू रखना" },
      { en: "Using energy-efficient bulbs", hi: "ऊर्जा-कुशल बल्ब का उपयोग" },
      { en: "Running appliances unnecessarily", hi: "अनावश्यक उपकरण चलाना" },
      { en: "Keeping doors and windows open in AC", hi: "एसी में दरवाज़े और खिड़कियाँ खुली रखना" }
    ],
    correct: {
      en: "Using energy-efficient bulbs",
      hi: "ऊर्जा-कुशल बल्ब का उपयोग"
    },
    explanation: {
      en: "Using energy-efficient bulbs reduces electricity consumption, saving fuel used for power generation.",
      hi: "ऊर्जा-कुशल बल्ब बिजली की खपत कम करते हैं, जिससे विद्युत उत्पादन में उपयोग होने वाला ईंधन बचता है।"
    }
  }
];

export default saveFuel;
