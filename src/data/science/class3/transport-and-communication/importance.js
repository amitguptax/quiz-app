const importanceInDailyLife = [
  {
    id: 1,
    question: {
      en: "Why is transport important in our daily life?",
      hi: "हमारे दैनिक जीवन में परिवहन क्यों महत्वपूर्ण है?"
    },
    options: [
      { en: "It helps us travel", hi: "यह हमें यात्रा करने में मदद करता है" },
      { en: "It gives us food", hi: "यह हमें भोजन देता है" },
      { en: "It cleans the house", hi: "यह घर की सफाई करता है" },
      { en: "It gives light", hi: "यह रोशनी देता है" }
    ],
    correct: {
      en: "It helps us travel",
      hi: "यह हमें यात्रा करने में मदद करता है"
    },
    explanation: {
      en: "Transport allows us to move from one place to another.",
      hi: "परिवहन हमें एक स्थान से दूसरे स्थान तक जाने की सुविधा देता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the use of communication in daily life?",
      hi: "दैनिक जीवन में संचार का क्या उपयोग है?"
    },
    options: [
      { en: "To share messages", hi: "संदेश साझा करने के लिए" },
      { en: "To eat food", hi: "भोजन खाने के लिए" },
      { en: "To clean roads", hi: "सड़कों की सफाई के लिए" },
      { en: "To travel", hi: "यात्रा करने के लिए" }
    ],
    correct: {
      en: "To share messages",
      hi: "संदेश साझा करने के लिए"
    },
    explanation: {
      en: "Communication helps us talk and connect with others.",
      hi: "संचार हमें दूसरों से बात करने और जुड़ने में मदद करता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is an example of using transport in daily life?",
      hi: "दैनिक जीवन में परिवहन का उपयोग किसमें होता है?"
    },
    options: [
      { en: "Going to school", hi: "स्कूल जाना" },
      { en: "Eating lunch", hi: "दोपहर का खाना खाना" },
      { en: "Brushing teeth", hi: "दाँत साफ करना" },
      { en: "Watching TV", hi: "टीवी देखना" }
    ],
    correct: {
      en: "Going to school",
      hi: "स्कूल जाना"
    },
    explanation: {
      en: "We use transport like buses to go to school.",
      hi: "हम स्कूल जाने के लिए बस जैसे परिवहन का उपयोग करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "How does communication help in emergencies?",
      hi: "आपातकालीन स्थितियों में संचार कैसे मदद करता है?"
    },
    options: [
      { en: "By calling for help", hi: "मदद के लिए कॉल करके" },
      { en: "By eating quickly", hi: "जल्दी खाना खाकर" },
      { en: "By walking fast", hi: "तेज़ चलकर" },
      { en: "By switching off lights", hi: "लाइट बंद करके" }
    ],
    correct: {
      en: "By calling for help",
      hi: "मदद के लिए कॉल करके"
    },
    explanation: {
      en: "We can call police or ambulance using phones.",
      hi: "हम फोन से पुलिस या एम्बुलेंस को बुला सकते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these helps in sending important messages quickly?",
      hi: "इनमें से कौन महत्वपूर्ण संदेश जल्दी भेजने में मदद करता है?"
    },
    options: [
      { en: "Mobile phone", hi: "मोबाइल फोन" },
      { en: "Bullock cart", hi: "बैलगाड़ी" },
      { en: "Radio", hi: "रेडियो" },
      { en: "Cycle", hi: "साइकिल" }
    ],
    correct: {
      en: "Mobile phone",
      hi: "मोबाइल फोन"
    },
    explanation: {
      en: "Mobile phones are fast and easy for communication.",
      hi: "मोबाइल फोन तेज़ और आसान संचार साधन हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What happens if there is no transport?",
      hi: "अगर परिवहन न हो तो क्या होगा?"
    },
    options: [
      { en: "We cannot travel easily", hi: "हम आसानी से यात्रा नहीं कर सकते" },
      { en: "We eat more food", hi: "हम ज़्यादा खाना खाते हैं" },
      { en: "We sleep more", hi: "हम ज़्यादा सोते हैं" },
      { en: "We play more", hi: "हम ज़्यादा खेलते हैं" }
    ],
    correct: {
      en: "We cannot travel easily",
      hi: "हम आसानी से यात्रा नहीं कर सकते"
    },
    explanation: {
      en: "Transport helps us move to different places.",
      hi: "परिवहन हमें विभिन्न स्थानों पर जाने में मदद करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "How does communication help at school?",
      hi: "संचार स्कूल में कैसे मदद करता है?"
    },
    options: [
      { en: "Teachers can teach and explain", hi: "शिक्षक पढ़ा और समझा सकते हैं" },
      { en: "We sleep in class", hi: "हम कक्षा में सोते हैं" },
      { en: "We jump and run", hi: "हम कूदते और दौड़ते हैं" },
      { en: "We eat snacks", hi: "हम नाश्ता खाते हैं" }
    ],
    correct: {
      en: "Teachers can teach and explain",
      hi: "शिक्षक पढ़ा और समझा सकते हैं"
    },
    explanation: {
      en: "Communication is needed to share knowledge and ideas.",
      hi: "ज्ञान और विचार साझा करने के लिए संचार आवश्यक है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these can be used to call your parents?",
      hi: "इनमें से किसका उपयोग आप अपने माता-पिता को कॉल करने के लिए कर सकते हैं?"
    },
    options: [
      { en: "Phone", hi: "फोन" },
      { en: "Radio", hi: "रेडियो" },
      { en: "Newspaper", hi: "अख़बार" },
      { en: "Letter box", hi: "पत्र पेटी" }
    ],
    correct: {
      en: "Phone",
      hi: "फोन"
    },
    explanation: {
      en: "Phones are used to talk to people directly.",
      hi: "फोन का उपयोग लोगों से सीधे बात करने के लिए किया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why do we need good transport in cities?",
      hi: "शहरों में अच्छे परिवहन की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "To go to office and school", hi: "कार्यालय और स्कूल जाने के लिए" },
      { en: "To dance", hi: "नृत्य करने के लिए" },
      { en: "To sleep", hi: "सोने के लिए" },
      { en: "To write", hi: "लिखने के लिए" }
    ],
    correct: {
      en: "To go to office and school",
      hi: "कार्यालय और स्कूल जाने के लिए"
    },
    explanation: {
      en: "Good transport helps us reach places on time.",
      hi: "अच्छा परिवहन हमें समय पर स्थानों तक पहुँचने में मदद करता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is a benefit of communication?",
      hi: "इनमें से कौन संचार का एक लाभ है?"
    },
    options: [
      { en: "We stay connected with people", hi: "हम लोगों से जुड़े रहते हैं" },
      { en: "We eat sweets", hi: "हम मिठाइयाँ खाते हैं" },
      { en: "We run faster", hi: "हम तेज़ दौड़ते हैं" },
      { en: "We get wet", hi: "हम भीगते हैं" }
    ],
    correct: {
      en: "We stay connected with people",
      hi: "हम लोगों से जुड़े रहते हैं"
    },
    explanation: {
      en: "Communication helps us maintain relationships.",
      hi: "संचार हमें रिश्ते बनाए रखने में मदद करता है।"
    }
  }
];

export default importanceInDailyLife;
