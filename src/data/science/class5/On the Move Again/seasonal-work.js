const seasonalWork = [
  {
    id: 1,
    question: {
      en: "What is seasonal movement?",
      hi: "मौसमी प्रवास क्या है?"
    },
    options: [
      { en: "Changing home every week", hi: "हर हफ्ते घर बदलना" },
      { en: "Migration during specific times for work", hi: "काम के लिए विशेष समय पर प्रवास" },
      { en: "Travel for fun", hi: "मनोरंजन के लिए यात्रा" },
      { en: "Staying in one place all year", hi: "पूरे साल एक ही जगह रहना" }
    ],
    correct: {
      en: "Migration during specific times for work",
      hi: "काम के लिए विशेष समय पर प्रवास"
    },
    explanation: {
      en: "Seasonal movement happens when people move temporarily for work during certain times of the year.",
      hi: "मौसमी प्रवास तब होता है जब लोग साल के कुछ समय में काम के लिए अस्थायी रूप से प्रवास करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "During which season do many people migrate for farming work?",
      hi: "किस मौसम में बहुत से लोग खेती के काम के लिए प्रवास करते हैं?"
    },
    options: [
      { en: "Winter", hi: "सर्दी" },
      { en: "Monsoon and harvest season", hi: "मानसून और कटाई का मौसम" },
      { en: "Spring", hi: "वसंत" },
      { en: "Summer vacation", hi: "गर्मी की छुट्टियाँ" }
    ],
    correct: {
      en: "Monsoon and harvest season",
      hi: "मानसून और कटाई का मौसम"
    },
    explanation: {
      en: "Many migrate during monsoon and harvest time for agricultural jobs.",
      hi: "कई लोग मानसून और फसल कटाई के समय कृषि कार्य के लिए प्रवास करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What kind of work is usually done during seasonal migration?",
      hi: "मौसमी प्रवास के दौरान आमतौर पर किस प्रकार का कार्य किया जाता है?"
    },
    options: [
      { en: "Office work", hi: "कार्यालय का कार्य" },
      { en: "Seasonal farming, brick kiln work", hi: "मौसमी खेती, भट्ठे का काम" },
      { en: "Teaching", hi: "शिक्षण" },
      { en: "Software coding", hi: "सॉफ़्टवेयर कोडिंग" }
    ],
    correct: {
      en: "Seasonal farming, brick kiln work",
      hi: "मौसमी खेती, भट्ठे का काम"
    },
    explanation: {
      en: "People do temporary jobs like farming, construction, or brick making.",
      hi: "लोग खेती, निर्माण या ईंट भट्ठों जैसे अस्थायी काम करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why is seasonal migration common among poor families?",
      hi: "गरीब परिवारों में मौसमी प्रवास क्यों सामान्य है?"
    },
    options: [
      { en: "For tours", hi: "घूमने के लिए" },
      { en: "To meet relatives", hi: "रिश्तेदारों से मिलने के लिए" },
      { en: "To earn money during jobless periods", hi: "बेरोजगारी के समय में पैसा कमाने के लिए" },
      { en: "For fun", hi: "मनोरंजन के लिए" }
    ],
    correct: {
      en: "To earn money during jobless periods",
      hi: "बेरोजगारी के समय में पैसा कमाने के लिए"
    },
    explanation: {
      en: "Seasonal work helps poor families survive when there is no local work.",
      hi: "जब स्थानीय स्तर पर काम नहीं होता, तब मौसमी काम गरीब परिवारों को जीवित रहने में मदद करता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What challenge do children face due to seasonal migration?",
      hi: "मौसमी प्रवास के कारण बच्चों को कौन सी कठिनाई होती है?"
    },
    options: [
      { en: "Better education", hi: "बेहतर शिक्षा" },
      { en: "Easy lifestyle", hi: "सहज जीवनशैली" },
      { en: "Interrupted schooling", hi: "शिक्षा में रुकावट" },
      { en: "More homework", hi: "अधिक गृहकार्य" }
    ],
    correct: {
      en: "Interrupted schooling",
      hi: "शिक्षा में रुकावट"
    },
    explanation: {
      en: "Frequent migration prevents regular school attendance.",
      hi: "बार-बार स्थान परिवर्तन के कारण बच्चे नियमित स्कूल नहीं जा पाते।"
    }
  },
  {
    id: 6,
    question: {
      en: "How do people usually travel for seasonal work?",
      hi: "लोग मौसमी काम के लिए आमतौर पर कैसे यात्रा करते हैं?"
    },
    options: [
      { en: "Luxury cars", hi: "लक्ज़री कारों से" },
      { en: "Walking long distances or buses", hi: "लंबी दूरी पैदल या बसों से" },
      { en: "Flights", hi: "विमान से" },
      { en: "Helicopters", hi: "हेलीकॉप्टर से" }
    ],
    correct: {
      en: "Walking long distances or buses",
      hi: "लंबी दूरी पैदल या बसों से"
    },
    explanation: {
      en: "Seasonal workers often use basic or low-cost transport.",
      hi: "मौसमी मजदूर आमतौर पर सस्ते या सामान्य साधनों से यात्रा करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which places do people migrate to for seasonal work?",
      hi: "मौसमी कार्य के लिए लोग किन स्थानों पर प्रवास करते हैं?"
    },
    options: [
      { en: "Tourist spots", hi: "पर्यटन स्थल" },
      { en: "Religious places", hi: "धार्मिक स्थान" },
      { en: "Cities or farms with more work", hi: "ऐसे शहर या खेत जहाँ काम अधिक हो" },
      { en: "Markets", hi: "बाज़ार" }
    ],
    correct: {
      en: "Cities or farms with more work",
      hi: "ऐसे शहर या खेत जहाँ काम अधिक हो"
    },
    explanation: {
      en: "They go to areas where there is a demand for seasonal labor.",
      hi: "वे उन क्षेत्रों में जाते हैं जहाँ मौसमी श्रमिकों की मांग होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is an example of seasonal migration?",
      hi: "निम्न में से कौन मौसमी प्रवास का उदाहरण है?"
    },
    options: [
      { en: "A student moving for college", hi: "कॉलेज के लिए छात्र का जाना" },
      { en: "Laborers going to harvest sugarcane", hi: "मजदूरों का गन्ना काटने जाना" },
      { en: "People going on a picnic", hi: "पिकनिक पर जाना" },
      { en: "Family visiting relatives", hi: "रिश्तेदारों से मिलने जाना" }
    ],
    correct: {
      en: "Laborers going to harvest sugarcane",
      hi: "मजदूरों का गन्ना काटने जाना"
    },
    explanation: {
      en: "Migrating for seasonal harvest work is a clear example of seasonal migration.",
      hi: "मौसमी फसल काटने के लिए प्रवास मौसमी प्रवास का स्पष्ट उदाहरण है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why do people return home after seasonal work?",
      hi: "मौसमी काम के बाद लोग घर क्यों लौटते हैं?"
    },
    options: [
      { en: "For holidays", hi: "छुट्टियों के लिए" },
      { en: "Because their work is permanent", hi: "क्योंकि उनका काम स्थायी होता है" },
      { en: "Because the job is over", hi: "क्योंकि काम समाप्त हो गया" },
      { en: "To go to school", hi: "स्कूल जाने के लिए" }
    ],
    correct: {
      en: "Because the job is over",
      hi: "क्योंकि काम समाप्त हो गया"
    },
    explanation: {
      en: "Seasonal workers return when temporary work ends.",
      hi: "मौसमी कार्य समाप्त होने पर मजदूर वापस लौटते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What helps reduce seasonal migration?",
      hi: "मौसमी प्रवास को कम करने में क्या मदद करता है?"
    },
    options: [
      { en: "More local employment", hi: "स्थानीय स्तर पर अधिक रोजगार" },
      { en: "More holidays", hi: "अधिक छुट्टियाँ" },
      { en: "More travel options", hi: "अधिक यात्रा विकल्प" },
      { en: "More shopping centers", hi: "अधिक शॉपिंग सेंटर" }
    ],
    correct: {
      en: "More local employment",
      hi: "स्थानीय स्तर पर अधिक रोजगार"
    },
    explanation: {
      en: "If jobs are available locally, people won’t need to migrate.",
      hi: "यदि स्थानीय स्तर पर रोजगार उपलब्ध हो तो लोगों को प्रवास नहीं करना पड़ेगा।"
    }
  }
];

export default seasonalWork;
