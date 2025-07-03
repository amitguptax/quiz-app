const questions = [
  {
    id: 1,
    question: {
      en: "Which part of the body helps us to see?",
      hi: "शरीर का कौन सा अंग हमें देखने में मदद करता है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" },
      { en: "Mouth", hi: "मुंह" }
    ],
    correct: {
      en: "Eyes",
      hi: "आँखें"
    },
    explanation: {
      en: "We use our eyes to see things around us.",
      hi: "हम अपनी आँखों से आसपास की चीजें देखते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which body part helps us to walk?",
      hi: "कौन सा अंग हमें चलने में मदद करता है?"
    },
    options: [
      { en: "Hands", hi: "हाथ" },
      { en: "Legs", hi: "पैर" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Legs",
      hi: "पैर"
    },
    explanation: {
      en: "We use our legs to walk, run, and jump.",
      hi: "हम अपने पैरों का उपयोग चलने, दौड़ने और कूदने में करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which part of the body helps us to eat?",
      hi: "शरीर का कौन सा अंग हमें खाने में मदद करता है?"
    },
    options: [
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Mouth", hi: "मुंह" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Mouth",
      hi: "मुंह"
    },
    explanation: {
      en: "We eat food using our mouth.",
      hi: "हम अपने मुंह से खाना खाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which part helps us to hold things?",
      hi: "कौन सा अंग चीजों को पकड़ने में मदद करता है?"
    },
    options: [
      { en: "Feet", hi: "पाँव" },
      { en: "Legs", hi: "पैर" },
      { en: "Hands", hi: "हाथ" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: {
      en: "Hands",
      hi: "हाथ"
    },
    explanation: {
      en: "We use our hands to hold and lift objects.",
      hi: "हम अपने हाथों से वस्तुओं को पकड़ते और उठाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part helps us to smell?",
      hi: "हमें सूँघने में कौन सा अंग मदद करता है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Mouth", hi: "मुंह" },
      { en: "Nose", hi: "नाक" },
      { en: "Hands", hi: "हाथ" }
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
    id: 6,
    question: {
      en: "Which part of our body helps us to hear?",
      hi: "हमारे शरीर का कौन सा अंग सुनने में मदद करता है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" },
      { en: "Mouth", hi: "मुंह" }
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
    id: 7,
    question: {
      en: "Which part of the body helps us to write?",
      hi: "हमें लिखने में शरीर का कौन सा अंग मदद करता है?"
    },
    options: [
      { en: "Legs", hi: "पैर" },
      { en: "Nose", hi: "नाक" },
      { en: "Hands", hi: "हाथ" },
      { en: "Ears", hi: "कान" }
    ],
    correct: {
      en: "Hands",
      hi: "हाथ"
    },
    explanation: {
      en: "We use our hands and fingers to write.",
      hi: "हम अपने हाथों और उंगलियों से लिखते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which body part helps us to think?",
      hi: "कौन सा अंग सोचने में मदद करता है?"
    },
    options: [
      { en: "Heart", hi: "हृदय" },
      { en: "Brain", hi: "मस्तिष्क" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Legs", hi: "पैर" }
    ],
    correct: {
      en: "Brain",
      hi: "मस्तिष्क"
    },
    explanation: {
      en: "We use our brain to think and learn.",
      hi: "हम अपने मस्तिष्क से सोचते और सीखते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "How many fingers do we have in total?",
      hi: "हमारे पास कुल कितनी उंगलियाँ होती हैं?"
    },
    options: [
      { en: "8", hi: "8" },
      { en: "9", hi: "9" },
      { en: "10", hi: "10" },
      { en: "12", hi: "12" }
    ],
    correct: {
      en: "10",
      hi: "10"
    },
    explanation: {
      en: "We have five fingers on each hand, so ten in total.",
      hi: "हमारे हर हाथ में पाँच-पाँच उंगलियाँ होती हैं, कुल दस।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which part of the body do we use to run?",
      hi: "हम शरीर का कौन सा अंग दौड़ने के लिए उपयोग करते हैं?"
    },
    options: [
      { en: "Legs", hi: "पैर" },
      { en: "Hands", hi: "हाथ" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" }
    ],
    correct: {
      en: "Legs",
      hi: "पैर"
    },
    explanation: {
      en: "We use our legs to run.",
      hi: "हम अपने पैरों से दौड़ते हैं।"
    }
  }
];

export default questions;
