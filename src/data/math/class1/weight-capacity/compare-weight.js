const questions = [
  {
    question: {
      en: "Which object is heavier?",
      hi: "कौन-सी वस्तु भारी है?"
    },
    options: [
      { en: "Feather", hi: "पंख" },
      { en: "Brick", hi: "ईंट" },
      { en: "Paper", hi: "कागज़" },
      { en: "Balloon", hi: "गुब्बारा" }
    ],
    correct: {
      en: "Brick",
      hi: "ईंट"
    },
    explanation: {
      en: "A brick is much heavier than a feather or paper.",
      hi: "ईंट पंख या कागज़ से कहीं अधिक भारी होती है।"
    }
  },
  {
    question: {
      en: "Which of these is lighter?",
      hi: "इनमें से कौन हल्की है?"
    },
    options: [
      { en: "Chair", hi: "कुर्सी" },
      { en: "Pencil", hi: "पेंसिल" },
      { en: "Water bottle", hi: "पानी की बोतल" },
      { en: "Book", hi: "किताब" }
    ],
    correct: {
      en: "Pencil",
      hi: "पेंसिल"
    },
    explanation: {
      en: "Pencil is the lightest among these objects.",
      hi: "इनमें पेंसिल सबसे हल्की वस्तु है।"
    }
  },
  {
    question: {
      en: "What is heavier than a balloon?",
      hi: "गुब्बारे से क्या भारी होता है?"
    },
    options: [
      { en: "Stone", hi: "पत्थर" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Cotton", hi: "रूई" },
      { en: "Feather", hi: "पंख" }
    ],
    correct: {
      en: "Stone",
      hi: "पत्थर"
    },
    explanation: {
      en: "A stone is definitely heavier than a balloon.",
      hi: "पत्थर गुब्बारे से ज़्यादा भारी होता है।"
    }
  },
  {
    question: {
      en: "Which is heavier: a book or a paper?",
      hi: "कौन भारी है: किताब या कागज़?"
    },
    options: [
      { en: "Book", hi: "किताब" },
      { en: "Paper", hi: "कागज़" },
      { en: "Both are same", hi: "दोनों समान" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Book",
      hi: "किताब"
    },
    explanation: {
      en: "A book has many pages, so it's heavier than a paper.",
      hi: "किताब में कई पन्ने होते हैं, इसलिए यह कागज़ से भारी होती है।"
    }
  },
  {
    question: {
      en: "Identify the lighter object.",
      hi: "हल्की वस्तु पहचानिए।"
    },
    options: [
      { en: "Table", hi: "मेज़" },
      { en: "Eraser", hi: "रबड़" },
      { en: "Bag", hi: "बैग" },
      { en: "Water jug", hi: "पानी का जग" }
    ],
    correct: {
      en: "Eraser",
      hi: "रबड़"
    },
    explanation: {
      en: "Eraser is lighter than all other items listed.",
      hi: "रबड़ बाकी सभी वस्तुओं से हल्की होती है।"
    }
  },
  {
    question: {
      en: "Which object would you lift easily?",
      hi: "कौन-सी वस्तु को आप आसानी से उठा सकते हैं?"
    },
    options: [
      { en: "Spoon", hi: "चम्मच" },
      { en: "Television", hi: "टीवी" },
      { en: "Fridge", hi: "फ्रिज" },
      { en: "Almirah", hi: "अलमारी" }
    ],
    correct: {
      en: "Spoon",
      hi: "चम्मच"
    },
    explanation: {
      en: "Spoon is the lightest and easiest to lift.",
      hi: "चम्मच सबसे हल्की होती है और आसानी से उठाई जा सकती है।"
    }
  },
  {
    question: {
      en: "Which is heavier: a filled bottle or an empty bottle?",
      hi: "कौन भारी है: भरी बोतल या खाली बोतल?"
    },
    options: [
      { en: "Filled bottle", hi: "भरी बोतल" },
      { en: "Empty bottle", hi: "खाली बोतल" },
      { en: "Both same", hi: "दोनों समान" },
      { en: "Can't say", hi: "कह नहीं सकते" }
    ],
    correct: {
      en: "Filled bottle",
      hi: "भरी बोतल"
    },
    explanation: {
      en: "Water adds weight to the bottle, making it heavier.",
      hi: "पानी वजन बढ़ाता है, इसलिए भरी बोतल भारी होती है।"
    }
  },
  {
    question: {
      en: "Which of the following is heavier?",
      hi: "निम्न में से कौन भारी है?"
    },
    options: [
      { en: "Mobile phone", hi: "मोबाइल फ़ोन" },
      { en: "Laptop", hi: "लैपटॉप" },
      { en: "Charger", hi: "चार्जर" },
      { en: "Pen", hi: "पेन" }
    ],
    correct: {
      en: "Laptop",
      hi: "लैपटॉप"
    },
    explanation: {
      en: "Laptop is heavier than other listed items.",
      hi: "लैपटॉप बाकी वस्तुओं की तुलना में भारी होता है।"
    }
  },
  {
    question: {
      en: "Identify the heavier item.",
      hi: "भारी वस्तु को पहचानें।"
    },
    options: [
      { en: "Notebook", hi: "कॉपी" },
      { en: "Bag of books", hi: "किताबों का बैग" },
      { en: "Pen", hi: "पेन" },
      { en: "Scale", hi: "स्केल" }
    ],
    correct: {
      en: "Bag of books",
      hi: "किताबों का बैग"
    },
    explanation: {
      en: "A bag of books is much heavier than a notebook or pen.",
      hi: "किताबों से भरा बैग, कॉपी या पेन से ज्यादा भारी होता है।"
    }
  },
  {
    question: {
      en: "Which is lighter?",
      hi: "कौन हल्का है?"
    },
    options: [
      { en: "Ball", hi: "गेंद" },
      { en: "Football", hi: "फुटबॉल" },
      { en: "Needle", hi: "सुई" },
      { en: "Toy truck", hi: "खिलौना ट्रक" }
    ],
    correct: {
      en: "Needle",
      hi: "सुई"
    },
    explanation: {
      en: "A needle is extremely light compared to the others.",
      hi: "सुई बाकी वस्तुओं की तुलना में बहुत हल्की होती है।"
    }
  }
];

export default { questions };
