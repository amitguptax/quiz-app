const closedCircuit = [
  {
    id: 1,
    question: {
      en: "What is a closed circuit?",
      hi: "बंद परिपथ क्या होता है?"
    },
    options: [
      { en: "A circuit with a broken wire", hi: "एक टूटी हुई तार वाला परिपथ" },
      { en: "A circuit where electricity can flow", hi: "एक परिपथ जिसमें बिजली प्रवाहित हो सकती है" },
      { en: "A circuit with no battery", hi: "एक परिपथ जिसमें बैटरी नहीं है" },
      { en: "A circuit with a bulb only", hi: "केवल बल्ब वाला परिपथ" }
    ],
    correct: {
      en: "A circuit where electricity can flow",
      hi: "एक परिपथ जिसमें बिजली प्रवाहित हो सकती है"
    },
    explanation: {
      en: "A closed circuit allows electricity to flow through it.",
      hi: "बंद परिपथ में बिजली प्रवाहित हो सकती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What happens in an open circuit?",
      hi: "खुले परिपथ में क्या होता है?"
    },
    options: [
      { en: "Electricity flows", hi: "बिजली प्रवाहित होती है" },
      { en: "Bulb glows", hi: "बल्ब जलता है" },
      { en: "No current flows", hi: "कोई धारा प्रवाहित नहीं होती" },
      { en: "Battery gets charged", hi: "बैटरी चार्ज होती है" }
    ],
    correct: {
      en: "No current flows",
      hi: "कोई धारा प्रवाहित नहीं होती"
    },
    explanation: {
      en: "In an open circuit, the flow of electricity is interrupted.",
      hi: "खुले परिपथ में बिजली का प्रवाह रुक जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "In which circuit does the bulb glow?",
      hi: "किस परिपथ में बल्ब जलता है?"
    },
    options: [
      { en: "Open circuit", hi: "खुला परिपथ" },
      { en: "Broken circuit", hi: "टूटा हुआ परिपथ" },
      { en: "Closed circuit", hi: "बंद परिपथ" },
      { en: "Short circuit", hi: "शॉर्ट सर्किट" }
    ],
    correct: {
      en: "Closed circuit",
      hi: "बंद परिपथ"
    },
    explanation: {
      en: "The bulb glows only when the circuit is complete or closed.",
      hi: "बल्ब तभी जलता है जब परिपथ पूर्ण या बंद हो।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following can break a circuit?",
      hi: "निम्न में से कौन परिपथ को तोड़ सकता है?"
    },
    options: [
      { en: "Wire", hi: "तार" },
      { en: "Bulb", hi: "बल्ब" },
      { en: "Switch (off position)", hi: "स्विच (बंद स्थिति)" },
      { en: "Battery", hi: "बैटरी" }
    ],
    correct: {
      en: "Switch (off position)",
      hi: "स्विच (बंद स्थिति)"
    },
    explanation: {
      en: "Turning off the switch opens the circuit and stops current.",
      hi: "स्विच को बंद करने से परिपथ टूट जाता है और धारा रुक जाती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "In an open circuit, the bulb:",
      hi: "खुले परिपथ में बल्ब:"
    },
    options: [
      { en: "Glows brightly", hi: "तेज़ जलता है" },
      { en: "Glows dimly", hi: "धीरे जलता है" },
      { en: "Does not glow", hi: "नहीं जलता" },
      { en: "Becomes hot", hi: "गर्म हो जाता है" }
    ],
    correct: {
      en: "Does not glow",
      hi: "नहीं जलता"
    },
    explanation: {
      en: "In an open circuit, there is no flow of electricity to light the bulb.",
      hi: "खुले परिपथ में बल्ब नहीं जलता क्योंकि विद्युत प्रवाह नहीं होता।"
    }
  },
  {
    id: 6,
    question: {
      en: "What does a switch do in an electric circuit?",
      hi: "एक विद्युत परिपथ में स्विच क्या करता है?"
    },
    options: [
      { en: "Stores electricity", hi: "बिजली को संग्रहित करता है" },
      { en: "Connects wires", hi: "तारों को जोड़ता है" },
      { en: "Controls flow of current", hi: "धारा के प्रवाह को नियंत्रित करता है" },
      { en: "Charges battery", hi: "बैटरी चार्ज करता है" }
    ],
    correct: {
      en: "Controls flow of current",
      hi: "धारा के प्रवाह को नियंत्रित करता है"
    },
    explanation: {
      en: "A switch opens or closes the circuit to control electricity flow.",
      hi: "स्विच परिपथ को खोलकर या बंद करके विद्युत प्रवाह को नियंत्रित करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why does a bulb not glow when the switch is off?",
      hi: "जब स्विच बंद होता है तो बल्ब क्यों नहीं जलता?"
    },
    options: [
      { en: "There is no battery", hi: "कोई बैटरी नहीं है" },
      { en: "The circuit is open", hi: "परिपथ खुला है" },
      { en: "The bulb is broken", hi: "बल्ब टूटा है" },
      { en: "Too much current", hi: "बहुत अधिक धारा" }
    ],
    correct: {
      en: "The circuit is open",
      hi: "परिपथ खुला है"
    },
    explanation: {
      en: "When the switch is off, the circuit breaks and stops the flow.",
      hi: "स्विच बंद होने पर परिपथ टूट जाता है और धारा बंद हो जाती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "A circuit must be ______ for electricity to flow.",
      hi: "बिजली के प्रवाह के लिए परिपथ को ______ होना चाहिए।"
    },
    options: [
      { en: "Open", hi: "खुला" },
      { en: "Broken", hi: "टूटा" },
      { en: "Closed", hi: "बंद" },
      { en: "Short", hi: "छोटा" }
    ],
    correct: {
      en: "Closed",
      hi: "बंद"
    },
    explanation: {
      en: "Electricity flows only in a closed circuit.",
      hi: "बिजली केवल बंद परिपथ में ही प्रवाहित होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part of the circuit breaks when a wire is disconnected?",
      hi: "जब एक तार को हटाया जाता है तो परिपथ का कौन सा भाग टूटता है?"
    },
    options: [
      { en: "Bulb", hi: "बल्ब" },
      { en: "Battery", hi: "बैटरी" },
      { en: "Path of current", hi: "धारा का मार्ग" },
      { en: "Switch", hi: "स्विच" }
    ],
    correct: {
      en: "Path of current",
      hi: "धारा का मार्ग"
    },
    explanation: {
      en: "Disconnecting a wire breaks the path of current.",
      hi: "तार हटाने से विद्युत प्रवाह का मार्ग टूट जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following completes an electric circuit?",
      hi: "निम्न में से कौन विद्युत परिपथ को पूर्ण करता है?"
    },
    options: [
      { en: "Open switch", hi: "खुला स्विच" },
      { en: "Rusty battery", hi: "जंग लगी बैटरी" },
      { en: "Connected wires and closed switch", hi: "जुड़े तार और बंद (ऑन) स्विच" },
      { en: "Damaged bulb", hi: "टूटा बल्ब" }
    ],
    correct: {
      en: "Connected wires and closed switch",
      hi: "जुड़े तार और बंद (ऑन) स्विच"
    },
    explanation: {
      en: "An electric circuit is complete when wires are connected and the switch is closed.",
      hi: "जब तार जुड़े होते हैं और स्विच बंद (ऑन) होता है, तो परिपथ पूर्ण होता है।"
    }
  }
];

export default closedCircuit;
