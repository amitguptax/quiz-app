const midpointTheorem = [
  {
    question: {
      en: "What does the Midpoint Theorem state?",
      hi: "मध्यबिंदु प्रमेय क्या कहता है?"
    },
    options: {
      a: { en: "The median of a triangle is perpendicular to the base", hi: "त्रिभुज की माध्यिका आधार पर लंब होती है" },
      b: { en: "The line joining the midpoints of two sides of a triangle is parallel to the third side", hi: "त्रिभुज की दो भुजाओं के मध्यबिंदुओं को जोड़ने वाली रेखा तीसरी भुजा के समांतर होती है" },
      c: { en: "The centroid divides each median in 2:1 ratio", hi: "केन्द्रक प्रत्येक माध्यिका को 2:1 के अनुपात में विभाजित करता है" },
      d: { en: "The angle bisector divides the angle in two equal parts", hi: "कोण द्विभाजक कोण को दो बराबर भागों में बाँटता है" }
    },
    answer: "b",
    explanation: {
      en: "Midpoint Theorem: A line joining midpoints of two sides of a triangle is parallel to the third side and half of it."
    }
  },
  {
    question: {
      en: "In triangle ABC, if D and E are midpoints of AB and AC, then DE is:",
      hi: "त्रिभुज ABC में, यदि D और E क्रमशः AB और AC के मध्यबिंदु हैं, तो DE क्या होगा?"
    },
    options: {
      a: { en: "Perpendicular to BC", hi: "BC पर लंब" },
      b: { en: "Equal to BC", hi: "BC के बराबर" },
      c: { en: "Half of BC and parallel to BC", hi: "BC के समांतर और उसका आधा" },
      d: { en: "Twice of BC", hi: "BC का दुगुना" }
    },
    answer: "c",
    explanation: {
      en: "Midpoint Theorem states that DE = ½ × BC and DE ∥ BC."
    }
  },
  {
    question: {
      en: "If DE ∥ BC and D, E are midpoints of AB, AC respectively, then DE = ?",
      hi: "यदि DE ∥ BC हो और D, E क्रमशः AB, AC के मध्यबिंदु हों, तो DE = ?"
    },
    options: {
      a: { en: "BC", hi: "BC" },
      b: { en: "2 × BC", hi: "2 × BC" },
      c: { en: "½ × BC", hi: "½ × BC" },
      d: { en: "√3 × BC", hi: "√3 × BC" }
    },
    answer: "c",
    explanation: {
      en: "According to the theorem, DE = ½ × BC."
    }
  },
  {
    question: {
      en: "If DE = 6 cm and DE ∥ BC, then what is the length of BC?",
      hi: "यदि DE = 6 सेमी और DE ∥ BC है, तो BC की लंबाई क्या होगी?"
    },
    options: {
      a: { en: "3 cm", hi: "3 सेमी" },
      b: { en: "6 cm", hi: "6 सेमी" },
      c: { en: "12 cm", hi: "12 सेमी" },
      d: { en: "9 cm", hi: "9 सेमी" }
    },
    answer: "c",
    explanation: {
      en: "If DE is half of BC, then BC = 2 × DE = 12 cm."
    }
  },
  {
    question: {
      en: "Which of the following is *not* a condition of the Midpoint Theorem?",
      hi: "निम्न में से कौन मध्यबिंदु प्रमेय की शर्त नहीं है?"
    },
    options: {
      a: { en: "Triangle must be scalene", hi: "त्रिभुज अव्यव होनी चाहिए" },
      b: { en: "Points must be midpoints", hi: "बिंदु मध्यबिंदु होने चाहिए" },
      c: { en: "Line joins midpoints of two sides", hi: "रेखा दो भुजाओं के मध्यबिंदुओं को जोड़ती है" },
      d: { en: "Line is parallel to the third side", hi: "रेखा तीसरी भुजा के समांतर होती है" }
    },
    answer: "a",
    explanation: {
      en: "The triangle can be of any type. Scalene is not required."
    }
  },
  {
    question: {
      en: "What is the geometric shape formed by joining midpoints of all sides of a triangle?",
      hi: "त्रिभुज की सभी भुजाओं के मध्यबिंदुओं को जोड़ने पर कौन सा आकृति बनती है?"
    },
    options: {
      a: { en: "Another triangle", hi: "एक और त्रिभुज" },
      b: { en: "Square", hi: "वर्ग" },
      c: { en: "Parallelogram", hi: "समांतर चतुर्भुज" },
      d: { en: "Trapezium", hi: "समलंब" }
    },
    answer: "a",
    explanation: {
      en: "Joining all midpoints forms a triangle called the medial triangle."
    }
  },
  {
    question: {
      en: "What happens to the area of triangle formed by midpoints of the original triangle?",
      hi: "मूल त्रिभुज के मध्यबिंदुओं से बनी त्रिभुज का क्षेत्रफल कैसा होता है?"
    },
    options: {
      a: { en: "Equal to original", hi: "मूल त्रिभुज के बराबर" },
      b: { en: "Half of original", hi: "मूल त्रिभुज का आधा" },
      c: { en: "One-fourth of original", hi: "मूल त्रिभुज का एक-चौथाई" },
      d: { en: "Double of original", hi: "मूल त्रिभुज का दुगुना" }
    },
    answer: "c",
    explanation: {
      en: "Medial triangle formed has ¼ area of the original triangle."
    }
  },
  {
    question: {
      en: "Midpoint theorem is useful for proving which type of lines?",
      hi: "मध्यबिंदु प्रमेय किस प्रकार की रेखाओं को सिद्ध करने में सहायक है?"
    },
    options: {
      a: { en: "Parallel lines", hi: "समांतर रेखाएँ" },
      b: { en: "Perpendicular lines", hi: "लंब रेखाएँ" },
      c: { en: "Tangents", hi: "स्पर्श रेखाएँ" },
      d: { en: "Bisectors", hi: "द्विभाजक" }
    },
    answer: "a",
    explanation: {
      en: "The theorem proves that the line joining midpoints is parallel to third side."
    }
  },
  {
    question: {
      en: "Which property is used to prove the Midpoint Theorem?",
      hi: "मध्यबिंदु प्रमेय को सिद्ध करने के लिए किस गुण का उपयोग होता है?"
    },
    options: {
      a: { en: "ASA Congruence", hi: "ASA साम्यता" },
      b: { en: "SSS Congruence", hi: "SSS साम्यता" },
      c: { en: "RHS Rule", hi: "RHS नियम" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "SSS Congruence (Side-Side-Side) is used to prove the two triangles are congruent."
    }
  },
  {
    question: {
      en: "If triangle ABC has midpoints D and E on AB and AC, then triangle ADE is:",
      hi: "यदि त्रिभुज ABC में D और E क्रमशः AB और AC के मध्यबिंदु हैं, तो त्रिभुज ADE क्या कहलाती है?"
    },
    options: {
      a: { en: "Right triangle", hi: "समकोण त्रिभुज" },
      b: { en: "Medial triangle", hi: "मध्य त्रिभुज" },
      c: { en: "Scalene triangle", hi: "अव्यव त्रिभुज" },
      d: { en: "Isosceles triangle", hi: "समद्विबाहु त्रिभुज" }
    },
    answer: "b",
    explanation: {
      en: "Triangle formed by midpoints is called a medial triangle."
    }
  }
];

export default midpointTheorem;
