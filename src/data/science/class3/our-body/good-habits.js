const goodHabits = [
  {
    id: 1,
    question: {
      en: "Which of the following is a good habit?",
      hi: "निम्न में से कौन एक अच्छी आदत है?"
    },
    options: [
      { en: "Brushing teeth daily", hi: "रोज़ दाँत साफ़ करना" },
      { en: "Skipping meals", hi: "भोजन छोड़ना" },
      { en: "Not bathing", hi: "न नहाना" },
      { en: "Sleeping very late", hi: "बहुत देर से सोना" }
    ],
    correct: {
      en: "Brushing teeth daily",
      hi: "रोज़ दाँत साफ़ करना"
    },
    explanation: {
      en: "Brushing teeth daily keeps our mouth clean and healthy.",
      hi: "रोज़ दाँत साफ़ करना हमारे मुँह को साफ़ और स्वस्थ रखता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "When should we wash our hands?",
      hi: "हमें हाथ कब धोने चाहिए?"
    },
    options: [
      { en: "Before eating", hi: "खाने से पहले" },
      { en: "After playing", hi: "खेलने के बाद" },
      { en: "After using the toilet", hi: "शौच के बाद" },
      { en: "All of these", hi: "इनमें से सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "इनमें से सभी"
    },
    explanation: {
      en: "Washing hands regularly helps prevent illness.",
      hi: "हाथ धोना बीमारियों से बचाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should you do after waking up in the morning?",
      hi: "सुबह उठने के बाद आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Brush your teeth", hi: "दाँत साफ़ करना" },
      { en: "Wash your face", hi: "चेहरा धोना" },
      { en: "Take a bath", hi: "नहाना" },
      { en: "All of these", hi: "इनमें से सभी" }
    ],
    correct: {
      en: "All of these",
      hi: "इनमें से सभी"
    },
    explanation: {
      en: "These are healthy habits to start the day.",
      hi: "ये सभी दिन की अच्छी शुरुआत के लिए अच्छी आदतें हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which habit keeps our surroundings clean?",
      hi: "कौन सी आदत हमारे आस-पास को साफ़ रखती है?"
    },
    options: [
      { en: "Throwing waste in dustbin", hi: "कूड़ेदान में कचरा डालना" },
      { en: "Throwing waste on road", hi: "सड़क पर कचरा डालना" },
      { en: "Leaving trash anywhere", hi: "कहीं भी कचरा छोड़ देना" },
      { en: "Not cleaning room", hi: "कमरा साफ़ न करना" }
    ],
    correct: {
      en: "Throwing waste in dustbin",
      hi: "कूड़ेदान में कचरा डालना"
    },
    explanation: {
      en: "Using dustbins keeps our home and surroundings clean.",
      hi: "कूड़ेदान का उपयोग करने से घर और आस-पास साफ़ रहता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is a good habit while eating?",
      hi: "खाने के समय कौन सी अच्छी आदत है?"
    },
    options: [
      { en: "Chewing food properly", hi: "भोजन को अच्छे से चबाना" },
      { en: "Talking while eating", hi: "खाते समय बात करना" },
      { en: "Eating very fast", hi: "बहुत तेज़ खाना" },
      { en: "Not washing hands", hi: "हाथ न धोना" }
    ],
    correct: {
      en: "Chewing food properly",
      hi: "भोजन को अच्छे से चबाना"
    },
    explanation: {
      en: "Proper chewing helps in better digestion.",
      hi: "अच्छे से चबाना पाचन में मदद करता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Why should we cover our mouth while coughing or sneezing?",
      hi: "हमें खांसते या छींकते समय मुँह क्यों ढकना चाहिए?"
    },
    options: [
      { en: "To prevent spread of germs", hi: "कीटाणुओं के फैलाव को रोकने के लिए" },
      { en: "For fun", hi: "मज़े के लिए" },
      { en: "To look good", hi: "अच्छा दिखने के लिए" },
      { en: "It makes noise", hi: "यह आवाज़ करता है" }
    ],
    correct: {
      en: "To prevent spread of germs",
      hi: "कीटाणुओं के फैलाव को रोकने के लिए"
    },
    explanation: {
      en: "Covering mouth helps in stopping infections from spreading.",
      hi: "मुँह ढकने से संक्रमण फैलने से रोका जा सकता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the right time to sleep for kids?",
      hi: "बच्चों के लिए सोने का सही समय क्या है?"
    },
    options: [
      { en: "Early at night", hi: "रात को जल्दी" },
      { en: "Late at midnight", hi: "आधी रात को देर से" },
      { en: "Very early in the morning", hi: "बहुत सुबह" },
      { en: "Never sleep", hi: "कभी न सोएं" }
    ],
    correct: {
      en: "Early at night",
      hi: "रात को जल्दी"
    },
    explanation: {
      en: "Early sleep keeps the body and mind healthy.",
      hi: "जल्दी सोना शरीर और दिमाग को स्वस्थ रखता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "How many times should we brush our teeth daily?",
      hi: "हमें दिन में कितनी बार दाँत साफ़ करने चाहिए?"
    },
    options: [
      { en: "Two times", hi: "दो बार" },
      { en: "Once a week", hi: "सप्ताह में एक बार" },
      { en: "Only at night", hi: "केवल रात को" },
      { en: "Never", hi: "कभी नहीं" }
    ],
    correct: {
      en: "Two times",
      hi: "दो बार"
    },
    explanation: {
      en: "Brushing twice a day keeps teeth clean and healthy.",
      hi: "दिन में दो बार ब्रश करना दाँतों को साफ़ और स्वस्थ रखता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should you do after playing?",
      hi: "खेलने के बाद आपको क्या करना चाहिए?"
    },
    options: [
      { en: "Wash hands and feet", hi: "हाथ और पैर धोना" },
      { en: "Sleep directly", hi: "सीधे सो जाना" },
      { en: "Eat food", hi: "भोजन करना" },
      { en: "Do nothing", hi: "कुछ नहीं करना" }
    ],
    correct: {
      en: "Wash hands and feet",
      hi: "हाथ और पैर धोना"
    },
    explanation: {
      en: "Washing after play keeps dirt and germs away.",
      hi: "खेलने के बाद हाथ-पैर धोने से गंदगी और कीटाणु दूर रहते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What habit should we follow in the morning?",
      hi: "सुबह हमें कौन सी आदत अपनानी चाहिए?"
    },
    options: [
      { en: "Bathing", hi: "नहाना" },
      { en: "Skipping breakfast", hi: "नाश्ता छोड़ना" },
      { en: "Not brushing", hi: "ब्रश न करना" },
      { en: "Staying in bed", hi: "बिस्तर में पड़े रहना" }
    ],
    correct: {
      en: "Bathing",
      hi: "नहाना"
    },
    explanation: {
      en: "Morning bath refreshes and cleans the body.",
      hi: "सुबह नहाने से शरीर ताजगी और साफ़ रहता है।"
    }
  }
];

export default goodHabits;
