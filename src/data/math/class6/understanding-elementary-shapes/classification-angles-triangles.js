const classifyAnglesTriangles = [
  {
    question: {
      en: "What is a triangle with all sides equal called?",
      hi: "जिस त्रिभुज की सभी भुजाएँ बराबर हों उसे क्या कहते हैं?"
    },
    options: ["Scalene triangle", "Right triangle", "Equilateral triangle", "Isosceles triangle"],
    correct: {
      en: "Equilateral triangle",
      hi: "समभुज त्रिभुज"
    },
    explanation: {
      en: "An equilateral triangle has all three sides and angles equal.",
      hi: "समभुज त्रिभुज की सभी तीनों भुजाएँ और कोण बराबर होते हैं।"
    }
  },
  {
    question: {
      en: "What is a triangle with two equal sides called?",
      hi: "जिस त्रिभुज की दो भुजाएँ बराबर हों, उसे क्या कहते हैं?"
    },
    options: ["Scalene triangle", "Right triangle", "Equilateral triangle", "Isosceles triangle"],
    correct: {
      en: "Isosceles triangle",
      hi: "समद्विबाहु त्रिभुज"
    },
    explanation: {
      en: "An isosceles triangle has exactly two equal sides.",
      hi: "समद्विबाहु त्रिभुज में दो भुजाएँ बराबर होती हैं।"
    }
  },
  {
    question: {
      en: "Which triangle has all sides of different lengths?",
      hi: "कौन सा त्रिभुज सभी भुजाओं में भिन्न लंबाई वाला होता है?"
    },
    options: ["Equilateral", "Isosceles", "Right", "Scalene"],
    correct: {
      en: "Scalene",
      hi: "विषमभुज त्रिभुज"
    },
    explanation: {
      en: "In a scalene triangle, all sides and angles are different.",
      hi: "विषमभुज त्रिभुज में सभी भुजाएँ और कोण अलग-अलग होते हैं।"
    }
  },
  {
    question: {
      en: "A triangle with one right angle is called a:",
      hi: "जिस त्रिभुज में एक समकोण हो, वह क्या कहलाता है?"
    },
    options: ["Acute triangle", "Right triangle", "Obtuse triangle", "Equilateral triangle"],
    correct: {
      en: "Right triangle",
      hi: "समकोण त्रिभुज"
    },
    explanation: {
      en: "A right triangle has one angle equal to 90°.",
      hi: "समकोण त्रिभुज में एक कोण 90° का होता है।"
    }
  },
  {
    question: {
      en: "What do you call a triangle with one angle greater than 90°?",
      hi: "जिस त्रिभुज का एक कोण 90° से अधिक हो, उसे क्या कहते हैं?"
    },
    options: ["Right triangle", "Obtuse triangle", "Acute triangle", "Isosceles triangle"],
    correct: {
      en: "Obtuse triangle",
      hi: "सुस्त कोण त्रिभुज"
    },
    explanation: {
      en: "An obtuse triangle has one angle greater than 90°.",
      hi: "सुस्त कोण त्रिभुज में एक कोण 90° से अधिक होता है।"
    }
  },
  {
    question: {
      en: "What is a triangle called if all angles are less than 90°?",
      hi: "यदि त्रिभुज के सभी कोण 90° से कम हों तो उसे क्या कहते हैं?"
    },
    options: ["Acute triangle", "Right triangle", "Obtuse triangle", "Scalene triangle"],
    correct: {
      en: "Acute triangle",
      hi: "नुकीला त्रिभुज"
    },
    explanation: {
      en: "All angles in an acute triangle are less than 90°.",
      hi: "नुकीले त्रिभुज के सभी कोण 90° से कम होते हैं।"
    }
  },
  {
    question: {
      en: "What is the sum of all interior angles of a triangle?",
      hi: "किसी त्रिभुज के सभी आंतरिक कोणों का योग कितना होता है?"
    },
    options: ["90°", "180°", "270°", "360°"],
    correct: {
      en: "180°",
      hi: "180°"
    },
    explanation: {
      en: "The sum of all interior angles of any triangle is always 180°.",
      hi: "किसी भी त्रिभुज के सभी आंतरिक कोणों का योग हमेशा 180° होता है।"
    }
  },
  {
    question: {
      en: "Which triangle can have a 90° angle and two equal sides?",
      hi: "कौन सा त्रिभुज 90° कोण और दो बराबर भुजाओं वाला हो सकता है?"
    },
    options: ["Equilateral triangle", "Right isosceles triangle", "Scalene triangle", "Obtuse triangle"],
    correct: {
      en: "Right isosceles triangle",
      hi: "समकोण समद्विबाहु त्रिभुज"
    },
    explanation: {
      en: "A right isosceles triangle has one 90° angle and two equal sides.",
      hi: "समकोण समद्विबाहु त्रिभुज में एक समकोण और दो बराबर भुजाएँ होती हैं।"
    }
  },
  {
    question: {
      en: "Which of the following triangles has no equal sides?",
      hi: "निम्न में से किस त्रिभुज की कोई भी भुजाएँ बराबर नहीं होतीं?"
    },
    options: ["Scalene", "Equilateral", "Isosceles", "Right"],
    correct: {
      en: "Scalene",
      hi: "विषमभुज त्रिभुज"
    },
    explanation: {
      en: "A scalene triangle has no sides equal.",
      hi: "विषमभुज त्रिभुज की कोई भी भुजा बराबर नहीं होती।"
    }
  },
  {
    question: {
      en: "Which triangle has all angles equal to 60°?",
      hi: "किस त्रिभुज के सभी कोण 60° के होते हैं?"
    },
    options: ["Equilateral triangle", "Isosceles triangle", "Right triangle", "Obtuse triangle"],
    correct: {
      en: "Equilateral triangle",
      hi: "समभुज त्रिभुज"
    },
    explanation: {
      en: "An equilateral triangle has all angles equal to 60°.",
      hi: "समभुज त्रिभुज के सभी कोण 60° के होते हैं।"
    }
  }
];

export default {questions:classifyAnglesTriangles};
