const snakeCharmer = [
  {
    id: 1,
    question: {
      en: "What musical instrument is commonly used by snake charmers?",
      hi: "सपेरे आमतौर पर कौन सा वाद्य यंत्र बजाते हैं?"
    },
    options: [
      { en: "Dhol", hi: "ढोल" },
      { en: "Been", hi: "बीन" },
      { en: "Flute", hi: "बांसुरी" },
      { en: "Tabla", hi: "तबला" }
    ],
    correct: {
      en: "Been",
      hi: "बीन"
    },
    explanation: {
      en: "Snake charmers use a 'been' to play music and control the snake's movements.",
      hi: "सपेरे साँप को नियंत्रित करने के लिए 'बीन' बजाते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the traditional occupation of snake charmers?",
      hi: "सपेरों का पारंपरिक पेशा क्या है?"
    },
    options: [
      { en: "Farming", hi: "खेती" },
      { en: "Fishing", hi: "मछली पकड़ना" },
      { en: "Catching and showing snakes", hi: "साँप पकड़ना और दिखाना" },
      { en: "Wood cutting", hi: "लकड़ी काटना" }
    ],
    correct: {
      en: "Catching and showing snakes",
      hi: "साँप पकड़ना और दिखाना"
    },
    explanation: {
      en: "Traditionally, snake charmers catch snakes and show tricks to earn their livelihood.",
      hi: "पारंपरिक रूप से सपेरे साँप पकड़ते हैं और खेल दिखाकर जीविका चलाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Where do snake charmers mostly live?",
      hi: "सपेरों का निवास स्थान प्रायः कहाँ होता है?"
    },
    options: [
      { en: "Big cities", hi: "बड़े शहरों में" },
      { en: "Coastal areas", hi: "तटीय क्षेत्रों में" },
      { en: "Villages or small towns", hi: "गाँवों या छोटे शहरों में" },
      { en: "Mountains", hi: "पहाड़ों में" }
    ],
    correct: {
      en: "Villages or small towns",
      hi: "गाँवों या छोटे शहरों में"
    },
    explanation: {
      en: "Most snake charmers live in villages or small towns and travel to perform.",
      hi: "अधिकांश सपेरे गाँवों या छोटे शहरों में रहते हैं और प्रदर्शन के लिए यात्रा करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do people gather around snake charmers?",
      hi: "लोग सपेरों के चारों ओर क्यों इकट्ठा होते हैं?"
    },
    options: [
      { en: "To eat food", hi: "खाना खाने के लिए" },
      { en: "To buy snakes", hi: "साँप खरीदने के लिए" },
      { en: "To watch snake tricks", hi: "साँप का खेल देखने के लिए" },
      { en: "To listen to stories", hi: "कहानियाँ सुनने के लिए" }
    ],
    correct: {
      en: "To watch snake tricks",
      hi: "साँप का खेल देखने के लिए"
    },
    explanation: {
      en: "People enjoy watching the movements of the snake when the charmer plays the been.",
      hi: "जब सपेरा बीन बजाता है तो लोग साँप का नाच देखना पसंद करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What do snake charmers traditionally believe about snakes?",
      hi: "सपेरे पारंपरिक रूप से साँपों के बारे में क्या मानते हैं?"
    },
    options: [
      { en: "They are holy", hi: "वे पवित्र होते हैं" },
      { en: "They bring rain", hi: "वे बारिश लाते हैं" },
      { en: "They can talk", hi: "वे बात कर सकते हैं" },
      { en: "They eat fire", hi: "वे आग खाते हैं" }
    ],
    correct: {
      en: "They are holy",
      hi: "वे पवित्र होते हैं"
    },
    explanation: {
      en: "Snake charmers often consider snakes as sacred and linked to gods.",
      hi: "सपेरे साँपों को पवित्र मानते हैं और उन्हें देवताओं से जोड़ते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which festival is important for snake charmers?",
      hi: "सपेरों के लिए कौन सा त्योहार महत्वपूर्ण होता है?"
    },
    options: [
      { en: "Diwali", hi: "दीवाली" },
      { en: "Holi", hi: "होली" },
      { en: "Nag Panchami", hi: "नाग पंचमी" },
      { en: "Eid", hi: "ईद" }
    ],
    correct: {
      en: "Nag Panchami",
      hi: "नाग पंचमी"
    },
    explanation: {
      en: "Snake charmers worship snakes on Nag Panchami and perform in public.",
      hi: "नाग पंचमी पर सपेरे साँपों की पूजा करते हैं और सार्वजनिक रूप से प्रदर्शन करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How do snake charmers identify different snakes?",
      hi: "सपेरे विभिन्न साँपों की पहचान कैसे करते हैं?"
    },
    options: [
      { en: "By color only", hi: "सिर्फ रंग से" },
      { en: "By smell", hi: "गंध से" },
      { en: "By shape and behavior", hi: "आकार और व्यवहार से" },
      { en: "By sound", hi: "ध्वनि से" }
    ],
    correct: {
      en: "By shape and behavior",
      hi: "आकार और व्यवहार से"
    },
    explanation: {
      en: "Experienced snake charmers can identify snakes by observing their size, color, and movement.",
      hi: "अनुभवी सपेरे साँपों के आकार, रंग और व्यवहार से पहचान करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why has the number of snake charmers reduced today?",
      hi: "आज के समय में सपेरों की संख्या क्यों घट गई है?"
    },
    options: [
      { en: "Snakes have disappeared", hi: "साँप समाप्त हो गए हैं" },
      { en: "People are not interested", hi: "लोगों की रुचि नहीं है" },
      { en: "Forest laws protect snakes", hi: "वन कानून साँपों की रक्षा करते हैं" },
      { en: "They shifted to farming", hi: "उन्होंने खेती शुरू कर दी" }
    ],
    correct: {
      en: "Forest laws protect snakes",
      hi: "वन कानून साँपों की रक्षा करते हैं"
    },
    explanation: {
      en: "Due to wildlife protection laws, catching snakes is banned, reducing the number of snake charmers.",
      hi: "वन्यजीव संरक्षण कानूनों के कारण साँप पकड़ना प्रतिबंधित है जिससे सपेरों की संख्या कम हो गई है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How do snake charmers help scientists?",
      hi: "सपेरे वैज्ञानिकों की कैसे मदद करते हैं?"
    },
    options: [
      { en: "By catching fish", hi: "मछली पकड़कर" },
      { en: "By training animals", hi: "जानवरों को प्रशिक्षित करके" },
      { en: "By providing knowledge about snakes", hi: "साँपों के बारे में जानकारी देकर" },
      { en: "By dancing", hi: "नाचकर" }
    ],
    correct: {
      en: "By providing knowledge about snakes",
      hi: "साँपों के बारे में जानकारी देकर"
    },
    explanation: {
      en: "Their experience with different snake species helps in research and treatment of snakebites.",
      hi: "विभिन्न साँपों के बारे में उनका अनुभव अनुसंधान और साँप काटने के इलाज में सहायक होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What challenge do modern snake charmers face?",
      hi: "आधुनिक सपेरे किस चुनौती का सामना करते हैं?"
    },
    options: [
      { en: "Getting snakes", hi: "साँपों को प्राप्त करना" },
      { en: "Finding forests", hi: "जंगल ढूँढना" },
      { en: "Lack of education", hi: "शिक्षा की कमी" },
      { en: "Lack of audience", hi: "दर्शकों की कमी" }
    ],
    correct: {
      en: "Lack of education",
      hi: "शिक्षा की कमी"
    },
    explanation: {
      en: "Many snake charmers are not educated and struggle to find new jobs.",
      hi: "कई सपेरे अशिक्षित होते हैं और उन्हें नए रोजगार पाने में कठिनाई होती है।"
    }
  }
];

export default snakeCharmer;
