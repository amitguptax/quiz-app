const sortByShape = {
  questions: [
    {
      id: 1,
      question: {
        en: "Which object has the shape of a cube?",
        hi: "निम्न में से किस वस्तु का आकार घन (cube) जैसा है?"
      },
      options: [
        { en: "Dice", hi: "पासा" },
        { en: "Ball", hi: "गेंद" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Dice",
        hi: "पासा"
      },
      explanation: {
        en: "A dice has six equal square faces, which makes it a cube.",
        hi: "पासे के छह समान वर्गाकार फलक होते हैं, इसलिए यह घन होता है।"
      }
    },
    {
      id: 2,
      question: {
        en: "Which of the following is shaped like a sphere?",
        hi: "निम्न में से कौन वस्तु गोले (sphere) के आकार की है?"
      },
      options: [
        { en: "Ice cream cone", hi: "आइसक्रीम कोन" },
        { en: "Football", hi: "फुटबॉल" },
        { en: "Book", hi: "किताब" },
        { en: "Can", hi: "कैन" }
      ],
      correct: {
        en: "Football",
        hi: "फुटबॉल"
      },
      explanation: {
        en: "A football is round like a sphere.",
        hi: "फुटबॉल गोल होती है, जो गोले के आकार की होती है।"
      }
    },
    {
      id: 3,
      question: {
        en: "Which object is like a cone?",
        hi: "निम्न में से कौन सी वस्तु शंकु (cone) जैसी है?"
      },
      options: [
        { en: "Pencil", hi: "पेंसिल" },
        { en: "Ice cream cone", hi: "आइसक्रीम कोन" },
        { en: "Box", hi: "डिब्बा" },
        { en: "Ball", hi: "गेंद" }
      ],
      correct: {
        en: "Ice cream cone",
        hi: "आइसक्रीम कोन"
      },
      explanation: {
        en: "An ice cream cone has a pointed top and circular base, just like a cone.",
        hi: "आइसक्रीम कोन में नुकीली चोटी और गोल आधार होता है, जो शंकु जैसा होता है।"
      }
    },
    {
      id: 4,
      question: {
        en: "Which object is shaped like a cylinder?",
        hi: "निम्न में से कौन सी वस्तु बेलन के आकार की है?"
      },
      options: [
        { en: "Ball", hi: "गेंद" },
        { en: "Cold drink can", hi: "कोल्ड ड्रिंक कैन" },
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" }
      ],
      correct: {
        en: "Cold drink can",
        hi: "कोल्ड ड्रिंक कैन"
      },
      explanation: {
        en: "A cold drink can has circular top and bottom and straight sides, just like a cylinder.",
        hi: "कोल्ड ड्रिंक कैन में गोल ऊपरी और निचले भाग होते हैं और सीधे किनारे होते हैं, जो बेलन जैसा होता है।"
      }
    },
    {
      id: 5,
      question: {
        en: "A birthday hat is an example of which shape?",
        hi: "जन्मदिन की टोपी किस आकार का उदाहरण है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cylinder", hi: "बेलन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Sphere", hi: "गोला" }
      ],
      correct: {
        en: "Cone",
        hi: "शंकु"
      },
      explanation: {
        en: "Birthday hats are pointed and round at the base, shaped like a cone.",
        hi: "जन्मदिन की टोपियाँ नुकीली होती हैं और आधार पर गोल होती हैं, जो शंकु जैसी होती हैं।"
      }
    },
    {
      id: 6,
      question: {
        en: "Which shape has only curved surfaces and no edges?",
        hi: "कौन सा आकार केवल घुमावदार सतहों का होता है और किनारे नहीं होते?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Sphere",
        hi: "गोला"
      },
      explanation: {
        en: "A sphere has a smooth curved surface all around with no edges or corners.",
        hi: "गोले की सतह चारों ओर से घुमावदार होती है और इसमें कोई किनारा या कोना नहीं होता।"
      }
    },
    {
      id: 7,
      question: {
        en: "Which of the following has flat faces and straight edges?",
        hi: "निम्न में से किसमें समतल फलक और सीधे किनारे होते हैं?"
      },
      options: [
        { en: "Sphere", hi: "गोला" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cube", hi: "घन" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Cube",
        hi: "घन"
      },
      explanation: {
        en: "A cube has 6 flat faces and 12 straight edges.",
        hi: "घन में 6 समतल फलक और 12 सीधे किनारे होते हैं।"
      }
    },
    {
      id: 8,
      question: {
        en: "Which of these is not a 3D shape?",
        hi: "इनमें से कौन सा त्रिआयामी (3D) आकार नहीं है?"
      },
      options: [
        { en: "Square", hi: "वर्ग" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cube", hi: "घन" }
      ],
      correct: {
        en: "Square",
        hi: "वर्ग"
      },
      explanation: {
        en: "A square is a 2D shape. Others are 3D shapes.",
        hi: "वर्ग एक द्विआयामी (2D) आकृति है। बाकी त्रिआयामी (3D) आकृतियाँ हैं।"
      }
    },
    {
      id: 9,
      question: {
        en: "Which object is used to roll because of its shape?",
        hi: "कौन सी वस्तु अपने आकार के कारण लुढ़काई जा सकती है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" },
        { en: "Book", hi: "किताब" }
      ],
      correct: {
        en: "Cylinder",
        hi: "बेलन"
      },
      explanation: {
        en: "A cylinder can roll because it has round surfaces.",
        hi: "बेलन की सतह गोल होती है, जिससे वह लुढ़क सकता है।"
      }
    },
    {
      id: 10,
      question: {
        en: "Which object has a circular base and a pointed tip?",
        hi: "किस वस्तु का आधार गोल होता है और चोटी नुकीली होती है?"
      },
      options: [
        { en: "Cube", hi: "घन" },
        { en: "Sphere", hi: "गोला" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Cone",
        hi: "शंकु"
      },
      explanation: {
        en: "A cone has a circular base and a single pointed tip.",
        hi: "शंकु में एक गोल आधार और एक नुकीली चोटी होती है।"
      }
    }
  ]
};

export default sortByShape;
