const waterConservation = [
  {
    id: 1,
    question: {
      en: "Why should we conserve water?",
      hi: "हमें पानी की बचत क्यों करनी चाहिए?"
    },
    options: [
      { en: "To waste more", hi: "ज्यादा बर्बाद करने के लिए" },
      { en: "Because it is unlimited", hi: "क्योंकि यह असीमित है" },
      { en: "Because it is precious and limited", hi: "क्योंकि यह कीमती और सीमित है" },
      { en: "It looks good", hi: "यह अच्छा दिखता है" }
    ],
    correct: {
      en: "Because it is precious and limited",
      hi: "क्योंकि यह कीमती और सीमित है"
    },
    explanation: {
      en: "Water is limited and essential for life, so it must be conserved.",
      hi: "पानी सीमित है और जीवन के लिए आवश्यक है, इसलिए इसकी बचत जरूरी है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a good habit to save water?",
      hi: "निम्न में से कौन सी पानी बचाने की अच्छी आदत है?"
    },
    options: [
      { en: "Keeping tap open while brushing", hi: "ब्रश करते समय नल खुला रखना" },
      { en: "Fixing leaking taps", hi: "रिसते नल ठीक कराना" },
      { en: "Washing car with hose", hi: "पाइप से कार धोना" },
      { en: "Overflowing tanks", hi: "टंकी का ओवरफ्लो" }
    ],
    correct: {
      en: "Fixing leaking taps",
      hi: "रिसते नल ठीक कराना"
    },
    explanation: {
      en: "Fixing leaks prevents water wastage.",
      hi: "रिसाव ठीक करने से पानी की बर्बादी रोकी जा सकती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which is a natural source of water?",
      hi: "प्राकृतिक जल स्रोत कौन सा है?"
    },
    options: [
      { en: "Tap", hi: "नल" },
      { en: "River", hi: "नदी" },
      { en: "Pipeline", hi: "पाइपलाइन" },
      { en: "Tank", hi: "टंकी" }
    ],
    correct: {
      en: "River",
      hi: "नदी"
    },
    explanation: {
      en: "Rivers are natural sources of water.",
      hi: "नदियाँ प्राकृतिक जल स्रोत होती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which human activity wastes the most water at home?",
      hi: "घर पर कौन सी गतिविधि सबसे ज्यादा पानी बर्बाद करती है?"
    },
    options: [
      { en: "Bathing with a bucket", hi: "बाल्टी से नहाना" },
      { en: "Using washing machine wisely", hi: "वॉशिंग मशीन का समझदारी से उपयोग" },
      { en: "Washing dishes with running tap", hi: "बहते नल से बर्तन धोना" },
      { en: "Drinking water", hi: "पानी पीना" }
    ],
    correct: {
      en: "Washing dishes with running tap",
      hi: "बहते नल से बर्तन धोना"
    },
    explanation: {
      en: "Using running tap water wastes more water.",
      hi: "बहते नल से बर्तन धोने से अधिक पानी बर्बाद होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "How can school children help conserve water?",
      hi: "विद्यालय के बच्चे पानी की बचत में कैसे मदद कर सकते हैं?"
    },
    options: [
      { en: "Play with water", hi: "पानी से खेलना" },
      { en: "Report leaking taps", hi: "रिसते नलों की जानकारी देना" },
      { en: "Break pipes", hi: "पाइप तोड़ना" },
      { en: "Use more water for fun", hi: "मनोरंजन के लिए ज्यादा पानी इस्तेमाल करना" }
    ],
    correct: {
      en: "Report leaking taps",
      hi: "रिसते नलों की जानकारी देना"
    },
    explanation: {
      en: "Children can save water by reporting leaks to elders or teachers.",
      hi: "बच्चे रिसते नलों की जानकारी देकर पानी की बचत में मदद कर सकते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should we do when we see an overflowing tank?",
      hi: "जब हम टंकी ओवरफ्लो होते देखें तो क्या करना चाहिए?"
    },
    options: [
      { en: "Ignore it", hi: "अनदेखा करना" },
      { en: "Close the tap", hi: "नल बंद करना" },
      { en: "Tell no one", hi: "किसी को न बताना" },
      { en: "Use the water for fun", hi: "पानी से खेलना" }
    ],
    correct: {
      en: "Close the tap",
      hi: "नल बंद करना"
    },
    explanation: {
      en: "Closing the tap stops wastage of water.",
      hi: "नल बंद करने से पानी की बर्बादी रोकी जा सकती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which method helps conserve rainwater?",
      hi: "वर्षा जल को संरक्षित करने में कौन सी विधि मदद करती है?"
    },
    options: [
      { en: "Boiling water", hi: "पानी उबालना" },
      { en: "Rainwater harvesting", hi: "वर्षा जल संचयन" },
      { en: "Using more water", hi: "अधिक पानी उपयोग करना" },
      { en: "Throwing water", hi: "पानी फेंकना" }
    ],
    correct: {
      en: "Rainwater harvesting",
      hi: "वर्षा जल संचयन"
    },
    explanation: {
      en: "Rainwater harvesting collects and stores rainwater.",
      hi: "वर्षा जल संचयन से वर्षा का पानी संग्रहित किया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is a wise way to use water in the garden?",
      hi: "बगीचे में पानी का समझदारी से उपयोग कौन सा है?"
    },
    options: [
      { en: "Watering in afternoon", hi: "दोपहर में पानी देना" },
      { en: "Watering with pipe", hi: "पाइप से पानी देना" },
      { en: "Watering early morning", hi: "सुबह-सुबह पानी देना" },
      { en: "Wasting water", hi: "पानी बर्बाद करना" }
    ],
    correct: {
      en: "Watering early morning",
      hi: "सुबह-सुबह पानी देना"
    },
    explanation: {
      en: "Early morning watering reduces evaporation and saves water.",
      hi: "सुबह पानी देने से वाष्पीकरण कम होता है और पानी की बचत होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the best way to store water safely?",
      hi: "पानी को सुरक्षित रूप से संग्रहित करने का सबसे अच्छा तरीका क्या है?"
    },
    options: [
      { en: "In open buckets", hi: "खुले बाल्टियों में" },
      { en: "In clean, covered containers", hi: "साफ ढके हुए कंटेनरों में" },
      { en: "On the floor", hi: "फर्श पर" },
      { en: "In plastic bags", hi: "प्लास्टिक की थैलियों में" }
    ],
    correct: {
      en: "In clean, covered containers",
      hi: "साफ ढके हुए कंटेनरों में"
    },
    explanation: {
      en: "Covered containers keep water clean and safe for use.",
      hi: "ढके हुए कंटेनर पानी को साफ और सुरक्षित बनाए रखते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which festival promotes water conservation?",
      hi: "कौन सा त्योहार पानी की बचत को बढ़ावा देता है?"
    },
    options: [
      { en: "Diwali", hi: "दीवाली" },
      { en: "Holi with dry colors", hi: "सूखे रंगों के साथ होली" },
      { en: "Christmas", hi: "क्रिसमस" },
      { en: "Eid", hi: "ईद" }
    ],
    correct: {
      en: "Holi with dry colors",
      hi: "सूखे रंगों के साथ होली"
    },
    explanation: {
      en: "Celebrating Holi with dry colors saves water.",
      hi: "सूखे रंगों से होली मनाने से पानी की बचत होती है।"
    }
  }
];

export default waterConservation;
