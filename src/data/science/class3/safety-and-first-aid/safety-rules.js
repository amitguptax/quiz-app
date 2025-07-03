const safetyRules = [
  {
    id: 1,
    question: {
      en: "Why should we not run in school corridors?",
      hi: "हमें स्कूल की गलियारों में क्यों नहीं दौड़ना चाहिए?"
    },
    options: [
      { en: "We may fall and get hurt", hi: "हम गिर सकते हैं और चोट लग सकती है" },
      { en: "It is fun", hi: "यह मज़ेदार होता है" },
      { en: "We may reach early", hi: "हम जल्दी पहुँच सकते हैं" },
      { en: "It is allowed", hi: "यह अनुमति है" }
    ],
    correct: {
      en: "We may fall and get hurt",
      hi: "हम गिर सकते हैं और चोट लग सकती है"
    },
    explanation: {
      en: "Running in corridors can cause accidents and injuries.",
      hi: "गलियारों में दौड़ना दुर्घटना और चोट का कारण बन सकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should you do if you see someone getting hurt at school?",
      hi: "अगर आप स्कूल में किसी को चोट लगते देखें तो क्या करें?"
    },
    options: [
      { en: "Inform a teacher or adult", hi: "शिक्षक या बड़े को बताएं" },
      { en: "Laugh at them", hi: "उन पर हँसे" },
      { en: "Run away", hi: "वहाँ से भाग जाएं" },
      { en: "Ignore it", hi: "अनदेखा करें" }
    ],
    correct: {
      en: "Inform a teacher or adult",
      hi: "शिक्षक या बड़े को बताएं"
    },
    explanation: {
      en: "Adults can help and give first aid quickly.",
      hi: "बड़े लोग जल्दी मदद कर सकते हैं और प्राथमिक उपचार दे सकते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is a safety rule at home?",
      hi: "इनमें से कौन घर में एक सुरक्षा नियम है?"
    },
    options: [
      { en: "Do not touch electric switches with wet hands", hi: "गीले हाथों से बिजली के स्विच को न छुएं" },
      { en: "Run inside the house", hi: "घर के अंदर दौड़ें" },
      { en: "Play near fire", hi: "आग के पास खेलें" },
      { en: "Use sharp tools alone", hi: "तेज चीज़ें अकेले इस्तेमाल करें" }
    ],
    correct: {
      en: "Do not touch electric switches with wet hands",
      hi: "गीले हाथों से बिजली के स्विच को न छुएं"
    },
    explanation: {
      en: "Touching switches with wet hands can cause electric shock.",
      hi: "गीले हाथों से स्विच छूने से बिजली का झटका लग सकता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What should you do before crossing the road?",
      hi: "सड़क पार करने से पहले आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Look both ways", hi: "दोनों तरफ देखें" },
      { en: "Run quickly", hi: "तेज़ दौड़ें" },
      { en: "Close your eyes", hi: "आँखें बंद करें" },
      { en: "Follow friends blindly", hi: "मित्रों के पीछे आँख मूँदकर चलें" }
    ],
    correct: {
      en: "Look both ways",
      hi: "दोनों तरफ देखें"
    },
    explanation: {
      en: "Always look left and right before crossing to avoid accidents.",
      hi: "दुर्घटना से बचने के लिए दोनों तरफ देखकर सड़क पार करें।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is a safe habit at school?",
      hi: "निम्न में से कौन स्कूल में एक सुरक्षित आदत है?"
    },
    options: [
      { en: "Use things carefully", hi: "सामानों का सावधानी से उपयोग करें" },
      { en: "Push others", hi: "दूसरों को धक्का दें" },
      { en: "Throw books", hi: "किताबें फेंके" },
      { en: "Fight in class", hi: "कक्षा में झगड़ा करें" }
    ],
    correct: {
      en: "Use things carefully",
      hi: "सामानों का सावधानी से उपयोग करें"
    },
    explanation: {
      en: "Being careful keeps you and others safe.",
      hi: "सावधानी से कार्य करना आपको और दूसरों को सुरक्षित रखता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Where should we play to stay safe?",
      hi: "सुरक्षित रहने के लिए हमें कहाँ खेलना चाहिए?"
    },
    options: [
      { en: "In the playground", hi: "खेल के मैदान में" },
      { en: "On the road", hi: "सड़क पर" },
      { en: "Near kitchen", hi: "रसोई के पास" },
      { en: "In bathroom", hi: "बाथरूम में" }
    ],
    correct: {
      en: "In the playground",
      hi: "खेल के मैदान में"
    },
    explanation: {
      en: "Playgrounds are meant for safe playing.",
      hi: "खेल के मैदान सुरक्षित खेलने के लिए बनाए जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What should you do if you see fire at home?",
      hi: "अगर आप घर में आग देखें तो क्या करें?"
    },
    options: [
      { en: "Call an adult and move away", hi: "बड़े को बुलाएं और दूर जाएं" },
      { en: "Play with it", hi: "उससे खेलें" },
      { en: "Throw paper in it", hi: "उसमें कागज़ डालें" },
      { en: "Run around it", hi: "उसके आसपास दौड़ें" }
    ],
    correct: {
      en: "Call an adult and move away",
      hi: "बड़े को बुलाएं और दूर जाएं"
    },
    explanation: {
      en: "Staying calm and alerting elders is the safest step.",
      hi: "शांत रहकर बड़ों को बुलाना सबसे सुरक्षित कदम है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why should we not play with sharp objects?",
      hi: "हमें तेज वस्तुओं से क्यों नहीं खेलना चाहिए?"
    },
    options: [
      { en: "They can cause injury", hi: "वे चोट पहुँचा सकते हैं" },
      { en: "They are fun", hi: "वे मज़ेदार हैं" },
      { en: "They are toys", hi: "वे खिलौने हैं" },
      { en: "They are colorful", hi: "वे रंगीन हैं" }
    ],
    correct: {
      en: "They can cause injury",
      hi: "वे चोट पहुँचा सकते हैं"
    },
    explanation: {
      en: "Sharp objects like knives and scissors can hurt us.",
      hi: "चाकू और कैंची जैसी वस्तुएं हमें चोट पहुँचा सकती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "How can we keep ourselves safe in the kitchen?",
      hi: "हम रसोई में खुद को कैसे सुरक्षित रख सकते हैं?"
    },
    options: [
      { en: "Do not go near the stove", hi: "चूल्हे के पास न जाएं" },
      { en: "Play with matchsticks", hi: "माचिस की तीलियों से खेलें" },
      { en: "Open gas tap", hi: "गैस का नॉब खोलें" },
      { en: "Use knives", hi: "चाकू का उपयोग करें" }
    ],
    correct: {
      en: "Do not go near the stove",
      hi: "चूल्हे के पास न जाएं"
    },
    explanation: {
      en: "Children should stay away from fire and heat.",
      hi: "बच्चों को आग और गर्मी से दूर रहना चाहिए।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is a good safety habit?",
      hi: "इनमें से कौन सी एक अच्छी सुरक्षा आदत है?"
    },
    options: [
      { en: "Follow rules and be careful", hi: "नियमों का पालन करें और सावधान रहें" },
      { en: "Jump on stairs", hi: "सीढ़ियों पर कूदें" },
      { en: "Touch electric wires", hi: "बिजली के तार छुएं" },
      { en: "Push friends", hi: "मित्रों को धक्का दें" }
    ],
    correct: {
      en: "Follow rules and be careful",
      hi: "नियमों का पालन करें और सावधान रहें"
    },
    explanation: {
      en: "Following safety rules helps avoid accidents.",
      hi: "सुरक्षा नियमों का पालन करने से दुर्घटनाओं से बचा जा सकता है।"
    }
  }
];

export default safetyRules;
