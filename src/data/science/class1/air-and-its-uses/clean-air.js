const questions = [
  {
    id: 1,
    question: {
      en: "What type of air do we need to stay healthy?",
      hi: "स्वस्थ रहने के लिए हमें किस प्रकार की हवा चाहिए?"
    },
    options: [
      { en: "Dirty air", hi: "गंदी हवा" },
      { en: "Clean air", hi: "स्वच्छ हवा" },
      { en: "Hot air", hi: "गर्म हवा" },
      { en: "No air", hi: "कोई हवा नहीं" }
    ],
    correct: {
      en: "Clean air",
      hi: "स्वच्छ हवा"
    },
    explanation: {
      en: "Clean air is essential for our health.",
      hi: "स्वच्छ हवा हमारे स्वास्थ्य के लिए जरूरी है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these makes air dirty?",
      hi: "इनमें से क्या हवा को गंदा करता है?"
    },
    options: [
      { en: "Flowers", hi: "फूल" },
      { en: "Trees", hi: "पेड़" },
      { en: "Smoke", hi: "धुआं" },
      { en: "Clean water", hi: "स्वच्छ पानी" }
    ],
    correct: {
      en: "Smoke",
      hi: "धुआं"
    },
    explanation: {
      en: "Smoke from vehicles and factories makes air dirty.",
      hi: "वाहनों और कारखानों से निकलने वाला धुआं हवा को गंदा करता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these helps in keeping the air clean?",
      hi: "इनमें से क्या हवा को स्वच्छ रखने में मदद करता है?"
    },
    options: [
      { en: "Burning plastic", hi: "प्लास्टिक जलाना" },
      { en: "Planting trees", hi: "पेड़ लगाना" },
      { en: "Throwing garbage", hi: "कचरा फेंकना" },
      { en: "Playing loud music", hi: "तेज़ संगीत बजाना" }
    ],
    correct: {
      en: "Planting trees",
      hi: "पेड़ लगाना"
    },
    explanation: {
      en: "Trees clean the air by taking in carbon dioxide.",
      hi: "पेड़ हवा से कार्बन डाइऑक्साइड लेकर हवा को साफ करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What happens if we breathe dirty air?",
      hi: "अगर हम गंदी हवा में सांस लें तो क्या होता है?"
    },
    options: [
      { en: "We become healthy", hi: "हम स्वस्थ हो जाते हैं" },
      { en: "We may fall sick", hi: "हम बीमार हो सकते हैं" },
      { en: "We become stronger", hi: "हम मजबूत हो जाते हैं" },
      { en: "Nothing happens", hi: "कुछ नहीं होता" }
    ],
    correct: {
      en: "We may fall sick",
      hi: "हम बीमार हो सकते हैं"
    },
    explanation: {
      en: "Dirty air can cause health problems.",
      hi: "गंदी हवा स्वास्थ्य समस्याएं पैदा कर सकती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is a source of dirty air?",
      hi: "इनमें से कौन गंदी हवा का स्रोत है?"
    },
    options: [
      { en: "Running car engines", hi: "चालू कार का इंजन" },
      { en: "Fresh plants", hi: "ताज़े पौधे" },
      { en: "Clean fan", hi: "साफ पंखा" },
      { en: "Open window", hi: "खिड़की खोलना" }
    ],
    correct: {
      en: "Running car engines",
      hi: "चालू कार का इंजन"
    },
    explanation: {
      en: "Car engines release smoke, making air dirty.",
      hi: "कार के इंजन से निकलने वाला धुआं हवा को गंदा करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What do trees give us to breathe?",
      hi: "सांस लेने के लिए पेड़ हमें क्या देते हैं?"
    },
    options: [
      { en: "Smoke", hi: "धुआं" },
      { en: "Dust", hi: "धूल" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Trees release oxygen which we need to breathe.",
      hi: "पेड़ ऑक्सीजन छोड़ते हैं जो हमारे लिए जरूरी है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What should we do to get clean air?",
      hi: "हमें स्वच्छ हवा पाने के लिए क्या करना चाहिए?"
    },
    options: [
      { en: "Cut down trees", hi: "पेड़ काटना" },
      { en: "Plant more trees", hi: "अधिक पेड़ लगाना" },
      { en: "Burn garbage", hi: "कचरा जलाना" },
      { en: "Drive more cars", hi: "ज़्यादा कार चलाना" }
    ],
    correct: {
      en: "Plant more trees",
      hi: "अधिक पेड़ लगाना"
    },
    explanation: {
      en: "Planting trees helps keep air clean.",
      hi: "अधिक पेड़ लगाने से हवा साफ रहती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is harmful to the air?",
      hi: "निम्न में से कौन हवा के लिए हानिकारक है?"
    },
    options: [
      { en: "Smoking", hi: "धूम्रपान" },
      { en: "Tree planting", hi: "पेड़ लगाना" },
      { en: "Cleaning the house", hi: "घर की सफाई" },
      { en: "Watering plants", hi: "पौधों को पानी देना" }
    ],
    correct: {
      en: "Smoking",
      hi: "धूम्रपान"
    },
    explanation: {
      en: "Smoking releases harmful gases into the air.",
      hi: "धूम्रपान से हानिकारक गैसें हवा में जाती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why should we keep the air clean?",
      hi: "हमें हवा को स्वच्छ क्यों रखना चाहिए?"
    },
    options: [
      { en: "To make noise", hi: "शोर मचाने के लिए" },
      { en: "To fall sick", hi: "बीमार पड़ने के लिए" },
      { en: "To stay healthy", hi: "स्वस्थ रहने के लिए" },
      { en: "To make smoke", hi: "धुआं बनाने के लिए" }
    ],
    correct: {
      en: "To stay healthy",
      hi: "स्वस्थ रहने के लिए"
    },
    explanation: {
      en: "Clean air helps us live a healthy life.",
      hi: "स्वच्छ हवा हमें स्वस्थ जीवन जीने में मदद करती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "How can we reduce air pollution?",
      hi: "हम हवा प्रदूषण को कैसे कम कर सकते हैं?"
    },
    options: [
      { en: "Use bicycles", hi: "साइकिल का उपयोग करें" },
      { en: "Burn garbage", hi: "कचरा जलाएं" },
      { en: "Cut trees", hi: "पेड़ काटें" },
      { en: "Use loudspeakers", hi: "लाउडस्पीकर चलाएं" }
    ],
    correct: {
      en: "Use bicycles",
      hi: "साइकिल का उपयोग करें"
    },
    explanation: {
      en: "Bicycles do not produce smoke and keep air clean.",
      hi: "साइकिल से धुआं नहीं निकलता, इससे हवा साफ रहती है।"
    }
  }
];

export default questions;
