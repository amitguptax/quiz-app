const questions = [
  {
    question: {
      en: "Which of the following is a 3-D shape?",
      hi: "निम्न में से कौन एक 3‑D आकृति है?"
    },
    options: ["Circle", "Square", "Sphere", "Triangle"],
    correct: { en: "Sphere", hi: "गोला" },
    explanation: {
      en: "Sphere is a 3-D shape because it has volume.",
      hi: "गोला एक 3‑D आकृति है क्योंकि इसमें आयतन होता है।"
    }
  },
  {
    question: {
      en: "How many faces does a cube have?",
      hi: "घन के कितने फलक होते हैं?"
    },
    options: ["4", "5", "6", "8"],
    correct: { en: "6", hi: "6" },
    explanation: {
      en: "A cube has 6 equal square faces.",
      hi: "घन के 6 समान वर्गाकार फलक होते हैं।"
    }
  },
  {
    question: {
      en: "Which 3-D shape has a circular base and one curved surface?",
      hi: "कौन सी 3‑D आकृति में एक गोल आधार और एक वक्र सतह होती है?"
    },
    options: ["Cylinder", "Cube", "Cuboid", "Cone"],
    correct: { en: "Cone", hi: "शंकु" },
    explanation: {
      en: "A cone has one circular base and one curved surface.",
      hi: "शंकु में एक गोल आधार और एक वक्र सतह होती है।"
    }
  },
  {
    question: {
      en: "Which 3-D shape has two circular faces and one curved surface?",
      hi: "किस 3‑D आकृति में दो गोल फलक और एक वक्र सतह होती है?"
    },
    options: ["Cone", "Cylinder", "Cube", "Sphere"],
    correct: { en: "Cylinder", hi: "बेलन" },
    explanation: {
      en: "A cylinder has 2 circular faces and 1 curved surface.",
      hi: "बेलन में दो गोल फलक और एक वक्र सतह होती है।"
    }
  },
  {
    question: {
      en: "Which of these does NOT have any edges?",
      hi: "इनमें से किसमें कोई कोना या धार नहीं होती?"
    },
    options: ["Cuboid", "Cone", "Sphere", "Cylinder"],
    correct: { en: "Sphere", hi: "गोला" },
    explanation: {
      en: "Sphere has no edges or vertices.",
      hi: "गोले में कोई धार या कोना नहीं होता।"
    }
  },
  {
    question: {
      en: "A cuboid is different from a cube because:",
      hi: "घनाभ घन से अलग होता है क्योंकि:"
    },
    options: [
      "It has curved surfaces",
      "All faces are equal",
      "It has rectangular faces",
      "It is round"
    ],
    correct: { en: "It has rectangular faces", hi: "इसमें आयताकार फलक होते हैं" },
    explanation: {
      en: "Cuboid has rectangular faces; cube has square faces.",
      hi: "घनाभ में आयताकार फलक होते हैं जबकि घन में वर्गाकार।"
    }
  },
  {
    question: {
      en: "Which shape has only one vertex?",
      hi: "किस आकृति में केवल एक कोना होता है?"
    },
    options: ["Cone", "Sphere", "Cube", "Cylinder"],
    correct: { en: "Cone", hi: "शंकु" },
    explanation: {
      en: "A cone has one vertex at its tip.",
      hi: "शंकु में सिरे पर एक कोना होता है।"
    }
  },
  {
    question: {
      en: "How many edges does a cylinder have?",
      hi: "बेलन में कितनी धारें होती हैं?"
    },
    options: ["0", "1", "2", "3"],
    correct: { en: "2", hi: "2" },
    explanation: {
      en: "A cylinder has 2 circular edges.",
      hi: "बेलन में दो गोल धारें होती हैं।"
    }
  },
  {
    question: {
      en: "Which of these shapes can roll easily?",
      hi: "इनमें से कौन सी आकृति आसानी से लुढ़क सकती है?"
    },
    options: ["Cube", "Cuboid", "Cone", "Cylinder"],
    correct: { en: "Cylinder", hi: "बेलन" },
    explanation: {
      en: "Cylinder can roll because of its curved surface.",
      hi: "बेलन अपनी वक्र सतह के कारण लुढ़क सकता है।"
    }
  },
  {
    question: {
      en: "Which 3-D shape has all flat square faces?",
      hi: "किस 3‑D आकृति के सभी फलक सपाट वर्गाकार होते हैं?"
    },
    options: ["Cube", "Sphere", "Cone", "Cylinder"],
    correct: { en: "Cube", hi: "घन" },
    explanation: {
      en: "A cube has 6 flat square faces.",
      hi: "घन के सभी 6 फलक सपाट वर्गाकार होते हैं।"
    }
  }
];

export default { questions };
