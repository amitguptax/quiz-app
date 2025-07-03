const squarePatterns = [
  {
    id: 1,
    question: {
      en: "The square of any odd number is of the form:",
      hi: "किसी भी विषम संख्या का वर्ग किस रूप में होता है?"
    },
    options: ["4n", "4n + 1", "2n", "2n + 1"],
    answer: "4n + 1",
    explanation: {
      en: "Squares of odd numbers are always of the form 4n + 1.",
      hi: "विषम संख्याओं के वर्ग का रूप 4n + 1 होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which pattern does the sum of first n odd numbers follow?",
      hi: "प्रथम n विषम संख्याओं के योग का पैटर्न क्या है?"
    },
    options: ["n", "n²", "2n", "n + 1"],
    answer: "n²",
    explanation: {
      en: "Sum of first n odd numbers = n².",
      hi: "प्रथम n विषम संख्याओं का योग = n² होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "1² + 2² + 3² + ... + n² equals?",
      hi: "1² + 2² + 3² + ... + n² का योग क्या होता है?"
    },
    options: ["n(n+1)/2", "n(n+1)(2n+1)/6", "n(n-1)/2", "n²"],
    answer: "n(n+1)(2n+1)/6",
    explanation: {
      en: "The formula for sum of squares = n(n+1)(2n+1)/6",
      hi: "वर्गों का योग सूत्र = n(n+1)(2n+1)/6 होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Square of any number ending with 5 ends in:",
      hi: "5 पर समाप्त होने वाली किसी भी संख्या का वर्ग किस अंक पर समाप्त होता है?"
    },
    options: ["0", "1", "5", "25"],
    answer: "25",
    explanation: {
      en: "5² = 25, 15² = 225, 25² = 625 — all end in 25.",
      hi: "5, 15, 25 आदि का वर्ग 25 पर समाप्त होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the difference between squares of consecutive numbers?",
      hi: "लगातार दो संख्याओं के वर्गों में क्या अंतर होता है?"
    },
    options: ["Even", "Odd", "It increases", "Always equal"],
    answer: "It increases",
    explanation: {
      en: "(n+1)² - n² = 2n + 1, which increases with n.",
      hi: "(n+1)² - n² = 2n + 1 जो n के बढ़ने पर बढ़ता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which is a pattern of square numbers?",
      hi: "वर्ग संख्याओं का कौन-सा पैटर्न है?"
    },
    options: ["1, 4, 9, 16, 25", "2, 4, 6, 8", "3, 6, 9, 12", "1, 3, 5, 7"],
    answer: "1, 4, 9, 16, 25",
    explanation: {
      en: "These are all perfect squares.",
      hi: "ये सभी पूर्ण वर्ग संख्याएँ हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which formula helps identify perfect squares quickly?",
      hi: "कौन-सा सूत्र पूर्ण वर्ग को जल्दी पहचानने में मदद करता है?"
    },
    options: ["(a+b)²", "(a-b)²", "Both A and B", "None"],
    answer: "Both A and B",
    explanation: {
      en: "(a±b)² = a² ± 2ab + b² helps in expansion and checking.",
      hi: "(a±b)² सूत्र से विस्तार में सहायता मिलती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "If n is a natural number, n² is always:",
      hi: "यदि n एक प्राकृतिक संख्या है, तो n² हमेशा होगा:",
    },
    options: ["Natural", "Integer", "Positive", "All of these"],
    answer: "All of these",
    explanation: {
      en: "Square of a natural number is always natural, integer, and positive.",
      hi: "प्राकृतिक संख्या का वर्ग हमेशा प्राकृतिक, पूर्णांक और धनात्मक होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "The number of digits in n² is:",
      hi: "n² में अंकों की संख्या:",
    },
    options: ["Same as n", "Twice of n", "May increase", "Always one more"],
    answer: "May increase",
    explanation: {
      en: "The digits in square may be same or one more.",
      hi: "वर्ग की अंकों की संख्या समान या एक अधिक हो सकती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Sum of squares of two consecutive numbers: n² + (n+1)² = ?",
      hi: "दो लगातार संख्याओं के वर्गों का योग n² + (n+1)² = ?"
    },
    options: ["2n² + 2n + 1", "n² + 1", "2n + 1", "n(n+1)"],
    answer: "2n² + 2n + 1",
    explanation: {
      en: "n² + (n+1)² = n² + n² + 2n + 1 = 2n² + 2n + 1",
      hi: "n² + (n+1)² = 2n² + 2n + 1"
    }
  }
];

export default squarePatterns;
