const personalHygiene = [
  {
    id: 1,
    question: {
      en: "What is personal hygiene?",
      hi: "व्यक्तिगत स्वच्छता क्या है?"
    },
    options: [
      { en: "Keeping our body clean", hi: "अपने शरीर को साफ रखना" },
      { en: "Wearing dirty clothes", hi: "गंदे कपड़े पहनना" },
      { en: "Not bathing", hi: "नहाना नहीं" },
      { en: "Playing in dust", hi: "धूल में खेलना" }
    ],
    correct: {
      en: "Keeping our body clean",
      hi: "अपने शरीर को साफ रखना"
    },
    explanation: {
      en: "Personal hygiene means keeping our body clean and healthy.",
      hi: "व्यक्तिगत स्वच्छता का अर्थ है अपने शरीर को साफ और स्वस्थ रखना।"
    }
  },
  {
    id: 2,
    question: {
      en: "Why should we brush our teeth daily?",
      hi: "हमें रोज़ दाँत क्यों साफ़ करने चाहिए?"
    },
    options: [
      { en: "To keep teeth clean and healthy", hi: "दाँतों को साफ और स्वस्थ रखने के लिए" },
      { en: "To waste toothpaste", hi: "टूथपेस्ट बर्बाद करने के लिए" },
      { en: "To play", hi: "खेलने के लिए" },
      { en: "To get sick", hi: "बीमार होने के लिए" }
    ],
    correct: {
      en: "To keep teeth clean and healthy",
      hi: "दाँतों को साफ और स्वस्थ रखने के लिए"
    },
    explanation: {
      en: "Brushing teeth helps remove germs and prevents cavities.",
      hi: "दाँतों को ब्रश करने से कीटाणु दूर होते हैं और दाँत खराब नहीं होते।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should we use to clean our hands?",
      hi: "हमें अपने हाथ साफ करने के लिए क्या उपयोग करना चाहिए?"
    },
    options: [
      { en: "Soap and water", hi: "साबुन और पानी" },
      { en: "Mud", hi: "कीचड़" },
      { en: "Oil", hi: "तेल" },
      { en: "Paint", hi: "पेंट" }
    ],
    correct: {
      en: "Soap and water",
      hi: "साबुन और पानी"
    },
    explanation: {
      en: "Soap and water remove germs and keep hands clean.",
      hi: "साबुन और पानी से हाथ धोने से कीटाणु दूर होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "When should we cut our nails?",
      hi: "हमें अपने नाखून कब काटने चाहिए?"
    },
    options: [
      { en: "Regularly", hi: "नियमित रूप से" },
      { en: "Never", hi: "कभी नहीं" },
      { en: "Once a year", hi: "साल में एक बार" },
      { en: "During festivals only", hi: "केवल त्योहारों में" }
    ],
    correct: {
      en: "Regularly",
      hi: "नियमित रूप से"
    },
    explanation: {
      en: "Cutting nails regularly prevents dirt and germs from collecting.",
      hi: "नियमित रूप से नाखून काटने से गंदगी और कीटाणु नहीं जमते।"
    }
  },
  {
    id: 5,
    question: {
      en: "What should we do after using the toilet?",
      hi: "शौचालय उपयोग के बाद हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Wash hands with soap", hi: "साबुन से हाथ धोना" },
      { en: "Eat food", hi: "भोजन करना" },
      { en: "Sleep", hi: "सो जाना" },
      { en: "Run outside", hi: "बाहर दौड़ जाना" }
    ],
    correct: {
      en: "Wash hands with soap",
      hi: "साबुन से हाथ धोना"
    },
    explanation: {
      en: "It prevents the spread of germs and diseases.",
      hi: "यह कीटाणुओं और बीमारियों के फैलाव को रोकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the benefit of bathing daily?",
      hi: "रोज़ नहाने से क्या लाभ होता है?"
    },
    options: [
      { en: "Keeps our body clean", hi: "शरीर साफ़ रहता है" },
      { en: "We feel lazy", hi: "हम आलसी महसूस करते हैं" },
      { en: "We get dirty", hi: "हम गंदे हो जाते हैं" },
      { en: "We catch cold", hi: "हमें सर्दी लगती है" }
    ],
    correct: {
      en: "Keeps our body clean",
      hi: "शरीर साफ़ रहता है"
    },
    explanation: {
      en: "Bathing removes dirt, sweat and keeps us fresh.",
      hi: "नहाने से शरीर की गंदगी हटती है और ताजगी मिलती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What should we wear after bathing?",
      hi: "नहाने के बाद हमें क्या पहनना चाहिए?"
    },
    options: [
      { en: "Clean clothes", hi: "साफ कपड़े" },
      { en: "Same dirty clothes", hi: "वही गंदे कपड़े" },
      { en: "Old torn clothes", hi: "पुराने फटे कपड़े" },
      { en: "Wet clothes", hi: "गीले कपड़े" }
    ],
    correct: {
      en: "Clean clothes",
      hi: "साफ कपड़े"
    },
    explanation: {
      en: "Wearing clean clothes helps maintain hygiene.",
      hi: "साफ कपड़े पहनना स्वच्छता बनाए रखता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which part of the body should be cleaned daily?",
      hi: "शरीर का कौन सा हिस्सा रोज साफ करना चाहिए?"
    },
    options: [
      { en: "All parts", hi: "सभी अंग" },
      { en: "Only face", hi: "केवल चेहरा" },
      { en: "Only hands", hi: "केवल हाथ" },
      { en: "Only legs", hi: "केवल पैर" }
    ],
    correct: {
      en: "All parts",
      hi: "सभी अंग"
    },
    explanation: {
      en: "Every part of our body needs cleaning to stay healthy.",
      hi: "स्वस्थ रहने के लिए शरीर के सभी अंगों की सफाई ज़रूरी है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What helps prevent body odor?",
      hi: "शरीर की दुर्गंध को क्या रोकता है?"
    },
    options: [
      { en: "Bathing daily", hi: "रोज़ नहाना" },
      { en: "Wearing dirty clothes", hi: "गंदे कपड़े पहनना" },
      { en: "Not using soap", hi: "साबुन न लगाना" },
      { en: "Skipping meals", hi: "भोजन छोड़ना" }
    ],
    correct: {
      en: "Bathing daily",
      hi: "रोज़ नहाना"
    },
    explanation: {
      en: "Bathing helps remove sweat and bad smell.",
      hi: "नहाने से पसीना और बदबू दूर होती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is a hygienic activity?",
      hi: "निम्न में से कौन एक स्वच्छता से जुड़ी आदत है?"
    },
    options: [
      { en: "Washing hands before meals", hi: "भोजन से पहले हाथ धोना" },
      { en: "Scratching body", hi: "शरीर खुजलाना" },
      { en: "Not brushing teeth", hi: "दाँत साफ़ न करना" },
      { en: "Sharing dirty towels", hi: "गंदे तौलिये साझा करना" }
    ],
    correct: {
      en: "Washing hands before meals",
      hi: "भोजन से पहले हाथ धोना"
    },
    explanation: {
      en: "It keeps germs away and helps digestion.",
      hi: "यह कीटाणुओं को दूर रखता है और पाचन में मदद करता है।"
    }
  }
];

export default personalHygiene;
