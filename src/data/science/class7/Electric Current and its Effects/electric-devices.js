const electricDevices = [
  {
    id: 1,
    question: {
      en: "What does a switch do in an electric circuit?",
      hi: "एक विद्युत परिपथ में स्विच क्या करता है?"
    },
    options: [
      { en: "Increases current", hi: "धारा बढ़ाता है" },
      { en: "Stores energy", hi: "ऊर्जा को संग्रहीत करता है" },
      { en: "Opens or closes the circuit", hi: "परिपथ को खोलता या बंद करता है" },
      { en: "Produces electricity", hi: "बिजली उत्पन्न करता है" }
    ],
    correct: {
      en: "Opens or closes the circuit",
      hi: "परिपथ को खोलता या बंद करता है"
    },
    explanation: {
      en: "A switch controls the flow of current by opening or closing the circuit.",
      hi: "स्विच परिपथ को खोलकर या बंद करके विद्युत धारा के प्रवाह को नियंत्रित करता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is a good conductor of electricity?",
      hi: "इनमें से कौन विद्युत का सुचालक है?"
    },
    options: [
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Copper", hi: "तांबा" },
      { en: "Rubber", hi: "रबड़" }
    ],
    correct: {
      en: "Copper",
      hi: "तांबा"
    },
    explanation: {
      en: "Copper allows electricity to pass easily, hence it is a good conductor.",
      hi: "तांबे से आसानी से विद्युत प्रवाहित हो सकता है, इसलिए यह एक सुचालक है।"
    }
  },
  {
    id: 3,
    question: {
      en: "In an electric circuit, the device that produces electricity is called:",
      hi: "विद्युत परिपथ में विद्युत उत्पन्न करने वाले यंत्र को क्या कहते हैं?"
    },
    options: [
      { en: "Switch", hi: "स्विच" },
      { en: "Bulb", hi: "बल्ब" },
      { en: "Battery", hi: "बैटरी" },
      { en: "Wire", hi: "तार" }
    ],
    correct: {
      en: "Battery",
      hi: "बैटरी"
    },
    explanation: {
      en: "Battery is the source of electricity in a circuit.",
      hi: "बैटरी विद्युत परिपथ में विद्युत का स्रोत होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which symbol represents a battery in a circuit diagram?",
      hi: "परिपथ आरेख में बैटरी का चिन्ह कौन सा है?"
    },
    options: [
      { en: "One long and one short line", hi: "एक लंबी और एक छोटी रेखा" },
      { en: "A circle with a cross", hi: "एक क्रॉस वाला वृत्त" },
      { en: "Zig-zag line", hi: "तिरछी रेखा" },
      { en: "Rectangle", hi: "आयत" }
    ],
    correct: {
      en: "One long and one short line",
      hi: "एक लंबी और एक छोटी रेखा"
    },
    explanation: {
      en: "Battery is shown as a pair of long and short lines in circuit diagrams.",
      hi: "बैटरी को परिपथ आरेख में लंबी और छोटी रेखा से दर्शाया जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "A device that glows when current flows through it is a:",
      hi: "वह यंत्र जो विद्युत प्रवाह पर चमकता है:"
    },
    options: [
      { en: "Heater", hi: "हीटर" },
      { en: "Bulb", hi: "बल्ब" },
      { en: "Battery", hi: "बैटरी" },
      { en: "Fan", hi: "पंखा" }
    ],
    correct: {
      en: "Bulb",
      hi: "बल्ब"
    },
    explanation: {
      en: "The filament in the bulb glows when electric current passes through it.",
      hi: "जब विद्युत धारा बल्ब से गुजरती है, तो इसका फिलामेंट चमकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What are the wires made of in most circuits?",
      hi: "अधिकांश परिपथों में तार किससे बने होते हैं?"
    },
    options: [
      { en: "Iron", hi: "लोहा" },
      { en: "Aluminium", hi: "एल्युमिनियम" },
      { en: "Copper", hi: "तांबा" },
      { en: "Plastic", hi: "प्लास्टिक" }
    ],
    correct: {
      en: "Copper",
      hi: "तांबा"
    },
    explanation: {
      en: "Copper is widely used because it is a good conductor and flexible.",
      hi: "तांबा एक अच्छा सुचालक और लचीला होता है, इसलिए इसका उपयोग किया जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What prevents electric shocks in circuits?",
      hi: "परिपथ में विद्युत झटके से क्या बचाता है?"
    },
    options: [
      { en: "Plastic covering on wires", hi: "तारों पर प्लास्टिक की परत" },
      { en: "Switch", hi: "स्विच" },
      { en: "Battery", hi: "बैटरी" },
      { en: "Bulb", hi: "बल्ब" }
    ],
    correct: {
      en: "Plastic covering on wires",
      hi: "तारों पर प्लास्टिक की परत"
    },
    explanation: {
      en: "Plastic is an insulator and prevents electric shocks.",
      hi: "प्लास्टिक एक कुचालक है जो विद्युत झटकों से बचाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "A circuit with a break in the path is called:",
      hi: "जिस परिपथ में प्रवाह का मार्ग टूट गया हो, उसे क्या कहते हैं?"
    },
    options: [
      { en: "Closed circuit", hi: "बंद परिपथ" },
      { en: "Open circuit", hi: "खुला परिपथ" },
      { en: "Short circuit", hi: "शॉर्ट सर्किट" },
      { en: "Parallel circuit", hi: "समानांतर परिपथ" }
    ],
    correct: {
      en: "Open circuit",
      hi: "खुला परिपथ"
    },
    explanation: {
      en: "An open circuit does not allow electricity to flow.",
      hi: "खुला परिपथ विद्युत धारा को प्रवाहित नहीं होने देता।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which device helps protect the circuit from overload?",
      hi: "कौन सा यंत्र परिपथ को ओवरलोड से बचाता है?"
    },
    options: [
      { en: "Switch", hi: "स्विच" },
      { en: "Fuse", hi: "फ्यूज़" },
      { en: "Bulb", hi: "बल्ब" },
      { en: "Motor", hi: "मोटर" }
    ],
    correct: {
      en: "Fuse",
      hi: "फ्यूज़"
    },
    explanation: {
      en: "A fuse melts and breaks the circuit when current is too high.",
      hi: "फ्यूज़ अधिक करंट होने पर पिघल जाता है और परिपथ को तोड़ देता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "A complete path for current to flow is called:",
      hi: "विद्युत धारा के प्रवाह के लिए पूरा मार्ग क्या कहलाता है?"
    },
    options: [
      { en: "Wire", hi: "तार" },
      { en: "Battery", hi: "बैटरी" },
      { en: "Circuit", hi: "परिपथ" },
      { en: "Switch", hi: "स्विच" }
    ],
    correct: {
      en: "Circuit",
      hi: "परिपथ"
    },
    explanation: {
      en: "A circuit is a closed loop that allows electric current to flow.",
      hi: "परिपथ एक बंद लूप होता है जिसमें विद्युत धारा प्रवाहित हो सकती है।"
    }
  }
];

export default electricDevices;
