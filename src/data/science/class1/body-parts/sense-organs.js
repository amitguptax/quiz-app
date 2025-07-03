const senseOrgans = [
  {
    question: {
      en: "How many sense organs do we have?",
      hi: "हमारे पास कुल कितनी इंद्रियाँ होती हैं?"
    },
    options: [
      { en: "3", hi: "3" },
      { en: "5", hi: "5" },
      { en: "7", hi: "7" },
      { en: "10", hi: "10" }
    ],
    correct: { en: "5", hi: "5" },
    explanation: {
      en: "We have five sense organs: eyes, ears, nose, tongue, and skin.",
      hi: "हमारी पाँच इंद्रियाँ होती हैं: आँखें, कान, नाक, जीभ और त्वचा।"
    }
  },
  {
    question: {
      en: "Which sense organ helps us to see?",
      hi: "कौन सी इंद्रिय हमें देखने में मदद करती है?"
    },
    options: [
      { en: "Nose", hi: "नाक" },
      { en: "Ears", hi: "कान" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Skin", hi: "त्वचा" }
    ],
    correct: { en: "Eyes", hi: "आँखें" },
    explanation: {
      en: "Eyes help us to see things around us.",
      hi: "आँखें हमें आसपास की चीजें देखने में मदद करती हैं।"
    }
  },
  {
    question: {
      en: "Which organ helps us to hear sounds?",
      hi: "हमें ध्वनि सुनने में कौन सी इंद्रिय मदद करती है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Ears", hi: "कान" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: { en: "Ears", hi: "कान" },
    explanation: {
      en: "Ears are used to hear sounds.",
      hi: "कानों का उपयोग ध्वनियाँ सुनने के लिए होता है।"
    }
  },
  {
    question: {
      en: "Which organ helps us to smell?",
      hi: "हमें सूंघने में कौन सी इंद्रिय मदद करती है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Nose", hi: "नाक" },
      { en: "Skin", hi: "त्वचा" }
    ],
    correct: { en: "Nose", hi: "नाक" },
    explanation: {
      en: "The nose helps us smell things.",
      hi: "नाक हमें चीजों को सूंघने में मदद करती है।"
    }
  },
  {
    question: {
      en: "Which organ helps us to taste food?",
      hi: "हमें भोजन का स्वाद चखने में कौन सी इंद्रिय मदद करती है?"
    },
    options: [
      { en: "Nose", hi: "नाक" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Ears", hi: "कान" },
      { en: "Skin", hi: "त्वचा" }
    ],
    correct: { en: "Tongue", hi: "जीभ" },
    explanation: {
      en: "The tongue helps us taste sweet, salty, sour, and bitter.",
      hi: "जीभ हमें मीठा, खट्टा, नमकीन और कड़वा स्वाद चखने में मदद करती है।"
    }
  },
  {
    question: {
      en: "Which sense organ helps us to feel hot or cold?",
      hi: "हमें गर्म या ठंडा महसूस कराने में कौन सी इंद्रिय मदद करती है?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Ears", hi: "कान" },
      { en: "Nose", hi: "नाक" }
    ],
    correct: { en: "Skin", hi: "त्वचा" },
    explanation: {
      en: "Skin helps us feel touch, heat, and cold.",
      hi: "त्वचा हमें छूने, गर्मी और ठंडक महसूस करने में मदद करती है।"
    }
  },
  {
    question: {
      en: "We taste food with our:",
      hi: "हम भोजन का स्वाद किससे चखते हैं?"
    },
    options: [
      { en: "Eyes", hi: "आँखें" },
      { en: "Tongue", hi: "जीभ" },
      { en: "Skin", hi: "त्वचा" },
      { en: "Ears", hi: "कान" }
    ],
    correct: { en: "Tongue", hi: "जीभ" },
    explanation: {
      en: "Tongue has taste buds that help us identify flavors.",
      hi: "जीभ में स्वाद कलिकाएँ होती हैं जो स्वाद पहचानने में मदद करती हैं।"
    }
  },
  {
    question: {
      en: "We use our eyes to:",
      hi: "हम अपनी आँखों का उपयोग किसलिए करते हैं?"
    },
    options: [
      { en: "Smell", hi: "सूंघने" },
      { en: "Hear", hi: "सुनने" },
      { en: "See", hi: "देखने" },
      { en: "Taste", hi: "स्वाद लेने" }
    ],
    correct: { en: "See", hi: "देखने" },
    explanation: {
      en: "Eyes help us to see.",
      hi: "आँखें हमें देखने में मदद करती हैं।"
    }
  },
  {
    question: {
      en: "We feel a soft toy with our:",
      hi: "हम एक मुलायम खिलौने को किससे महसूस करते हैं?"
    },
    options: [
      { en: "Skin", hi: "त्वचा" },
      { en: "Eyes", hi: "आँखें" },
      { en: "Nose", hi: "नाक" },
      { en: "Ears", hi: "कान" }
    ],
    correct: { en: "Skin", hi: "त्वचा" },
    explanation: {
      en: "Skin allows us to feel textures and temperatures.",
      hi: "त्वचा हमें सतह और तापमान महसूस करने में मदद करती है।"
    }
  },
  {
    question: {
      en: "All the five sense organs are:",
      hi: "सभी पाँच इंद्रियाँ कौन-कौन सी हैं?"
    },
    options: [
      { en: "Eyes, Ears, Nose, Tongue, Skin", hi: "आँखें, कान, नाक, जीभ, त्वचा" },
      { en: "Legs, Hands, Ears, Nose, Skin", hi: "पैर, हाथ, कान, नाक, त्वचा" },
      { en: "Eyes, Hands, Nose, Mouth, Ears", hi: "आँखें, हाथ, नाक, मुँह, कान" },
      { en: "Tongue, Legs, Skin, Nose, Hands", hi: "जीभ, पैर, त्वचा, नाक, हाथ" }
    ],
    correct: { en: "Eyes, Ears, Nose, Tongue, Skin", hi: "आँखें, कान, नाक, जीभ, त्वचा" },
    explanation: {
      en: "The five sense organs are: Eyes, Ears, Nose, Tongue, Skin.",
      hi: "पाँच इंद्रियाँ हैं: आँखें, कान, नाक, जीभ और त्वचा।"
    }
  }
];

export default senseOrgans;
