const bodyParts = [
  {
    id: 1,
    question: {
      en: "Which part of the body helps us to see?",
      hi: "हमारे शरीर का कौन सा अंग देखने में मदद करता है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" },
      { en: "Ears", hi: "कान" },
      { en: "Hands", hi: "हाथ" }
    ],
    correct: {
      en: "Eyes",
      hi: "आँखें"
    },
    explanation: {
      en: "We use our eyes to see things around us.",
      hi: "हम अपनी आँखों से अपने आसपास की चीजें देखते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which body part helps us to hear?",
      hi: "कौन सा अंग सुनने में मदद करता है?"
    },
    options: [
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Hands", hi: "हाथ" },
      { en: "Legs", hi: "पैर" }
    ],
    correct: {
      en: "Ears",
      hi: "कान"
    },
    explanation: {
      en: "Ears help us hear sounds.",
      hi: "कान हमें ध्वनियाँ सुनने में मदद करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which part of the body helps us to walk?",
      hi: "हमारे शरीर का कौन सा हिस्सा चलने में मदद करता है?"
    },
    options: [
      { en: "Legs", hi: "पैर" },
      { en: "Hands", hi: "हाथ" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" }
    ],
    correct: {
      en: "Legs",
      hi: "पैर"
    },
    explanation: {
      en: "We use our legs to walk and run.",
      hi: "हम चलने और दौड़ने के लिए अपने पैरों का उपयोग करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which organ helps us to smell things?",
      hi: "कौन सा अंग हमें सूंघने में मदद करता है?"
    },
    options: [
      { en: "Nose", hi: "नाक" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Mouth", hi: "मुँह" },
      { en: "Hands", hi: "हाथ" }
    ],
    correct: {
      en: "Nose",
      hi: "नाक"
    },
    explanation: {
      en: "Nose helps us smell different things.",
      hi: "नाक हमें विभिन्न चीजों को सूंघने में मदद करती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which body part do we use to write?",
      hi: "हम लिखने के लिए शरीर के किस भाग का उपयोग करते हैं?"
    },
    options: [
      { en: "Hands", hi: "हाथ" },
      { en: "Legs", hi: "पैर" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Hands",
      hi: "हाथ"
    },
    explanation: {
      en: "Hands are used for writing, eating, and holding things.",
      hi: "हाथों का उपयोग लिखने, खाने और चीजें पकड़ने के लिए किया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which body part helps us to taste food?",
      hi: "कौन सा अंग हमें भोजन का स्वाद चखने में मदद करता है?"
    },
    options: [
      { en: "Tongue", hi: "जीभ" },
      { en: "Nose", hi: "नाक" },
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" }
    ],
    correct: {
      en: "Tongue",
      hi: "जीभ"
    },
    explanation: {
      en: "Tongue helps us to taste sweet, sour, salty, and bitter food.",
      hi: "जीभ हमें मीठा, खट्टा, नमकीन और कड़वा स्वाद चखने में मदद करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What helps us to pick up things?",
      hi: "हमें चीजें उठाने में क्या मदद करता है?"
    },
    options: [
      { en: "Hands", hi: "हाथ" },
      { en: "Legs", hi: "पैर" },
      { en: "Nose", hi: "नाक" },
      { en: "Eyes", hi: "आँखें" }
    ],
    correct: {
      en: "Hands",
      hi: "हाथ"
    },
    explanation: {
      en: "Hands help us hold and lift objects.",
      hi: "हाथ हमें वस्तुओं को पकड़ने और उठाने में मदद करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which organ helps us to taste and talk?",
      hi: "कौन सा अंग स्वाद चखने और बात करने में मदद करता है?"
    },
    options: [
      { en: "Tongue", hi: "जीभ" },
      { en: "Nose", hi: "नाक" },
      { en: "Ear", hi: "कान" },
      { en: "Hand", hi: "हाथ" }
    ],
    correct: {
      en: "Tongue",
      hi: "जीभ"
    },
    explanation: {
      en: "Tongue helps in both tasting and speaking.",
      hi: "जीभ स्वाद लेने और बोलने दोनों में मदद करती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How many fingers do we have on one hand?",
      hi: "एक हाथ में हमारी कितनी उंगलियाँ होती हैं?"
    },
    options: [
      { en: "Five", hi: "पाँच" },
      { en: "Four", hi: "चार" },
      { en: "Six", hi: "छह" },
      { en: "Three", hi: "तीन" }
    ],
    correct: {
      en: "Five",
      hi: "पाँच"
    },
    explanation: {
      en: "Each hand has five fingers.",
      hi: "हर हाथ में पाँच उंगलियाँ होती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which part of the body helps us to run?",
      hi: "कौन सा अंग दौड़ने में मदद करता है?"
    },
    options: [
      { en: "Legs", hi: "पैर" },
      { en: "Nose", hi: "नाक" },
      { en: "Ears", hi: "कान" },
      { en: "Tongue", hi: "जीभ" }
    ],
    correct: {
      en: "Legs",
      hi: "पैर"
    },
    explanation: {
      en: "We use our legs to run and jump.",
      hi: "हम दौड़ने और कूदने के लिए अपने पैरों का उपयोग करते हैं।"
    }
  }
];

export default bodyParts;
