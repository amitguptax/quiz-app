const snakeTypes = [
  {
    id: 1,
    question: {
      en: "Which of the following is a venomous snake?",
      hi: "निम्न में से कौन सा साँप विषैला होता है?"
    },
    options: [
      { en: "Python", hi: "अजगर" },
      { en: "Cobra", hi: "नाग" },
      { en: "Rat snake", hi: "चूहा साँप" },
      { en: "Water snake", hi: "जल साँप" }
    ],
    correct: {
      en: "Cobra",
      hi: "नाग"
    },
    explanation: {
      en: "Cobra is a venomous snake and can inject poison through its fangs.",
      hi: "नाग एक विषैला साँप है और अपने दांतों से ज़हर छोड़ सकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which snake kills its prey by squeezing?",
      hi: "कौन सा साँप अपने शिकार को कुचलकर मारता है?"
    },
    options: [
      { en: "Cobra", hi: "नाग" },
      { en: "Krait", hi: "करैत" },
      { en: "Python", hi: "अजगर" },
      { en: "Viper", hi: "वाइपर" }
    ],
    correct: {
      en: "Python",
      hi: "अजगर"
    },
    explanation: {
      en: "Python is a non-venomous snake that kills its prey by squeezing tightly.",
      hi: "अजगर एक अविषैला साँप है जो अपने शिकार को कस कर मारता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which snake is worshipped in India?",
      hi: "भारत में किस साँप की पूजा की जाती है?"
    },
    options: [
      { en: "Cobra", hi: "नाग" },
      { en: "Python", hi: "अजगर" },
      { en: "Viper", hi: "वाइपर" },
      { en: "Boa", hi: "बोआ" }
    ],
    correct: {
      en: "Cobra",
      hi: "नाग"
    },
    explanation: {
      en: "The Cobra is associated with Lord Shiva and worshipped on Nag Panchami.",
      hi: "नाग भगवान शिव के साथ जुड़ा होता है और नाग पंचमी पर इसकी पूजा होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is a non-venomous snake?",
      hi: "निम्न में से कौन सा साँप अविषैला है?"
    },
    options: [
      { en: "Cobra", hi: "नाग" },
      { en: "Krait", hi: "करैत" },
      { en: "Python", hi: "अजगर" },
      { en: "Russell's viper", hi: "रसेल वाइपर" }
    ],
    correct: {
      en: "Python",
      hi: "अजगर"
    },
    explanation: {
      en: "Python is a non-venomous snake and kills prey by constriction.",
      hi: "अजगर अविषैला होता है और शिकार को कस कर मारता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which snake is most commonly found in rural India?",
      hi: "भारत के ग्रामीण क्षेत्रों में कौन सा साँप आमतौर पर पाया जाता है?"
    },
    options: [
      { en: "Krait", hi: "करैत" },
      { en: "Python", hi: "अजगर" },
      { en: "King cobra", hi: "राज नाग" },
      { en: "Vine snake", hi: "बेल साँप" }
    ],
    correct: {
      en: "Krait",
      hi: "करैत"
    },
    explanation: {
      en: "Krait is one of the common venomous snakes found in rural India.",
      hi: "करैत एक सामान्य विषैला साँप है जो भारत के ग्रामीण क्षेत्रों में पाया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which snake is known for its hood?",
      hi: "कौन सा साँप अपनी फन के लिए जाना जाता है?"
    },
    options: [
      { en: "Cobra", hi: "नाग" },
      { en: "Python", hi: "अजगर" },
      { en: "Viper", hi: "वाइपर" },
      { en: "Rat snake", hi: "चूहा साँप" }
    ],
    correct: {
      en: "Cobra",
      hi: "नाग"
    },
    explanation: {
      en: "The Cobra spreads its hood when threatened.",
      hi: "नाग खतरे के समय अपना फन फैलाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following snakes is aquatic?",
      hi: "निम्न में से कौन सा साँप जल में रहता है?"
    },
    options: [
      { en: "Desert viper", hi: "रेगिस्तानी वाइपर" },
      { en: "Water snake", hi: "जल साँप" },
      { en: "Sand boa", hi: "सैंड बोआ" },
      { en: "Rat snake", hi: "चूहा साँप" }
    ],
    correct: {
      en: "Water snake",
      hi: "जल साँप"
    },
    explanation: {
      en: "Water snakes are adapted to live in and around water bodies.",
      hi: "जल साँप जल के आसपास रहने के लिए अनुकूलित होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which snake is often used by snake charmers?",
      hi: "कौन सा साँप अक्सर सपेरे द्वारा उपयोग में लाया जाता है?"
    },
    options: [
      { en: "Viper", hi: "वाइपर" },
      { en: "Cobra", hi: "नाग" },
      { en: "Python", hi: "अजगर" },
      { en: "Green snake", hi: "हरा साँप" }
    ],
    correct: {
      en: "Cobra",
      hi: "नाग"
    },
    explanation: {
      en: "Cobra is commonly used by snake charmers due to its hood and behavior.",
      hi: "नाग अपने फन और व्यवहार के कारण सपेरों द्वारा उपयोग में लाया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following snakes is known for fast movement?",
      hi: "निम्न में से कौन सा साँप तेज़ गति के लिए जाना जाता है?"
    },
    options: [
      { en: "Viper", hi: "वाइपर" },
      { en: "Rat snake", hi: "चूहा साँप" },
      { en: "Python", hi: "अजगर" },
      { en: "Boa", hi: "बोआ" }
    ],
    correct: {
      en: "Rat snake",
      hi: "चूहा साँप"
    },
    explanation: {
      en: "Rat snakes are fast-moving and non-venomous snakes.",
      hi: "चूहा साँप तेज़ गति से चलने वाला अविषैला साँप होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which snake is known for laying eggs?",
      hi: "कौन सा साँप अंडे देता है?"
    },
    options: [
      { en: "Boa", hi: "बोआ" },
      { en: "Python", hi: "अजगर" },
      { en: "Viper", hi: "वाइपर" },
      { en: "Krait", hi: "करैत" }
    ],
    correct: {
      en: "Python",
      hi: "अजगर"
    },
    explanation: {
      en: "Pythons lay eggs and protect them until they hatch.",
      hi: "अजगर अंडे देता है और उनके फूटने तक उनकी रक्षा करता है।"
    }
  }
];

export default snakeTypes;
