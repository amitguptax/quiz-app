const cleanAir = [
  {
    id: 1,
    question: {
      en: "Why do we need clean air?",
      hi: "हमें स्वच्छ हवा की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "To breathe easily", hi: "सांस लेने में आसानी के लिए" },
      { en: "To wash hands", hi: "हाथ धोने के लिए" },
      { en: "To eat food", hi: "खाना खाने के लिए" },
      { en: "To study", hi: "पढ़ाई करने के लिए" }
    ],
    correct: {
      en: "To breathe easily",
      hi: "सांस लेने में आसानी के लिए"
    },
    explanation: {
      en: "Clean air helps us breathe and stay healthy.",
      hi: "स्वच्छ हवा से हमें आसानी से सांस लेने में मदद मिलती है और हम स्वस्थ रहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What happens if the air is dirty?",
      hi: "अगर हवा गंदी हो जाए तो क्या होता है?"
    },
    options: [
      { en: "We may get sick", hi: "हम बीमार हो सकते हैं" },
      { en: "We feel happy", hi: "हम खुश महसूस करते हैं" },
      { en: "We grow faster", hi: "हम तेजी से बढ़ते हैं" },
      { en: "We sleep more", hi: "हम अधिक सोते हैं" }
    ],
    correct: {
      en: "We may get sick",
      hi: "हम बीमार हो सकते हैं"
    },
    explanation: {
      en: "Dirty air causes health problems like coughing or asthma.",
      hi: "गंदी हवा से खांसी, अस्थमा जैसी बीमारियाँ हो सकती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these helps keep air clean?",
      hi: "इनमें से कौन हवा को स्वच्छ रखने में मदद करता है?"
    },
    options: [
      { en: "Planting trees", hi: "पेड़ लगाना" },
      { en: "Burning plastic", hi: "प्लास्टिक जलाना" },
      { en: "Throwing garbage", hi: "कचरा फेंकना" },
      { en: "Smoking", hi: "धूम्रपान" }
    ],
    correct: {
      en: "Planting trees",
      hi: "पेड़ लगाना"
    },
    explanation: {
      en: "Trees clean the air by giving oxygen.",
      hi: "पेड़ ऑक्सीजन देकर हवा को स्वच्छ बनाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following pollutes air?",
      hi: "निम्न में से कौन हवा को प्रदूषित करता है?"
    },
    options: [
      { en: "Smoke from vehicles", hi: "वाहनों का धुआं" },
      { en: "Birds flying", hi: "पक्षियों का उड़ना" },
      { en: "Children playing", hi: "बच्चों का खेलना" },
      { en: "Water from tap", hi: "नल का पानी" }
    ],
    correct: {
      en: "Smoke from vehicles",
      hi: "वाहनों का धुआं"
    },
    explanation: {
      en: "Vehicle smoke adds harmful gases to the air.",
      hi: "वाहनों का धुआं हानिकारक गैसें छोड़ता है जो हवा को प्रदूषित करती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What can we do to reduce air pollution?",
      hi: "हवा को प्रदूषित होने से बचाने के लिए हम क्या कर सकते हैं?"
    },
    options: [
      { en: "Use bicycles", hi: "साइकिल का उपयोग करें" },
      { en: "Burn garbage", hi: "कचरा जलाएं" },
      { en: "Use more cars", hi: "अधिक गाड़ियों का उपयोग करें" },
      { en: "Cut trees", hi: "पेड़ काटें" }
    ],
    correct: {
      en: "Use bicycles",
      hi: "साइकिल का उपयोग करें"
    },
    explanation: {
      en: "Using bicycles reduces air pollution.",
      hi: "साइकिल चलाने से हवा प्रदूषित नहीं होती।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should we avoid to keep air clean?",
      hi: "हवा को स्वच्छ रखने के लिए हमें किससे बचना चाहिए?"
    },
    options: [
      { en: "Burning waste", hi: "कचरा जलाने से" },
      { en: "Using fans", hi: "पंखे चलाने से" },
      { en: "Sweeping floor", hi: "फर्श झाड़ने से" },
      { en: "Reading books", hi: "पुस्तकें पढ़ने से" }
    ],
    correct: {
      en: "Burning waste",
      hi: "कचरा जलाने से"
    },
    explanation: {
      en: "Burning waste creates smoke which pollutes air.",
      hi: "कचरा जलाने से धुआं निकलता है जो हवा को गंदा करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which gas do trees give us?",
      hi: "पेड़ हमें कौन सी गैस देते हैं?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Trees provide oxygen which we need to breathe.",
      hi: "पेड़ हमें सांस लेने के लिए ऑक्सीजन प्रदान करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Clean air helps in:",
      hi: "स्वच्छ हवा किसमें मदद करती है?"
    },
    options: [
      { en: "Good health", hi: "अच्छे स्वास्थ्य में" },
      { en: "Laziness", hi: "आलस्य में" },
      { en: "Illness", hi: "बीमारी में" },
      { en: "Sleepiness", hi: "नींद में" }
    ],
    correct: {
      en: "Good health",
      hi: "अच्छे स्वास्थ्य में"
    },
    explanation: {
      en: "Breathing clean air keeps us fit and healthy.",
      hi: "स्वच्छ हवा में सांस लेने से हम स्वस्थ रहते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What do factories release into the air?",
      hi: "कारखाने हवा में क्या छोड़ते हैं?"
    },
    options: [
      { en: "Smoke", hi: "धुआं" },
      { en: "Rain", hi: "बारिश" },
      { en: "Wind", hi: "पवन" },
      { en: "Oxygen", hi: "ऑक्सीजन" }
    ],
    correct: {
      en: "Smoke",
      hi: "धुआं"
    },
    explanation: {
      en: "Factory smoke pollutes the air.",
      hi: "कारखानों से निकलने वाला धुआं हवा को प्रदूषित करता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why should we not burn plastic?",
      hi: "हमें प्लास्टिक क्यों नहीं जलाना चाहिए?"
    },
    options: [
      { en: "It pollutes air", hi: "यह हवा को प्रदूषित करता है" },
      { en: "It is expensive", hi: "यह महँगा होता है" },
      { en: "It smells sweet", hi: "इसकी खुशबू मीठी होती है" },
      { en: "It becomes soft", hi: "यह नरम हो जाता है" }
    ],
    correct: {
      en: "It pollutes air",
      hi: "यह हवा को प्रदूषित करता है"
    },
    explanation: {
      en: "Burning plastic produces harmful smoke.",
      hi: "प्लास्टिक जलाने से हानिकारक धुआं निकलता है।"
    }
  }
];

export default cleanAir;
