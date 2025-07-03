const netsOfSolids = [
  {
    id: 1,
    question: {
      en: "What is a net of a solid shape?",
      hi: "ठोस आकृति का 'नेट' क्या होता है?"
    },
    options: [
      "A 2D pattern that can be folded into a 3D shape",
      "A type of graph",
      "A mathematical formula",
      "A curved surface"
    ],
    answer: "A 2D pattern that can be folded into a 3D shape",
    explanation: {
      en: "A net is a flat layout (2D) which folds into a 3D solid.",
      hi: "नेट एक समतल आकृति (2D) होती है जिसे मोड़कर 3D आकृति बनाया जा सकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these solids has a net made of 6 equal squares?",
      hi: "इनमें से किस ठोस आकृति का नेट 6 समान वर्गों से बना होता है?"
    },
    options: ["Cube", "Cone", "Cylinder", "Sphere"],
    answer: "Cube",
    explanation: {
      en: "A cube's net contains 6 equal square faces.",
      hi: "घन का नेट 6 समान वर्गाकार चेहरों से बना होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "How many faces are there in the net of a cuboid?",
      hi: "घनाभ के नेट में कितने चेहरे होते हैं?"
    },
    options: ["4", "5", "6", "8"],
    answer: "6",
    explanation: {
      en: "A cuboid has 6 rectangular faces in its net.",
      hi: "घनाभ के नेट में 6 आयताकार चेहरे होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which net represents a cylinder?",
      hi: "कौन सा नेट सिलेंडर को दर्शाता है?"
    },
    options: [
      "Two circles and one rectangle",
      "One circle and two rectangles",
      "Three rectangles",
      "One square and one triangle"
    ],
    answer: "Two circles and one rectangle",
    explanation: {
      en: "A cylinder's net includes 2 circular faces and a rectangular curved surface.",
      hi: "सिलेंडर के नेट में 2 गोल चेहरे और 1 आयताकार वक्र सतह होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which solid's net has only one circular face?",
      hi: "किस ठोस आकृति के नेट में केवल एक गोल चेहरा होता है?"
    },
    options: ["Cone", "Cylinder", "Sphere", "Cube"],
    answer: "Cone",
    explanation: {
      en: "A cone's net includes 1 circle and 1 sector (curved part).",
      hi: "शंकु के नेट में 1 गोल चेहरा और 1 वक्र हिस्सा होता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What does the net of a pyramid include?",
      hi: "पिरामिड का नेट किन चीजों से बना होता है?"
    },
    options: [
      "Base and triangular faces",
      "Only triangles",
      "Only squares",
      "Only circles"
    ],
    answer: "Base and triangular faces",
    explanation: {
      en: "Pyramid nets have a base (square/triangle) and multiple triangular faces.",
      hi: "पिरामिड के नेट में आधार (वर्ग/त्रिभुज) और कई त्रिभुजीय चेहरे होते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How many faces are there in a cube’s net?",
      hi: "घन के नेट में कितने चेहरे होते हैं?"
    },
    options: ["4", "5", "6", "7"],
    answer: "6",
    explanation: {
      en: "A cube always has 6 square faces in its net.",
      hi: "घन में हमेशा 6 वर्गाकार चेहरे होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which figure cannot be folded into a solid?",
      hi: "निम्न में से कौन सी आकृति को मोड़कर ठोस आकृति नहीं बनाई जा सकती?"
    },
    options: [
      "A net with overlapping parts",
      "A net with correct faces",
      "A symmetric net",
      "A proper layout of rectangles"
    ],
    answer: "A net with overlapping parts",
    explanation: {
      en: "If parts overlap, it can't fold into a valid solid.",
      hi: "अगर नेट के भाग आपस में ओवरलैप करते हैं तो वह ठोस आकृति नहीं बना सकता।"
    }
  },
  {
    id: 9,
    question: {
      en: "What does the curved rectangle represent in a cylinder’s net?",
      hi: "सिलेंडर के नेट में आयताकार भाग किसे दर्शाता है?"
    },
    options: ["Side surface", "Top", "Bottom", "Base circle"],
    answer: "Side surface",
    explanation: {
      en: "The rectangular part in the cylinder's net is its curved side when unfolded.",
      hi: "सिलेंडर के नेट में आयताकार भाग वक्र सतह को दर्शाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which shape has no valid net because it has no faces?",
      hi: "कौन सी आकृति का कोई मान्य नेट नहीं होता क्योंकि इसमें कोई चेहरा नहीं होता?"
    },
    options: ["Sphere", "Cube", "Cylinder", "Cone"],
    answer: "Sphere",
    explanation: {
      en: "A sphere has no flat faces, so no net can represent it.",
      hi: "गोले की कोई समतल सतह नहीं होती, इसलिए उसका नेट नहीं बन सकता।"
    }
  }
];

export default netsOfSolids;
