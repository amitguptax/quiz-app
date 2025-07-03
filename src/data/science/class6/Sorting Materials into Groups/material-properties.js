const materialProperties = [
  {
    id: 1,
    question: {
      en: "Which property allows light to pass through a material?",
      hi: "कौन-सा गुण किसी वस्तु से प्रकाश को पार करने देता है?"
    },
    options: [
      { en: "Hardness", hi: "कठोरता" },
      { en: "Transparency", hi: "पारदर्शिता" },
      { en: "Roughness", hi: "खुरदरापन" },
      { en: "Flexibility", hi: "लचीलापन" }
    ],
    correct: {
      en: "Transparency",
      hi: "पारदर्शिता"
    },
    explanation: {
      en: "Transparent materials allow light to pass through them.",
      hi: "पारदर्शी वस्तुएँ प्रकाश को अपने आर-पार जाने देती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following materials is hard?",
      hi: "निम्न में से कौन-सी वस्तु कठोर होती है?"
    },
    options: [
      { en: "Cotton", hi: "कपास" },
      { en: "Iron", hi: "लोहा" },
      { en: "Sponge", hi: "स्पंज" },
      { en: "Wool", hi: "ऊन" }
    ],
    correct: {
      en: "Iron",
      hi: "लोहा"
    },
    explanation: {
      en: "Iron is a hard material and cannot be easily scratched.",
      hi: "लोहा एक कठोर पदार्थ है जिसे आसानी से खरोंचा नहीं जा सकता।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the property of a material that allows it to bend easily?",
      hi: "किस गुण के कारण कोई वस्तु आसानी से मुड़ सकती है?"
    },
    options: [
      { en: "Solubility", hi: "विलेयता" },
      { en: "Transparency", hi: "पारदर्शिता" },
      { en: "Flexibility", hi: "लचीलापन" },
      { en: "Conductivity", hi: "चालकता" }
    ],
    correct: {
      en: "Flexibility",
      hi: "लचीलापन"
    },
    explanation: {
      en: "Flexible materials can be bent easily without breaking.",
      hi: "लचीली वस्तुएँ आसानी से मुड़ सकती हैं बिना टूटे।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which material is soluble in water?",
      hi: "कौन-सी वस्तु पानी में घुलनशील है?"
    },
    options: [
      { en: "Chalk", hi: "चॉक" },
      { en: "Sugar", hi: "चीनी" },
      { en: "Sand", hi: "रेत" },
      { en: "Oil", hi: "तेल" }
    ],
    correct: {
      en: "Sugar",
      hi: "चीनी"
    },
    explanation: {
      en: "Sugar dissolves completely in water.",
      hi: "चीनी पानी में पूरी तरह घुल जाती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which material is a good conductor of heat?",
      hi: "निम्न में से कौन-सा पदार्थ ऊष्मा का अच्छा चालक है?"
    },
    options: [
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Copper", hi: "तांबा" },
      { en: "Glass", hi: "कांच" }
    ],
    correct: {
      en: "Copper",
      hi: "तांबा"
    },
    explanation: {
      en: "Copper is a metal and conducts heat very well.",
      hi: "तांबा एक धातु है जो ऊष्मा का अच्छा चालक है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which property helps in making umbrellas waterproof?",
      hi: "कौन-सा गुण छतरियों को जलरोधक बनाने में मदद करता है?"
    },
    options: [
      { en: "Transparency", hi: "पारदर्शिता" },
      { en: "Hardness", hi: "कठोरता" },
      { en: "Solubility", hi: "विलेयता" },
      { en: "Water resistance", hi: "जल प्रतिरोध" }
    ],
    correct: {
      en: "Water resistance",
      hi: "जल प्रतिरोध"
    },
    explanation: {
      en: "Water-resistant materials prevent water from passing through.",
      hi: "जल प्रतिरोधी वस्तुएँ पानी को अपने आर-पार नहीं जाने देतीं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which material is opaque?",
      hi: "निम्न में से कौन-सी वस्तु अपारदर्शी है?"
    },
    options: [
      { en: "Glass", hi: "कांच" },
      { en: "Water", hi: "पानी" },
      { en: "Wood", hi: "लकड़ी" },
      { en: "Air", hi: "हवा" }
    ],
    correct: {
      en: "Wood",
      hi: "लकड़ी"
    },
    explanation: {
      en: "Wood does not allow light to pass through, so it is opaque.",
      hi: "लकड़ी से प्रकाश नहीं गुजरता, इसलिए यह अपारदर्शी है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the texture of a smooth material?",
      hi: "चिकनी वस्तु की सतह कैसी होती है?"
    },
    options: [
      { en: "Rough", hi: "खुरदरी" },
      { en: "Bumpy", hi: "ऊबड़-खाबड़" },
      { en: "Soft", hi: "मुलायम" },
      { en: "Even and shiny", hi: "सपाट और चमकदार" }
    ],
    correct: {
      en: "Even and shiny",
      hi: "सपाट और चमकदार"
    },
    explanation: {
      en: "Smooth materials feel even and sometimes shine.",
      hi: "चिकनी वस्तुएँ सपाट और कभी-कभी चमकदार होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which material is soft to touch?",
      hi: "निम्न में से कौन-सी वस्तु छूने में मुलायम होती है?"
    },
    options: [
      { en: "Stone", hi: "पत्थर" },
      { en: "Iron", hi: "लोहा" },
      { en: "Cotton", hi: "कपास" },
      { en: "Glass", hi: "कांच" }
    ],
    correct: {
      en: "Cotton",
      hi: "कपास"
    },
    explanation: {
      en: "Cotton is a soft, fluffy natural fiber.",
      hi: "कपास एक मुलायम और फुलाया हुआ प्राकृतिक रेशा है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of these is a magnetic material?",
      hi: "इनमें से कौन-सा चुम्बकीय पदार्थ है?"
    },
    options: [
      { en: "Copper", hi: "तांबा" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Iron", hi: "लोहा" },
      { en: "Wood", hi: "लकड़ी" }
    ],
    correct: {
      en: "Iron",
      hi: "लोहा"
    },
    explanation: {
      en: "Iron is attracted to magnets, so it is magnetic.",
      hi: "लोहा चुम्बकों से आकर्षित होता है, इसलिए यह चुम्बकीय है।"
    }
  }
];

export default materialProperties;
