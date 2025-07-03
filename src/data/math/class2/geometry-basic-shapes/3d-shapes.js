const questions = [
  {
    question: {
      en: "Which 3D shape is like a ball?",
      hi: "कौन-सी 3D आकृति गेंद जैसी होती है?"
    },
    options: [
      { en: "Sphere", hi: "गोला" },
      { en: "Cube", hi: "घन" },
      { en: "Cone", hi: "शंकु" },
      { en: "Cylinder", hi: "बेलन" }
    ],
    correct: { en: "Sphere", hi: "गोला" },
    explanation: {
      en: "A sphere is round like a ball.",
      hi: "गोला एक गेंद जैसा गोल होता है।"
    }
  },
  {
    question: {
      en: "Which shape has 6 flat square faces?",
      hi: "किस आकृति में 6 समतल वर्गाकार सतहें होती हैं?"
    },
    options: [
      { en: "Cube", hi: "घन" },
      { en: "Cone", hi: "शंकु" },
      { en: "Sphere", hi: "गोला" },
      { en: "Cylinder", hi: "बेलन" }
    ],
    correct: { en: "Cube", hi: "घन" },
    explanation: {
      en: "A cube has 6 flat square faces.",
      hi: "घन में 6 समतल वर्गाकार सतहें होती हैं।"
    }
  },
  {
    question: {
      en: "Which shape looks like an ice-cream cone?",
      hi: "कौन-सी आकृति आइसक्रीम कोन जैसी दिखती है?"
    },
    options: [
      { en: "Cone", hi: "शंकु" },
      { en: "Sphere", hi: "गोला" },
      { en: "Cube", hi: "घन" },
      { en: "Cylinder", hi: "बेलन" }
    ],
    correct: { en: "Cone", hi: "शंकु" },
    explanation: {
      en: "A cone has a circular base and a pointed top like an ice-cream cone.",
      hi: "शंकु में एक गोल आधार और एक नुकीला सिरा होता है, जैसे आइसक्रीम कोन।"
    }
  },
  {
    question: {
      en: "Which shape is like a can?",
      hi: "कौन-सी आकृति एक कैन जैसी होती है?"
    },
    options: [
      { en: "Cylinder", hi: "बेलन" },
      { en: "Cube", hi: "घन" },
      { en: "Cone", hi: "शंकु" },
      { en: "Sphere", hi: "गोला" }
    ],
    correct: { en: "Cylinder", hi: "बेलन" },
    explanation: {
      en: "A cylinder has two flat circular faces and one curved surface.",
      hi: "बेलन में दो समतल गोल सतहें और एक वक्र सतह होती है।"
    }
  },
  {
    question: {
      en: "How many faces does a cube have?",
      hi: "घन में कितनी सतहें होती हैं?"
    },
    options: [
      { en: "6", hi: "6" },
      { en: "4", hi: "4" },
      { en: "3", hi: "3" },
      { en: "8", hi: "8" }
    ],
    correct: { en: "6", hi: "6" },
    explanation: {
      en: "A cube has 6 flat square faces.",
      hi: "घन में 6 समतल वर्ग सतहें होती हैं।"
    }
  },
  {
    question: {
      en: "Which shape has only one curved surface and one flat face?",
      hi: "किस आकृति में केवल एक वक्र सतह और एक समतल सतह होती है?"
    },
    options: [
      { en: "Cone", hi: "शंकु" },
      { en: "Cube", hi: "घन" },
      { en: "Cylinder", hi: "बेलन" },
      { en: "Sphere", hi: "गोला" }
    ],
    correct: { en: "Cone", hi: "शंकु" },
    explanation: {
      en: "A cone has one flat circular base and one curved surface.",
      hi: "शंकु में एक समतल गोल आधार और एक वक्र सतह होती है।"
    }
  },
  {
    question: {
      en: "Which shape rolls and has no corners?",
      hi: "कौन-सी आकृति लुढ़कती है और उसमें कोई कोना नहीं होता?"
    },
    options: [
      { en: "Sphere", hi: "गोला" },
      { en: "Cube", hi: "घन" },
      { en: "Cylinder", hi: "बेलन" },
      { en: "Cone", hi: "शंकु" }
    ],
    correct: { en: "Sphere", hi: "गोला" },
    explanation: {
      en: "A sphere rolls easily and has no corners or edges.",
      hi: "गोला आसानी से लुढ़कता है और इसमें कोई कोना या धार नहीं होती।"
    }
  },
  {
    question: {
      en: "Which shape has two circular faces?",
      hi: "किस आकृति में दो गोल सतहें होती हैं?"
    },
    options: [
      { en: "Cylinder", hi: "बेलन" },
      { en: "Cube", hi: "घन" },
      { en: "Sphere", hi: "गोला" },
      { en: "Cone", hi: "शंकु" }
    ],
    correct: { en: "Cylinder", hi: "बेलन" },
    explanation: {
      en: "A cylinder has two flat circular faces and one curved face.",
      hi: "बेलन में दो गोल समतल सतहें और एक वक्र सतह होती है।"
    }
  },
  {
    question: {
      en: "Which of these 3D shapes has only one face?",
      hi: "इनमें से किस 3D आकृति में केवल एक सतह होती है?"
    },
    options: [
      { en: "Sphere", hi: "गोला" },
      { en: "Cube", hi: "घन" },
      { en: "Cone", hi: "शंकु" },
      { en: "Cylinder", hi: "बेलन" }
    ],
    correct: { en: "Sphere", hi: "गोला" },
    explanation: {
      en: "A sphere has one curved surface and no edges or corners.",
      hi: "गोले में केवल एक वक्र सतह होती है, कोई कोना या धार नहीं होती।"
    }
  },
  {
    question: {
      en: "Which shape can both roll and slide?",
      hi: "कौन-सी आकृति लुढ़क भी सकती है और फिसल भी सकती है?"
    },
    options: [
      { en: "Cylinder", hi: "बेलन" },
      { en: "Cube", hi: "घन" },
      { en: "Sphere", hi: "गोला" },
      { en: "Cone", hi: "शंकु" }
    ],
    correct: { en: "Cylinder", hi: "बेलन" },
    explanation: {
      en: "A cylinder can roll on its side and slide on its flat face.",
      hi: "बेलन अपने वक्र भाग पर लुढ़क सकता है और समतल भाग पर फिसल सकता है।"
    }
  }
];

export default { questions };
