const triangleProperties = [
  {
    question: {
      en: "What is the sum of interior angles of any triangle?",
      hi: "किसी भी त्रिभुज के अंतः कोणों का योग कितना होता है?"
    },
    options: {
      a: { en: "360°", hi: "360°" },
      b: { en: "90°", hi: "90°" },
      c: { en: "180°", hi: "180°" },
      d: { en: "270°", hi: "270°" }
    },
    answer: "c",
    explanation: {
      en: "The sum of interior angles in any triangle is always 180°."
    }
  },
  {
    question: {
      en: "Which triangle has all sides of different lengths?",
      hi: "कौन सा त्रिभुज सभी भुजाओं की भिन्न लंबाई वाला होता है?"
    },
    options: {
      a: { en: "Scalene", hi: "विषमभुज त्रिभुज" },
      b: { en: "Equilateral", hi: "समभुज त्रिभुज" },
      c: { en: "Isosceles", hi: "समद्विबाहु त्रिभुज" },
      d: { en: "Right-angled", hi: "समकोण त्रिभुज" }
    },
    answer: "a",
    explanation: {
      en: "A scalene triangle has all sides and angles unequal."
    }
  },
  {
    question: {
      en: "How many medians does a triangle have?",
      hi: "किसी त्रिभुज में कितनी माध्यिकाएँ होती हैं?"
    },
    options: {
      a: { en: "2", hi: "2" },
      b: { en: "3", hi: "3" },
      c: { en: "1", hi: "1" },
      d: { en: "4", hi: "4" }
    },
    answer: "b",
    explanation: {
      en: "Each vertex of a triangle connects to the midpoint of the opposite side, forming 3 medians."
    }
  },
  {
    question: {
      en: "In an equilateral triangle, each angle measures:",
      hi: "समभुज त्रिभुज में प्रत्येक कोण कितना होता है?"
    },
    options: {
      a: { en: "45°", hi: "45°" },
      b: { en: "60°", hi: "60°" },
      c: { en: "90°", hi: "90°" },
      d: { en: "30°", hi: "30°" }
    },
    answer: "b",
    explanation: {
      en: "All angles in an equilateral triangle are equal to 60°."
    }
  },
  {
    question: {
      en: "Which triangle has at least two equal sides?",
      hi: "किस त्रिभुज की कम से कम दो भुजाएँ बराबर होती हैं?"
    },
    options: {
      a: { en: "Scalene", hi: "विषमभुज" },
      b: { en: "Isosceles", hi: "समद्विबाहु" },
      c: { en: "Equilateral", hi: "समभुज" },
      d: { en: "Right-angled", hi: "समकोण" }
    },
    answer: "b",
    explanation: {
      en: "An isosceles triangle has two sides of equal length."
    }
  },
  {
    question: {
      en: "The largest angle in a triangle is opposite to:",
      hi: "त्रिभुज में सबसे बड़ा कोण किसके विपरीत होता है?"
    },
    options: {
      a: { en: "Shortest side", hi: "सबसे छोटी भुजा" },
      b: { en: "Equal side", hi: "बराबर भुजा" },
      c: { en: "Longest side", hi: "सबसे लंबी भुजा" },
      d: { en: "Base", hi: "आधार" }
    },
    answer: "c",
    explanation: {
      en: "The angle opposite the longest side in a triangle is the largest."
    }
  },
  {
    question: {
      en: "Which triangle has one angle more than 90°?",
      hi: "किस त्रिभुज में एक कोण 90° से अधिक होता है?"
    },
    options: {
      a: { en: "Acute-angled", hi: "तीव्रकोण त्रिभुज" },
      b: { en: "Right-angled", hi: "समकोण त्रिभुज" },
      c: { en: "Obtuse-angled", hi: "अधिककोण त्रिभुज" },
      d: { en: "Equilateral", hi: "समभुज त्रिभुज" }
    },
    answer: "c",
    explanation: {
      en: "An obtuse triangle has one angle greater than 90°."
    }
  },
  {
    question: {
      en: "Which point is common to all medians of a triangle?",
      hi: "त्रिभुज की सभी माध्यिकाएँ किस बिंदु पर मिलती हैं?"
    },
    options: {
      a: { en: "Centroid", hi: "गुरुत्वकेंद्र" },
      b: { en: "Incenter", hi: "अंतःकेंद्र" },
      c: { en: "Circumcenter", hi: "परिपरिकेंद्र" },
      d: { en: "Orthocenter", hi: "लंबकेंद्र" }
    },
    answer: "a",
    explanation: {
      en: "All three medians of a triangle intersect at the centroid."
    }
  },
  {
    question: {
      en: "In a triangle, the exterior angle is equal to:",
      hi: "त्रिभुज में बाहरी कोण किसके बराबर होता है?"
    },
    options: {
      a: { en: "Sum of adjacent angle", hi: "समीपवर्ती कोण का योग" },
      b: { en: "Sum of two interior opposite angles", hi: "दो आंतरिक विपरीत कोणों का योग" },
      c: { en: "Difference of two interior angles", hi: "दो आंतरिक कोणों का अंतर" },
      d: { en: "Always 90°", hi: "हमेशा 90°" }
    },
    answer: "b",
    explanation: {
      en: "Exterior angle = sum of opposite interior angles (Exterior angle theorem)."
    }
  },
  {
    question: {
      en: "Which of the following is true about the angles of a triangle?",
      hi: "त्रिभुज के कोणों के बारे में निम्न में से कौन सा सत्य है?"
    },
    options: {
      a: { en: "All angles can be obtuse", hi: "सभी कोण अधिककोण हो सकते हैं" },
      b: { en: "All angles can be right", hi: "सभी कोण समकोण हो सकते हैं" },
      c: { en: "A triangle can have at most one obtuse angle", hi: "त्रिभुज में अधिकतम एक अधिककोण हो सकता है" },
      d: { en: "A triangle can have two right angles", hi: "त्रिभुज में दो समकोण हो सकते हैं" }
    },
    answer: "c",
    explanation: {
      en: "A triangle can have only one angle greater than 90°, as the total must be 180°."
    }
  }
];

export default triangleProperties;
