const electricComponents = [
  {
    id: 1,
    question: {
      en: "Which of the following is a source of electricity?",
      hi: "निम्न में से कौन बिजली का स्रोत है?"
    },
    options: [
      { en: "Bulb", hi: "बल्ब" },
      { en: "Wire", hi: "तार" },
      { en: "Battery", hi: "बैटरी" },
      { en: "Switch", hi: "स्विच" }
    ],
    correct: {
      en: "Battery",
      hi: "बैटरी"
    },
    explanation: {
      en: "Battery is a source of electricity used in circuits.",
      hi: "बैटरी एक बिजली का स्रोत है जो परिपथों में उपयोग होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which component is used to open or close a circuit?",
      hi: "परिपथ को खोलने या बंद करने के लिए कौन सा अवयव उपयोग किया जाता है?"
    },
    options: [
      { en: "Battery", hi: "बैटरी" },
      { en: "Bulb", hi: "बल्ब" },
      { en: "Switch", hi: "स्विच" },
      { en: "Wire", hi: "तार" }
    ],
    correct: {
      en: "Switch",
      hi: "स्विच"
    },
    explanation: {
      en: "Switch helps to open or close an electric circuit.",
      hi: "स्विच परिपथ को खोलने या बंद करने में सहायक होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which component glows when electricity flows through it?",
      hi: "कौन सा अवयव बिजली प्रवाहित होने पर चमकता है?"
    },
    options: [
      { en: "Battery", hi: "बैटरी" },
      { en: "Switch", hi: "स्विच" },
      { en: "Bulb", hi: "बल्ब" },
      { en: "Wire", hi: "तार" }
    ],
    correct: {
      en: "Bulb",
      hi: "बल्ब"
    },
    explanation: {
      en: "Bulb glows when electric current flows through it.",
      hi: "बल्ब बिजली प्रवाहित होने पर चमकता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which component connects all parts of a circuit?",
      hi: "परिपथ के सभी हिस्सों को जोड़ने वाला अवयव कौन है?"
    },
    options: [
      { en: "Battery", hi: "बैटरी" },
      { en: "Switch", hi: "स्विच" },
      { en: "Wire", hi: "तार" },
      { en: "Bulb", hi: "बल्ब" }
    ],
    correct: {
      en: "Wire",
      hi: "तार"
    },
    explanation: {
      en: "Wires connect components and allow current to flow.",
      hi: "तार अवयवों को जोड़ते हैं और विद्युत प्रवाह को संभव बनाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What do we call the path through which electricity flows?",
      hi: "जिस मार्ग से बिजली बहती है उसे क्या कहते हैं?"
    },
    options: [
      { en: "Battery", hi: "बैटरी" },
      { en: "Circuit", hi: "परिपथ" },
      { en: "Bulb", hi: "बल्ब" },
      { en: "Switch", hi: "स्विच" }
    ],
    correct: {
      en: "Circuit",
      hi: "परिपथ"
    },
    explanation: {
      en: "Electricity flows through a complete path called a circuit.",
      hi: "बिजली एक संपूर्ण मार्ग से बहती है जिसे परिपथ कहते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which symbol is commonly used for a cell in circuit diagrams?",
      hi: "परिपथ आरेखों में सेल के लिए सामान्यतः कौन सा चिह्न प्रयोग होता है?"
    },
    options: [
      { en: "A circle", hi: "एक वृत्त" },
      { en: "A long and short line", hi: "एक लंबी और एक छोटी रेखा" },
      { en: "A rectangle", hi: "एक आयत" },
      { en: "A triangle", hi: "एक त्रिभुज" }
    ],
    correct: {
      en: "A long and short line",
      hi: "एक लंबी और एक छोटी रेखा"
    },
    explanation: {
      en: "A cell is shown by a long and short line in diagrams.",
      hi: "सेल को आरेख में लंबी और छोटी रेखा द्वारा दिखाया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which component stores chemical energy and provides electrical energy?",
      hi: "कौन सा अवयव रासायनिक ऊर्जा को विद्युत ऊर्जा में बदलता है?"
    },
    options: [
      { en: "Bulb", hi: "बल्ब" },
      { en: "Wire", hi: "तार" },
      { en: "Battery", hi: "बैटरी" },
      { en: "Switch", hi: "स्विच" }
    ],
    correct: {
      en: "Battery",
      hi: "बैटरी"
    },
    explanation: {
      en: "A battery stores chemical energy and gives electrical energy.",
      hi: "बैटरी रासायनिक ऊर्जा को संग्रहित करके विद्युत ऊर्जा प्रदान करती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is needed for a bulb to glow in a circuit?",
      hi: "परिपथ में बल्ब को चमकने के लिए क्या आवश्यक है?"
    },
    options: [
      { en: "Broken wire", hi: "टूटा हुआ तार" },
      { en: "Open switch", hi: "खुला स्विच" },
      { en: "Closed circuit", hi: "बंद परिपथ" },
      { en: "Rusty battery", hi: "जंग लगी बैटरी" }
    ],
    correct: {
      en: "Closed circuit",
      hi: "बंद परिपथ"
    },
    explanation: {
      en: "Electricity flows in a closed circuit, making the bulb glow.",
      hi: "बिजली बंद परिपथ में बहती है जिससे बल्ब चमकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which material is a good conductor of electricity?",
      hi: "निम्न में से कौन सा पदार्थ बिजली का अच्छा चालक है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Iron", hi: "लोहा" },
      { en: "Glass", hi: "कांच" }
    ],
    correct: {
      en: "Iron",
      hi: "लोहा"
    },
    explanation: {
      en: "Iron is a good conductor and allows electricity to pass through.",
      hi: "लोहा एक अच्छा चालक है और बिजली को प्रवाहित होने देता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which material is used to cover electric wires for safety?",
      hi: "बिजली के तारों को सुरक्षा के लिए किस पदार्थ से ढका जाता है?"
    },
    options: [
      { en: "Glass", hi: "कांच" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Metal", hi: "धातु" },
      { en: "Paper", hi: "कागज" }
    ],
    correct: {
      en: "Plastic",
      hi: "प्लास्टिक"
    },
    explanation: {
      en: "Plastic is an insulator and is used to cover wires safely.",
      hi: "प्लास्टिक एक कुचालक है और तारों को सुरक्षा के लिए ढकने में उपयोग होता है।"
    }
  }
];

export default electricComponents;
