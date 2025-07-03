const solids = {
  label: {
    en: "Identify Solids",
    hi: "ठोस आकृतियों की पहचान करें"
  },
  questions: [
    {
      id: 1,
      question: {
        en: "Which shape is a sphere?",
        hi: "निम्न में से कौन सा आकार गोला है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Sphere",
        hi: "गोला"
      },
      explanation: {
        en: "A sphere is perfectly round like a ball.",
        hi: "गोला एकदम गोल होता है जैसे गेंद।"
      }
    },
    {
      id: 2,
      question: {
        en: "Which object rolls easily?",
        hi: "कौन सी वस्तु आसानी से लुढ़कती है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cuboid", hi: "घनाभ" },
        { en: "Cone", hi: "शंकु" }
      ],
      correct: {
        en: "Sphere",
        hi: "गोला"
      },
      explanation: {
        en: "Spheres roll smoothly due to their round shape.",
        hi: "गोल आकार के कारण गोले आसानी से लुढ़कते हैं।"
      }
    },
    {
      id: 3,
      question: {
        en: "Which solid has flat and curved surfaces?",
        hi: "किस ठोस में समतल और वक्र दोनों सतह होती हैं?"
      },
      options: [
        { en: "Sphere", hi: "गोला" },
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Cone",
        hi: "शंकु"
      },
      explanation: {
        en: "A cone has one flat and one curved surface.",
        hi: "शंकु में एक समतल और एक वक्र सतह होती है।"
      }
    },
    {
      id: 4,
      question: {
        en: "Which shape has 6 square faces?",
        hi: "किस आकार में 6 वर्गाकार सतहें होती हैं?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cuboid", hi: "घनाभ" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cone", hi: "शंकु" }
      ],
      correct: {
        en: "Cube",
        hi: "घन"
      },
      explanation: {
        en: "A cube has 6 equal square faces.",
        hi: "घन में 6 समान वर्गाकार सतहें होती हैं।"
      }
    },
    {
      id: 5,
      question: {
        en: "Which shape looks like a gas cylinder?",
        hi: "कौन सा आकार गैस सिलेंडर जैसा होता है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" },
        { en: "Sphere", hi: "गोला" }
      ],
      correct: {
        en: "Cylinder",
        hi: "बेलन"
      },
      explanation: {
        en: "Cylinders have circular bases and a curved surface.",
        hi: "बेलन में गोल आधार और वक्र सतह होती है।"
      }
    },
    {
      id: 6,
      question: {
        en: "Which object has a pointed end?",
        hi: "किस वस्तु का एक सिरा नुकीला होता है?"
      },
      options: [
        { en: "Cylinder", hi: "बेलन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cuboid", hi: "घनाभ" }
      ],
      correct: {
        en: "Cone",
        hi: "शंकु"
      },
      explanation: {
        en: "A cone has one pointed end.",
        hi: "शंकु का एक सिरा नुकीला होता है।"
      }
    },
    {
      id: 7,
      question: {
        en: "Which object is used in dice?",
        hi: "पासे में किस आकृति का उपयोग होता है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Cube",
        hi: "घन"
      },
      explanation: {
        en: "Dice are shaped like cubes with numbers on each face.",
        hi: "पासा एक घन की तरह होता है जिसमें हर सतह पर संख्या होती है।"
      }
    },
    {
      id: 8,
      question: {
        en: "Which object is like a can?",
        hi: "कौन सी वस्तु डिब्बे जैसी होती है?"
      },
      options: [
        { en: "Cone", hi: "शंकु" },
        { en: "Cuboid", hi: "घनाभ" },
        { en: "Cylinder", hi: "बेलन" },
        { en: "Sphere", hi: "गोला" }
      ],
      correct: {
        en: "Cylinder",
        hi: "बेलन"
      },
      explanation: {
        en: "Cylinders look like cans or tins.",
        hi: "बेलन डिब्बे या टिन की तरह होते हैं।"
      }
    },
    {
      id: 9,
      question: {
        en: "Which solid has no corners?",
        hi: "किस ठोस में कोई कोना नहीं होता?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Sphere",
        hi: "गोला"
      },
      explanation: {
        en: "A sphere has no corners or edges.",
        hi: "गोले में कोई कोना या किनारा नहीं होता।"
      }
    },
    {
      id: 10,
      question: {
        en: "Which solid has 8 corners?",
        hi: "किस ठोस में 8 कोने होते हैं?"
      },
      options: [
        { en: "Sphere", hi: "गोला" },
        { en: "Cylinder", hi: "बेलन" },
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" }
      ],
      correct: {
        en: "Cube",
        hi: "घन"
      },
      explanation: {
        en: "A cube has 8 corners, 6 faces and 12 edges.",
        hi: "घन में 8 कोने, 6 सतहें और 12 किनारे होते हैं।"
      }
    }
  ]
};

export default solids;
