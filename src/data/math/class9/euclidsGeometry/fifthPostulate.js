const fifthPostulate = [
  {
    question: {
      en: "What does Euclid’s Fifth Postulate deal with?",
      hi: "यूक्लिड का पाँचवाँ पोस्टुलेट किससे संबंधित है?"
    },
    options: {
      a: { en: "Circle construction", hi: "वृत्त निर्माण" },
      b: { en: "Parallel lines", hi: "समांतर रेखाएँ" },
      c: { en: "Right angles", hi: "समकोण" },
      d: { en: "Intersecting arcs", hi: "प्रतिच्छेद वक्र" }
    },
    answer: "b",
    explanation: {
      en: "The fifth postulate talks about lines intersected by a transversal and parallelism."
    }
  },
  {
    question: {
      en: "Which condition implies lines are parallel in Fifth Postulate?",
      hi: "पाँचवे पोस्टुलेट में कौन सी स्थिति रेखाओं के समांतर होने का संकेत देती है?"
    },
    options: {
      a: { en: "Sum of interior angles < 180°", hi: "आंतरिक कोणों का योग < 180°" },
      b: { en: "Sum of interior angles = 180°", hi: "आंतरिक कोणों का योग = 180°" },
      c: { en: "Sum of interior angles > 180°", hi: "आंतरिक कोणों का योग > 180°" },
      d: { en: "Exterior angles add to 180°", hi: "बाहरी कोणों का योग 180° होता है" }
    },
    answer: "b",
    explanation: {
      en: "Fifth Postulate states: If interior angles on the same side equal 180°, lines don’t meet."
    }
  },
  {
    question: {
      en: "Who provided an equivalent to Euclid’s Fifth Postulate?",
      hi: "यूक्लिड के पाँचवे पोस्टुलेट का समतुल्य किसने दिया?"
    },
    options: {
      a: { en: "Pythagoras", hi: "पाइथागोरस" },
      b: { en: "John Playfair", hi: "जॉन प्लेफेयर" },
      c: { en: "Euler", hi: "यूलर" },
      d: { en: "Newton", hi: "न्यूटन" }
    },
    answer: "b",
    explanation: {
      en: "Playfair's axiom is an equivalent of Euclid’s fifth postulate."
    }
  },
  {
    question: {
      en: "Playfair’s Axiom says:",
      hi: "प्लेफेयर का स्वयंसिद्ध क्या कहता है?"
    },
    options: {
      a: { en: "One and only one line can be drawn parallel to a given line through a point not on it.", hi: "एक रेखा के बाहर एक बिंदु से उस रेखा के समानांतर केवल एक रेखा खींची जा सकती है।" },
      b: { en: "Many lines are possible through any point.", hi: "किसी बिंदु से कई रेखाएँ संभव हैं।" },
      c: { en: "No lines are possible from a point.", hi: "किसी बिंदु से कोई रेखा नहीं खींची जा सकती।" },
      d: { en: "All lines are curved.", hi: "सभी रेखाएँ वक्र होती हैं।" }
    },
    answer: "a",
    explanation: {
      en: "Playfair’s Axiom simplifies Euclid's fifth postulate."
    }
  },
  {
    question: {
      en: "Which geometry does not follow Euclid’s Fifth Postulate?",
      hi: "कौन सी ज्यामिति यूक्लिड के पाँचवे पोस्टुलेट का पालन नहीं करती?"
    },
    options: {
      a: { en: "Non-Euclidean", hi: "गैर-यूक्लिडीय" },
      b: { en: "Plane", hi: "समतल" },
      c: { en: "Solid", hi: "ठोस" },
      d: { en: "Coordinate", hi: "निर्देशांक" }
    },
    answer: "a",
    explanation: {
      en: "Non-Euclidean geometry arises from altering the Fifth Postulate."
    }
  },
  // Add 5 more if needed
    {
    question: {
      en: "What does the Fifth Postulate help determine in geometry?",
      hi: "पाँचवाँ पोस्टुलेट ज्यामिति में किसका निर्धारण करने में मदद करता है?"
    },
    options: {
      a: { en: "Congruence of triangles", hi: "त्रिभुजों की सर्वांगसमता" },
      b: { en: "Parallelism of lines", hi: "रेखाओं की समांतरता" },
      c: { en: "Area of figures", hi: "आकृतियों का क्षेत्रफल" },
      d: { en: "Angle bisectors", hi: "कोण द्विभाजक" }
    },
    answer: "b",
    explanation: {
      en: "The Fifth Postulate deals with the condition under which two lines are parallel."
    }
  },
  {
    question: {
      en: "Which of the following is true according to the Fifth Postulate?",
      hi: "निम्न में से कौन पाँचवे पोस्टुलेट के अनुसार सही है?"
    },
    options: {
      a: { en: "Lines intersect if interior angles sum to 180°", hi: "यदि आंतरिक कोणों का योग 180° हो तो रेखाएँ प्रतिछेद करेंगी" },
      b: { en: "Lines are always parallel", hi: "रेखाएँ हमेशा समांतर होती हैं" },
      c: { en: "Lines never intersect", hi: "रेखाएँ कभी प्रतिछेद नहीं करतीं" },
      d: { en: "Lines do not intersect if interior angles sum to 180°", hi: "यदि आंतरिक कोणों का योग 180° हो तो रेखाएँ प्रतिछेद नहीं करतीं" }
    },
    answer: "d",
    explanation: {
      en: "The Fifth Postulate says if angles on the same side of a transversal sum to 180°, lines are parallel and do not meet."
    }
  },
  {
    question: {
      en: "Why is the Fifth Postulate considered unique?",
      hi: "पाँचवाँ पोस्टुलेट अद्वितीय क्यों माना जाता है?"
    },
    options: {
      a: { en: "It is not used in geometry", hi: "यह ज्यामिति में उपयोग नहीं होता" },
      b: { en: "It can be proved", hi: "यह सिद्ध किया जा सकता है" },
      c: { en: "It is longer and less intuitive than other postulates", hi: "यह अन्य पोस्टुलेट्स की तुलना में लंबा और कम स्पष्ट है" },
      d: { en: "It is the first axiom", hi: "यह पहला स्वयंसिद्ध है" }
    },
    answer: "c",
    explanation: {
      en: "It is considered unique because it is more complex and less intuitive than the first four postulates."
    }
  },
  {
    question: {
      en: "What did mathematicians attempt with the Fifth Postulate?",
      hi: "गणितज्ञों ने पाँचवे पोस्टुलेट के साथ क्या प्रयास किया?"
    },
    options: {
      a: { en: "Tried to remove it from geometry", hi: "ज्यामिति से इसे हटाने की कोशिश की" },
      b: { en: "Tried to prove it using other postulates", hi: "अन्य पोस्टुलेट्स का उपयोग कर इसे सिद्ध करने की कोशिश की" },
      c: { en: "Ignored its use", hi: "इसका उपयोग नकारा" },
      d: { en: "Used it in all theorems", hi: "इसे सभी प्रमेयों में उपयोग किया" }
    },
    answer: "b",
    explanation: {
      en: "Mathematicians tried for centuries to prove it using the first four postulates but failed."
    }
  },
  {
    question: {
      en: "Which pair of angles leads to the Fifth Postulate condition?",
      hi: "किस कोणों की जोड़ी से पाँचवे पोस्टुलेट की स्थिति उत्पन्न होती है?"
    },
    options: {
      a: { en: "Vertically opposite angles", hi: "लंबवत विपरीत कोण" },
      b: { en: "Corresponding angles", hi: "सन्निकट कोण" },
      c: { en: "Alternate interior angles", hi: "वैकल्पिक आंतरिक कोण" },
      d: { en: "Interior angles on the same side of transversal", hi: "एक ही पक्ष की आंतरिक कोण" }
    },
    answer: "d",
    explanation: {
      en: "If interior angles on the same side of the transversal sum to 180°, the lines will not meet—Fifth Postulate."
    }
  }

];
export default fifthPostulate;
