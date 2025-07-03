const animalHomes = [
  {
    id: 1,
    question: {
      en: "Where does a lion live?",
      hi: "सिंह कहाँ रहता है?"
    },
    options: [
      { en: "Nest", hi: "घोंसला" },
      { en: "Cave", hi: "गुफा" },
      { en: "Burrow", hi: "बिल" },
      { en: "Stable", hi: "अस्थबल" }
    ],
    correct: {
      en: "Cave",
      hi: "गुफा"
    },
    explanation: {
      en: "Lions usually live in caves in the wild.",
      hi: "सिंह आमतौर पर जंगल में गुफाओं में रहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the home of a dog called?",
      hi: "कुत्ते का घर क्या कहलाता है?"
    },
    options: [
      { en: "Burrow", hi: "बिल" },
      { en: "Kennel", hi: "केनल" },
      { en: "Stable", hi: "अस्थबल" },
      { en: "Nest", hi: "घोंसला" }
    ],
    correct: {
      en: "Kennel",
      hi: "केनल"
    },
    explanation: {
      en: "A dog lives in a kennel.",
      hi: "कुत्ता केनल में रहता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Where does a rabbit live?",
      hi: "खरगोश कहाँ रहता है?"
    },
    options: [
      { en: "Den", hi: "मांद" },
      { en: "Hive", hi: "छत्ता" },
      { en: "Burrow", hi: "बिल" },
      { en: "Nest", hi: "घोंसला" }
    ],
    correct: {
      en: "Burrow",
      hi: "बिल"
    },
    explanation: {
      en: "Rabbits dig burrows in the ground to live.",
      hi: "खरगोश ज़मीन में बिल बनाकर रहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Where does a bird live?",
      hi: "पक्षी कहाँ रहता है?"
    },
    options: [
      { en: "Kennel", hi: "केनल" },
      { en: "Burrow", hi: "बिल" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Cave", hi: "गुफा" }
    ],
    correct: {
      en: "Nest",
      hi: "घोंसला"
    },
    explanation: {
      en: "Birds build nests on trees to live.",
      hi: "पक्षी पेड़ों पर घोंसले बनाकर रहते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where do bees live?",
      hi: "मधुमक्खियाँ कहाँ रहती हैं?"
    },
    options: [
      { en: "Nest", hi: "घोंसला" },
      { en: "Hive", hi: "छत्ता" },
      { en: "Kennel", hi: "केनल" },
      { en: "Burrow", hi: "बिल" }
    ],
    correct: {
      en: "Hive",
      hi: "छत्ता"
    },
    explanation: {
      en: "Bees live in a hive.",
      hi: "मधुमक्खियाँ छत्ते में रहती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the home of a cow called?",
      hi: "गाय का घर क्या कहलाता है?"
    },
    options: [
      { en: "Stable", hi: "अस्थबल" },
      { en: "Kennel", hi: "केनल" },
      { en: "Den", hi: "मांद" },
      { en: "Hive", hi: "छत्ता" }
    ],
    correct: {
      en: "Stable",
      hi: "अस्थबल"
    },
    explanation: {
      en: "Cows are kept in a stable.",
      hi: "गायों को अस्थबल में रखा जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Where does a spider live?",
      hi: "मकड़ी कहाँ रहती है?"
    },
    options: [
      { en: "Web", hi: "जाला" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Cave", hi: "गुफा" },
      { en: "Kennel", hi: "केनल" }
    ],
    correct: {
      en: "Web",
      hi: "जाला"
    },
    explanation: {
      en: "Spiders build webs to live and catch insects.",
      hi: "मकड़ियाँ जाले बनाकर रहती हैं और कीड़े पकड़ती हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the shelter of a horse called?",
      hi: "घोड़े के घर को क्या कहते हैं?"
    },
    options: [
      { en: "Stable", hi: "अस्थबल" },
      { en: "Kennel", hi: "केनल" },
      { en: "Cave", hi: "गुफा" },
      { en: "Hive", hi: "छत्ता" }
    ],
    correct: {
      en: "Stable",
      hi: "अस्थबल"
    },
    explanation: {
      en: "Horses are kept in a stable.",
      hi: "घोड़ों को अस्थबल में रखा जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Where do ants live?",
      hi: "चींटियाँ कहाँ रहती हैं?"
    },
    options: [
      { en: "Den", hi: "मांद" },
      { en: "Hive", hi: "छत्ता" },
      { en: "Ant hill", hi: "चींटी का टीला" },
      { en: "Kennel", hi: "केनल" }
    ],
    correct: {
      en: "Ant hill",
      hi: "चींटी का टीला"
    },
    explanation: {
      en: "Ants live together in an ant hill.",
      hi: "चींटियाँ चींटी के टीले में रहती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Where do wild animals live?",
      hi: "जंगली जानवर कहाँ रहते हैं?"
    },
    options: [
      { en: "House", hi: "घर" },
      { en: "Zoo", hi: "चिड़ियाघर" },
      { en: "Forest", hi: "जंगल" },
      { en: "Nest", hi: "घोंसला" }
    ],
    correct: {
      en: "Forest",
      hi: "जंगल"
    },
    explanation: {
      en: "Wild animals live in the forest.",
      hi: "जंगली जानवर जंगल में रहते हैं।"
    }
  }
];

export default animalHomes;
