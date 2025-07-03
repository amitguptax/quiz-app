const countVerticesEdgesFaces = {
  questions: [
    {
      id: 1,
      question: {
        en: "How many faces does a cube have?",
        hi: "घन में कितनी सतहें होती हैं?"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "6", hi: "6" },
        { en: "8", hi: "8" },
        { en: "12", hi: "12" }
      ],
      correct: {
        en: "6",
        hi: "6"
      },
      explanation: {
        en: "A cube has 6 flat square faces.",
        hi: "घन में 6 समतल वर्गाकार सतहें होती हैं।"
      }
    },
    {
      id: 2,
      question: {
        en: "How many edges does a cube have?",
        hi: "घन में कितने किनारे होते हैं?"
      },
      options: [
        { en: "8", hi: "8" },
        { en: "10", hi: "10" },
        { en: "12", hi: "12" },
        { en: "6", hi: "6" }
      ],
      correct: {
        en: "12",
        hi: "12"
      },
      explanation: {
        en: "A cube has 12 straight edges.",
        hi: "घन में 12 सीधे किनारे होते हैं।"
      }
    },
    {
      id: 3,
      question: {
        en: "How many vertices does a cube have?",
        hi: "घन में कितने कोने होते हैं?"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "8", hi: "8" },
        { en: "4", hi: "4" },
        { en: "10", hi: "10" }
      ],
      correct: {
        en: "8",
        hi: "8"
      },
      explanation: {
        en: "A cube has 8 vertices or corners.",
        hi: "घन में 8 कोने होते हैं।"
      }
    },
    {
      id: 4,
      question: {
        en: "How many faces does a cone have?",
        hi: "शंकु में कितनी सतहें होती हैं?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "0", hi: "0" }
      ],
      correct: {
        en: "2",
        hi: "2"
      },
      explanation: {
        en: "A cone has 1 flat face and 1 curved surface.",
        hi: "शंकु में 1 समतल और 1 घुमावदार सतह होती है।"
      }
    },
    {
      id: 5,
      question: {
        en: "How many vertices does a cone have?",
        hi: "शंकु में कितने कोने होते हैं?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" }
      ],
      correct: {
        en: "1",
        hi: "1"
      },
      explanation: {
        en: "A cone has 1 vertex at the tip.",
        hi: "शंकु की नोक पर 1 कोना होता है।"
      }
    },
    {
      id: 6,
      question: {
        en: "How many edges does a cone have?",
        hi: "शंकु में कितने किनारे होते हैं?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "0", hi: "0" },
        { en: "3", hi: "3" }
      ],
      correct: {
        en: "1",
        hi: "1"
      },
      explanation: {
        en: "A cone has 1 edge where the curved surface meets the base.",
        hi: "शंकु में 1 किनारा होता है जहाँ घुमावदार सतह आधार से मिलती है।"
      }
    },
    {
      id: 7,
      question: {
        en: "How many faces does a cylinder have?",
        hi: "बेलन में कितनी सतहें होती हैं?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "0", hi: "0" }
      ],
      correct: {
        en: "3",
        hi: "3"
      },
      explanation: {
        en: "A cylinder has 2 flat circular faces and 1 curved face.",
        hi: "बेलन में 2 समतल गोलाकार सतहें और 1 घुमावदार सतह होती है।"
      }
    },
    {
      id: 8,
      question: {
        en: "How many vertices does a sphere have?",
        hi: "गोले में कितने कोने होते हैं?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "2", hi: "2" },
        { en: "4", hi: "4" }
      ],
      correct: {
        en: "0",
        hi: "0"
      },
      explanation: {
        en: "A sphere is perfectly round and has no vertices.",
        hi: "गोला पूरी तरह से गोल होता है और इसमें कोई कोना नहीं होता।"
      }
    },
    {
      id: 9,
      question: {
        en: "Which shape has 6 faces, 8 vertices and 12 edges?",
        hi: "किस आकृति में 6 सतहें, 8 कोने और 12 किनारे होते हैं?"
      },
      options: [
        { en: "Sphere", hi: "गोला" },
        { en: "Cube", hi: "घन" },
        { en: "Cone", hi: "शंकु" },
        { en: "Cylinder", hi: "बेलन" }
      ],
      correct: {
        en: "Cube",
        hi: "घन"
      },
      explanation: {
        en: "A cube has all these properties: 6 faces, 8 vertices, and 12 edges.",
        hi: "घन में 6 सतहें, 8 कोने और 12 किनारे होते हैं।"
      }
    },
    {
      id: 10,
      question: {
        en: "How many curved surfaces does a sphere have?",
        hi: "गोले में कितनी घुमावदार सतहें होती हैं?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "0", hi: "0" },
        { en: "3", hi: "3" }
      ],
      correct: {
        en: "1",
        hi: "1"
      },
      explanation: {
        en: "A sphere has one continuous curved surface.",
        hi: "गोले में एक लगातार घुमावदार सतह होती है।"
      }
    }
  ]
};

export default countVerticesEdgesFaces;