const migrantLabour = [
  {
    id: 1,
    question: {
      en: "Why do many people become migrant workers?",
      hi: "कई लोग प्रवासी मजदूर क्यों बनते हैं?"
    },
    options: [
      { en: "For travel", hi: "यात्रा के लिए" },
      { en: "For education", hi: "शिक्षा के लिए" },
      { en: "For better job opportunities", hi: "बेहतर रोजगार के लिए" },
      { en: "For festivals", hi: "त्योहारों के लिए" }
    ],
    correct: {
      en: "For better job opportunities",
      hi: "बेहतर रोजगार के लिए"
    },
    explanation: {
      en: "People migrate to cities or other states to find better-paying jobs.",
      hi: "लोग बेहतर वेतन वाली नौकरियों के लिए शहरों या अन्य राज्यों में प्रवास करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Where do most migrant workers come from?",
      hi: "अधिकांश प्रवासी मजदूर कहाँ से आते हैं?"
    },
    options: [
      { en: "Big cities", hi: "बड़े शहरों से" },
      { en: "Foreign countries", hi: "विदेशों से" },
      { en: "Villages and rural areas", hi: "गांवों और ग्रामीण इलाकों से" },
      { en: "Seashores", hi: "समुद्र तटों से" }
    ],
    correct: {
      en: "Villages and rural areas",
      hi: "गांवों और ग्रामीण इलाकों से"
    },
    explanation: {
      en: "Most migrant workers come from villages where there are fewer jobs.",
      hi: "अधिकतर प्रवासी मजदूर गांवों से आते हैं जहाँ रोजगार के अवसर कम होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What kind of work do migrant laborers usually do?",
      hi: "प्रवासी मजदूर आमतौर पर किस प्रकार का कार्य करते हैं?"
    },
    options: [
      { en: "Office work", hi: "कार्यालय का काम" },
      { en: "Farming only", hi: "केवल खेती" },
      { en: "Hard physical labor", hi: "कठिन शारीरिक श्रम" },
      { en: "Computer jobs", hi: "कंप्यूटर की नौकरी" }
    ],
    correct: {
      en: "Hard physical labor",
      hi: "कठिन शारीरिक श्रम"
    },
    explanation: {
      en: "Migrant workers often work in construction, farms, or factories.",
      hi: "प्रवासी मजदूर आमतौर पर निर्माण, खेत या फैक्टरी में काम करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is a major problem faced by migrant laborers?",
      hi: "प्रवासी मजदूरों को कौन सी प्रमुख समस्या होती है?"
    },
    options: [
      { en: "Too much money", hi: "बहुत अधिक पैसा" },
      { en: "No work", hi: "कोई काम नहीं" },
      { en: "Lack of job security", hi: "नौकरी की सुरक्षा की कमी" },
      { en: "Free housing", hi: "निःशुल्क आवास" }
    ],
    correct: {
      en: "Lack of job security",
      hi: "नौकरी की सुरक्षा की कमी"
    },
    explanation: {
      en: "Migrant workers often don’t have permanent or secure jobs.",
      hi: "प्रवासी मजदूरों को स्थायी या सुरक्षित नौकरी नहीं मिलती।"
    }
  },
  {
    id: 5,
    question: {
      en: "How do migrant workers usually travel to cities?",
      hi: "प्रवासी मजदूर आमतौर पर शहरों की यात्रा कैसे करते हैं?"
    },
    options: [
      { en: "By flights", hi: "विमान से" },
      { en: "In their own cars", hi: "अपनी कारों में" },
      { en: "By public transport", hi: "सार्वजनिक परिवहन से" },
      { en: "By ships", hi: "जहाज से" }
    ],
    correct: {
      en: "By public transport",
      hi: "सार्वजनिक परिवहन से"
    },
    explanation: {
      en: "Most workers travel by buses or trains due to affordability.",
      hi: "अधिकतर मजदूर बस या ट्रेन से यात्रा करते हैं क्योंकि ये सस्ते होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Where do many migrant laborers live in cities?",
      hi: "शहरों में बहुत से प्रवासी मजदूर कहाँ रहते हैं?"
    },
    options: [
      { en: "Hotels", hi: "होटल में" },
      { en: "Offices", hi: "कार्यालय में" },
      { en: "Temporary shelters or slums", hi: "अस्थायी झोपड़ी या झुग्गियों में" },
      { en: "Bungalows", hi: "बंगलों में" }
    ],
    correct: {
      en: "Temporary shelters or slums",
      hi: "अस्थायी झोपड़ी या झुग्गियों में"
    },
    explanation: {
      en: "Due to low income, migrant workers live in temporary houses.",
      hi: "कम आय के कारण प्रवासी मजदूर अस्थायी घरों या झुग्गियों में रहते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What happens to their children’s education?",
      hi: "उनके बच्चों की शिक्षा का क्या होता है?"
    },
    options: [
      { en: "It improves a lot", hi: "यह बहुत बेहतर हो जाती है" },
      { en: "It gets disturbed due to migration", hi: "प्रवास के कारण बाधित होती है" },
      { en: "They go to boarding schools", hi: "वे बोर्डिंग स्कूल जाते हैं" },
      { en: "They become teachers", hi: "वे शिक्षक बन जाते हैं" }
    ],
    correct: {
      en: "It gets disturbed due to migration",
      hi: "प्रवास के कारण बाधित होती है"
    },
    explanation: {
      en: "Frequent movement affects children's regular schooling.",
      hi: "बार-बार स्थान परिवर्तन बच्चों की नियमित पढ़ाई को प्रभावित करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which sector mostly employs migrant workers?",
      hi: "कौन सा क्षेत्र प्रवासी मजदूरों को सबसे अधिक रोजगार देता है?"
    },
    options: [
      { en: "Construction", hi: "निर्माण" },
      { en: "IT Sector", hi: "आईटी क्षेत्र" },
      { en: "Space Research", hi: "अंतरिक्ष अनुसंधान" },
      { en: "Banking", hi: "बैंकिंग" }
    ],
    correct: {
      en: "Construction",
      hi: "निर्माण"
    },
    explanation: {
      en: "Construction is one of the biggest employers of migrant labor.",
      hi: "निर्माण क्षेत्र प्रवासी मजदूरों का एक बड़ा नियोक्ता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why is migrant work often called seasonal?",
      hi: "प्रवासी कार्य को अक्सर मौसमी क्यों कहा जाता है?"
    },
    options: [
      { en: "Because workers are lazy", hi: "क्योंकि मजदूर आलसी होते हैं" },
      { en: "They work all year", hi: "वे पूरे साल काम करते हैं" },
      { en: "Because they migrate during certain seasons for work", hi: "क्योंकि वे कुछ मौसमों में काम के लिए प्रवास करते हैं" },
      { en: "They take holidays", hi: "वे छुट्टियाँ लेते हैं" }
    ],
    correct: {
      en: "Because they migrate during certain seasons for work",
      hi: "क्योंकि वे कुछ मौसमों में काम के लिए प्रवास करते हैं"
    },
    explanation: {
      en: "Many laborers migrate during harvest or construction seasons.",
      hi: "कई मजदूर फसल या निर्माण के मौसम में प्रवास करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What do migrant workers usually send back to their villages?",
      hi: "प्रवासी मजदूर आमतौर पर अपने गांवों में क्या भेजते हैं?"
    },
    options: [
      { en: "Books", hi: "किताबें" },
      { en: "Electricity", hi: "बिजली" },
      { en: "Money", hi: "पैसे" },
      { en: "Food", hi: "खाद्य सामग्री" }
    ],
    correct: {
      en: "Money",
      hi: "पैसे"
    },
    explanation: {
      en: "Migrant workers often send money home to support families.",
      hi: "प्रवासी मजदूर आमतौर पर अपने परिवारों के लिए पैसे भेजते हैं।"
    }
  }
];

export default migrantLabour;
