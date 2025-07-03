const bodyFunctions = [
  {
    id: 1,
    question: {
      en: "Which body part helps us to eat?",
      hi: "कौन सा अंग हमें खाने में मदद करता है?"
    },
    options: [
      { en: "Nose", hi: "नाक" },
      { en: "Mouth", hi: "मुख" },
      { en: "Ear", hi: "कान" },
      { en: "Eyes", hi: "आँखें" }
    ],
    correct: { en: "Mouth", hi: "मुख" },
    explanation: {
      en: "We use our mouth to eat food.",
      hi: "हम मुँह का उपयोग भोजन खाने के लिए करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which body part is used for walking?",
      hi: "चलने के लिए कौन सा अंग उपयोग होता है?"
    },
    options: [
      { en: "Hands", hi: "हाथ" },
      { en: "Legs", hi: "पैर" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: { en: "Legs", hi: "पैर" },
    explanation: {
      en: "We walk using our legs.",
      hi: "हम पैरों की मदद से चलते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which body part helps us to write?",
      hi: "कौन सा अंग हमें लिखने में मदद करता है?"
    },
    options: [
      { en: "Legs", hi: "पैर" },
      { en: "Mouth", hi: "मुख" },
      { en: "Hands", hi: "हाथ" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: { en: "Hands", hi: "हाथ" },
    explanation: {
      en: "We write using our hands.",
      hi: "हम अपने हाथों से लिखते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which body part is used to see?",
      hi: "देखने के लिए कौन सा अंग उपयोग होता है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Hands", hi: "हाथ" },
      { en: "Legs", hi: "पैर" },
      { en: "Ears", hi: "कान" }
    ],
    correct: { en: "Eyes", hi: "आँखें" },
    explanation: {
      en: "Eyes help us see things around us.",
      hi: "आँखें हमें हमारे चारों ओर की चीजें देखने में मदद करती हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of the body helps us smell?",
      hi: "कौन सा अंग हमें सूंघने में मदद करता है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Mouth", hi: "मुख" },
      { en: "Nose", hi: "नाक" },
      { en: "Hands", hi: "हाथ" }
    ],
    correct: { en: "Nose", hi: "नाक" },
    explanation: {
      en: "The nose is used to smell different things.",
      hi: "नाक का उपयोग विभिन्न चीज़ों को सूंघने के लिए किया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which body part helps us to listen?",
      hi: "हम सुनने के लिए किस अंग का उपयोग करते हैं?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Mouth", hi: "मुख" },
      { en: "Nose", hi: "नाक" },
      { en: "Ears", hi: "कान" }
    ],
    correct: { en: "Ears", hi: "कान" },
    explanation: {
      en: "We hear sounds with our ears.",
      hi: "हम अपने कानों से आवाज़ सुनते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which part helps us to hold things?",
      hi: "हम चीजों को पकड़ने के लिए किस अंग का उपयोग करते हैं?"
    },
    options: [
      { en: "Feet", hi: "पैर" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Hands", hi: "हाथ" },
      { en: "Ears", hi: "कान" }
    ],
    correct: { en: "Hands", hi: "हाथ" },
    explanation: {
      en: "We use hands to hold and carry objects.",
      hi: "हम हाथों का उपयोग वस्तुओं को पकड़ने और उठाने में करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "We smile using our:",
      hi: "हम किस अंग से मुस्कराते हैं?"
    },
    options: [
      { en: "Legs", hi: "पैर" },
      { en: "Mouth", hi: "मुख" },
      { en: "Hands", hi: "हाथ" },
      { en: "Ears", hi: "कान" }
    ],
    correct: { en: "Mouth", hi: "मुख" },
    explanation: {
      en: "Mouth is used for smiling, eating, and talking.",
      hi: "मुख मुस्कराने, खाने और बोलने के लिए उपयोग होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which body part helps us to stand?",
      hi: "हम खड़े होने के लिए किस अंग का उपयोग करते हैं?"
    },
    options: [
      { en: "Feet", hi: "पैर" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: { en: "Feet", hi: "पैर" },
    explanation: {
      en: "Feet provide balance and support to stand.",
      hi: "पैर खड़े होने में संतुलन और सहारा देते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which body part helps us to speak?",
      hi: "हम बात करने के लिए किस अंग का उपयोग करते हैं?"
    },
    options: [
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Mouth", hi: "मुख" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: { en: "Mouth", hi: "मुख" },
    explanation: {
      en: "We use our mouth and tongue to speak.",
      hi: "हम अपने मुँह और जीभ से बात करते हैं।"
    }
  }
];

export default bodyFunctions;
