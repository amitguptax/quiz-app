const typesOfRespiration = [
  {
    id: 1,
    question: {
      en: "What is aerobic respiration?",
      hi: "वायवीय श्वसन क्या है?"
    },
    options: [
      { en: "Respiration without oxygen", hi: "ऑक्सीजन के बिना श्वसन" },
      { en: "Respiration with oxygen", hi: "ऑक्सीजन के साथ श्वसन" },
      { en: "Only in plants", hi: "केवल पौधों में" },
      { en: "Only in fungi", hi: "केवल कवक में" }
    ],
    correct: {
      en: "Respiration with oxygen",
      hi: "ऑक्सीजन के साथ श्वसन"
    },
    explanation: {
      en: "Aerobic respiration is the process of producing energy with the help of oxygen.",
      hi: "वायवीय श्वसन वह प्रक्रिया है जिसमें ऑक्सीजन की सहायता से ऊर्जा प्राप्त होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is an example of anaerobic respiration?",
      hi: "निम्न में से कौन अवायवीय श्वसन का उदाहरण है?"
    },
    options: [
      { en: "Yeast making alcohol", hi: "यीस्ट द्वारा अल्कोहल बनाना" },
      { en: "Human breathing", hi: "मानव श्वसन" },
      { en: "Plants in sunlight", hi: "धूप में पौधे" },
      { en: "Insects flying", hi: "उड़ते कीड़े" }
    ],
    correct: {
      en: "Yeast making alcohol",
      hi: "यीस्ट द्वारा अल्कोहल बनाना"
    },
    explanation: {
      en: "Yeast performs anaerobic respiration and produces alcohol.",
      hi: "यीस्ट अवायवीय श्वसन करता है और अल्कोहल उत्पन्न करता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which gas is used in aerobic respiration?",
      hi: "वायवीय श्वसन में कौन सी गैस प्रयोग होती है?"
    },
    options: [
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Oxygen is essential for aerobic respiration.",
      hi: "ऑक्सीजन वायवीय श्वसन के लिए आवश्यक होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is produced during anaerobic respiration in muscles?",
      hi: "मांसपेशियों में अवायवीय श्वसन के दौरान क्या बनता है?"
    },
    options: [
      { en: "Alcohol", hi: "अल्कोहल" },
      { en: "Lactic acid", hi: "लैक्टिक एसिड" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Glucose", hi: "ग्लूकोज़" }
    ],
    correct: {
      en: "Lactic acid",
      hi: "लैक्टिक एसिड"
    },
    explanation: {
      en: "Lactic acid is produced in muscles during anaerobic respiration.",
      hi: "अवायवीय श्वसन के दौरान मांसपेशियों में लैक्टिक एसिड बनता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these organisms can survive without oxygen?",
      hi: "इनमें से कौन सा जीव बिना ऑक्सीजन के जीवित रह सकता है?"
    },
    options: [
      { en: "Fish", hi: "मछली" },
      { en: "Bird", hi: "पक्षी" },
      { en: "Yeast", hi: "यीस्ट" },
      { en: "Human", hi: "मनुष्य" }
    ],
    correct: {
      en: "Yeast",
      hi: "यीस्ट"
    },
    explanation: {
      en: "Yeast can perform anaerobic respiration and survive without oxygen.",
      hi: "यीस्ट अवायवीय श्वसन करके बिना ऑक्सीजन के जीवित रह सकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which respiration gives more energy?",
      hi: "कौन सा श्वसन अधिक ऊर्जा देता है?"
    },
    options: [
      { en: "Anaerobic", hi: "अवायवीय" },
      { en: "Aerobic", hi: "वायवीय" },
      { en: "Both give same", hi: "दोनों समान ऊर्जा देते हैं" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Aerobic",
      hi: "वायवीय"
    },
    explanation: {
      en: "Aerobic respiration releases more energy than anaerobic respiration.",
      hi: "वायवीय श्वसन, अवायवीय श्वसन की तुलना में अधिक ऊर्जा उत्पन्न करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which organism uses anaerobic respiration in baking?",
      hi: "बेकिंग में कौन सा जीव अवायवीय श्वसन करता है?"
    },
    options: [
      { en: "Bacteria", hi: "बैक्टीरिया" },
      { en: "Mould", hi: "फफूंदी" },
      { en: "Yeast", hi: "यीस्ट" },
      { en: "Frog", hi: "मेंढक" }
    ],
    correct: {
      en: "Yeast",
      hi: "यीस्ट"
    },
    explanation: {
      en: "Yeast is used in baking and performs anaerobic respiration.",
      hi: "बेकिंग में यीस्ट का उपयोग होता है और यह अवायवीय श्वसन करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "In which part of the body does anaerobic respiration occur during heavy exercise?",
      hi: "भारी व्यायाम के दौरान शरीर के किस भाग में अवायवीय श्वसन होता है?"
    },
    options: [
      { en: "Brain", hi: "मस्तिष्क" },
      { en: "Muscles", hi: "मांसपेशियाँ" },
      { en: "Heart", hi: "हृदय" },
      { en: "Lungs", hi: "फेफड़े" }
    ],
    correct: {
      en: "Muscles",
      hi: "मांसपेशियाँ"
    },
    explanation: {
      en: "Anaerobic respiration occurs in muscles when oxygen is low.",
      hi: "जब ऑक्सीजन की कमी होती है, तो मांसपेशियों में अवायवीय श्वसन होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which by-product is common in both aerobic and anaerobic respiration?",
      hi: "वायवीय और अवायवीय श्वसन में कौन सा उप-उत्पाद सामान्य है?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Alcohol", hi: "अल्कोहल" },
      { en: "Lactic acid", hi: "लैक्टिक एसिड" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" }
    ],
    correct: {
      en: "Carbon dioxide",
      hi: "कार्बन डाइऑक्साइड"
    },
    explanation: {
      en: "Carbon dioxide is released in both types of respiration (mostly).",
      hi: "कार्बन डाइऑक्साइड दोनों प्रकार के श्वसन में निकलती है (अधिकतर)।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the main purpose of respiration?",
      hi: "श्वसन का मुख्य उद्देश्य क्या है?"
    },
    options: [
      { en: "To breathe", hi: "साँस लेना" },
      { en: "To circulate blood", hi: "रक्त प्रवाहित करना" },
      { en: "To get energy", hi: "ऊर्जा प्राप्त करना" },
      { en: "To remove waste", hi: "अपशिष्ट हटाना" }
    ],
    correct: {
      en: "To get energy",
      hi: "ऊर्जा प्राप्त करना"
    },
    explanation: {
      en: "The main purpose of respiration is to release energy from food.",
      hi: "श्वसन का मुख्य उद्देश्य भोजन से ऊर्जा प्राप्त करना है।"
    }
  }
];

export default typesOfRespiration;
