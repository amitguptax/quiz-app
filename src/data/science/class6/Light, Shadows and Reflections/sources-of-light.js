const sourcesOfLight = [
  {
    id: 1,
    question: {
      en: "Which of the following is a luminous object?",
      hi: "निम्न में से कौन एक प्रकाशमान वस्तु है?"
    },
    options: [
      { en: "Table", hi: "मेज" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Book", hi: "किताब" },
      { en: "Mirror", hi: "आईना" }
    ],
    correct: {
      en: "Sun",
      hi: "सूर्य"
    },
    explanation: {
      en: "Sun is a luminous object as it emits its own light.",
      hi: "सूर्य एक प्रकाशमान वस्तु है क्योंकि यह स्वयं प्रकाश उत्सर्जित करता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a non-luminous object?",
      hi: "निम्न में से कौन एक अप्रकाशमान वस्तु है?"
    },
    options: [
      { en: "Candle", hi: "मोमबत्ती" },
      { en: "Torch", hi: "टॉर्च" },
      { en: "Moon", hi: "चाँद" },
      { en: "Fire", hi: "आग" }
    ],
    correct: {
      en: "Moon",
      hi: "चाँद"
    },
    explanation: {
      en: "Moon is a non-luminous object because it reflects sunlight.",
      hi: "चाँद एक अप्रकाशमान वस्तु है क्योंकि यह सूर्य का प्रकाश परावर्तित करता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which property of light helps us to see objects?",
      hi: "प्रकाश का कौन सा गुण हमें वस्तुओं को देखने में मदद करता है?"
    },
    options: [
      { en: "Light bends", hi: "प्रकाश मुड़ता है" },
      { en: "Light reflects", hi: "प्रकाश परावर्तित होता है" },
      { en: "Light travels in curves", hi: "प्रकाश वक्र में चलता है" },
      { en: "Light is colorful", hi: "प्रकाश रंगीन होता है" }
    ],
    correct: {
      en: "Light reflects",
      hi: "प्रकाश परावर्तित होता है"
    },
    explanation: {
      en: "We see objects because light reflects off their surface and reaches our eyes.",
      hi: "हम वस्तुओं को देख सकते हैं क्योंकि प्रकाश उनके सतह से परावर्तित होकर हमारी आँखों तक पहुँचता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these travels in a straight line?",
      hi: "इनमें से कौन सी चीज सीधी रेखा में चलती है?"
    },
    options: [
      { en: "Sound", hi: "ध्वनि" },
      { en: "Air", hi: "हवा" },
      { en: "Water", hi: "पानी" },
      { en: "Light", hi: "प्रकाश" }
    ],
    correct: {
      en: "Light",
      hi: "प्रकाश"
    },
    explanation: {
      en: "Light travels in a straight line.",
      hi: "प्रकाश सीधी रेखा में चलता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following does NOT emit light?",
      hi: "निम्न में से कौन प्रकाश नहीं उत्सर्जित करता?"
    },
    options: [
      { en: "Torch", hi: "टॉर्च" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Mirror", hi: "आईना" },
      { en: "Candle", hi: "मोमबत्ती" }
    ],
    correct: {
      en: "Mirror",
      hi: "आईना"
    },
    explanation: {
      en: "A mirror only reflects light; it does not emit light.",
      hi: "आईना केवल प्रकाश को परावर्तित करता है, यह स्वयं प्रकाश नहीं देता।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the speed of light in air?",
      hi: "वायुमंडल में प्रकाश की गति कितनी होती है?"
    },
    options: [
      { en: "300 m/s", hi: "300 मी/से" },
      { en: "3000 m/s", hi: "3000 मी/से" },
      { en: "3 lakh m/s", hi: "3 लाख मी/से" },
      { en: "3 lakh km/s", hi: "3 लाख किमी/से" }
    ],
    correct: {
      en: "3 lakh km/s",
      hi: "3 लाख किमी/से"
    },
    explanation: {
      en: "Light travels at about 3 lakh kilometers per second in air.",
      hi: "प्रकाश वायु में लगभग 3 लाख किलोमीटर प्रति सेकंड की गति से चलता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why does a torch form a beam of light?",
      hi: "टॉर्च प्रकाश की किरण क्यों बनाती है?"
    },
    options: [
      { en: "Because light bends", hi: "क्योंकि प्रकाश मुड़ता है" },
      { en: "Because light reflects", hi: "क्योंकि प्रकाश परावर्तित होता है" },
      { en: "Because light spreads in all directions", hi: "क्योंकि प्रकाश सभी दिशाओं में फैलता है" },
      { en: "Because light travels in a straight line", hi: "क्योंकि प्रकाश सीधी रेखा में चलता है" }
    ],
    correct: {
      en: "Because light travels in a straight line",
      hi: "क्योंकि प्रकाश सीधी रेखा में चलता है"
    },
    explanation: {
      en: "A torch produces a straight beam of light due to straight-line travel of light.",
      hi: "प्रकाश सीधी रेखा में चलने के कारण टॉर्च एक किरण बनाती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is a property of light?",
      hi: "इनमें से कौन प्रकाश का गुण है?"
    },
    options: [
      { en: "It produces sound", hi: "यह ध्वनि उत्पन्न करता है" },
      { en: "It needs a medium to travel", hi: "इसे चलने के लिए माध्यम की आवश्यकता होती है" },
      { en: "It travels in straight lines", hi: "यह सीधी रेखा में चलता है" },
      { en: "It is invisible", hi: "यह अदृश्य होता है" }
    ],
    correct: {
      en: "It travels in straight lines",
      hi: "यह सीधी रेखा में चलता है"
    },
    explanation: {
      en: "One main property of light is that it travels in straight lines.",
      hi: "प्रकाश का एक मुख्य गुण है कि यह सीधी रेखा में चलता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is NOT a property of light?",
      hi: "निम्न में से कौन प्रकाश का गुण नहीं है?"
    },
    options: [
      { en: "Light travels in a straight line", hi: "प्रकाश सीधी रेखा में चलता है" },
      { en: "Light helps in vision", hi: "प्रकाश देखने में मदद करता है" },
      { en: "Light can make sound", hi: "प्रकाश ध्वनि बना सकता है" },
      { en: "Light reflects from objects", hi: "प्रकाश वस्तुओं से परावर्तित होता है" }
    ],
    correct: {
      en: "Light can make sound",
      hi: "प्रकाश ध्वनि बना सकता है"
    },
    explanation: {
      en: "Light does not produce sound.",
      hi: "प्रकाश ध्वनि उत्पन्न नहीं करता।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is a source of artificial light?",
      hi: "निम्न में से कौन कृत्रिम प्रकाश स्रोत है?"
    },
    options: [
      { en: "Sun", hi: "सूर्य" },
      { en: "Stars", hi: "तारे" },
      { en: "Electric bulb", hi: "बिजली का बल्ब" },
      { en: "Firefly", hi: "जुगनू" }
    ],
    correct: {
      en: "Electric bulb",
      hi: "बिजली का बल्ब"
    },
    explanation: {
      en: "Electric bulb is a man-made source of light.",
      hi: "बिजली का बल्ब एक मानव निर्मित प्रकाश स्रोत है।"
    }
  }
];

export default sourcesOfLight;
