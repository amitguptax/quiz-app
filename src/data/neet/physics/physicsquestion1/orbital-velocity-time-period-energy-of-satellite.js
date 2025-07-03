const orbitalSatellite = [
  {
    question: {
      en: "What is the expression for orbital velocity (v) of a satellite?",
      hi: "उपग्रह की कक्षीय वेग (v) का सूत्र क्या है?"
    },
    options: {
      a: "v = √(GM/R)",
      b: "v = GM/R²",
      c: "v = √(2GM/R)",
      d: "v = GR/M"
    },
    answer: "a",
    explanation: {
      en: "Orbital velocity is v = √(GM/R), where G is the gravitational constant, M is Earth’s mass, and R is the distance from the Earth’s center.",
      hi: "कक्षीय वेग v = √(GM/R) होता है, जहाँ G गुरुत्व स्थिरांक, M पृथ्वी का द्रव्यमान और R पृथ्वी के केंद्र से दूरी है।"
    }
  },
  {
    question: {
      en: "Orbital velocity is the velocity at which a satellite:",
      hi: "कक्षीय वेग वह वेग है जिस पर उपग्रह:"
    },
    options: {
      a: "Falls to Earth",
      b: "Leaves Earth’s gravity",
      c: "Remains in stable circular orbit",
      d: "Collides with another body"
    },
    answer: "c",
    explanation: {
      en: "Orbital velocity allows a satellite to stay in a stable circular orbit around Earth.",
      hi: "कक्षीय वेग उपग्रह को पृथ्वी के चारों ओर एक स्थिर वृत्तीय कक्षा में बनाए रखता है।"
    }
  },
  {
    question: {
      en: "If altitude of satellite increases, its orbital velocity:",
      hi: "यदि उपग्रह की ऊँचाई बढ़ती है, तो उसका कक्षीय वेग:"
    },
    options: {
      a: "Increases",
      b: "Decreases",
      c: "Remains constant",
      d: "Becomes zero"
    },
    answer: "b",
    explanation: {
      en: "Orbital velocity decreases as the satellite moves farther from Earth.",
      hi: "जैसे-जैसे उपग्रह पृथ्वी से दूर जाता है, उसका कक्षीय वेग घटता है।"
    }
  },
  {
    question: {
      en: "What is the expression for time period (T) of a satellite?",
      hi: "उपग्रह की आवर्त अवधि (T) का सूत्र क्या है?"
    },
    options: {
      a: "T = 2π√(R/g)",
      b: "T = √(GM/R)",
      c: "T = 2π√(R³/GM)",
      d: "T = R/v"
    },
    answer: "c",
    explanation: {
      en: "T = 2π√(R³/GM) is the formula for time period of a satellite in circular orbit.",
      hi: "T = 2π√(R³/GM) वृत्तीय कक्षा में उपग्रह की आवर्त अवधि का सूत्र है।"
    }
  },
  {
    question: {
      en: "Time period of geostationary satellite is:",
      hi: "स्थिर उपग्रह की आवर्त अवधि होती है:"
    },
    options: {
      a: "12 hours",
      b: "24 hours",
      c: "48 hours",
      d: "6 hours"
    },
    answer: "b",
    explanation: {
      en: "Geostationary satellites revolve once in 24 hours to match Earth’s rotation.",
      hi: "स्थिर उपग्रह 24 घंटे में एक बार पृथ्वी की परिक्रमा करता है ताकि वह पृथ्वी के घूर्णन से मेल खा सके।"
    }
  },
  {
    question: {
      en: "Total energy (E) of a satellite in orbit is:",
      hi: "कक्षा में उपग्रह की कुल ऊर्जा (E) होती है:"
    },
    options: {
      a: "Positive",
      b: "Zero",
      c: "Negative",
      d: "Infinite"
    },
    answer: "c",
    explanation: {
      en: "Total energy is negative due to the bound state of satellite in gravitational field.",
      hi: "उपग्रह गुरुत्वाकर्षण क्षेत्र में बंधा होता है, इसलिए कुल ऊर्जा ऋणात्मक होती है।"
    }
  },
  {
    question: {
      en: "What is the relation between K.E. and total energy E?",
      hi: "K.E. और कुल ऊर्जा E के बीच संबंध क्या है?"
    },
    options: {
      a: "E = K.E.",
      b: "E = 2K.E.",
      c: "E = -K.E.",
      d: "E = -2K.E."
    },
    answer: "c",
    explanation: {
      en: "Total energy is negative of kinetic energy: E = -K.E.",
      hi: "कुल ऊर्जा गतिज ऊर्जा के ऋणात्मक के बराबर होती है: E = -K.E."
    }
  },
  {
    question: {
      en: "The potential energy (U) of a satellite in orbit is:",
      hi: "कक्षा में उपग्रह की स्थितिज ऊर्जा (U) होती है:"
    },
    options: {
      a: "Positive",
      b: "Negative",
      c: "Zero",
      d: "Equal to kinetic energy"
    },
    answer: "b",
    explanation: {
      en: "Potential energy is always negative in gravitational bound systems.",
      hi: "गुरुत्वाकर्षण बंधन प्रणाली में स्थितिज ऊर्जा हमेशा ऋणात्मक होती है।"
    }
  },
  {
    question: {
      en: "If the mass of satellite increases, its orbital velocity:",
      hi: "यदि उपग्रह का द्रव्यमान बढ़ता है, तो उसका कक्षीय वेग:"
    },
    options: {
      a: "Increases",
      b: "Decreases",
      c: "Remains same",
      d: "Becomes zero"
    },
    answer: "c",
    explanation: {
      en: "Orbital velocity is independent of satellite's mass.",
      hi: "कक्षीय वेग उपग्रह के द्रव्यमान पर निर्भर नहीं करता।"
    }
  },
  {
    question: {
      en: "Kinetic energy of a satellite is:",
      hi: "उपग्रह की गतिज ऊर्जा होती है:"
    },
    options: {
      a: "GMm/R",
      b: "½ mv²",
      c: "GMm/2R",
      d: "mv²"
    },
    answer: "c",
    explanation: {
      en: "K.E. = GMm/2R in orbit, where M is Earth’s mass, m is satellite’s mass, and R is orbital radius.",
      hi: "कक्षा में उपग्रह की गतिज ऊर्जा GMm/2R होती है, जहाँ M पृथ्वी का द्रव्यमान, m उपग्रह का द्रव्यमान और R कक्षा की त्रिज्या है।"
    }
  }
];

export default orbitalSatellite;
