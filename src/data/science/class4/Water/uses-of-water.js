const usesOfWater = [
  {
    id: 1,
    question: {
      en: "Which of the following is a daily use of water?",
      hi: "निम्न में से कौन पानी का दैनिक उपयोग है?"
    },
    options: [
      { en: "Listening to music", hi: "संगीत सुनना" },
      { en: "Drinking", hi: "पीना" },
      { en: "Reading books", hi: "किताब पढ़ना" },
      { en: "Running", hi: "दौड़ना" }
    ],
    correct: {
      en: "Drinking",
      hi: "पीना"
    },
    explanation: {
      en: "We drink water every day to stay healthy.",
      hi: "स्वस्थ रहने के लिए हम रोज़ पानी पीते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which activity uses the most water at home?",
      hi: "घर में किस कार्य में सबसे अधिक पानी का उपयोग होता है?"
    },
    options: [
      { en: "Brushing teeth", hi: "दाँत ब्रश करना" },
      { en: "Cooking", hi: "खाना पकाना" },
      { en: "Washing clothes", hi: "कपड़े धोना" },
      { en: "Writing", hi: "लिखाई करना" }
    ],
    correct: {
      en: "Washing clothes",
      hi: "कपड़े धोना"
    },
    explanation: {
      en: "Washing clothes requires a lot of water.",
      hi: "कपड़े धोने में बहुत सारा पानी लगता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Why do plants need water?",
      hi: "पौधों को पानी की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "To stay clean", hi: "साफ़ रहने के लिए" },
      { en: "To grow", hi: "बढ़ने के लिए" },
      { en: "To make sound", hi: "ध्वनि बनाने के लिए" },
      { en: "To stay warm", hi: "गर्म रहने के लिए" }
    ],
    correct: {
      en: "To grow",
      hi: "बढ़ने के लिए"
    },
    explanation: {
      en: "Plants need water to grow and stay alive.",
      hi: "पौधों को बढ़ने और जीवित रहने के लिए पानी चाहिए।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following animals needs water to live?",
      hi: "निम्न में से किस जानवर को जीवित रहने के लिए पानी चाहिए?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Chair", hi: "कुर्सी" },
      { en: "Ball", hi: "गेंद" },
      { en: "Book", hi: "पुस्तक" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "All living beings, including dogs, need water to survive.",
      hi: "सभी जीवित प्राणियों को जीवित रहने के लिए पानी चाहिए, जैसे कि कुत्ता।"
    }
  },
  {
    id: 5,
    question: {
      en: "Farmers use water for:",
      hi: "किसान पानी का उपयोग किसके लिए करते हैं?"
    },
    options: [
      { en: "Traveling", hi: "यात्रा करने के लिए" },
      { en: "Watching TV", hi: "टीवी देखने के लिए" },
      { en: "Irrigation", hi: "सिंचाई के लिए" },
      { en: "Writing", hi: "लिखने के लिए" }
    ],
    correct: {
      en: "Irrigation",
      hi: "सिंचाई के लिए"
    },
    explanation: {
      en: "Farmers water their crops using irrigation.",
      hi: "किसान अपनी फसलों को सिंचाई से पानी देते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Water is used in cooking to:",
      hi: "खाना पकाने में पानी का उपयोग क्यों किया जाता है?"
    },
    options: [
      { en: "Cool the food", hi: "भोजन को ठंडा करने के लिए" },
      { en: "Add color", hi: "रंग जोड़ने के लिए" },
      { en: "Boil and soften food", hi: "भोजन उबालने और नरम करने के लिए" },
      { en: "Make it hard", hi: "कठोर बनाने के लिए" }
    ],
    correct: {
      en: "Boil and soften food",
      hi: "भोजन उबालने और नरम करने के लिए"
    },
    explanation: {
      en: "Water helps boil and soften food while cooking.",
      hi: "पानी भोजन को पकाते समय उबालने और नरम करने में मदद करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "We use water to clean:",
      hi: "हम पानी का उपयोग किसे साफ़ करने के लिए करते हैं?"
    },
    options: [
      { en: "Books", hi: "पुस्तकें" },
      { en: "Rooms", hi: "कमरे" },
      { en: "Hands and utensils", hi: "हाथ और बर्तन" },
      { en: "Walls", hi: "दीवारें" }
    ],
    correct: {
      en: "Hands and utensils",
      hi: "हाथ और बर्तन"
    },
    explanation: {
      en: "Water is used for cleaning hands, dishes, and many other things.",
      hi: "पानी का उपयोग हाथ, बर्तन और अन्य चीजें साफ़ करने के लिए किया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is an incorrect use of water?",
      hi: "निम्न में से कौन पानी का गलत उपयोग है?"
    },
    options: [
      { en: "Wasting water while brushing", hi: "ब्रश करते समय पानी को बर्बाद करना" },
      { en: "Bathing", hi: "स्नान करना" },
      { en: "Drinking", hi: "पीना" },
      { en: "Cooking food", hi: "भोजन पकाना" }
    ],
    correct: {
      en: "Wasting water while brushing",
      hi: "ब्रश करते समय पानी को बर्बाद करना"
    },
    explanation: {
      en: "Leaving the tap on wastes water during brushing.",
      hi: "ब्रश करते समय नल खुला छोड़ना पानी की बर्बादी है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should we do to save water?",
      hi: "हमें पानी बचाने के लिए क्या करना चाहिए?"
    },
    options: [
      { en: "Leave taps open", hi: "नल खुले छोड़ना" },
      { en: "Fix leaks", hi: "रिसाव ठीक करना" },
      { en: "Use more water", hi: "अधिक पानी का उपयोग" },
      { en: "Wash cars daily", hi: "रोज़ कार धोना" }
    ],
    correct: {
      en: "Fix leaks",
      hi: "रिसाव ठीक करना"
    },
    explanation: {
      en: "Fixing leaks helps stop water wastage.",
      hi: "रिसाव ठीक करने से पानी की बर्बादी रुकती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which festival uses a lot of water in celebrations?",
      hi: "कौन सा त्योहार मनाने में बहुत सारा पानी उपयोग होता है?"
    },
    options: [
      { en: "Diwali", hi: "दीवाली" },
      { en: "Holi", hi: "होली" },
      { en: "Raksha Bandhan", hi: "रक्षाबंधन" },
      { en: "Christmas", hi: "क्रिसमस" }
    ],
    correct: {
      en: "Holi",
      hi: "होली"
    },
    explanation: {
      en: "Holi is celebrated using water and colors.",
      hi: "होली में रंगों के साथ बहुत सारा पानी उपयोग होता है।"
    }
  }
];

export default usesOfWater;
