const animalHomes = [
  {
    id: 1,
    question: {
      en: "Where does a dog live?",
      hi: "कुत्ता कहाँ रहता है?"
    },
    options: [
      { en: "Kennel", hi: "केनल" },
      { en: "Cave", hi: "गुफा" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Stable", hi: "अश्वशाला" }
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
    id: 2,
    question: {
      en: "Where does a bird live?",
      hi: "चिड़िया कहाँ रहती है?"
    },
    options: [
      { en: "Cage", hi: "पिंजरा" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Kennel", hi: "केनल" },
      { en: "Burrow", hi: "बिल" }
    ],
    correct: {
      en: "Nest",
      hi: "घोंसला"
    },
    explanation: {
      en: "Birds make nests in trees to live and lay eggs.",
      hi: "चिड़ियाँ पेड़ों पर घोंसला बनाकर रहती हैं और अंडे देती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Where does a lion live?",
      hi: "शेर कहाँ रहता है?"
    },
    options: [
      { en: "Den", hi: "गुफा" },
      { en: "Kennel", hi: "केनल" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Stable", hi: "अश्वशाला" }
    ],
    correct: {
      en: "Den",
      hi: "गुफा"
    },
    explanation: {
      en: "Lions live in dens in forests.",
      hi: "शेर जंगल में गुफाओं में रहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Where does a horse live?",
      hi: "घोड़ा कहाँ रहता है?"
    },
    options: [
      { en: "Stable", hi: "अश्वशाला" },
      { en: "Burrow", hi: "बिल" },
      { en: "Cage", hi: "पिंजरा" },
      { en: "Hive", hi: "छत्ता" }
    ],
    correct: {
      en: "Stable",
      hi: "अश्वशाला"
    },
    explanation: {
      en: "Horses are kept in stables.",
      hi: "घोड़े को अश्वशाला में रखा जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where do bees live?",
      hi: "मक्खियाँ कहाँ रहती हैं?"
    },
    options: [
      { en: "Nest", hi: "घोंसला" },
      { en: "Burrow", hi: "बिल" },
      { en: "Hive", hi: "छत्ता" },
      { en: "Cave", hi: "गुफा" }
    ],
    correct: {
      en: "Hive",
      hi: "छत्ता"
    },
    explanation: {
      en: "Bees make their home in a hive.",
      hi: "मक्खियाँ अपना घर छत्ते में बनाती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Where does a rabbit live?",
      hi: "खरगोश कहाँ रहता है?"
    },
    options: [
      { en: "Burrow", hi: "बिल" },
      { en: "Cage", hi: "पिंजरा" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Den", hi: "गुफा" }
    ],
    correct: {
      en: "Burrow",
      hi: "बिल"
    },
    explanation: {
      en: "Rabbits dig and live in burrows.",
      hi: "खरगोश ज़मीन में बिल बनाकर रहता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Where does a cow live?",
      hi: "गाय कहाँ रहती है?"
    },
    options: [
      { en: "Cowshed", hi: "गौशाला" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Cave", hi: "गुफा" },
      { en: "Kennel", hi: "केनल" }
    ],
    correct: {
      en: "Cowshed",
      hi: "गौशाला"
    },
    explanation: {
      en: "Cows are kept in a cowshed.",
      hi: "गाय को गौशाला में रखा जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Where does a pig live?",
      hi: "सूअर कहाँ रहता है?"
    },
    options: [
      { en: "Sty", hi: "सूअर का बाड़ा" },
      { en: "Stable", hi: "अश्वशाला" },
      { en: "Hive", hi: "छत्ता" },
      { en: "Nest", hi: "घोंसला" }
    ],
    correct: {
      en: "Sty",
      hi: "सूअर का बाड़ा"
    },
    explanation: {
      en: "Pigs live in a sty.",
      hi: "सूअर एक बाड़े (स्टाई) में रहते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Where does a parrot usually live?",
      hi: "तोता आमतौर पर कहाँ रहता है?"
    },
    options: [
      { en: "Nest", hi: "घोंसला" },
      { en: "Cave", hi: "गुफा" },
      { en: "Stable", hi: "अश्वशाला" },
      { en: "Burrow", hi: "बिल" }
    ],
    correct: {
      en: "Nest",
      hi: "घोंसला"
    },
    explanation: {
      en: "Parrots build nests on trees.",
      hi: "तोते पेड़ों पर घोंसले बनाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Where does a fish live?",
      hi: "मछली कहाँ रहती है?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Burrow", hi: "बिल" },
      { en: "Cave", hi: "गुफा" },
      { en: "Sty", hi: "बाड़ा" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "Fish live in water bodies like rivers and ponds.",
      hi: "मछलियाँ नदियों और तालाबों जैसे जल स्रोतों में रहती हैं।"
    }
  }
];

export default animalHomes;
