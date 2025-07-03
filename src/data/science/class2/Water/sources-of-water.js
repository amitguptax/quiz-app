const sourcesOfWater = [
  {
    id: 1,
    question: {
      en: "Which of the following is a source of water?",
      hi: "निम्न में से कौन पानी का स्रोत है?"
    },
    options: [
      { en: "River", hi: "नदी" },
      { en: "Fan", hi: "पंखा" },
      { en: "Spoon", hi: "चम्मच" },
      { en: "Table", hi: "मेज़" }
    ],
    correct: {
      en: "River",
      hi: "नदी"
    },
    explanation: {
      en: "Rivers are natural sources of water.",
      hi: "नदियाँ पानी का प्राकृतिक स्रोत होती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Rainwater is a source of:",
      hi: "वर्षा का पानी किसका स्रोत है?"
    },
    options: [
      { en: "Light", hi: "प्रकाश" },
      { en: "Electricity", hi: "बिजली" },
      { en: "Water", hi: "पानी" },
      { en: "Sound", hi: "ध्वनि" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "Rain is a natural source of water.",
      hi: "बारिश पानी का एक प्राकृतिक स्रोत है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is a man-made source of water?",
      hi: "इनमें से कौन पानी का मानव निर्मित स्रोत है?"
    },
    options: [
      { en: "Tap", hi: "नल" },
      { en: "Well", hi: "कुआँ" },
      { en: "Pond", hi: "तालाब" },
      { en: "River", hi: "नदी" }
    ],
    correct: {
      en: "Tap",
      hi: "नल"
    },
    explanation: {
      en: "Taps supply water stored by people.",
      hi: "नल से लोगों द्वारा संग्रहित पानी मिलता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these is NOT a source of water?",
      hi: "इनमें से कौन पानी का स्रोत नहीं है?"
    },
    options: [
      { en: "Well", hi: "कुआँ" },
      { en: "Lake", hi: "झील" },
      { en: "Car", hi: "कार" },
      { en: "River", hi: "नदी" }
    ],
    correct: {
      en: "Car",
      hi: "कार"
    },
    explanation: {
      en: "Car is not a source of water.",
      hi: "कार पानी का स्रोत नहीं है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where can we collect rainwater?",
      hi: "हम बारिश का पानी कहाँ इकट्ठा कर सकते हैं?"
    },
    options: [
      { en: "Roof", hi: "छत" },
      { en: "Road", hi: "सड़क" },
      { en: "Window", hi: "खिड़की" },
      { en: "Chair", hi: "कुर्सी" }
    ],
    correct: {
      en: "Roof",
      hi: "छत"
    },
    explanation: {
      en: "Rainwater is often collected from rooftops.",
      hi: "बारिश का पानी आमतौर पर छत से इकट्ठा किया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these stores groundwater?",
      hi: "इनमें से कौन भूजल को संग्रहित करता है?"
    },
    options: [
      { en: "Bucket", hi: "बाल्टी" },
      { en: "Tank", hi: "टैंक" },
      { en: "Well", hi: "कुआँ" },
      { en: "Pipe", hi: "पाइप" }
    ],
    correct: {
      en: "Well",
      hi: "कुआँ"
    },
    explanation: {
      en: "Wells are dug to collect groundwater.",
      hi: "भूजल को इकट्ठा करने के लिए कुएँ खोदे जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which is a natural water source?",
      hi: "इनमें से कौन प्राकृतिक जल स्रोत है?"
    },
    options: [
      { en: "Bottled water", hi: "बोतलबंद पानी" },
      { en: "Tap", hi: "नल" },
      { en: "Rain", hi: "वर्षा" },
      { en: "Filter", hi: "फिल्टर" }
    ],
    correct: {
      en: "Rain",
      hi: "वर्षा"
    },
    explanation: {
      en: "Rain is one of the main natural sources of water.",
      hi: "वर्षा पानी का एक प्रमुख प्राकृतिक स्रोत है।"
    }
  },
  {
    id: 8,
    question: {
      en: "From where do rivers get their water?",
      hi: "नदियों को पानी कहाँ से मिलता है?"
    },
    options: [
      { en: "Mountains and rain", hi: "पहाड़ों और बारिश से" },
      { en: "Cars", hi: "कारों से" },
      { en: "Fans", hi: "पंखों से" },
      { en: "Lights", hi: "लाइट से" }
    ],
    correct: {
      en: "Mountains and rain",
      hi: "पहाड़ों और बारिश से"
    },
    explanation: {
      en: "Rivers start from mountains and rain feeds them.",
      hi: "नदियाँ पहाड़ों से निकलती हैं और बारिश से भरती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following provides drinking water?",
      hi: "निम्न में से कौन पीने का पानी प्रदान करता है?"
    },
    options: [
      { en: "Lake", hi: "झील" },
      { en: "Ocean", hi: "समुद्र" },
      { en: "Sea", hi: "सागर" },
      { en: "Mud", hi: "कीचड़" }
    ],
    correct: {
      en: "Lake",
      hi: "झील"
    },
    explanation: {
      en: "Freshwater lakes provide drinking water.",
      hi: "झीलें पीने योग्य ताजे पानी का स्रोत होती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is a source of water?",
      hi: "इनमें से कौन पानी का एक स्रोत है?"
    },
    options: [
      { en: "Rain", hi: "वर्षा" },
      { en: "Well", hi: "कुआँ" },
      { en: "Tap", hi: "नल" },
      { en: "All of these", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "Rain, wells, and taps are all water sources.",
      hi: "वर्षा, कुएँ और नल सभी जल स्रोत हैं।"
    }
  }
];

export default sourcesOfWater;
