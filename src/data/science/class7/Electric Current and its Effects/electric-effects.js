const electricEffects = [
  {
    id: 1,
    question: {
      en: "What effect does electric current have on a filament of a bulb?",
      hi: "बल्ब के फिलामेंट पर विद्युत धारा का क्या प्रभाव होता है?"
    },
    options: [
      { en: "It cools it down", hi: "यह इसे ठंडा करता है" },
      { en: "It makes it glow", hi: "यह इसे चमकाता है" },
      { en: "It turns it magnetic", hi: "यह इसे चुम्बकीय बना देता है" },
      { en: "It breaks it", hi: "यह उसे तोड़ देता है" }
    ],
    correct: {
      en: "It makes it glow",
      hi: "यह इसे चमकाता है"
    },
    explanation: {
      en: "Electric current heats the filament and makes it glow.",
      hi: "विद्युत धारा फिलामेंट को गर्म करती है और यह चमकने लगता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which device shows the magnetic effect of electric current?",
      hi: "कौन सा यंत्र विद्युत धारा के चुम्बकीय प्रभाव को दर्शाता है?"
    },
    options: [
      { en: "Electric bell", hi: "विद्युत घंटी" },
      { en: "Electric iron", hi: "इलेक्ट्रिक इस्त्री" },
      { en: "Electric motor", hi: "इलेक्ट्रिक मोटर" },
      { en: "Heater", hi: "हीटर" }
    ],
    correct: {
      en: "Electric motor",
      hi: "इलेक्ट्रिक मोटर"
    },
    explanation: {
      en: "Electric motors work due to the magnetic effect of current.",
      hi: "इलेक्ट्रिक मोटर विद्युत धारा के चुम्बकीय प्रभाव से कार्य करती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the heating effect of electric current used in?",
      hi: "विद्युत धारा का ऊष्मीय प्रभाव किसमें उपयोग किया जाता है?"
    },
    options: [
      { en: "Electric heater", hi: "इलेक्ट्रिक हीटर" },
      { en: "Television", hi: "टेलीविजन" },
      { en: "Magnet", hi: "चुम्बक" },
      { en: "Fan", hi: "पंखा" }
    ],
    correct: {
      en: "Electric heater",
      hi: "इलेक्ट्रिक हीटर"
    },
    explanation: {
      en: "Electric heaters work due to the heating effect of current.",
      hi: "इलेक्ट्रिक हीटर विद्युत धारा के ऊष्मीय प्रभाव पर कार्य करता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which metal is used in the filament of an electric bulb?",
      hi: "विद्युत बल्ब के फिलामेंट में किस धातु का उपयोग होता है?"
    },
    options: [
      { en: "Copper", hi: "तांबा" },
      { en: "Iron", hi: "लोहा" },
      { en: "Tungsten", hi: "टंगस्टन" },
      { en: "Aluminium", hi: "एल्यूमीनियम" }
    ],
    correct: {
      en: "Tungsten",
      hi: "टंगस्टन"
    },
    explanation: {
      en: "Tungsten is used because it has a high melting point.",
      hi: "टंगस्टन का गलनांक अधिक होता है, इसलिए इसका उपयोग होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "An electromagnet is made by",
      hi: "एक विद्युत चुम्बक बनाई जाती है:"
    },
    options: [
      { en: "Rubbing magnets", hi: "चुम्बकों को रगड़ कर" },
      { en: "Using copper wire around a nail and electric current", hi: "तार को कील के चारों ओर लपेटकर विद्युत धारा से" },
      { en: "Freezing iron", hi: "लोहे को ठंडा करके" },
      { en: "Using batteries only", hi: "केवल बैटरियों से" }
    ],
    correct: {
      en: "Using copper wire around a nail and electric current",
      hi: "तार को कील के चारों ओर लपेटकर विद्युत धारा से"
    },
    explanation: {
      en: "An electromagnet is created by passing electric current through a coiled wire around iron.",
      hi: "तार को लोहे के कील पर लपेटकर और विद्युत धारा प्रवाहित कर विद्युत चुम्बक बनाया जाता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Electric current produces a magnetic field around a",
      hi: "विद्युत धारा किसके चारों ओर चुम्बकीय क्षेत्र उत्पन्न करती है?"
    },
    options: [
      { en: "Battery", hi: "बैटरी" },
      { en: "Wire", hi: "तार" },
      { en: "Switch", hi: "स्विच" },
      { en: "Bulb", hi: "बल्ब" }
    ],
    correct: {
      en: "Wire",
      hi: "तार"
    },
    explanation: {
      en: "Current flowing through a wire generates a magnetic field.",
      hi: "तार में बहती विद्युत धारा चुम्बकीय क्षेत्र उत्पन्न करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following does not show heating effect?",
      hi: "निम्न में से कौन ऊष्मीय प्रभाव नहीं दिखाता?"
    },
    options: [
      { en: "Electric iron", hi: "इलेक्ट्रिक इस्त्री" },
      { en: "Electric fan", hi: "इलेक्ट्रिक पंखा" },
      { en: "Room heater", hi: "रूम हीटर" },
      { en: "Electric geyser", hi: "इलेक्ट्रिक गीज़र" }
    ],
    correct: {
      en: "Electric fan",
      hi: "इलेक्ट्रिक पंखा"
    },
    explanation: {
      en: "Electric fans work on mechanical motion, not heating.",
      hi: "इलेक्ट्रिक पंखा यांत्रिक गति पर कार्य करता है, ऊष्मा पर नहीं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is NOT a magnetic material?",
      hi: "निम्न में से कौन चुम्बकीय पदार्थ नहीं है?"
    },
    options: [
      { en: "Iron", hi: "लोहा" },
      { en: "Nickel", hi: "निकल" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Cobalt", hi: "कोबाल्ट" }
    ],
    correct: {
      en: "Plastic",
      hi: "प्लास्टिक"
    },
    explanation: {
      en: "Plastic is a non-magnetic material.",
      hi: "प्लास्टिक एक अचुम्बकीय पदार्थ है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Magnetic effect of current was discovered by",
      hi: "विद्युत धारा का चुम्बकीय प्रभाव किसने खोजा था?"
    },
    options: [
      { en: "Newton", hi: "न्यूटन" },
      { en: "Faraday", hi: "फैराडे" },
      { en: "Oersted", hi: "ओयर्स्टेड" },
      { en: "Edison", hi: "एडीसन" }
    ],
    correct: {
      en: "Oersted",
      hi: "ओयर्स्टेड"
    },
    explanation: {
      en: "Hans Christian Oersted discovered the magnetic effect of current.",
      hi: "हैन्स क्रिश्चियन ओयर्स्टेड ने विद्युत धारा का चुम्बकीय प्रभाव खोजा।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which appliance uses both heating and magnetic effects of current?",
      hi: "कौन सा उपकरण विद्युत धारा के दोनों ऊष्मीय और चुम्बकीय प्रभावों का उपयोग करता है?"
    },
    options: [
      { en: "Induction cooker", hi: "इंडक्शन कुकर" },
      { en: "Electric fan", hi: "इलेक्ट्रिक पंखा" },
      { en: "Table lamp", hi: "टेबल लैंप" },
      { en: "Refrigerator", hi: "फ्रिज" }
    ],
    correct: {
      en: "Induction cooker",
      hi: "इंडक्शन कुकर"
    },
    explanation: {
      en: "Induction cookers work using magnetic induction and generate heat.",
      hi: "इंडक्शन कुकर चुम्बकीय प्रेरण से कार्य करता है और ऊष्मा उत्पन्न करता है।"
    }
  }
];

export default electricEffects;
