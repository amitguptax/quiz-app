const saveWater = [
  {
    id: 1,
    question: {
      en: "Why should we save water?",
      hi: "हमें पानी क्यों बचाना चाहिए?"
    },
    options: [
      { en: "It is precious", hi: "यह अमूल्य है" },
      { en: "It is dirty", hi: "यह गंदा है" },
      { en: "It is blue", hi: "यह नीला है" },
      { en: "It is heavy", hi: "यह भारी है" }
    ],
    correct: {
      en: "It is precious",
      hi: "यह अमूल्य है"
    },
    explanation: {
      en: "Water is very useful and should not be wasted.",
      hi: "पानी बहुत उपयोगी है और इसे बर्बाद नहीं करना चाहिए।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should you do while brushing your teeth?",
      hi: "दाँत ब्रश करते समय आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Turn off the tap", hi: "नल बंद कर दें" },
      { en: "Let the water run", hi: "पानी को बहने दें" },
      { en: "Sing loudly", hi: "तेज़ गाना गाएँ" },
      { en: "Use extra paste", hi: "अधिक पेस्ट लगाएँ" }
    ],
    correct: {
      en: "Turn off the tap",
      hi: "नल बंद कर दें"
    },
    explanation: {
      en: "Turning off the tap saves water.",
      hi: "नल बंद करने से पानी की बचत होती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following helps save water?",
      hi: "निम्न में से क्या पानी बचाने में मदद करता है?"
    },
    options: [
      { en: "Fix leaking taps", hi: "टपकते नलों को ठीक करना" },
      { en: "Play with water", hi: "पानी से खेलना" },
      { en: "Leave taps open", hi: "नल खुले छोड़ना" },
      { en: "Use water for fun", hi: "मज़े के लिए पानी का उपयोग करना" }
    ],
    correct: {
      en: "Fix leaking taps",
      hi: "टपकते नलों को ठीक करना"
    },
    explanation: {
      en: "Leaking taps waste water, so fixing them helps conserve water.",
      hi: "टपकते नलों को ठीक करने से पानी की बचत होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "We should use water:",
      hi: "हमें पानी का उपयोग कैसे करना चाहिए?"
    },
    options: [
      { en: "Wisely", hi: "समझदारी से" },
      { en: "Wastely", hi: "बर्बादी से" },
      { en: "Carelessly", hi: "लापरवाही से" },
      { en: "Endlessly", hi: "अनंत रूप से" }
    ],
    correct: {
      en: "Wisely",
      hi: "समझदारी से"
    },
    explanation: {
      en: "Water is a limited resource, so we should use it wisely.",
      hi: "पानी सीमित संसाधन है, इसलिए इसे समझदारी से उपयोग करना चाहिए।"
    }
  },
  {
    id: 5,
    question: {
      en: "Water should not be:",
      hi: "पानी को _______ नहीं करना चाहिए।"
    },
    options: [
      { en: "Wasted", hi: "बर्बाद" },
      { en: "Used", hi: "उपयोग" },
      { en: "Cleaned", hi: "साफ" },
      { en: "Stored", hi: "संग्रह" }
    ],
    correct: {
      en: "Wasted",
      hi: "बर्बाद"
    },
    explanation: {
      en: "Wasting water reduces its availability for future use.",
      hi: "पानी की बर्बादी से भविष्य में उसकी कमी हो सकती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Rainwater can be saved by:",
      hi: "वर्षा जल को कैसे बचाया जा सकता है?"
    },
    options: [
      { en: "Rainwater harvesting", hi: "वर्षा जल संचयन" },
      { en: "Throwing it away", hi: "इसे फेंककर" },
      { en: "Letting it run", hi: "बहने देना" },
      { en: "Making puddles", hi: "कीचड़ बनाना" }
    ],
    correct: {
      en: "Rainwater harvesting",
      hi: "वर्षा जल संचयन"
    },
    explanation: {
      en: "Rainwater harvesting is a good way to store and use rainwater.",
      hi: "वर्षा जल संचयन वर्षा के पानी को इकट्ठा करने और उपयोग करने का अच्छा तरीका है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Should we play with water balloons daily?",
      hi: "क्या हमें रोज पानी से भरे गुब्बारों से खेलना चाहिए?"
    },
    options: [
      { en: "No, it wastes water", hi: "नहीं, इससे पानी बर्बाद होता है" },
      { en: "Yes, it's fun", hi: "हाँ, यह मजेदार है" },
      { en: "Only in rain", hi: "केवल बारिश में" },
      { en: "Yes, always", hi: "हाँ, हमेशा" }
    ],
    correct: {
      en: "No, it wastes water",
      hi: "नहीं, इससे पानी बर्बाद होता है"
    },
    explanation: {
      en: "Playing with water balloons uses a lot of water.",
      hi: "पानी वाले गुब्बारों से खेलने में बहुत पानी खर्च होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which is a good water-saving habit?",
      hi: "पानी बचाने की अच्छी आदत कौन सी है?"
    },
    options: [
      { en: "Using a bucket to bathe", hi: "बाल्टी से नहाना" },
      { en: "Using shower for long", hi: "लंबे समय तक शॉवर चलाना" },
      { en: "Playing with hose pipe", hi: "पाइप से खेलना" },
      { en: "Leaving tap open", hi: "नल खुला छोड़ना" }
    ],
    correct: {
      en: "Using a bucket to bathe",
      hi: "बाल्टी से नहाना"
    },
    explanation: {
      en: "Bucket bathing saves more water than using a shower.",
      hi: "बाल्टी से नहाने में शॉवर की तुलना में कम पानी लगता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "We must teach others to:",
      hi: "हमें दूसरों को क्या सिखाना चाहिए?"
    },
    options: [
      { en: "Save water", hi: "पानी बचाना" },
      { en: "Waste water", hi: "पानी बर्बाद करना" },
      { en: "Ignore water", hi: "पानी को नजरअंदाज करना" },
      { en: "Use more water", hi: "अधिक पानी उपयोग करना" }
    ],
    correct: {
      en: "Save water",
      hi: "पानी बचाना"
    },
    explanation: {
      en: "Spreading awareness helps more people save water.",
      hi: "जागरूकता फैलाने से ज्यादा लोग पानी बचाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Saving water helps in:",
      hi: "पानी बचाने से क्या लाभ होता है?"
    },
    options: [
      { en: "Saving life", hi: "जीवन बचाना" },
      { en: "Wasting resources", hi: "संसाधन बर्बाद करना" },
      { en: "Playing more", hi: "ज्यादा खेलना" },
      { en: "Sleeping more", hi: "ज्यादा सोना" }
    ],
    correct: {
      en: "Saving life",
      hi: "जीवन बचाना"
    },
    explanation: {
      en: "Water is essential for all living beings.",
      hi: "पानी सभी जीवों के लिए आवश्यक है।"
    }
  }
];

export default saveWater;

