const meansOfCommunication = [
  {
    id: 1,
    question: {
      en: "Which of the following is a means of communication?",
      hi: "निम्न में से कौन एक संचार का साधन है?"
    },
    options: [
      { en: "Telephone", hi: "टेलीफोन" },
      { en: "Chair", hi: "कुर्सी" },
      { en: "Table", hi: "मेज़" },
      { en: "Fan", hi: "पंखा" }
    ],
    correct: {
      en: "Telephone",
      hi: "टेलीफोन"
    },
    explanation: {
      en: "We use a telephone to talk to people who are far away.",
      hi: "टेलीफोन का उपयोग दूर के लोगों से बात करने के लिए किया जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which device helps us to send written messages?",
      hi: "कौन सा उपकरण हमें लिखित संदेश भेजने में मदद करता है?"
    },
    options: [
      { en: "Mobile phone", hi: "मोबाइल फोन" },
      { en: "Television", hi: "टेलीविजन" },
      { en: "Fan", hi: "पंखा" },
      { en: "Bulb", hi: "बल्ब" }
    ],
    correct: {
      en: "Mobile phone",
      hi: "मोबाइल फोन"
    },
    explanation: {
      en: "Mobile phones are used for calling and sending messages.",
      hi: "मोबाइल फोन का उपयोग कॉल और संदेश भेजने के लिए किया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is used to send letters?",
      hi: "इनमें से किसका उपयोग पत्र भेजने के लिए किया जाता है?"
    },
    options: [
      { en: "Post office", hi: "डाकघर" },
      { en: "Bank", hi: "बैंक" },
      { en: "School", hi: "स्कूल" },
      { en: "Hospital", hi: "अस्पताल" }
    ],
    correct: {
      en: "Post office",
      hi: "डाकघर"
    },
    explanation: {
      en: "Letters are sent through the post office.",
      hi: "पत्रों को डाकघर के माध्यम से भेजा जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is the fastest way to talk to someone far away?",
      hi: "दूर किसी से बात करने का सबसे तेज़ तरीका कौन सा है?"
    },
    options: [
      { en: "Telephone", hi: "टेलीफोन" },
      { en: "Letter", hi: "पत्र" },
      { en: "Messenger", hi: "दूत" },
      { en: "Pigeon", hi: "कबूतर" }
    ],
    correct: {
      en: "Telephone",
      hi: "टेलीफोन"
    },
    explanation: {
      en: "Telephone lets us talk instantly to people who are far.",
      hi: "टेलीफोन से हम दूर के लोगों से तुरंत बात कर सकते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is a modern means of communication?",
      hi: "इनमें से कौन एक आधुनिक संचार साधन है?"
    },
    options: [
      { en: "Email", hi: "ईमेल" },
      { en: "Drum", hi: "ढोल" },
      { en: "Smoke signal", hi: "धुएं का संकेत" },
      { en: "Pigeon", hi: "कबूतर" }
    ],
    correct: {
      en: "Email",
      hi: "ईमेल"
    },
    explanation: {
      en: "Email is a modern and fast way to communicate in writing.",
      hi: "ईमेल एक आधुनिक और तेज़ लिखित संचार का माध्यम है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following helps in watching news?",
      hi: "निम्न में से कौन समाचार देखने में मदद करता है?"
    },
    options: [
      { en: "Television", hi: "टेलीविजन" },
      { en: "Microwave", hi: "माइक्रोवेव" },
      { en: "Washing machine", hi: "वॉशिंग मशीन" },
      { en: "Fan", hi: "पंखा" }
    ],
    correct: {
      en: "Television",
      hi: "टेलीविजन"
    },
    explanation: {
      en: "Television shows news and entertainment programs.",
      hi: "टेलीविजन पर समाचार और मनोरंजन कार्यक्रम दिखाए जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which means of communication is used to hear news and music?",
      hi: "समाचार और संगीत सुनने के लिए कौन सा संचार साधन उपयोग किया जाता है?"
    },
    options: [
      { en: "Radio", hi: "रेडियो" },
      { en: "Newspaper", hi: "अख़बार" },
      { en: "Postcard", hi: "पोस्टकार्ड" },
      { en: "Email", hi: "ईमेल" }
    ],
    correct: {
      en: "Radio",
      hi: "रेडियो"
    },
    explanation: {
      en: "Radio is used for listening to music and news.",
      hi: "रेडियो का उपयोग संगीत और समाचार सुनने के लिए किया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "How do newspapers help us?",
      hi: "अख़बार हमारी कैसे मदद करते हैं?"
    },
    options: [
      { en: "Give news", hi: "समाचार देते हैं" },
      { en: "Cook food", hi: "खाना पकाते हैं" },
      { en: "Clean clothes", hi: "कपड़े धोते हैं" },
      { en: "Paint walls", hi: "दीवारें रंगते हैं" }
    ],
    correct: {
      en: "Give news",
      hi: "समाचार देते हैं"
    },
    explanation: {
      en: "Newspapers give us daily news and information.",
      hi: "अख़बार हमें रोज़ाना की खबरें और जानकारी देते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is the slowest way to communicate?",
      hi: "इनमें से कौन सबसे धीमा संचार साधन है?"
    },
    options: [
      { en: "Letter", hi: "पत्र" },
      { en: "Mobile phone", hi: "मोबाइल फोन" },
      { en: "Email", hi: "ईमेल" },
      { en: "Telephone", hi: "टेलीफोन" }
    ],
    correct: {
      en: "Letter",
      hi: "पत्र"
    },
    explanation: {
      en: "Letters take time to reach, so they are slow.",
      hi: "पत्र पहुँचने में समय लेते हैं, इसलिए ये धीमे होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these means of communication is used for reading?",
      hi: "इनमें से किस संचार साधन का उपयोग पढ़ने के लिए होता है?"
    },
    options: [
      { en: "Newspaper", hi: "अख़बार" },
      { en: "Radio", hi: "रेडियो" },
      { en: "Telephone", hi: "टेलीफोन" },
      { en: "Television", hi: "टेलीविजन" }
    ],
    correct: {
      en: "Newspaper",
      hi: "अख़बार"
    },
    explanation: {
      en: "We read news and information in a newspaper.",
      hi: "हम अख़बार में समाचार और जानकारी पढ़ते हैं।"
    }
  }
];

export default meansOfCommunication;
