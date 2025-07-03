const bloodCirculation = [
  {
    id: 1,
    question: {
      en: "What is the main organ of the circulatory system?",
      hi: "रक्त परिसंचरण तंत्र का मुख्य अंग कौन सा है?"
    },
    options: [
      { en: "Liver", hi: "यकृत" },
      { en: "Brain", hi: "मस्तिष्क" },
      { en: "Heart", hi: "हृदय" },
      { en: "Lungs", hi: "फेफड़े" }
    ],
    correct: {
      en: "Heart",
      hi: "हृदय"
    },
    explanation: {
      en: "The heart pumps blood to all parts of the body.",
      hi: "हृदय पूरे शरीर में रक्त को पंप करता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the function of red blood cells (RBCs)?",
      hi: "लाल रक्त कणिकाओं (RBCs) का कार्य क्या है?"
    },
    options: [
      { en: "Fight diseases", hi: "रोगों से लड़ना" },
      { en: "Clot blood", hi: "रक्त को जमाना" },
      { en: "Carry oxygen", hi: "ऑक्सीजन ले जाना" },
      { en: "Digest food", hi: "भोजन को पचाना" }
    ],
    correct: {
      en: "Carry oxygen",
      hi: "ऑक्सीजन ले जाना"
    },
    explanation: {
      en: "RBCs transport oxygen from lungs to body tissues.",
      hi: "RBCs फेफड़ों से शरीर के अंगों तक ऑक्सीजन ले जाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which blood cells help in fighting infections?",
      hi: "कौन सी रक्त कोशिकाएँ संक्रमण से लड़ने में मदद करती हैं?"
    },
    options: [
      { en: "Red blood cells", hi: "लाल रक्त कणिकाएँ" },
      { en: "White blood cells", hi: "श्वेत रक्त कणिकाएँ" },
      { en: "Platelets", hi: "प्लेटलेट्स" },
      { en: "Plasma", hi: "प्लाज़्मा" }
    ],
    correct: {
      en: "White blood cells",
      hi: "श्वेत रक्त कणिकाएँ"
    },
    explanation: {
      en: "WBCs protect the body from diseases.",
      hi: "WBCs शरीर को रोगों से बचाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the function of platelets?",
      hi: "प्लेटलेट्स का कार्य क्या है?"
    },
    options: [
      { en: "Clot blood", hi: "रक्त का थक्का बनाना" },
      { en: "Transport food", hi: "भोजन का परिवहन" },
      { en: "Remove waste", hi: "अपशिष्ट निकालना" },
      { en: "Provide energy", hi: "ऊर्जा प्रदान करना" }
    ],
    correct: {
      en: "Clot blood",
      hi: "रक्त का थक्का बनाना"
    },
    explanation: {
      en: "Platelets help in blood clotting to prevent bleeding.",
      hi: "प्लेटलेट्स रक्त को जमाने में मदद करते हैं जिससे खून बहना रुकता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which blood vessel carries oxygen-rich blood from the heart?",
      hi: "कौन सी रक्त वाहिनी हृदय से ऑक्सीजन युक्त रक्त ले जाती है?"
    },
    options: [
      { en: "Vein", hi: "शिरा" },
      { en: "Artery", hi: "धमनी" },
      { en: "Capillary", hi: "केशिका" },
      { en: "Valve", hi: "वाल्व" }
    ],
    correct: {
      en: "Artery",
      hi: "धमनी"
    },
    explanation: {
      en: "Arteries carry oxygen-rich blood from the heart to the body.",
      hi: "धमनियाँ हृदय से शरीर तक ऑक्सीजन युक्त रक्त ले जाती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the fluid part of blood called?",
      hi: "रक्त का तरल भाग क्या कहलाता है?"
    },
    options: [
      { en: "Platelets", hi: "प्लेटलेट्स" },
      { en: "Plasma", hi: "प्लाज़्मा" },
      { en: "RBC", hi: "RBC" },
      { en: "WBC", hi: "WBC" }
    ],
    correct: {
      en: "Plasma",
      hi: "प्लाज़्मा"
    },
    explanation: {
      en: "Plasma is the yellowish fluid in which blood cells float.",
      hi: "प्लाज़्मा पीला तरल होता है जिसमें रक्त कणिकाएँ तैरती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How many chambers does the human heart have?",
      hi: "मानव हृदय में कितने कक्ष होते हैं?"
    },
    options: [
      { en: "2", hi: "2" },
      { en: "3", hi: "3" },
      { en: "4", hi: "4" },
      { en: "5", hi: "5" }
    ],
    correct: {
      en: "4",
      hi: "4"
    },
    explanation: {
      en: "The human heart has four chambers: 2 atria and 2 ventricles.",
      hi: "मानव हृदय में चार कक्ष होते हैं: 2 अलिंद और 2 निलय।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the main function of the circulatory system?",
      hi: "रक्त परिसंचरण तंत्र का मुख्य कार्य क्या है?"
    },
    options: [
      { en: "Control body movement", hi: "शरीर की गति को नियंत्रित करना" },
      { en: "Transport materials", hi: "पदार्थों का परिवहन करना" },
      { en: "Send messages", hi: "संदेश भेजना" },
      { en: "Provide structure", hi: "संरचना प्रदान करना" }
    ],
    correct: {
      en: "Transport materials",
      hi: "पदार्थों का परिवहन करना"
    },
    explanation: {
      en: "The circulatory system transports oxygen, food, and waste in the body.",
      hi: "रक्त परिसंचरण तंत्र शरीर में ऑक्सीजन, भोजन और अपशिष्ट का परिवहन करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which organ is responsible for pumping blood?",
      hi: "रक्त पंप करने का कार्य किस अंग का है?"
    },
    options: [
      { en: "Lungs", hi: "फेफड़े" },
      { en: "Brain", hi: "मस्तिष्क" },
      { en: "Heart", hi: "हृदय" },
      { en: "Kidney", hi: "गुर्दा" }
    ],
    correct: {
      en: "Heart",
      hi: "हृदय"
    },
    explanation: {
      en: "The heart pumps blood throughout the body.",
      hi: "हृदय पूरे शरीर में रक्त पंप करता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which blood vessels connect arteries and veins?",
      hi: "कौन सी रक्त वाहिनियाँ धमनियों और शिराओं को जोड़ती हैं?"
    },
    options: [
      { en: "Capillaries", hi: "केशिकाएँ" },
      { en: "Arteries", hi: "धमनियाँ" },
      { en: "Veins", hi: "शिराएँ" },
      { en: "Nerves", hi: "तंत्रिकाएँ" }
    ],
    correct: {
      en: "Capillaries",
      hi: "केशिकाएँ"
    },
    explanation: {
      en: "Capillaries are thin vessels that connect arteries and veins.",
      hi: "केशिकाएँ पतली रक्त वाहिनियाँ होती हैं जो धमनियों और शिराओं को जोड़ती हैं।"
    }
  }
];

export default bloodCirculation;
