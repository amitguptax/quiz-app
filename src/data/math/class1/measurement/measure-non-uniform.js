const measureNonUniform = {
  questions: [
    {
      id: 1,
      question: {
        en: "Which of the following is a non-uniform unit of length?",
        hi: "निम्न में से कौन लंबाई की एक गैर‑एकरूप इकाई है?"
      },
      options: [
        { en: "Footsteps", hi: "कदम" },
        { en: "Centimeter", hi: "सेंटीमीटर" },
        { en: "Meter", hi: "मीटर" },
        { en: "Kilometer", hi: "किलोमीटर" }
      ],
      correct: { en: "Footsteps", hi: "कदम" },
      explanation: {
        en: "Footsteps can vary from person to person, so it's non-uniform.",
        hi: "कदम व्यक्ति के अनुसार बदलते हैं, इसलिए यह गैर‑एकरूप है।"
      }
    },
    {
      id: 2,
      question: {
        en: "If Riya uses pencils to measure a table and Rahul uses books, will they get same result?",
        hi: "अगर रिया मेज को मापने के लिए पेंसिल का उपयोग करती है और राहुल किताबों का, तो क्या उन्हें समान परिणाम मिलेगा?"
      },
      options: [
        { en: "Yes", hi: "हाँ" },
        { en: "No", hi: "नहीं" },
        { en: "Maybe", hi: "शायद" },
        { en: "Only sometimes", hi: "केवल कभी-कभी" }
      ],
      correct: { en: "No", hi: "नहीं" },
      explanation: {
        en: "Different objects have different lengths, so results will vary.",
        hi: "विभिन्न वस्तुओं की लंबाई अलग होती है, इसलिए परिणाम अलग होंगे।"
      }
    },
    {
      id: 3,
      question: {
        en: "Which unit is non-uniform?",
        hi: "कौन सी इकाई गैर‑एकरूप है?"
      },
      options: [
        { en: "Handspan", hi: "हाथ की चौड़ाई" },
        { en: "Centimeter", hi: "सेंटीमीटर" },
        { en: "Meter", hi: "मीटर" },
        { en: "Ruler", hi: "स्केल" }
      ],
      correct: { en: "Handspan", hi: "हाथ की चौड़ाई" },
      explanation: {
        en: "Handspan changes from person to person.",
        hi: "हाथ की चौड़ाई व्यक्ति के अनुसार बदलती है।"
      }
    },
    {
      id: 4,
      question: {
        en: "Measuring with non-uniform units is helpful when:",
        hi: "गैर‑एकरूप इकाइयों से मापना कब उपयोगी होता है?"
      },
      options: [
        { en: "We don't have a scale", hi: "जब हमारे पास स्केल नहीं होता है" },
        { en: "We want perfect length", hi: "जब हमें बिल्कुल सही लंबाई चाहिए" },
        { en: "We measure long distances", hi: "जब हम लंबी दूरी मापते हैं" },
        { en: "None of these", hi: "इनमें से कोई नहीं" }
      ],
      correct: { en: "We don't have a scale", hi: "जब हमारे पास स्केल नहीं होता है" },
      explanation: {
        en: "Non-uniform tools are used when standard tools are not available.",
        hi: "जब मानक उपकरण उपलब्ध नहीं हों, तब गैर‑एकरूप इकाइयाँ काम आती हैं।"
      }
    },
    {
      id: 5,
      question: {
        en: "Which is an example of non-standard unit?",
        hi: "गैर-मानक इकाई का उदाहरण क्या है?"
      },
      options: [
        { en: "Meter stick", hi: "मीटर छड़ी" },
        { en: "Handspan", hi: "हाथ की चौड़ाई" },
        { en: "Measuring tape", hi: "मापने की टेप" },
        { en: "Ruler", hi: "स्केल" }
      ],
      correct: { en: "Handspan", hi: "हाथ की चौड़ाई" },
      explanation: {
        en: "Handspan varies by hand, so it is non-standard.",
        hi: "हाथ की चौड़ाई व्यक्ति के अनुसार बदलती है, इसलिए यह गैर‑मानक है।"
      }
    },
    {
      id: 6,
      question: {
        en: "How many handspans do you need to measure your mat?",
        hi: "आपको अपनी चटाई को मापने के लिए कितने हाथ की चौड़ाई चाहिए?"
      },
      options: [
        { en: "Depends on hand size", hi: "हाथ के आकार पर निर्भर करता है" },
        { en: "Always 10", hi: "हमेशा 10" },
        { en: "Always 5", hi: "हमेशा 5" },
        { en: "Always 3", hi: "हमेशा 3" }
      ],
      correct: { en: "Depends on hand size", hi: "हाथ के आकार पर निर्भर करता है" },
      explanation: {
        en: "Larger hands cover more area, so fewer handspans are needed.",
        hi: "बड़े हाथ अधिक क्षेत्र को ढकते हैं, इसलिए कम हाथ की चौड़ाई लगती है।"
      }
    },
    {
      id: 7,
      question: {
        en: "What is the problem with using footsteps as a unit?",
        hi: "कदमों से मापने में क्या समस्या है?"
      },
      options: [
        { en: "Footsteps are not same for everyone", hi: "कदम सभी के लिए समान नहीं होते" },
        { en: "It is not easy", hi: "यह आसान नहीं है" },
        { en: "It is too fast", hi: "यह बहुत तेज़ है" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "Footsteps are not same for everyone", hi: "कदम सभी के लिए समान नहीं होते" },
      explanation: {
        en: "Each person has a different stride, so results vary.",
        hi: "हर व्यक्ति की चाल अलग होती है, जिससे परिणाम बदलते हैं।"
      }
    },
    {
      id: 8,
      question: {
        en: "Which is better for exact measurement?",
        hi: "सटीक माप के लिए कौन बेहतर है?"
      },
      options: [
        { en: "Handspan", hi: "हाथ की चौड़ाई" },
        { en: "Footsteps", hi: "कदम" },
        { en: "Measuring tape", hi: "मापने की टेप" },
        { en: "Pencils", hi: "पेंसिल" }
      ],
      correct: { en: "Measuring tape", hi: "मापने की टेप" },
      explanation: {
        en: "Measuring tape has standard units like cm and mm.",
        hi: "मापने की टेप में मानक इकाइयाँ होती हैं जैसे सेमी और मिमी।"
      }
    },
    {
      id: 9,
      question: {
        en: "Which of these is not a non-uniform unit?",
        hi: "इनमें से कौन गैर‑एकरूप इकाई नहीं है?"
      },
      options: [
        { en: "Handspan", hi: "हाथ की चौड़ाई" },
        { en: "Ruler", hi: "स्केल" },
        { en: "Pencils", hi: "पेंसिल" },
        { en: "Footsteps", hi: "कदम" }
      ],
      correct: { en: "Ruler", hi: "स्केल" },
      explanation: {
        en: "Rulers are standard measuring tools.",
        hi: "स्केल एक मानक मापने का उपकरण है।"
      }
    },
    {
      id: 10,
      question: {
        en: "Which is true about non-uniform measurement?",
        hi: "गैर‑एकरूप माप के बारे में क्या सही है?"
      },
      options: [
        { en: "Gives same result always", hi: "हमेशा समान परिणाम देता है" },
        { en: "Can vary from person to person", hi: "व्यक्ति से व्यक्ति में बदल सकता है" },
        { en: "Used only in science", hi: "केवल विज्ञान में उपयोग होता है" },
        { en: "Not useful at all", hi: "बिल्कुल भी उपयोगी नहीं है" }
      ],
      correct: { en: "Can vary from person to person", hi: "व्यक्ति से व्यक्ति में बदल सकता है" },
      explanation: {
        en: "That's why they are called non-uniform units.",
        hi: "इसी कारण उन्हें गैर‑एकरूप इकाइयाँ कहा जाता है।"
      }
    }
  ]
};

export default measureNonUniform;
