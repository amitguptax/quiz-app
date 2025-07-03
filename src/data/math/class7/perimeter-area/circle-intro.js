const circleIntro = [
  {
    id: 1,
    question: {
      en: "What is the distance from the center of a circle to any point on its boundary called?",
      hi: "वृत्त के केंद्र से उसकी परिधि पर किसी भी बिंदु तक की दूरी को क्या कहते हैं?"
    },
    options: ["Diameter", "Radius", "Chord", "Circumference"],
    answer: "Radius",
    explanation: {
      en: "Radius is the distance from the center to the boundary of the circle.",
      hi: "त्रिज्या केंद्र से परिधि तक की दूरी होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following passes through the center and touches two points on the boundary?",
      hi: "इनमें से कौन केंद्र से होकर दो बिंदुओं को जोड़ता है जो वृत्त की परिधि पर होते हैं?"
    },
    options: ["Radius", "Chord", "Diameter", "Arc"],
    answer: "Diameter",
    explanation: {
      en: "Diameter is the longest chord passing through the center.",
      hi: "व्यास वह सबसे लंबी जीव होती है जो केंद्र से होकर गुजरती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is a line segment joining any two points on a circle called?",
      hi: "वृत्त पर किसी दो बिंदुओं को जोड़ने वाली रेखा खंड को क्या कहते हैं?"
    },
    options: ["Radius", "Chord", "Arc", "Tangent"],
    answer: "Chord",
    explanation: {
      en: "A chord connects two points on a circle.",
      hi: "वृत्त पर दो बिंदुओं को जोड़ने वाली रेखा को जीव कहते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which is the longest chord in a circle?",
      hi: "वृत्त में सबसे लंबी जीव कौन-सी होती है?"
    },
    options: ["Chord", "Radius", "Diameter", "Arc"],
    answer: "Diameter",
    explanation: {
      en: "Diameter is the longest chord and passes through the center.",
      hi: "व्यास सबसे लंबी जीव होती है और केंद्र से होकर गुजरती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the total boundary length of a circle called?",
      hi: "वृत्त की कुल परिधि को क्या कहते हैं?"
    },
    options: ["Area", "Radius", "Diameter", "Circumference"],
    answer: "Circumference",
    explanation: {
      en: "Circumference is the boundary length of a circle.",
      hi: "परिधि वृत्त की चारों ओर की कुल लंबाई होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is a part of the circle’s boundary called?",
      hi: "वृत्त की परिधि का एक भाग क्या कहलाता है?"
    },
    options: ["Sector", "Arc", "Chord", "Radius"],
    answer: "Arc",
    explanation: {
      en: "An arc is a portion of the circle's circumference.",
      hi: "वृत्त की परिधि का कोई भाग चाप कहलाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the region between two radii and an arc called?",
      hi: "दो त्रिज्याओं और एक चाप के बीच के क्षेत्र को क्या कहते हैं?"
    },
    options: ["Sector", "Segment", "Chord", "Tangent"],
    answer: "Sector",
    explanation: {
      en: "A sector is bounded by two radii and the included arc.",
      hi: "दो त्रिज्याओं और उनके बीच के चाप से बना क्षेत्र खंड कहलाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which part of the circle is bounded by a chord and an arc?",
      hi: "वृत्त का वह भाग जो एक जीव और एक चाप से घिरा होता है, क्या कहलाता है?"
    },
    options: ["Sector", "Segment", "Radius", "Diameter"],
    answer: "Segment",
    explanation: {
      en: "Segment is the region bounded by a chord and arc.",
      hi: "जीव और चाप से घिरा हुआ क्षेत्र खंड (सेगमेंट) कहलाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "If radius is 7 cm, what is the diameter?",
      hi: "यदि त्रिज्या 7 सेमी है, तो व्यास कितना होगा?"
    },
    options: ["14 cm", "3.5 cm", "10 cm", "21 cm"],
    answer: "14 cm",
    explanation: {
      en: "Diameter = 2 × radius = 2 × 7 = 14 cm.",
      hi: "व्यास = 2 × त्रिज्या = 2 × 7 = 14 सेमी।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is the formula for the circumference of a circle?",
      hi: "वृत्त की परिधि निकालने का सूत्र क्या है?"
    },
    options: ["πr²", "2πr", "πd/2", "πr/2"],
    answer: "2πr",
    explanation: {
      en: "Circumference = 2 × π × radius.",
      hi: "वृत्त की परिधि = 2 × π × त्रिज्या।"
    }
  }
];

export default circleIntro;
