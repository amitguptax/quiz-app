const arcChord = [
  {
    question: {
      en: "What is a chord in a circle?",
      hi: "वृत्त में कर्ण क्या होता है?"
    },
    options: {
      a: { en: "A line touching the circle", hi: "वृत्त को स्पर्श करने वाली रेखा" },
      b: { en: "A line joining two points on the circle", hi: "वृत्त पर दो बिंदुओं को जोड़ने वाली रेखा" },
      c: { en: "A line from the center to the circle", hi: "केंद्र से वृत्त तक रेखा" },
      d: { en: "A radius", hi: "त्रिज्या" }
    },
    answer: "b",
    explanation: {
      en: "A chord joins any two points on the circle's circumference."
    }
  },
  {
    question: {
      en: "Which is the longest chord in a circle?",
      hi: "वृत्त में सबसे लंबी कर्ण कौन सी होती है?"
    },
    options: {
      a: { en: "Radius", hi: "त्रिज्या" },
      b: { en: "Tangent", hi: "स्पर्श रेखा" },
      c: { en: "Diameter", hi: "व्यास" },
      d: { en: "Arc", hi: "चाप" }
    },
    answer: "c",
    explanation: {
      en: "The diameter passes through the center and is the longest chord."
    }
  },
  {
    question: {
      en: "If two chords of a circle are equal, what can we say about their distance from the center?",
      hi: "यदि वृत्त की दो कर्णें बराबर हैं, तो वे केंद्र से किस प्रकार की दूरी पर होंगी?"
    },
    options: {
      a: { en: "Unequal distances", hi: "असमान दूरी" },
      b: { en: "Equal distances", hi: "समान दूरी" },
      c: { en: "One is at center", hi: "एक केंद्र पर होती है" },
      d: { en: "No relation", hi: "कोई संबंध नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Equal chords are equidistant from the center."
    }
  },
  {
    question: {
      en: "What is the perpendicular from the center of a circle to a chord?",
      hi: "केंद्र से कर्ण पर खींची गई लंब रेखा क्या करती है?"
    },
    options: {
      a: { en: "Bisects the chord", hi: "कर्ण को समद्विभाजित करती है" },
      b: { en: "Makes the chord smaller", hi: "कर्ण को छोटा बनाती है" },
      c: { en: "Does nothing", hi: "कुछ नहीं करती" },
      d: { en: "Increases the arc length", hi: "चाप की लंबाई बढ़ाती है" }
    },
    answer: "a",
    explanation: {
      en: "The perpendicular from the center to a chord bisects the chord."
    }
  },
  {
    question: {
      en: "What is an arc?",
      hi: "चाप क्या होती है?"
    },
    options: {
      a: { en: "Full circle", hi: "पूरा वृत्त" },
      b: { en: "Part of the circumference", hi: "परिमाप का एक भाग" },
      c: { en: "Line inside the circle", hi: "वृत्त के अंदर रेखा" },
      d: { en: "A diameter", hi: "एक व्यास" }
    },
    answer: "b",
    explanation: {
      en: "An arc is a portion of the circle’s boundary (circumference)."
    }
  },
  {
    question: {
      en: "If a chord divides a circle into two unequal parts, what is the smaller arc called?",
      hi: "यदि एक कर्ण वृत्त को दो असमान भागों में विभाजित करता है, तो छोटे भाग को क्या कहते हैं?"
    },
    options: {
      a: { en: "Major arc", hi: "प्रमुख चाप" },
      b: { en: "Minor arc", hi: "लघु चाप" },
      c: { en: "Chord", hi: "कर्ण" },
      d: { en: "Sector", hi: "वृत्त खंड" }
    },
    answer: "b",
    explanation: {
      en: "The smaller of the two arcs is called the minor arc."
    }
  },
  {
    question: {
      en: "What is the angle subtended by equal chords at the center?",
      hi: "बराबर कर्ण केंद्र पर किस प्रकार के कोण बनाते हैं?"
    },
    options: {
      a: { en: "Equal angles", hi: "समान कोण" },
      b: { en: "Right angles", hi: "समकोण" },
      c: { en: "Unequal angles", hi: "असमान कोण" },
      d: { en: "No angle", hi: "कोई कोण नहीं" }
    },
    answer: "a",
    explanation: {
      en: "Equal chords subtend equal angles at the center."
    }
  },
  {
    question: {
      en: "If a chord subtends a right angle at the center, what is its arc called?",
      hi: "यदि कोई कर्ण केंद्र पर समकोण बनाता है, तो उसकी चाप को क्या कहते हैं?"
    },
    options: {
      a: { en: "Minor arc", hi: "लघु चाप" },
      b: { en: "Major arc", hi: "प्रमुख चाप" },
      c: { en: "Quarter arc", hi: "चौथाई चाप" },
      d: { en: "Semicircular arc", hi: "अर्धवृत्ताकार चाप" }
    },
    answer: "c",
    explanation: {
      en: "An angle of 90° corresponds to a quarter of the circle."
    }
  },
  {
    question: {
      en: "Which of the following is always true?",
      hi: "निम्न में से कौन सा कथन हमेशा सत्य होता है?"
    },
    options: {
      a: { en: "Larger chords have smaller arcs", hi: "बड़े कर्णों की छोटी चापें होती हैं" },
      b: { en: "Equal chords subtend equal arcs", hi: "समान कर्ण समान चाप बनाते हैं" },
      c: { en: "Smaller chords are closer to center", hi: "छोटे कर्ण केंद्र के पास होते हैं" },
      d: { en: "Chord is always a radius", hi: "कर्ण हमेशा त्रिज्या होती है" }
    },
    answer: "b",
    explanation: {
      en: "Equal chords subtend equal arcs and equal angles at the center."
    }
  },
  {
    question: {
      en: "What happens to the length of a chord as it moves away from the center?",
      hi: "जैसे-जैसे कर्ण केंद्र से दूर होती है, उसकी लंबाई में क्या परिवर्तन होता है?"
    },
    options: {
      a: { en: "Increases", hi: "बढ़ती है" },
      b: { en: "Decreases", hi: "घटती है" },
      c: { en: "Stays same", hi: "समान रहती है" },
      d: { en: "Becomes zero", hi: "शून्य हो जाती है" }
    },
    answer: "b",
    explanation: {
      en: "As a chord moves away from the center, it becomes shorter."
    }
  }
];

export default arcChord;
