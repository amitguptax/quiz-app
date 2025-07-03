const habitats = [
  {
    id: 1,
    question: {
      en: "What is a habitat?",
      hi: "आवास क्या होता है?"
    },
    options: [
      { en: "A place where animals play", hi: "जहाँ जानवर खेलते हैं" },
      { en: "A place where living organisms live", hi: "जहाँ सजीव जीव रहते हैं" },
      { en: "A zoo", hi: "एक चिड़ियाघर" },
      { en: "A forest only", hi: "केवल जंगल" }
    ],
    correct: {
      en: "A place where living organisms live",
      hi: "जहाँ सजीव जीव रहते हैं"
    },
    explanation: {
      en: "A habitat is the natural home of a living organism.",
      hi: "आवास किसी सजीव का प्राकृतिक घर होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is a terrestrial habitat?",
      hi: "इनमें से कौन सा एक स्थलीय आवास है?"
    },
    options: [
      { en: "Pond", hi: "तालाब" },
      { en: "River", hi: "नदी" },
      { en: "Desert", hi: "रेगिस्तान" },
      { en: "Ocean", hi: "महासागर" }
    ],
    correct: {
      en: "Desert",
      hi: "रेगिस्तान"
    },
    explanation: {
      en: "Desert is a land-based (terrestrial) habitat.",
      hi: "रेगिस्तान एक स्थलीय आवास है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which is an example of an aquatic habitat?",
      hi: "जलवासी आवास का उदाहरण क्या है?"
    },
    options: [
      { en: "Forest", hi: "जंगल" },
      { en: "Pond", hi: "तालाब" },
      { en: "Mountain", hi: "पहाड़" },
      { en: "Desert", hi: "रेगिस्तान" }
    ],
    correct: {
      en: "Pond",
      hi: "तालाब"
    },
    explanation: {
      en: "Pond is a habitat where organisms live in water.",
      hi: "तालाब एक ऐसा आवास है जहाँ जीव पानी में रहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these animals live in the desert habitat?",
      hi: "इनमें से कौन सा जानवर रेगिस्तान में रहता है?"
    },
    options: [
      { en: "Camel", hi: "ऊँट" },
      { en: "Frog", hi: "मेंढक" },
      { en: "Shark", hi: "शार्क" },
      { en: "Penguin", hi: "पेंगुइन" }
    ],
    correct: {
      en: "Camel",
      hi: "ऊँट"
    },
    explanation: {
      en: "Camel is adapted to live in hot and dry desert habitat.",
      hi: "ऊँट गर्म और शुष्क रेगिस्तान में रहने के लिए अनुकूलित होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What type of habitat is the ocean?",
      hi: "महासागर किस प्रकार का आवास है?"
    },
    options: [
      { en: "Terrestrial", hi: "स्थलीय" },
      { en: "Aquatic", hi: "जलवासी" },
      { en: "Artificial", hi: "कृत्रिम" },
      { en: "Arid", hi: "शुष्क" }
    ],
    correct: {
      en: "Aquatic",
      hi: "जलवासी"
    },
    explanation: {
      en: "Ocean is a large water body and an aquatic habitat.",
      hi: "महासागर एक बड़ा जल निकाय है और एक जलवासी आवास है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Where does a penguin live?",
      hi: "पेंगुइन कहाँ रहता है?"
    },
    options: [
      { en: "Hot desert", hi: "गर्म रेगिस्तान" },
      { en: "Polar region", hi: "ध्रुवीय क्षेत्र" },
      { en: "Forest", hi: "जंगल" },
      { en: "River", hi: "नदी" }
    ],
    correct: {
      en: "Polar region",
      hi: "ध्रुवीय क्षेत्र"
    },
    explanation: {
      en: "Penguins are adapted to live in extremely cold polar habitats.",
      hi: "पेंगुइन अत्यधिक ठंडे ध्रुवीय आवासों में रहने के लिए अनुकूलित होते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which one of the following is not a habitat?",
      hi: "निम्न में से कौन एक आवास नहीं है?"
    },
    options: [
      { en: "Desert", hi: "रेगिस्तान" },
      { en: "Zoo", hi: "चिड़ियाघर" },
      { en: "Mountain", hi: "पहाड़" },
      { en: "Forest", hi: "जंगल" }
    ],
    correct: {
      en: "Zoo",
      hi: "चिड़ियाघर"
    },
    explanation: {
      en: "Zoo is a man-made place, not a natural habitat.",
      hi: "चिड़ियाघर एक कृत्रिम स्थान है, प्राकृतिक आवास नहीं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which habitat do water lilies grow in?",
      hi: "जलकुंभी किस आवास में उगती है?"
    },
    options: [
      { en: "Forest", hi: "जंगल" },
      { en: "Mountain", hi: "पहाड़" },
      { en: "Freshwater", hi: "स्वच्छ जल" },
      { en: "Desert", hi: "रेगिस्तान" }
    ],
    correct: {
      en: "Freshwater",
      hi: "स्वच्छ जल"
    },
    explanation: {
      en: "Water lilies grow in ponds and lakes (freshwater habitats).",
      hi: "जलकुंभी तालाब और झील जैसे स्वच्छ जल आवासों में उगती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is an example of a mountain habitat animal?",
      hi: "इनमें से कौन सा एक पर्वतीय आवास वाला जानवर है?"
    },
    options: [
      { en: "Camel", hi: "ऊँट" },
      { en: "Yak", hi: "याक" },
      { en: "Frog", hi: "मेंढक" },
      { en: "Whale", hi: "व्हेल" }
    ],
    correct: {
      en: "Yak",
      hi: "याक"
    },
    explanation: {
      en: "Yak lives in cold mountain regions.",
      hi: "याक ठंडे पर्वतीय क्षेत्रों में रहता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do different animals live in different habitats?",
      hi: "विभिन्न जानवर विभिन्न आवासों में क्यों रहते हैं?"
    },
    options: [
      { en: "For food", hi: "भोजन के लिए" },
      { en: "For shelter", hi: "आश्रय के लिए" },
      { en: "Due to adaptation", hi: "अनुकूलन के कारण" },
      { en: "To play", hi: "खेलने के लिए" }
    ],
    correct: {
      en: "Due to adaptation",
      hi: "अनुकूलन के कारण"
    },
    explanation: {
      en: "Animals live in habitats suited to their adaptations.",
      hi: "जानवर उन आवासों में रहते हैं जो उनके अनुकूलन के अनुसार होते हैं।"
    }
  }
];

export default habitats;
