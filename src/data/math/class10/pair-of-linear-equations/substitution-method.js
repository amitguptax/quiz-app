const substitutionMethod = [
  {
    question: {
      en: "In substitution method, what is the first step?",
      hi: "प्रतिस्थापन विधि में पहला कदम क्या होता है?"
    },
    options: {
      a: { en: "Subtract both equations", hi: "दोनों समीकरणों को घटाना" },
      b: { en: "Divide equations", hi: "समीकरणों को विभाजित करना" },
      c: { en: "Solve one equation for one variable", hi: "एक चर के लिए एक समीकरण को हल करना" },
      d: { en: "Multiply both equations", hi: "दोनों समीकरणों को गुणा करना" }
    },
    answer: "c",
    explanation: {
      en: "We first solve one equation for one variable in terms of the other."
    }
  },
  {
    question: {
      en: "What is the next step after substituting the variable in substitution method?",
      hi: "प्रतिस्थापन के बाद अगला चरण क्या होता है?"
    },
    options: {
      a: { en: "Add the equations", hi: "समीकरण जोड़ना" },
      b: { en: "Solve the new equation with one variable", hi: "नए समीकरण को एक चर में हल करना" },
      c: { en: "Ignore the second equation", hi: "दूसरे समीकरण को अनदेखा करना" },
      d: { en: "Divide all terms", hi: "सभी पदों को विभाजित करना" }
    },
    answer: "b",
    explanation: {
      en: "Substitution gives a single-variable equation which is solved next."
    }
  },
  {
    question: {
      en: "What is the purpose of the elimination method?",
      hi: "उन्मूलन विधि का उद्देश्य क्या है?"
    },
    options: {
      a: { en: "To add constants", hi: "स्थिरांकों को जोड़ना" },
      b: { en: "To remove one variable", hi: "एक चर को हटाना" },
      c: { en: "To graph the lines", hi: "रेखाएँ खींचना" },
      d: { en: "To find slope", hi: "ढाल ज्ञात करना" }
    },
    answer: "b",
    explanation: {
      en: "Elimination method removes one variable by adding or subtracting equations."
    }
  },
  {
    question: {
      en: "When is multiplication of equations required in elimination?",
      hi: "उन्मूलन विधि में समीकरणों को कब गुणा किया जाता है?"
    },
    options: {
      a: { en: "When variables are equal", hi: "जब चर समान होते हैं" },
      b: { en: "To get same coefficients", hi: "समान गुणांक प्राप्त करने के लिए" },
      c: { en: "To simplify", hi: "सरलीकरण हेतु" },
      d: { en: "When equations are identical", hi: "जब समीकरण समान हों" }
    },
    answer: "b",
    explanation: {
      en: "Multiplying equations ensures that variable coefficients become equal or opposites for elimination."
    }
  },
  {
    question: {
      en: "Which method is best when one variable is already isolated?",
      hi: "जब एक चर पहले से ही पृथक हो, तो कौन सी विधि सर्वोत्तम है?"
    },
    options: {
      a: { en: "Graphical method", hi: "ग्राफ़ विधि" },
      b: { en: "Elimination method", hi: "उन्मूलन विधि" },
      c: { en: "Substitution method", hi: "प्रतिस्थापन विधि" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "If a variable is already expressed alone, substitution is most efficient."
    }
  },
  {
    question: {
      en: "Solve using substitution: x + y = 6, x = 4. What is y?",
      hi: "प्रतिस्थापन से हल करें: x + y = 6, x = 4. y का मान क्या होगा?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "3", hi: "3" },
      c: { en: "4", hi: "4" },
      d: { en: "5", hi: "5" }
    },
    answer: "a",
    explanation: {
      en: "Substituting x = 4 in x + y = 6 ⇒ y = 2"
    }
  },
  {
    question: {
      en: "If 2x + 3y = 12 and 4x + 6y = 24, what is the solution?",
      hi: "यदि 2x + 3y = 12 और 4x + 6y = 24, तो हल क्या होगा?"
    },
    options: {
      a: { en: "No solution", hi: "कोई हल नहीं" },
      b: { en: "Infinite solutions", hi: "अनंत हल" },
      c: { en: "x = 0, y = 0", hi: "x = 0, y = 0" },
      d: { en: "Unique solution", hi: "एक अद्वितीय हल" }
    },
    answer: "b",
    explanation: {
      en: "The second equation is a multiple of the first, so lines coincide → infinite solutions."
    }
  },
  {
    question: {
      en: "How many solutions do consistent equations have?",
      hi: "सुसंगत समीकरणों के कितने हल होते हैं?"
    },
    options: {
      a: { en: "1 or infinite", hi: "1 या अनंत" },
      b: { en: "Only one", hi: "केवल एक" },
      c: { en: "None", hi: "कोई नहीं" },
      d: { en: "Only infinite", hi: "केवल अनंत" }
    },
    answer: "a",
    explanation: {
      en: "Consistent systems can be intersecting (1 solution) or coincident (infinite)."
    }
  },
  {
    question: {
      en: "Which operation is used in elimination method?",
      hi: "उन्मूलन विधि में कौन सा क्रिया-कलाप प्रयोग किया जाता है?"
    },
    options: {
      a: { en: "Multiplication only", hi: "केवल गुणा" },
      b: { en: "Substitution only", hi: "केवल प्रतिस्थापन" },
      c: { en: "Addition/Subtraction", hi: "जोड़ / घटाव" },
      d: { en: "Division", hi: "भाग" }
    },
    answer: "c",
    explanation: {
      en: "We add or subtract equations to eliminate a variable."
    }
  },
  {
    question: {
      en: "What is the solution of: 3x + 2y = 12 and 6x + 4y = 24?",
      hi: "3x + 2y = 12 और 6x + 4y = 24 का हल क्या होगा?"
    },
    options: {
      a: { en: "No solution", hi: "कोई हल नहीं" },
      b: { en: "Infinite solutions", hi: "अनंत हल" },
      c: { en: "x = 2, y = 3", hi: "x = 2, y = 3" },
      d: { en: "x = 0, y = 0", hi: "x = 0, y = 0" }
    },
    answer: "b",
    explanation: {
      en: "Both equations are multiples of each other → infinite solutions."
    }
  }
];

export default substitutionMethod;
