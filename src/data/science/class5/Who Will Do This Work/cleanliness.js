const cleanliness = [
  {
    id: 1,
    question: {
      en: "Why is cleanliness important for health?",
      hi: "स्वास्थ्य के लिए साफ़-सफ़ाई क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "Prevents diseases", hi: "रोगों से बचाता है" },
      { en: "Makes noise", hi: "शोर करता है" },
      { en: "Consumes water", hi: "पानी खर्च करता है" },
      { en: "Creates dust", hi: "धूल बनाता है" }
    ],
    correct: {
      en: "Prevents diseases",
      hi: "रोगों से बचाता है"
    },
    explanation: {
      en: "Cleanliness helps prevent the spread of diseases.",
      hi: "साफ़-सफ़ाई रोगों के फैलाव को रोकती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should we do to keep our surroundings clean?",
      hi: "अपने आस-पास को साफ़ रखने के लिए हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Throw garbage in dustbins", hi: "कूड़ा कूड़ेदान में डालना चाहिए" },
      { en: "Throw garbage on roads", hi: "सड़क पर कूड़ा फेंकना चाहिए" },
      { en: "Burn garbage on road", hi: "सड़क पर कूड़ा जलाना चाहिए" },
      { en: "Ignore garbage", hi: "कूड़ा नजरअंदाज करना चाहिए" }
    ],
    correct: {
      en: "Throw garbage in dustbins",
      hi: "कूड़ा कूड़ेदान में डालना चाहिए"
    },
    explanation: {
      en: "Garbage should be disposed of properly in dustbins to keep surroundings clean.",
      hi: "आस-पास को साफ़ रखने के लिए कूड़ा कूड़ेदान में डालना चाहिए।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following helps maintain personal cleanliness?",
      hi: "व्यक्तिगत साफ़-सफ़ाई बनाए रखने में कौन मदद करता है?"
    },
    options: [
      { en: "Bathing regularly", hi: "नियमित नहाना" },
      { en: "Sleeping late", hi: "देर से सोना" },
      { en: "Eating junk food", hi: "जंक फूड खाना" },
      { en: "Skipping meals", hi: "भोजन छोड़ना" }
    ],
    correct: {
      en: "Bathing regularly",
      hi: "नियमित नहाना"
    },
    explanation: {
      en: "Bathing regularly keeps the body clean and healthy.",
      hi: "नियमित नहाना शरीर को साफ़ और स्वस्थ रखता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "How does cleanliness affect the environment?",
      hi: "साफ़-सफ़ाई पर्यावरण को कैसे प्रभावित करती है?"
    },
    options: [
      { en: "Keeps it healthy", hi: "स्वस्थ बनाती है" },
      { en: "Pollutes air", hi: "वायु प्रदूषित करती है" },
      { en: "Destroys plants", hi: "पौधों को नष्ट करती है" },
      { en: "Increases noise", hi: "शोर बढ़ाती है" }
    ],
    correct: {
      en: "Keeps it healthy",
      hi: "स्वस्थ बनाती है"
    },
    explanation: {
      en: "Clean surroundings protect plants, animals, and people.",
      hi: "साफ़-सुथरा पर्यावरण पौधों, जानवरों और लोगों की रक्षा करता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the role of water in cleanliness?",
      hi: "साफ़-सफ़ाई में पानी की क्या भूमिका है?"
    },
    options: [
      { en: "Cleans dirt and germs", hi: "गंदगी और कीटाणुओं को साफ़ करता है" },
      { en: "Makes things dirty", hi: "चीज़ों को गंदा करता है" },
      { en: "Dries the body", hi: "शरीर को सूखा देता है" },
      { en: "Creates dust", hi: "धूल बनाता है" }
    ],
    correct: {
      en: "Cleans dirt and germs",
      hi: "गंदगी और कीटाणुओं को साफ़ करता है"
    },
    explanation: {
      en: "Water helps remove dirt and kills germs from our body and surroundings.",
      hi: "पानी गंदगी हटाने और कीटाणुओं को मारने में मदद करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why should we wash our hands before eating?",
      hi: "खाने से पहले हाथ क्यों धोने चाहिए?"
    },
    options: [
      { en: "To remove germs", hi: "कीटाणु हटाने के लिए" },
      { en: "To dry hands", hi: "हाथ सूखा लेने के लिए" },
      { en: "To make hands dirty", hi: "हाथ गंदे करने के लिए" },
      { en: "To cool hands", hi: "हाथ ठंडे करने के लिए" }
    ],
    correct: {
      en: "To remove germs",
      hi: "कीटाणु हटाने के लिए"
    },
    explanation: {
      en: "Washing hands removes germs and prevents diseases.",
      hi: "हाथ धोने से कीटाणु हटते हैं और रोगों से बचाव होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What happens if cleanliness is ignored?",
      hi: "अगर साफ़-सफ़ाई की उपेक्षा की जाए तो क्या होता है?"
    },
    options: [
      { en: "Increase in diseases", hi: "रोग बढ़ जाते हैं" },
      { en: "Better health", hi: "स्वास्थ्य अच्छा रहता है" },
      { en: "Clean environment", hi: "साफ़ पर्यावरण होता है" },
      { en: "Happy life", hi: "खुशहाल जीवन" }
    ],
    correct: {
      en: "Increase in diseases",
      hi: "रोग बढ़ जाते हैं"
    },
    explanation: {
      en: "Ignoring cleanliness leads to the spread of diseases.",
      hi: "साफ़-सफ़ाई की उपेक्षा से रोग फैलते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Who is responsible for keeping public places clean?",
      hi: "सार्वजनिक स्थानों को साफ़ रखने की जिम्मेदारी किसकी है?"
    },
    options: [
      { en: "Only government", hi: "केवल सरकार" },
      { en: "Only cleaners", hi: "केवल सफाई कर्मचारी" },
      { en: "Everyone", hi: "सभी लोग" },
      { en: "Only children", hi: "केवल बच्चे" }
    ],
    correct: {
      en: "Everyone",
      hi: "सभी लोग"
    },
    explanation: {
      en: "Everyone should contribute to keeping public places clean.",
      hi: "सभी लोगों को सार्वजनिक स्थानों को साफ़ रखने में योगदान देना चाहिए।"
    }
  },
  {
    id: 9,
    question: {
      en: "How does cleanliness affect our mood and productivity?",
      hi: "साफ़-सफ़ाई हमारे मूड और उत्पादकता को कैसे प्रभावित करती है?"
    },
    options: [
      { en: "Improves mood and productivity", hi: "मूड और उत्पादकता बढ़ाती है" },
      { en: "Makes mood worse", hi: "मूड खराब करती है" },
      { en: "Reduces energy", hi: "ऊर्जा घटाती है" },
      { en: "No effect", hi: "कोई प्रभाव नहीं" }
    ],
    correct: {
      en: "Improves mood and productivity",
      hi: "मूड और उत्पादकता बढ़ाती है"
    },
    explanation: {
      en: "Cleanliness creates a pleasant environment that improves mood and work efficiency.",
      hi: "साफ़-सफ़ाई एक सुखद वातावरण बनाती है जो मूड और कार्यकुशलता बढ़ाती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which habit promotes cleanliness?",
      hi: "कौन सी आदत साफ़-सफ़ाई को बढ़ावा देती है?"
    },
    options: [
      { en: "Throwing waste properly", hi: "कचरा सही जगह फेंकना" },
      { en: "Spitting on road", hi: "सड़क पर थूकना" },
      { en: "Littering everywhere", hi: "हर जगह कचरा फेंकना" },
      { en: "Ignoring dirt", hi: "गंदगी को नजरअंदाज करना" }
    ],
    correct: {
      en: "Throwing waste properly",
      hi: "कचरा सही जगह फेंकना"
    },
    explanation: {
      en: "Proper waste disposal helps maintain cleanliness.",
      hi: "सही जगह कचरा फेंकने से साफ़-सफ़ाई बनी रहती है।"
    }
  }
];

export default cleanliness;
