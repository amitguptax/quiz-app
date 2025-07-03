const axiomsPostulates = [
  {
    question: {
      en: "What is an axiom in geometry?",
      hi: "ज्यामिति में एक स्वयंसिद्ध (axiom) क्या होता है?"
    },
    options: {
      a: { en: "A proven fact", hi: "एक सिद्ध तथ्य" },
      b: { en: "A universal truth accepted without proof", hi: "एक सार्वभौमिक सत्य जिसे बिना प्रमाण के स्वीकार किया जाता है" },
      c: { en: "A definition", hi: "एक परिभाषा" },
      d: { en: "A theorem", hi: "एक प्रमेय" }
    },
    answer: "b",
    explanation: {
      en: "An axiom is a basic truth accepted without proof, forming the basis of reasoning."
    }
  },
  {
    question: {
      en: "Which of the following is a Euclid's postulate?",
      hi: "निम्न में से कौन यूक्लिड का पोस्टुलेट है?"
    },
    options: {
      a: { en: "Things which are equal to the same thing are equal to one another.", hi: "वे वस्तुएँ जो एक ही वस्तु के बराबर हैं, वे आपस में भी बराबर होती हैं।" },
      b: { en: "A line has no thickness.", hi: "रेखा की मोटाई नहीं होती।" },
      c: { en: "A ray has one endpoint.", hi: "किरण का एक सिरा होता है।" },
      d: { en: "The sum of angles in a triangle is 180°.", hi: "त्रिभुज में कोणों का योग 180° होता है।" }
    },
    answer: "a",
    explanation: {
      en: "This is one of Euclid’s axioms, foundational to his geometry."
    }
  },
  {
    question: {
      en: "Definitions in Euclid’s geometry describe:",
      hi: "यूक्लिड की ज्यामिति में परिभाषाएँ किसका वर्णन करती हैं?"
    },
    options: {
      a: { en: "Shapes only", hi: "केवल आकृतियाँ" },
      b: { en: "Unproven rules", hi: "असिद्ध नियम" },
      c: { en: "Basic terms like point, line, plane", hi: "मूल शब्द जैसे बिंदु, रेखा, तल" },
      d: { en: "Only angles", hi: "केवल कोण" }
    },
    answer: "c",
    explanation: {
      en: "Definitions describe basic elements like points, lines, and planes."
    }
  },
  {
    question: {
      en: "Which statement is an axiom?",
      hi: "निम्न में से कौन सा वाक्य एक स्वयंसिद्ध है?"
    },
    options: {
      a: { en: "A triangle has 3 sides.", hi: "त्रिभुज के 3 भुजाएँ होती हैं।" },
      b: { en: "If equals are added to equals, the results are equal.", hi: "यदि बराबर में बराबर जोड़े जाएँ तो परिणाम भी बराबर होते हैं।" },
      c: { en: "The angle in a semicircle is a right angle.", hi: "अर्धवृत्त में कोण समकोण होता है।" },
      d: { en: "Alternate angles are equal.", hi: "वैकल्पिक कोण बराबर होते हैं।" }
    },
    answer: "b",
    explanation: {
      en: "This is a basic accepted truth, i.e., an axiom."
    }
  },
  {
    question: {
      en: "Postulates are specifically related to:",
      hi: "पोस्टुलेट विशेष रूप से किससे संबंधित होते हैं?"
    },
    options: {
      a: { en: "Lines and geometry constructions", hi: "रेखाओं और ज्यामितीय निर्माणों से" },
      b: { en: "Numbers", hi: "संख्याएँ" },
      c: { en: "Angles", hi: "कोण" },
      d: { en: "Measurements", hi: "माप" }
    },
    answer: "a",
    explanation: {
      en: "Postulates describe geometrical constructions like drawing lines and circles."
    }
  },
  {
    question: {
      en: "Which is not a Euclid’s axiom?",
      hi: "निम्न में से कौन यूक्लिड का स्वयंसिद्ध नहीं है?"
    },
    options: {
      a: { en: "Whole is greater than the part.", hi: "सम्पूर्ण, भाग से बड़ा होता है।" },
      b: { en: "A circle can be drawn with any center and radius.", hi: "किसी भी केंद्र और त्रिज्या से एक वृत्त खींचा जा सकता है।" },
      c: { en: "Equal angles subtend equal arcs.", hi: "समान कोण समान चाप उत्पन्न करते हैं।" },
      d: { en: "Things equal to the same thing are equal to one another.", hi: "जो वस्तुएँ एक ही वस्तु के बराबर हैं, वे आपस में भी बराबर होती हैं।" }
    },
    answer: "c",
    explanation: {
      en: "This is a derived theorem, not a Euclid’s axiom or postulate."
    }
  },
  {
    question: {
      en: "Which of these is not assumed in Euclid's geometry?",
      hi: "निम्न में से कौन यूक्लिड की ज्यामिति में नहीं माना गया है?"
    },
    options: {
      a: { en: "A point has no size.", hi: "बिंदु का कोई आकार नहीं होता।" },
      b: { en: "A line has length but no thickness.", hi: "रेखा की लंबाई होती है, मोटाई नहीं।" },
      c: { en: "Two circles are always equal.", hi: "दो वृत्त हमेशा बराबर होते हैं।" },
      d: { en: "A line can be extended infinitely.", hi: "रेखा को अनंत तक बढ़ाया जा सकता है।" }
    },
    answer: "c",
    explanation: {
      en: "This is not a Euclidean assumption."
    }
  },
  {
    question: {
      en: "What does Postulate 1 state?",
      hi: "पोस्टुलेट 1 क्या कहता है?"
    },
    options: {
      a: { en: "A circle can be drawn with any center and radius.", hi: "किसी भी केंद्र और त्रिज्या से वृत्त बनाया जा सकता है।" },
      b: { en: "A straight line can be drawn from any point to any point.", hi: "किसी भी बिंदु से किसी अन्य बिंदु तक एक सीधी रेखा खींची जा सकती है।" },
      c: { en: "All right angles are equal.", hi: "सभी समकोण बराबर होते हैं।" },
      d: { en: "A finite line can be extended indefinitely.", hi: "एक सीमित रेखा को अनंत तक बढ़ाया जा सकता है।" }
    },
    answer: "b",
    explanation: {
      en: "Postulate 1 states that a straight line may be drawn joining any two points."
    }
  },
  {
    question: {
      en: "Which postulate allows construction of a circle?",
      hi: "वृत्त बनाने की अनुमति कौन सा पोस्टुलेट देता है?"
    },
    options: {
      a: { en: "Postulate 3", hi: "पोस्टुलेट 3" },
      b: { en: "Postulate 1", hi: "पोस्टुलेट 1" },
      c: { en: "Postulate 5", hi: "पोस्टुलेट 5" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "Postulate 3: A circle may be described with any center and distance (radius)."
    }
  },
  {
    question: {
      en: "Which of the following is a postulate related to angles?",
      hi: "निम्न में से कोणों से संबंधित कौन सा पोस्टुलेट है?"
    },
    options: {
      a: { en: "All right angles are equal to one another.", hi: "सभी समकोण एक-दूसरे के बराबर होते हैं।" },
      b: { en: "Angles at a point add to 180°.", hi: "किसी बिंदु पर बने कोणों का योग 180° होता है।" },
      c: { en: "Angles in a triangle add to 90°.", hi: "त्रिभुज में कोणों का योग 90° होता है।" },
      d: { en: "Vertical angles are equal.", hi: "विलंब कोण समान होते हैं।" }
    },
    answer: "a",
    explanation: {
      en: "Postulate 4 states all right angles are equal."
    }
  }
];
export default axiomsPostulates;
