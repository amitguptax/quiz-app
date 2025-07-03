const farmingSteps = [
  {
    id: 1,
    question: {
      en: "What is the first step in the process of farming?",
      hi: "कृषि प्रक्रिया का पहला चरण क्या है?"
    },
    options: [
      { en: "Sowing seeds", hi: "बीज बोना" },
      { en: "Harvesting", hi: "कटाई" },
      { en: "Ploughing the field", hi: "खेत जोतना" },
      { en: "Adding manure", hi: "खाद डालना" }
    ],
    correct: {
      en: "Ploughing the field",
      hi: "खेत जोतना"
    },
    explanation: {
      en: "The field is first ploughed to loosen the soil before sowing.",
      hi: "बीज बोने से पहले खेत को जोता जाता है ताकि मिट्टी ढीली हो जाए।"
    }
  },
  {
    id: 2,
    question: {
      en: "Why is ploughing important?",
      hi: "खेत जोतना क्यों आवश्यक है?"
    },
    options: [
      { en: "To kill weeds", hi: "घास हटाने के लिए" },
      { en: "To harden the soil", hi: "मिट्टी को कठोर करने के लिए" },
      { en: "To loosen and aerate the soil", hi: "मिट्टी को ढीला और हवादार बनाने के लिए" },
      { en: "To dry the soil", hi: "मिट्टी सुखाने के लिए" }
    ],
    correct: {
      en: "To loosen and aerate the soil",
      hi: "मिट्टी को ढीला और हवादार बनाने के लिए"
    },
    explanation: {
      en: "Ploughing helps prepare the soil by loosening it and allowing air in.",
      hi: "खेत जोतने से मिट्टी ढीली होती है और उसमें हवा प्रवेश कर पाती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is done after ploughing the field?",
      hi: "खेत जोतने के बाद क्या किया जाता है?"
    },
    options: [
      { en: "Harvesting", hi: "फसल काटना" },
      { en: "Sowing seeds", hi: "बीज बोना" },
      { en: "Irrigation", hi: "सिंचाई" },
      { en: "Threshing", hi: "गहाई" }
    ],
    correct: {
      en: "Sowing seeds",
      hi: "बीज बोना"
    },
    explanation: {
      en: "After preparing the soil, seeds are sown into the field.",
      hi: "मिट्टी तैयार करने के बाद उसमें बीज बोए जाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why are fertilizers and manure added to soil?",
      hi: "मिट्टी में खाद और उर्वरक क्यों डाले जाते हैं?"
    },
    options: [
      { en: "To improve taste", hi: "स्वाद बढ़ाने के लिए" },
      { en: "To kill insects", hi: "कीड़े मारने के लिए" },
      { en: "To increase soil fertility", hi: "मिट्टी की उपजाऊ शक्ति बढ़ाने के लिए" },
      { en: "To prevent erosion", hi: "कटाव रोकने के लिए" }
    ],
    correct: {
      en: "To increase soil fertility",
      hi: "मिट्टी की उपजाऊ शक्ति बढ़ाने के लिए"
    },
    explanation: {
      en: "Manure and fertilizers add nutrients to the soil for better crop growth.",
      hi: "खाद और उर्वरक मिट्टी में पोषक तत्व बढ़ाते हैं जिससे फसल अच्छी होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is irrigation?",
      hi: "सिंचाई क्या होती है?"
    },
    options: [
      { en: "Cutting crops", hi: "फसल काटना" },
      { en: "Supplying water to crops", hi: "फसलों को पानी देना" },
      { en: "Adding fertilizers", hi: "खाद डालना" },
      { en: "Ploughing the field", hi: "खेत जोतना" }
    ],
    correct: {
      en: "Supplying water to crops",
      hi: "फसलों को पानी देना"
    },
    explanation: {
      en: "Irrigation is the process of watering crops to help them grow.",
      hi: "सिंचाई का मतलब फसलों को पानी देना है ताकि वे बढ़ सकें।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which method is used to protect crops from insects?",
      hi: "फसलों को कीड़ों से बचाने के लिए कौन सा तरीका अपनाया जाता है?"
    },
    options: [
      { en: "Harvesting", hi: "कटाई" },
      { en: "Spraying pesticides", hi: "कीटनाशक का छिड़काव" },
      { en: "Threshing", hi: "गहाई" },
      { en: "Sowing", hi: "बुवाई" }
    ],
    correct: {
      en: "Spraying pesticides",
      hi: "कीटनाशक का छिड़काव"
    },
    explanation: {
      en: "Pesticides are sprayed to protect crops from harmful insects.",
      hi: "कीटनाशक छिड़कने से फसल कीड़ों से सुरक्षित रहती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the last step in the farming process?",
      hi: "कृषि प्रक्रिया का अंतिम चरण क्या है?"
    },
    options: [
      { en: "Sowing", hi: "बुवाई" },
      { en: "Harvesting", hi: "कटाई" },
      { en: "Irrigation", hi: "सिंचाई" },
      { en: "Ploughing", hi: "जुताई" }
    ],
    correct: {
      en: "Harvesting",
      hi: "कटाई"
    },
    explanation: {
      en: "Harvesting is the process of cutting and collecting mature crops.",
      hi: "फसल तैयार होने पर उसे काटने की प्रक्रिया को कटाई कहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is done after harvesting to separate grain from plant?",
      hi: "फसल काटने के बाद दानों को पौधों से अलग करने की प्रक्रिया क्या कहलाती है?"
    },
    options: [
      { en: "Winnowing", hi: "फटकाई" },
      { en: "Threshing", hi: "गहाई" },
      { en: "Sowing", hi: "बुवाई" },
      { en: "Irrigation", hi: "सिंचाई" }
    ],
    correct: {
      en: "Threshing",
      hi: "गहाई"
    },
    explanation: {
      en: "Threshing separates the grain from the harvested plants.",
      hi: "गहाई में पौधों से अनाज को अलग किया जाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is winnowing used for?",
      hi: "फटकाई किसलिए की जाती है?"
    },
    options: [
      { en: "To sow seeds", hi: "बीज बोने के लिए" },
      { en: "To separate grains from husk", hi: "अनाज को भूसे से अलग करने के लिए" },
      { en: "To water plants", hi: "पौधों को पानी देने के लिए" },
      { en: "To mix fertilizers", hi: "खाद मिलाने के लिए" }
    ],
    correct: {
      en: "To separate grains from husk",
      hi: "अनाज को भूसे से अलग करने के लिए"
    },
    explanation: {
      en: "Winnowing is used to separate lighter husk from heavier grain.",
      hi: "फटकाई में भूसे को अनाज से अलग किया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which tool is commonly used for ploughing in traditional farming?",
      hi: "परंपरागत खेती में जुताई के लिए कौन सा औजार आमतौर पर इस्तेमाल होता है?"
    },
    options: [
      { en: "Tractor", hi: "ट्रैक्टर" },
      { en: "Bullock-drawn plough", hi: "बैल से चलने वाला हल" },
      { en: "Seed drill", hi: "बीज बोने की मशीन" },
      { en: "Sprayer", hi: "छिड़काव यंत्र" }
    ],
    correct: {
      en: "Bullock-drawn plough",
      hi: "बैल से चलने वाला हल"
    },
    explanation: {
      en: "In traditional farming, farmers use a plough pulled by oxen.",
      hi: "परंपरागत खेती में किसान बैल से चलने वाला हल इस्तेमाल करते हैं।"
    }
  }
];

export default farmingSteps;
