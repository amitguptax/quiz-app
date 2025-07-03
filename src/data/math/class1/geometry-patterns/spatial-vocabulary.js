const questions = [
  {
    question: {
      en: "Where is the cat? (📦 🐱)",
      hi: "बिल्ली कहाँ है? (📦 🐱)"
    },
    options: [
      { en: "Above the box", hi: "डिब्बे के ऊपर" },
      { en: "Below the box", hi: "डिब्बे के नीचे" },
      { en: "Inside the box", hi: "डिब्बे के अंदर" },
      { en: "Next to the box", hi: "डिब्बे के बगल में" }
    ],
    correct: {
      en: "Next to the box",
      hi: "डिब्बे के बगल में"
    },
    explanation: {
      en: "The cat is beside the box.",
      hi: "बिल्ली डिब्बे के बगल में है।"
    }
  },
  {
    question: {
      en: "The apple is ___ the table.",
      hi: "सेब मेज़ के ___ है।"
    },
    options: [
      { en: "on", hi: "पर" },
      { en: "under", hi: "नीचे" },
      { en: "behind", hi: "पीछे" },
      { en: "in front", hi: "सामने" }
    ],
    correct: {
      en: "on",
      hi: "पर"
    },
    explanation: {
      en: "Apple is kept on the table.",
      hi: "सेब मेज़ के ऊपर है।"
    }
  },
  {
    question: {
      en: "Where is the ball? (🧺 🏀)",
      hi: "गेंद कहाँ है? (🧺 🏀)"
    },
    options: [
      { en: "In the basket", hi: "टोकरी में" },
      { en: "On the basket", hi: "टोकरी के ऊपर" },
      { en: "Behind the basket", hi: "टोकरी के पीछे" },
      { en: "Next to the basket", hi: "टोकरी के पास" }
    ],
    correct: {
      en: "In the basket",
      hi: "टोकरी में"
    },
    explanation: {
      en: "The ball is inside the basket.",
      hi: "गेंद टोकरी के अंदर है।"
    }
  },
  {
    question: {
      en: "The boy is standing ___ the girl.",
      hi: "लड़का लड़की के ___ खड़ा है।"
    },
    options: [
      { en: "behind", hi: "पीछे" },
      { en: "next to", hi: "साथ में" },
      { en: "in front of", hi: "सामने" },
      { en: "under", hi: "नीचे" }
    ],
    correct: {
      en: "in front of",
      hi: "सामने"
    },
    explanation: {
      en: "The boy is in front of the girl.",
      hi: "लड़का लड़की के सामने खड़ा है।"
    }
  },
  {
    question: {
      en: "Where is the dog? (🐶 🛏)",
      hi: "कुत्ता कहाँ है? (🐶 🛏)"
    },
    options: [
      { en: "On the bed", hi: "बिस्तर पर" },
      { en: "Under the bed", hi: "बिस्तर के नीचे" },
      { en: "In front of the bed", hi: "बिस्तर के सामने" },
      { en: "Behind the bed", hi: "बिस्तर के पीछे" }
    ],
    correct: {
      en: "Under the bed",
      hi: "बिस्तर के नीचे"
    },
    explanation: {
      en: "The dog is hiding under the bed.",
      hi: "कुत्ता बिस्तर के नीचे छुपा है।"
    }
  },
  {
    question: {
      en: "The book is ___ the bag.",
      hi: "किताब बैग के ___ है।"
    },
    options: [
      { en: "in", hi: "अंदर" },
      { en: "on", hi: "ऊपर" },
      { en: "next to", hi: "बगल में" },
      { en: "under", hi: "नीचे" }
    ],
    correct: {
      en: "in",
      hi: "अंदर"
    },
    explanation: {
      en: "Book is kept inside the bag.",
      hi: "किताब बैग के अंदर रखी है।"
    }
  },
  {
    question: {
      en: "The pencil is ___ the notebook.",
      hi: "पेंसिल नोटबुक के ___ है।"
    },
    options: [
      { en: "on", hi: "ऊपर" },
      { en: "in", hi: "अंदर" },
      { en: "under", hi: "नीचे" },
      { en: "behind", hi: "पीछे" }
    ],
    correct: {
      en: "on",
      hi: "ऊपर"
    },
    explanation: {
      en: "The pencil is kept on the notebook.",
      hi: "पेंसिल नोटबुक के ऊपर है।"
    }
  },
  {
    question: {
      en: "Where is the sun? (🌞 ⛅)",
      hi: "सूरज कहाँ है? (🌞 ⛅)"
    },
    options: [
      { en: "Above the clouds", hi: "बादलों के ऊपर" },
      { en: "Under the clouds", hi: "बादलों के नीचे" },
      { en: "Next to the clouds", hi: "बादलों के पास" },
      { en: "Inside the clouds", hi: "बादलों के अंदर" }
    ],
    correct: {
      en: "Above the clouds",
      hi: "बादलों के ऊपर"
    },
    explanation: {
      en: "Sun is always above the clouds in the sky.",
      hi: "सूरज आकाश में बादलों के ऊपर होता है।"
    }
  },
  {
    question: {
      en: "The flowers are ___ the vase.",
      hi: "फूल फूलदान के ___ हैं।"
    },
    options: [
      { en: "in", hi: "अंदर" },
      { en: "on", hi: "ऊपर" },
      { en: "under", hi: "नीचे" },
      { en: "behind", hi: "पीछे" }
    ],
    correct: {
      en: "in",
      hi: "अंदर"
    },
    explanation: {
      en: "Flowers are placed inside the vase.",
      hi: "फूल फूलदान के अंदर रखे हैं।"
    }
  },
  {
    question: {
      en: "The chair is ___ the table.",
      hi: "कुर्सी मेज़ के ___ है।"
    },
    options: [
      { en: "next to", hi: "बगल में" },
      { en: "under", hi: "नीचे" },
      { en: "on", hi: "ऊपर" },
      { en: "in", hi: "अंदर" }
    ],
    correct: {
      en: "next to",
      hi: "बगल में"
    },
    explanation: {
      en: "The chair is kept beside the table.",
      hi: "कुर्सी मेज़ के बगल में रखी है।"
    }
  }
];

export default { questions };
