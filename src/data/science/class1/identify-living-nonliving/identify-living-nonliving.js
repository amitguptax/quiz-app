const questions = [
  {
    id: 1,
    question: {
      en: "Which of the following is a living thing?",
      hi: "निम्न में से कौन एक सजीव है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Table", hi: "मेज़" },
      { en: "Rock", hi: "पत्थर" },
      { en: "Chair", hi: "कुर्सी" }
    ],
    correct: { en: "Dog", hi: "कुत्ता" },
    explanation: {
      en: "A dog breathes, grows, and moves, so it is a living thing.",
      hi: "कुत्ता साँस लेता है, बढ़ता है और चलता है, इसलिए यह सजीव है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these does NOT grow?",
      hi: "इनमें से कौन नहीं बढ़ता?"
    },
    options: [
      { en: "Plant", hi: "पौधा" },
      { en: "Pencil", hi: "पेंसिल" },
      { en: "Cat", hi: "बिल्ली" },
      { en: "Bird", hi: "पक्षी" }
    ],
    correct: { en: "Pencil", hi: "पेंसिल" },
    explanation: {
      en: "Pencils are non-living; they don’t grow.",
      hi: "पेंसिल निर्जीव होती है; यह नहीं बढ़ती।"
    }
  },
  {
    id: 3,
    question: {
      en: "What do all living things need to survive?",
      hi: "सभी सजीवों को जीवित रहने के लिए क्या चाहिए?"
    },
    options: [
      { en: "Air", hi: "हवा" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Chair", hi: "कुर्सी" },
      { en: "Pen", hi: "पेन" }
    ],
    correct: { en: "Air", hi: "हवा" },
    explanation: {
      en: "All living things need air to breathe.",
      hi: "सभी सजीवों को साँस लेने के लिए हवा चाहिए।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which one is a non-living thing?",
      hi: "इनमें से कौन एक निर्जीव वस्तु है?"
    },
    options: [
      { en: "Fish", hi: "मछली" },
      { en: "Tree", hi: "पेड़" },
      { en: "Rock", hi: "पत्थर" },
      { en: "Boy", hi: "लड़का" }
    ],
    correct: { en: "Rock", hi: "पत्थर" },
    explanation: {
      en: "A rock does not eat, grow, or move on its own. It is non-living.",
      hi: "पत्थर न तो खाता है, न बढ़ता है, न ही खुद से चलता है। यह निर्जीव है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following can move on its own?",
      hi: "निम्न में से कौन स्वयं चल सकता है?"
    },
    options: [
      { en: "Fan", hi: "पंखा" },
      { en: "Cat", hi: "बिल्ली" },
      { en: "Table", hi: "मेज़" },
      { en: "Book", hi: "किताब" }
    ],
    correct: { en: "Cat", hi: "बिल्ली" },
    explanation: {
      en: "Living things like a cat can move by themselves.",
      hi: "सजीव जैसे कि बिल्ली स्वयं चल सकते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which one of these breathes?",
      hi: "इनमें से कौन साँस लेता है?"
    },
    options: [
      { en: "Plant", hi: "पौधा" },
      { en: "Bag", hi: "बैग" },
      { en: "Ball", hi: "गेंद" },
      { en: "Chair", hi: "कुर्सी" }
    ],
    correct: { en: "Plant", hi: "पौधा" },
    explanation: {
      en: "Plants are living things and they breathe through tiny holes in leaves.",
      hi: "पौधे सजीव होते हैं और वे पत्तियों में छिद्रों के माध्यम से साँस लेते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which one cannot feel pain?",
      hi: "इनमें से कौन दर्द महसूस नहीं कर सकता?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Boy", hi: "लड़का" },
      { en: "Stone", hi: "पत्थर" },
      { en: "Bird", hi: "पक्षी" }
    ],
    correct: { en: "Stone", hi: "पत्थर" },
    explanation: {
      en: "Stones are non-living and do not feel anything.",
      hi: "पत्थर निर्जीव होता है और कुछ भी महसूस नहीं करता।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is a group of non-living things?",
      hi: "निम्न में से कौन निर्जीव वस्तुओं का समूह है?"
    },
    options: [
      { en: "Chair, Rock, Pen", hi: "कुर्सी, पत्थर, पेन" },
      { en: "Cat, Dog, Cow", hi: "बिल्ली, कुत्ता, गाय" },
      { en: "Bird, Tree, Fish", hi: "पक्षी, पेड़, मछली" },
      { en: "Boy, Plant, Dog", hi: "लड़का, पौधा, कुत्ता" }
    ],
    correct: { en: "Chair, Rock, Pen", hi: "कुर्सी, पत्थर, पेन" },
    explanation: {
      en: "All are man-made or natural non-living things.",
      hi: "ये सभी मानव निर्मित या प्राकृतिक निर्जीव वस्तुएँ हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these cannot move on their own?",
      hi: "इनमें से कौन स्वयं नहीं चल सकता?"
    },
    options: [
      { en: "Fan", hi: "पंखा" },
      { en: "Bird", hi: "पक्षी" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cow", hi: "गाय" }
    ],
    correct: { en: "Fan", hi: "पंखा" },
    explanation: {
      en: "Fan moves only when electricity is given. It cannot move on its own.",
      hi: "पंखा केवल बिजली मिलने पर चलता है, खुद से नहीं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which one is a man-made non-living thing?",
      hi: "इनमें से कौन मानव निर्मित निर्जीव वस्तु है?"
    },
    options: [
      { en: "Chair", hi: "कुर्सी" },
      { en: "Tree", hi: "पेड़" },
      { en: "Fish", hi: "मछली" },
      { en: "Bird", hi: "पक्षी" }
    ],
    correct: { en: "Chair", hi: "कुर्सी" },
    explanation: {
      en: "Chair is made by humans and does not have life.",
      hi: "कुर्सी मानव द्वारा बनाई जाती है और इसमें जीवन नहीं होता।"
    }
  }
];

export default questions;
