const genderEquality = [
  {
    id: 1,
    question: {
      en: "What does gender equality mean?",
      hi: "लैंगिक समानता का क्या अर्थ है?"
    },
    options: [
      { en: "Treating girls and boys equally", hi: "लड़कियों और लड़कों के साथ समान व्यवहार करना" },
      { en: "Allowing boys to study more", hi: "लड़कों को अधिक पढ़ने देना" },
      { en: "Letting only girls play", hi: "केवल लड़कियों को खेलने देना" },
      { en: "Giving more power to men", hi: "पुरुषों को अधिक अधिकार देना" }
    ],
    correct: {
      en: "Treating girls and boys equally",
      hi: "लड़कियों और लड़कों के साथ समान व्यवहार करना"
    },
    explanation: {
      en: "Gender equality means giving equal respect, opportunities, and rights to both girls and boys.",
      hi: "लैंगिक समानता का मतलब है लड़कियों और लड़कों को समान सम्मान, अवसर और अधिकार देना।"
    }
  },
  {
    id: 2,
    question: {
      en: "Why is education important for girls?",
      hi: "लड़कियों के लिए शिक्षा क्यों जरूरी है?"
    },
    options: [
      { en: "To cook better", hi: "अच्छा खाना बनाने के लिए" },
      { en: "To become independent", hi: "स्वतंत्र बनने के लिए" },
      { en: "To help boys", hi: "लड़कों की मदद करने के लिए" },
      { en: "To marry early", hi: "जल्दी शादी के लिए" }
    ],
    correct: {
      en: "To become independent",
      hi: "स्वतंत्र बनने के लिए"
    },
    explanation: {
      en: "Education helps girls to think freely, make choices, and live an independent life.",
      hi: "शिक्षा लड़कियों को स्वतंत्र रूप से सोचने, निर्णय लेने और आत्मनिर्भर जीवन जीने में मदद करती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following is a sign of gender discrimination?",
      hi: "निम्न में से कौन लैंगिक भेदभाव का उदाहरण है?"
    },
    options: [
      { en: "Sending only boys to school", hi: "केवल लड़कों को स्कूल भेजना" },
      { en: "Giving toys to all children", hi: "सभी बच्चों को खिलौने देना" },
      { en: "Letting girls play", hi: "लड़कियों को खेलने देना" },
      { en: "Encouraging both genders", hi: "दोनों लिंगों को प्रोत्साहित करना" }
    ],
    correct: {
      en: "Sending only boys to school",
      hi: "केवल लड़कों को स्कूल भेजना"
    },
    explanation: {
      en: "When only boys are given opportunities like education, it's gender discrimination.",
      hi: "केवल लड़कों को शिक्षा जैसे अवसर देना लैंगिक भेदभाव है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Girls should be given the right to:",
      hi: "लड़कियों को किसका अधिकार मिलना चाहिए?"
    },
    options: [
      { en: "Stay at home", hi: "घर पर रहना" },
      { en: "Speak only to women", hi: "केवल महिलाओं से बात करना" },
      { en: "Make their own decisions", hi: "अपने फैसले स्वयं लेना" },
      { en: "Follow boys", hi: "लड़कों का अनुसरण करना" }
    ],
    correct: {
      en: "Make their own decisions",
      hi: "अपने फैसले स्वयं लेना"
    },
    explanation: {
      en: "Empowering girls means allowing them to make decisions for their lives.",
      hi: "लड़कियों को सशक्त बनाना उन्हें अपने जीवन के निर्णय लेने का अधिकार देना है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What helps achieve gender equality?",
      hi: "लैंगिक समानता प्राप्त करने में क्या मदद करता है?"
    },
    options: [
      { en: "Equal education", hi: "समान शिक्षा" },
      { en: "Ignoring girls", hi: "लड़कियों की उपेक्षा करना" },
      { en: "More work for girls", hi: "लड़कियों के लिए अधिक काम" },
      { en: "Less rights for boys", hi: "लड़कों के लिए कम अधिकार" }
    ],
    correct: {
      en: "Equal education",
      hi: "समान शिक्षा"
    },
    explanation: {
      en: "Giving both boys and girls equal education helps build a fair society.",
      hi: "लड़कियों और लड़कों को समान शिक्षा देना एक न्यायपूर्ण समाज बनाने में मदद करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which right is equal for boys and girls?",
      hi: "कौन सा अधिकार लड़कों और लड़कियों दोनों के लिए समान है?"
    },
    options: [
      { en: "Right to study", hi: "पढ़ाई का अधिकार" },
      { en: "Right to ride bicycle", hi: "साइकिल चलाने का अधिकार" },
      { en: "Right to play", hi: "खेलने का अधिकार" },
      { en: "All of these", hi: "इनमें सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "इनमें सभी"
    },
    explanation: {
      en: "All children, regardless of gender, have equal rights to learn, play, and grow.",
      hi: "सभी बच्चों को बिना भेदभाव के पढ़ने, खेलने और बढ़ने का समान अधिकार है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is a common stereotype about girls?",
      hi: "लड़कियों के बारे में एक आम रूढ़िवादिता क्या है?"
    },
    options: [
      { en: "Girls can't play sports", hi: "लड़कियाँ खेल नहीं सकतीं" },
      { en: "Girls can study science", hi: "लड़कियाँ विज्ञान पढ़ सकती हैं" },
      { en: "Girls can drive cars", hi: "लड़कियाँ कार चला सकती हैं" },
      { en: "Girls can be leaders", hi: "लड़कियाँ नेता बन सकती हैं" }
    ],
    correct: {
      en: "Girls can't play sports",
      hi: "लड़कियाँ खेल नहीं सकतीं"
    },
    explanation: {
      en: "Thinking girls can't play sports is a stereotype and untrue.",
      hi: "यह सोचना कि लड़कियाँ खेल नहीं सकतीं, एक गलत रूढ़िवादिता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "How can we support gender equality at home?",
      hi: "हम घर पर लैंगिक समानता का समर्थन कैसे कर सकते हैं?"
    },
    options: [
      { en: "By sharing household work", hi: "घरेलू कार्य साझा करके" },
      { en: "By asking only girls to cook", hi: "केवल लड़कियों से खाना बनवाकर" },
      { en: "By punishing boys", hi: "लड़कों को दंडित करके" },
      { en: "By ignoring children", hi: "बच्चों की उपेक्षा करके" }
    ],
    correct: {
      en: "By sharing household work",
      hi: "घरेलू कार्य साझा करके"
    },
    explanation: {
      en: "Gender equality begins at home with shared responsibilities.",
      hi: "लैंगिक समानता घर से शुरू होती है जब सभी काम साझा किए जाते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these promotes equal opportunities?",
      hi: "इनमें से क्या समान अवसर को बढ़ावा देता है?"
    },
    options: [
      { en: "Giving preference to boys", hi: "लड़कों को प्राथमिकता देना" },
      { en: "Limiting girls' choices", hi: "लड़कियों की पसंद सीमित करना" },
      { en: "Encouraging all to follow their dreams", hi: "सभी को अपने सपनों को पूरा करने के लिए प्रोत्साहित करना" },
      { en: "Telling girls to stay home", hi: "लड़कियों से घर में रहने को कहना" }
    ],
    correct: {
      en: "Encouraging all to follow their dreams",
      hi: "सभी को अपने सपनों को पूरा करने के लिए प्रोत्साहित करना"
    },
    explanation: {
      en: "Everyone deserves the freedom to follow their dreams, regardless of gender.",
      hi: "प्रत्येक व्यक्ति को अपने सपनों का पीछा करने की स्वतंत्रता मिलनी चाहिए, चाहे वह किसी भी लिंग का हो।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should be given to every child to ensure equality?",
      hi: "समानता सुनिश्चित करने के लिए हर बच्चे को क्या देना चाहिए?"
    },
    options: [
      { en: "Equal rights and respect", hi: "समान अधिकार और सम्मान" },
      { en: "Strict rules", hi: "कड़े नियम" },
      { en: "Limited education", hi: "सीमित शिक्षा" },
      { en: "Less freedom", hi: "कम स्वतंत्रता" }
    ],
    correct: {
      en: "Equal rights and respect",
      hi: "समान अधिकार और सम्मान"
    },
    explanation: {
      en: "Every child deserves equal rights, respect, and care.",
      hi: "हर बच्चे को समान अधिकार, सम्मान और देखभाल मिलनी चाहिए।"
    }
  }
];

export default genderEquality;
