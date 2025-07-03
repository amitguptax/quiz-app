const livingNonliving = [
  {
    id: 1,
    question: {
      en: "Which of the following is a living thing?",
      hi: "निम्न में से कौन एक सजीव वस्तु है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Chair", hi: "कुर्सी" },
      { en: "Table", hi: "मेज़" },
      { en: "Stone", hi: "पत्थर" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "A dog is a living thing because it breathes, eats, and moves.",
      hi: "कुत्ता एक सजीव है क्योंकि वह सांस लेता है, खाता है और चलता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a non-living thing?",
      hi: "निम्न में से कौन एक निर्जीव वस्तु है?"
    },
    options: [
      { en: "Plant", hi: "पौधा" },
      { en: "Fish", hi: "मछली" },
      { en: "Rock", hi: "चट्टान" },
      { en: "Bird", hi: "पक्षी" }
    ],
    correct: {
      en: "Rock",
      hi: "चट्टान"
    },
    explanation: {
      en: "A rock does not breathe, grow or move on its own.",
      hi: "चट्टान सांस नहीं लेती, न बढ़ती है और न खुद चलती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What do all living things need?",
      hi: "सभी सजीव वस्तुओं को क्या चाहिए होता है?"
    },
    options: [
      { en: "Air, water, and food", hi: "हवा, पानी और भोजन" },
      { en: "Books and toys", hi: "किताबें और खिलौने" },
      { en: "Plastic and glass", hi: "प्लास्टिक और कांच" },
      { en: "Paper and ink", hi: "कागज और स्याही" }
    ],
    correct: {
      en: "Air, water, and food",
      hi: "हवा, पानी और भोजन"
    },
    explanation: {
      en: "All living things need air, water, and food to survive.",
      hi: "सभी सजीवों को जीवित रहने के लिए हवा, पानी और भोजन चाहिए।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which feature is only found in living things?",
      hi: "कौन सा गुण केवल सजीवों में पाया जाता है?"
    },
    options: [
      { en: "They grow", hi: "वे बढ़ते हैं" },
      { en: "They shine", hi: "वे चमकते हैं" },
      { en: "They make noise", hi: "वे आवाज करते हैं" },
      { en: "They break", hi: "वे टूटते हैं" }
    ],
    correct: {
      en: "They grow",
      hi: "वे बढ़ते हैं"
    },
    explanation: {
      en: "Growth is a feature of living things.",
      hi: "बढ़ना केवल सजीवों की विशेषता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is both living and non-living at different times?",
      hi: "इनमें से कौन अलग-अलग समय पर सजीव और निर्जीव हो सकता है?"
    },
    options: [
      { en: "Seed", hi: "बीज" },
      { en: "Ball", hi: "गेंद" },
      { en: "Glass", hi: "कांच" },
      { en: "Paper", hi: "कागज" }
    ],
    correct: {
      en: "Seed",
      hi: "बीज"
    },
    explanation: {
      en: "A seed is non-living until it gets air, water, and soil, then it grows.",
      hi: "बीज निर्जीव दिखता है लेकिन अनुकूल वातावरण मिलने पर वह अंकुरित होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What do living things do that non-living things do not?",
      hi: "सजीव वह क्या करते हैं जो निर्जीव नहीं कर सकते?"
    },
    options: [
      { en: "Grow and reproduce", hi: "बढ़ते और प्रजनन करते हैं" },
      { en: "Get dirty", hi: "गंदे होते हैं" },
      { en: "Make noise", hi: "शोर करते हैं" },
      { en: "Change color", hi: "रंग बदलते हैं" }
    ],
    correct: {
      en: "Grow and reproduce",
      hi: "बढ़ते और प्रजनन करते हैं"
    },
    explanation: {
      en: "Only living things can grow and reproduce.",
      hi: "केवल सजीव बढ़ सकते हैं और नए सजीव बना सकते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which one is a characteristic of non-living things?",
      hi: "निम्न में से कौन एक निर्जीव वस्तु की विशेषता है?"
    },
    options: [
      { en: "Do not breathe", hi: "सांस नहीं लेते" },
      { en: "Eat food", hi: "भोजन खाते हैं" },
      { en: "Grow", hi: "बढ़ते हैं" },
      { en: "Reproduce", hi: "प्रजनन करते हैं" }
    ],
    correct: {
      en: "Do not breathe",
      hi: "सांस नहीं लेते"
    },
    explanation: {
      en: "Non-living things do not breathe or need air.",
      hi: "निर्जीव वस्तुएँ सांस नहीं लेतीं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is a living thing?",
      hi: "इनमें से कौन एक सजीव वस्तु है?"
    },
    options: [
      { en: "Tree", hi: "पेड़" },
      { en: "Pen", hi: "पेन" },
      { en: "Pencil", hi: "पेंसिल" },
      { en: "Box", hi: "डिब्बा" }
    ],
    correct: {
      en: "Tree",
      hi: "पेड़"
    },
    explanation: {
      en: "Trees grow, breathe, and make food – they are living.",
      hi: "पेड़ बढ़ते हैं, सांस लेते हैं और भोजन बनाते हैं – वे सजीव हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which is a non-living thing that moves only when pushed?",
      hi: "कौन सी निर्जीव वस्तु केवल धकेलने पर चलती है?"
    },
    options: [
      { en: "Toy car", hi: "खिलौना गाड़ी" },
      { en: "Bird", hi: "पक्षी" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cat", hi: "बिल्ली" }
    ],
    correct: {
      en: "Toy car",
      hi: "खिलौना गाड़ी"
    },
    explanation: {
      en: "Toy cars do not move on their own, only when pushed.",
      hi: "खिलौना गाड़ी खुद नहीं चलती, धक्का देने पर चलती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "How can we identify a living thing?",
      hi: "हम सजीव को कैसे पहचान सकते हैं?"
    },
    options: [
      { en: "It grows, breathes, and moves", hi: "वह बढ़ता है, सांस लेता है और चलता है" },
      { en: "It shines and glows", hi: "वह चमकता है और दमकता है" },
      { en: "It is colorful", hi: "वह रंगीन होता है" },
      { en: "It is small", hi: "वह छोटा होता है" }
    ],
    correct: {
      en: "It grows, breathes, and moves",
      hi: "वह बढ़ता है, सांस लेता है और चलता है"
    },
    explanation: {
      en: "These are the main characteristics of living things.",
      hi: "ये सजीव वस्तुओं की मुख्य विशेषताएँ हैं।"
    }
  }
];

export default livingNonliving;
