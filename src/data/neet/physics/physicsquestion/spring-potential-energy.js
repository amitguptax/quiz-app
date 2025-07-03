const springPotentialEnergy = [
  {
    question: {
      en: "What is the formula for the potential energy stored in a stretched spring?",
      hi: "खींची गई स्प्रिंग में संग्रहीत स्थितिज ऊर्जा का सूत्र क्या है?"
    },
    options: {
      a: "½mv²",
      b: "kx²",
      c: "½kx²",
      d: "mgx"
    },
    answer: "c",
    explanation: {
      en: "Potential energy in a spring is given by U = ½kx².",
      hi: "स्प्रिंग में स्थितिज ऊर्जा U = ½kx² होती है।"
    }
  },
  {
    question: {
      en: "In the formula U = ½kx², what does ‘x’ represent?",
      hi: "सूत्र U = ½kx² में 'x' किसे दर्शाता है?"
    },
    options: {
      a: "Length of spring",
      b: "Extension or compression",
      c: "Weight",
      d: "Time"
    },
    answer: "b",
    explanation: {
      en: "‘x’ is the displacement from the spring's natural length.",
      hi: "'x' स्प्रिंग की प्राकृतिक लंबाई से खिंचाव या संपीड़न है।"
    }
  },
  {
    question: {
      en: "Spring constant 'k' has SI unit:",
      hi: "स्प्रिंग नियतांक 'k' की SI इकाई क्या है?"
    },
    options: {
      a: "N/m",
      b: "Joule",
      c: "Watt",
      d: "kg"
    },
    answer: "a",
    explanation: {
      en: "Spring constant k has units of N/m (Newton per meter).",
      hi: "स्प्रिंग नियतांक 'k' की इकाई N/m होती है।"
    }
  },
  {
    question: {
      en: "If a spring is compressed by 0.1 m and k = 200 N/m, potential energy is:",
      hi: "यदि स्प्रिंग को 0.1 मीटर संपीड़ित किया जाए और k = 200 N/m हो, तो स्थितिज ऊर्जा होगी:"
    },
    options: {
      a: "1 J",
      b: "0.5 J",
      c: "2 J",
      d: "10 J"
    },
    answer: "b",
    explanation: {
      en: "U = ½kx² = ½×200×(0.1)² = 1 J",
      hi: "U = ½×200×(0.1)² = 1 J"
    }
  },
  {
    question: {
      en: "Potential energy of spring is always:",
      hi: "स्प्रिंग की स्थितिज ऊर्जा हमेशा होती है:"
    },
    options: {
      a: "Negative",
      b: "Zero",
      c: "Positive",
      d: "Depends on direction"
    },
    answer: "c",
    explanation: {
      en: "Spring potential energy is always positive or zero.",
      hi: "स्प्रिंग की स्थितिज ऊर्जा हमेशा धनात्मक या शून्य होती है।"
    }
  },
  {
    question: {
      en: "Work done in stretching a spring is stored as:",
      hi: "स्प्रिंग को खींचने में किया गया कार्य किस रूप में संग्रहित होता है?"
    },
    options: {
      a: "Kinetic energy",
      b: "Heat energy",
      c: "Potential energy",
      d: "Magnetic energy"
    },
    answer: "c",
    explanation: {
      en: "Work is stored as elastic potential energy.",
      hi: "कार्य प्रत्यास्थ स्थितिज ऊर्जा के रूप में संग्रहित होता है।"
    }
  },
  {
    question: {
      en: "A spring stretched by 0.2 m stores 2 J energy. Find k.",
      hi: "0.2 मीटर खिंची स्प्रिंग में 2 जूल ऊर्जा संग्रहीत है। 'k' ज्ञात करें।"
    },
    options: {
      a: "100 N/m",
      b: "50 N/m",
      c: "200 N/m",
      d: "20 N/m"
    },
    answer: "a",
    explanation: {
      en: "2 = ½kx² ⇒ k = 100 N/m",
      hi: "2 = ½kx² ⇒ k = 100 N/m"
    }
  },
  {
    question: {
      en: "If the spring is stretched twice as much, energy stored becomes:",
      hi: "यदि स्प्रिंग को दुगना खींचा जाए, तो संग्रहीत ऊर्जा:"
    },
    options: {
      a: "Doubles",
      b: "Triples",
      c: "Four times",
      d: "Remains same"
    },
    answer: "c",
    explanation: {
      en: "U ∝ x² ⇒ double x → 4 times U",
      hi: "U ∝ x² ⇒ x दुगना करने पर U चार गुना हो जाती है।"
    }
  },
  {
    question: {
      en: "In SHM, energy of spring is maximum when:",
      hi: "सरल आवर्त गति (SHM) में स्प्रिंग की ऊर्जा अधिकतम कब होती है?"
    },
    options: {
      a: "At equilibrium",
      b: "At extreme positions",
      c: "At zero displacement",
      d: "At max speed"
    },
    answer: "b",
    explanation: {
      en: "Spring potential energy is maximum at extreme positions.",
      hi: "चरम स्थितियों पर स्प्रिंग की स्थितिज ऊर्जा अधिकतम होती है।"
    }
  },
  {
    question: {
      en: "Which energy conversion occurs in a spring-mass system in SHM?",
      hi: "स्प्रिंग-मास सिस्टम में SHM के दौरान कौन-सी ऊर्जा परिवर्तन होता है?"
    },
    options: {
      a: "Kinetic ↔ Heat",
      b: "Kinetic ↔ Potential",
      c: "Chemical ↔ Potential",
      d: "Magnetic ↔ Kinetic"
    },
    answer: "b",
    explanation: {
      en: "Energy constantly converts between kinetic and potential.",
      hi: "SHM में ऊर्जा गतिज और स्थितिज के बीच परिवर्तित होती रहती है।"
    }
  }
];

export default springPotentialEnergy;
