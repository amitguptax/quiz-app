const rainwaterHarvesting = [
  {
    id: 1,
    question: {
      en: "What is rainwater harvesting?",
      hi: "वर्षा जल संचयन क्या है?"
    },
    options: [
      { en: "Wasting rainwater", hi: "वर्षा जल बर्बाद करना" },
      { en: "Collecting and storing rainwater", hi: "वर्षा जल को एकत्रित और संग्रहित करना" },
      { en: "Using water from rivers", hi: "नदी का पानी उपयोग करना" },
      { en: "Filtering drinking water", hi: "पीने का पानी छानना" }
    ],
    correct: {
      en: "Collecting and storing rainwater",
      hi: "वर्षा जल को एकत्रित और संग्रहित करना"
    },
    explanation: {
      en: "Rainwater harvesting means collecting and storing rainwater for future use.",
      hi: "वर्षा जल संचयन का मतलब है बारिश के पानी को एकत्रित कर भविष्य के लिए संरक्षित करना।"
    }
  },
  {
    id: 2,
    question: {
      en: "Where can rainwater harvesting be done?",
      hi: "वर्षा जल संचयन कहाँ किया जा सकता है?"
    },
    options: [
      { en: "Only in forests", hi: "केवल जंगलों में" },
      { en: "On rooftops and open grounds", hi: "छतों और खुले मैदानों में" },
      { en: "Only in cities", hi: "केवल शहरों में" },
      { en: "Only in villages", hi: "केवल गांवों में" }
    ],
    correct: {
      en: "On rooftops and open grounds",
      hi: "छतों और खुले मैदानों में"
    },
    explanation: {
      en: "Rainwater can be collected from rooftops and open areas.",
      hi: "वर्षा जल को छतों और खुले क्षेत्रों से एकत्र किया जा सकता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which part of a house is most useful for rainwater harvesting?",
      hi: "घर का कौन सा भाग वर्षा जल संचयन के लिए सबसे उपयोगी होता है?"
    },
    options: [
      { en: "Bedroom", hi: "शयनकक्ष" },
      { en: "Kitchen", hi: "रसोई" },
      { en: "Roof", hi: "छत" },
      { en: "Basement", hi: "तलघर" }
    ],
    correct: {
      en: "Roof",
      hi: "छत"
    },
    explanation: {
      en: "Rainwater falling on the roof can be collected and stored.",
      hi: "छत पर गिरने वाला बारिश का पानी एकत्र कर संग्रहित किया जा सकता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is one benefit of rainwater harvesting?",
      hi: "वर्षा जल संचयन का एक लाभ क्या है?"
    },
    options: [
      { en: "Increases electricity use", hi: "बिजली की खपत बढ़ाता है" },
      { en: "Reduces water bills", hi: "पानी के बिल को कम करता है" },
      { en: "Creates pollution", hi: "प्रदूषण करता है" },
      { en: "Wastes water", hi: "पानी बर्बाद करता है" }
    ],
    correct: {
      en: "Reduces water bills",
      hi: "पानी के बिल को कम करता है"
    },
    explanation: {
      en: "Harvested rainwater reduces dependence on supplied water.",
      hi: "संचित वर्षा जल से आपूर्ति पर निर्भरता घटती है और बिल कम होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which container is best for storing rainwater?",
      hi: "वर्षा जल संग्रहण के लिए कौन सा कंटेनर सबसे अच्छा है?"
    },
    options: [
      { en: "Dirty open tank", hi: "गंदा खुला टैंक" },
      { en: "Clean and covered tank", hi: "साफ और ढका हुआ टैंक" },
      { en: "Plastic bags", hi: "प्लास्टिक की थैलियाँ" },
      { en: "Metal buckets without lid", hi: "ढक्कन रहित धातु बाल्टी" }
    ],
    correct: {
      en: "Clean and covered tank",
      hi: "साफ और ढका हुआ टैंक"
    },
    explanation: {
      en: "Clean and covered tanks prevent contamination of water.",
      hi: "साफ और ढके टैंक पानी को प्रदूषित होने से बचाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is required to collect rooftop rainwater?",
      hi: "छत का वर्षा जल एकत्र करने के लिए क्या आवश्यक है?"
    },
    options: [
      { en: "Fan and light", hi: "पंखा और लाइट" },
      { en: "Pipe and storage tank", hi: "पाइप और संग्रह टैंक" },
      { en: "Computer", hi: "कंप्यूटर" },
      { en: "Solar panel", hi: "सौर पैनल" }
    ],
    correct: {
      en: "Pipe and storage tank",
      hi: "पाइप और संग्रह टैंक"
    },
    explanation: {
      en: "Pipes are used to direct rainwater to storage tanks.",
      hi: "पाइपों की मदद से वर्षा जल को टैंक तक पहुंचाया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which season is best for rainwater harvesting?",
      hi: "वर्षा जल संचयन के लिए कौन सा मौसम सबसे उपयुक्त है?"
    },
    options: [
      { en: "Summer", hi: "गर्मी" },
      { en: "Winter", hi: "सर्दी" },
      { en: "Monsoon", hi: "मानसून" },
      { en: "Spring", hi: "बसंत" }
    ],
    correct: {
      en: "Monsoon",
      hi: "मानसून"
    },
    explanation: {
      en: "Monsoon provides the maximum rainwater for harvesting.",
      hi: "मानसून में सबसे अधिक बारिश होती है, जिससे पानी संग्रह करना आसान होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What happens if we do not harvest rainwater?",
      hi: "अगर हम वर्षा जल संचयन नहीं करें तो क्या होगा?"
    },
    options: [
      { en: "Water gets saved", hi: "पानी बच जाता है" },
      { en: "Soil becomes fertile", hi: "मिट्टी उपजाऊ बनती है" },
      { en: "Rainwater is wasted", hi: "वर्षा जल व्यर्थ चला जाता है" },
      { en: "No effect", hi: "कोई प्रभाव नहीं" }
    ],
    correct: {
      en: "Rainwater is wasted",
      hi: "वर्षा जल व्यर्थ चला जाता है"
    },
    explanation: {
      en: "Uncollected rainwater flows away and cannot be reused.",
      hi: "यदि वर्षा जल को संग्रहित नहीं किया जाए तो वह बहकर व्यर्थ चला जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following can improve groundwater level?",
      hi: "निम्न में से कौन भूजल स्तर को बढ़ा सकता है?"
    },
    options: [
      { en: "Throwing water in drain", hi: "नाली में पानी फेंकना" },
      { en: "Using motor pump", hi: "मोटर पंप चलाना" },
      { en: "Rainwater harvesting", hi: "वर्षा जल संचयन" },
      { en: "Washing vehicles", hi: "वाहन धोना" }
    ],
    correct: {
      en: "Rainwater harvesting",
      hi: "वर्षा जल संचयन"
    },
    explanation: {
      en: "Harvested rainwater recharges groundwater levels.",
      hi: "वर्षा जल संचयन से भूजल पुनः भर जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which country is known for traditional rainwater harvesting systems?",
      hi: "कौन सा देश पारंपरिक वर्षा जल संचयन प्रणालियों के लिए जाना जाता है?"
    },
    options: [
      { en: "USA", hi: "अमेरिका" },
      { en: "Australia", hi: "ऑस्ट्रेलिया" },
      { en: "India", hi: "भारत" },
      { en: "Russia", hi: "रूस" }
    ],
    correct: {
      en: "India",
      hi: "भारत"
    },
    explanation: {
      en: "India has ancient practices of harvesting rainwater in many regions.",
      hi: "भारत में कई पारंपरिक वर्षा जल संचयन प्रणालियाँ प्रचलित हैं।"
    }
  }
];

export default rainwaterHarvesting;
