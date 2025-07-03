const materialsUsed = [
  {
    id: 1,
    question: {
      en: "Which of these is commonly used to build strong houses?",
      hi: "मजबूत घर बनाने में इनमें से कौन सी सामग्री सामान्यतः उपयोग होती है?"
    },
    options: [
      { en: "Bricks", hi: "ईंटें" },
      { en: "Straw", hi: "फूस" },
      { en: "Cloth", hi: "कपड़ा" },
      { en: "Paper", hi: "कागज़" }
    ],
    correct: {
      en: "Bricks",
      hi: "ईंटें"
    },
    explanation: {
      en: "Bricks are strong and used in building pucca houses.",
      hi: "ईंटें मजबूत होती हैं और पक्के घर बनाने में उपयोग होती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What material is used to make kutcha houses?",
      hi: "कच्चे घर बनाने में कौन सी सामग्री उपयोग होती है?"
    },
    options: [
      { en: "Mud and straw", hi: "मिट्टी और फूस" },
      { en: "Bricks and cement", hi: "ईंट और सीमेंट" },
      { en: "Steel and glass", hi: "स्टील और काँच" },
      { en: "Plastic and rubber", hi: "प्लास्टिक और रबर" }
    ],
    correct: {
      en: "Mud and straw",
      hi: "मिट्टी और फूस"
    },
    explanation: {
      en: "Kutcha houses are made from simple materials like mud and straw.",
      hi: "कच्चे घर साधारण सामग्री जैसे मिट्टी और फूस से बनाए जाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is a natural material used in houses?",
      hi: "इनमें से कौन घरों में उपयोग की जाने वाली प्राकृतिक सामग्री है?"
    },
    options: [
      { en: "Bamboo", hi: "बाँस" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Aluminum", hi: "एल्युमिनियम" },
      { en: "Glass", hi: "काँच" }
    ],
    correct: {
      en: "Bamboo",
      hi: "बाँस"
    },
    explanation: {
      en: "Bamboo is a natural, eco-friendly material used in many houses.",
      hi: "बाँस एक प्राकृतिक और पर्यावरण अनुकूल सामग्री है जो कई घरों में उपयोग होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is used with bricks to hold them together?",
      hi: "ईंटों को जोड़ने के लिए उनके साथ क्या उपयोग किया जाता है?"
    },
    options: [
      { en: "Cement", hi: "सीमेंट" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Paper", hi: "कागज़" },
      { en: "Glass", hi: "काँच" }
    ],
    correct: {
      en: "Cement",
      hi: "सीमेंट"
    },
    explanation: {
      en: "Cement is used as a binder to hold bricks together.",
      hi: "सीमेंट को ईंटों को जोड़ने के लिए एक बाइंडर के रूप में उपयोग किया जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which material is mostly used for roofs in kutcha houses?",
      hi: "कच्चे घरों की छत के लिए कौन सी सामग्री अधिकतर उपयोग होती है?"
    },
    options: [
      { en: "Straw and leaves", hi: "फूस और पत्तियाँ" },
      { en: "Tiles", hi: "टाइल्स" },
      { en: "Cement", hi: "सीमेंट" },
      { en: "Glass", hi: "काँच" }
    ],
    correct: {
      en: "Straw and leaves",
      hi: "फूस और पत्तियाँ"
    },
    explanation: {
      en: "Straw and leaves are used in rural areas for roofing.",
      hi: "गाँवों में छत बनाने के लिए फूस और पत्तियाँ उपयोग होती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is used to make modern multi-storey buildings?",
      hi: "आधुनिक बहुमंज़िला इमारतें बनाने में क्या उपयोग होता है?"
    },
    options: [
      { en: "Steel and concrete", hi: "स्टील और कंक्रीट" },
      { en: "Wood and cloth", hi: "लकड़ी और कपड़ा" },
      { en: "Straw and bamboo", hi: "फूस और बाँस" },
      { en: "Paper and glass", hi: "कागज़ और काँच" }
    ],
    correct: {
      en: "Steel and concrete",
      hi: "स्टील और कंक्रीट"
    },
    explanation: {
      en: "Tall buildings are built using strong materials like steel and concrete.",
      hi: "ऊँची इमारतें स्टील और कंक्रीट जैसी मजबूत सामग्री से बनाई जाती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following materials makes the house look beautiful?",
      hi: "इनमें से कौन सी सामग्री घर को सुंदर बनाती है?"
    },
    options: [
      { en: "Paint", hi: "पेंट" },
      { en: "Mud", hi: "मिट्टी" },
      { en: "Leaves", hi: "पत्तियाँ" },
      { en: "Straw", hi: "फूस" }
    ],
    correct: {
      en: "Paint",
      hi: "पेंट"
    },
    explanation: {
      en: "Paint is used to decorate and protect house walls.",
      hi: "पेंट का उपयोग दीवारों को सजाने और उनकी सुरक्षा के लिए किया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is glass mainly used for in houses?",
      hi: "घर में काँच का मुख्य उपयोग किस लिए होता है?"
    },
    options: [
      { en: "Windows", hi: "खिड़कियाँ" },
      { en: "Flooring", hi: "फर्श" },
      { en: "Roof", hi: "छत" },
      { en: "Walls", hi: "दीवारें" }
    ],
    correct: {
      en: "Windows",
      hi: "खिड़कियाँ"
    },
    explanation: {
      en: "Glass is used in windows to allow light inside the house.",
      hi: "काँच का उपयोग खिड़कियों में किया जाता है ताकि घर में रोशनी आ सके।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is wood mainly used for in houses?",
      hi: "घर में लकड़ी का मुख्य उपयोग किस लिए होता है?"
    },
    options: [
      { en: "Doors and furniture", hi: "दरवाज़े और फर्नीचर" },
      { en: "Floors only", hi: "केवल फर्श" },
      { en: "Ceilings only", hi: "केवल छत" },
      { en: "Painting", hi: "पेंटिंग" }
    ],
    correct: {
      en: "Doors and furniture",
      hi: "दरवाज़े और फर्नीचर"
    },
    explanation: {
      en: "Wood is mostly used for making doors, windows, and furniture.",
      hi: "लकड़ी का उपयोग दरवाज़े, खिड़कियाँ और फर्नीचर बनाने में किया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is NOT used to build houses?",
      hi: "इनमें से कौन घर बनाने में उपयोग नहीं होता?"
    },
    options: [
      { en: "Chalk", hi: "चॉक" },
      { en: "Cement", hi: "सीमेंट" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Bricks", hi: "ईंटें" }
    ],
    correct: {
      en: "Chalk",
      hi: "चॉक"
    },
    explanation: {
      en: "Chalk is used for writing, not for building houses.",
      hi: "चॉक लिखने के लिए उपयोग होती है, घर बनाने के लिए नहीं।"
    }
  }
];

export default materialsUsed;
