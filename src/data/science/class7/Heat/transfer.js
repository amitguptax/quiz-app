const heatTransfer = [
  {
    id: 1,
    question: {
      en: "Which of the following is NOT a mode of heat transfer?",
      hi: "निम्न में से कौन ऊष्मा संचरण का तरीका नहीं है?"
    },
    options: [
      { en: "Conduction", hi: "चालकता" },
      { en: "Radiation", hi: "विकिरण" },
      { en: "Insulation", hi: "इंसुलेशन" },
      { en: "Convection", hi: "संवहन" }
    ],
    correct: {
      en: "Insulation",
      hi: "इंसुलेशन"
    },
    explanation: {
      en: "Insulation prevents heat transfer, it is not a method of heat transfer.",
      hi: "इंसुलेशन ऊष्मा के संचार को रोकता है, यह ऊष्मा संचार की विधि नहीं है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Heat transfer in solids takes place mainly by:",
      hi: "ठोस पदार्थों में ऊष्मा का संचार मुख्यतः किस विधि से होता है?"
    },
    options: [
      { en: "Conduction", hi: "चालकता" },
      { en: "Radiation", hi: "विकिरण" },
      { en: "Convection", hi: "संवहन" },
      { en: "Reflection", hi: "परावर्तन" }
    ],
    correct: {
      en: "Conduction",
      hi: "चालकता"
    },
    explanation: {
      en: "In solids, heat is transferred by conduction.",
      hi: "ठोसों में ऊष्मा चालकता के द्वारा स्थानांतरित होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "In which medium does convection occur?",
      hi: "संवहन किस माध्यम में होता है?"
    },
    options: [
      { en: "Solid", hi: "ठोस" },
      { en: "Vacuum", hi: "रिक्त स्थान" },
      { en: "Liquids and gases", hi: "तरल और गैसें" },
      { en: "Metal", hi: "धातु" }
    ],
    correct: {
      en: "Liquids and gases",
      hi: "तरल और गैसें"
    },
    explanation: {
      en: "Convection takes place in liquids and gases.",
      hi: "संवहन तरल और गैसीय माध्यमों में होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which mode of heat transfer does not require a medium?",
      hi: "कौन सी ऊष्मा संचरण की विधि को माध्यम की आवश्यकता नहीं होती?"
    },
    options: [
      { en: "Conduction", hi: "चालकता" },
      { en: "Convection", hi: "संवहन" },
      { en: "Radiation", hi: "विकिरण" },
      { en: "Evaporation", hi: "वाष्पीकरण" }
    ],
    correct: {
      en: "Radiation",
      hi: "विकिरण"
    },
    explanation: {
      en: "Radiation does not require any medium for heat transfer.",
      hi: "विकिरण के लिए किसी माध्यम की आवश्यकता नहीं होती।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is the best conductor of heat?",
      hi: "निम्न में से कौन सबसे अच्छा ऊष्मा चालक है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Iron", hi: "लोहा" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Glass", hi: "काँच" }
    ],
    correct: {
      en: "Iron",
      hi: "लोहा"
    },
    explanation: {
      en: "Iron is a good conductor of heat.",
      hi: "लोहा एक अच्छा ऊष्मा चालक है।"
    }
  },
  {
    id: 6,
    question: {
      en: "The transfer of heat by radiation mostly happens from:",
      hi: "विकिरण द्वारा ऊष्मा का संचार प्रायः कहाँ से होता है?"
    },
    options: [
      { en: "Cold objects", hi: "ठंडी वस्तुएँ" },
      { en: "Hot objects", hi: "गर्म वस्तुएँ" },
      { en: "Wet surfaces", hi: "गीली सतहें" },
      { en: "Plastic surfaces", hi: "प्लास्टिक सतहें" }
    ],
    correct: {
      en: "Hot objects",
      hi: "गर्म वस्तुएँ"
    },
    explanation: {
      en: "Hot objects emit heat energy through radiation.",
      hi: "गर्म वस्तुएँ विकिरण के द्वारा ऊष्मा उत्सर्जित करती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why are cooking utensils often made of metals?",
      hi: "खाना पकाने के बर्तन आमतौर पर धातु के क्यों होते हैं?"
    },
    options: [
      { en: "They are cheap", hi: "वे सस्ते होते हैं" },
      { en: "They shine", hi: "वे चमकते हैं" },
      { en: "They are good conductors of heat", hi: "वे अच्छे ऊष्मा चालक होते हैं" },
      { en: "They are soft", hi: "वे मुलायम होते हैं" }
    ],
    correct: {
      en: "They are good conductors of heat",
      hi: "वे अच्छे ऊष्मा चालक होते हैं"
    },
    explanation: {
      en: "Metals conduct heat quickly and help in cooking food.",
      hi: "धातुएँ ऊष्मा को जल्दी से संचरित करती हैं और भोजन पकाने में सहायक होती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Dark and rough surfaces are good:",
      hi: "गहरे और खुरदरे सतहें अच्छी होती हैं:"
    },
    options: [
      { en: "Reflectors", hi: "परावर्तक" },
      { en: "Conductors", hi: "चालक" },
      { en: "Radiators and absorbers", hi: "विकिरण उत्सर्जक और अवशोषक" },
      { en: "Insulators", hi: "इंसुलेटर" }
    ],
    correct: {
      en: "Radiators and absorbers",
      hi: "विकिरण उत्सर्जक और अवशोषक"
    },
    explanation: {
      en: "Dark and rough surfaces absorb and radiate heat better.",
      hi: "गहरे और खुरदरे सतहें ऊष्मा को बेहतर तरीके से अवशोषित और उत्सर्जित करती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these prevents heat loss in a thermos flask?",
      hi: "इनमें से कौन थर्मस फ्लास्क में ऊष्मा की हानि को रोकता है?"
    },
    options: [
      { en: "Glass walls", hi: "कांच की दीवारें" },
      { en: "Air gaps and shiny walls", hi: "हवा का अंतर और चमकदार दीवारें" },
      { en: "Metallic lid", hi: "धातु का ढक्कन" },
      { en: "Rubber grip", hi: "रबर ग्रिप" }
    ],
    correct: {
      en: "Air gaps and shiny walls",
      hi: "हवा का अंतर और चमकदार दीवारें"
    },
    explanation: {
      en: "Shiny walls reflect heat, and air gaps reduce conduction and convection.",
      hi: "चमकदार दीवारें ऊष्मा को परावर्तित करती हैं और वायु अंतराल चालकता और संवहन को कम करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Conduction of heat is fastest in:",
      hi: "ऊष्मा का संचरण सबसे तेज होता है:"
    },
    options: [
      { en: "Solids", hi: "ठोसों में" },
      { en: "Liquids", hi: "तरलों में" },
      { en: "Gases", hi: "गैसों में" },
      { en: "Vacuum", hi: "रिक्त स्थान में" }
    ],
    correct: {
      en: "Solids",
      hi: "ठोसों में"
    },
    explanation: {
      en: "Solids have tightly packed particles, making conduction fastest.",
      hi: "ठोसों में कण सघन होते हैं जिससे ऊष्मा का चालकता सबसे तेज होती है।"
    }
  }
];

export default heatTransfer;
