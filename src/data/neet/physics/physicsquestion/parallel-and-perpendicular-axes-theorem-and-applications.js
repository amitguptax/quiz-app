const parallelAndPerpendicularAxes = [
  {
    question: {
      en: "What does the Parallel Axis Theorem state?",
      hi: "समानांतर अक्ष प्रमेय क्या कहता है?"
    },
    options: {
      a: "I = I_cm + Md",
      b: "I = I_cm + Md²",
      c: "I = I_cm / Md",
      d: "I = I_cm × Md"
    },
    answer: "b",
    explanation: {
      en: "Parallel Axis Theorem: I = I_cm + Md²",
      hi: "समानांतर अक्ष प्रमेय: I = I_cm + Md²"
    }
  },
  {
    question: {
      en: "In Parallel Axis Theorem, 'd' represents:",
      hi: "समानांतर अक्ष प्रमेय में 'd' दर्शाता है:"
    },
    options: {
      a: "Diameter",
      b: "Distance between two axes",
      c: "Density",
      d: "Radius of gyration"
    },
    answer: "b",
    explanation: {
      en: "'d' is the perpendicular distance between the two axes.",
      hi: "'d' दो अक्षों के बीच लंबवत दूरी होती है।"
    }
  },
  {
    question: {
      en: "Perpendicular Axis Theorem is applicable for:",
      hi: "लंबवत अक्ष प्रमेय किनके लिए लागू होता है?"
    },
    options: {
      a: "1D bodies",
      b: "2D planar bodies",
      c: "3D rigid bodies",
      d: "Point masses"
    },
    answer: "b",
    explanation: {
      en: "It is valid only for 2D planar bodies.",
      hi: "यह केवल 2D समतलीय वस्तुओं के लिए मान्य है।"
    }
  },
  {
    question: {
      en: "What is the formula for Perpendicular Axis Theorem?",
      hi: "लंबवत अक्ष प्रमेय का सूत्र क्या है?"
    },
    options: {
      a: "Iz = Ix - Iy",
      b: "Iz = Ix + Iy",
      c: "Iz = Ix × Iy",
      d: "Iz = Ix / Iy"
    },
    answer: "b",
    explanation: {
      en: "Iz = Ix + Iy for a planar body.",
      hi: "समतलीय वस्तु के लिए Iz = Ix + Iy।"
    }
  },
  {
    question: {
      en: "Which theorem helps to find the moment of inertia about any axis?",
      hi: "किस प्रमेय से किसी भी अक्ष के बारे में जड़त्व आघूर्ण ज्ञात किया जा सकता है?"
    },
    options: {
      a: "Work-Energy Theorem",
      b: "Newton's Law",
      c: "Parallel Axis Theorem",
      d: "Conservation Law"
    },
    answer: "c",
    explanation: {
      en: "Parallel Axis Theorem is used to shift axis away from center of mass.",
      hi: "समानांतर अक्ष प्रमेय से अक्ष को द्रव्यमान केंद्र से स्थानांतरित किया जाता है।"
    }
  },
  {
    question: {
      en: "Perpendicular Axis Theorem is not valid for:",
      hi: "लंबवत अक्ष प्रमेय किसके लिए मान्य नहीं है?"
    },
    options: {
      a: "Circular disc",
      b: "Thin ring",
      c: "Solid sphere",
      d: "Square lamina"
    },
    answer: "c",
    explanation: {
      en: "Perpendicular Axis Theorem is only valid for 2D bodies, not 3D like solid sphere.",
      hi: "यह प्रमेय केवल 2D पिंडों पर लागू होता है, 3D जैसे ठोस गोले पर नहीं।"
    }
  },
  {
    question: {
      en: "For a disc, which theorem gives moment of inertia about edge?",
      hi: "डिस्क के किनारे के बारे में जड़त्व आघूर्ण कौन सा प्रमेय देता है?"
    },
    options: {
      a: "Parallel Axis Theorem",
      b: "Perpendicular Axis Theorem",
      c: "Kinetic Theorem",
      d: "None"
    },
    answer: "a",
    explanation: {
      en: "Use Parallel Axis Theorem: I_edge = I_cm + MR².",
      hi: "Parallel Axis Theorem से I_edge = I_cm + MR²।"
    }
  },
  {
    question: {
      en: "Ix + Iy = Iz is valid for:",
      hi: "Ix + Iy = Iz किसके लिए वैध है?"
    },
    options: {
      a: "Cylindrical rod",
      b: "Solid sphere",
      c: "2D lamina",
      d: "Point object"
    },
    answer: "c",
    explanation: {
      en: "Only 2D lamina satisfies perpendicular axis theorem.",
      hi: "केवल 2D पटल लंबवत अक्ष प्रमेय को संतुष्ट करता है।"
    }
  },
  {
    question: {
      en: "In Parallel Axis Theorem, I_cm represents:",
      hi: "समानांतर अक्ष प्रमेय में I_cm किसे दर्शाता है?"
    },
    options: {
      a: "Moment of inertia about any axis",
      b: "Moment of inertia about center of mass",
      c: "Total torque",
      d: "Rotational force"
    },
    answer: "b",
    explanation: {
      en: "I_cm is the moment of inertia about the center of mass axis.",
      hi: "I_cm द्रव्यमान केंद्र के अक्ष के बारे में जड़त्व आघूर्ण है।"
    }
  },
  {
    question: {
      en: "Which of the following is not required in Parallel Axis Theorem?",
      hi: "निम्न में से कौन Parallel Axis Theorem में आवश्यक नहीं है?"
    },
    options: {
      a: "Mass of body",
      b: "Distance between axes",
      c: "Angular velocity",
      d: "Moment of inertia about center"
    },
    answer: "c",
    explanation: {
      en: "Angular velocity is not involved in calculating moment of inertia using this theorem.",
      hi: "इस प्रमेय में कोणीय वेग शामिल नहीं होता।"
    }
  }
];

export default parallelAndPerpendicularAxes;
