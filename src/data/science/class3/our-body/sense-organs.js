const senseOrgans = [
  {
    id: 1,
    question: {
      en: "How many sense organs do we have?",
      hi: "हमारे पास कितनी इंद्रियाँ होती हैं?"
    },
    options: [
      { en: "Five", hi: "पाँच" },
      { en: "Four", hi: "चार" },
      { en: "Six", hi: "छह" },
      { en: "Three", hi: "तीन" }
    ],
    correct: {
      en: "Five",
      hi: "पाँच"
    },
    explanation: {
      en: "There are five main sense organs: eyes, ears, nose, tongue, and skin.",
      hi: "पाँच मुख्य इंद्रियाँ होती हैं: आँखें, कान, नाक, जीभ और त्वचा।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which organ helps us to see?",
      hi: "कौन सी इंद्रिय हमें देखने में मदद करती है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" }
    ],
    correct: {
      en: "Eyes",
      hi: "आँखें"
    },
    explanation: {
      en: "Eyes help us to see the world around us.",
      hi: "आँखें हमें अपने आसपास की दुनिया देखने में मदद करती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which sense organ helps us to hear sounds?",
      hi: "कौन सी इंद्रिय हमें ध्वनि सुनने में मदद करती है?"
    },
    options: [
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Tongue", hi: "जीभ" }
    ],
    correct: {
      en: "Ears",
      hi: "कान"
    },
    explanation: {
      en: "Ears help us to hear different sounds.",
      hi: "कान हमें विभिन्न ध्वनियाँ सुनने में मदद करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which sense organ helps us to smell?",
      hi: "कौन सी इंद्रिय सूंघने में मदद करती है?"
    },
    options: [
      { en: "Nose", hi: "नाक" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Ears", hi: "कान" }
    ],
    correct: {
      en: "Nose",
      hi: "नाक"
    },
    explanation: {
      en: "Nose helps us to smell things.",
      hi: "नाक हमें चीजों को सूंघने में मदद करती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which organ helps us to taste food?",
      hi: "हमें भोजन का स्वाद चखने में कौन सी इंद्रिय मदद करती है?"
    },
    options: [
      { en: "Tongue", hi: "जीभ" },
      { en: "Nose", hi: "नाक" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" }
    ],
    correct: {
      en: "Tongue",
      hi: "जीभ"
    },
    explanation: {
      en: "The tongue helps us taste sweet, salty, sour, and bitter food.",
      hi: "जीभ हमें मीठा, खट्टा, नमकीन और कड़वा स्वाद चखने में मदद करती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which sense organ helps us feel hot or cold?",
      hi: "कौन सी इंद्रिय हमें गर्म या ठंडा महसूस कराती है?"
    },
    options: [
      { en: "Skin", hi: "त्वचा" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Skin",
      hi: "त्वचा"
    },
    explanation: {
      en: "Skin helps us feel touch, hot, cold, and pain.",
      hi: "त्वचा हमें स्पर्श, गर्म, ठंडा और दर्द महसूस करने में मदद करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What do we use to taste ice cream?",
      hi: "हम आइसक्रीम का स्वाद चखने के लिए क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Tongue", hi: "जीभ" },
      { en: "Nose", hi: "नाक" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" }
    ],
    correct: {
      en: "Tongue",
      hi: "जीभ"
    },
    explanation: {
      en: "We use our tongue to taste different foods like ice cream.",
      hi: "हम अपनी जीभ से विभिन्न खाद्य पदार्थों का स्वाद लेते हैं, जैसे आइसक्रीम।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which organ is used to watch TV?",
      hi: "टीवी देखने के लिए कौन सी इंद्रिय का उपयोग होता है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" }
    ],
    correct: {
      en: "Eyes",
      hi: "आँखें"
    },
    explanation: {
      en: "We watch TV using our eyes.",
      hi: "हम अपनी आँखों से टीवी देखते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which sense helps us enjoy music?",
      hi: "कौन सी इंद्रिय हमें संगीत का आनंद लेने में मदद करती है?"
    },
    options: [
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Eyes", hi: "आँखें" }
    ],
    correct: {
      en: "Ears",
      hi: "कान"
    },
    explanation: {
      en: "We enjoy music through our ears.",
      hi: "हम कानों से संगीत का आनंद लेते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What helps us to feel pain?",
      hi: "हमें दर्द महसूस कराने में क्या मदद करता है?"
    },
    options: [
      { en: "Skin", hi: "त्वचा" },
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Skin",
      hi: "त्वचा"
    },
    explanation: {
      en: "Our skin helps us to feel pain, touch, and temperature.",
      hi: "हमारी त्वचा हमें दर्द, स्पर्श और तापमान महसूस करने में मदद करती है।"
    }
  }
];

export default senseOrgans;
