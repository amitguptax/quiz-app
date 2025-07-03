const constrTriangle = [
  {
    id: 1,
    question: {
      en: "What is the minimum information required to construct a triangle uniquely?",
      hi: "एक त्रिभुज को अद्वितीय रूप से बनाने के लिए न्यूनतम कौन-सी जानकारी आवश्यक है?"
    },
    options: ["One side and one angle", "Three angles", "Two sides and an angle", "Three sides"],
    answer: "Three sides",
    explanation: {
      en: "Triangle can be constructed uniquely using three sides (SSS criterion).",
      hi: "त्रिभुज को तीन भुजाओं से अद्वितीय रूप से बनाया जा सकता है (SSS मानदंड)।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which condition is NOT sufficient to construct a triangle?",
      hi: "निम्न में से कौन-सी शर्त त्रिभुज निर्माण के लिए पर्याप्त नहीं है?"
    },
    options: ["SSS", "SAS", "AAA", "ASA"],
    answer: "AAA",
    explanation: {
      en: "AAA only gives shape, not size – no unique triangle is formed.",
      hi: "AAA केवल आकृति देता है, आकार नहीं – कोई अद्वितीय त्रिभुज नहीं बनता।"
    }
  },
  {
    id: 3,
    question: {
      en: "In SSS construction, what tool helps draw arcs?",
      hi: "SSS निर्माण में कौन-सा यंत्र चाप खींचने में मदद करता है?"
    },
    options: ["Protractor", "Ruler", "Compass", "Divider"],
    answer: "Compass",
    explanation: {
      en: "Compass is used to draw arcs from given side lengths.",
      hi: "दी गई भुजा की लंबाई से चाप खींचने के लिए कॉम्पास का उपयोग होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "In SAS construction, which elements are used?",
      hi: "SAS निर्माण में किन तत्वों का उपयोग होता है?"
    },
    options: ["Two sides and one angle between them", "Three sides", "Three angles", "One side and two angles"],
    answer: "Two sides and one angle between them",
    explanation: {
      en: "SAS = Side-Angle-Side; angle is between the two sides.",
      hi: "SAS में कोण दोनों भुजाओं के बीच होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which method uses two angles and one side?",
      hi: "कौन-सा तरीका दो कोण और एक भुजा का उपयोग करता है?",
    },
    options: ["SSS", "ASA", "SAS", "AAA"],
    answer: "ASA",
    explanation: {
      en: "ASA stands for Angle-Side-Angle; side is between the angles.",
      hi: "ASA का अर्थ है कोण-भुजा-कोण; भुजा दोनों कोणों के बीच होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following is a valid triangle construction criterion?",
      hi: "निम्न में से कौन-सा एक वैध त्रिभुज निर्माण मानदंड है?"
    },
    options: ["SSA", "ASA", "AAS", "AAA"],
    answer: "ASA",
    explanation: {
      en: "ASA, AAS, SSS, SAS are valid construction criteria; AAA and SSA are not.",
      hi: "ASA, AAS, SSS, SAS मान्य निर्माण मानदंड हैं; AAA और SSA नहीं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which instrument is essential for constructing accurate angles?",
      hi: "सटीक कोण बनाने के लिए कौन-सा यंत्र आवश्यक है?"
    },
    options: ["Compass", "Protractor", "Divider", "Set square"],
    answer: "Protractor",
    explanation: {
      en: "A protractor is used to construct angles of given measures.",
      hi: "प्रोट्रैक्टर से दिए गए माप के कोण बनाए जाते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the sum of all angles in a triangle?",
      hi: "किसी त्रिभुज के सभी कोणों का योग कितना होता है?"
    },
    options: ["360°", "180°", "90°", "270°"],
    answer: "180°",
    explanation: {
      en: "Angle sum property: All interior angles of a triangle add up to 180°.",
      hi: "त्रिभुज के सभी आंतरिक कोणों का योग 180° होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why is it necessary to verify triangle construction criteria?",
      hi: "त्रिभुज निर्माण मानदंडों की पुष्टि क्यों आवश्यक है?"
    },
    options: ["To draw circles", "To identify shapes", "To avoid errors", "To get symmetry"],
    answer: "To avoid errors",
    explanation: {
      en: "Using wrong criteria may result in invalid or non-unique triangles.",
      hi: "गलत मानदंड से त्रिभुज गलत या अद्वितीय नहीं बनेगा।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which is the correct order in ASA construction?",
      hi: "ASA निर्माण में सही क्रम क्या है?"
    },
    options: [
      "Angle, side, angle",
      "Side, angle, angle",
      "Angle, angle, side",
      "Side, side, angle"
    ],
    answer: "Angle, side, angle",
    explanation: {
      en: "In ASA, we use one side between two known angles to draw the triangle.",
      hi: "ASA में दो कोणों के बीच एक भुजा से त्रिभुज बनाया जाता है।"
    }
  }
];

export default constrTriangle;
