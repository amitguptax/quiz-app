const movementInAnimals = [
  {
    id: 1,
    question: {
      en: "Which part of the body helps fish to swim?",
      hi: "मछली को तैरने में शरीर का कौन सा भाग मदद करता है?"
    },
    options: [
      { en: "Fins", hi: "पंख" },
      { en: "Legs", hi: "टाँगें" },
      { en: "Wings", hi: "पंख (पक्षियों के)" },
      { en: "Tail", hi: "पूंछ" }
    ],
    correct: {
      en: "Fins",
      hi: "पंख"
    },
    explanation: {
      en: "Fins help fish to move in water and maintain balance.",
      hi: "पंख मछली को पानी में चलने और संतुलन बनाए रखने में मदद करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which animal moves by crawling with the help of muscles and body waves?",
      hi: "कौन सा जानवर मांसपेशियों और शरीर की लहरों की मदद से रेंगता है?"
    },
    options: [
      { en: "Frog", hi: "मेंढक" },
      { en: "Worm", hi: "कीड़ा" },
      { en: "Bird", hi: "पक्षी" },
      { en: "Fish", hi: "मछली" }
    ],
    correct: {
      en: "Worm",
      hi: "कीड़ा"
    },
    explanation: {
      en: "Worms move by making wave-like movements using their body muscles.",
      hi: "कीड़े अपनी मांसपेशियों और शरीर में लहर जैसी गति बनाकर चलते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "How do birds fly in the air?",
      hi: "पक्षी हवा में कैसे उड़ते हैं?"
    },
    options: [
      { en: "Using fins", hi: "पंखों से" },
      { en: "Using wings and muscles", hi: "पंखों और मांसपेशियों से" },
      { en: "With their legs", hi: "टाँगों से" },
      { en: "Using tail only", hi: "केवल पूंछ से" }
    ],
    correct: {
      en: "Using wings and muscles",
      hi: "पंखों और मांसपेशियों से"
    },
    explanation: {
      en: "Birds use their strong chest muscles and wings to fly.",
      hi: "पक्षी अपनी मज़बूत छाती की मांसपेशियों और पंखों की मदद से उड़ते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "How do snakes move?",
      hi: "साँप कैसे चलते हैं?"
    },
    options: [
      { en: "By legs", hi: "टाँगों से" },
      { en: "By sliding and forming loops", hi: "फिसलते हुए और लूप बनाकर" },
      { en: "By wings", hi: "पंखों से" },
      { en: "By swimming", hi: "तैरते हुए" }
    ],
    correct: {
      en: "By sliding and forming loops",
      hi: "फिसलते हुए और लूप बनाकर"
    },
    explanation: {
      en: "Snakes move in a zig-zag pattern by forming loops using their body muscles.",
      hi: "साँप अपनी मांसपेशियों की मदद से लूप बनाकर ज़िग-ज़ैग पैटर्न में चलते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which animals move with the help of wings?",
      hi: "कौन से जानवर पंखों की मदद से चलते हैं?"
    },
    options: [
      { en: "Elephants", hi: "हाथी" },
      { en: "Snakes", hi: "साँप" },
      { en: "Birds", hi: "पक्षी" },
      { en: "Worms", hi: "कीड़े" }
    ],
    correct: {
      en: "Birds",
      hi: "पक्षी"
    },
    explanation: {
      en: "Birds use wings and strong muscles to fly in the sky.",
      hi: "पक्षी पंखों और मज़बूत मांसपेशियों की मदद से आकाश में उड़ते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "How do humans move from one place to another?",
      hi: "मनुष्य एक स्थान से दूसरे स्थान तक कैसे जाते हैं?"
    },
    options: [
      { en: "By swimming", hi: "तैरकर" },
      { en: "By walking and running", hi: "चलकर और दौड़कर" },
      { en: "By flying", hi: "उड़कर" },
      { en: "By jumping only", hi: "केवल कूदकर" }
    ],
    correct: {
      en: "By walking and running",
      hi: "चलकर और दौड़कर"
    },
    explanation: {
      en: "Humans mainly move by walking and running using legs.",
      hi: "मनुष्य मुख्य रूप से पैरों की मदद से चलकर और दौड़कर चलते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which animal jumps to move and has strong hind legs?",
      hi: "कौन सा जानवर कूदकर चलता है और इसकी पिछली टाँगें मजबूत होती हैं?"
    },
    options: [
      { en: "Frog", hi: "मेंढक" },
      { en: "Bird", hi: "पक्षी" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Snake", hi: "साँप" }
    ],
    correct: {
      en: "Frog",
      hi: "मेंढक"
    },
    explanation: {
      en: "Frogs have strong back legs that help them jump.",
      hi: "मेंढक की पिछली टाँगें मज़बूत होती हैं, जिससे वह कूद सकते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "How do insects like ants and cockroaches move?",
      hi: "चींटी और तिलचट्टे जैसे कीड़े कैसे चलते हैं?"
    },
    options: [
      { en: "By swimming", hi: "तैरकर" },
      { en: "By walking with legs", hi: "पैरों से चलकर" },
      { en: "By gliding", hi: "फिसलकर" },
      { en: "By flying only", hi: "केवल उड़कर" }
    ],
    correct: {
      en: "By walking with legs",
      hi: "पैरों से चलकर"
    },
    explanation: {
      en: "Insects like ants and cockroaches move using their legs.",
      hi: "चींटी और तिलचट्टे जैसे कीड़े अपने पैरों से चलते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which body part do humans and animals use for movement?",
      hi: "मनुष्य और जानवर गति के लिए शरीर का कौन सा भाग उपयोग करते हैं?"
    },
    options: [
      { en: "Legs and muscles", hi: "पैर और मांसपेशियाँ" },
      { en: "Eyes and ears", hi: "आँखें और कान" },
      { en: "Teeth and tongue", hi: "दाँत और जीभ" },
      { en: "Nose and hair", hi: "नाक और बाल" }
    ],
    correct: {
      en: "Legs and muscles",
      hi: "पैर और मांसपेशियाँ"
    },
    explanation: {
      en: "Legs and muscles help humans and animals in movement.",
      hi: "पैर और मांसपेशियाँ मनुष्यों और जानवरों को चलने में सहायता करती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which animal swims using limbs and a flat tail?",
      hi: "कौन सा जानवर अंगों और चपटी पूंछ से तैरता है?"
    },
    options: [
      { en: "Frog", hi: "मेंढक" },
      { en: "Bird", hi: "पक्षी" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Snake", hi: "साँप" }
    ],
    correct: {
      en: "Frog",
      hi: "मेंढक"
    },
    explanation: {
      en: "Frogs use webbed feet and flat tails to swim.",
      hi: "मेंढक जालदार पंजों और चपटी पूंछ की मदद से तैरता है।"
    }
  }
];

export default movementInAnimals;
