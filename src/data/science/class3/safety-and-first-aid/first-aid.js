const firstAid = [
  {
    id: 1,
    question: {
      en: "What is the first thing to do if someone gets a small cut?",
      hi: "अगर किसी को छोटा कट लगे तो सबसे पहले क्या करना चाहिए?"
    },
    options: [
      { en: "Wash with clean water", hi: "साफ पानी से धोना" },
      { en: "Cover it with dust", hi: "धूल से ढक देना" },
      { en: "Ignore it", hi: "अनदेखा कर देना" },
      { en: "Apply oil", hi: "तेल लगाना" }
    ],
    correct: {
      en: "Wash with clean water",
      hi: "साफ पानी से धोना"
    },
    explanation: {
      en: "Clean the wound first to prevent infection.",
      hi: "घाव को पहले साफ करना संक्रमण से बचाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is used to cover a wound?",
      hi: "घाव को ढकने के लिए क्या उपयोग किया जाता है?"
    },
    options: [
      { en: "Bandage", hi: "पट्टी" },
      { en: "Paper", hi: "कागज़" },
      { en: "Cloth", hi: "कपड़ा" },
      { en: "Thread", hi: "धागा" }
    ],
    correct: {
      en: "Bandage",
      hi: "पट्टी"
    },
    explanation: {
      en: "Bandages keep wounds clean and protected.",
      hi: "पट्टियाँ घाव को साफ और सुरक्षित रखती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should you do if someone burns their hand slightly?",
      hi: "अगर किसी का हाथ थोड़ा जल जाए तो क्या करना चाहिए?"
    },
    options: [
      { en: "Put it under cold water", hi: "ठंडे पानी के नीचे रखें" },
      { en: "Apply butter", hi: "मक्खन लगाएं" },
      { en: "Wrap it tightly", hi: "कसकर बाँधें" },
      { en: "Ignore it", hi: "अनदेखा करें" }
    ],
    correct: {
      en: "Put it under cold water",
      hi: "ठंडे पानी के नीचे रखें"
    },
    explanation: {
      en: "Cold water soothes the burn and reduces heat.",
      hi: "ठंडा पानी जलन को शांत करता है और गर्मी कम करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What should be in a first aid box?",
      hi: "प्राथमिक उपचार बॉक्स में क्या होना चाहिए?"
    },
    options: [
      { en: "Bandages and antiseptic", hi: "पट्टियाँ और एंटीसेप्टिक" },
      { en: "Snacks", hi: "नाश्ता" },
      { en: "Toys", hi: "खिलौने" },
      { en: "Soap and water", hi: "साबुन और पानी" }
    ],
    correct: {
      en: "Bandages and antiseptic",
      hi: "पट्टियाँ और एंटीसेप्टिक"
    },
    explanation: {
      en: "Bandages and antiseptics help in treating wounds quickly.",
      hi: "पट्टियाँ और एंटीसेप्टिक घाव का इलाज करने में मदद करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What should you do if someone faints?",
      hi: "अगर कोई बेहोश हो जाए तो क्या करना चाहिए?"
    },
    options: [
      { en: "Call an adult or teacher", hi: "किसी बड़े या शिक्षक को बुलाएं" },
      { en: "Throw water on them", hi: "उन पर पानी फेंकें" },
      { en: "Ignore them", hi: "उन्हें अनदेखा करें" },
      { en: "Start shouting", hi: "चिल्लाना शुरू करें" }
    ],
    correct: {
      en: "Call an adult or teacher",
      hi: "किसी बड़े या शिक्षक को बुलाएं"
    },
    explanation: {
      en: "Elders know what to do and can call for help if needed.",
      hi: "बड़े लोग सही उपाय कर सकते हैं और मदद बुला सकते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following helps stop bleeding?",
      hi: "निम्न में से कौन खून बहना रोकने में मदद करता है?"
    },
    options: [
      { en: "Clean cloth or bandage", hi: "साफ कपड़ा या पट्टी" },
      { en: "Oil", hi: "तेल" },
      { en: "Water", hi: "पानी" },
      { en: "Salt", hi: "नमक" }
    ],
    correct: {
      en: "Clean cloth or bandage",
      hi: "साफ कपड़ा या पट्टी"
    },
    explanation: {
      en: "A clean bandage stops bleeding and protects the wound.",
      hi: "साफ पट्टी खून रोकने और घाव को सुरक्षित करने में मदद करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What should you do if your friend gets hurt while playing?",
      hi: "अगर आपका दोस्त खेलते समय चोटिल हो जाए तो क्या करें?"
    },
    options: [
      { en: "Help and inform an adult", hi: "मदद करें और किसी बड़े को बताएं" },
      { en: "Laugh and run away", hi: "हँसें और भाग जाएं" },
      { en: "Record a video", hi: "वीडियो रिकॉर्ड करें" },
      { en: "Hide", hi: "छिप जाएं" }
    ],
    correct: {
      en: "Help and inform an adult",
      hi: "मदद करें और किसी बड़े को बताएं"
    },
    explanation: {
      en: "Helping a friend and informing elders ensures proper care.",
      hi: "मित्र की मदद और बड़ों को सूचित करना उचित देखभाल सुनिश्चित करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which one is NOT a part of first aid?",
      hi: "निम्न में से कौन प्राथमिक उपचार का हिस्सा नहीं है?"
    },
    options: [
      { en: "Giving medicine without asking", hi: "बिना पूछे दवा देना" },
      { en: "Cleaning the wound", hi: "घाव की सफाई करना" },
      { en: "Calling an elder", hi: "किसी बड़े को बुलाना" },
      { en: "Using antiseptic", hi: "एंटीसेप्टिक का उपयोग करना" }
    ],
    correct: {
      en: "Giving medicine without asking",
      hi: "बिना पूछे दवा देना"
    },
    explanation: {
      en: "Only elders or doctors should give medicine.",
      hi: "केवल बड़े या डॉक्टर ही दवा दें।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which liquid is used to clean a wound?",
      hi: "घाव को साफ करने के लिए कौन सा तरल उपयोग किया जाता है?"
    },
    options: [
      { en: "Antiseptic", hi: "एंटीसेप्टिक" },
      { en: "Juice", hi: "जूस" },
      { en: "Milk", hi: "दूध" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Antiseptic",
      hi: "एंटीसेप्टिक"
    },
    explanation: {
      en: "Antiseptics kill germs in wounds.",
      hi: "एंटीसेप्टिक घाव में मौजूद कीटाणुओं को मारता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why is first aid important?",
      hi: "प्राथमिक उपचार क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "It helps before a doctor comes", hi: "यह डॉक्टर के आने से पहले मदद करता है" },
      { en: "It delays recovery", hi: "यह ठीक होने में देर करता है" },
      { en: "It is fun", hi: "यह मजेदार है" },
      { en: "It causes pain", hi: "यह दर्द देता है" }
    ],
    correct: {
      en: "It helps before a doctor comes",
      hi: "यह डॉक्टर के आने से पहले मदद करता है"
    },
    explanation: {
      en: "First aid provides immediate help before expert treatment.",
      hi: "प्राथमिक उपचार विशेषज्ञ इलाज से पहले तात्कालिक सहायता प्रदान करता है।"
    }
  }
];

export default firstAid;
