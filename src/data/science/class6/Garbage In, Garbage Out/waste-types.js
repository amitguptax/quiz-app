const wasteTypes = [
  {
    id: 1,
    question: {
      en: "Which of the following is biodegradable waste?",
      hi: "निम्न में से कौन सा कचरा जैविक अपघटनीय है?"
    },
    options: [
      { en: "Plastic bag", hi: "प्लास्टिक बैग" },
      { en: "Banana peel", hi: "केले का छिलका" },
      { en: "Glass bottle", hi: "कांच की बोतल" },
      { en: "Aluminum foil", hi: "एल्यूमीनियम पन्नी" }
    ],
    correct: {
      en: "Banana peel",
      hi: "केले का छिलका"
    },
    explanation: {
      en: "Banana peel is biodegradable as it decomposes naturally.",
      hi: "केले का छिलका जैविक अपघटनीय है क्योंकि यह प्राकृतिक रूप से सड़ जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is non-biodegradable waste?",
      hi: "इनमें से कौन सा कचरा अजैविक अपघटनीय है?"
    },
    options: [
      { en: "Vegetable peels", hi: "सब्जी के छिलके" },
      { en: "Leaves", hi: "पत्तियाँ" },
      { en: "Plastic bottle", hi: "प्लास्टिक की बोतल" },
      { en: "Fruit skin", hi: "फल का छिलका" }
    ],
    correct: {
      en: "Plastic bottle",
      hi: "प्लास्टिक की बोतल"
    },
    explanation: {
      en: "Plastic bottle is non-biodegradable as it does not decompose naturally.",
      hi: "प्लास्टिक की बोतल अजैविक अपघटनीय है क्योंकि यह प्राकृतिक रूप से नहीं सड़ती।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following wastes is recyclable?",
      hi: "निम्न में से कौन सा कचरा पुनः उपयोग योग्य है?"
    },
    options: [
      { en: "Used tissue", hi: "प्रयुक्त टिशू" },
      { en: "Glass jar", hi: "कांच की जार" },
      { en: "Food waste", hi: "खाद्य अपशिष्ट" },
      { en: "Old fruits", hi: "पुराने फल" }
    ],
    correct: {
      en: "Glass jar",
      hi: "कांच की जार"
    },
    explanation: {
      en: "Glass jar can be recycled and reused.",
      hi: "कांच की जार को पुनः उपयोग और पुनर्चक्रण किया जा सकता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Biodegradable waste turns into:",
      hi: "जैविक अपघटनीय कचरा किसमें बदल जाता है?"
    },
    options: [
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Compost", hi: "खाद" },
      { en: "Metal", hi: "धातु" },
      { en: "Glass", hi: "कांच" }
    ],
    correct: {
      en: "Compost",
      hi: "खाद"
    },
    explanation: {
      en: "Biodegradable waste decomposes and becomes compost.",
      hi: "जैविक अपघटनीय कचरा सड़कर खाद में बदल जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is an example of electronic waste (e-waste)?",
      hi: "इलेक्ट्रॉनिक कचरे (ई-कचरा) का उदाहरण क्या है?"
    },
    options: [
      { en: "Old mobile phone", hi: "पुराना मोबाइल फोन" },
      { en: "Banana peel", hi: "केले का छिलका" },
      { en: "Newspaper", hi: "अखबार" },
      { en: "Broken toy", hi: "टूटा खिलौना" }
    ],
    correct: {
      en: "Old mobile phone",
      hi: "पुराना मोबाइल फोन"
    },
    explanation: {
      en: "E-waste includes discarded electronic devices like old phones.",
      hi: "ई-कचरा पुराने मोबाइल जैसे फेंके गए इलेक्ट्रॉनिक उपकरण होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which color bin is used for biodegradable waste?",
      hi: "जैविक अपघटनीय कचरे के लिए कौन सा रंग का डिब्बा उपयोग होता है?"
    },
    options: [
      { en: "Blue", hi: "नीला" },
      { en: "Green", hi: "हरा" },
      { en: "Red", hi: "लाल" },
      { en: "Yellow", hi: "पीला" }
    ],
    correct: {
      en: "Green",
      hi: "हरा"
    },
    explanation: {
      en: "Green bins are used for biodegradable waste.",
      hi: "हरे डिब्बों का उपयोग जैविक अपघटनीय कचरे के लिए किया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What type of waste are paper and cardboard?",
      hi: "कागज और गत्ता किस प्रकार का कचरा है?"
    },
    options: [
      { en: "Biodegradable", hi: "जैविक अपघटनीय" },
      { en: "Non-biodegradable", hi: "अजैविक अपघटनीय" },
      { en: "Electronic", hi: "इलेक्ट्रॉनिक" },
      { en: "Hazardous", hi: "हानिकारक" }
    ],
    correct: {
      en: "Biodegradable",
      hi: "जैविक अपघटनीय"
    },
    explanation: {
      en: "Paper and cardboard can be decomposed, so they are biodegradable.",
      hi: "कागज और गत्ता सड़ सकते हैं, इसलिए वे जैविक अपघटनीय हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is a hazardous waste?",
      hi: "निम्न में से कौन सा कचरा खतरनाक (हानिकारक) है?"
    },
    options: [
      { en: "Fruit peel", hi: "फल का छिलका" },
      { en: "Used battery", hi: "प्रयुक्त बैटरी" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Clay pot", hi: "मिट्टी का बर्तन" }
    ],
    correct: {
      en: "Used battery",
      hi: "प्रयुक्त बैटरी"
    },
    explanation: {
      en: "Used batteries contain chemicals that are harmful to health.",
      hi: "प्रयुक्त बैटरियों में हानिकारक रसायन होते हैं, जो स्वास्थ्य के लिए खतरनाक हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which waste takes the longest time to decompose?",
      hi: "कौन सा कचरा सड़ने में सबसे अधिक समय लेता है?"
    },
    options: [
      { en: "Vegetable waste", hi: "सब्जी का कचरा" },
      { en: "Paper", hi: "कागज" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Leaves", hi: "पत्तियाँ" }
    ],
    correct: {
      en: "Plastic",
      hi: "प्लास्टिक"
    },
    explanation: {
      en: "Plastic takes hundreds of years to decompose.",
      hi: "प्लास्टिक को सड़ने में सैकड़ों साल लगते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the main danger of throwing non-biodegradable waste in open areas?",
      hi: "अजैविक अपघटनीय कचरे को खुले में फेंकने का मुख्य खतरा क्या है?"
    },
    options: [
      { en: "Smell", hi: "गंध" },
      { en: "Attracts birds", hi: "पक्षियों को आकर्षित करता है" },
      { en: "Soil and water pollution", hi: "मिट्टी और जल प्रदूषण" },
      { en: "Makes ground colorful", hi: "जमीन को रंगीन बनाता है" }
    ],
    correct: {
      en: "Soil and water pollution",
      hi: "मिट्टी और जल प्रदूषण"
    },
    explanation: {
      en: "Non-biodegradable waste causes pollution when dumped in the open.",
      hi: "अजैविक अपघटनीय कचरा खुले में फेंकने पर प्रदूषण फैलाता है।"
    }
  }
];

export default wasteTypes;
