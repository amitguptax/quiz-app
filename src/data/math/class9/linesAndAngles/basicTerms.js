const basicTerms = [
  {
    question: {
      en: "What is a point in geometry?",
      hi: "ज्यामिति में बिंदु क्या होता है?"
    },
    options: {
      a: { en: "A shape with length and width", hi: "एक आकृति जिसमें लंबाई और चौड़ाई होती है" },
      b: { en: "A location with no length, breadth, or thickness", hi: "एक स्थिति जिसमें लंबाई, चौड़ाई या मोटाई नहीं होती" },
      c: { en: "A small dot", hi: "एक छोटा बिंदु" },
      d: { en: "A moving particle", hi: "एक गतिशील कण" }
    },
    answer: "b",
    explanation: {
      en: "A point defines a position in space and has no dimensions (length, width, or thickness)."
    }
  },
  {
    question: {
      en: "What is a line?",
      hi: "रेखा क्या होती है?"
    },
    options: {
      a: { en: "A figure with only endpoints", hi: "केवल सिरों वाली आकृति" },
      b: { en: "A straight path extending infinitely in both directions", hi: "दोनों दिशाओं में अनंत तक फैली सीधी पथ" },
      c: { en: "A curved shape", hi: "एक वक्र आकृति" },
      d: { en: "A segment", hi: "एक खंड" }
    },
    answer: "b",
    explanation: {
      en: "A line is a straight path that extends infinitely in both directions."
    }
  },
  {
    question: {
      en: "What is a line segment?",
      hi: "रेखाखंड क्या होता है?"
    },
    options: {
      a: { en: "A line with no ends", hi: "एक रेखा जिसमें कोई छोर नहीं होता" },
      b: { en: "A part of a line with two endpoints", hi: "एक रेखा का वह भाग जिसमें दो सिरे होते हैं" },
      c: { en: "An infinite curve", hi: "अनंत वक्र" },
      d: { en: "A ray", hi: "एक किरण" }
    },
    answer: "b",
    explanation: {
      en: "A line segment is a part of a line that has two definite endpoints."
    }
  },
  {
    question: {
      en: "What is a ray?",
      hi: "किरण क्या होती है?"
    },
    options: {
      a: { en: "A line with no endpoints", hi: "एक रेखा जिसमें कोई छोर नहीं होता" },
      b: { en: "A line segment", hi: "एक रेखाखंड" },
      c: { en: "A part of a line with one endpoint", hi: "एक रेखा का वह भाग जिसमें एक छोर होता है" },
      d: { en: "A circle", hi: "एक वृत्त" }
    },
    answer: "c",
    explanation: {
      en: "A ray starts from one point and extends infinitely in one direction."
    }
  },
  {
    question: {
      en: "What is an angle formed by?",
      hi: "कोण किससे बनता है?"
    },
    options: {
      a: { en: "Two intersecting lines", hi: "दो प्रतिछेद रेखाएँ" },
      b: { en: "Two rays with a common endpoint", hi: "दो किरणें जिनका एक सामान्य छोर हो" },
      c: { en: "A triangle", hi: "एक त्रिभुज" },
      d: { en: "A circle", hi: "एक वृत्त" }
    },
    answer: "b",
    explanation: {
      en: "An angle is formed when two rays share a common endpoint."
    }
  },
  {
    question: {
      en: "What is the common endpoint of two rays called?",
      hi: "दो किरणों के सामान्य सिरे को क्या कहते हैं?"
    },
    options: {
      a: { en: "Side", hi: "भुजा" },
      b: { en: "Vertex", hi: "शीर्ष" },
      c: { en: "Angle", hi: "कोण" },
      d: { en: "Intersection", hi: "प्रतिछेदन" }
    },
    answer: "b",
    explanation: {
      en: "The vertex is the point where the two rays (arms of the angle) meet."
    }
  },
  {
    question: {
      en: "What is the length of a point?",
      hi: "बिंदु की लंबाई क्या होती है?"
    },
    options: {
      a: { en: "1 unit", hi: "1 इकाई" },
      b: { en: "0 units", hi: "0 इकाई" },
      c: { en: "2 units", hi: "2 इकाई" },
      d: { en: "Infinite", hi: "अनंत" }
    },
    answer: "b",
    explanation: {
      en: "A point has no length, breadth, or thickness—it is dimensionless."
    }
  },
  {
    question: {
      en: "Which of the following has both length and endpoints?",
      hi: "निम्न में से किसमें लंबाई और छोर दोनों होते हैं?"
    },
    options: {
      a: { en: "Point", hi: "बिंदु" },
      b: { en: "Line", hi: "रेखा" },
      c: { en: "Ray", hi: "किरण" },
      d: { en: "Line Segment", hi: "रेखाखंड" }
    },
    answer: "d",
    explanation: {
      en: "A line segment has measurable length and two endpoints."
    }
  },
  {
    question: {
      en: "Which of the following goes infinitely in both directions?",
      hi: "निम्न में से कौन दोनों दिशाओं में अनंत तक जाता है?"
    },
    options: {
      a: { en: "Ray", hi: "किरण" },
      b: { en: "Line", hi: "रेखा" },
      c: { en: "Line Segment", hi: "रेखाखंड" },
      d: { en: "Angle", hi: "कोण" }
    },
    answer: "b",
    explanation: {
      en: "A line extends infinitely in both directions without endpoints."
    }
  },
  {
    question: {
      en: "What defines a plane in geometry?",
      hi: "ज्यामिति में तल को क्या परिभाषित करता है?"
    },
    options: {
      a: { en: "A flat surface extending infinitely", hi: "एक समतल सतह जो अनंत तक फैली हो" },
      b: { en: "A thick sheet", hi: "एक मोटी परत" },
      c: { en: "A volume", hi: "एक आयतन" },
      d: { en: "A line segment", hi: "एक रेखाखंड" }
    },
    answer: "a",
    explanation: {
      en: "A plane is a flat surface that extends infinitely in all directions."
    }
  }
];

export default basicTerms;
