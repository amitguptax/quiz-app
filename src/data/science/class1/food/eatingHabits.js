const eatingHabits = [
  {
    id: 1,
    question: {
      en: "What is a good time to eat meals?",
      hi: "भोजन करने का अच्छा समय कौन सा होता है?"
    },
    options: [
      { en: "Anytime", hi: "कभी भी" },
      { en: "At fixed times", hi: "निश्चित समय पर" },
      { en: "Only when watching TV", hi: "केवल टीवी देखते समय" },
      { en: "Late at night", hi: "रात को देर से" }
    ],
    correct: { en: "At fixed times", hi: "निश्चित समय पर" },
    explanation: {
      en: "Eating at fixed times helps digestion and keeps us healthy.",
      hi: "निश्चित समय पर खाना पचाने में मदद करता है और हमें स्वस्थ रखता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a good habit before eating?",
      hi: "खाने से पहले निम्न में से कौन सी अच्छी आदत है?"
    },
    options: [
      { en: "Washing hands", hi: "हाथ धोना" },
      { en: "Running", hi: "दौड़ लगाना" },
      { en: "Jumping", hi: "कूदना" },
      { en: "Sleeping", hi: "सोना" }
    ],
    correct: { en: "Washing hands", hi: "हाथ धोना" },
    explanation: {
      en: "Washing hands removes germs before eating.",
      hi: "हाथ धोने से खाने से पहले कीटाणु दूर हो जाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should we do after eating food?",
      hi: "भोजन करने के बाद हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Run", hi: "दौड़ना" },
      { en: "Brush teeth", hi: "दांत साफ करना" },
      { en: "Play", hi: "खेलना" },
      { en: "Sleep immediately", hi: "तुरंत सोना" }
    ],
    correct: { en: "Brush teeth", hi: "दांत साफ करना" },
    explanation: {
      en: "Brushing helps prevent tooth decay after eating.",
      hi: "भोजन के बाद दांतों को साफ करना दांतों की सड़न से बचाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What type of food should we eat more?",
      hi: "हमें किस प्रकार का भोजन अधिक खाना चाहिए?"
    },
    options: [
      { en: "Junk food", hi: "जंक फूड" },
      { en: "Healthy food", hi: "स्वस्थ भोजन" },
      { en: "Oily food", hi: "तेल वाला खाना" },
      { en: "Fried food", hi: "तला हुआ खाना" }
    ],
    correct: { en: "Healthy food", hi: "स्वस्थ भोजन" },
    explanation: {
      en: "Healthy food gives us energy and keeps us strong.",
      hi: "स्वस्थ भोजन हमें ऊर्जा देता है और मजबूत बनाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the benefit of chewing food properly?",
      hi: "भोजन को अच्छी तरह चबाने का क्या लाभ है?"
    },
    options: [
      { en: "It becomes tastier", hi: "यह स्वादिष्ट बनता है" },
      { en: "It digests better", hi: "यह अच्छे से पचता है" },
      { en: "It gets colder", hi: "यह ठंडा हो जाता है" },
      { en: "It looks good", hi: "यह अच्छा दिखता है" }
    ],
    correct: { en: "It digests better", hi: "यह अच्छे से पचता है" },
    explanation: {
      en: "Proper chewing helps in better digestion.",
      hi: "अच्छे से चबाने से भोजन अच्छे से पचता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should we avoid doing while eating?",
      hi: "खाते समय हमें क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Watching TV", hi: "टीवी देखना" },
      { en: "Sitting properly", hi: "अच्छे से बैठना" },
      { en: "Using spoon", hi: "चम्मच का उपयोग" },
      { en: "Chewing food", hi: "भोजन चबाना" }
    ],
    correct: { en: "Watching TV", hi: "टीवी देखना" },
    explanation: {
      en: "Watching TV while eating distracts us and may cause overeating.",
      hi: "टीवी देखने से ध्यान बंटता है और हम ज़्यादा खा सकते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How many meals should we eat in a day?",
      hi: "हमें एक दिन में कितने बार भोजन करना चाहिए?"
    },
    options: [
      { en: "One", hi: "एक बार" },
      { en: "Two", hi: "दो बार" },
      { en: "Three", hi: "तीन बार" },
      { en: "Five", hi: "पाँच बार" }
    ],
    correct: { en: "Three", hi: "तीन बार" },
    explanation: {
      en: "Eating three balanced meals a day is a good habit.",
      hi: "दिन में तीन बार संतुलित भोजन करना एक अच्छी आदत है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why should we drink clean water with food?",
      hi: "हमें भोजन के साथ साफ पानी क्यों पीना चाहिए?"
    },
    options: [
      { en: "To wash mouth", hi: "मुँह धोने के लिए" },
      { en: "To digest food", hi: "भोजन को पचाने के लिए" },
      { en: "To play", hi: "खेलने के लिए" },
      { en: "To sleep", hi: "सोने के लिए" }
    ],
    correct: { en: "To digest food", hi: "भोजन को पचाने के लिए" },
    explanation: {
      en: "Clean water helps in digestion and keeps us healthy.",
      hi: "साफ पानी पाचन में मदद करता है और हमें स्वस्थ रखता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is one bad eating habit?",
      hi: "एक खराब खाने की आदत क्या है?"
    },
    options: [
      { en: "Eating in a hurry", hi: "जल्दी-जल्दी खाना" },
      { en: "Chewing slowly", hi: "धीरे-धीरे चबाना" },
      { en: "Eating with clean hands", hi: "साफ हाथों से खाना" },
      { en: "Sitting at a table", hi: "मेज पर बैठकर खाना" }
    ],
    correct: { en: "Eating in a hurry", hi: "जल्दी-जल्दी खाना" },
    explanation: {
      en: "Eating too fast can cause indigestion.",
      hi: "बहुत जल्दी खाने से पाचन में समस्या हो सकती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the best way to eat fruits?",
      hi: "फलों को खाने का सबसे अच्छा तरीका क्या है?"
    },
    options: [
      { en: "Unwashed", hi: "बिना धोए" },
      { en: "With dust", hi: "धूल लगे हुए" },
      { en: "Washed properly", hi: "अच्छी तरह धोकर" },
      { en: "Old and spoiled", hi: "पुराने और सड़े हुए" }
    ],
    correct: { en: "Washed properly", hi: "अच्छी तरह धोकर" },
    explanation: {
      en: "Washing fruits removes germs and dirt.",
      hi: "फल धोने से कीटाणु और गंदगी हटती है।"
    }
  }
];

export default eatingHabits;
