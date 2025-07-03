const foodTypes = [
  {
    id: 1,
    question: {
      en: "Which of these is an energy-giving food?",
      hi: "इनमें से कौन ऊर्जा प्रदान करने वाला भोजन है?"
    },
    options: [
      { en: "Rice", hi: "चावल" },
      { en: "Spinach", hi: "पालक" },
      { en: "Milk", hi: "दूध" },
      { en: "Carrot", hi: "गाजर" }
    ],
    correct: {
      en: "Rice",
      hi: "चावल"
    },
    explanation: {
      en: "Rice gives us energy to work and play.",
      hi: "चावल हमें काम और खेलने के लिए ऊर्जा देता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these foods helps in building our body?",
      hi: "इनमें से कौन सा भोजन हमारे शरीर के निर्माण में मदद करता है?"
    },
    options: [
      { en: "Pulses", hi: "दालें" },
      { en: "Butter", hi: "मक्खन" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Bread", hi: "ब्रेड" }
    ],
    correct: {
      en: "Pulses",
      hi: "दालें"
    },
    explanation: {
      en: "Pulses provide protein which helps build muscles.",
      hi: "दालें प्रोटीन देती हैं जो मांसपेशियों के निर्माण में सहायक हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is a protective food?",
      hi: "निम्न में से कौन सुरक्षात्मक भोजन है?"
    },
    options: [
      { en: "Fruits", hi: "फल" },
      { en: "Butter", hi: "मक्खन" },
      { en: "Cheese", hi: "पनीर" },
      { en: "Rice", hi: "चावल" }
    ],
    correct: {
      en: "Fruits",
      hi: "फल"
    },
    explanation: {
      en: "Fruits protect us from diseases as they have vitamins.",
      hi: "फल हमें बीमारियों से बचाते हैं क्योंकि इनमें विटामिन होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which food group gives us proteins?",
      hi: "कौन सा खाद्य समूह हमें प्रोटीन देता है?"
    },
    options: [
      { en: "Pulses and eggs", hi: "दालें और अंडे" },
      { en: "Fruits", hi: "फल" },
      { en: "Sweets", hi: "मिठाइयाँ" },
      { en: "Biscuits", hi: "बिस्कुट" }
    ],
    correct: {
      en: "Pulses and eggs",
      hi: "दालें और अंडे"
    },
    explanation: {
      en: "Proteins are body-building foods found in pulses and eggs.",
      hi: "प्रोटीन शरीर बनाने वाले खाद्य पदार्थ हैं जो दालों और अंडों में मिलते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Milk is a complete food because:",
      hi: "दूध एक संपूर्ण भोजन है क्योंकि:"
    },
    options: [
      { en: "It has all nutrients", hi: "इसमें सभी पोषक तत्व होते हैं" },
      { en: "It is white in color", hi: "यह सफेद रंग का होता है" },
      { en: "It is sweet", hi: "यह मीठा होता है" },
      { en: "It is easy to drink", hi: "यह पीने में आसान होता है" }
    ],
    correct: {
      en: "It has all nutrients",
      hi: "इसमें सभी पोषक तत्व होते हैं"
    },
    explanation: {
      en: "Milk contains protein, calcium, vitamins, and minerals.",
      hi: "दूध में प्रोटीन, कैल्शियम, विटामिन और खनिज होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Carrots and spinach are rich in:",
      hi: "गाजर और पालक किससे भरपूर होते हैं?"
    },
    options: [
      { en: "Vitamins and minerals", hi: "विटामिन और खनिज" },
      { en: "Fats", hi: "वसा" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Protein", hi: "प्रोटीन" }
    ],
    correct: {
      en: "Vitamins and minerals",
      hi: "विटामिन और खनिज"
    },
    explanation: {
      en: "Carrots and spinach help protect our body with nutrients.",
      hi: "गाजर और पालक हमारे शरीर की रक्षा के लिए पोषक तत्व देते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Fats give us:",
      hi: "वसा हमें क्या देता है?"
    },
    options: [
      { en: "Energy", hi: "ऊर्जा" },
      { en: "Color", hi: "रंग" },
      { en: "Protein", hi: "प्रोटीन" },
      { en: "Minerals", hi: "खनिज" }
    ],
    correct: {
      en: "Energy",
      hi: "ऊर्जा"
    },
    explanation: {
      en: "Fats are a source of energy when used in the right amount.",
      hi: "वसा सीमित मात्रा में ऊर्जा का अच्छा स्रोत होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which one is NOT a body-building food?",
      hi: "निम्न में से कौन शरीर बनाने वाला भोजन नहीं है?"
    },
    options: [
      { en: "Bread", hi: "ब्रेड" },
      { en: "Meat", hi: "मांस" },
      { en: "Paneer", hi: "पनीर" },
      { en: "Eggs", hi: "अंडे" }
    ],
    correct: {
      en: "Bread",
      hi: "ब्रेड"
    },
    explanation: {
      en: "Bread gives energy but does not help in body building.",
      hi: "ब्रेड ऊर्जा देता है लेकिन शरीर निर्माण में मदद नहीं करता।"
    }
  },
  {
    id: 9,
    question: {
      en: "What do we get from sugar and honey?",
      hi: "हमें चीनी और शहद से क्या मिलता है?"
    },
    options: [
      { en: "Energy", hi: "ऊर्जा" },
      { en: "Protein", hi: "प्रोटीन" },
      { en: "Minerals", hi: "खनिज" },
      { en: "Fiber", hi: "रेशा" }
    ],
    correct: {
      en: "Energy",
      hi: "ऊर्जा"
    },
    explanation: {
      en: "Sugar and honey are energy-giving foods.",
      hi: "चीनी और शहद ऊर्जा प्रदान करने वाले खाद्य पदार्थ हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do we eat different types of food?",
      hi: "हम विभिन्न प्रकार का भोजन क्यों खाते हैं?"
    },
    options: [
      { en: "To stay healthy", hi: "स्वस्थ रहने के लिए" },
      { en: "For taste only", hi: "सिर्फ स्वाद के लिए" },
      { en: "To eat more", hi: "ज्यादा खाने के लिए" },
      { en: "To sleep better", hi: "अच्छी नींद के लिए" }
    ],
    correct: {
      en: "To stay healthy",
      hi: "स्वस्थ रहने के लिए"
    },
    explanation: {
      en: "Different foods give us different nutrients for health.",
      hi: "विभिन्न खाद्य पदार्थ हमें विभिन्न पोषक तत्व देते हैं ताकि हम स्वस्थ रहें।"
    }
  }
];

export default foodTypes;
