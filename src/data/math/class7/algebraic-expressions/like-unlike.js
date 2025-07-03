const likeUnlike = [
  {
    id: 1,
    question: {
      en: "What are like terms?",
      hi: "सदृश पद क्या होते हैं?"
    },
    options: [
      "Terms with same numerical coefficients",
      "Terms with same variables and powers",
      "Terms with only variables",
      "Terms with different variables"
    ],
    answer: "Terms with same variables and powers",
    explanation: {
      en: "Like terms have the same variables raised to the same powers.",
      hi: "सदृश पदों में एक जैसे चर और समान घात होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following are like terms?",
      hi: "निम्न में से कौन से सदृश पद हैं?"
    },
    options: ["2x, 3x", "2x, 3y", "x, y", "2x, 2x²"],
    answer: "2x, 3x",
    explanation: {
      en: "Both terms have the same variable 'x' to the power 1.",
      hi: "दोनों पदों में चर 'x' समान है और घात भी समान है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which pair is of unlike terms?",
      hi: "कौन सा युग्म असदृश पदों का है?"
    },
    options: ["3a, 5a", "2xy, 7xy", "4m², 4n²", "6x, -2x"],
    answer: "4m², 4n²",
    explanation: {
      en: "Variables are different (m² and n²), so terms are unlike.",
      hi: "चर अलग हैं (m² और n²), इसलिए पद असदृश हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Are 5xy and 2yx like terms?",
      hi: "क्या 5xy और 2yx सदृश पद हैं?"
    },
    options: ["Yes", "No", "Only when x = y", "Can't say"],
    answer: "Yes",
    explanation: {
      en: "Order of variables doesn't matter. Both have x and y.",
      hi: "चर का क्रम मायने नहीं रखता, दोनों में x और y हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following are unlike terms?",
      hi: "निम्न में से कौन से असदृश पद हैं?"
    },
    options: ["3x², -5x²", "2a, 2a²", "7y, -y", "4m, m"],
    answer: "2a, 2a²",
    explanation: {
      en: "Variables are same but powers are different, hence unlike.",
      hi: "चर समान हैं लेकिन घात अलग है, इसलिए असदृश पद हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Can we add like terms directly?",
      hi: "क्या हम सदृश पदों को सीधे जोड़ सकते हैं?"
    },
    options: ["Yes", "No", "Only if coefficients are same", "Only if constants"],
    answer: "Yes",
    explanation: {
      en: "Like terms can be added/subtracted by adding/subtracting coefficients.",
      hi: "सदृश पदों को जोड़ने या घटाने के लिए केवल गुणांकों को जोड़ा/घटाया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the result of adding 4xy + 3xy?",
      hi: "4xy + 3xy का योग क्या है?"
    },
    options: ["7xy", "12x²y", "xy", "None"],
    answer: "7xy",
    explanation: {
      en: "Add the coefficients (4 + 3 = 7), variables remain same.",
      hi: "गुणांक जोड़ते हैं (4 + 3 = 7), चर समान रहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is a like term of 6ab?",
      hi: "6ab का सदृश पद इनमें से कौन सा है?"
    },
    options: ["ab²", "a²b", "9ab", "b²a"],
    answer: "9ab",
    explanation: {
      en: "It has same variables (a and b) with same powers.",
      hi: "इसमें वही चर हैं (a और b) और समान घात है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Are constants like terms?",
      hi: "क्या स्थिरांक (constants) सदृश पद होते हैं?"
    },
    options: ["Yes", "No", "Only if both are positive", "Only if both are negative"],
    answer: "Yes",
    explanation: {
      en: "All constants are like terms as they have no variables.",
      hi: "सभी स्थिरांक सदृश पद होते हैं क्योंकि इनमें कोई चर नहीं होता।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which one of the following pairs are unlike terms?",
      hi: "निम्न में से कौन सा युग्म असदृश पदों का है?"
    },
    options: ["3x², 5x²", "x, x", "7mn, 8nm", "2a², 2ab"],
    answer: "2a², 2ab",
    explanation: {
      en: "Variables or powers are different (a² vs ab), so they're unlike.",
      hi: "चर या घात अलग हैं (a² बनाम ab), इसलिए असदृश हैं।"
    }
  }
];

export default likeUnlike;
