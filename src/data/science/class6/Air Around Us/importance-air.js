const importanceOfAir = [
  {
    id: 1,
    question: {
      en: "Why is air important for living beings?",
      hi: "हवा जीवों के लिए क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "For movement", hi: "गति के लिए" },
      { en: "For breathing", hi: "श्वसन के लिए" },
      { en: "For sleeping", hi: "नींद के लिए" },
      { en: "For growth", hi: "विकास के लिए" }
    ],
    correct: {
      en: "For breathing",
      hi: "श्वसन के लिए"
    },
    explanation: {
      en: "Living beings need air (oxygen) to breathe and stay alive.",
      hi: "सजीवों को जीवित रहने के लिए श्वसन हेतु हवा (ऑक्सीजन) की आवश्यकता होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What does air help birds and airplanes to do?",
      hi: "हवा पक्षियों और हवाई जहाजों को किसमें मदद करती है?"
    },
    options: [
      { en: "Fly", hi: "उड़ने में" },
      { en: "Sing", hi: "गाने में" },
      { en: "Sleep", hi: "सोने में" },
      { en: "Eat", hi: "खाने में" }
    ],
    correct: {
      en: "Fly",
      hi: "उड़ने में"
    },
    explanation: {
      en: "Air provides the lift needed for flying.",
      hi: "हवा उड़ने के लिए आवश्यक बल प्रदान करती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which gas in the air is used by plants to make food?",
      hi: "पौधे भोजन बनाने के लिए हवा की किस गैस का उपयोग करते हैं?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Carbon dioxide",
      hi: "कार्बन डाइऑक्साइड"
    },
    explanation: {
      en: "Plants use carbon dioxide for photosynthesis.",
      hi: "पौधे प्रकाश संश्लेषण के लिए कार्बन डाइऑक्साइड का उपयोग करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "How does air help in drying clothes?",
      hi: "हवा कपड़ों को सुखाने में कैसे मदद करती है?"
    },
    options: [
      { en: "By freezing water", hi: "पानी को जमाकर" },
      { en: "By blowing water away", hi: "पानी को उड़ा कर" },
      { en: "By absorbing water", hi: "पानी को सोख कर" },
      { en: "By evaporating water", hi: "पानी को वाष्पीकृत कर" }
    ],
    correct: {
      en: "By evaporating water",
      hi: "पानी को वाष्पीकृत कर"
    },
    explanation: {
      en: "Air speeds up the evaporation of water, drying clothes.",
      hi: "हवा पानी के वाष्पीकरण को तेज करती है, जिससे कपड़े सूखते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why is air important for burning?",
      hi: "जलने के लिए हवा क्यों जरूरी है?"
    },
    options: [
      { en: "Air makes things cold", hi: "हवा चीजों को ठंडा करती है" },
      { en: "Air provides oxygen needed for burning", hi: "हवा जलने के लिए आवश्यक ऑक्सीजन देती है" },
      { en: "Air removes fire", hi: "हवा आग को हटा देती है" },
      { en: "Air carries smoke", hi: "हवा धुएँ को ले जाती है" }
    ],
    correct: {
      en: "Air provides oxygen needed for burning",
      hi: "हवा जलने के लिए आवश्यक ऑक्सीजन देती है"
    },
    explanation: {
      en: "Oxygen in air supports combustion.",
      hi: "हवा में मौजूद ऑक्सीजन जलने में सहायक होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which use of air helps in generating electricity?",
      hi: "हवा का कौन सा उपयोग बिजली उत्पादन में सहायक होता है?"
    },
    options: [
      { en: "Air conditioner", hi: "एयर कंडीशनर" },
      { en: "Windmill", hi: "पवनचक्की" },
      { en: "Fan", hi: "पंखा" },
      { en: "Geyser", hi: "गैज़र" }
    ],
    correct: {
      en: "Windmill",
      hi: "पवनचक्की"
    },
    explanation: {
      en: "Windmills use wind energy to generate electricity.",
      hi: "पवनचक्कियाँ हवा की ऊर्जा से बिजली उत्पन्न करती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How does air help in sports like cricket or football?",
      hi: "हवा क्रिकेट या फुटबॉल जैसे खेलों में कैसे मदद करती है?"
    },
    options: [
      { en: "By lifting the players", hi: "खिलाड़ियों को उठाकर" },
      { en: "By filling air in balls", hi: "गेंदों में हवा भरकर" },
      { en: "By cooling the ground", hi: "मैदान को ठंडा कर" },
      { en: "By making sound", hi: "ध्वनि उत्पन्न कर" }
    ],
    correct: {
      en: "By filling air in balls",
      hi: "गेंदों में हवा भरकर"
    },
    explanation: {
      en: "Air-filled balls are used in many sports.",
      hi: "कई खेलों में हवा भरी गेंदों का उपयोग किया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What role does air play in weather and climate?",
      hi: "मौसम और जलवायु में हवा की क्या भूमिका होती है?"
    },
    options: [
      { en: "Controls seasons", hi: "मौसमों को नियंत्रित करती है" },
      { en: "Has no role", hi: "कोई भूमिका नहीं" },
      { en: "Cools oceans", hi: "सागरों को ठंडा करती है" },
      { en: "Brings clouds and rains", hi: "बादल और वर्षा लाती है" }
    ],
    correct: {
      en: "Brings clouds and rains",
      hi: "बादल और वर्षा लाती है"
    },
    explanation: {
      en: "Air movement affects rain, storms, and weather patterns.",
      hi: "हवा की गति वर्षा, तूफान और मौसम को प्रभावित करती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following shows the presence of air?",
      hi: "निम्न में से कौन हवा की उपस्थिति को दर्शाता है?"
    },
    options: [
      { en: "Flying kite", hi: "पतंग उड़ाना" },
      { en: "Burning candle", hi: "मोमबत्ती जलना" },
      { en: "Moving leaves", hi: "पत्तों का हिलना" },
      { en: "All of the above", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of the above",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "All these activities are affected by air.",
      hi: "ये सभी क्रियाएं हवा की उपस्थिति दर्शाती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "How does air help in hearing sound?",
      hi: "ध्वनि को सुनने में हवा कैसे मदद करती है?"
    },
    options: [
      { en: "By producing sound", hi: "ध्वनि उत्पन्न कर" },
      { en: "By absorbing sound", hi: "ध्वनि को सोख कर" },
      { en: "By carrying sound waves", hi: "ध्वनि तरंगों को ले जाकर" },
      { en: "By creating silence", hi: "शांति बनाकर" }
    ],
    correct: {
      en: "By carrying sound waves",
      hi: "ध्वनि तरंगों को ले जाकर"
    },
    explanation: {
      en: "Air carries sound waves from source to ear.",
      hi: "हवा ध्वनि तरंगों को स्रोत से कान तक पहुँचाती है।"
    }
  }
];

export default importanceOfAir;
