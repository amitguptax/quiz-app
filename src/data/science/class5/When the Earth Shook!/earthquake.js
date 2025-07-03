const earthquakeQuestions = [
  {
    id: 1,
    question: {
      en: "What causes an earthquake?",
      hi: "भूकंप किस कारण से होता है?"
    },
    options: [
      { en: "Movement of tectonic plates", hi: "टेक्टोनिक प्लेटों की गति" },
      { en: "Heavy rainfall", hi: "भारी वर्षा" },
      { en: "Strong winds", hi: "तीव्र हवा" },
      { en: "Volcanic eruption", hi: "ज्वालामुखी विस्फोट" }
    ],
    correct: {
      en: "Movement of tectonic plates",
      hi: "टेक्टोनिक प्लेटों की गति"
    },
    explanation: {
      en: "Earthquakes occur due to sudden movements of Earth's tectonic plates.",
      hi: "भूकंप पृथ्वी की टेक्टोनिक प्लेटों की अचानक गति के कारण होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which instrument is used to measure earthquakes?",
      hi: "भूकंप मापने के लिए कौन सा यंत्र उपयोग किया जाता है?"
    },
    options: [
      { en: "Thermometer", hi: "थर्मामीटर" },
      { en: "Barometer", hi: "बारोमीटर" },
      { en: "Seismograph", hi: "सिस्मोग्राफ" },
      { en: "Anemometer", hi: "एनेमोमीटर" }
    ],
    correct: {
      en: "Seismograph",
      hi: "सिस्मोग्राफ"
    },
    explanation: {
      en: "A seismograph records the strength and duration of earthquakes.",
      hi: "सिस्मोग्राफ भूकंप की ताकत और अवधि को रिकॉर्ड करता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the point inside the Earth where an earthquake starts called?",
      hi: "धरती के अंदर वह बिंदु जहाँ भूकंप शुरू होता है, क्या कहलाता है?"
    },
    options: [
      { en: "Epicenter", hi: "एपिसेंटर" },
      { en: "Focus", hi: "फोकस" },
      { en: "Fault", hi: "फॉल्ट" },
      { en: "Crust", hi: "पर्पटी" }
    ],
    correct: {
      en: "Focus",
      hi: "फोकस"
    },
    explanation: {
      en: "The focus is the point inside Earth where the earthquake originates.",
      hi: "फोकस वह बिंदु है जहाँ भूकंप पृथ्वी के अंदर उत्पन्न होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the point on the Earth's surface directly above the focus called?",
      hi: "धरती की सतह पर फोकस के ठीक ऊपर वाला बिंदु क्या कहलाता है?"
    },
    options: [
      { en: "Epicenter", hi: "एपिसेंटर" },
      { en: "Focus", hi: "फोकस" },
      { en: "Fault", hi: "फॉल्ट" },
      { en: "Mantle", hi: "मैन्टल" }
    ],
    correct: {
      en: "Epicenter",
      hi: "एपिसेंटर"
    },
    explanation: {
      en: "The epicenter is the location on the surface above the earthquake focus.",
      hi: "एपिसेंटर वह स्थान है जो भूकंप के फोकस के ठीक ऊपर सतह पर होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which scale is used to measure the magnitude of an earthquake?",
      hi: "भूकंप की तीव्रता मापने के लिए कौन सा पैमाना उपयोग होता है?"
    },
    options: [
      { en: "Richter scale", hi: "रिच्टर पैमाना" },
      { en: "Celsius scale", hi: "सेल्सियस पैमाना" },
      { en: "Beaufort scale", hi: "ब्यूफोर्ट पैमाना" },
      { en: "Decibel scale", hi: "डेसीबल पैमाना" }
    ],
    correct: {
      en: "Richter scale",
      hi: "रिच्टर पैमाना"
    },
    explanation: {
      en: "The Richter scale measures the magnitude of earthquakes.",
      hi: "रिच्टर पैमाना भूकंप की तीव्रता मापता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which layer of the Earth moves during an earthquake?",
      hi: "भूकंप के दौरान पृथ्वी की कौन सी परत हिलती है?"
    },
    options: [
      { en: "Crust", hi: "पर्पटी" },
      { en: "Mantle", hi: "मैन्टल" },
      { en: "Core", hi: "कोर" },
      { en: "Atmosphere", hi: "वायुमंडल" }
    ],
    correct: {
      en: "Crust",
      hi: "पर्पटी"
    },
    explanation: {
      en: "The Earth's crust moves and causes earthquakes.",
      hi: "पृथ्वी की पर्पटी हिलती है जिससे भूकंप आते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following is a safety measure during an earthquake?",
      hi: "भूकंप के दौरान कौन सा सुरक्षा उपाय है?"
    },
    options: [
      { en: "Stand near windows", hi: "खिड़कियों के पास खड़े होना" },
      { en: "Hide under a sturdy table", hi: "मजबूत मेज के नीचे छिपना" },
      { en: "Use elevator", hi: "लिफ्ट का उपयोग करना" },
      { en: "Run outside immediately", hi: "तुरंत बाहर भागना" }
    ],
    correct: {
      en: "Hide under a sturdy table",
      hi: "मजबूत मेज के नीचे छिपना"
    },
    explanation: {
      en: "Hiding under a sturdy table protects you from falling objects during an earthquake.",
      hi: "मजबूत मेज के नीचे छिपना भूकंप के दौरान गिरने वाली वस्तुओं से सुरक्षा करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which is NOT a cause of earthquakes?",
      hi: "भूकंप का कारण नहीं है?"
    },
    options: [
      { en: "Volcanic eruption", hi: "ज्वालामुखी विस्फोट" },
      { en: "Plate tectonics", hi: "प्लेट टेक्टोनिक्स" },
      { en: "Heavy rain", hi: "भारी बारिश" },
      { en: "Human activities", hi: "मानव गतिविधियाँ" }
    ],
    correct: {
      en: "Heavy rain",
      hi: "भारी बारिश"
    },
    explanation: {
      en: "Heavy rain does not cause earthquakes.",
      hi: "भारी बारिश भूकंप का कारण नहीं होती।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should you avoid during an earthquake?",
      hi: "भूकंप के दौरान आपको क्या बचना चाहिए?"
    },
    options: [
      { en: "Standing in doorways", hi: "दरवाजों में खड़े होना" },
      { en: "Covering your head", hi: "अपने सिर को ढकना" },
      { en: "Moving to open spaces", hi: "खुले स्थान पर जाना" },
      { en: "Turning off gas supply", hi: "गैस आपूर्ति बंद करना" }
    ],
    correct: {
      en: "Standing in doorways",
      hi: "दरवाजों में खड़े होना"
    },
    explanation: {
      en: "Standing in doorways is unsafe during an earthquake.",
      hi: "दरवाजों में खड़े होना भूकंप के दौरान सुरक्षित नहीं है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which organization provides early warnings about earthquakes in many countries?",
      hi: "कौन सी संस्था कई देशों में भूकंप के लिए पूर्व चेतावनी प्रदान करती है?"
    },
    options: [
      { en: "NASA", hi: "नासा" },
      { en: "USGS", hi: "यूएसजीएस" },
      { en: "WHO", hi: "डब्ल्यूएचओ" },
      { en: "UNICEF", hi: "यूनिसेफ" }
    ],
    correct: {
      en: "USGS",
      hi: "यूएसजीएस"
    },
    explanation: {
      en: "The US Geological Survey (USGS) provides earthquake monitoring and warnings.",
      hi: "यूएस जियोलॉजिकल सर्वे (यूएसजीएस) भूकंप निगरानी और चेतावनी प्रदान करता है।"
    }
  }
];

export default earthquakeQuestions;
