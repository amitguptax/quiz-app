const waterConservation = [
  {
    id: 1,
    question: {
      en: "Why should we conserve water?",
      hi: "हमें पानी की बचत क्यों करनी चाहिए?"
    },
    options: [
      { en: "To waste less time", hi: "समय की बर्बादी कम करने के लिए" },
      { en: "Because water is unlimited", hi: "क्योंकि पानी असीमित है" },
      { en: "To save water for future use", hi: "भविष्य के लिए पानी बचाने के लिए" },
      { en: "To grow trees faster", hi: "पेड़ों को तेजी से उगाने के लिए" }
    ],
    correct: {
      en: "To save water for future use",
      hi: "भविष्य के लिए पानी बचाने के लिए"
    },
    explanation: {
      en: "Water is a limited resource and must be used wisely.",
      hi: "पानी एक सीमित संसाधन है और इसका समझदारी से उपयोग करना चाहिए।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these helps conserve water at home?",
      hi: "इनमें से कौन-सा कार्य घर पर पानी बचाने में मदद करता है?"
    },
    options: [
      { en: "Leaving tap open", hi: "नल खुला छोड़ना" },
      { en: "Fixing leaking taps", hi: "टपकते नलों को ठीक करना" },
      { en: "Washing car with hose", hi: "पाइप से कार धोना" },
      { en: "Letting water overflow", hi: "पानी को बहने देना" }
    ],
    correct: {
      en: "Fixing leaking taps",
      hi: "टपकते नलों को ठीक करना"
    },
    explanation: {
      en: "Fixing leaks saves a lot of water every day.",
      hi: "टपकते नलों को ठीक करने से रोजाना बहुत सारा पानी बचाया जा सकता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is rainwater harvesting?",
      hi: "वर्षा जल संचयन क्या है?"
    },
    options: [
      { en: "Storing drinking water in bottles", hi: "पानी की बोतलों में पीने का पानी भरना" },
      { en: "Using water from rivers", hi: "नदी का पानी उपयोग करना" },
      { en: "Collecting and storing rainwater", hi: "वर्षा का पानी एकत्र कर उसे संग्रहित करना" },
      { en: "Cleaning rainwater with soap", hi: "वर्षा जल को साबुन से धोना" }
    ],
    correct: {
      en: "Collecting and storing rainwater",
      hi: "वर्षा का पानी एकत्र कर उसे संग्रहित करना"
    },
    explanation: {
      en: "Rainwater harvesting stores rainwater for future use.",
      hi: "वर्षा जल संचयन से बारिश का पानी इकट्ठा करके भविष्य के लिए सुरक्षित किया जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which activity wastes a lot of water?",
      hi: "इनमें से कौन-सी गतिविधि बहुत अधिक पानी बर्बाद करती है?"
    },
    options: [
      { en: "Using a mug while bathing", hi: "नहाते समय मग का उपयोग करना" },
      { en: "Using shower for long time", hi: "लंबे समय तक शावर का उपयोग करना" },
      { en: "Washing hands with little water", hi: "कम पानी से हाथ धोना" },
      { en: "Watering plants with used water", hi: "उपयोग किए गए पानी से पौधों को पानी देना" }
    ],
    correct: {
      en: "Using shower for long time",
      hi: "लंबे समय तक शावर का उपयोग करना"
    },
    explanation: {
      en: "Long showers can waste many liters of water.",
      hi: "लंबे समय तक शावर का उपयोग करने से बहुत सारा पानी बर्बाद होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where can rainwater be stored for future use?",
      hi: "भविष्य के उपयोग के लिए वर्षा जल को कहाँ संग्रहित किया जा सकता है?"
    },
    options: [
      { en: "Playground", hi: "खेल का मैदान" },
      { en: "Open street", hi: "खुली सड़क" },
      { en: "Storage tanks or ponds", hi: "भंडारण टैंक या तालाब" },
      { en: "On rooftops", hi: "छत पर छोड़ना" }
    ],
    correct: {
      en: "Storage tanks or ponds",
      hi: "भंडारण टैंक या तालाब"
    },
    explanation: {
      en: "Rainwater should be collected in tanks or ponds.",
      hi: "वर्षा जल को टैंक या तालाब में संग्रहित किया जा सकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which practice should be followed while brushing teeth?",
      hi: "दांत ब्रश करते समय कौन-सी आदत अपनानी चाहिए?"
    },
    options: [
      { en: "Keep tap running", hi: "नल चालू रखें" },
      { en: "Use extra water", hi: "अधिक पानी का प्रयोग करें" },
      { en: "Turn off tap when not needed", hi: "जरूरत न होने पर नल बंद करें" },
      { en: "Brush in shower", hi: "शावर में ब्रश करें" }
    ],
    correct: {
      en: "Turn off tap when not needed",
      hi: "जरूरत न होने पर नल बंद करें"
    },
    explanation: {
      en: "Turning off the tap saves water during brushing.",
      hi: "ब्रश करते समय नल बंद करने से पानी की बचत होती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "How can schools save water?",
      hi: "विद्यालय पानी कैसे बचा सकते हैं?"
    },
    options: [
      { en: "Overwatering gardens", hi: "बग़ीचे में अत्यधिक पानी देना" },
      { en: "Repairing leaking taps", hi: "लीक हो रहे नल ठीक करना" },
      { en: "Using broken toilets", hi: "टूटी टॉयलेट्स का प्रयोग करना" },
      { en: "Letting taps run freely", hi: "नलों को खुला छोड़ देना" }
    ],
    correct: {
      en: "Repairing leaking taps",
      hi: "लीक हो रहे नल ठीक करना"
    },
    explanation: {
      en: "Fixing leaks in schools helps save large amounts of water.",
      hi: "स्कूलों में लीक नल ठीक करने से बहुत सारा पानी बचाया जा सकता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these helps reuse water?",
      hi: "इनमें से कौन-सी चीज़ पानी के पुन: उपयोग में सहायक है?"
    },
    options: [
      { en: "Letting it drain", hi: "उसे बहने देना" },
      { en: "Using it once only", hi: "सिर्फ एक बार उपयोग करना" },
      { en: "Using kitchen water for plants", hi: "रसोई का पानी पौधों के लिए उपयोग करना" },
      { en: "Pouring on road", hi: "सड़क पर फेंक देना" }
    ],
    correct: {
      en: "Using kitchen water for plants",
      hi: "रसोई का पानी पौधों के लिए उपयोग करना"
    },
    explanation: {
      en: "Used water can help water plants, conserving clean water.",
      hi: "रसोई का पानी पौधों को देकर हम साफ पानी की बचत कर सकते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Who is responsible for saving water?",
      hi: "पानी बचाने की जिम्मेदारी किसकी है?"
    },
    options: [
      { en: "Only government", hi: "सिर्फ सरकार" },
      { en: "Only schools", hi: "सिर्फ स्कूल" },
      { en: "Everyone", hi: "हर कोई" },
      { en: "Only adults", hi: "सिर्फ बड़े लोग" }
    ],
    correct: {
      en: "Everyone",
      hi: "हर कोई"
    },
    explanation: {
      en: "Every person should take steps to conserve water.",
      hi: "हर व्यक्ति को पानी बचाने के लिए कदम उठाना चाहिए।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should we do if we see a leaking tap?",
      hi: "अगर हमें टपकता हुआ नल दिखे तो हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Ignore it", hi: "अनदेखा कर दें" },
      { en: "Tell an adult or fix it", hi: "किसी बड़े को बताएं या खुद ठीक करें" },
      { en: "Play with water", hi: "पानी से खेलें" },
      { en: "Close the bathroom", hi: "बाथरूम बंद कर दें" }
    ],
    correct: {
      en: "Tell an adult or fix it",
      hi: "किसी बड़े को बताएं या खुद ठीक करें"
    },
    explanation: {
      en: "Leaking taps should be fixed or reported immediately.",
      hi: "टपकते नल को तुरंत ठीक किया जाना चाहिए या रिपोर्ट करना चाहिए।"
    }
  }
];

export default waterConservation;
