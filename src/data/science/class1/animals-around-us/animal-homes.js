const questions = [
  {
    id: 1,
    question: {
      en: "Where does a lion live?",
      hi: "शेर कहाँ रहता है?"
    },
    options: [
      { en: "Den", hi: "गुफा" },
      { en: "Kennel", hi: "कुत्ते का घर" },
      { en: "Stable", hi: "अश्वशाला" },
      { en: "Nest", hi: "घोंसला" }
    ],
    correct: {
      en: "Den",
      hi: "गुफा"
    },
    explanation: {
      en: "Lions live in dens in the jungle.",
      hi: "शेर जंगल में गुफा में रहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Where does a dog live?",
      hi: "कुत्ता कहाँ रहता है?"
    },
    options: [
      { en: "Kennel", hi: "कुत्ते का घर" },
      { en: "Den", hi: "गुफा" },
      { en: "Coop", hi: "मुर्गी का दड़बा" },
      { en: "Hive", hi: "मधुमक्खी का छत्ता" }
    ],
    correct: {
      en: "Kennel",
      hi: "कुत्ते का घर"
    },
    explanation: {
      en: "Dogs live in kennels made by humans.",
      hi: "कुत्ते इंसानों द्वारा बनाए गए केनल में रहते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Where does a bird live?",
      hi: "पक्षी कहाँ रहता है?"
    },
    options: [
      { en: "Nest", hi: "घोंसला" },
      { en: "Burrow", hi: "बिल" },
      { en: "Coop", hi: "दड़बा" },
      { en: "Stable", hi: "अश्वशाला" }
    ],
    correct: {
      en: "Nest",
      hi: "घोंसला"
    },
    explanation: {
      en: "Birds build and live in nests on trees.",
      hi: "पक्षी पेड़ों पर घोंसला बनाते हैं और वहीं रहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Where do bees live?",
      hi: "मधुमक्खियाँ कहाँ रहती हैं?"
    },
    options: [
      { en: "Hive", hi: "छत्ता" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Burrow", hi: "बिल" },
      { en: "Den", hi: "गुफा" }
    ],
    correct: {
      en: "Hive",
      hi: "छत्ता"
    },
    explanation: {
      en: "Bees live in hives and make honey.",
      hi: "मधुमक्खियाँ छत्ते में रहती हैं और शहद बनाती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where does a horse live?",
      hi: "घोड़ा कहाँ रहता है?"
    },
    options: [
      { en: "Stable", hi: "अश्वशाला" },
      { en: "Barn", hi: "खलिहान" },
      { en: "Coop", hi: "दड़बा" },
      { en: "Cage", hi: "पिंजरा" }
    ],
    correct: {
      en: "Stable",
      hi: "अश्वशाला"
    },
    explanation: {
      en: "Horses are kept in stables.",
      hi: "घोड़ों को अश्वशाला में रखा जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Where does a hen live?",
      hi: "मुर्गी कहाँ रहती है?"
    },
    options: [
      { en: "Coop", hi: "दड़बा" },
      { en: "Burrow", hi: "बिल" },
      { en: "Stable", hi: "अश्वशाला" },
      { en: "Kennel", hi: "कुत्ते का घर" }
    ],
    correct: {
      en: "Coop",
      hi: "दड़बा"
    },
    explanation: {
      en: "Hens live in coops made to protect them.",
      hi: "मुर्गियाँ सुरक्षा के लिए बनाए गए दड़बे में रहती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Where do snakes usually live?",
      hi: "साँप आमतौर पर कहाँ रहते हैं?"
    },
    options: [
      { en: "Burrow", hi: "बिल" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Hive", hi: "छत्ता" },
      { en: "Stable", hi: "अश्वशाला" }
    ],
    correct: {
      en: "Burrow",
      hi: "बिल"
    },
    explanation: {
      en: "Snakes live in holes or burrows in the ground.",
      hi: "साँप ज़मीन में बने बिलों में रहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Where does a rabbit live?",
      hi: "खरगोश कहाँ रहता है?"
    },
    options: [
      { en: "Burrow", hi: "बिल" },
      { en: "Cage", hi: "पिंजरा" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Hive", hi: "छत्ता" }
    ],
    correct: {
      en: "Burrow",
      hi: "बिल"
    },
    explanation: {
      en: "Rabbits dig burrows and live in them.",
      hi: "खरगोश बिल खोदकर उसमें रहते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Where does a cow live?",
      hi: "गाय कहाँ रहती है?"
    },
    options: [
      { en: "Shed", hi: "शेड" },
      { en: "Coop", hi: "दड़बा" },
      { en: "Nest", hi: "घोंसला" },
      { en: "Den", hi: "गुफा" }
    ],
    correct: {
      en: "Shed",
      hi: "शेड"
    },
    explanation: {
      en: "Cows are kept in sheds by farmers.",
      hi: "गायों को किसान शेड में रखते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do animals need homes?",
      hi: "जानवरों को घर की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "To stay safe and rest", hi: "सुरक्षित रहने और आराम करने के लिए" },
      { en: "To play games", hi: "खेल खेलने के लिए" },
      { en: "To sing songs", hi: "गाने गाने के लिए" },
      { en: "To drive cars", hi: "कार चलाने के लिए" }
    ],
    correct: {
      en: "To stay safe and rest",
      hi: "सुरक्षित रहने और आराम करने के लिए"
    },
    explanation: {
      en: "Animals need homes to protect themselves and rest.",
      hi: "जानवरों को खुद को बचाने और आराम करने के लिए घर की जरूरत होती है।"
    }
  }
];

export default questions;
