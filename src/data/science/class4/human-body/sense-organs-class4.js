const senseOrgans = [
  {
    id: 1,
    question: {
      en: "How many sense organs does the human body have?",
      hi: "मानव शरीर में कितनी इंद्रियाँ होती हैं?"
    },
    options: [
      { en: "Three", hi: "तीन" },
      { en: "Five", hi: "पाँच" },
      { en: "Seven", hi: "सात" },
      { en: "Ten", hi: "दस" }
    ],
    correct: {
      en: "Five",
      hi: "पाँच"
    },
    explanation: {
      en: "The human body has five sense organs: eyes, ears, nose, tongue, and skin.",
      hi: "मानव शरीर में पाँच इंद्रियाँ होती हैं: आँखें, कान, नाक, जीभ और त्वचा।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which sense organ helps us to see?",
      hi: "कौन सी इंद्रिय हमें देखने में मदद करती है?"
    },
    options: [
      { en: "Ear", hi: "कान" },
      { en: "Eye", hi: "आँख" },
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" }
    ],
    correct: {
      en: "Eye",
      hi: "आँख"
    },
    explanation: {
      en: "Eyes help us to see the world around us.",
      hi: "आँखें हमें अपने चारों ओर की दुनिया देखने में मदद करती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which organ helps us to hear sounds?",
      hi: "कौन सा अंग हमें ध्वनि सुनने में मदद करता है?"
    },
    options: [
      { en: "Ear", hi: "कान" },
      { en: "Eye", hi: "आँख" },
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" }
    ],
    correct: {
      en: "Ear",
      hi: "कान"
    },
    explanation: {
      en: "Ears help us to hear different types of sounds.",
      hi: "कान हमें विभिन्न प्रकार की ध्वनियाँ सुनने में मदद करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which sense organ is used to smell things?",
      hi: "किस इंद्रिय से हम गंध सूंघते हैं?"
    },
    options: [
      { en: "Ear", hi: "कान" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" }
    ],
    correct: {
      en: "Nose",
      hi: "नाक"
    },
    explanation: {
      en: "The nose helps us to smell different odors.",
      hi: "नाक हमें विभिन्न गंधों को सूंघने में मदद करती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which sense organ helps us to taste food?",
      hi: "कौन सी इंद्रिय हमें भोजन का स्वाद चखने में मदद करती है?"
    },
    options: [
      { en: "Skin", hi: "त्वचा" },
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Ear", hi: "कान" }
    ],
    correct: {
      en: "Tongue",
      hi: "जीभ"
    },
    explanation: {
      en: "The tongue helps us taste things like sweet, sour, salty, and bitter.",
      hi: "जीभ हमें मीठा, खट्टा, नमकीन और कड़वा स्वाद चखने में मदद करती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which sense organ helps us to feel touch?",
      hi: "कौन सी इंद्रिय हमें स्पर्श महसूस करने में मदद करती है?"
    },
    options: [
      { en: "Skin", hi: "त्वचा" },
      { en: "Ear", hi: "कान" },
      { en: "Nose", hi: "नाक" },
      { en: "Eye", hi: "आँख" }
    ],
    correct: {
      en: "Skin",
      hi: "त्वचा"
    },
    explanation: {
      en: "The skin helps us feel touch, pain, heat, and cold.",
      hi: "त्वचा हमें स्पर्श, दर्द, गर्मी और ठंड महसूस करने में मदद करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which part of the tongue helps us taste bitter things?",
      hi: "जीभ का कौन सा भाग कड़वा स्वाद महसूस करता है?"
    },
    options: [
      { en: "Front", hi: "सामने का भाग" },
      { en: "Back", hi: "पीछे का भाग" },
      { en: "Sides", hi: "किनारे" },
      { en: "Middle", hi: "मध्य भाग" }
    ],
    correct: {
      en: "Back",
      hi: "पीछे का भाग"
    },
    explanation: {
      en: "The back of the tongue helps us taste bitter things.",
      hi: "जीभ का पिछला भाग कड़वा स्वाद चखने में मदद करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What does the skin sense?",
      hi: "त्वचा किसे महसूस करती है?"
    },
    options: [
      { en: "Light", hi: "प्रकाश" },
      { en: "Touch", hi: "स्पर्श" },
      { en: "Smell", hi: "गंध" },
      { en: "Sound", hi: "ध्वनि" }
    ],
    correct: {
      en: "Touch",
      hi: "स्पर्श"
    },
    explanation: {
      en: "Skin is the sense organ that helps us feel touch and temperature.",
      hi: "त्वचा एक इंद्रिय है जो हमें स्पर्श और तापमान महसूस करने में मदद करती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which organ detects sound vibrations?",
      hi: "कौन सा अंग ध्वनि कंपन को पहचानता है?"
    },
    options: [
      { en: "Eye", hi: "आँख" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Ear", hi: "कान" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Ear",
      hi: "कान"
    },
    explanation: {
      en: "Ears detect sound vibrations and help us hear.",
      hi: "कान ध्वनि कंपन को पहचानते हैं और हमें सुनने में मदद करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which sense organ should we protect from strong sunlight?",
      hi: "किस इंद्रिय को हमें तेज़ धूप से बचाना चाहिए?"
    },
    options: [
      { en: "Ear", hi: "कान" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Eye", hi: "आँख" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Eye",
      hi: "आँख"
    },
    explanation: {
      en: "We should protect our eyes from strong sunlight using sunglasses or shade.",
      hi: "हमें अपनी आँखों को तेज़ धूप से धूप का चश्मा या छाया से बचाना चाहिए।"
    }
  }
];

export default senseOrgans;
