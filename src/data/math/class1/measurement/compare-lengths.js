const compareLengths = {
  questions: [
    {
      id: 1,
      question: {
        en: "Which object is longer?",
        hi: "कौन सी वस्तु लंबी है?"
      },
      options: [
        { en: "Pencil", hi: "पेंसिल" },
        { en: "Eraser", hi: "रबड़" },
        { en: "Sharpener", hi: "शार्पनर" },
        { en: "Button", hi: "बटन" }
      ],
      correct: { en: "Pencil", hi: "पेंसिल" },
      explanation: {
        en: "Among the options, pencil has the greatest length.",
        hi: "इनमें से पेंसिल की लंबाई सबसे अधिक होती है।"
      }
    },
    {
      id: 2,
      question: {
        en: "Which is shorter than a ruler?",
        hi: "कौन सी वस्तु स्केल से छोटी है?"
      },
      options: [
        { en: "Notebook", hi: "कॉपी" },
        { en: "Pen", hi: "पेन" },
        { en: "Eraser", hi: "रबड़" },
        { en: "Pencil box", hi: "पेंसिल बॉक्स" }
      ],
      correct: { en: "Eraser", hi: "रबड़" },
      explanation: {
        en: "An eraser is much smaller than a ruler in length.",
        hi: "रबड़ की लंबाई स्केल से कम होती है।"
      }
    },
    {
      id: 3,
      question: {
        en: "A bus is _____ than a bicycle.",
        hi: "बस, साइकिल से _____ होती है।"
      },
      options: [
        { en: "shorter", hi: "छोटी" },
        { en: "longer", hi: "लंबी" },
        { en: "same", hi: "समान" },
        { en: "round", hi: "गोल" }
      ],
      correct: { en: "longer", hi: "लंबी" },
      explanation: {
        en: "A bus has more length than a bicycle.",
        hi: "बस की लंबाई साइकिल से अधिक होती है।"
      }
    },
    {
      id: 4,
      question: {
        en: "Which of the following is the longest?",
        hi: "इनमें से सबसे लंबी वस्तु कौन सी है?"
      },
      options: [
        { en: "Toothpick", hi: "दातून" },
        { en: "Stick", hi: "छड़ी" },
        { en: "Straw", hi: "पाइप" },
        { en: "Thread", hi: "धागा" }
      ],
      correct: { en: "Stick", hi: "छड़ी" },
      explanation: {
        en: "Sticks are generally longer than straws, threads or toothpicks.",
        hi: "छड़ी आमतौर पर दातून, पाइप या धागे से लंबी होती है।"
      }
    },
    {
      id: 5,
      question: {
        en: "Which is the shortest object?",
        hi: "सबसे छोटी वस्तु कौन सी है?"
      },
      options: [
        { en: "Book", hi: "पुस्तक" },
        { en: "Chair", hi: "कुर्सी" },
        { en: "Matchstick", hi: "माचिस की तीली" },
        { en: "Bag", hi: "बैग" }
      ],
      correct: { en: "Matchstick", hi: "माचिस की तीली" },
      explanation: {
        en: "Matchsticks are very short in length.",
        hi: "माचिस की तीलियाँ बहुत छोटी होती हैं।"
      }
    },
    {
      id: 6,
      question: {
        en: "Which is longer than a spoon?",
        hi: "चम्मच से लंबी वस्तु कौन सी है?"
      },
      options: [
        { en: "Fork", hi: "कांटा" },
        { en: "Knife", hi: "चाकू" },
        { en: "Rolling pin", hi: "बेलन" },
        { en: "Cap", hi: "टोपी" }
      ],
      correct: { en: "Rolling pin", hi: "बेलन" },
      explanation: {
        en: "A rolling pin is longer than a spoon.",
        hi: "बेलन, चम्मच से लंबा होता है।"
      }
    },
    {
      id: 7,
      question: {
        en: "Which two objects can we compare by length?",
        hi: "हम किन दो वस्तुओं की लंबाई की तुलना कर सकते हैं?"
      },
      options: [
        { en: "Pen and Pencil", hi: "पेन और पेंसिल" },
        { en: "Ball and Spoon", hi: "गेंद और चम्मच" },
        { en: "Cup and Plate", hi: "कप और प्लेट" },
        { en: "Chair and Fan", hi: "कुर्सी और पंखा" }
      ],
      correct: { en: "Pen and Pencil", hi: "पेन और पेंसिल" },
      explanation: {
        en: "Pen and pencil are straight objects and can be compared by length.",
        hi: "पेन और पेंसिल सीधी वस्तुएँ हैं, इनकी लंबाई की तुलना की जा सकती है।"
      }
    },
    {
      id: 8,
      question: {
        en: "A snake is _____ than a frog.",
        hi: "साँप, मेंढक से _____ होता है।"
      },
      options: [
        { en: "shorter", hi: "छोटा" },
        { en: "thinner", hi: "पतला" },
        { en: "longer", hi: "लंबा" },
        { en: "round", hi: "गोल" }
      ],
      correct: { en: "longer", hi: "लंबा" },
      explanation: {
        en: "Snakes are much longer in length than frogs.",
        hi: "साँप मेंढक से बहुत लंबा होता है।"
      }
    },
    {
      id: 9,
      question: {
        en: "Which of the following pairs are correct in decreasing length?",
        hi: "निम्न में से कौन सा जोड़ा लंबाई में घटते क्रम में है?"
      },
      options: [
        { en: "Bat, Pen, Eraser", hi: "बैट, पेन, रबड़" },
        { en: "Pencil, Scale, Notebook", hi: "पेंसिल, स्केल, कॉपी" },
        { en: "Chair, Table, Fan", hi: "कुर्सी, मेज़, पंखा" },
        { en: "Spoon, Fork, Knife", hi: "चम्मच, कांटा, चाकू" }
      ],
      correct: { en: "Bat, Pen, Eraser", hi: "बैट, पेन, रबड़" },
      explanation: {
        en: "This is the correct order of decreasing length.",
        hi: "यह घटते क्रम में सही लंबाई का क्रम है।"
      }
    },
    {
      id: 10,
      question: {
        en: "Which object will take more space due to its length?",
        hi: "किस वस्तु की लंबाई के कारण वह अधिक स्थान घेरती है?"
      },
      options: [
        { en: "Rope", hi: "रस्सी" },
        { en: "Ball", hi: "गेंद" },
        { en: "Eraser", hi: "रबड़" },
        { en: "Cup", hi: "कप" }
      ],
      correct: { en: "Rope", hi: "रस्सी" },
      explanation: {
        en: "Ropes are long and occupy more linear space.",
        hi: "रस्सियाँ लंबी होती हैं और अधिक रेखीय स्थान घेरती हैं।"
      }
    }
  ]
};

export default compareLengths;
