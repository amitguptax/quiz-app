const questions = [
  {
    id: 1,
    question: {
      en: "What do we get from plants to eat?",
      hi: "हमें खाने के लिए पौधों से क्या मिलता है?"
    },
    options: [
      { en: "Fruits and vegetables", hi: "फल और सब्ज़ियाँ" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Glass", hi: "काँच" },
      { en: "Stones", hi: "पत्थर" }
    ],
    correct: {
      en: "Fruits and vegetables",
      hi: "फल और सब्ज़ियाँ"
    },
    explanation: {
      en: "Fruits and vegetables come from plants.",
      hi: "फल और सब्ज़ियाँ पौधों से मिलती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which part of the plant gives us oxygen?",
      hi: "पौधे का कौन सा भाग हमें ऑक्सीजन देता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ती" },
      { en: "Stem", hi: "तना" },
      { en: "Root", hi: "जड़" },
      { en: "Flower", hi: "फूल" }
    ],
    correct: {
      en: "Leaf",
      hi: "पत्ती"
    },
    explanation: {
      en: "Leaves make oxygen during photosynthesis.",
      hi: "पत्तियाँ प्रकाश संश्लेषण के दौरान ऑक्सीजन बनाती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is made from plants?",
      hi: "इनमें से क्या पौधों से बनाया जाता है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Iron", hi: "लोहा" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Copper", hi: "तांबा" }
    ],
    correct: {
      en: "Wood",
      hi: "लकड़ी"
    },
    explanation: {
      en: "Wood comes from trees, which are plants.",
      hi: "लकड़ी पेड़ों से मिलती है, जो पौधे हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What do we get from plants to build houses?",
      hi: "हम घर बनाने के लिए पौधों से क्या प्राप्त करते हैं?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Bricks", hi: "ईंटें" },
      { en: "Cement", hi: "सीमेंट" },
      { en: "Glass", hi: "काँच" }
    ],
    correct: {
      en: "Wood",
      hi: "लकड़ी"
    },
    explanation: {
      en: "Wood from trees is used in construction.",
      hi: "पेड़ों से मिलने वाली लकड़ी का उपयोग निर्माण में होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What do plants give that we use as medicine?",
      hi: "पौधे हमें क्या देते हैं जो हम दवा के रूप में इस्तेमाल करते हैं?"
    },
    options: [
      { en: "Herbs", hi: "जड़ी-बूटियाँ" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Water", hi: "पानी" },
      { en: "Sand", hi: "रेत" }
    ],
    correct: {
      en: "Herbs",
      hi: "जड़ी-बूटियाँ"
    },
    explanation: {
      en: "Many herbs from plants are used in medicines.",
      hi: "पौधों से प्राप्त कई जड़ी-बूटियाँ दवाओं में उपयोग होती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is a plant product?",
      hi: "निम्न में से कौन पौधे से प्राप्त होता है?"
    },
    options: [
      { en: "Cotton", hi: "कपास" },
      { en: "Iron", hi: "लोहा" },
      { en: "Coal", hi: "कोयला" },
      { en: "Petrol", hi: "पेट्रोल" }
    ],
    correct: {
      en: "Cotton",
      hi: "कपास"
    },
    explanation: {
      en: "Cotton is obtained from cotton plants.",
      hi: "कपास कपास के पौधों से प्राप्त होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which drink do we get from plants?",
      hi: "पौधों से हमें कौन सा पेय पदार्थ मिलता है?"
    },
    options: [
      { en: "Tea", hi: "चाय" },
      { en: "Milk", hi: "दूध" },
      { en: "Water", hi: "पानी" },
      { en: "Juice", hi: "रस" }
    ],
    correct: {
      en: "Tea",
      hi: "चाय"
    },
    explanation: {
      en: "Tea leaves come from plants.",
      hi: "चाय के पत्ते पौधों से मिलते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What helps to make clothes from plants?",
      hi: "पौधों से कपड़े बनाने में क्या मदद करता है?"
    },
    options: [
      { en: "Cotton plant", hi: "कपास का पौधा" },
      { en: "Iron rod", hi: "लोहे की छड़" },
      { en: "Plastic pipe", hi: "प्लास्टिक पाइप" },
      { en: "Glass", hi: "काँच" }
    ],
    correct: {
      en: "Cotton plant",
      hi: "कपास का पौधा"
    },
    explanation: {
      en: "Cotton from cotton plants is used to make cloth.",
      hi: "कपास के पौधे से कपड़े बनाने के लिए कपास मिलती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is a use of plants?",
      hi: "इनमें से कौन पौधों का एक उपयोग है?"
    },
    options: [
      { en: "Giving food", hi: "भोजन देना" },
      { en: "Making machines", hi: "मशीन बनाना" },
      { en: "Building roads", hi: "सड़क बनाना" },
      { en: "Digging land", hi: "भूमि खोदना" }
    ],
    correct: {
      en: "Giving food",
      hi: "भोजन देना"
    },
    explanation: {
      en: "Plants provide food to humans and animals.",
      hi: "पौधे मनुष्यों और जानवरों को भोजन प्रदान करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "How do plants help the environment?",
      hi: "पौधे पर्यावरण की कैसे मदद करते हैं?"
    },
    options: [
      { en: "Give oxygen and clean air", hi: "ऑक्सीजन और स्वच्छ हवा देना" },
      { en: "Make noise", hi: "शोर करना" },
      { en: "Use electricity", hi: "बिजली का उपयोग करना" },
      { en: "Pollute water", hi: "पानी को प्रदूषित करना" }
    ],
    correct: {
      en: "Give oxygen and clean air",
      hi: "ऑक्सीजन और स्वच्छ हवा देना"
    },
    explanation: {
      en: "Plants give oxygen and help keep air clean.",
      hi: "पौधे ऑक्सीजन देते हैं और हवा को स्वच्छ रखते हैं।"
    }
  }
];

export default questions;
