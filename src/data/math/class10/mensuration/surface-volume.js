const surfaceVolumeSolids = [
  {
    question: {
      en: "What is the surface area of a sphere of radius r?",
      hi: "त्रिज्या r वाले गोले का पृष्ठीय क्षेत्रफल क्या होता है?"
    },
    options: {
      a: { en: "4πr²", hi: "4πr²" },
      b: { en: "2πr", hi: "2πr" },
      c: { en: "πr²", hi: "πr²" },
      d: { en: "3πr²", hi: "3πr²" }
    },
    answer: "a",
    explanation: {
      en: "Surface area of a sphere = 4πr²",
      hi: "गोले का पृष्ठीय क्षेत्रफल = 4πr² होता है।"
    }
  },
  {
    question: {
      en: "What is the volume of a cylinder of radius r and height h?",
      hi: "त्रिज्या r और ऊँचाई h वाले बेलन का आयतन क्या होगा?"
    },
    options: {
      a: { en: "πr²h", hi: "πr²h" },
      b: { en: "2πrh", hi: "2πrh" },
      c: { en: "πr²", hi: "πr²" },
      d: { en: "½πr²h", hi: "½πr²h" }
    },
    answer: "a",
    explanation: {
      en: "Volume of cylinder = πr²h",
      hi: "बेलन का आयतन = πr²h होता है।"
    }
  },
  {
    question: {
      en: "The curved surface area (CSA) of a cone is:",
      hi: "शंकु का वक्र पृष्ठीय क्षेत्रफल (CSA) क्या होता है?"
    },
    options: {
      a: { en: "πrl", hi: "πrl" },
      b: { en: "πr²", hi: "πr²" },
      c: { en: "2πr", hi: "2πr" },
      d: { en: "πrl²", hi: "πrl²" }
    },
    answer: "a",
    explanation: {
      en: "CSA of cone = πrl (r = radius, l = slant height)",
      hi: "शंकु का CSA = πrl होता है (r = त्रिज्या, l = विकर्ण ऊँचाई)।"
    }
  },
  {
    question: {
      en: "Total surface area of a hemisphere of radius r is:",
      hi: "त्रिज्या r वाले अर्धगोले का कुल पृष्ठीय क्षेत्रफल क्या होगा?"
    },
    options: {
      a: { en: "3πr²", hi: "3πr²" },
      b: { en: "2πr²", hi: "2πr²" },
      c: { en: "πr²", hi: "πr²" },
      d: { en: "4πr²", hi: "4πr²" }
    },
    answer: "a",
    explanation: {
      en: "TSA of hemisphere = 3πr² (2πr² + πr²)",
      hi: "अर्धगोले का कुल पृष्ठीय क्षेत्रफल = 3πr²"
    }
  },
  {
    question: {
      en: "Volume of a cone is:",
      hi: "शंकु का आयतन होता है:"
    },
    options: {
      a: { en: "⅓πr²h", hi: "⅓πr²h" },
      b: { en: "πr²h", hi: "πr²h" },
      c: { en: "½πr²h", hi: "½πr²h" },
      d: { en: "2πr²h", hi: "2πr²h" }
    },
    answer: "a",
    explanation: {
      en: "Volume of a cone = ⅓πr²h",
      hi: "शंकु का आयतन = ⅓πr²h होता है।"
    }
  },
  {
    question: {
      en: "The surface area of a cube with side a is:",
      hi: "भुजा a वाले घन का पृष्ठीय क्षेत्रफल क्या होता है?"
    },
    options: {
      a: { en: "6a²", hi: "6a²" },
      b: { en: "4a²", hi: "4a²" },
      c: { en: "a²", hi: "a²" },
      d: { en: "3a²", hi: "3a²" }
    },
    answer: "a",
    explanation: {
      en: "A cube has 6 equal square faces. So TSA = 6a².",
      hi: "घन की 6 बराबर वर्गाकार सतहें होती हैं। इसलिए TSA = 6a²।"
    }
  },
  {
    question: {
      en: "What is the volume of a cuboid with dimensions l, b, h?",
      hi: "लंबाई l, चौड़ाई b और ऊँचाई h वाले घनाभ का आयतन क्या होगा?"
    },
    options: {
      a: { en: "lbh", hi: "lbh" },
      b: { en: "2(l+b+h)", hi: "2(l+b+h)" },
      c: { en: "lb", hi: "lb" },
      d: { en: "2lbh", hi: "2lbh" }
    },
    answer: "a",
    explanation: {
      en: "Volume of cuboid = length × breadth × height = l × b × h",
      hi: "घनाभ का आयतन = लंबाई × चौड़ाई × ऊँचाई = l × b × h"
    }
  },
  {
    question: {
      en: "What is the volume of a sphere of radius r?",
      hi: "त्रिज्या r वाले गोले का आयतन क्या होगा?"
    },
    options: {
      a: { en: "⅔πr³", hi: "⅔πr³" },
      b: { en: "¾πr³", hi: "¾πr³" },
      c: { en: "⁴⁄₃πr³", hi: "⁴⁄₃πr³" },
      d: { en: "½πr³", hi: "½πr³" }
    },
    answer: "c",
    explanation: {
      en: "Volume of sphere = ⁴⁄₃πr³",
      hi: "गोले का आयतन = ⁴⁄₃πr³ होता है।"
    }
  },
  {
    question: {
      en: "CSA of a cylinder of radius r and height h is:",
      hi: "त्रिज्या r और ऊँचाई h वाले बेलन का वक्र पृष्ठीय क्षेत्रफल क्या होता है?"
    },
    options: {
      a: { en: "2πrh", hi: "2πrh" },
      b: { en: "πr²h", hi: "πr²h" },
      c: { en: "πrh", hi: "πrh" },
      d: { en: "πr²", hi: "πr²" }
    },
    answer: "a",
    explanation: {
      en: "CSA of cylinder = 2πrh",
      hi: "बेलन का CSA = 2πrh होता है।"
    }
  },
  {
    question: {
      en: "A solid hemisphere of radius r has volume:",
      hi: "त्रिज्या r वाले ठोस अर्धगोले का आयतन क्या होगा?"
    },
    options: {
      a: { en: "⁴⁄₃πr³", hi: "⁴⁄₃πr³" },
      b: { en: "⅔πr³", hi: "⅔πr³" },
      c: { en: "²⁄₃πr³", hi: "²⁄₃πr³" },
      d: { en: "½πr³", hi: "½πr³" }
    },
    answer: "c",
    explanation: {
      en: "Volume of hemisphere = ½ × ⁴⁄₃πr³ = ²⁄₃πr³",
      hi: "अर्धगोले का आयतन = ½ × ⁴⁄₃πr³ = ²⁄₃πr³ होता है।"
    }
  }
];

export default surfaceVolumeSolids;
