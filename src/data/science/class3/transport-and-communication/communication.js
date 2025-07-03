const communication = [
  {
    id: 1,
    question: {
      en: "Which of the following is a means of communication?",
      hi: "निम्न में से कौन एक संचार का साधन है?"
    },
    options: [
      { en: "Mobile phone", hi: "मोबाइल फोन" },
      { en: "Table", hi: "मेज़" },
      { en: "Fan", hi: "पंखा" },
      { en: "Bag", hi: "बैग" }
    ],
    correct: {
      en: "Mobile phone",
      hi: "मोबाइल फोन"
    },
    explanation: {
      en: "Mobile phones are used to talk and send messages.",
      hi: "मोबाइल फोन का उपयोग बात करने और संदेश भेजने के लिए होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which device is used to send letters?",
      hi: "पत्र भेजने के लिए किस उपकरण का उपयोग होता है?"
    },
    options: [
      { en: "Post box", hi: "डाक पेटी" },
      { en: "Television", hi: "टेलीविजन" },
      { en: "Computer", hi: "कंप्यूटर" },
      { en: "Radio", hi: "रेडियो" }
    ],
    correct: {
      en: "Post box",
      hi: "डाक पेटी"
    },
    explanation: {
      en: "Post boxes are used to collect and send letters.",
      hi: "डाक पेटियों का उपयोग पत्रों को जमा करने और भेजने के लिए किया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is used to watch news and programs?",
      hi: "निम्न में से किसका उपयोग समाचार और कार्यक्रम देखने के लिए होता है?"
    },
    options: [
      { en: "Television", hi: "टेलीविजन" },
      { en: "Radio", hi: "रेडियो" },
      { en: "Mobile", hi: "मोबाइल" },
      { en: "Postcard", hi: "पोस्टकार्ड" }
    ],
    correct: {
      en: "Television",
      hi: "टेलीविजन"
    },
    explanation: {
      en: "Television shows visual programs and news.",
      hi: "टेलीविजन दृश्य कार्यक्रम और समाचार दिखाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is a traditional means of communication?",
      hi: "निम्न में से कौन पारंपरिक संचार का साधन है?"
    },
    options: [
      { en: "Letter", hi: "पत्र" },
      { en: "Mobile phone", hi: "मोबाइल फोन" },
      { en: "Email", hi: "ईमेल" },
      { en: "Video call", hi: "वीडियो कॉल" }
    ],
    correct: {
      en: "Letter",
      hi: "पत्र"
    },
    explanation: {
      en: "Letters were used to communicate before phones.",
      hi: "फोन से पहले संचार के लिए पत्रों का उपयोग किया जाता था।"
    }
  },
  {
    id: 5,
    question: {
      en: "What do we use to hear news without seeing pictures?",
      hi: "तस्वीरें देखे बिना समाचार सुनने के लिए हम क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Radio", hi: "रेडियो" },
      { en: "Television", hi: "टेलीविजन" },
      { en: "Mobile", hi: "मोबाइल" },
      { en: "Newspaper", hi: "अख़बार" }
    ],
    correct: {
      en: "Radio",
      hi: "रेडियो"
    },
    explanation: {
      en: "Radio gives only audio news.",
      hi: "रेडियो केवल ऑडियो समाचार देता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of these is the fastest way to communicate?",
      hi: "इनमें से सबसे तेज़ संचार का तरीका कौन सा है?"
    },
    options: [
      { en: "Email", hi: "ईमेल" },
      { en: "Letter", hi: "पत्र" },
      { en: "Pigeon", hi: "कबूतर" },
      { en: "Telegram", hi: "टेलीग्राम" }
    ],
    correct: {
      en: "Email",
      hi: "ईमेल"
    },
    explanation: {
      en: "Emails are sent instantly using the internet.",
      hi: "ईमेल इंटरनेट के माध्यम से तुरंत भेजे जाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is used to talk to someone far away?",
      hi: "किसका उपयोग दूर किसी से बात करने के लिए किया जाता है?"
    },
    options: [
      { en: "Telephone", hi: "टेलीफोन" },
      { en: "Radio", hi: "रेडियो" },
      { en: "Television", hi: "टेलीविजन" },
      { en: "Loudspeaker", hi: "लाउडस्पीकर" }
    ],
    correct: {
      en: "Telephone",
      hi: "टेलीफोन"
    },
    explanation: {
      en: "Telephones help us speak with people far away.",
      hi: "टेलीफोन हमें दूर बैठे लोगों से बात करने में मदद करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is used for written communication?",
      hi: "निम्न में से किसका उपयोग लिखित संचार के लिए किया जाता है?"
    },
    options: [
      { en: "Letter", hi: "पत्र" },
      { en: "Radio", hi: "रेडियो" },
      { en: "Television", hi: "टेलीविजन" },
      { en: "Mobile call", hi: "मोबाइल कॉल" }
    ],
    correct: {
      en: "Letter",
      hi: "पत्र"
    },
    explanation: {
      en: "Letters are a way of written communication.",
      hi: "पत्र लिखित संचार का एक तरीका है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What do we use to send a message online?",
      hi: "ऑनलाइन संदेश भेजने के लिए हम क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Email", hi: "ईमेल" },
      { en: "Post office", hi: "डाकघर" },
      { en: "Radio", hi: "रेडियो" },
      { en: "Newspaper", hi: "अख़बार" }
    ],
    correct: {
      en: "Email",
      hi: "ईमेल"
    },
    explanation: {
      en: "Emails are used to send messages online quickly.",
      hi: "ईमेल का उपयोग ऑनलाइन संदेश तेज़ी से भेजने के लिए होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which means of communication shows moving pictures and sound?",
      hi: "कौन सा संचार साधन चलते चित्र और आवाज़ दिखाता है?"
    },
    options: [
      { en: "Television", hi: "टेलीविजन" },
      { en: "Radio", hi: "रेडियो" },
      { en: "Letter", hi: "पत्र" },
      { en: "Postcard", hi: "पोस्टकार्ड" }
    ],
    correct: {
      en: "Television",
      hi: "टेलीविजन"
    },
    explanation: {
      en: "Television gives both visuals and sound.",
      hi: "टेलीविजन दृश्य और ध्वनि दोनों प्रदान करता है।"
    }
  }
];

export default communication;
