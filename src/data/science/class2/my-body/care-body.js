const questions = [
  {
    id: 1,
    question: {
      en: "Why should we take care of our body?",
      hi: "हमें अपने शरीर की देखभाल क्यों करनी चाहिए?"
    },
    options: [
      { en: "To stay healthy", hi: "स्वस्थ रहने के लिए" },
      { en: "To become lazy", hi: "आलसी बनने के लिए" },
      { en: "To sleep more", hi: "ज्यादा सोने के लिए" },
      { en: "To get dirty", hi: "गंदा रहने के लिए" }
    ],
    correct: {
      en: "To stay healthy",
      hi: "स्वस्थ रहने के लिए"
    },
    explanation: {
      en: "Taking care of our body keeps us healthy and happy.",
      hi: "शरीर की देखभाल करने से हम स्वस्थ और खुश रहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should we do every day to keep our body clean?",
      hi: "अपने शरीर को साफ रखने के लिए हमें हर दिन क्या करना चाहिए?"
    },
    options: [
      { en: "Take a bath", hi: "नहाना चाहिए" },
      { en: "Eat junk food", hi: "जंक फूड खाना चाहिए" },
      { en: "Wear dirty clothes", hi: "गंदे कपड़े पहनना चाहिए" },
      { en: "Play in mud", hi: "कीचड़ में खेलना चाहिए" }
    ],
    correct: {
      en: "Take a bath",
      hi: "नहाना चाहिए"
    },
    explanation: {
      en: "Bathing daily helps keep our body clean and free from germs.",
      hi: "हर दिन नहाने से शरीर साफ और कीटाणुओं से मुक्त रहता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "How many times should we brush our teeth?",
      hi: "हमें दिन में कितनी बार अपने दाँत ब्रश करने चाहिए?"
    },
    options: [
      { en: "Once", hi: "एक बार" },
      { en: "Twice", hi: "दो बार" },
      { en: "Never", hi: "कभी नहीं" },
      { en: "Four times", hi: "चार बार" }
    ],
    correct: {
      en: "Twice",
      hi: "दो बार"
    },
    explanation: {
      en: "We should brush our teeth in the morning and before sleeping.",
      hi: "हमें सुबह और सोने से पहले दो बार दाँत ब्रश करने चाहिए।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these is a good habit?",
      hi: "इनमें से कौन सी अच्छी आदत है?"
    },
    options: [
      { en: "Washing hands before eating", hi: "खाने से पहले हाथ धोना" },
      { en: "Not cutting nails", hi: "नाखून नहीं काटना" },
      { en: "Playing in dirty water", hi: "गंदे पानी में खेलना" },
      { en: "Wearing dirty clothes", hi: "गंदे कपड़े पहनना" }
    ],
    correct: {
      en: "Washing hands before eating",
      hi: "खाने से पहले हाथ धोना"
    },
    explanation: {
      en: "Washing hands removes germs and prevents illness.",
      hi: "हाथ धोने से कीटाणु हटते हैं और बीमारी नहीं होती।"
    }
  },
  {
    id: 5,
    question: {
      en: "What should we wear to stay clean?",
      hi: "साफ-सुथरे रहने के लिए हमें क्या पहनना चाहिए?"
    },
    options: [
      { en: "Clean clothes", hi: "साफ कपड़े" },
      { en: "Dirty clothes", hi: "गंदे कपड़े" },
      { en: "Wet clothes", hi: "गीले कपड़े" },
      { en: "Old shoes", hi: "पुराने जूते" }
    ],
    correct: {
      en: "Clean clothes",
      hi: "साफ कपड़े"
    },
    explanation: {
      en: "Wearing clean clothes helps us stay fresh and healthy.",
      hi: "साफ कपड़े पहनने से हम ताजगी और स्वास्थ्य बनाए रखते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why should we cut our nails regularly?",
      hi: "हमें अपने नाखून नियमित रूप से क्यों काटने चाहिए?"
    },
    options: [
      { en: "To avoid dirt and germs", hi: "गंदगी और कीटाणुओं से बचने के लिए" },
      { en: "To look tall", hi: "लंबा दिखने के लिए" },
      { en: "To run fast", hi: "तेज़ दौड़ने के लिए" },
      { en: "To look funny", hi: "मजेदार दिखने के लिए" }
    ],
    correct: {
      en: "To avoid dirt and germs",
      hi: "गंदगी और कीटाणुओं से बचने के लिए"
    },
    explanation: {
      en: "Long nails collect dirt and germs, so we should cut them.",
      hi: "लंबे नाखूनों में गंदगी और कीटाणु जमा हो जाते हैं, इसलिए उन्हें काटना चाहिए।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why should we sleep on time?",
      hi: "हमें समय पर सोना क्यों चाहिए?"
    },
    options: [
      { en: "To stay healthy", hi: "स्वस्थ रहने के लिए" },
      { en: "To play more", hi: "ज्यादा खेलने के लिए" },
      { en: "To eat sweets", hi: "मिठाई खाने के लिए" },
      { en: "To stay awake all night", hi: "पूरी रात जागने के लिए" }
    ],
    correct: {
      en: "To stay healthy",
      hi: "स्वस्थ रहने के लिए"
    },
    explanation: {
      en: "Sleeping on time helps the body rest and grow.",
      hi: "समय पर सोने से शरीर को आराम और विकास में मदद मिलती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "How does exercise help our body?",
      hi: "व्यायाम हमारे शरीर की कैसे मदद करता है?"
    },
    options: [
      { en: "Makes us healthy and strong", hi: "हमें स्वस्थ और मजबूत बनाता है" },
      { en: "Makes us sleepy", hi: "हमें नींद आता है" },
      { en: "Makes us dirty", hi: "हमें गंदा बनाता है" },
      { en: "Makes us angry", hi: "हमें गुस्सैल बनाता है" }
    ],
    correct: {
      en: "Makes us healthy and strong",
      hi: "हमें स्वस्थ और मजबूत बनाता है"
    },
    explanation: {
      en: "Daily exercise keeps our body fit and active.",
      hi: "नियमित व्यायाम हमारे शरीर को चुस्त और स्वस्थ रखता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should we do after playing?",
      hi: "खेलने के बाद हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Wash hands and feet", hi: "हाथ-पैर धोना चाहिए" },
      { en: "Eat without washing", hi: "बिना धोए खाना" },
      { en: "Sleep immediately", hi: "तुरंत सो जाना" },
      { en: "Wear muddy clothes", hi: "गंदे कपड़े पहनना" }
    ],
    correct: {
      en: "Wash hands and feet",
      hi: "हाथ-पैर धोना चाहिए"
    },
    explanation: {
      en: "Cleaning after playing removes dirt and keeps us clean.",
      hi: "खेलने के बाद सफाई करने से गंदगी हटती है और हम साफ रहते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What helps us stay clean and healthy?",
      hi: "हमें साफ और स्वस्थ रहने में क्या मदद करता है?"
    },
    options: [
      { en: "Good habits", hi: "अच्छी आदतें" },
      { en: "Skipping baths", hi: "न नहाना" },
      { en: "Eating junk food", hi: "जंक फूड खाना" },
      { en: "Wearing dirty shoes", hi: "गंदे जूते पहनना" }
    ],
    correct: {
      en: "Good habits",
      hi: "अच्छी आदतें"
    },
    explanation: {
      en: "Good habits like bathing, brushing, and washing hands keep us clean.",
      hi: "नहाना, ब्रश करना और हाथ धोना जैसी अच्छी आदतें हमें साफ-सुथरा और स्वस्थ रखती हैं।"
    }
  }
];

export default questions;
