const questions = [
  {
    id: 1,
    question: {
      en: "How many sense organs do we have?",
      hi: "हमारे पास कितनी इंद्रियाँ होती हैं?"
    },
    options: [
      { en: "3", hi: "3" },
      { en: "4", hi: "4" },
      { en: "5", hi: "5" },
      { en: "6", hi: "6" }
    ],
    correct: {
      en: "5",
      hi: "5"
    },
    explanation: {
      en: "We have five sense organs: eyes, ears, nose, tongue, and skin.",
      hi: "हमारी पाँच इंद्रियाँ होती हैं: आँखें, कान, नाक, जीभ और त्वचा।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which sense organ helps us to see?",
      hi: "हमें देखने में कौन सी इंद्रिय मदद करती है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Skin", hi: "त्वचा" }
    ],
    correct: {
      en: "Eyes",
      hi: "आँखें"
    },
    explanation: {
      en: "We use our eyes to see.",
      hi: "हम अपनी आँखों से देखते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which sense organ helps us to hear?",
      hi: "हमें सुनने में कौन सी इंद्रिय मदद करती है?"
    },
    options: [
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Ears",
      hi: "कान"
    },
    explanation: {
      en: "We hear sounds using our ears.",
      hi: "हम अपने कानों से आवाज़ सुनते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which organ helps us to smell?",
      hi: "हमें सूंघने में कौन सी इंद्रिय मदद करती है?"
    },
    options: [
      { en: "Ears", hi: "कान" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" }
    ],
    correct: {
      en: "Nose",
      hi: "नाक"
    },
    explanation: {
      en: "We smell with our nose.",
      hi: "हम अपनी नाक से सूंघते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which organ helps us to taste?",
      hi: "हमें स्वाद लेने में कौन सी इंद्रिय मदद करती है?"
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
      en: "We taste food using our tongue.",
      hi: "हम अपनी जीभ से भोजन का स्वाद लेते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which sense organ helps us to feel things?",
      hi: "हमें चीज़ों को महसूस करने में कौन सी इंद्रिय मदद करती है?"
    },
    options: [
      { en: "Skin", hi: "त्वचा" },
      { en: "Nose", hi: "नाक" },
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" }
    ],
    correct: {
      en: "Skin",
      hi: "त्वचा"
    },
    explanation: {
      en: "We feel hot, cold, soft, and hard with our skin.",
      hi: "हम गर्म, ठंडा, नरम और कठोर त्वचा से महसूस करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "We use our tongue to:",
      hi: "हम अपनी जीभ का उपयोग किस लिए करते हैं?"
    },
    options: [
      { en: "See", hi: "देखने के लिए" },
      { en: "Hear", hi: "सुनने के लिए" },
      { en: "Taste", hi: "स्वाद लेने के लिए" },
      { en: "Smell", hi: "सूंघने के लिए" }
    ],
    correct: {
      en: "Taste",
      hi: "स्वाद लेने के लिए"
    },
    explanation: {
      en: "Tongue helps us to taste sweet, sour, salty, and bitter foods.",
      hi: "जीभ हमें मीठा, खट्टा, नमकीन और कड़वा स्वाद लेने में मदद करती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which part helps us to feel pain?",
      hi: "हमें दर्द महसूस करने में कौन सा अंग मदद करता है?"
    },
    options: [
      { en: "Skin", hi: "त्वचा" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" }
    ],
    correct: {
      en: "Skin",
      hi: "त्वचा"
    },
    explanation: {
      en: "Our skin helps us feel pain or touch.",
      hi: "हमारी त्वचा हमें दर्द या स्पर्श महसूस कराती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which sense organ helps us know if something is hot or cold?",
      hi: "हमें किसी चीज़ के गर्म या ठंडे होने का पता कौन सी इंद्रिय लगाती है?"
    },
    options: [
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" }
    ],
    correct: {
      en: "Skin",
      hi: "त्वचा"
    },
    explanation: {
      en: "Skin helps us to feel temperature.",
      hi: "त्वचा हमें तापमान का अनुभव कराती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which sense organ helps you watch TV?",
      hi: "टीवी देखने में कौन सी इंद्रिय मदद करती है?"
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
      en: "Eyes help us watch shows and videos.",
      hi: "आँखें हमें टीवी पर कार्यक्रम और वीडियो देखने में मदद करती हैं।"
    }
  }
];

export default questions;
