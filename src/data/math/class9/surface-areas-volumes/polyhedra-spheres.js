const polyhedraSpheres = [
  {
    question: {
      en: "What is the formula for surface area of a sphere?",
      hi: "गोले का पृष्ठ क्षेत्रफल ज्ञात करने का सूत्र क्या है?"
    },
    options: {
      a: { en: "4πr²", hi: "4πr²" },
      b: { en: "2πr²", hi: "2πr²" },
      c: { en: "πr²", hi: "πr²" },
      d: { en: "3πr²", hi: "3πr²" }
    },
    answer: "a",
    explanation: {
      en: "Surface area of a sphere = 4πr² where r is the radius."
    }
  },
  {
    question: {
      en: "What is the volume of a cylinder with radius r and height h?",
      hi: "त्रिज्या r और ऊँचाई h वाले सिलिंडर का आयतन क्या है?"
    },
    options: {
      a: { en: "πr²h", hi: "πr²h" },
      b: { en: "2πrh", hi: "2πrh" },
      c: { en: "πrh", hi: "πrh" },
      d: { en: "πr²h²", hi: "πr²h²" }
    },
    answer: "a",
    explanation: {
      en: "Volume of a cylinder = πr²h"
    }
  },
  {
    question: {
      en: "What is the surface area of a cube with side length a?",
      hi: "भुजा a वाले घन का पृष्ठ क्षेत्रफल क्या है?"
    },
    options: {
      a: { en: "6a²", hi: "6a²" },
      b: { en: "4a²", hi: "4a²" },
      c: { en: "3a²", hi: "3a²" },
      d: { en: "2a²", hi: "2a²" }
    },
    answer: "a",
    explanation: {
      en: "A cube has 6 equal square faces, so surface area = 6a²."
    }
  },
  {
    question: {
      en: "What is the volume of a cone with base radius r and height h?",
      hi: "आधार त्रिज्या r और ऊँचाई h वाले शंकु का आयतन क्या है?"
    },
    options: {
      a: { en: "(1/3)πr²h", hi: "(1/3)πr²h" },
      b: { en: "πr²h", hi: "πr²h" },
      c: { en: "(1/2)πr²h", hi: "(1/2)πr²h" },
      d: { en: "πrh", hi: "πrh" }
    },
    answer: "a",
    explanation: {
      en: "Volume of cone = (1/3)πr²h"
    }
  },
  {
    question: {
      en: "Which solid has curved and flat surfaces?",
      hi: "कौन सा ठोस वक्र और समतल दोनों सतहों वाला होता है?"
    },
    options: {
      a: { en: "Cylinder", hi: "सिलिंडर" },
      b: { en: "Sphere", hi: "गोला" },
      c: { en: "Cube", hi: "घन" },
      d: { en: "Cuboid", hi: "घनाभ" }
    },
    answer: "a",
    explanation: {
      en: "A cylinder has two flat circular ends and one curved surface."
    }
  },
  {
    question: {
      en: "Surface area of a cone includes:",
      hi: "शंकु का पृष्ठ क्षेत्रफल किन भागों को सम्मिलित करता है?"
    },
    options: {
      a: { en: "Only base", hi: "केवल आधार" },
      b: { en: "Only curved surface", hi: "केवल वक्र सतह" },
      c: { en: "Base + curved surface", hi: "आधार + वक्र सतह" },
      d: { en: "Base + height", hi: "आधार + ऊँचाई" }
    },
    answer: "c",
    explanation: {
      en: "Total surface area of cone = πrl + πr² = base + curved surface"
    }
  },
  {
    question: {
      en: "Which formula is correct for volume of a sphere?",
      hi: "गोले का आयतन ज्ञात करने का सही सूत्र कौन सा है?"
    },
    options: {
      a: { en: "(4/3)πr³", hi: "(4/3)πr³" },
      b: { en: "πr³", hi: "πr³" },
      c: { en: "2πr³", hi: "2πr³" },
      d: { en: "(3/4)πr³", hi: "(3/4)πr³" }
    },
    answer: "a",
    explanation: {
      en: "Volume of sphere = (4/3)πr³"
    }
  },
  {
    question: {
      en: "A cube and cuboid have same volume. Which has larger surface area?",
      hi: "घन और घनाभ का आयतन समान है, तो किसका पृष्ठ क्षेत्रफल अधिक होगा?"
    },
    options: {
      a: { en: "Cube", hi: "घन" },
      b: { en: "Cuboid", hi: "घनाभ" },
      c: { en: "Both same", hi: "दोनों समान" },
      d: { en: "Can’t be determined", hi: "निर्धारित नहीं किया जा सकता" }
    },
    answer: "b",
    explanation: {
      en: "For same volume, cuboid has more surface area than cube."
    }
  },
  {
    question: {
      en: "Which unit is used to measure volume?",
      hi: "आयतन मापने की इकाई क्या होती है?"
    },
    options: {
      a: { en: "cm", hi: "सेमी" },
      b: { en: "cm²", hi: "सेमी²" },
      c: { en: "cm³", hi: "सेमी³" },
      d: { en: "cm⁴", hi: "सेमी⁴" }
    },
    answer: "c",
    explanation: {
      en: "Volume is measured in cubic units like cm³."
    }
  },
  {
    question: {
      en: "Which of the following solids has only curved surface?",
      hi: "निम्न में से किस ठोस में केवल वक्र सतह होती है?"
    },
    options: {
      a: { en: "Sphere", hi: "गोला" },
      b: { en: "Cube", hi: "घन" },
      c: { en: "Cylinder", hi: "सिलिंडर" },
      d: { en: "Cuboid", hi: "घनाभ" }
    },
    answer: "a",
    explanation: {
      en: "Sphere has no flat surface, only curved surface."
    }
  }
];

export default polyhedraSpheres;
