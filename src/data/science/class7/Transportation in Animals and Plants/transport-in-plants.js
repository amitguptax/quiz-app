const transportInPlants = [
  {
    id: 1,
    question: {
      en: "Which tissue is responsible for transporting water in plants?",
      hi: "पौधों में जल के परिवहन के लिए कौन सा ऊतक उत्तरदायी है?"
    },
    options: [
      { en: "Phloem", hi: "फ्लोएम" },
      { en: "Xylem", hi: "जाइलम" },
      { en: "Parenchyma", hi: "पैरेन्काइमा" },
      { en: "Collenchyma", hi: "कोलेन्काइमा" }
    ],
    correct: {
      en: "Xylem",
      hi: "जाइलम"
    },
    explanation: {
      en: "Xylem transports water from roots to all parts of the plant.",
      hi: "जाइलम पौधे की जड़ों से जल को सभी भागों तक पहुँचाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which tissue transports food in plants?",
      hi: "पौधों में भोजन के परिवहन के लिए कौन सा ऊतक जिम्मेदार होता है?"
    },
    options: [
      { en: "Xylem", hi: "जाइलम" },
      { en: "Phloem", hi: "फ्लोएम" },
      { en: "Cambium", hi: "कैम्बियम" },
      { en: "Epidermis", hi: "एपीडर्मिस" }
    ],
    correct: {
      en: "Phloem",
      hi: "फ्लोएम"
    },
    explanation: {
      en: "Phloem carries food from leaves to other parts of the plant.",
      hi: "फ्लोएम पत्तियों से अन्य भागों तक भोजन पहुँचाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the process of water loss through leaves called?",
      hi: "पत्तियों के माध्यम से जल की हानि की प्रक्रिया को क्या कहते हैं?"
    },
    options: [
      { en: "Photosynthesis", hi: "प्रकाश संश्लेषण" },
      { en: "Transpiration", hi: "वाष्पोत्सर्जन" },
      { en: "Respiration", hi: "श्वसन" },
      { en: "Absorption", hi: "अवशोषण" }
    ],
    correct: {
      en: "Transpiration",
      hi: "वाष्पोत्सर्जन"
    },
    explanation: {
      en: "Transpiration is the loss of water vapor from leaves.",
      hi: "पत्तियों से जल वाष्प के रूप में निकलने की प्रक्रिया वाष्पोत्सर्जन कहलाती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "From which part of the plant does water enter?",
      hi: "पौधे में जल किस भाग से प्रवेश करता है?"
    },
    options: [
      { en: "Leaves", hi: "पत्तियाँ" },
      { en: "Stem", hi: "तना" },
      { en: "Flowers", hi: "फूल" },
      { en: "Roots", hi: "जड़ें" }
    ],
    correct: {
      en: "Roots",
      hi: "जड़ें"
    },
    explanation: {
      en: "Water enters the plant through the roots from the soil.",
      hi: "जल मिट्टी से पौधे की जड़ों के माध्यम से प्रवेश करता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of the plant contains xylem and phloem?",
      hi: "पौधे के किस भाग में जाइलम और फ्लोएम पाए जाते हैं?"
    },
    options: [
      { en: "Flowers", hi: "फूल" },
      { en: "Stomata", hi: "रंध्र" },
      { en: "Vascular bundles", hi: "वाहिकीय गुच्छ" },
      { en: "Chloroplasts", hi: "हरितलवक" }
    ],
    correct: {
      en: "Vascular bundles",
      hi: "वाहिकीय गुच्छ"
    },
    explanation: {
      en: "Xylem and phloem are found in vascular bundles of plants.",
      hi: "जाइलम और फ्लोएम पौधों के वाहिकीय गुच्छों में पाए जाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the leaf controls transpiration?",
      hi: "पत्तियों का कौन सा भाग वाष्पोत्सर्जन को नियंत्रित करता है?"
    },
    options: [
      { en: "Veins", hi: "शिराएँ" },
      { en: "Chloroplast", hi: "हरितलवक" },
      { en: "Stomata", hi: "रंध्र" },
      { en: "Cuticle", hi: "क्यूटिकल" }
    ],
    correct: {
      en: "Stomata",
      hi: "रंध्र"
    },
    explanation: {
      en: "Stomata are small openings that control water loss in leaves.",
      hi: "रंध्र पत्तियों में छोटे छिद्र होते हैं जो जल हानि को नियंत्रित करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Food is transported from leaves to other parts by:",
      hi: "पत्तियों से अन्य भागों तक भोजन का परिवहन किसके द्वारा होता है?"
    },
    options: [
      { en: "Xylem", hi: "जाइलम" },
      { en: "Phloem", hi: "फ्लोएम" },
      { en: "Stomata", hi: "रंध्र" },
      { en: "Chloroplast", hi: "हरितलवक" }
    ],
    correct: {
      en: "Phloem",
      hi: "फ्लोएम"
    },
    explanation: {
      en: "Phloem transports food from leaves to roots and other parts.",
      hi: "फ्लोएम पत्तियों से भोजन को जड़ों और अन्य भागों तक पहुँचाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Transpiration helps in:",
      hi: "वाष्पोत्सर्जन किसमें मदद करता है?"
    },
    options: [
      { en: "Producing food", hi: "भोजन बनाने में" },
      { en: "Water absorption", hi: "जल अवशोषण में" },
      { en: "Water movement", hi: "जल के प्रवाह में" },
      { en: "All of the above", hi: "उपरोक्त सभी में" }
    ],
    correct: {
      en: "All of the above",
      hi: "उपरोक्त सभी में"
    },
    explanation: {
      en: "Transpiration aids in water movement, absorption, and cooling.",
      hi: "वाष्पोत्सर्जन जल के प्रवाह, अवशोषण और शीतलन में मदद करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which factor affects transpiration the most?",
      hi: "वाष्पोत्सर्जन को सबसे अधिक प्रभावित करने वाला कारक कौन सा है?"
    },
    options: [
      { en: "Wind", hi: "हवा" },
      { en: "Moonlight", hi: "चाँदनी" },
      { en: "Sound", hi: "ध्वनि" },
      { en: "Magnetism", hi: "चुंबकत्व" }
    ],
    correct: {
      en: "Wind",
      hi: "हवा"
    },
    explanation: {
      en: "Wind increases the rate of transpiration.",
      hi: "हवा वाष्पोत्सर्जन की दर को बढ़ा देती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "In which direction does xylem transport water?",
      hi: "जाइलम किस दिशा में जल का परिवहन करता है?"
    },
    options: [
      { en: "Downward", hi: "नीचे की ओर" },
      { en: "Upward", hi: "ऊपर की ओर" },
      { en: "Sideways", hi: "बग़ल की ओर" },
      { en: "All directions", hi: "सभी दिशाओं में" }
    ],
    correct: {
      en: "Upward",
      hi: "ऊपर की ओर"
    },
    explanation: {
      en: "Xylem transports water from roots upward to leaves.",
      hi: "जाइलम जड़ों से पत्तियों तक जल ऊपर की ओर पहुँचाता है।"
    }
  }
];

export default transportInPlants;
