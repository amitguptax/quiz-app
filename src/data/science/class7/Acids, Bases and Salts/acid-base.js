const acidBaseIndicators = [
  {
    id: 1,
    question: {
      en: "Which of the following is an acid?",
      hi: "निम्न में से कौन एक अम्ल है?"
    },
    options: [
      { en: "Vinegar", hi: "सिरका" },
      { en: "Soap", hi: "साबुन" },
      { en: "Baking soda", hi: "खाने का सोडा" },
      { en: "Lime water", hi: "चूने का पानी" }
    ],
    correct: {
      en: "Vinegar",
      hi: "सिरका"
    },
    explanation: {
      en: "Vinegar contains acetic acid, which makes it acidic.",
      hi: "सिरके में एसीटिक अम्ल होता है, जो इसे अम्लीय बनाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the taste of bases?",
      hi: "क्षार का स्वाद कैसा होता है?"
    },
    options: [
      { en: "Sour", hi: "खट्टा" },
      { en: "Sweet", hi: "मीठा" },
      { en: "Bitter", hi: "कड़वा" },
      { en: "Salty", hi: "नमकीन" }
    ],
    correct: {
      en: "Bitter",
      hi: "कड़वा"
    },
    explanation: {
      en: "Bases usually taste bitter and feel soapy to touch.",
      hi: "क्षार सामान्यतः कड़वे स्वाद के होते हैं और छूने में साबुन जैसे होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is used as a natural acid-base indicator?",
      hi: "निम्न में से कौन एक प्राकृतिक अम्ल-क्षार सूचक के रूप में प्रयोग होता है?"
    },
    options: [
      { en: "Turmeric", hi: "हल्दी" },
      { en: "Salt", hi: "नमक" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Milk", hi: "दूध" }
    ],
    correct: {
      en: "Turmeric",
      hi: "हल्दी"
    },
    explanation: {
      en: "Turmeric changes color in presence of bases.",
      hi: "हल्दी क्षार के संपर्क में रंग बदलती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Litmus turns red in:",
      hi: "लिटमस किसमें लाल रंग में बदलता है?"
    },
    options: [
      { en: "Base", hi: "क्षार" },
      { en: "Acid", hi: "अम्ल" },
      { en: "Salt", hi: "लवण" },
      { en: "Water", hi: "पानी" }
    ],
    correct: {
      en: "Acid",
      hi: "अम्ल"
    },
    explanation: {
      en: "Litmus turns red in acids and blue in bases.",
      hi: "लिटमस अम्ल में लाल और क्षार में नीला हो जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is a base?",
      hi: "निम्न में से कौन एक क्षार है?"
    },
    options: [
      { en: "Lemon juice", hi: "नींबू का रस" },
      { en: "Curd", hi: "दही" },
      { en: "Baking soda", hi: "खाने का सोडा" },
      { en: "Orange", hi: "संतरा" }
    ],
    correct: {
      en: "Baking soda",
      hi: "खाने का सोडा"
    },
    explanation: {
      en: "Baking soda is a base and gives a bitter taste.",
      hi: "खाने का सोडा एक क्षार है और इसका स्वाद कड़वा होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What color does turmeric turn in a basic solution?",
      hi: "हल्दी क्षारीय विलयन में किस रंग में बदल जाती है?"
    },
    options: [
      { en: "Red", hi: "लाल" },
      { en: "Green", hi: "हरा" },
      { en: "Yellow", hi: "पीला" },
      { en: "Reddish brown", hi: "लाल-भूरा" }
    ],
    correct: {
      en: "Reddish brown",
      hi: "लाल-भूरा"
    },
    explanation: {
      en: "Turmeric turns reddish-brown in basic substances.",
      hi: "हल्दी क्षार में लाल-भूरे रंग में बदल जाती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the nature of lemon juice?",
      hi: "नींबू के रस का स्वभाव कैसा होता है?"
    },
    options: [
      { en: "Neutral", hi: "न्यूट्रल" },
      { en: "Basic", hi: "क्षारीय" },
      { en: "Acidic", hi: "अम्लीय" },
      { en: "Salty", hi: "नमकीन" }
    ],
    correct: {
      en: "Acidic",
      hi: "अम्लीय"
    },
    explanation: {
      en: "Lemon juice contains citric acid, so it is acidic.",
      hi: "नींबू के रस में साइट्रिक अम्ल होता है, इसलिए यह अम्लीय होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What happens when an acid reacts with a base?",
      hi: "जब अम्ल और क्षार आपस में क्रिया करते हैं तो क्या होता है?"
    },
    options: [
      { en: "Salt is formed", hi: "लवण बनता है" },
      { en: "Only acid remains", hi: "केवल अम्ल बचता है" },
      { en: "Only base remains", hi: "केवल क्षार बचता है" },
      { en: "Gas is released", hi: "गैस निकलती है" }
    ],
    correct: {
      en: "Salt is formed",
      hi: "लवण बनता है"
    },
    explanation: {
      en: "Acid + Base → Salt + Water (Neutralization Reaction)",
      hi: "अम्ल + क्षार → लवण + जल (उत्तपन्नता अभिक्रिया)"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following shows acidic behavior?",
      hi: "निम्न में से कौन अम्लीय व्यवहार दर्शाता है?"
    },
    options: [
      { en: "Lime water", hi: "चूने का पानी" },
      { en: "Washing soda", hi: "वाशिंग सोडा" },
      { en: "Orange juice", hi: "संतरे का रस" },
      { en: "Toothpaste", hi: "टूथपेस्ट" }
    ],
    correct: {
      en: "Orange juice",
      hi: "संतरे का रस"
    },
    explanation: {
      en: "Orange juice contains citric acid and is acidic.",
      hi: "संतरे के रस में साइट्रिक अम्ल होता है, जो इसे अम्लीय बनाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What color does blue litmus paper turn in acid?",
      hi: "नीला लिटमस अम्ल में किस रंग में बदलता है?"
    },
    options: [
      { en: "Red", hi: "लाल" },
      { en: "Green", hi: "हरा" },
      { en: "Yellow", hi: "पीला" },
      { en: "No change", hi: "कोई परिवर्तन नहीं" }
    ],
    correct: {
      en: "Red",
      hi: "लाल"
    },
    explanation: {
      en: "Blue litmus turns red in the presence of an acid.",
      hi: "नीला लिटमस अम्ल में लाल रंग में बदल जाता है।"
    }
  }
];
export default acidBaseIndicators;