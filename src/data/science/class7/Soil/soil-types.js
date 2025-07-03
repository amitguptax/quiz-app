const soilTypes = [
  {
    id: 1,
    question: {
      en: "Which type of soil has the smallest particles?",
      hi: "कौन सी मिट्टी के कण सबसे छोटे होते हैं?"
    },
    options: [
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Gravel", hi: "कंकरी मिट्टी" }
    ],
    correct: {
      en: "Clayey soil",
      hi: "मृत्तिका मिट्टी"
    },
    explanation: {
      en: "Clayey soil has the smallest and tightly packed particles.",
      hi: "मृत्तिका मिट्टी में सबसे छोटे और सघन कण होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which type of soil is best for growing crops?",
      hi: "कृषि के लिए कौन सी मिट्टी सबसे उपयुक्त है?"
    },
    options: [
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Gravel", hi: "कंकरी मिट्टी" }
    ],
    correct: {
      en: "Loamy soil",
      hi: "दोमट मिट्टी"
    },
    explanation: {
      en: "Loamy soil has a balanced mixture of sand, silt, and clay, making it ideal for crops.",
      hi: "दोमट मिट्टी में बालू, सिल्ट और मृत्तिका का संतुलन होता है, जो कृषि के लिए उत्तम है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which soil has the highest water holding capacity?",
      hi: "किस मिट्टी में जल धारण करने की क्षमता सबसे अधिक होती है?"
    },
    options: [
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Gravel", hi: "कंकरी मिट्टी" }
    ],
    correct: {
      en: "Clayey soil",
      hi: "मृत्तिका मिट्टी"
    },
    explanation: {
      en: "Clayey soil holds water well due to its small, tightly packed particles.",
      hi: "मृत्तिका मिट्टी छोटे और घने कणों के कारण जल को अच्छे से धारण करती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which soil type drains water quickly?",
      hi: "कौन सी मिट्टी पानी को जल्दी निकाल देती है?"
    },
    options: [
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Black soil", hi: "काली मिट्टी" }
    ],
    correct: {
      en: "Sandy soil",
      hi: "बलुई मिट्टी"
    },
    explanation: {
      en: "Sandy soil has large particles and drains water quickly.",
      hi: "बलुई मिट्टी के कण बड़े होते हैं और यह पानी को जल्दी निकाल देती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which type of soil is sticky when wet?",
      hi: "गीली होने पर कौन सी मिट्टी चिपचिपी हो जाती है?"
    },
    options: [
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Red soil", hi: "लाल मिट्टी" }
    ],
    correct: {
      en: "Clayey soil",
      hi: "मृत्तिका मिट्टी"
    },
    explanation: {
      en: "Clayey soil becomes sticky when wet due to its fine particles.",
      hi: "मृत्तिका मिट्टी के महीन कणों के कारण गीली होने पर यह चिपचिपी हो जाती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which type of soil is mostly found in deserts?",
      hi: "रेगिस्तानों में मुख्य रूप से कौन सी मिट्टी पाई जाती है?"
    },
    options: [
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Alluvial soil", hi: "प्लावन मिट्टी" }
    ],
    correct: {
      en: "Sandy soil",
      hi: "बलुई मिट्टी"
    },
    explanation: {
      en: "Deserts have sandy soil which is dry and loose.",
      hi: "रेगिस्तानों में सूखी और ढीली बलुई मिट्टी पाई जाती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Loamy soil is a mixture of",
      hi: "दोमट मिट्टी किन तत्वों का मिश्रण है?"
    },
    options: [
      { en: "Sand and clay", hi: "बालू और मृत्तिका" },
      { en: "Clay and gravel", hi: "मृत्तिका और कंकड़" },
      { en: "Only clay", hi: "केवल मृत्तिका" },
      { en: "Sand and gravel", hi: "बालू और कंकड़" }
    ],
    correct: {
      en: "Sand and clay",
      hi: "बालू और मृत्तिका"
    },
    explanation: {
      en: "Loamy soil is a balanced mixture of sand, clay, and some silt.",
      hi: "दोमट मिट्टी बालू, मृत्तिका और थोड़ी सिल्ट का संतुलित मिश्रण है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which type of soil is best suited for making pots?",
      hi: "घड़े बनाने के लिए कौन सी मिट्टी सबसे उपयुक्त होती है?"
    },
    options: [
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Black soil", hi: "काली मिट्टी" }
    ],
    correct: {
      en: "Clayey soil",
      hi: "मृत्तिका मिट्टी"
    },
    explanation: {
      en: "Clayey soil is used for pottery due to its stickiness and shape-retaining quality.",
      hi: "मृत्तिका मिट्टी चिपचिपी होती है और आकार बनाए रखती है, इसलिए इसका उपयोग मिट्टी के बर्तन बनाने में किया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which soil type is rich in humus and very fertile?",
      hi: "कौन सी मिट्टी ह्यूमस में समृद्ध और बहुत उपजाऊ होती है?"
    },
    options: [
      { en: "Sandy soil", hi: "बलुई मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Red soil", hi: "लाल मिट्टी" }
    ],
    correct: {
      en: "Loamy soil",
      hi: "दोमट मिट्टी"
    },
    explanation: {
      en: "Loamy soil is rich in humus and supports plant growth well.",
      hi: "दोमट मिट्टी ह्यूमस में समृद्ध होती है और पौधों की वृद्धि के लिए उपयुक्त होती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following soils is red in color due to iron content?",
      hi: "निम्न में से कौन सी मिट्टी लोहे की मात्रा के कारण लाल रंग की होती है?"
    },
    options: [
      { en: "Black soil", hi: "काली मिट्टी" },
      { en: "Loamy soil", hi: "दोमट मिट्टी" },
      { en: "Red soil", hi: "लाल मिट्टी" },
      { en: "Clayey soil", hi: "मृत्तिका मिट्टी" }
    ],
    correct: {
      en: "Red soil",
      hi: "लाल मिट्टी"
    },
    explanation: {
      en: "Red soil contains iron oxide, which gives it a red color.",
      hi: "लाल मिट्टी में लौह ऑक्साइड होता है, जिससे यह लाल रंग की होती है।"
    }
  }
];

export default soilTypes;
