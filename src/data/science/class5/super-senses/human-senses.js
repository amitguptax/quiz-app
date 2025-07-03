const humanSenses = [
  {
    id: 1,
    question: {
      en: "How many sense organs do humans have?",
      hi: "मनुष्यों के पास कितनी इंद्रियाँ होती हैं?"
    },
    options: [
      { en: "Three", hi: "तीन" },
      { en: "Four", hi: "चार" },
      { en: "Five", hi: "पाँच" },
      { en: "Six", hi: "छह" }
    ],
    correct: {
      en: "Five",
      hi: "पाँच"
    },
    explanation: {
      en: "Humans have five sense organs: eyes, ears, nose, tongue, and skin.",
      hi: "मनुष्यों के पास पाँच इंद्रियाँ होती हैं: आँखें, कान, नाक, जीभ और त्वचा।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which sense organ helps us to see?",
      hi: "कौन सी इंद्रिय हमें देखने में मदद करती है?"
    },
    options: [
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" }
    ],
    correct: {
      en: "Eyes",
      hi: "आँखें"
    },
    explanation: {
      en: "Eyes help us to see things around us.",
      hi: "आँखें हमें अपने चारों ओर की चीजें देखने में मदद करती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which organ helps us to hear sounds?",
      hi: "कौन सा अंग हमें ध्वनियाँ सुनने में मदद करता है?"
    },
    options: [
      { en: "Skin", hi: "त्वचा" },
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Ears",
      hi: "कान"
    },
    explanation: {
      en: "Ears are used to hear different sounds.",
      hi: "कान का उपयोग विभिन्न ध्वनियाँ सुनने के लिए होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which sense organ helps to smell?",
      hi: "कौन सी इंद्रिय सूंघने में मदद करती है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" }
    ],
    correct: {
      en: "Nose",
      hi: "नाक"
    },
    explanation: {
      en: "The nose helps us to smell different things.",
      hi: "नाक हमें विभिन्न वस्तुओं की गंध पहचानने में मदद करती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which organ helps in tasting food?",
      hi: "खाद्य पदार्थों का स्वाद पहचानने में कौन सा अंग मदद करता है?"
    },
    options: [
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Ears", hi: "कान" },
      { en: "Tongue", hi: "जीभ" }
    ],
    correct: {
      en: "Tongue",
      hi: "जीभ"
    },
    explanation: {
      en: "The tongue helps us to taste sweet, sour, bitter, and salty foods.",
      hi: "जीभ हमें मीठा, खट्टा, कड़वा और नमकीन स्वाद पहचानने में मदद करती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the body helps us to feel touch?",
      hi: "शरीर का कौन सा भाग स्पर्श को महसूस करने में मदद करता है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Ears", hi: "कान" }
    ],
    correct: {
      en: "Skin",
      hi: "त्वचा"
    },
    explanation: {
      en: "Skin covers our body and helps us feel touch, heat, and pain.",
      hi: "त्वचा हमारे शरीर को ढकती है और स्पर्श, गर्मी और दर्द महसूस करने में मदद करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which sense helps us enjoy music?",
      hi: "कौन सी इंद्रिय हमें संगीत का आनंद लेने में मदद करती है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Ears",
      hi: "कान"
    },
    explanation: {
      en: "Ears allow us to hear and enjoy different types of music.",
      hi: "कान हमें संगीत सुनने और उसका आनंद लेने में मदद करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which organ is most active while reading?",
      hi: "पढ़ते समय कौन सा अंग सबसे अधिक सक्रिय होता है?"
    },
    options: [
      { en: "Ears", hi: "कान" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Eyes",
      hi: "आँखें"
    },
    explanation: {
      en: "While reading, we use our eyes to see letters and words.",
      hi: "पढ़ते समय हम अक्षरों और शब्दों को देखने के लिए आँखों का उपयोग करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is not a sense organ?",
      hi: "निम्न में से कौन एक इंद्रिय अंग नहीं है?"
    },
    options: [
      { en: "Ear", hi: "कान" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Brain", hi: "मस्तिष्क" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Brain",
      hi: "मस्तिष्क"
    },
    explanation: {
      en: "The brain is not a sense organ, it processes information.",
      hi: "मस्तिष्क इंद्रिय अंग नहीं है, यह सूचनाओं को संसाधित करता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which organ helps in detecting hot or cold?",
      hi: "कौन सा अंग गर्म या ठंडा महसूस करने में मदद करता है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Ears", hi: "कान" },
      { en: "Tongue", hi: "जीभ" }
    ],
    correct: {
      en: "Skin",
      hi: "त्वचा"
    },
    explanation: {
      en: "Our skin helps us feel temperature changes like hot or cold.",
      hi: "हमारी त्वचा हमें गर्म या ठंडे तापमान को महसूस करने में मदद करती है।"
    }
  }
];

export default humanSenses;
