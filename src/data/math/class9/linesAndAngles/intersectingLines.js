const intersectingLines = [
  {
    question: {
      en: "What are intersecting lines?",
      hi: "परस्पर रेखाएँ क्या होती हैं?"
    },
    options: {
      a: { en: "Lines that never meet", hi: "रेखाएँ जो कभी नहीं मिलतीं" },
      b: { en: "Lines that meet at exactly one point", hi: "रेखाएँ जो ठीक एक बिंदु पर मिलती हैं" },
      c: { en: "Lines with equal length", hi: "समान लंबाई वाली रेखाएँ" },
      d: { en: "Curved lines", hi: "वक्र रेखाएँ" }
    },
    answer: "b",
    explanation: {
      en: "Intersecting lines meet or cross each other at exactly one point."
    }
  },
  {
    question: {
      en: "What is formed when two lines intersect?",
      hi: "जब दो रेखाएँ प्रतिछेद करती हैं तो क्या बनता है?"
    },
    options: {
      a: { en: "A square", hi: "एक वर्ग" },
      b: { en: "An angle", hi: "एक कोण" },
      c: { en: "A circle", hi: "एक वृत्त" },
      d: { en: "A triangle", hi: "एक त्रिभुज" }
    },
    answer: "b",
    explanation: {
      en: "When two lines intersect, they form one or more angles at the point of intersection."
    }
  },
  {
    question: {
      en: "Which of the following are non-intersecting lines?",
      hi: "निम्न में से कौन सी रेखाएँ परस्पर अप्रतिसँध हैं?"
    },
    options: {
      a: { en: "Parallel lines", hi: "समांतर रेखाएँ" },
      b: { en: "Perpendicular lines", hi: "लंब रेखाएँ" },
      c: { en: "Diagonal lines", hi: "विकर्ण रेखाएँ" },
      d: { en: "Tangents", hi: "स्पर्श रेखाएँ" }
    },
    answer: "a",
    explanation: {
      en: "Parallel lines never intersect and remain equidistant at all points."
    }
  },
  {
    question: {
      en: "What are perpendicular lines?",
      hi: "लंब रेखाएँ क्या होती हैं?"
    },
    options: {
      a: { en: "Lines that meet at 45°", hi: "रेखाएँ जो 45° पर मिलती हैं" },
      b: { en: "Lines that never meet", hi: "रेखाएँ जो कभी नहीं मिलतीं" },
      c: { en: "Lines that intersect at 90°", hi: "रेखाएँ जो 90° पर प्रतिछेद करती हैं" },
      d: { en: "Curved lines", hi: "वक्र रेखाएँ" }
    },
    answer: "c",
    explanation: {
      en: "Perpendicular lines intersect to form a right angle (90 degrees)."
    }
  },
  {
    question: {
      en: "If two lines intersect, how many points of intersection do they have?",
      hi: "यदि दो रेखाएँ प्रतिछेद करती हैं, तो उनके प्रतिछेदन बिंदुओं की संख्या क्या होगी?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "1", hi: "1" },
      c: { en: "2", hi: "2" },
      d: { en: "Infinite", hi: "अनंत" }
    },
    answer: "b",
    explanation: {
      en: "Two straight lines intersect at only one point unless they are the same line."
    }
  },
  {
    question: {
      en: "Which statement is true about parallel lines?",
      hi: "समांतर रेखाओं के बारे में कौन सा कथन सत्य है?"
    },
    options: {
      a: { en: "They meet at a point", hi: "वे एक बिंदु पर मिलती हैं" },
      b: { en: "They form a triangle", hi: "वे त्रिभुज बनाती हैं" },
      c: { en: "They never intersect", hi: "वे कभी प्रतिछेद नहीं करतीं" },
      d: { en: "They cross at 90°", hi: "वे 90° पर प्रतिछेद करती हैं" }
    },
    answer: "c",
    explanation: {
      en: "Parallel lines are non-intersecting lines that stay the same distance apart."
    }
  },
  {
    question: {
      en: "If two lines intersect and form equal opposite angles, what are these angles called?",
      hi: "यदि दो रेखाएँ प्रतिछेद करती हैं और विपरीत कोण समान होते हैं, तो इन्हें क्या कहते हैं?"
    },
    options: {
      a: { en: "Alternate angles", hi: "वैकल्पिक कोण" },
      b: { en: "Corresponding angles", hi: "सन्निकट कोण" },
      c: { en: "Linear pair", hi: "रेखीय युग्म" },
      d: { en: "Vertically opposite angles", hi: "लंबवत विपरीत कोण" }
    },
    answer: "d",
    explanation: {
      en: "Vertically opposite angles are equal when two lines intersect."
    }
  },
  {
    question: {
      en: "Lines that lie in different planes and never intersect are called?",
      hi: "जो रेखाएँ अलग तल में होती हैं और कभी नहीं मिलतीं, उन्हें क्या कहते हैं?"
    },
    options: {
      a: { en: "Parallel", hi: "समांतर" },
      b: { en: "Skew lines", hi: "तिर्यक रेखाएँ" },
      c: { en: "Perpendicular", hi: "लंबवत" },
      d: { en: "Curved lines", hi: "वक्र रेखाएँ" }
    },
    answer: "b",
    explanation: {
      en: "Skew lines are lines that do not lie in the same plane and never intersect."
    }
  },
  {
    question: {
      en: "What happens when two non-parallel lines are extended indefinitely?",
      hi: "जब दो गैर-समांतर रेखाएँ अनंत तक बढ़ाई जाती हैं तो क्या होता है?"
    },
    options: {
      a: { en: "They never meet", hi: "वे कभी नहीं मिलतीं" },
      b: { en: "They bend away", hi: "वे मुड़ जाती हैं" },
      c: { en: "They intersect at a point", hi: "वे एक बिंदु पर मिलती हैं" },
      d: { en: "They form a square", hi: "वे एक वर्ग बनाती हैं" }
    },
    answer: "c",
    explanation: {
      en: "If not parallel, straight lines will intersect at one point when extended."
    }
  },
  {
    question: {
      en: "What is true about the distance between two parallel lines?",
      hi: "दो समांतर रेखाओं के बीच की दूरी के बारे में क्या सत्य है?"
    },
    options: {
      a: { en: "It increases", hi: "यह बढ़ती है" },
      b: { en: "It decreases", hi: "यह घटती है" },
      c: { en: "It remains constant", hi: "यह स्थिर रहती है" },
      d: { en: "It becomes zero", hi: "यह शून्य हो जाती है" }
    },
    answer: "c",
    explanation: {
      en: "The distance between two parallel lines remains the same throughout."
    }
  }
];

export default intersectingLines;
