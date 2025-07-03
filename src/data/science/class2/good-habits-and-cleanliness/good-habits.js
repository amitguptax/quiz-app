const goodHabits = [
  {
    id: 1,
    question: {
      en: "Which of these is a good habit?",
      hi: "इनमें से कौन सी एक अच्छी आदत है?"
    },
    options: [
      { en: "Brushing teeth twice a day", hi: "दिन में दो बार दाँत साफ़ करना" },
      { en: "Throwing garbage on the road", hi: "सड़क पर कूड़ा फेंकना" },
      { en: "Not bathing", hi: "नहाना नहीं" },
      { en: "Wasting food", hi: "भोजन बर्बाद करना" }
    ],
    correct: {
      en: "Brushing teeth twice a day",
      hi: "दिन में दो बार दाँत साफ़ करना"
    },
    explanation: {
      en: "Brushing twice keeps our teeth clean and healthy.",
      hi: "दांतों को दिन में दो बार साफ़ करना उन्हें स्वस्थ रखता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should we do before eating food?",
      hi: "खाना खाने से पहले हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Wash hands", hi: "हाथ धोना" },
      { en: "Play", hi: "खेलना" },
      { en: "Sleep", hi: "सोना" },
      { en: "Watch TV", hi: "टीवी देखना" }
    ],
    correct: {
      en: "Wash hands",
      hi: "हाथ धोना"
    },
    explanation: {
      en: "Washing hands removes germs before eating.",
      hi: "खाने से पहले हाथ धोने से कीटाणु दूर होते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should we say when someone helps us?",
      hi: "जब कोई हमारी मदद करे तो हमें क्या कहना चाहिए?"
    },
    options: [
      { en: "Thank you", hi: "धन्यवाद" },
      { en: "Go away", hi: "जाओ यहाँ से" },
      { en: "No need", hi: "जरूरत नहीं" },
      { en: "Why you did?", hi: "तुमने ऐसा क्यों किया?" }
    ],
    correct: {
      en: "Thank you",
      hi: "धन्यवाद"
    },
    explanation: {
      en: "Saying thank you shows manners and respect.",
      hi: "धन्यवाद कहना अच्छे व्यवहार को दर्शाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these is a polite word?",
      hi: "इनमें से कौन सा एक विनम्र शब्द है?"
    },
    options: [
      { en: "Please", hi: "कृपया" },
      { en: "No", hi: "नहीं" },
      { en: "Now", hi: "अब" },
      { en: "Why", hi: "क्यों" }
    ],
    correct: {
      en: "Please",
      hi: "कृपया"
    },
    explanation: {
      en: "We use 'please' to make polite requests.",
      hi: "'कृपया' शब्द का उपयोग विनम्रता से अनुरोध करने के लिए होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What should we do after using the toilet?",
      hi: "शौचालय के उपयोग के बाद हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Wash hands with soap", hi: "साबुन से हाथ धोना" },
      { en: "Run away", hi: "भाग जाना" },
      { en: "Eat food", hi: "भोजन करना" },
      { en: "Sleep", hi: "सो जाना" }
    ],
    correct: {
      en: "Wash hands with soap",
      hi: "साबुन से हाथ धोना"
    },
    explanation: {
      en: "Washing hands with soap removes germs.",
      hi: "साबुन से हाथ धोने से कीटाणु दूर होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is a good daily routine?",
      hi: "निम्न में से कौन अच्छी दैनिक आदत है?"
    },
    options: [
      { en: "Waking up early", hi: "जल्दी उठना" },
      { en: "Skipping meals", hi: "भोजन छोड़ना" },
      { en: "Watching TV all day", hi: "दिन भर टीवी देखना" },
      { en: "Sleeping late", hi: "देर रात सोना" }
    ],
    correct: {
      en: "Waking up early",
      hi: "जल्दी उठना"
    },
    explanation: {
      en: "Waking up early keeps us active and healthy.",
      hi: "जल्दी उठने से शरीर और दिमाग़ ताजगी महसूस करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How should we talk to elders?",
      hi: "हमें बड़ों से कैसे बात करनी चाहिए?"
    },
    options: [
      { en: "Politely", hi: "विनम्रता से" },
      { en: "Shouting", hi: "चिल्लाकर" },
      { en: "Ignoring", hi: "अनदेखा करके" },
      { en: "Arguing", hi: "झगड़ कर" }
    ],
    correct: {
      en: "Politely",
      hi: "विनम्रता से"
    },
    explanation: {
      en: "Polite behavior shows good manners.",
      hi: "विनम्र व्यवहार अच्छे संस्कार दिखाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should we do if we hurt someone?",
      hi: "अगर हम किसी को चोट पहुँचाएँ तो हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Say sorry", hi: "माफ़ी माँगना" },
      { en: "Laugh", hi: "हँसना" },
      { en: "Ignore", hi: "अनदेखा करना" },
      { en: "Run", hi: "भाग जाना" }
    ],
    correct: {
      en: "Say sorry",
      hi: "माफ़ी माँगना"
    },
    explanation: {
      en: "Saying sorry shows kindness and respect.",
      hi: "माफ़ी माँगना दयालुता और सम्मान दिखाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "When should we cut our nails?",
      hi: "हमें अपने नाखून कब काटने चाहिए?"
    },
    options: [
      { en: "Regularly", hi: "नियमित रूप से" },
      { en: "Never", hi: "कभी नहीं" },
      { en: "Once a year", hi: "साल में एक बार" },
      { en: "When they hurt", hi: "जब दर्द हो तब" }
    ],
    correct: {
      en: "Regularly",
      hi: "नियमित रूप से"
    },
    explanation: {
      en: "Regularly cutting nails keeps us clean and safe.",
      hi: "नियमित रूप से नाखून काटने से सफाई और सुरक्षा बनी रहती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "How should we behave in school?",
      hi: "स्कूल में हमें कैसा व्यवहार करना चाहिए?"
    },
    options: [
      { en: "Respect teachers", hi: "शिक्षकों का सम्मान करें" },
      { en: "Fight with friends", hi: "मित्रों से लड़ें" },
      { en: "Make noise", hi: "शोर मचाएँ" },
      { en: "Disobey rules", hi: "नियमों का पालन न करें" }
    ],
    correct: {
      en: "Respect teachers",
      hi: "शिक्षकों का सम्मान करें"
    },
    explanation: {
      en: "Respecting teachers is part of good habits.",
      hi: "शिक्षकों का सम्मान करना अच्छी आदतों में आता है।"
    }
  }
];

export default goodHabits;
