const animalSenses = [
  {
    id: 1,
    question: {
      en: "Which animal has a strong sense of smell?",
      hi: "किस जानवर की सूंघने की शक्ति तेज होती है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cat", hi: "बिल्ली" },
      { en: "Horse", hi: "घोड़ा" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "Dogs have a highly developed sense of smell.",
      hi: "कुत्तों की सूंघने की शक्ति बहुत तेज होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which animal can see clearly even in the dark?",
      hi: "कौन सा जानवर अंधेरे में भी स्पष्ट देख सकता है?"
    },
    options: [
      { en: "Elephant", hi: "हाथी" },
      { en: "Owl", hi: "उल्लू" },
      { en: "Monkey", hi: "बंदर" },
      { en: "Rabbit", hi: "खरगोश" }
    ],
    correct: {
      en: "Owl",
      hi: "उल्लू"
    },
    explanation: {
      en: "Owls have excellent night vision.",
      hi: "उल्लुओं की रात में देखने की शक्ति बहुत अच्छी होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which animal uses its tongue to smell?",
      hi: "कौन सा जानवर सूंघने के लिए अपनी जीभ का उपयोग करता है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Frog", hi: "मेंढक" },
      { en: "Snake", hi: "साँप" },
      { en: "Tiger", hi: "बाघ" }
    ],
    correct: {
      en: "Snake",
      hi: "साँप"
    },
    explanation: {
      en: "Snakes use their forked tongue to detect smell particles in the air.",
      hi: "साँप अपनी दोमुंही जीभ से हवा में गंध कणों का पता लगाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which animal can hear sounds that humans cannot?",
      hi: "कौन सा जानवर ऐसी ध्वनियाँ सुन सकता है जो मनुष्य नहीं सुन सकते?"
    },
    options: [
      { en: "Elephant", hi: "हाथी" },
      { en: "Crow", hi: "कौवा" },
      { en: "Dolphin", hi: "डॉल्फिन" },
      { en: "Lion", hi: "शेर" }
    ],
    correct: {
      en: "Dolphin",
      hi: "डॉल्फिन"
    },
    explanation: {
      en: "Dolphins can hear ultrasonic sounds that are beyond human hearing range.",
      hi: "डॉल्फिन अल्ट्रासोनिक ध्वनियाँ सुन सकती हैं जो मनुष्यों के लिए असंभव हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "How do bats find their way in the dark?",
      hi: "बांद अंधेरे में अपना रास्ता कैसे ढूंढते हैं?"
    },
    options: [
      { en: "By eyesight", hi: "दृष्टि से" },
      { en: "By smell", hi: "घ्राण शक्ति से" },
      { en: "By touch", hi: "स्पर्श से" },
      { en: "By echo of sound", hi: "ध्वनि की प्रतिध्वनि से" }
    ],
    correct: {
      en: "By echo of sound",
      hi: "ध्वनि की प्रतिध्वनि से"
    },
    explanation: {
      en: "Bats use echolocation to move and hunt in the dark.",
      hi: "बांद अंधेरे में आवाज की प्रतिध्वनि (इको) से रास्ता ढूंढते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which animal uses its whiskers to sense movement in the dark?",
      hi: "कौन सा जानवर अंधेरे में गति महसूस करने के लिए अपनी मूंछों का उपयोग करता है?"
    },
    options: [
      { en: "Cat", hi: "बिल्ली" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Elephant", hi: "हाथी" },
      { en: "Cow", hi: "गाय" }
    ],
    correct: {
      en: "Cat",
      hi: "बिल्ली"
    },
    explanation: {
      en: "Cats use their sensitive whiskers to detect objects and movements around them.",
      hi: "बिल्लियाँ अपनी संवेदनशील मूंछों से आसपास की वस्तुओं और गतिविधियों का पता लगाती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which insect has a strong sense of smell and is used by police?",
      hi: "किस जानवर की सूंघने की शक्ति तेज होती है और जिसे पुलिस उपयोग करती है?"
    },
    options: [
      { en: "Honeybee", hi: "मधुमक्खी" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Ant", hi: "चींटी" },
      { en: "Horse", hi: "घोड़ा" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "Dogs are trained by police for their strong sense of smell.",
      hi: "कुत्तों की तीव्र घ्राण शक्ति के कारण उन्हें पुलिस प्रशिक्षित करती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which animal has eyes on the sides of its head?",
      hi: "किस जानवर की आँखें उसके सिर के किनारों पर होती हैं?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Deer", hi: "हिरन" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Monkey", hi: "बंदर" }
    ],
    correct: {
      en: "Deer",
      hi: "हिरन"
    },
    explanation: {
      en: "Deer have side-facing eyes to help spot predators from both sides.",
      hi: "हिरन की आँखें किनारे होती हैं जिससे वे दोनों ओर से शिकारी देख सकते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which animal can sense earthquake vibrations before humans?",
      hi: "कौन सा जानवर इंसानों से पहले भूकंप की तरंगों को महसूस कर सकता है?"
    },
    options: [
      { en: "Elephant", hi: "हाथी" },
      { en: "Cow", hi: "गाय" },
      { en: "Ant", hi: "चींटी" },
      { en: "Snake", hi: "साँप" }
    ],
    correct: {
      en: "Elephant",
      hi: "हाथी"
    },
    explanation: {
      en: "Elephants can feel vibrations through their feet before an earthquake hits.",
      hi: "हाथी अपने पैरों से भूकंप की तरंगों को पहले ही महसूस कर लेते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which bird can imitate human speech?",
      hi: "कौन सा पक्षी मनुष्यों की आवाज की नकल कर सकता है?"
    },
    options: [
      { en: "Pigeon", hi: "कबूतर" },
      { en: "Crow", hi: "कौवा" },
      { en: "Parrot", hi: "तोता" },
      { en: "Sparrow", hi: "गौरैया" }
    ],
    correct: {
      en: "Parrot",
      hi: "तोता"
    },
    explanation: {
      en: "Parrots can mimic human sounds and are known for this ability.",
      hi: "तोते मनुष्य की आवाजों की नकल कर सकते हैं और यह उनकी विशेषता है।"
    }
  }
];

export default animalSenses;
