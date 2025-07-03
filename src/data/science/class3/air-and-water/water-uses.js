const waterUses = [
  {
    id: 1,
    question: {
      en: "Why do we need water?",
      hi: "हमें पानी की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "To drink", hi: "पीने के लिए" },
      { en: "To play", hi: "खेलने के लिए" },
      { en: "To sleep", hi: "सोने के लिए" },
      { en: "To read", hi: "पढ़ने के लिए" }
    ],
    correct: {
      en: "To drink",
      hi: "पीने के लिए"
    },
    explanation: {
      en: "Water is essential for drinking and staying healthy.",
      hi: "स्वस्थ रहने के लिए पानी पीना आवश्यक है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following uses water?",
      hi: "निम्न में से किसमें पानी का उपयोग होता है?"
    },
    options: [
      { en: "Bathing", hi: "नहाने में" },
      { en: "Watching TV", hi: "टीवी देखने में" },
      { en: "Sleeping", hi: "सोने में" },
      { en: "Walking", hi: "चलने में" }
    ],
    correct: {
      en: "Bathing",
      hi: "नहाने में"
    },
    explanation: {
      en: "Water is needed to keep our body clean.",
      hi: "शरीर को साफ रखने के लिए पानी जरूरी है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Water is needed to:",
      hi: "पानी की आवश्यकता होती है:"
    },
    options: [
      { en: "Wash clothes", hi: "कपड़े धोने में" },
      { en: "Draw pictures", hi: "चित्र बनाने में" },
      { en: "Read books", hi: "पुस्तकें पढ़ने में" },
      { en: "Write letters", hi: "पत्र लिखने में" }
    ],
    correct: {
      en: "Wash clothes",
      hi: "कपड़े धोने में"
    },
    explanation: {
      en: "We use water for washing clothes daily.",
      hi: "हम रोज़ कपड़े धोने के लिए पानी का उपयोग करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which activity needs water?",
      hi: "किस गतिविधि में पानी की आवश्यकता होती है?"
    },
    options: [
      { en: "Cooking food", hi: "खाना पकाने में" },
      { en: "Writing homework", hi: "गृहकार्य लिखने में" },
      { en: "Playing games", hi: "खेलने में" },
      { en: "Sleeping", hi: "सोने में" }
    ],
    correct: {
      en: "Cooking food",
      hi: "खाना पकाने में"
    },
    explanation: {
      en: "Water is used to boil, wash, and cook food.",
      hi: "पानी का उपयोग खाना पकाने, धोने और उबालने में होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these uses water?",
      hi: "इनमें से किसमें पानी का उपयोग होता है?"
    },
    options: [
      { en: "Watering plants", hi: "पौधों को पानी देना" },
      { en: "Reading a book", hi: "किताब पढ़ना" },
      { en: "Playing with toys", hi: "खिलौनों से खेलना" },
      { en: "Listening to music", hi: "संगीत सुनना" }
    ],
    correct: {
      en: "Watering plants",
      hi: "पौधों को पानी देना"
    },
    explanation: {
      en: "Plants need water to grow and stay alive.",
      hi: "पौधों को जीवित रहने और बढ़ने के लिए पानी चाहिए।"
    }
  },
  {
    id: 6,
    question: {
      en: "How does water help animals?",
      hi: "पानी जानवरों की कैसे मदद करता है?"
    },
    options: [
      { en: "They drink it", hi: "वे इसे पीते हैं" },
      { en: "They wear it", hi: "वे इसे पहनते हैं" },
      { en: "They sleep in it", hi: "वे इसमें सोते हैं" },
      { en: "They eat it", hi: "वे इसे खाते हैं" }
    ],
    correct: {
      en: "They drink it",
      hi: "वे इसे पीते हैं"
    },
    explanation: {
      en: "Animals drink water to stay alive.",
      hi: "जानवर जीवित रहने के लिए पानी पीते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why do we water plants?",
      hi: "हम पौधों को पानी क्यों देते हैं?"
    },
    options: [
      { en: "To help them grow", hi: "उन्हें बढ़ने में मदद करने के लिए" },
      { en: "To clean them", hi: "उन्हें साफ करने के लिए" },
      { en: "To make them look shiny", hi: "उन्हें चमकदार दिखाने के लिए" },
      { en: "To make them sleep", hi: "उन्हें सुलाने के लिए" }
    ],
    correct: {
      en: "To help them grow",
      hi: "उन्हें बढ़ने में मदद करने के लिए"
    },
    explanation: {
      en: "Plants need water to grow healthy.",
      hi: "पौधों को स्वस्थ रूप से बढ़ने के लिए पानी की आवश्यकता होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which job uses the most water?",
      hi: "कौन सा काम सबसे अधिक पानी उपयोग करता है?"
    },
    options: [
      { en: "Washing clothes", hi: "कपड़े धोना" },
      { en: "Reading", hi: "पढ़ाई करना" },
      { en: "Drawing", hi: "चित्र बनाना" },
      { en: "Sleeping", hi: "सोना" }
    ],
    correct: {
      en: "Washing clothes",
      hi: "कपड़े धोना"
    },
    explanation: {
      en: "Washing clothes requires a large amount of water.",
      hi: "कपड़े धोने में काफी मात्रा में पानी लगता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is a good use of water?",
      hi: "पानी का अच्छा उपयोग क्या है?"
    },
    options: [
      { en: "Bathing daily", hi: "रोज़ नहाना" },
      { en: "Spilling water", hi: "पानी गिराना" },
      { en: "Leaving taps open", hi: "नल खुला छोड़ना" },
      { en: "Wasting water", hi: "पानी बर्बाद करना" }
    ],
    correct: {
      en: "Bathing daily",
      hi: "रोज़ नहाना"
    },
    explanation: {
      en: "Using water wisely helps in cleanliness and health.",
      hi: "सही ढंग से पानी का उपयोग करना सफाई और स्वास्थ्य के लिए जरूरी है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why should we save water?",
      hi: "हमें पानी क्यों बचाना चाहिए?"
    },
    options: [
      { en: "It is precious and limited", hi: "यह कीमती और सीमित है" },
      { en: "It is free", hi: "यह मुफ्त है" },
      { en: "We do not like it", hi: "हमें यह पसंद नहीं" },
      { en: "It is colorful", hi: "यह रंगीन है" }
    ],
    correct: {
      en: "It is precious and limited",
      hi: "यह कीमती और सीमित है"
    },
    explanation: {
      en: "Water is a valuable resource and should not be wasted.",
      hi: "पानी एक कीमती संसाधन है और इसे बर्बाद नहीं करना चाहिए।"
    }
  }
];

export default waterUses;
