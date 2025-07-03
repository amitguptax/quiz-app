const angleSumExterior = [
  {
    id: 1,
    question: {
      en: "What is the sum of exterior angles of any polygon?",
      hi: "किसी भी बहुभुज के बाहरी कोणों का योग कितना होता है?"
    },
    options: ["90°", "180°", "360°", "Depends on sides"],
    answer: "360°",
    explanation: {
      en: "The sum of exterior angles of any polygon is always 360°, regardless of the number of sides.",
      hi: "किसी भी बहुभुज के बाहरी कोणों का योग हमेशा 360° होता है, भले ही भुजाओं की संख्या कुछ भी हो।"
    }
  },
  {
    id: 2,
    question: {
      en: "If a regular polygon has each exterior angle of 60°, how many sides does it have?",
      hi: "यदि एक नियमित बहुभुज का प्रत्येक बाहरी कोण 60° है, तो उसमें कितनी भुजाएँ होंगी?"
    },
    options: ["3", "5", "6", "7"],
    answer: "6",
    explanation: {
      en: "360° ÷ 60° = 6 sides",
      hi: "360° ÷ 60° = 6 भुजाएँ"
    }
  },
  {
    id: 3,
    question: {
      en: "Each exterior angle of a regular polygon is 45°. Find the number of sides.",
      hi: "यदि किसी नियमित बहुभुज का प्रत्येक बाहरी कोण 45° है, तो उसकी भुजाओं की संख्या ज्ञात करें।"
    },
    options: ["6", "8", "9", "10"],
    answer: "8",
    explanation: {
      en: "360 ÷ 45 = 8 sides",
      hi: "360 ÷ 45 = 8 भुजाएँ"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the measure of one exterior angle of a regular pentagon?",
      hi: "एक नियमित पंचभुज के एक बाहरी कोण का मान क्या है?"
    },
    options: ["60°", "72°", "90°", "108°"],
    answer: "72°",
    explanation: {
      en: "360° ÷ 5 = 72°",
      hi: "360° ÷ 5 = 72°"
    }
  },
  {
    id: 5,
    question: {
      en: "If a polygon has 12 sides, what is the measure of each exterior angle (regular)?",
      hi: "यदि किसी नियमित बहुभुज में 12 भुजाएँ हैं, तो प्रत्येक बाहरी कोण का मान क्या होगा?"
    },
    options: ["30°", "60°", "36°", "45°"],
    answer: "30°",
    explanation: {
      en: "360° ÷ 12 = 30°",
      hi: "360° ÷ 12 = 30°"
    }
  },
  {
    id: 6,
    question: {
      en: "Exterior angle and interior angle are:",
      hi: "बाहरी कोण और आंतरिक कोण कैसे होते हैं?"
    },
    options: [
      "Complementary",
      "Equal",
      "Supplementary",
      "None of these"
    ],
    answer: "Supplementary",
    explanation: {
      en: "Exterior and interior angles form a straight line: they add up to 180°.",
      hi: "बाहरी और आंतरिक कोण मिलाकर 180° होते हैं, इसलिए वे पूरक होते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "If one exterior angle of a regular polygon is 120°, can the polygon exist?",
      hi: "यदि किसी नियमित बहुभुज का एक बाहरी कोण 120° है, तो क्या ऐसा बहुभुज संभव है?"
    },
    options: ["Yes", "No", "Only for triangle", "Only for hexagon"],
    answer: "Yes",
    explanation: {
      en: "Yes, 360 ÷ 120 = 3 sides ⇒ Triangle is possible",
      hi: "हाँ, 360 ÷ 120 = 3 ⇒ त्रिभुज संभव है"
    }
  },
  {
    id: 8,
    question: {
      en: "Which formula helps calculate each exterior angle of a regular polygon?",
      hi: "किस सूत्र से नियमित बहुभुज के प्रत्येक बाहरी कोण की गणना की जाती है?"
    },
    options: [
      "180 ÷ n",
      "360 ÷ n",
      "n × 180",
      "(n-2) × 180"
    ],
    answer: "360 ÷ n",
    explanation: {
      en: "Each exterior angle = 360 ÷ n (where n is number of sides)",
      hi: "प्रत्येक बाहरी कोण = 360 ÷ n (जहाँ n भुजाओं की संख्या है)"
    }
  },
  {
    id: 9,
    question: {
      en: "How many exterior angles does a quadrilateral have?",
      hi: "एक चतुर्भुज में कितने बाहरी कोण होते हैं?"
    },
    options: ["3", "4", "5", "6"],
    answer: "4",
    explanation: {
      en: "A quadrilateral has 4 sides, hence 4 exterior angles.",
      hi: "चतुर्भुज में 4 भुजाएँ होती हैं, इसलिए 4 बाहरी कोण होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "If one angle is 90°, what is its exterior angle?",
      hi: "यदि किसी कोण का मान 90° है, तो उसका बाहरी कोण क्या होगा?"
    },
    options: ["90°", "180°", "270°", "360°"],
    answer: "90°",
    explanation: {
      en: "Exterior angle = 180° - Interior angle = 180 - 90 = 90°",
      hi: "बाहरी कोण = 180° - आंतरिक कोण = 180 - 90 = 90°"
    }
  }
];

export default angleSumExterior;
