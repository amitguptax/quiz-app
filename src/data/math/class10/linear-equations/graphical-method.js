const graphicalMethod = [
  {
    question: {
      en: "What does the graphical method of solving equations involve?",
      hi: "समीकरणों को हल करने की ग्राफ विधि में क्या शामिल होता है?"
    },
    options: {
      a: { en: "Drawing graphs of the equations", hi: "समीकरणों के ग्राफ बनाना" },
      b: { en: "Differentiating the equations", hi: "समीकरणों को अवकलन करना" },
      c: { en: "Integrating both sides", hi: "दोनों पक्षों का समाकलन करना" },
      d: { en: "Using trigonometric identities", hi: "त्रिकोणमितीय पहचानों का उपयोग" }
    },
    answer: "a",
    explanation: {
      en: "In graphical method, we draw the graphs of the given equations to find the solution."
    }
  },
  {
    question: {
      en: "What does the point of intersection of two lines represent?",
      hi: "दो रेखाओं के प्रतिच्छेदन बिंदु का क्या अर्थ होता है?"
    },
    options: {
      a: { en: "Their common root", hi: "उनका साझा मूल" },
      b: { en: "Solution of the equations", hi: "समीकरणों का हल" },
      c: { en: "Midpoint", hi: "मध्यबिंदु" },
      d: { en: "Graph vertex", hi: "ग्राफ का शीर्षबिंदु" }
    },
    answer: "b",
    explanation: {
      en: "The point where the two lines intersect gives the common solution of the equations."
    }
  },
  {
    question: {
      en: "If two lines intersect at a point, the equations are:",
      hi: "यदि दो रेखाएँ एक बिंदु पर प्रतिच्छेद करती हैं, तो समीकरण होते हैं:"
    },
    options: {
      a: { en: "Inconsistent", hi: "असंगत" },
      b: { en: "Consistent and dependent", hi: "सुसंगत और आश्रित" },
      c: { en: "Consistent and independent", hi: "सुसंगत और स्वतंत्र" },
      d: { en: "Insoluble", hi: "असमाधेय" }
    },
    answer: "c",
    explanation: {
      en: "When lines intersect at one point, the equations are consistent and independent."
    }
  },
  {
    question: {
      en: "If two lines are parallel, what is the nature of the solution?",
      hi: "यदि दो रेखाएँ समांतर हों, तो हल का स्वरूप क्या होगा?"
    },
    options: {
      a: { en: "Infinite solutions", hi: "अनंत हल" },
      b: { en: "Unique solution", hi: "एकमात्र हल" },
      c: { en: "No solution", hi: "कोई हल नहीं" },
      d: { en: "Any solution", hi: "कोई भी हल" }
    },
    answer: "c",
    explanation: {
      en: "Parallel lines never meet, hence no solution exists."
    }
  },
  {
    question: {
      en: "If two lines coincide, the number of solutions is:",
      hi: "यदि दो रेखाएँ एक-दूसरे पर स्थित हों, तो हलों की संख्या क्या होगी?"
    },
    options: {
      a: { en: "One", hi: "एक" },
      b: { en: "Two", hi: "दो" },
      c: { en: "Infinite", hi: "अनंत" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "Coincident lines have infinite points in common, hence infinite solutions."
    }
  },
  {
    question: {
      en: "What is the condition for two linear equations to be inconsistent?",
      hi: "दो रेखीय समीकरणों के असंगत होने की शर्त क्या है?"
    },
    options: {
      a: { en: "a₁/a₂ ≠ b₁/b₂", hi: "a₁/a₂ ≠ b₁/b₂" },
      b: { en: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂", hi: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂" },
      c: { en: "a₁/a₂ = b₁/b₂ = c₁/c₂", hi: "a₁/a₂ = b₁/b₂ = c₁/c₂" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, the lines are parallel and do not intersect."
    }
  },
  {
    question: {
      en: "Which pair of lines will intersect at a single point?",
      hi: "निम्न में से कौन सी रेखाएँ एक बिंदु पर मिलेंगी?"
    },
    options: {
      a: { en: "2x + 3y = 6 and 4x + 6y = 12", hi: "2x + 3y = 6 और 4x + 6y = 12" },
      b: { en: "x + y = 5 and 2x + 3y = 10", hi: "x + y = 5 और 2x + 3y = 10" },
      c: { en: "x - y = 2 and 2x - 2y = 4", hi: "x - y = 2 और 2x - 2y = 4" },
      d: { en: "x + 2y = 7 and 2x + 4y = 14", hi: "x + 2y = 7 और 2x + 4y = 14" }
    },
    answer: "b",
    explanation: {
      en: "These lines are not multiples of each other and intersect at a unique point."
    }
  },
  {
    question: {
      en: "The graphical solution of a pair of linear equations gives:",
      hi: "रेखीय समीकरणों के युग्म का ग्राफ़ समाधान क्या दर्शाता है?"
    },
    options: {
      a: { en: "Their least common multiple", hi: "उनका लघुत्तम समापवर्त्य" },
      b: { en: "Their sum", hi: "उनका योग" },
      c: { en: "Their point of intersection", hi: "उनका प्रतिच्छेदन बिंदु" },
      d: { en: "Area between lines", hi: "रेखाओं के बीच क्षेत्रफल" }
    },
    answer: "c",
    explanation: {
      en: "Intersection point of graphs gives solution to both equations."
    }
  },
  {
    question: {
      en: "What is the solution of x + y = 4 and x - y = 2 by graph?",
      hi: "x + y = 4 और x - y = 2 का ग्राफ द्वारा हल क्या होगा?"
    },
    options: {
      a: { en: "(3, 1)", hi: "(3, 1)" },
      b: { en: "(1, 3)", hi: "(1, 3)" },
      c: { en: "(2, 2)", hi: "(2, 2)" },
      d: { en: "(4, 0)", hi: "(4, 0)" }
    },
    answer: "a",
    explanation: {
      en: "Solving x + y = 4 and x - y = 2 gives x = 3, y = 1."
    }
  },
  {
    question: {
      en: "What does an inconsistent pair of linear equations show on a graph?",
      hi: "असंगत रेखीय समीकरणों का ग्राफ पर क्या अर्थ होता है?"
    },
    options: {
      a: { en: "Two lines intersecting", hi: "दो रेखाएँ प्रतिच्छेद करती हैं" },
      b: { en: "Coinciding lines", hi: "अधिलेखित रेखाएँ" },
      c: { en: "Parallel lines", hi: "समांतर रेखाएँ" },
      d: { en: "Circular arcs", hi: "वृत्तीय चाप" }
    },
    answer: "c",
    explanation: {
      en: "Inconsistent equations represent parallel lines that never meet."
    }
  }
];

export default graphicalMethod;
