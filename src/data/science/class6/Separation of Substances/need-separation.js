const needSeparation = [
  {
    id: 1,
    question: {
      en: "Why do we separate substances in daily life?",
      hi: "हम रोज़मर्रा की ज़िंदगी में पदार्थों को क्यों अलग करते हैं?"
    },
    options: [
      { en: "To mix new items", hi: "नई चीजें मिलाने के लिए" },
      { en: "To remove useful substances", hi: "उपयोगी चीजें हटाने के लिए" },
      { en: "To remove impurities", hi: "अशुद्धियाँ हटाने के लिए" },
      { en: "To waste materials", hi: "सामग्री को बर्बाद करने के लिए" }
    ],
    correct: {
      en: "To remove impurities",
      hi: "अशुद्धियाँ हटाने के लिए"
    },
    explanation: {
      en: "We separate substances to remove unwanted or harmful materials.",
      hi: "हम अवांछित या हानिकारक पदार्थों को हटाने के लिए पृथक्करण करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Why is separation important before cooking grains like rice or pulses?",
      hi: "चावल या दाल जैसे अनाज पकाने से पहले पृथक्करण क्यों आवश्यक है?"
    },
    options: [
      { en: "To remove husk and stones", hi: "भूसी और कंकड़ हटाने के लिए" },
      { en: "To add salt", hi: "नमक मिलाने के लिए" },
      { en: "To dry them", hi: "उन्हें सुखाने के लिए" },
      { en: "To mix with vegetables", hi: "सब्जियों के साथ मिलाने के लिए" }
    ],
    correct: {
      en: "To remove husk and stones",
      hi: "भूसी और कंकड़ हटाने के लिए"
    },
    explanation: {
      en: "Unwanted items like husk and stones need to be removed before cooking.",
      hi: "पकाने से पहले भूसी और कंकड़ जैसी अशुद्धियाँ निकालनी जरूरी होती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is a reason to separate solid from liquid?",
      hi: "ठोस को तरल से अलग करने का कारण क्या हो सकता है?"
    },
    options: [
      { en: "To mix them better", hi: "उन्हें बेहतर मिलाने के लिए" },
      { en: "To remove the solid waste", hi: "ठोस अपशिष्ट हटाने के लिए" },
      { en: "To make color change", hi: "रंग बदलने के लिए" },
      { en: "To freeze the liquid", hi: "तरल को जमाने के लिए" }
    ],
    correct: {
      en: "To remove the solid waste",
      hi: "ठोस अपशिष्ट हटाने के लिए"
    },
    explanation: {
      en: "Solids like dirt or tea leaves need to be removed from liquid.",
      hi: "तरल से गंदगी या चाय की पत्तियाँ जैसे ठोस अपशिष्ट हटाना ज़रूरी होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do we use filtration in water purification?",
      hi: "हम जल शुद्धिकरण में छानने की विधि क्यों अपनाते हैं?"
    },
    options: [
      { en: "To add minerals", hi: "खनिज मिलाने के लिए" },
      { en: "To color the water", hi: "पानी रंगने के लिए" },
      { en: "To remove solid impurities", hi: "ठोस अशुद्धियाँ हटाने के लिए" },
      { en: "To make it warm", hi: "इसे गर्म करने के लिए" }
    ],
    correct: {
      en: "To remove solid impurities",
      hi: "ठोस अशुद्धियाँ हटाने के लिए"
    },
    explanation: {
      en: "Filtration helps remove particles like mud or dust from water.",
      hi: "छानने से पानी से कीचड़ या धूल जैसे ठोस कण हटते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Why do farmers separate grains from husk after harvesting?",
      hi: "किसान कटाई के बाद अनाज से भूसी क्यों अलग करते हैं?"
    },
    options: [
      { en: "To burn the husk", hi: "भूसी जलाने के लिए" },
      { en: "To store pure grains", hi: "शुद्ध अनाज को संग्रहित करने के लिए" },
      { en: "To boil them", hi: "उन्हें उबालने के लिए" },
      { en: "To dry the husk", hi: "भूसी को सुखाने के लिए" }
    ],
    correct: {
      en: "To store pure grains",
      hi: "शुद्ध अनाज को संग्रहित करने के लिए"
    },
    explanation: {
      en: "Removing husk helps in storing clean, edible grains.",
      hi: "भूसी को हटाने से शुद्ध और खाने योग्य अनाज को संग्रह करना आसान होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the purpose of sieving flour?",
      hi: "आटे को छानने का उद्देश्य क्या होता है?"
    },
    options: [
      { en: "To make it wet", hi: "इसे गीला करने के लिए" },
      { en: "To mix sugar", hi: "चीनी मिलाने के लिए" },
      { en: "To remove lumps and impurities", hi: "गांठें और अशुद्धियाँ हटाने के लिए" },
      { en: "To boil it", hi: "इसे उबालने के लिए" }
    ],
    correct: {
      en: "To remove lumps and impurities",
      hi: "गांठें और अशुद्धियाँ हटाने के लिए"
    },
    explanation: {
      en: "Sieving makes the flour smooth and clean.",
      hi: "छानने से आटा मुलायम और साफ हो जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why is separation needed in a mixture of salt and sand?",
      hi: "नमक और रेत के मिश्रण में पृथक्करण क्यों आवश्यक है?"
    },
    options: [
      { en: "To mix it with water", hi: "इसे पानी में मिलाने के लिए" },
      { en: "To separate useful salt from sand", hi: "रेत से उपयोगी नमक अलग करने के लिए" },
      { en: "To color it", hi: "इसे रंगने के लिए" },
      { en: "To freeze it", hi: "इसे जमाने के लिए" }
    ],
    correct: {
      en: "To separate useful salt from sand",
      hi: "रेत से उपयोगी नमक अलग करने के लिए"
    },
    explanation: {
      en: "Salt is dissolved in water and separated from sand using filtration.",
      hi: "नमक को पानी में घोलकर और रेत को छानकर अलग किया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why is it important to separate pebbles from grains before cooking?",
      hi: "पकाने से पहले अनाज से कंकड़ अलग करना क्यों ज़रूरी है?"
    },
    options: [
      { en: "To make food tasty", hi: "खाना स्वादिष्ट बनाने के लिए" },
      { en: "To avoid injury while eating", hi: "खाते समय चोट से बचने के लिए" },
      { en: "To decorate it", hi: "इसे सजाने के लिए" },
      { en: "To boil easily", hi: "आसानी से उबालने के लिए" }
    ],
    correct: {
      en: "To avoid injury while eating",
      hi: "खाते समय चोट से बचने के लिए"
    },
    explanation: {
      en: "Pebbles can hurt our teeth, so they should be removed.",
      hi: "कंकड़ दांतों को नुकसान पहुंचा सकते हैं, इसलिए उन्हें हटाना ज़रूरी है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why is separation needed in oil and water mixtures?",
      hi: "तेल और पानी के मिश्रण में पृथक्करण क्यों आवश्यक है?"
    },
    options: [
      { en: "They form a solid", hi: "वे ठोस बनाते हैं" },
      { en: "They look the same", hi: "वे एक जैसे दिखते हैं" },
      { en: "They do not mix properly", hi: "वे सही से नहीं मिलते" },
      { en: "They smell bad", hi: "उनसे दुर्गंध आती है" }
    ],
    correct: {
      en: "They do not mix properly",
      hi: "वे सही से नहीं मिलते"
    },
    explanation: {
      en: "Oil and water separate naturally due to different densities.",
      hi: "तेल और पानी की सघनता अलग होने के कारण वे अलग हो जाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do we need to separate cream from milk?",
      hi: "हमें दूध से मलाई क्यों अलग करनी होती है?"
    },
    options: [
      { en: "To make the milk sweeter", hi: "दूध को मीठा बनाने के लिए" },
      { en: "To add color", hi: "रंग मिलाने के लिए" },
      { en: "To use cream for butter or sweets", hi: "मक्खन या मिठाई के लिए मलाई उपयोग करने के लिए" },
      { en: "To freeze the milk", hi: "दूध को जमाने के लिए" }
    ],
    correct: {
      en: "To use cream for butter or sweets",
      hi: "मक्खन या मिठाई के लिए मलाई उपयोग करने के लिए"
    },
    explanation: {
      en: "Cream is separated to make butter or desserts.",
      hi: "मलाई को मक्खन या मिठाई बनाने के लिए निकाला जाता है।"
    }
  }
];

export default needSeparation;
