const keepingSurroundingsClean = [
  {
    id: 1,
    question: {
      en: "Why should we keep our surroundings clean?",
      hi: "हमें अपने आसपास की सफाई क्यों रखनी चाहिए?"
    },
    options: [
      { en: "To stay healthy", hi: "स्वस्थ रहने के लिए" },
      { en: "To make it dirty", hi: "गंदा करने के लिए" },
      { en: "To attract flies", hi: "मक्खियों को आकर्षित करने के लिए" },
      { en: "To spread diseases", hi: "बीमारियाँ फैलाने के लिए" }
    ],
    correct: {
      en: "To stay healthy",
      hi: "स्वस्थ रहने के लिए"
    },
    explanation: {
      en: "Clean surroundings prevent the spread of germs and diseases.",
      hi: "साफ-सुथरा वातावरण कीटाणुओं और बीमारियों को फैलने से रोकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should we do with garbage?",
      hi: "हमें कचरे का क्या करना चाहिए?"
    },
    options: [
      { en: "Put it in the dustbin", hi: "डस्टबिन में डालना" },
      { en: "Throw it on the road", hi: "सड़क पर फेंकना" },
      { en: "Hide it", hi: "छिपा देना" },
      { en: "Burn it openly", hi: "खुले में जलाना" }
    ],
    correct: {
      en: "Put it in the dustbin",
      hi: "डस्टबिन में डालना"
    },
    explanation: {
      en: "Garbage should always be disposed of properly in dustbins.",
      hi: "कचरे को हमेशा डस्टबिन में डालना चाहिए।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following helps in keeping the environment clean?",
      hi: "इनमें से कौन पर्यावरण को साफ रखने में मदद करता है?"
    },
    options: [
      { en: "Planting trees", hi: "पेड़ लगाना" },
      { en: "Throwing plastic bags", hi: "प्लास्टिक बैग फेंकना" },
      { en: "Writing on walls", hi: "दीवारों पर लिखना" },
      { en: "Spitting on roads", hi: "सड़कों पर थूकना" }
    ],
    correct: {
      en: "Planting trees",
      hi: "पेड़ लगाना"
    },
    explanation: {
      en: "Planting trees keeps the air clean and adds beauty to our surroundings.",
      hi: "पेड़ लगाने से हवा साफ रहती है और वातावरण सुंदर होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Where should we throw waste paper?",
      hi: "हमें कचरे वाले कागज़ कहाँ फेंकने चाहिए?"
    },
    options: [
      { en: "In the dustbin", hi: "डस्टबिन में" },
      { en: "On the floor", hi: "ज़मीन पर" },
      { en: "In the cupboard", hi: "अलमारी में" },
      { en: "On the bed", hi: "बिस्तर पर" }
    ],
    correct: {
      en: "In the dustbin",
      hi: "डस्टबिन में"
    },
    explanation: {
      en: "Waste paper should always be disposed of in a dustbin.",
      hi: "कागज़ को हमेशा डस्टबिन में फेंकना चाहिए।"
    }
  },
  {
    id: 5,
    question: {
      en: "What should we not do in public places?",
      hi: "हमें सार्वजनिक स्थानों पर क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Spit", hi: "थूकना" },
      { en: "Use dustbins", hi: "डस्टबिन का उपयोग करना" },
      { en: "Keep silence", hi: "शांति बनाए रखना" },
      { en: "Walk on paths", hi: "पगडंडी पर चलना" }
    ],
    correct: {
      en: "Spit",
      hi: "थूकना"
    },
    explanation: {
      en: "Spitting in public places makes them dirty and spreads diseases.",
      hi: "सार्वजनिक स्थानों पर थूकने से गंदगी और बीमारियाँ फैलती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "How can we keep our school clean?",
      hi: "हम अपने स्कूल को कैसे साफ रख सकते हैं?"
    },
    options: [
      { en: "Throw waste in bins", hi: "कचरा डस्टबिन में डालकर" },
      { en: "Write on walls", hi: "दीवारों पर लिखकर" },
      { en: "Spill water", hi: "पानी गिराकर" },
      { en: "Break benches", hi: "बेंच तोड़कर" }
    ],
    correct: {
      en: "Throw waste in bins",
      hi: "कचरा डस्टबिन में डालकर"
    },
    explanation: {
      en: "Proper waste disposal keeps school neat and clean.",
      hi: "कचरे को डस्टबिन में डालने से स्कूल साफ रहता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is a clean habit?",
      hi: "इनमें से कौन सी एक साफ-सुथरी आदत है?"
    },
    options: [
      { en: "Cleaning our room", hi: "अपने कमरे की सफाई करना" },
      { en: "Throwing wrappers on floor", hi: "रैपर ज़मीन पर फेंकना" },
      { en: "Stepping on garbage", hi: "कचरे पर चलना" },
      { en: "Spilling ink", hi: "स्याही फैलाना" }
    ],
    correct: {
      en: "Cleaning our room",
      hi: "अपने कमरे की सफाई करना"
    },
    explanation: {
      en: "Cleaning our room is part of good hygiene and cleanliness.",
      hi: "कमरे की सफाई अच्छी आदतों का हिस्सा है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should we do if we see garbage on the road?",
      hi: "अगर हम सड़क पर कचरा देखें तो हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Tell an elder or cleaner", hi: "बड़ों या सफाईकर्मी को बताना" },
      { en: "Kick it", hi: "लात मारना" },
      { en: "Ignore it", hi: "अनदेखा करना" },
      { en: "Play with it", hi: "उससे खेलना" }
    ],
    correct: {
      en: "Tell an elder or cleaner",
      hi: "बड़ों या सफाईकर्मी को बताना"
    },
    explanation: {
      en: "Reporting garbage helps keep public areas clean.",
      hi: "कचरे की जानकारी देने से जगह साफ रखने में मदद मिलती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why should we not throw plastic bags everywhere?",
      hi: "हमें प्लास्टिक बैग हर जगह क्यों नहीं फेंकने चाहिए?"
    },
    options: [
      { en: "They pollute the environment", hi: "वे पर्यावरण को प्रदूषित करते हैं" },
      { en: "They are colorful", hi: "वे रंगीन होते हैं" },
      { en: "They are useful", hi: "वे उपयोगी होते हैं" },
      { en: "They fly in the air", hi: "वे हवा में उड़ते हैं" }
    ],
    correct: {
      en: "They pollute the environment",
      hi: "वे पर्यावरण को प्रदूषित करते हैं"
    },
    explanation: {
      en: "Plastic does not decompose and pollutes soil and water.",
      hi: "प्लास्टिक नष्ट नहीं होता और मिट्टी व पानी को प्रदूषित करता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Who helps keep our surroundings clean?",
      hi: "हमारे आस-पास की सफाई कौन करता है?"
    },
    options: [
      { en: "Sanitation workers", hi: "सफाई कर्मचारी" },
      { en: "Painters", hi: "चित्रकार" },
      { en: "Barbers", hi: "नाई" },
      { en: "Drivers", hi: "चालक" }
    ],
    correct: {
      en: "Sanitation workers",
      hi: "सफाई कर्मचारी"
    },
    explanation: {
      en: "Sanitation workers clean public places and deserve respect.",
      hi: "सफाई कर्मचारी सार्वजनिक स्थानों को साफ रखते हैं और सम्मान के पात्र हैं।"
    }
  }
];

export default keepingSurroundingsClean;
