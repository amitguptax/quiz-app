const disasterSafetyQuestions = [
  {
    id: 1,
    question: {
      en: "What is the first thing to do during an earthquake?",
      hi: "भूकंप के दौरान सबसे पहले क्या करना चाहिए?"
    },
    options: [
      { en: "Run outside immediately", hi: "तुरंत बाहर भागना" },
      { en: "Hide under a sturdy table", hi: "मजबूत मेज के नीचे छिपना" },
      { en: "Stand near windows", hi: "खिड़कियों के पास खड़े होना" },
      { en: "Use elevator", hi: "लिफ्ट का उपयोग करना" }
    ],
    correct: {
      en: "Hide under a sturdy table",
      hi: "मजबूत मेज के नीचे छिपना"
    },
    explanation: {
      en: "Hiding under a sturdy table protects you from falling objects during an earthquake.",
      hi: "मजबूत मेज के नीचे छिपना भूकंप के दौरान गिरने वाली वस्तुओं से सुरक्षा करता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should you avoid doing during a flood?",
      hi: "बाढ़ के दौरान आपको क्या करने से बचना चाहिए?"
    },
    options: [
      { en: "Move to higher ground", hi: "उच्च भूमि पर जाना" },
      { en: "Drink clean water", hi: "स्वच्छ पानी पीना" },
      { en: "Use electrical appliances", hi: "बिजली के उपकरणों का उपयोग" },
      { en: "Listen to weather updates", hi: "मौसम अपडेट सुनना" }
    ],
    correct: {
      en: "Use electrical appliances",
      hi: "बिजली के उपकरणों का उपयोग"
    },
    explanation: {
      en: "Using electrical appliances during a flood can cause electric shocks.",
      hi: "बाढ़ के दौरान बिजली के उपकरणों का उपयोग करने से बिजली का झटका लग सकता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which emergency number should you call during disasters in India?",
      hi: "आपदा के समय भारत में कौन सा आपातकालीन नंबर कॉल करना चाहिए?"
    },
    options: [
      { en: "100", hi: "100" },
      { en: "101", hi: "101" },
      { en: "112", hi: "112" },
      { en: "911", hi: "911" }
    ],
    correct: {
      en: "112",
      hi: "112"
    },
    explanation: {
      en: "112 is the universal emergency number in India.",
      hi: "112 भारत में सार्वभौमिक आपातकालीन नंबर है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What should you do if caught in a fire?",
      hi: "अगर आग में फंस जाएं तो क्या करना चाहिए?"
    },
    options: [
      { en: "Run quickly through the fire", hi: "जल्दी से आग में भागना" },
      { en: "Stop, drop and roll", hi: "रुको, गिरो और लुढ़को" },
      { en: "Hide under a table", hi: "मेज के नीचे छिपना" },
      { en: "Use elevator to escape", hi: "भागने के लिए लिफ्ट का उपयोग" }
    ],
    correct: {
      en: "Stop, drop and roll",
      hi: "रुको, गिरो और लुढ़को"
    },
    explanation: {
      en: "Stopping, dropping and rolling can help put out flames on your clothes.",
      hi: "रुकना, गिरना और लुढ़कना आपके कपड़ों की आग बुझाने में मदद करता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where is the safest place during a tornado?",
      hi: "तूफान के दौरान सबसे सुरक्षित जगह कहाँ है?"
    },
    options: [
      { en: "Basement or underground shelter", hi: "बेसमेंट या भूमिगत आश्रय" },
      { en: "Near windows", hi: "खिड़कियों के पास" },
      { en: "Open field", hi: "खुले मैदान में" },
      { en: "On a hill", hi: "पहाड़ी पर" }
    ],
    correct: {
      en: "Basement or underground shelter",
      hi: "बेसमेंट या भूमिगत आश्रय"
    },
    explanation: {
      en: "Basements provide protection from tornado winds and flying debris.",
      hi: "बेसमेंट तूफानी हवा और उड़ते मलबे से सुरक्षा प्रदान करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should you do after a disaster strikes?",
      hi: "आपदा आने के बाद आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Leave the area immediately", hi: "फौरन क्षेत्र छोड़ दें" },
      { en: "Listen to authorities and follow instructions", hi: "अधिकृतों की सुनें और निर्देशों का पालन करें" },
      { en: "Ignore warnings", hi: "चेतावनी को नज़रअंदाज करें" },
      { en: "Panic and run", hi: "घबराएं और भागें" }
    ],
    correct: {
      en: "Listen to authorities and follow instructions",
      hi: "अधिकृतों की सुनें और निर्देशों का पालन करें"
    },
    explanation: {
      en: "Following official instructions ensures your safety after disasters.",
      hi: "सरकारी निर्देशों का पालन करना आपदा के बाद आपकी सुरक्षा सुनिश्चित करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "How should you prepare an emergency kit?",
      hi: "आपातकालीन किट कैसे तैयार करें?"
    },
    options: [
      { en: "Only medicines", hi: "केवल दवाइयाँ" },
      { en: "Food, water, medicines, and important documents", hi: "खाद्य पदार्थ, पानी, दवाइयाँ और महत्वपूर्ण दस्तावेज़" },
      { en: "Only water bottles", hi: "केवल पानी की बोतलें" },
      { en: "Only clothes", hi: "केवल कपड़े" }
    ],
    correct: {
      en: "Food, water, medicines, and important documents",
      hi: "खाद्य पदार्थ, पानी, दवाइयाँ और महत्वपूर्ण दस्तावेज़"
    },
    explanation: {
      en: "An emergency kit should contain essentials like food, water, medicines, and documents.",
      hi: "आपातकालीन किट में खाद्य पदार्थ, पानी, दवाइयाँ और दस्तावेज़ शामिल होने चाहिए।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which place is safest during an earthquake inside a building?",
      hi: "भूकंप के दौरान भवन के अंदर सबसे सुरक्षित स्थान कौन सा है?"
    },
    options: [
      { en: "Near windows", hi: "खिड़कियों के पास" },
      { en: "Under a sturdy table", hi: "मजबूत मेज के नीचे" },
      { en: "Elevator", hi: "लिफ्ट" },
      { en: "In a doorway", hi: "दरवाजे में" }
    ],
    correct: {
      en: "Under a sturdy table",
      hi: "मजबूत मेज के नीचे"
    },
    explanation: {
      en: "Hiding under a sturdy table protects from falling debris during earthquakes.",
      hi: "मजबूत मेज के नीचे छिपना भूकंप के दौरान गिरने वाले मलबे से सुरक्षा करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How can you stay informed during a disaster?",
      hi: "आपदा के दौरान सूचित कैसे रहें?"
    },
    options: [
      { en: "Ignore news", hi: "समाचार न देखें" },
      { en: "Listen to radio and official updates", hi: "रेडियो और आधिकारिक अपडेट सुनें" },
      { en: "Only social media", hi: "केवल सोशल मीडिया" },
      { en: "Avoid communication", hi: "संचार से बचें" }
    ],
    correct: {
      en: "Listen to radio and official updates",
      hi: "रेडियो और आधिकारिक अपडेट सुनें"
    },
    explanation: {
      en: "Listening to official sources helps you get accurate disaster information.",
      hi: "सरकारी स्रोतों को सुनना आपको सही जानकारी देता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the safest way to evacuate during a fire?",
      hi: "आग लगने पर सुरक्षित निकासी का सबसे अच्छा तरीका क्या है?"
    },
    options: [
      { en: "Use stairs, not elevators", hi: "लिफ्ट के बजाय सीढ़ियों का उपयोग करें" },
      { en: "Use elevators", hi: "लिफ्ट का उपयोग करें" },
      { en: "Run fast through smoke", hi: "धुआं होते हुए तेज दौड़ें" },
      { en: "Hide in the room", hi: "कमरे में छिप जाएं" }
    ],
    correct: {
      en: "Use stairs, not elevators",
      hi: "लिफ्ट के बजाय सीढ़ियों का उपयोग करें"
    },
    explanation: {
      en: "Using stairs is safer because elevators may fail during a fire.",
      hi: "लिफ्ट की जगह सीढ़ियाँ इस्तेमाल करना सुरक्षित होता है क्योंकि आग लगने पर लिफ्ट फेल हो सकती है।"
    }
  }
];

export default disasterSafetyQuestions;
