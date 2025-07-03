const externalParts = [
  {
    question: {
      en: "Which of the following is an external body part?",
      hi: "निम्न में से कौन सा बाहरी अंग है?"
    },
    options: [
      { en: "Heart", hi: "हृदय" },
      { en: "Leg", hi: "पैर" },
      { en: "Lungs", hi: "फेफड़े" },
      { en: "Brain", hi: "मस्तिष्क" }
    ],
    correct: { en: "Leg", hi: "पैर" },
    explanation: {
      en: "Leg is visible from outside, so it is an external part.",
      hi: "पैर बाहर से दिखाई देता है, इसलिए यह बाहरी अंग है।"
    }
  },
  {
    question: {
      en: "How many hands does a human have?",
      hi: "मनुष्य के कितने हाथ होते हैं?"
    },
    options: [
      { en: "1", hi: "1" },
      { en: "2", hi: "2" },
      { en: "3", hi: "3" },
      { en: "4", hi: "4" }
    ],
    correct: { en: "2", hi: "2" },
    explanation: {
      en: "A human has two hands used for many tasks.",
      hi: "मनुष्य के दो हाथ होते हैं जो कई कार्यों में उपयोग होते हैं।"
    }
  },
  {
    question: {
      en: "We walk with our:",
      hi: "हम किससे चलते हैं?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Legs", hi: "पैर" },
      { en: "Ears", hi: "कान" },
      { en: "Hands", hi: "हाथ" }
    ],
    correct: { en: "Legs", hi: "पैर" },
    explanation: {
      en: "We use our legs to walk and move.",
      hi: "हम पैरों का उपयोग चलने और घूमने के लिए करते हैं।"
    }
  },
  {
    question: {
      en: "Which part helps us to hold things?",
      hi: "कौन सा अंग हमें चीज़ें पकड़ने में मदद करता है?"
    },
    options: [
      { en: "Leg", hi: "पैर" },
      { en: "Hand", hi: "हाथ" },
      { en: "Eye", hi: "आँख" },
      { en: "Ear", hi: "कान" }
    ],
    correct: { en: "Hand", hi: "हाथ" },
    explanation: {
      en: "Hands are used to hold, lift, and carry objects.",
      hi: "हाथों का उपयोग पकड़ने, उठाने और ले जाने में होता है।"
    }
  },
  {
    question: {
      en: "What do we use to see?",
      hi: "हम देखने के लिए क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Hands", hi: "हाथ" }
    ],
    correct: { en: "Eyes", hi: "आँखें" },
    explanation: {
      en: "Eyes help us to see objects around us.",
      hi: "आँखें हमें हमारे चारों ओर की चीजें देखने में मदद करती हैं।"
    }
  },
  {
    question: {
      en: "Which part helps us smell things?",
      hi: "कौन सा अंग हमें सूंघने में मदद करता है?"
    },
    options: [
      { en: "Ear", hi: "कान" },
      { en: "Nose", hi: "नाक" },
      { en: "Eye", hi: "आँख" },
      { en: "Hand", hi: "हाथ" }
    ],
    correct: { en: "Nose", hi: "नाक" },
    explanation: {
      en: "The nose helps in smelling flowers, food, etc.",
      hi: "नाक फूलों, भोजन आदि की गंध पहचानने में मदद करती है।"
    }
  },
  {
    question: {
      en: "Which body part do we use to listen?",
      hi: "हम सुनने के लिए किस अंग का उपयोग करते हैं?"
    },
    options: [
      { en: "Hand", hi: "हाथ" },
      { en: "Leg", hi: "पैर" },
      { en: "Ear", hi: "कान" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: { en: "Ear", hi: "कान" },
    explanation: {
      en: "Ears are external body parts that help in hearing.",
      hi: "कान बाहरी अंग हैं जो सुनने में मदद करते हैं।"
    }
  },
  {
    question: {
      en: "We write with our:",
      hi: "हम किससे लिखते हैं?"
    },
    options: [
      { en: "Legs", hi: "पैर" },
      { en: "Mouth", hi: "मुख" },
      { en: "Hands", hi: "हाथ" },
      { en: "Eyes", hi: "आँखें" }
    ],
    correct: { en: "Hands", hi: "हाथ" },
    explanation: {
      en: "Hands hold the pen or pencil to write.",
      hi: "हाथ पेन या पेंसिल पकड़कर लिखने में मदद करते हैं।"
    }
  },
  {
    question: {
      en: "What do we use to talk?",
      hi: "हम बात करने के लिए किस अंग का उपयोग करते हैं?"
    },
    options: [
      { en: "Eye", hi: "आँख" },
      { en: "Mouth", hi: "मुख" },
      { en: "Ear", hi: "कान" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: { en: "Mouth", hi: "मुख" },
    explanation: {
      en: "We speak using our mouth and tongue.",
      hi: "हम मुँह और जीभ का उपयोग करके बोलते हैं।"
    }
  },
  {
    question: {
      en: "Which body part helps in running?",
      hi: "कौन सा अंग दौड़ने में मदद करता है?"
    },
    options: [
      { en: "Legs", hi: "पैर" },
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Mouth", hi: "मुख" }
    ],
    correct: { en: "Legs", hi: "पैर" },
    explanation: {
      en: "We use our legs to run and walk.",
      hi: "हम दौड़ने और चलने के लिए अपने पैरों का उपयोग करते हैं।"
    }
  }
];

export default externalParts;
