const science = [
  {
    id: 1,
    question: {
      en: "What is the chemical symbol of water?",
      hi: "पानी का रासायनिक संकेत क्या है?"
    },
    options: {
      en: ["H2O", "O2", "CO2", "HO2"],
      hi: ["H2O", "O2", "CO2", "HO2"]
    },
    correctAnswer: "H2O",
    explanation: {
      en: "Water is made up of two hydrogen atoms and one oxygen atom.",
      hi: "पानी दो हाइड्रोजन और एक ऑक्सीजन परमाणु से मिलकर बना होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which gas is essential for human respiration?",
      hi: "मानव श्वसन के लिए कौन सी गैस आवश्यक है?"
    },
    options: {
      en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"]
    },
    correctAnswer: "Oxygen",
    explanation: {
      en: "Humans need oxygen to break down glucose and produce energy.",
      hi: "मानवों को ग्लूकोज को तोड़कर ऊर्जा प्राप्त करने के लिए ऑक्सीजन की आवश्यकता होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What part of the plant conducts photosynthesis?",
      hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?"
    },
    options: {
      en: ["Root", "Stem", "Leaf", "Flower"],
      hi: ["जड़", "तना", "पत्ती", "फूल"]
    },
    correctAnswer: "Leaf",
    explanation: {
      en: "Leaves contain chlorophyll which helps in photosynthesis.",
      hi: "पत्तियों में क्लोरोफिल होता है जो प्रकाश संश्लेषण में सहायक होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the unit of force?",
      hi: "बल की इकाई क्या है?"
    },
    options: {
      en: ["Pascal", "Joule", "Newton", "Watt"],
      hi: ["पास्कल", "जूल", "न्यूटन", "वाट"]
    },
    correctAnswer: "Newton",
    explanation: {
      en: "The SI unit of force is Newton (N).",
      hi: "बल की SI इकाई न्यूटन (N) है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Who invented the light bulb?",
      hi: "बल्ब का आविष्कार किसने किया?"
    },
    options: {
      en: ["Albert Einstein", "Thomas Edison", "Isaac Newton", "Michael Faraday"],
      hi: ["आल्बर्ट आइंस्टीन", "थॉमस एडिसन", "आइजैक न्यूटन", "माइकल फैराडे"]
    },
    correctAnswer: "Thomas Edison",
    explanation: {
      en: "Thomas Edison is credited with inventing the practical electric light bulb.",
      hi: "थॉमस एडिसन को व्यावहारिक विद्युत बल्ब के आविष्कारक के रूप में जाना जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What organ in the human body filters blood?",
      hi: "मानव शरीर में कौन सा अंग रक्त को फ़िल्टर करता है?"
    },
    options: {
      en: ["Heart", "Liver", "Kidney", "Lungs"],
      hi: ["हृदय", "यकृत", "गुर्दा", "फेफड़े"]
    },
    correctAnswer: "Kidney",
    explanation: {
      en: "Kidneys remove waste products from the blood.",
      hi: "गुर्दे रक्त से अपशिष्ट पदार्थों को निकालते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the boiling point of water at sea level?",
      hi: "समुद्र तल पर पानी का क्वथनांक कितना होता है?"
    },
    options: {
      en: ["90°C", "100°C", "110°C", "80°C"],
      hi: ["90°C", "100°C", "110°C", "80°C"]
    },
    correctAnswer: "100°C",
    explanation: {
      en: "At sea level, water boils at 100 degrees Celsius.",
      hi: "समुद्र तल पर पानी 100 डिग्री सेल्सियस पर उबलता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which vitamin is produced in the skin when exposed to sunlight?",
      hi: "सूर्य के प्रकाश में त्वचा में कौन सा विटामिन बनता है?"
    },
    options: {
      en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"]
    },
    correctAnswer: "Vitamin D",
    explanation: {
      en: "Vitamin D is synthesized in the skin under UV light.",
      hi: "विटामिन D त्वचा में पराबैंगनी किरणों की उपस्थिति में बनता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the center of an atom called?",
      hi: "परमाणु के केंद्र को क्या कहा जाता है?"
    },
    options: {
      en: ["Electron", "Proton", "Neutron", "Nucleus"],
      hi: ["इलेक्ट्रॉन", "प्रोटॉन", "न्युट्रॉन", "नाभिक"]
    },
    correctAnswer: "Nucleus",
    explanation: {
      en: "The nucleus contains protons and neutrons at the center of the atom.",
      hi: "नाभिक में परमाणु के केंद्र में प्रोटॉन और न्युट्रॉन होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which planet is known as the Red Planet?",
      hi: "किस ग्रह को लाल ग्रह कहा जाता है?"
    },
    options: {
      en: ["Earth", "Jupiter", "Mars", "Venus"],
      hi: ["पृथ्वी", "बृहस्पति", "मंगल", "शुक्र"]
    },
    correctAnswer: "Mars",
    explanation: {
      en: "Mars appears red due to iron oxide on its surface.",
      hi: "मंगल ग्रह की सतह पर लोहा ऑक्साइड होने के कारण यह लाल दिखाई देता है।"
    }
  },
  // 👇 You can continue similarly up to 20 questions
];

export default science;
