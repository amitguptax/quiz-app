const historicalTools = [
  {
    id: 1,
    question: {
      en: "Which material was commonly used in old buildings and forts?",
      hi: "पुरानी इमारतों और किलों में आमतौर पर कौन सी सामग्री उपयोग की जाती थी?"
    },
    options: [
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Cement", hi: "सीमेंट" },
      { en: "Lime and stone", hi: "चूना और पत्थर" },
      { en: "Aluminium", hi: "एल्यूमिनियम" }
    ],
    correct: {
      en: "Lime and stone",
      hi: "चूना और पत्थर"
    },
    explanation: {
      en: "Lime and stone were widely used in constructing old forts and monuments.",
      hi: "पुराने किलों और स्मारकों को बनाने में चूना और पत्थर का खूब उपयोग किया जाता था।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which tool was used to cut wood in old times?",
      hi: "पुराने समय में लकड़ी काटने के लिए कौन सा औज़ार इस्तेमाल होता था?"
    },
    options: [
      { en: "Hammer", hi: "हथौड़ा" },
      { en: "Saw", hi: "आरा" },
      { en: "Chisel", hi: "छेनी" },
      { en: "Needle", hi: "सुई" }
    ],
    correct: {
      en: "Saw",
      hi: "आरा"
    },
    explanation: {
      en: "A saw was used for cutting wood in earlier times.",
      hi: "लकड़ी काटने के लिए आरे का प्रयोग किया जाता था।"
    }
  },
  {
    id: 3,
    question: {
      en: "What was used to join stones in historical constructions?",
      hi: "ऐतिहासिक निर्माण में पत्थरों को जोड़ने के लिए क्या उपयोग किया जाता था?"
    },
    options: [
      { en: "Glue", hi: "गोंद" },
      { en: "Lime mortar", hi: "चूना मसाला" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Steel rod", hi: "स्टील रॉड" }
    ],
    correct: {
      en: "Lime mortar",
      hi: "चूना मसाला"
    },
    explanation: {
      en: "Lime mortar was used to hold stones together in ancient structures.",
      hi: "चूना मसाले का उपयोग पत्थरों को जोड़ने के लिए किया जाता था।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which natural material was used to paint walls in ancient times?",
      hi: "प्राचीन समय में दीवारों पर रंग करने के लिए कौन सा प्राकृतिक पदार्थ उपयोग होता था?"
    },
    options: [
      { en: "Chemical paint", hi: "रासायनिक पेंट" },
      { en: "Plastic color", hi: "प्लास्टिक रंग" },
      { en: "Soil and plant colors", hi: "मिट्टी और पौधों के रंग" },
      { en: "Wax", hi: "मोम" }
    ],
    correct: {
      en: "Soil and plant colors",
      hi: "मिट्टी और पौधों के रंग"
    },
    explanation: {
      en: "People used natural colors made from soil and plants to paint walls.",
      hi: "लोग मिट्टी और पौधों से बने प्राकृतिक रंगों से दीवारों पर रंग करते थे।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which tool was used for carving on stone or wood?",
      hi: "पत्थर या लकड़ी पर नक्काशी करने के लिए कौन सा औज़ार उपयोग किया जाता था?"
    },
    options: [
      { en: "Axe", hi: "कुल्हाड़ी" },
      { en: "Plough", hi: "हल" },
      { en: "Chisel", hi: "छेनी" },
      { en: "Wrench", hi: "पाना" }
    ],
    correct: {
      en: "Chisel",
      hi: "छेनी"
    },
    explanation: {
      en: "A chisel was used for carving designs in stone and wood.",
      hi: "छेनी का उपयोग पत्थर और लकड़ी पर नक्काशी के लिए किया जाता था।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which natural binding material was used in construction?",
      hi: "निर्माण में कौन सा प्राकृतिक बाँधने वाला पदार्थ उपयोग होता था?"
    },
    options: [
      { en: "Lime", hi: "चूना" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Glue stick", hi: "ग्लू स्टिक" },
      { en: "Aluminium", hi: "एल्यूमिनियम" }
    ],
    correct: {
      en: "Lime",
      hi: "चूना"
    },
    explanation: {
      en: "Lime was a common natural binding material in old constructions.",
      hi: "पुराने निर्माण कार्यों में चूना एक सामान्य बाँधने वाला पदार्थ था।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why were iron tools important in historical times?",
      hi: "ऐतिहासिक समय में लोहे के औज़ार क्यों महत्वपूर्ण थे?"
    },
    options: [
      { en: "For decoration", hi: "सजावट के लिए" },
      { en: "For farming and construction", hi: "कृषि और निर्माण के लिए" },
      { en: "For cooking", hi: "खाना पकाने के लिए" },
      { en: "For wearing", hi: "पहनने के लिए" }
    ],
    correct: {
      en: "For farming and construction",
      hi: "कृषि और निर्माण के लिए"
    },
    explanation: {
      en: "Iron tools helped in farming and building activities.",
      hi: "लोहे के औज़ार कृषि और निर्माण कार्यों में सहायक थे।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is a ‘grindstone’ used for?",
      hi: "‘जाँत’ का उपयोग किसके लिए किया जाता था?"
    },
    options: [
      { en: "Making bricks", hi: "ईंट बनाने के लिए" },
      { en: "Grinding grains", hi: "अनाज पीसने के लिए" },
      { en: "Carving stone", hi: "पत्थर तराशने के लिए" },
      { en: "Building walls", hi: "दीवार बनाने के लिए" }
    ],
    correct: {
      en: "Grinding grains",
      hi: "अनाज पीसने के लिए"
    },
    explanation: {
      en: "Grindstones were used by people to grind food grains manually.",
      hi: "लोग हाथ से अनाज पीसने के लिए जाँत का उपयोग करते थे।"
    }
  },
  {
    id: 9,
    question: {
      en: "What did people use before nails were invented?",
      hi: "कीलें बनने से पहले लोग किसका उपयोग करते थे?"
    },
    options: [
      { en: "Glue", hi: "गोंद" },
      { en: "Rope and joints", hi: "रस्सी और जोड़" },
      { en: "Wires", hi: "तार" },
      { en: "Clips", hi: "क्लिप" }
    ],
    correct: {
      en: "Rope and joints",
      hi: "रस्सी और जोड़"
    },
    explanation: {
      en: "People used ropes and wooden joints to hold parts together before nails.",
      hi: "लोग कीलों से पहले रस्सियों और लकड़ी के जोड़ का प्रयोग करते थे।"
    }
  },
  {
    id: 10,
    question: {
      en: "What does a spinning wheel (charkha) do?",
      hi: "चरखा किस कार्य में आता है?"
    },
    options: [
      { en: "Cutting trees", hi: "पेड़ काटने में" },
      { en: "Weaving cloth", hi: "कपड़ा बुनने में" },
      { en: "Grinding food", hi: "खाद्य पीसने में" },
      { en: "Measuring land", hi: "जमीन नापने में" }
    ],
    correct: {
      en: "Weaving cloth",
      hi: "कपड़ा बुनने में"
    },
    explanation: {
      en: "A charkha was used to spin cotton into thread.",
      hi: "चरखे का उपयोग कपास से सूत कातने में किया जाता था।"
    }
  }
];

export default historicalTools;
