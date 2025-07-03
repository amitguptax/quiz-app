const unitSignificance = {
  questions: [
    {
      question: {
        en: "Why are standard units important in measurement?",
        hi: "मापन में मानक इकाइयाँ क्यों महत्वपूर्ण हैं?"
      },
      options: [
        { en: "For uniformity", hi: "एकरूपता के लिए" },
        { en: "To look good", hi: "अच्छा दिखने के लिए" },
        { en: "To confuse others", hi: "दूसरों को भ्रमित करने के लिए" },
        { en: "For decoration", hi: "सजावट के लिए" }
      ],
      correct: { en: "For uniformity", hi: "एकरूपता के लिए" },
      explanation: {
        en: "Standard units ensure uniform and consistent measurements.",
        hi: "मानक इकाइयाँ माप में एकरूपता और स्थिरता बनाए रखती हैं।"
      }
    },
    {
      question: {
        en: "Which of the following is a standard unit for length?",
        hi: "निम्न में से कौन लंबाई की मानक इकाई है?"
      },
      options: [
        { en: "Meter", hi: "मीटर" },
        { en: "Bucket", hi: "बाल्टी" },
        { en: "Rope", hi: "रस्सी" },
        { en: "Spoon", hi: "चम्मच" }
      ],
      correct: { en: "Meter", hi: "मीटर" },
      explanation: {
        en: "Meter is the standard SI unit for length.",
        hi: "मीटर लंबाई की मानक इकाई है।"
      }
    },
    {
      question: {
        en: "Which unit is used to measure weight?",
        hi: "भार मापने के लिए कौन सी इकाई प्रयोग होती है?"
      },
      options: [
        { en: "Kilogram", hi: "किलोग्राम" },
        { en: "Liter", hi: "लीटर" },
        { en: "Meter", hi: "मीटर" },
        { en: "Inch", hi: "इंच" }
      ],
      correct: { en: "Kilogram", hi: "किलोग्राम" },
      explanation: {
        en: "Kilogram is the standard unit of weight.",
        hi: "किलोग्राम भार की मानक इकाई है।"
      }
    },
    {
      question: {
        en: "Which standard unit is used for measuring liquid?",
        hi: "तरल मापने के लिए कौन सी मानक इकाई उपयोग होती है?"
      },
      options: [
        { en: "Liter", hi: "लीटर" },
        { en: "Gram", hi: "ग्राम" },
        { en: "Meter", hi: "मीटर" },
        { en: "Centimeter", hi: "सेंटीमीटर" }
      ],
      correct: { en: "Liter", hi: "लीटर" },
      explanation: {
        en: "Liter is used for measuring liquids like milk or water.",
        hi: "तरल जैसे दूध या पानी को मापने के लिए लीटर प्रयोग होता है।"
      }
    },
    {
      question: {
        en: "How do standard units help in trade?",
        hi: "व्यापार में मानक इकाइयाँ कैसे मदद करती हैं?"
      },
      options: [
        { en: "Avoid cheating", hi: "धोखाधड़ी से बचने के लिए" },
        { en: "Waste time", hi: "समय बर्बाद करने के लिए" },
        { en: "Create confusion", hi: "भ्रम पैदा करने के लिए" },
        { en: "None of these", hi: "इनमें से कोई नहीं" }
      ],
      correct: { en: "Avoid cheating", hi: "धोखाधड़ी से बचने के लिए" },
      explanation: {
        en: "Using common units helps everyone understand quantity fairly.",
        hi: "सभी के लिए समान इकाइयाँ धोखाधड़ी से बचाती हैं।"
      }
    },
    {
      question: {
        en: "Which of the following is not a standard unit?",
        hi: "निम्न में से कौन मानक इकाई नहीं है?"
      },
      options: [
        { en: "Handspan", hi: "हैंडस्पैन" },
        { en: "Meter", hi: "मीटर" },
        { en: "Liter", hi: "लीटर" },
        { en: "Kilogram", hi: "किलोग्राम" }
      ],
      correct: { en: "Handspan", hi: "हैंडस्पैन" },
      explanation: {
        en: "Handspan is non-standard as it varies person to person.",
        hi: "हैंडस्पैन एक व्यक्ति से दूसरे में अलग होता है, यह मानक नहीं है।"
      }
    },
    {
      question: {
        en: "What is the unit of temperature in standard measurement?",
        hi: "मानक मापन में तापमान की इकाई क्या है?"
      },
      options: [
        { en: "Celsius", hi: "सेल्सियस" },
        { en: "Liter", hi: "लीटर" },
        { en: "Meter", hi: "मीटर" },
        { en: "Gram", hi: "ग्राम" }
      ],
      correct: { en: "Celsius", hi: "सेल्सियस" },
      explanation: {
        en: "Celsius is used to measure temperature.",
        hi: "तापमान को मापने के लिए सेल्सियस का प्रयोग होता है।"
      }
    },
    {
      question: {
        en: "Why is using your foot length to measure distance not accurate?",
        hi: "पैर की लंबाई से दूरी मापना सटीक क्यों नहीं होता?"
      },
      options: [
        { en: "Foot sizes differ", hi: "पैरों की लंबाई अलग होती है" },
        { en: "It’s expensive", hi: "यह महंगा है" },
        { en: "It’s illegal", hi: "यह अवैध है" },
        { en: "It takes longer", hi: "इसमें अधिक समय लगता है" }
      ],
      correct: { en: "Foot sizes differ", hi: "पैरों की लंबाई अलग होती है" },
      explanation: {
        en: "Everyone has different foot sizes, so it is not reliable.",
        hi: "हर व्यक्ति की पाँव की लंबाई अलग होती है, इसलिए यह विश्वसनीय नहीं है।"
      }
    },
    {
      question: {
        en: "Which of these is best for measuring a swimming pool’s length?",
        hi: "स्विमिंग पूल की लंबाई मापने के लिए सबसे उपयुक्त क्या है?"
      },
      options: [
        { en: "Meter", hi: "मीटर" },
        { en: "Gram", hi: "ग्राम" },
        { en: "Liter", hi: "लीटर" },
        { en: "Kilogram", hi: "किलोग्राम" }
      ],
      correct: { en: "Meter", hi: "मीटर" },
      explanation: {
        en: "Meter is the unit for measuring large lengths.",
        hi: "बड़ी लंबाई मापने के लिए मीटर प्रयोग किया जाता है।"
      }
    },
    {
      question: {
        en: "Standard units are also called:",
        hi: "मानक इकाइयों को और क्या कहा जाता है?"
      },
      options: [
        { en: "SI units", hi: "SI इकाइयाँ" },
        { en: "Personal units", hi: "व्यक्तिगत इकाइयाँ" },
        { en: "Rough units", hi: "अनियमित इकाइयाँ" },
        { en: "Private units", hi: "निजी इकाइयाँ" }
      ],
      correct: { en: "SI units", hi: "SI इकाइयाँ" },
      explanation: {
        en: "SI units (International System of Units) are used worldwide.",
        hi: "मानक इकाइयाँ को SI इकाइयाँ कहा जाता है, जो अंतरराष्ट्रीय स्तर पर प्रयोग होती हैं।"
      }
    }
  ]
};

export default unitSignificance;
