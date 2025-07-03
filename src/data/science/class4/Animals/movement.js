const animalMovement = [
  {
    id: 1,
    question: {
      en: "How do birds move from one place to another?",
      hi: "पक्षी एक स्थान से दूसरे स्थान तक कैसे जाते हैं?"
    },
    options: [
      { en: "Walking", hi: "चलकर" },
      { en: "Flying", hi: "उड़कर" },
      { en: "Crawling", hi: "रेंगकर" },
      { en: "Hopping", hi: "कूदकर" }
    ],
    correct: {
      en: "Flying",
      hi: "उड़कर"
    },
    explanation: {
      en: "Birds have wings that help them fly from one place to another.",
      hi: "पक्षियों के पास पंख होते हैं जो उन्हें उड़ने में मदद करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which animal moves by crawling?",
      hi: "कौन सा जानवर रेंगकर चलता है?"
    },
    options: [
      { en: "Snake", hi: "साँप" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Horse", hi: "घोड़ा" },
      { en: "Cat", hi: "बिल्ली" }
    ],
    correct: {
      en: "Snake",
      hi: "साँप"
    },
    explanation: {
      en: "Snakes move by crawling as they do not have legs.",
      hi: "साँप पैरों के बिना रेंगकर चलते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "How do fish move in water?",
      hi: "मछलियाँ पानी में कैसे चलती हैं?"
    },
    options: [
      { en: "Flying", hi: "उड़कर" },
      { en: "Running", hi: "दौड़कर" },
      { en: "Swimming", hi: "तैरकर" },
      { en: "Jumping", hi: "कूदकर" }
    ],
    correct: {
      en: "Swimming",
      hi: "तैरकर"
    },
    explanation: {
      en: "Fish swim using their fins and tail.",
      hi: "मछलियाँ अपने पंखों और पूंछ की मदद से तैरती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which animal can hop using its strong hind legs?",
      hi: "कौन सा जानवर अपनी मजबूत पिछली टांगों से कूद सकता है?"
    },
    options: [
      { en: "Frog", hi: "मेंढक" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cow", hi: "गाय" }
    ],
    correct: {
      en: "Frog",
      hi: "मेंढक"
    },
    explanation: {
      en: "Frogs hop using their long and strong back legs.",
      hi: "मेंढक अपनी लंबी और मजबूत पिछली टांगों से कूदते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which animal uses its wings to fly?",
      hi: "कौन सा जानवर अपने पंखों का उपयोग उड़ने के लिए करता है?"
    },
    options: [
      { en: "Lion", hi: "सिंह" },
      { en: "Cow", hi: "गाय" },
      { en: "Eagle", hi: "गरुड़" },
      { en: "Tiger", hi: "बाघ" }
    ],
    correct: {
      en: "Eagle",
      hi: "गरुड़"
    },
    explanation: {
      en: "Eagles have strong wings which help them fly high in the sky.",
      hi: "गरुड़ के पास मजबूत पंख होते हैं जो उन्हें आकाश में ऊँचा उड़ने में मदद करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following animals swims in water?",
      hi: "निम्न में से कौन सा जानवर पानी में तैरता है?"
    },
    options: [
      { en: "Cat", hi: "बिल्ली" },
      { en: "Crocodile", hi: "मगरमच्छ" },
      { en: "Monkey", hi: "बंदर" },
      { en: "Horse", hi: "घोड़ा" }
    ],
    correct: {
      en: "Crocodile",
      hi: "मगरमच्छ"
    },
    explanation: {
      en: "Crocodiles are excellent swimmers and live in water.",
      hi: "मगरमच्छ अच्छे तैराक होते हैं और पानी में रहते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How do kangaroos move?",
      hi: "कंगारू कैसे चलते हैं?"
    },
    options: [
      { en: "Crawling", hi: "रेंगकर" },
      { en: "Hopping", hi: "कूदकर" },
      { en: "Flying", hi: "उड़कर" },
      { en: "Swimming", hi: "तैरकर" }
    ],
    correct: {
      en: "Hopping",
      hi: "कूदकर"
    },
    explanation: {
      en: "Kangaroos hop using their strong hind legs.",
      hi: "कंगारू अपनी मजबूत पिछली टांगों से कूदकर चलते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these animals can both swim and walk?",
      hi: "इनमें से कौन सा जानवर तैर भी सकता है और चल भी सकता है?"
    },
    options: [
      { en: "Tiger", hi: "बाघ" },
      { en: "Penguin", hi: "पेंगुइन" },
      { en: "Monkey", hi: "बंदर" },
      { en: "Elephant", hi: "हाथी" }
    ],
    correct: {
      en: "Penguin",
      hi: "पेंगुइन"
    },
    explanation: {
      en: "Penguins swim in water and also walk on land.",
      hi: "पेंगुइन पानी में तैरते हैं और ज़मीन पर चलते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part of the body do fish use to swim?",
      hi: "मछलियाँ तैरने के लिए शरीर के किस भाग का उपयोग करती हैं?"
    },
    options: [
      { en: "Legs", hi: "टांगें" },
      { en: "Fins", hi: "पंख" },
      { en: "Wings", hi: "पंख (विंग्स)" },
      { en: "Tail only", hi: "केवल पूंछ" }
    ],
    correct: {
      en: "Fins",
      hi: "पंख"
    },
    explanation: {
      en: "Fish swim using their fins and tail.",
      hi: "मछलियाँ अपने पंखों और पूंछ की मदद से तैरती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following animals walks on two legs?",
      hi: "निम्न में से कौन सा जानवर दो पैरों पर चलता है?"
    },
    options: [
      { en: "Monkey", hi: "बंदर" },
      { en: "Parrot", hi: "तोता" },
      { en: "Human", hi: "मनुष्य" },
      { en: "Frog", hi: "मेंढक" }
    ],
    correct: {
      en: "Human",
      hi: "मनुष्य"
    },
    explanation: {
      en: "Humans walk on two legs.",
      hi: "मनुष्य दो पैरों पर चलते हैं।"
    }
  }
];

export default animalMovement;
