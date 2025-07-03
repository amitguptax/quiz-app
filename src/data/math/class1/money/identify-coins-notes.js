const questions = [
  {
    question: {
      en: "Which coin is smallest in value?",
      hi: "सबसे कम मूल्य का सिक्का कौन-सा है?"
    },
    options: [
      { en: "₹10", hi: "₹10" },
      { en: "₹1", hi: "₹1" },
      { en: "₹5", hi: "₹5" },
      { en: "₹2", hi: "₹2" }
    ],
    correct: {
      en: "₹1",
      hi: "₹1"
    },
    explanation: {
      en: "₹1 is the lowest value among common coins.",
      hi: "₹1 सबसे कम मूल्य वाला सामान्य सिक्का है।"
    }
  },
  {
    question: {
      en: "Which note has Mahatma Gandhi's photo?",
      hi: "किस नोट पर महात्मा गांधी की तस्वीर होती है?"
    },
    options: [
      { en: "₹50", hi: "₹50" },
      { en: "₹10", hi: "₹10" },
      { en: "₹100", hi: "₹100" },
      { en: "All of these", hi: "इन सभी पर" }
    ],
    correct: {
      en: "All of these",
      hi: "इन सभी पर"
    },
    explanation: {
      en: "All Indian notes have Mahatma Gandhi's image.",
      hi: "सभी भारतीय नोटों पर महात्मा गांधी की तस्वीर होती है।"
    }
  },
  {
    question: {
      en: "Which coin is bigger in value: ₹2 or ₹5?",
      hi: "₹2 और ₹5 में कौन-सा अधिक मूल्य का सिक्का है?"
    },
    options: [
      { en: "₹2", hi: "₹2" },
      { en: "₹5", hi: "₹5" },
      { en: "Both same", hi: "दोनों समान" },
      { en: "Can't say", hi: "कह नहीं सकते" }
    ],
    correct: {
      en: "₹5",
      hi: "₹5"
    },
    explanation: {
      en: "₹5 has more value than ₹2.",
      hi: "₹5 का मूल्य ₹2 से अधिक होता है।"
    }
  },
  {
    question: {
      en: "Which of these is a note?",
      hi: "इनमें से कौन-सा एक नोट है?"
    },
    options: [
      { en: "₹2", hi: "₹2" },
      { en: "₹5", hi: "₹5" },
      { en: "₹10", hi: "₹10" },
      { en: "₹1", hi: "₹1" }
    ],
    correct: {
      en: "₹10",
      hi: "₹10"
    },
    explanation: {
      en: "₹10 is usually seen as a paper note.",
      hi: "₹10 आमतौर पर एक कागजी नोट होता है।"
    }
  },
  {
    question: {
      en: "What is the value of one ₹10 note?",
      hi: "एक ₹10 नोट का मूल्य क्या है?"
    },
    options: [
      { en: "₹5", hi: "₹5" },
      { en: "₹1", hi: "₹1" },
      { en: "₹10", hi: "₹10" },
      { en: "₹20", hi: "₹20" }
    ],
    correct: {
      en: "₹10",
      hi: "₹10"
    },
    explanation: {
      en: "The value printed on the note is ₹10.",
      hi: "नोट पर मुद्रित मूल्य ₹10 है।"
    }
  },
  {
    question: {
      en: "Which of these is a coin?",
      hi: "इनमें से कौन-सा एक सिक्का है?"
    },
    options: [
      { en: "₹10 note", hi: "₹10 नोट" },
      { en: "₹5 coin", hi: "₹5 सिक्का" },
      { en: "₹20 note", hi: "₹20 नोट" },
      { en: "₹50 note", hi: "₹50 नोट" }
    ],
    correct: {
      en: "₹5 coin",
      hi: "₹5 सिक्का"
    },
    explanation: {
      en: "₹5 is available as a coin.",
      hi: "₹5 एक सिक्के के रूप में उपलब्ध है।"
    }
  },
  {
    question: {
      en: "What is the color of ₹10 note?",
      hi: "₹10 नोट का रंग क्या होता है?"
    },
    options: [
      { en: "Blue", hi: "नीला" },
      { en: "Green", hi: "हरा" },
      { en: "Orange", hi: "नारंगी" },
      { en: "Purple", hi: "बैंगनी" }
    ],
    correct: {
      en: "Orange",
      hi: "नारंगी"
    },
    explanation: {
      en: "New ₹10 notes are orange in color.",
      hi: "नया ₹10 नोट नारंगी रंग का होता है।"
    }
  },
  {
    question: {
      en: "Which has the highest value?",
      hi: "सबसे अधिक मूल्य किसका है?"
    },
    options: [
      { en: "₹5", hi: "₹5" },
      { en: "₹2", hi: "₹2" },
      { en: "₹10", hi: "₹10" },
      { en: "₹1", hi: "₹1" }
    ],
    correct: {
      en: "₹10",
      hi: "₹10"
    },
    explanation: {
      en: "₹10 is the highest among the given options.",
      hi: "दिए गए विकल्पों में ₹10 सबसे अधिक मूल्य का है।"
    }
  },
  {
    question: {
      en: "How many ₹2 coins make ₹10?",
      hi: "₹10 बनाने के लिए ₹2 के कितने सिक्के चाहिए?"
    },
    options: [
      { en: "2", hi: "2" },
      { en: "4", hi: "4" },
      { en: "5", hi: "5" },
      { en: "6", hi: "6" }
    ],
    correct: {
      en: "5",
      hi: "5"
    },
    explanation: {
      en: "₹2 × 5 = ₹10",
      hi: "₹2 × 5 = ₹10"
    }
  },
  {
    question: {
      en: "Which one is NOT a coin?",
      hi: "इनमें से कौन-सा सिक्का नहीं है?"
    },
    options: [
      { en: "₹1", hi: "₹1" },
      { en: "₹2", hi: "₹2" },
      { en: "₹10", hi: "₹10" },
      { en: "₹50", hi: "₹50" }
    ],
    correct: {
      en: "₹50",
      hi: "₹50"
    },
    explanation: {
      en: "₹50 is available only as a note.",
      hi: "₹50 केवल नोट के रूप में उपलब्ध है।"
    }
  }
];

export default { questions };
