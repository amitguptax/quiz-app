const wasteDisposalMethods = [
  {
    id: 1,
    question: {
      en: "What is the process of turning waste into useful items called?",
      hi: "कचरे को उपयोगी वस्तुओं में बदलने की प्रक्रिया को क्या कहते हैं?"
    },
    options: [
      { en: "Dumping", hi: "फेंकना" },
      { en: "Burning", hi: "जलाना" },
      { en: "Recycling", hi: "पुनर्चक्रण" },
      { en: "Sweeping", hi: "झाड़ू लगाना" }
    ],
    correct: {
      en: "Recycling",
      hi: "पुनर्चक्रण"
    },
    explanation: {
      en: "Recycling means converting waste into reusable materials.",
      hi: "पुनर्चक्रण का अर्थ है कचरे को पुनः उपयोग योग्य वस्तुओं में बदलना।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which color bin is used for non-biodegradable waste?",
      hi: "अजैविक अपघटनीय कचरे के लिए कौन सा रंग का डिब्बा प्रयोग किया जाता है?"
    },
    options: [
      { en: "Green", hi: "हरा" },
      { en: "Blue", hi: "नीला" },
      { en: "Red", hi: "लाल" },
      { en: "Yellow", hi: "पीला" }
    ],
    correct: {
      en: "Blue",
      hi: "नीला"
    },
    explanation: {
      en: "Blue bins are used for dry and non-biodegradable waste.",
      hi: "नीले डिब्बों का प्रयोग सूखे और अजैविक अपघटनीय कचरे के लिए किया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What do we call the natural process of rotting food and plant waste?",
      hi: "खाद्य और पौधों के कचरे के सड़ने की प्राकृतिक प्रक्रिया को क्या कहते हैं?"
    },
    options: [
      { en: "Incineration", hi: "दहन" },
      { en: "Landfilling", hi: "लैंडफिल" },
      { en: "Composting", hi: "खाद बनाना" },
      { en: "Sweeping", hi: "झाड़ू लगाना" }
    ],
    correct: {
      en: "Composting",
      hi: "खाद बनाना"
    },
    explanation: {
      en: "Composting is the process of converting organic waste into manure.",
      hi: "खाद बनाना जैविक कचरे को खाद में बदलने की प्रक्रिया है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which waste should be put in the green bin?",
      hi: "कौन सा कचरा हरे डिब्बे में डालना चाहिए?"
    },
    options: [
      { en: "Glass pieces", hi: "कांच के टुकड़े" },
      { en: "Plastic bottles", hi: "प्लास्टिक की बोतलें" },
      { en: "Vegetable peels", hi: "सब्जियों के छिलके" },
      { en: "Metal cans", hi: "धातु के डिब्बे" }
    ],
    correct: {
      en: "Vegetable peels",
      hi: "सब्जियों के छिलके"
    },
    explanation: {
      en: "Biodegradable waste like vegetable peels goes in the green bin.",
      hi: "सब्जियों के छिलके जैसे जैविक कचरे को हरे डिब्बे में डाला जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is the best method to manage garden waste?",
      hi: "बगीचे के कचरे के प्रबंधन का सबसे अच्छा तरीका क्या है?"
    },
    options: [
      { en: "Burn it", hi: "जला देना" },
      { en: "Throw in river", hi: "नदी में फेंक देना" },
      { en: "Make compost", hi: "खाद बनाना" },
      { en: "Dump in forest", hi: "जंगल में फेंकना" }
    ],
    correct: {
      en: "Make compost",
      hi: "खाद बनाना"
    },
    explanation: {
      en: "Garden waste can be turned into compost for plants.",
      hi: "बगीचे का कचरा खाद में बदलकर पौधों के लिए उपयोगी बनाया जा सकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should we do with used plastic bottles?",
      hi: "प्रयुक्त प्लास्टिक की बोतलों के साथ हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Recycle them", hi: "पुनर्चक्रण करना" },
      { en: "Burn them", hi: "जला देना" },
      { en: "Throw anywhere", hi: "कहीं भी फेंक देना" },
      { en: "Bury in soil", hi: "मिट्टी में गाड़ देना" }
    ],
    correct: {
      en: "Recycle them",
      hi: "पुनर्चक्रण करना"
    },
    explanation: {
      en: "Plastic bottles should be recycled to reduce pollution.",
      hi: "प्लास्टिक की बोतलों का पुनर्चक्रण करना चाहिए ताकि प्रदूषण कम हो।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the purpose of a landfill?",
      hi: "लैंडफिल का उद्देश्य क्या होता है?"
    },
    options: [
      { en: "To burn waste", hi: "कचरा जलाने के लिए" },
      { en: "To dump waste in layers", hi: "कचरे को परतों में दबाने के लिए" },
      { en: "To compost leaves", hi: "पत्तों की खाद बनाने के लिए" },
      { en: "To clean roads", hi: "सड़कों की सफाई के लिए" }
    ],
    correct: {
      en: "To dump waste in layers",
      hi: "कचरे को परतों में दबाने के लिए"
    },
    explanation: {
      en: "Landfills are places where waste is buried under soil in layers.",
      hi: "लैंडफिल ऐसे स्थान होते हैं जहाँ कचरे को मिट्टी की परतों में दबाया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should not be done with household waste?",
      hi: "घरेलू कचरे के साथ क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Sort into dry and wet", hi: "सूखा और गीला अलग करना" },
      { en: "Burn in open", hi: "खुले में जलाना" },
      { en: "Compost wet waste", hi: "गीले कचरे की खाद बनाना" },
      { en: "Use bins", hi: "डिब्बों का उपयोग करना" }
    ],
    correct: {
      en: "Burn in open",
      hi: "खुले में जलाना"
    },
    explanation: {
      en: "Burning waste in the open causes pollution and should be avoided.",
      hi: "कचरे को खुले में जलाना प्रदूषण फैलाता है, यह नहीं करना चाहिए।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which method helps reduce the amount of waste generated?",
      hi: "कौन सी विधि उत्पन्न कचरे की मात्रा को कम करने में मदद करती है?"
    },
    options: [
      { en: "Reuse old items", hi: "पुरानी चीजों का पुनः उपयोग" },
      { en: "Buy more plastic", hi: "अधिक प्लास्टिक खरीदना" },
      { en: "Use paper plates daily", hi: "रोज़ाना कागज़ की प्लेटें उपयोग करना" },
      { en: "Burn garbage", hi: "कचरा जलाना" }
    ],
    correct: {
      en: "Reuse old items",
      hi: "पुरानी चीजों का पुनः उपयोग"
    },
    explanation: {
      en: "Reusing old things reduces the need to create new waste.",
      hi: "पुरानी चीजों का पुनः उपयोग करने से नया कचरा उत्पन्न होने से रोका जा सकता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is segregation of waste?",
      hi: "कचरे का पृथक्करण क्या होता है?"
    },
    options: [
      { en: "Throwing in river", hi: "नदी में फेंकना" },
      { en: "Mixing all types of waste", hi: "सभी प्रकार के कचरे को मिलाना" },
      { en: "Separating dry and wet waste", hi: "सूखा और गीला कचरा अलग करना" },
      { en: "Burning waste", hi: "कचरा जलाना" }
    ],
    correct: {
      en: "Separating dry and wet waste",
      hi: "सूखा और गीला कचरा अलग करना"
    },
    explanation: {
      en: "Segregation helps in proper disposal and recycling of waste.",
      hi: "कचरे का पृथक्करण इसके सही निपटान और पुनर्चक्रण में मदद करता है।"
    }
  }
];

export default wasteDisposalMethods;
