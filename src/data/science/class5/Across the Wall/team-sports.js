const girlsInSports = [
  {
    id: 1,
    question: {
      en: "Why is it important for girls to participate in sports?",
      hi: "लड़कियों के लिए खेलों में भाग लेना क्यों जरूरी है?"
    },
    options: [
      { en: "It improves physical health", hi: "यह शारीरिक स्वास्थ्य सुधारता है" },
      { en: "It builds confidence", hi: "यह आत्मविश्वास बढ़ाता है" },
      { en: "It encourages teamwork", hi: "यह टीम भावना को बढ़ाता है" },
      { en: "All of these", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "Sports help girls in improving health, confidence, and teamwork.",
      hi: "खेल लड़कियों को स्वास्थ्य, आत्मविश्वास और टीम भावना बढ़ाने में मदद करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is a common myth about girls in sports?",
      hi: "खेलों में लड़कियों को लेकर एक आम मिथक क्या है?"
    },
    options: [
      { en: "Girls are weak", hi: "लड़कियाँ कमजोर होती हैं" },
      { en: "Girls can play equally", hi: "लड़कियाँ बराबरी से खेल सकती हैं" },
      { en: "Girls enjoy sports", hi: "लड़कियों को खेल पसंद हैं" },
      { en: "Girls are team players", hi: "लड़कियाँ टीम भावना से खेलती हैं" }
    ],
    correct: {
      en: "Girls are weak",
      hi: "लड़कियाँ कमजोर होती हैं"
    },
    explanation: {
      en: "It is a false belief that girls are weak; they are strong and capable.",
      hi: "यह एक गलत धारणा है कि लड़कियाँ कमजोर होती हैं; वे मजबूत और सक्षम होती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which Indian woman has made a mark in boxing?",
      hi: "किस भारतीय महिला ने मुक्केबाज़ी में नाम कमाया है?"
    },
    options: [
      { en: "Saina Nehwal", hi: "साइना नेहवाल" },
      { en: "Mary Kom", hi: "मैरी कॉम" },
      { en: "Mithali Raj", hi: "मिताली राज" },
      { en: "PT Usha", hi: "पी.टी. उषा" }
    ],
    correct: {
      en: "Mary Kom",
      hi: "मैरी कॉम"
    },
    explanation: {
      en: "Mary Kom is a world champion boxer from India.",
      hi: "मैरी कॉम भारत की विश्व विजेता मुक्केबाज हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "How does playing team sports help girls?",
      hi: "टीम खेल खेलने से लड़कियों को कैसे मदद मिलती है?"
    },
    options: [
      { en: "It helps them stay isolated", hi: "यह उन्हें अकेला बनाता है" },
      { en: "It teaches cooperation and teamwork", hi: "यह सहयोग और टीम भावना सिखाता है" },
      { en: "It distracts them", hi: "यह उन्हें विचलित करता है" },
      { en: "It weakens their studies", hi: "यह उनकी पढ़ाई कमजोर करता है" }
    ],
    correct: {
      en: "It teaches cooperation and teamwork",
      hi: "यह सहयोग और टीम भावना सिखाता है"
    },
    explanation: {
      en: "Team sports promote coordination and working with others.",
      hi: "टीम खेल समन्वय और दूसरों के साथ काम करना सिखाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What stops some girls from joining sports teams?",
      hi: "कुछ लड़कियाँ खेल टीमों में शामिल क्यों नहीं हो पातीं?"
    },
    options: [
      { en: "Lack of support", hi: "समर्थन की कमी" },
      { en: "Stereotypes", hi: "रूढ़िवादिता" },
      { en: "No facilities", hi: "सुविधाओं की कमी" },
      { en: "All of these", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "Cultural bias, fewer facilities, and lack of encouragement limit girls in sports.",
      hi: "सांस्कृतिक पक्षपात, कम सुविधाएँ और प्रोत्साहन की कमी लड़कियों को खेलों से दूर रखती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Who is a famous Indian female cricketer?",
      hi: "एक प्रसिद्ध भारतीय महिला क्रिकेटर कौन हैं?"
    },
    options: [
      { en: "PV Sindhu", hi: "पी.वी. सिंधु" },
      { en: "Hima Das", hi: "हिमा दास" },
      { en: "Mithali Raj", hi: "मिताली राज" },
      { en: "Deepika Kumari", hi: "दीपिका कुमारी" }
    ],
    correct: {
      en: "Mithali Raj",
      hi: "मिताली राज"
    },
    explanation: {
      en: "Mithali Raj is a celebrated Indian women's cricket team captain.",
      hi: "मिताली राज भारतीय महिला क्रिकेट टीम की प्रसिद्ध कप्तान रही हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Girls playing sports break which stereotype?",
      hi: "खेलों में भाग लेने वाली लड़कियाँ किस रूढ़िवादिता को तोड़ती हैं?"
    },
    options: [
      { en: "Girls should stay indoors", hi: "लड़कियों को घर के अंदर रहना चाहिए" },
      { en: "Girls can’t be leaders", hi: "लड़कियाँ नेता नहीं बन सकतीं" },
      { en: "Girls are not strong", hi: "लड़कियाँ मजबूत नहीं होतीं" },
      { en: "All of these", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "Sports help girls prove they are strong, confident, and capable leaders.",
      hi: "खेलों से लड़कियाँ दिखा सकती हैं कि वे मजबूत, आत्मविश्वासी और सक्षम नेता हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is a benefit of girls being in sports?",
      hi: "लड़कियों के खेलों में होने का क्या लाभ है?"
    },
    options: [
      { en: "Better health", hi: "बेहतर स्वास्थ्य" },
      { en: "More confidence", hi: "अधिक आत्मविश्वास" },
      { en: "Leadership skills", hi: "नेतृत्व कौशल" },
      { en: "All of the above", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of the above",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "Sports help improve physical and mental strength, and leadership in girls.",
      hi: "खेलों से लड़कियों की शारीरिक और मानसिक शक्ति के साथ-साथ नेतृत्व कौशल भी विकसित होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which sport has seen rising participation of Indian girls recently?",
      hi: "हाल ही में किस खेल में भारतीय लड़कियों की भागीदारी बढ़ी है?"
    },
    options: [
      { en: "Wrestling", hi: "कुश्ती" },
      { en: "Shooting", hi: "निशानेबाज़ी" },
      { en: "Athletics", hi: "एथलेटिक्स" },
      { en: "All of the above", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of the above",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "Indian girls are excelling in many sports like wrestling, shooting, and athletics.",
      hi: "भारतीय लड़कियाँ कुश्ती, निशानेबाज़ी और एथलेटिक्स जैसे कई खेलों में उत्कृष्ट प्रदर्शन कर रही हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What message is sent when girls play in school teams?",
      hi: "जब लड़कियाँ स्कूल टीमों में खेलती हैं तो क्या संदेश जाता है?"
    },
    options: [
      { en: "Girls are weak", hi: "लड़कियाँ कमजोर हैं" },
      { en: "Girls should not lead", hi: "लड़कियाँ नेतृत्व न करें" },
      { en: "Girls can be strong and capable", hi: "लड़कियाँ मजबूत और सक्षम हो सकती हैं" },
      { en: "Girls don’t enjoy sports", hi: "लड़कियों को खेल पसंद नहीं हैं" }
    ],
    correct: {
      en: "Girls can be strong and capable",
      hi: "लड़कियाँ मजबूत और सक्षम हो सकती हैं"
    },
    explanation: {
      en: "Girls in sports inspire others to challenge old beliefs.",
      hi: "खेलों में लड़कियाँ दूसरों को पुरानी सोच को चुनौती देने के लिए प्रेरित करती हैं।"
    }
  }
];

export default girlsInSports;
