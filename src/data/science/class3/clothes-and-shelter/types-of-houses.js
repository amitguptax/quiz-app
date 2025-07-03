const typesOfHouses = [
  {
    id: 1,
    question: {
      en: "Which of the following is a permanent house?",
      hi: "निम्न में से कौन एक पक्का मकान है?"
    },
    options: [
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Igloo", hi: "इग्लू" },
      { en: "Bungalow", hi: "बंगला" },
      { en: "Tent", hi: "तंबू" }
    ],
    correct: {
      en: "Bungalow",
      hi: "बंगला"
    },
    explanation: {
      en: "A bungalow is a permanent house made of bricks and cement.",
      hi: "बंगला ईंट और सीमेंट से बना स्थायी घर होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is a temporary house made of cloth called?",
      hi: "कपड़े से बना अस्थायी घर क्या कहलाता है?"
    },
    options: [
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Tent", hi: "तंबू" },
      { en: "Flat", hi: "फ्लैट" },
      { en: "Cottage", hi: "झोंपड़ी" }
    ],
    correct: {
      en: "Tent",
      hi: "तंबू"
    },
    explanation: {
      en: "A tent is a temporary shelter made of cloth, used in camping.",
      hi: "तंबू कपड़े से बना अस्थायी घर होता है, जिसे कैंपिंग में इस्तेमाल किया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Where do Eskimos live?",
      hi: "एस्किमो लोग कहाँ रहते हैं?"
    },
    options: [
      { en: "Igloo", hi: "इग्लू" },
      { en: "Cottage", hi: "झोंपड़ी" },
      { en: "Tent", hi: "तंबू" },
      { en: "Bungalow", hi: "बंगला" }
    ],
    correct: {
      en: "Igloo",
      hi: "इग्लू"
    },
    explanation: {
      en: "Eskimos live in igloos made of ice blocks.",
      hi: "एस्किमो लोग बर्फ की ईंटों से बने इग्लू में रहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which house is built on water?",
      hi: "पानी पर बना घर कौन सा होता है?"
    },
    options: [
      { en: "Houseboat", hi: "हाउसबोट" },
      { en: "Tree house", hi: "ट्री हाउस" },
      { en: "Cottage", hi: "झोंपड़ी" },
      { en: "Hut", hi: "झोपड़ी" }
    ],
    correct: {
      en: "Houseboat",
      hi: "हाउसबोट"
    },
    explanation: {
      en: "Houseboats float on water and are used for living.",
      hi: "हाउसबोट पानी पर तैरती है और इसमें लोग रहते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What type of house is built on tall wooden poles?",
      hi: "लंबे लकड़ी के खंभों पर किस प्रकार का घर बनाया जाता है?"
    },
    options: [
      { en: "Stilt house", hi: "ऊंचे खंभों वाला घर" },
      { en: "Tent", hi: "तंबू" },
      { en: "Flat", hi: "फ्लैट" },
      { en: "Bungalow", hi: "बंगला" }
    ],
    correct: {
      en: "Stilt house",
      hi: "ऊंचे खंभों वाला घर"
    },
    explanation: {
      en: "Stilt houses are built on poles to avoid flooding in rainy areas.",
      hi: "बारिश वाले क्षेत्रों में बाढ़ से बचने के लिए खंभों पर घर बनाए जाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which house is made using mud and straw?",
      hi: "मिट्टी और पुआल से बना घर कौन सा होता है?"
    },
    options: [
      { en: "Hut", hi: "झोपड़ी" },
      { en: "Flat", hi: "फ्लैट" },
      { en: "Bungalow", hi: "बंगला" },
      { en: "Tree house", hi: "ट्री हाउस" }
    ],
    correct: {
      en: "Hut",
      hi: "झोपड़ी"
    },
    explanation: {
      en: "Huts are temporary houses made from mud, straw, and bamboo.",
      hi: "झोपड़ियाँ मिट्टी, पुआल और बांस से बनी अस्थायी घर होती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What kind of house is found in big cities?",
      hi: "बड़े शहरों में किस प्रकार के घर पाए जाते हैं?"
    },
    options: [
      { en: "Flats", hi: "फ्लैट्स" },
      { en: "Huts", hi: "झोपड़ियाँ" },
      { en: "Igloos", hi: "इग्लू" },
      { en: "Tents", hi: "तंबू" }
    ],
    correct: {
      en: "Flats",
      hi: "फ्लैट्स"
    },
    explanation: {
      en: "Flats are tall buildings with many families living in different units.",
      hi: "फ्लैट्स बहुमंजिला इमारतें होती हैं जिनमें कई परिवार रहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is a house built on trees?",
      hi: "इनमें से कौन सा घर पेड़ों पर बनाया जाता है?"
    },
    options: [
      { en: "Tree house", hi: "ट्री हाउस" },
      { en: "Igloo", hi: "इग्लू" },
      { en: "Tent", hi: "तंबू" },
      { en: "Flat", hi: "फ्लैट" }
    ],
    correct: {
      en: "Tree house",
      hi: "ट्री हाउस"
    },
    explanation: {
      en: "Tree houses are built on tree branches for fun or safety.",
      hi: "ट्री हाउस पेड़ की शाखाओं पर बनाए जाते हैं, अक्सर मनोरंजन या सुरक्षा के लिए।"
    }
  },
  {
    id: 9,
    question: {
      en: "What are buildings with many apartments called?",
      hi: "कई अपार्टमेंट वाली इमारतें क्या कहलाती हैं?"
    },
    options: [
      { en: "Flats", hi: "फ्लैट्स" },
      { en: "Huts", hi: "झोपड़ियाँ" },
      { en: "Stilt houses", hi: "ऊँचे खंभों वाले घर" },
      { en: "Tents", hi: "तंबू" }
    ],
    correct: {
      en: "Flats",
      hi: "फ्लैट्स"
    },
    explanation: {
      en: "Flats are part of tall buildings where many people live.",
      hi: "फ्लैट्स ऊँची इमारतों का हिस्सा होते हैं जहाँ कई लोग रहते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do people build stilt houses in flood-prone areas?",
      hi: "बाढ़ वाले क्षेत्रों में लोग ऊँचे खंभों वाले घर क्यों बनाते हैं?"
    },
    options: [
      { en: "To avoid flood water", hi: "बाढ़ के पानी से बचने के लिए" },
      { en: "For decoration", hi: "सजावट के लिए" },
      { en: "To save money", hi: "पैसे बचाने के लिए" },
      { en: "Because it's easy", hi: "क्योंकि यह आसान है" }
    ],
    correct: {
      en: "To avoid flood water",
      hi: "बाढ़ के पानी से बचने के लिए"
    },
    explanation: {
      en: "Stilt houses are raised above ground level to prevent flood damage.",
      hi: "ऊँचे खंभों पर बने घर बाढ़ से सुरक्षा प्रदान करते हैं।"
    }
  }
];

export default typesOfHouses;
