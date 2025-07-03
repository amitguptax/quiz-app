const conservation = [
  {
    id: 1,
    question: {
      en: "Why should we turn off the tap while brushing?",
      hi: "ब्रश करते समय नल क्यों बंद कर देना चाहिए?"
    },
    options: [
      { en: "To save water", hi: "पानी बचाने के लिए" },
      { en: "To make noise", hi: "शोर करने के लिए" },
      { en: "To waste water", hi: "पानी बर्बाद करने के लिए" },
      { en: "For fun", hi: "मज़े के लिए" }
    ],
    correct: {
      en: "To save water",
      hi: "पानी बचाने के लिए"
    },
    explanation: {
      en: "Turning off the tap prevents water wastage.",
      hi: "नल बंद करने से पानी बर्बाद नहीं होता।"
    }
  },
  {
    id: 2,
    question: {
      en: "How can we reduce air pollution?",
      hi: "हम वायु प्रदूषण को कैसे कम कर सकते हैं?"
    },
    options: [
      { en: "By planting trees", hi: "पेड़ लगाकर" },
      { en: "By burning plastic", hi: "प्लास्टिक जलाकर" },
      { en: "By using more cars", hi: "अधिक गाड़ियाँ चलाकर" },
      { en: "By bursting crackers", hi: "पटाखे फोड़कर" }
    ],
    correct: {
      en: "By planting trees",
      hi: "पेड़ लगाकर"
    },
    explanation: {
      en: "Trees clean the air and reduce pollution.",
      hi: "पेड़ हवा को साफ करते हैं और प्रदूषण कम करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following helps save water?",
      hi: "निम्न में से कौन पानी बचाने में मदद करता है?"
    },
    options: [
      { en: "Fixing leaking taps", hi: "टपकते नल को ठीक करना" },
      { en: "Letting water overflow", hi: "पानी को बहने देना" },
      { en: "Keeping tap open", hi: "नल खुला रखना" },
      { en: "Washing car daily", hi: "रोज कार धोना" }
    ],
    correct: {
      en: "Fixing leaking taps",
      hi: "टपकते नल को ठीक करना"
    },
    explanation: {
      en: "Fixing leaks avoids unnecessary water loss.",
      hi: "लीक ठीक करने से बेवजह पानी नहीं बहता।"
    }
  },
  {
    id: 4,
    question: {
      en: "What should we not do to save clean air?",
      hi: "स्वच्छ हवा बचाने के लिए हमें क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Burn garbage", hi: "कचरा जलाना" },
      { en: "Plant trees", hi: "पेड़ लगाना" },
      { en: "Use bicycles", hi: "साइकिल चलाना" },
      { en: "Use public transport", hi: "सार्वजनिक परिवहन का उपयोग करना" }
    ],
    correct: {
      en: "Burn garbage",
      hi: "कचरा जलाना"
    },
    explanation: {
      en: "Burning garbage pollutes the air.",
      hi: "कचरा जलाने से हवा प्रदूषित होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the benefit of planting trees?",
      hi: "पेड़ लगाने का क्या लाभ है?"
    },
    options: [
      { en: "They clean the air", hi: "वे हवा को साफ करते हैं" },
      { en: "They make noise", hi: "वे शोर करते हैं" },
      { en: "They block roads", hi: "वे सड़क रोकते हैं" },
      { en: "They use too much water", hi: "वे बहुत पानी लेते हैं" }
    ],
    correct: {
      en: "They clean the air",
      hi: "वे हवा को साफ करते हैं"
    },
    explanation: {
      en: "Trees absorb carbon dioxide and give oxygen.",
      hi: "पेड़ कार्बन डाइऑक्साइड को सोखते हैं और ऑक्सीजन देते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "How can we reduce water waste at home?",
      hi: "हम घर पर पानी की बर्बादी कैसे रोक सकते हैं?"
    },
    options: [
      { en: "Close taps properly", hi: "नल को अच्छे से बंद करें" },
      { en: "Keep taps open", hi: "नल खुले रखें" },
      { en: "Overflow tanks", hi: "टैंक ओवरफ्लो करें" },
      { en: "Ignore leaking pipes", hi: "लीक हो रहे पाइपों को नज़रअंदाज़ करें" }
    ],
    correct: {
      en: "Close taps properly",
      hi: "नल को अच्छे से बंद करें"
    },
    explanation: {
      en: "Closing taps tightly saves water.",
      hi: "नल को ठीक से बंद करने से पानी बचता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these should be avoided to protect the air?",
      hi: "हवा की सुरक्षा के लिए इनमें से क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Burning firecrackers", hi: "पटाखे जलाना" },
      { en: "Cycling", hi: "साइकिल चलाना" },
      { en: "Tree plantation", hi: "वृक्षारोपण" },
      { en: "Walking", hi: "चलना" }
    ],
    correct: {
      en: "Burning firecrackers",
      hi: "पटाखे जलाना"
    },
    explanation: {
      en: "Firecrackers cause air pollution.",
      hi: "पटाखों से वायु प्रदूषण होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why should we reuse water when possible?",
      hi: "हमें जब संभव हो पानी का पुनः उपयोग क्यों करना चाहिए?"
    },
    options: [
      { en: "To save water", hi: "पानी बचाने के लिए" },
      { en: "To waste more", hi: "और बर्बाद करने के लिए" },
      { en: "To make noise", hi: "शोर करने के लिए" },
      { en: "To dirty the floor", hi: "फ़र्श गंदा करने के लिए" }
    ],
    correct: {
      en: "To save water",
      hi: "पानी बचाने के लिए"
    },
    explanation: {
      en: "Reusing water helps conserve it for future use.",
      hi: "पानी का पुनः उपयोग करना इसे भविष्य के लिए बचाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How does using a bicycle help the environment?",
      hi: "साइकिल का उपयोग पर्यावरण को कैसे लाभ पहुँचाता है?"
    },
    options: [
      { en: "It reduces air pollution", hi: "यह वायु प्रदूषण को कम करता है" },
      { en: "It increases smoke", hi: "यह धुएँ को बढ़ाता है" },
      { en: "It makes noise", hi: "यह शोर करता है" },
      { en: "It uses petrol", hi: "यह पेट्रोल का उपयोग करता है" }
    ],
    correct: {
      en: "It reduces air pollution",
      hi: "यह वायु प्रदूषण को कम करता है"
    },
    explanation: {
      en: "Bicycles do not release harmful gases.",
      hi: "साइकिलें हानिकारक गैसें नहीं छोड़तीं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is one way to save both water and air?",
      hi: "पानी और हवा दोनों को बचाने का एक तरीका क्या है?"
    },
    options: [
      { en: "Plant more trees", hi: "अधिक पेड़ लगाना" },
      { en: "Burn garbage", hi: "कचरा जलाना" },
      { en: "Waste water", hi: "पानी बर्बाद करना" },
      { en: "Use private vehicles more", hi: "अधिक निजी वाहनों का उपयोग करना" }
    ],
    correct: {
      en: "Plant more trees",
      hi: "अधिक पेड़ लगाना"
    },
    explanation: {
      en: "Trees help clean the air and protect water sources.",
      hi: "पेड़ हवा को साफ करते हैं और जल स्रोतों की रक्षा करते हैं।"
    }
  }
];

export default conservation;
