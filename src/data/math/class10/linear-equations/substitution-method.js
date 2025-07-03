const substitutionMethod = [
  {
    question: {
      en: "What is the first step in the substitution method?",
      hi: "प्रतिस्थापन विधि में पहला चरण क्या होता है?"
    },
    options: {
      a: { en: "Eliminate one variable", hi: "एक चर को समाप्त करना" },
      b: { en: "Graph the equations", hi: "समीकरणों का ग्राफ बनाना" },
      c: { en: "Express one variable in terms of the other", hi: "एक चर को दूसरे के रूप में व्यक्त करना" },
      d: { en: "Cross multiply", hi: "क्रॉस गुणा करना" }
    },
    answer: "c",
    explanation: {
      en: "In substitution method, we first write one variable in terms of the other."
    }
  },
  {
    question: {
      en: "Which method is best when one variable has coefficient 1?",
      hi: "जब किसी चर का गुणांक 1 हो, तो कौन सी विधि सबसे उपयुक्त है?"
    },
    options: {
      a: { en: "Substitution", hi: "प्रतिस्थापन" },
      b: { en: "Elimination", hi: "उन्मूलन" },
      c: { en: "Graphical", hi: "ग्राफ विधि" },
      d: { en: "Trial and error", hi: "प्रयोग और त्रुटि" }
    },
    answer: "a",
    explanation: {
      en: "Substitution is easier when one variable is already isolated or has coefficient 1."
    }
  },
  {
    question: {
      en: "What is the elimination method?",
      hi: "उन्मूलन विधि क्या है?"
    },
    options: {
      a: { en: "Eliminating both variables", hi: "दोनों चरों को हटाना" },
      b: { en: "Making the coefficients of one variable equal and subtracting equations", hi: "एक चर के गुणांकों को समान बनाकर समीकरणों को घटाना" },
      c: { en: "Cross multiplying the equations", hi: "समीकरणों को क्रॉस गुणा करना" },
      d: { en: "Using geometry", hi: "ज्यामिति का उपयोग करना" }
    },
    answer: "b",
    explanation: {
      en: "In elimination, we make one variable’s coefficients equal and subtract/add equations."
    }
  },
  {
    question: {
      en: "Which step comes after substituting the value into second equation?",
      hi: "दूसरे समीकरण में मान प्रतिस्थापित करने के बाद कौन सा चरण आता है?"
    },
    options: {
      a: { en: "Differentiate", hi: "अवकलन करना" },
      b: { en: "Solve for the remaining variable", hi: "बचे हुए चर का हल निकालना" },
      c: { en: "Square both sides", hi: "दोनों पक्षों का वर्ग करना" },
      d: { en: "Factor the equation", hi: "समीकरण का गुणनखंड करना" }
    },
    answer: "b",
    explanation: {
      en: "Once substituted, solve for the second variable."
    }
  },
  {
    question: {
      en: "Which method is faster when variables have simple coefficients?",
      hi: "जब चरों के गुणांक सरल हों, तो कौन सी विधि तेज होती है?"
    },
    options: {
      a: { en: "Graphical", hi: "ग्राफ़" },
      b: { en: "Substitution", hi: "प्रतिस्थापन" },
      c: { en: "Elimination", hi: "उन्मूलन" },
      d: { en: "Trial and Error", hi: "प्रयोग और त्रुटि" }
    },
    answer: "c",
    explanation: {
      en: "Elimination is faster when coefficients are small and easily matched."
    }
  },
  {
    question: {
      en: "If equations are x + y = 6 and x - y = 2, what is the value of x?",
      hi: "यदि समीकरण x + y = 6 और x - y = 2 हैं, तो x का मान क्या होगा?"
    },
    options: {
      a: { en: "4", hi: "4" },
      b: { en: "3", hi: "3" },
      c: { en: "2", hi: "2" },
      d: { en: "6", hi: "6" }
    },
    answer: "a",
    explanation: {
      en: "Adding both equations: 2x = 8 → x = 4."
    }
  },
  {
    question: {
      en: "After elimination, if we get 0 = 0, what does it mean?",
      hi: "उन्मूलन के बाद यदि हमें 0 = 0 मिले तो इसका क्या अर्थ है?"
    },
    options: {
      a: { en: "No solution", hi: "कोई हल नहीं" },
      b: { en: "Infinite solutions", hi: "अनंत हल" },
      c: { en: "Unique solution", hi: "एकमात्र हल" },
      d: { en: "Wrong equation", hi: "गलत समीकरण" }
    },
    answer: "b",
    explanation: {
      en: "0 = 0 means the equations are equivalent and have infinite solutions."
    }
  },
  {
    question: {
      en: "What is the solution of 2x + 3y = 12 and x = 3 using substitution?",
      hi: "2x + 3y = 12 और x = 3 का प्रतिस्थापन द्वारा हल क्या है?"
    },
    options: {
      a: { en: "(3, 2)", hi: "(3, 2)" },
      b: { en: "(3, 1)", hi: "(3, 1)" },
      c: { en: "(3, 3)", hi: "(3, 3)" },
      d: { en: "(3, 0)", hi: "(3, 0)" }
    },
    answer: "a",
    explanation: {
      en: "Substitute x = 3 in 2x + 3y = 12 → 6 + 3y = 12 → y = 2."
    }
  },
  {
    question: {
      en: "What if after elimination we get a false statement like 5 = 3?",
      hi: "यदि उन्मूलन के बाद 5 = 3 जैसी गलत बात मिले तो क्या अर्थ है?"
    },
    options: {
      a: { en: "Unique solution", hi: "एक हल" },
      b: { en: "Infinite solutions", hi: "अनंत हल" },
      c: { en: "No solution", hi: "कोई हल नहीं" },
      d: { en: "It’s a cubic equation", hi: "यह घन समीकरण है" }
    },
    answer: "c",
    explanation: {
      en: "False statement means equations are inconsistent and have no solution."
    }
  },
  {
    question: {
      en: "How do we eliminate a variable?",
      hi: "हम एक चर को कैसे समाप्त करते हैं?"
    },
    options: {
      a: { en: "By integrating", hi: "समाकलन करके" },
      b: { en: "By differentiating", hi: "अवकलन करके" },
      c: { en: "By equating coefficients and adding/subtracting equations", hi: "गुणांकों को बराबर करके समीकरण जोड़/घटाकर" },
      d: { en: "By taking square", hi: "वर्ग लेकर" }
    },
    answer: "c",
    explanation: {
      en: "We eliminate by adjusting coefficients of one variable and adding or subtracting equations."
    }
  }
];

export default substitutionMethod;
