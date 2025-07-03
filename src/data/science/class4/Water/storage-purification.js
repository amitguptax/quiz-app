const storagePurification = [
  {
    id: 1,
    question: {
      en: "Why do we need to store water?",
      hi: "हमें पानी को क्यों संग्रहित करना चाहिए?"
    },
    options: [
      { en: "To waste it", hi: "इसे बर्बाद करने के लिए" },
      { en: "To use when needed", hi: "जरूरत के समय उपयोग के लिए" },
      { en: "To mix with food", hi: "भोजन में मिलाने के लिए" },
      { en: "To boil it", hi: "इसे उबालने के लिए" }
    ],
    correct: {
      en: "To use when needed",
      hi: "जरूरत के समय उपयोग के लिए"
    },
    explanation: {
      en: "We store water to use it later when it is needed.",
      hi: "हम पानी को इसीलिए संग्रहित करते हैं ताकि आवश्यकता होने पर इसका उपयोग कर सकें।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a method to store water?",
      hi: "निम्न में से कौन पानी संग्रहित करने का तरीका है?"
    },
    options: [
      { en: "In open ground", hi: "खुले मैदान में" },
      { en: "In clean containers", hi: "स्वच्छ कंटेनरों में" },
      { en: "On the roof", hi: "छत पर" },
      { en: "In newspapers", hi: "अखबारों में" }
    ],
    correct: {
      en: "In clean containers",
      hi: "स्वच्छ कंटेनरों में"
    },
    explanation: {
      en: "Water should be stored in clean, covered containers to keep it safe.",
      hi: "पानी को साफ और ढंके हुए बर्तनों में संग्रहित करना चाहिए ताकि वह सुरक्षित रहे।"
    }
  },
  {
    id: 3,
    question: {
      en: "Why should water containers be covered?",
      hi: "पानी के कंटेनरों को ढककर क्यों रखना चाहिए?"
    },
    options: [
      { en: "To keep them warm", hi: "उन्हें गर्म रखने के लिए" },
      { en: "To prevent dust and insects", hi: "धूल और कीड़े-मकोड़ों से बचाने के लिए" },
      { en: "To make water sweet", hi: "पानी को मीठा बनाने के लिए" },
      { en: "To boil the water", hi: "पानी को उबालने के लिए" }
    ],
    correct: {
      en: "To prevent dust and insects",
      hi: "धूल और कीड़े-मकोड़ों से बचाने के लिए"
    },
    explanation: {
      en: "Covering containers prevents contamination from dust, flies, and insects.",
      hi: "बर्तन को ढकने से धूल, मक्खी और कीड़ों से पानी को सुरक्षित रखा जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is purification of water?",
      hi: "पानी का शुद्धिकरण क्या है?"
    },
    options: [
      { en: "Making it cold", hi: "इसे ठंडा करना" },
      { en: "Mixing sugar", hi: "शक्कर मिलाना" },
      { en: "Making it clean and safe", hi: "इसे साफ और सुरक्षित बनाना" },
      { en: "Boiling it for cooking", hi: "खाना पकाने के लिए उबालना" }
    ],
    correct: {
      en: "Making it clean and safe",
      hi: "इसे साफ और सुरक्षित बनाना"
    },
    explanation: {
      en: "Water purification means removing germs and making it safe for drinking.",
      hi: "पानी के शुद्धिकरण का अर्थ है उसमें से कीटाणु हटाना और उसे पीने योग्य बनाना।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which method removes germs from water?",
      hi: "निम्न में से कौन सी विधि पानी से कीटाणु हटाती है?"
    },
    options: [
      { en: "Boiling", hi: "उबालना" },
      { en: "Freezing", hi: "फ्रीज़ करना" },
      { en: "Mixing salt", hi: "नमक मिलाना" },
      { en: "Shaking", hi: "हिलाना" }
    ],
    correct: {
      en: "Boiling",
      hi: "उबालना"
    },
    explanation: {
      en: "Boiling kills most germs and makes water safe to drink.",
      hi: "उबालने से अधिकतर कीटाणु मर जाते हैं और पानी पीने योग्य हो जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is used at home to purify water?",
      hi: "घर में पानी शुद्ध करने के लिए क्या उपयोग किया जाता है?"
    },
    options: [
      { en: "Refrigerator", hi: "फ्रिज" },
      { en: "Water filter", hi: "वॉटर फिल्टर" },
      { en: "Television", hi: "टीवी" },
      { en: "Heater", hi: "हीटर" }
    ],
    correct: {
      en: "Water filter",
      hi: "वॉटर फिल्टर"
    },
    explanation: {
      en: "Water filters are used at home to clean and purify drinking water.",
      hi: "घर में पीने का पानी साफ और शुद्ध करने के लिए वॉटर फिल्टर का उपयोग किया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What happens if we drink dirty water?",
      hi: "अगर हम गंदा पानी पी लें तो क्या होता है?"
    },
    options: [
      { en: "We feel strong", hi: "हम मजबूत महसूस करते हैं" },
      { en: "We may fall sick", hi: "हम बीमार पड़ सकते हैं" },
      { en: "We get energy", hi: "हमें ऊर्जा मिलती है" },
      { en: "Nothing happens", hi: "कुछ नहीं होता" }
    ],
    correct: {
      en: "We may fall sick",
      hi: "हम बीमार पड़ सकते हैं"
    },
    explanation: {
      en: "Dirty water may contain germs that cause diseases.",
      hi: "गंदे पानी में कीटाणु हो सकते हैं जो बीमारियाँ पैदा करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Where should water be stored at home?",
      hi: "पानी को घर में कहाँ संग्रहित करना चाहिए?"
    },
    options: [
      { en: "In buckets without lids", hi: "बिना ढक्कन वाली बाल्टियों में" },
      { en: "In clean and covered containers", hi: "साफ और ढंके बर्तनों में" },
      { en: "In bathroom tubs", hi: "बाथरूम की टब में" },
      { en: "On the floor", hi: "ज़मीन पर" }
    ],
    correct: {
      en: "In clean and covered containers",
      hi: "साफ और ढंके बर्तनों में"
    },
    explanation: {
      en: "Water should be stored in clean and covered containers to avoid contamination.",
      hi: "पानी को साफ और ढंके हुए बर्तनों में संग्रहित करना चाहिए ताकि वह गंदा न हो।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following helps in rainwater storage?",
      hi: "निम्न में से क्या वर्षा जल के संग्रह में मदद करता है?"
    },
    options: [
      { en: "Boiling", hi: "उबालना" },
      { en: "Harvesting system", hi: "वर्षा जल संचयन प्रणाली" },
      { en: "Purifier", hi: "शुद्धिकरण यंत्र" },
      { en: "Sunlight", hi: "धूप" }
    ],
    correct: {
      en: "Harvesting system",
      hi: "वर्षा जल संचयन प्रणाली"
    },
    explanation: {
      en: "Rainwater harvesting system collects and stores rainwater for later use.",
      hi: "वर्षा जल संचयन प्रणाली बारिश के पानी को एकत्रित कर भविष्य के लिए सुरक्षित रखती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which is a natural source of pure water?",
      hi: "शुद्ध पानी का एक प्राकृतिक स्रोत कौन सा है?"
    },
    options: [
      { en: "River", hi: "नदी" },
      { en: "Tap", hi: "नल" },
      { en: "Spring", hi: "झरना" },
      { en: "Pond", hi: "तालाब" }
    ],
    correct: {
      en: "Spring",
      hi: "झरना"
    },
    explanation: {
      en: "Springs are natural sources of fresh and clean water.",
      hi: "झरने शुद्ध और ताज़े पानी के प्राकृतिक स्रोत होते हैं।"
    }
  }
];

export default storagePurification;
