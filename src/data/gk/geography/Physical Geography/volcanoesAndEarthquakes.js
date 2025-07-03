const volcanoesAndEarthquakes = {
  label: {
    en: "Volcanoes and Earthquakes",
    hi: "ज्वालामुखी और भूकंप"
  },
  questions: [
    {
      id: "VEQ1",
      question: {
        en: "What is the point inside the Earth where an earthquake originates?",
        hi: "पृथ्वी के अंदर वह बिंदु जहाँ भूकंप उत्पन्न होता है, क्या कहलाता है?"
      },
      options: ["Epicenter", "Hypocenter", "Seismic zone", "Fault line"],
      correctAnswer: "Hypocenter",
      explanation: "The hypocenter (or focus) is the actual location beneath the Earth's surface where an earthquake starts."
    },
    {
      id: "VEQ2",
      question: {
        en: "Which scale is commonly used to measure the magnitude of earthquakes?",
        hi: "भूकंप की तीव्रता मापने के लिए सामान्यतः कौन सा पैमाना प्रयोग किया जाता है?"
      },
      options: ["Richter scale", "Beaufort scale", "Fujita scale", "Kelvin scale"],
      correctAnswer: "Richter scale",
      explanation: "The Richter scale is a logarithmic scale used to measure the magnitude of earthquakes."
    },
    {
      id: "VEQ3",
      question: {
        en: "Which type of volcano is Mount Fuji in Japan?",
        hi: "जापान में स्थित माउंट फूजी किस प्रकार का ज्वालामुखी है?"
      },
      options: ["Cinder cone", "Shield", "Composite", "Caldera"],
      correctAnswer: "Composite",
      explanation: "Mount Fuji is a composite volcano, formed from alternating layers of lava and ash."
    },
    {
      id: "VEQ4",
      question: {
        en: "What causes an earthquake?",
        hi: "भूकंप का कारण क्या होता है?"
      },
      options: [
        "Volcanic eruptions",
        "Tectonic plate movements",
        "Both A and B",
        "Tsunami"
      ],
      correctAnswer: "Both A and B",
      explanation: "Earthquakes are mainly caused by tectonic plate movements and sometimes by volcanic eruptions."
    },
    {
      id: "VEQ5",
      question: {
        en: "What is the name of the outermost layer of Earth where earthquakes occur?",
        hi: "पृथ्वी की वह सबसे बाहरी परत जहाँ भूकंप होते हैं, क्या कहलाती है?"
      },
      options: ["Mantle", "Crust", "Core", "Lithosphere"],
      correctAnswer: "Crust",
      explanation: "The crust is the outermost layer of Earth where most earthquakes originate."
    },
    {
      id: "VEQ6",
      question: {
        en: "Which region is known as the 'Ring of Fire'?",
        hi: "कौन सा क्षेत्र 'रिंग ऑफ फायर' के नाम से जाना जाता है?"
      },
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
      correctAnswer: "Pacific Ocean",
      explanation: "The Pacific Ocean's boundary is called the 'Ring of Fire' due to high volcanic and earthquake activity."
    },
    {
      id: "VEQ7",
      question: {
        en: "Seismograph is used to measure what?",
        hi: "सीस्मोग्राफ का उपयोग किसे मापने के लिए किया जाता है?"
      },
      options: ["Wind speed", "Rainfall", "Earthquakes", "Temperature"],
      correctAnswer: "Earthquakes",
      explanation: "A seismograph is an instrument that records and measures seismic waves caused by earthquakes."
    },
    {
      id: "VEQ8",
      question: {
        en: "Which wave is the fastest during an earthquake?",
        hi: "भूकंप के दौरान कौन सी तरंग सबसे तेज होती है?"
      },
      options: ["S-waves", "P-waves", "Surface waves", "Love waves"],
      correctAnswer: "P-waves",
      explanation: "P-waves (Primary waves) are the fastest seismic waves and arrive first at a seismograph."
    },
    {
      id: "VEQ9",
      question: {
        en: "Which gas is commonly released during a volcanic eruption?",
        hi: "ज्वालामुखी विस्फोट के दौरान कौन सी गैस सामान्यतः निकलती है?"
      },
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
      correctAnswer: "Carbon dioxide",
      explanation: "Carbon dioxide and other gases like sulfur dioxide are released during volcanic eruptions."
    },
    {
      id: "VEQ10",
      question: {
        en: "Which type of plate boundary causes the most powerful earthquakes?",
        hi: "किस प्रकार की प्लेट सीमा पर सबसे शक्तिशाली भूकंप आते हैं?"
      },
      options: ["Divergent", "Convergent", "Transform", "Static"],
      correctAnswer: "Convergent",
      explanation: "Convergent boundaries, where plates collide, often generate powerful earthquakes."
    },
    {
      id: "VEQ11",
      question: {
        en: "The point directly above the hypocenter on the Earth's surface is called?",
        hi: "पृथ्वी की सतह पर उस बिंदु को क्या कहते हैं जो हाइपोसेन्टर के ठीक ऊपर होता है?"
      },
      options: ["Crater", "Focus", "Epicenter", "Fault"],
      correctAnswer: "Epicenter",
      explanation: "The epicenter is the point on the surface directly above the earthquake's hypocenter (focus)."
    },
    {
      id: "VEQ12",
      question: {
        en: "Which Indian state is most prone to earthquakes?",
        hi: "भारत का कौन सा राज्य भूकंप की दृष्टि से सबसे अधिक संवेदनशील है?"
      },
      options: ["Rajasthan", "Gujarat", "Bihar", "Himachal Pradesh"],
      correctAnswer: "Himachal Pradesh",
      explanation: "Himachal Pradesh lies in seismic zone V and is highly prone to earthquakes."
    },
    {
      id: "VEQ13",
      question: {
        en: "What is a dormant volcano?",
        hi: "निष्क्रिय ज्वालामुखी किसे कहते हैं?"
      },
      options: [
        "A volcano that erupts regularly",
        "A volcano that has never erupted",
        "A volcano that erupted in the past but is currently inactive",
        "A volcano under the sea"
      ],
      correctAnswer: "A volcano that erupted in the past but is currently inactive",
      explanation: "Dormant volcanoes have erupted before but are now quiet for a long time."
    },
    {
      id: "VEQ14",
      question: {
        en: "Which volcano destroyed the city of Pompeii?",
        hi: "किस ज्वालामुखी ने पोम्पेई शहर को नष्ट कर दिया था?"
      },
      options: ["Mount Etna", "Mount Fuji", "Mount Vesuvius", "Mount St. Helens"],
      correctAnswer: "Mount Vesuvius",
      explanation: "Mount Vesuvius erupted in AD 79 and buried the Roman city of Pompeii."
    },
    {
      id: "VEQ15",
      question: {
        en: "Which instrument records the intensity of earthquakes?",
        hi: "भूकंप की तीव्रता को रिकॉर्ड करने वाला यंत्र कौन सा है?"
      },
      options: ["Barometer", "Seismograph", "Thermometer", "Altimeter"],
      correctAnswer: "Seismograph",
      explanation: "Seismographs detect and record the strength and duration of earthquakes."
    },
    {
      id: "VEQ16",
      question: {
        en: "Which zone of the Earth’s interior is semi-liquid and affects tectonic movement?",
        hi: "पृथ्वी की कौन सी परत अर्ध-द्रवित होती है और टेक्टोनिक गति को प्रभावित करती है?"
      },
      options: ["Crust", "Core", "Asthenosphere", "Lithosphere"],
      correctAnswer: "Asthenosphere",
      explanation: "The asthenosphere is semi-fluid and allows tectonic plates to move."
    },
    {
      id: "VEQ17",
      question: {
        en: "What is lava?",
        hi: "लावा क्या होता है?"
      },
      options: ["Solid rock", "Melted rock on Earth's surface", "Volcanic ash", "Sulfur gas"],
      correctAnswer: "Melted rock on Earth's surface",
      explanation: "Lava is molten rock that has erupted onto Earth's surface from a volcano."
    },
    {
      id: "VEQ18",
      question: {
        en: "What is the zone of intense earthquake activity around the Pacific Ocean called?",
        hi: "प्रशांत महासागर के चारों ओर तीव्र भूकंपीय गतिविधि वाले क्षेत्र को क्या कहते हैं?"
      },
      options: ["Seismic Circle", "Pacific Loop", "Ring of Fire", "Fire Zone"],
      correctAnswer: "Ring of Fire",
      explanation: "The 'Ring of Fire' is a tectonic belt with frequent earthquakes and volcanoes."
    },
    {
      id: "VEQ19",
      question: {
        en: "Which is the most earthquake-prone country in the world?",
        hi: "दुनिया का सबसे भूकंप-प्रवण देश कौन सा है?"
      },
      options: ["India", "Japan", "Chile", "Indonesia"],
      correctAnswer: "Japan",
      explanation: "Japan lies in a highly active seismic zone and experiences frequent earthquakes."
    },
    {
      id: "VEQ20",
      question: {
        en: "What is a tsunami?",
        hi: "सुनामी क्या होती है?"
      },
      options: [
        "A tidal wave caused by strong winds",
        "An earthquake on land",
        "A volcanic eruption",
        "A large sea wave caused by an undersea earthquake"
      ],
      correctAnswer: "A large sea wave caused by an undersea earthquake",
      explanation: "A tsunami is a massive sea wave generated by underwater seismic activity."
    }
  ]
};

export default volcanoesAndEarthquakes;
