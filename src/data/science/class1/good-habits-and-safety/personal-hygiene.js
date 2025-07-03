const questions = [
  {
    id: 1,
    question: {
      en: "Why should we brush our teeth every day?",
      hi: "हमें रोज़ दाँत क्यों साफ़ करने चाहिए?"
    },
    options: [
      { en: "To make noise", hi: "शोर मचाने के लिए" },
      { en: "To keep teeth clean and healthy", hi: "दाँतों को साफ़ और स्वस्थ रखने के लिए" },
      { en: "To waste time", hi: "समय बर्बाद करने के लिए" },
      { en: "To eat more food", hi: "ज़्यादा खाना खाने के लिए" }
    ],
    correct: {
      en: "To keep teeth clean and healthy",
      hi: "दाँतों को साफ़ और स्वस्थ रखने के लिए"
    },
    explanation: {
      en: "Brushing removes germs and keeps teeth strong.",
      hi: "दाँतों को साफ़ करने से कीटाणु हटते हैं और वे मजबूत रहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "When should we wash our hands?",
      hi: "हमें कब हाथ धोने चाहिए?"
    },
    options: [
      { en: "After playing", hi: "खेलने के बाद" },
      { en: "Before eating", hi: "खाना खाने से पहले" },
      { en: "After using the toilet", hi: "शौचालय के बाद" },
      { en: "All of the above", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of the above",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "Washing hands removes germs and keeps us healthy.",
      hi: "हाथ धोने से कीटाणु हटते हैं और हम स्वस्थ रहते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should we use to wipe our hands?",
      hi: "हमें अपने हाथ पोंछने के लिए क्या उपयोग करना चाहिए?"
    },
    options: [
      { en: "Dirty clothes", hi: "गंदे कपड़े" },
      { en: "Tissue or clean towel", hi: "टिशू या साफ़ तौलिया" },
      { en: "Floor mat", hi: "फर्श मैट" },
      { en: "Curtain", hi: "पर्दा" }
    ],
    correct: {
      en: "Tissue or clean towel",
      hi: "टिशू या साफ़ तौलिया"
    },
    explanation: {
      en: "Clean towels help avoid germs.",
      hi: "साफ़ तौलिया कीटाणुओं से बचाव करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "How often should we take a bath?",
      hi: "हमें कितनी बार नहाना चाहिए?"
    },
    options: [
      { en: "Once a week", hi: "सप्ताह में एक बार" },
      { en: "Only on Sundays", hi: "सिर्फ़ रविवार को" },
      { en: "Every day", hi: "हर दिन" },
      { en: "Never", hi: "कभी नहीं" }
    ],
    correct: {
      en: "Every day",
      hi: "हर दिन"
    },
    explanation: {
      en: "Bathing daily keeps the body clean and fresh.",
      hi: "रोज़ाना नहाने से शरीर साफ़ और ताज़ा रहता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why should we wear clean clothes?",
      hi: "हमें साफ़ कपड़े क्यों पहनने चाहिए?"
    },
    options: [
      { en: "To look dirty", hi: "गंदे दिखने के लिए" },
      { en: "To stay healthy and neat", hi: "स्वस्थ और साफ़ रहने के लिए" },
      { en: "To play in the mud", hi: "कीचड़ में खेलने के लिए" },
      { en: "To sleep more", hi: "ज़्यादा सोने के लिए" }
    ],
    correct: {
      en: "To stay healthy and neat",
      hi: "स्वस्थ और साफ़ रहने के लिए"
    },
    explanation: {
      en: "Clean clothes prevent infections and keep us tidy.",
      hi: "साफ़ कपड़े हमें संक्रमण से बचाते हैं और साफ़-सुथरा रखते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should we do after using the toilet?",
      hi: "शौचालय के बाद हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Eat food", hi: "खाना खाना" },
      { en: "Sleep", hi: "सोना" },
      { en: "Wash hands with soap", hi: "साबुन से हाथ धोना" },
      { en: "Play games", hi: "खेलना" }
    ],
    correct: {
      en: "Wash hands with soap",
      hi: "साबुन से हाथ धोना"
    },
    explanation: {
      en: "Washing hands prevents the spread of germs.",
      hi: "हाथ धोने से कीटाणु फैलने से रोके जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why should we keep our nails short?",
      hi: "हमें नाखून छोटे क्यों रखने चाहिए?"
    },
    options: [
      { en: "To collect dirt", hi: "गंदगी इकट्ठा करने के लिए" },
      { en: "To grow faster", hi: "तेज़ बढ़ाने के लिए" },
      { en: "To avoid germs and infection", hi: "कीटाणुओं और संक्रमण से बचने के लिए" },
      { en: "To play better", hi: "अच्छा खेलने के लिए" }
    ],
    correct: {
      en: "To avoid germs and infection",
      hi: "कीटाणुओं और संक्रमण से बचने के लिए"
    },
    explanation: {
      en: "Short nails keep dirt and germs away.",
      hi: "छोटे नाखून गंदगी और कीटाणुओं से बचाते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should we cover our mouth with when sneezing?",
      hi: "छींकते समय हमें अपना मुँह किससे ढकना चाहिए?"
    },
    options: [
      { en: "Nothing", hi: "कुछ नहीं" },
      { en: "Handkerchief or elbow", hi: "रूमाल या कोहनी" },
      { en: "Book", hi: "किताब" },
      { en: "Chair", hi: "कुर्सी" }
    ],
    correct: {
      en: "Handkerchief or elbow",
      hi: "रूमाल या कोहनी"
    },
    explanation: {
      en: "Covering mouth prevents the spread of germs.",
      hi: "मुँह ढकने से कीटाणु फैलने से रोके जाते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is a good hygiene habit?",
      hi: "निम्न में से कौन-सी अच्छी स्वच्छता की आदत है?"
    },
    options: [
      { en: "Not bathing", hi: "नहाना नहीं" },
      { en: "Brushing teeth daily", hi: "रोज़ दाँत साफ़ करना" },
      { en: "Sleeping with dirty hands", hi: "गंदे हाथों से सोना" },
      { en: "Wearing dirty socks", hi: "गंदे मोज़े पहनना" }
    ],
    correct: {
      en: "Brushing teeth daily",
      hi: "रोज़ दाँत साफ़ करना"
    },
    explanation: {
      en: "Daily brushing is part of good personal hygiene.",
      hi: "रोज़ाना दाँत साफ़ करना एक अच्छी स्वच्छता की आदत है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why should we keep our body clean?",
      hi: "हमें अपने शरीर को साफ़ क्यों रखना चाहिए?"
    },
    options: [
      { en: "To look dirty", hi: "गंदा दिखने के लिए" },
      { en: "To become sick", hi: "बीमार होने के लिए" },
      { en: "To stay healthy and fresh", hi: "स्वस्थ और ताज़ा रहने के लिए" },
      { en: "To save time", hi: "समय बचाने के लिए" }
    ],
    correct: {
      en: "To stay healthy and fresh",
      hi: "स्वस्थ और ताज़ा रहने के लिए"
    },
    explanation: {
      en: "Cleanliness keeps us safe from diseases.",
      hi: "साफ़-सफाई हमें बीमारियों से बचाती है।"
    }
  }
];

export default questions;
