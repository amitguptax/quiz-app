const saveEnvironment = [
  {
    id: 1,
    question: {
      en: "What can we do to save trees?",
      hi: "हम पेड़ों को बचाने के लिए क्या कर सकते हैं?"
    },
    options: [
      { en: "Cut more trees", hi: "अधिक पेड़ काटें" },
      { en: "Plant more trees", hi: "अधिक पेड़ लगाएं" },
      { en: "Burn trees", hi: "पेड़ों को जलाएं" },
      { en: "Ignore trees", hi: "पेड़ों को नज़रअंदाज़ करें" }
    ],
    correct: {
      en: "Plant more trees",
      hi: "अधिक पेड़ लगाएं"
    },
    explanation: {
      en: "Planting more trees helps increase green cover and protect the environment.",
      hi: "अधिक पेड़ लगाना हरित आवरण बढ़ाने और पर्यावरण की रक्षा करने में मदद करता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should we do with waste materials?",
      hi: "हमें कचरे का क्या करना चाहिए?"
    },
    options: [
      { en: "Throw in rivers", hi: "नदियों में फेंकें" },
      { en: "Burn in open air", hi: "खुली हवा में जलाएं" },
      { en: "Dump on roads", hi: "सड़कों पर फेंकें" },
      { en: "Dispose properly or recycle", hi: "सही तरीके से निपटान या पुनः उपयोग करें" }
    ],
    correct: {
      en: "Dispose properly or recycle",
      hi: "सही तरीके से निपटान या पुनः उपयोग करें"
    },
    explanation: {
      en: "Proper waste management and recycling reduces pollution.",
      hi: "सही कचरा प्रबंधन और पुनः उपयोग से प्रदूषण कम होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "How can we save electricity at home?",
      hi: "हम घर में बिजली कैसे बचा सकते हैं?"
    },
    options: [
      { en: "Keep lights on all the time", hi: "लाइट्स हमेशा जलती रहें" },
      { en: "Use appliances unnecessarily", hi: "अनावश्यक उपकरण चलाएं" },
      { en: "Switch off lights when not needed", hi: "जब जरूरत न हो तो लाइट बंद करें" },
      { en: "Keep fan on even when not in room", hi: "कमरे में न होने पर भी पंखा चालू रखें" }
    ],
    correct: {
      en: "Switch off lights when not needed",
      hi: "जब जरूरत न हो तो लाइट बंद करें"
    },
    explanation: {
      en: "Turning off lights saves electricity and reduces energy waste.",
      hi: "लाइट बंद करने से बिजली की बचत और ऊर्जा की बर्बादी कम होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is one way to reduce plastic pollution?",
      hi: "प्लास्टिक प्रदूषण को कम करने का एक उपाय क्या है?"
    },
    options: [
      { en: "Use plastic bags", hi: "प्लास्टिक बैग का उपयोग करें" },
      { en: "Use reusable bags", hi: "पुनः उपयोग होने वाले बैग का प्रयोग करें" },
      { en: "Burn plastic", hi: "प्लास्टिक जलाएं" },
      { en: "Throw plastic in open", hi: "प्लास्टिक खुले में फेंकें" }
    ],
    correct: {
      en: "Use reusable bags",
      hi: "पुनः उपयोग होने वाले बैग का प्रयोग करें"
    },
    explanation: {
      en: "Reusable bags help reduce plastic waste and pollution.",
      hi: "पुनः उपयोग होने वाले बैग प्लास्टिक अपशिष्ट और प्रदूषण को कम करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which transport should we prefer to reduce air pollution?",
      hi: "वायु प्रदूषण को कम करने के लिए हमें किस परिवहन का उपयोग करना चाहिए?"
    },
    options: [
      { en: "Private car for each person", hi: "हर व्यक्ति के लिए निजी कार" },
      { en: "Public transport or cycling", hi: "सार्वजनिक परिवहन या साइकिल" },
      { en: "Old vehicles", hi: "पुराने वाहन" },
      { en: "More diesel engines", hi: "अधिक डीज़ल इंजन" }
    ],
    correct: {
      en: "Public transport or cycling",
      hi: "सार्वजनिक परिवहन या साइकिल"
    },
    explanation: {
      en: "Using buses or bicycles reduces the number of vehicles and pollution.",
      hi: "बसों या साइकिलों का उपयोग वाहनों की संख्या और प्रदूषण को कम करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why is it important to protect the environment?",
      hi: "पर्यावरण की रक्षा करना क्यों ज़रूरी है?"
    },
    options: [
      { en: "To increase pollution", hi: "प्रदूषण बढ़ाने के लिए" },
      { en: "To harm animals", hi: "जानवरों को नुकसान पहुंचाने के लिए" },
      { en: "For a healthy and safe life", hi: "स्वस्थ और सुरक्षित जीवन के लिए" },
      { en: "To waste resources", hi: "संसाधनों को बर्बाद करने के लिए" }
    ],
    correct: {
      en: "For a healthy and safe life",
      hi: "स्वस्थ और सुरक्षित जीवन के लिए"
    },
    explanation: {
      en: "A clean environment supports good health and safety for all living beings.",
      hi: "स्वच्छ पर्यावरण सभी जीवों के लिए स्वास्थ्य और सुरक्षा प्रदान करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following activities helps in saving the environment?",
      hi: "निम्न में से कौन सा कार्य पर्यावरण बचाने में मदद करता है?"
    },
    options: [
      { en: "Throwing garbage on road", hi: "सड़क पर कचरा फेंकना" },
      { en: "Burning plastic", hi: "प्लास्टिक जलाना" },
      { en: "Using both sides of paper", hi: "कागज के दोनों ओर उपयोग करना" },
      { en: "Using vehicles unnecessarily", hi: "अनावश्यक रूप से वाहन चलाना" }
    ],
    correct: {
      en: "Using both sides of paper",
      hi: "कागज के दोनों ओर उपयोग करना"
    },
    explanation: {
      en: "Using paper wisely reduces tree cutting and conserves resources.",
      hi: "कागज का समझदारी से उपयोग पेड़ कटाई और संसाधनों की बचत करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which is an environment-friendly activity?",
      hi: "इनमें से कौन सा पर्यावरण के अनुकूल कार्य है?"
    },
    options: [
      { en: "Using solar energy", hi: "सौर ऊर्जा का उपयोग" },
      { en: "Using firecrackers", hi: "पटाखों का उपयोग" },
      { en: "Cutting green plants", hi: "हरे पौधों को काटना" },
      { en: "Wasting clean water", hi: "स्वच्छ पानी को बर्बाद करना" }
    ],
    correct: {
      en: "Using solar energy",
      hi: "सौर ऊर्जा का उपयोग"
    },
    explanation: {
      en: "Solar energy is clean and renewable, making it environment-friendly.",
      hi: "सौर ऊर्जा स्वच्छ और नवीकरणीय होती है, इसलिए यह पर्यावरण के अनुकूल है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How can children help save the environment?",
      hi: "बच्चे पर्यावरण बचाने में कैसे मदद कर सकते हैं?"
    },
    options: [
      { en: "Littering in school", hi: "स्कूल में कचरा फैलाना" },
      { en: "Wasting electricity", hi: "बिजली की बर्बादी करना" },
      { en: "Planting saplings", hi: "पौधे लगाना" },
      { en: "Playing with plastic bags", hi: "प्लास्टिक बैग से खेलना" }
    ],
    correct: {
      en: "Planting saplings",
      hi: "पौधे लगाना"
    },
    explanation: {
      en: "Children can help by planting trees and avoiding pollution.",
      hi: "बच्चे पौधे लगाकर और प्रदूषण से बचकर पर्यावरण की मदद कर सकते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What should we do to keep our surroundings clean?",
      hi: "हमें अपने आस-पास को साफ रखने के लिए क्या करना चाहिए?"
    },
    options: [
      { en: "Spit on roads", hi: "सड़क पर थूकें" },
      { en: "Use dustbins", hi: "कूड़ेदान का उपयोग करें" },
      { en: "Throw waste anywhere", hi: "कचरा कहीं भी फेंकें" },
      { en: "Burn leaves in open", hi: "पत्तों को खुले में जलाएं" }
    ],
    correct: {
      en: "Use dustbins",
      hi: "कूड़ेदान का उपयोग करें"
    },
    explanation: {
      en: "Using dustbins prevents littering and keeps the environment clean.",
      hi: "कूड़ेदान का उपयोग कचरा फैलने से रोकता है और पर्यावरण को स्वच्छ रखता है।"
    }
  }
];

export default saveEnvironment;
