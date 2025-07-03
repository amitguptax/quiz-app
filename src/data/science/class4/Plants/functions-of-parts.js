const functionsOfParts = [
  {
    id: 1,
    question: {
      en: "What is the main function of the roots?",
      hi: "जड़ों का मुख्य कार्य क्या है?"
    },
    options: [
      { en: "Make food", hi: "भोजन बनाना" },
      { en: "Anchor the plant and absorb water", hi: "पौधे को थामना और पानी सोखना" },
      { en: "Produce flowers", hi: "फूल बनाना" },
      { en: "Attract insects", hi: "कीटों को आकर्षित करना" }
    ],
    correct: {
      en: "Anchor the plant and absorb water",
      hi: "पौधे को थामना और पानी सोखना"
    },
    explanation: {
      en: "Roots hold the plant in soil and absorb water and nutrients.",
      hi: "जड़ें पौधे को मिट्टी में थामती हैं और पानी व पोषक तत्व सोखती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What does the stem do?",
      hi: "तना क्या करता है?"
    },
    options: [
      { en: "Makes seeds", hi: "बीज बनाता है" },
      { en: "Holds the plant upright and carries food & water", hi: "पौधे को सीधा रखता है और भोजन व पानी पहुंचाता है" },
      { en: "Absorbs sunlight", hi: "सूरज की रोशनी सोखता है" },
      { en: "Helps in reproduction", hi: "प्रजनन में मदद करता है" }
    ],
    correct: {
      en: "Holds the plant upright and carries food & water",
      hi: "पौधे को सीधा रखता है और भोजन व पानी पहुंचाता है"
    },
    explanation: {
      en: "The stem supports the plant and transports water, nutrients, and food.",
      hi: "तना पौधे को सहारा देता है और जल, पोषक तत्व तथा भोजन पहुँचाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the function of leaves?",
      hi: "पत्तों का कार्य क्या है?"
    },
    options: [
      { en: "Grow roots", hi: "जड़ें उगाना" },
      { en: "Make food for the plant", hi: "पौधे के लिए भोजन बनाना" },
      { en: "Attract insects", hi: "कीटों को आकर्षित करना" },
      { en: "Hold the plant", hi: "पौधे को थामना" }
    ],
    correct: {
      en: "Make food for the plant",
      hi: "पौधे के लिए भोजन बनाना"
    },
    explanation: {
      en: "Leaves make food by photosynthesis using sunlight.",
      hi: "पत्ते सूर्य की रोशनी से प्रकाश-संश्लेषण द्वारा भोजन बनाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the role of flowers?",
      hi: "फूलों की भूमिका क्या है?"
    },
    options: [
      { en: "Transport water", hi: "पानी पहुंचाना" },
      { en: "Help in reproduction", hi: "प्रजनन में मदद करना" },
      { en: "Absorb minerals", hi: "खनिज सोखना" },
      { en: "Make food", hi: "भोजन बनाना" }
    ],
    correct: {
      en: "Help in reproduction",
      hi: "प्रजनन में मदद करना"
    },
    explanation: {
      en: "Flowers help the plant reproduce by forming seeds and fruits.",
      hi: "फूल बीज और फल बनाकर प्रजनन में मदद करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which part of a plant contains seeds?",
      hi: "पौधे का कौन सा भाग बीज रखता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ता" },
      { en: "Root", hi: "जड़" },
      { en: "Fruit", hi: "फल" },
      { en: "Stem", hi: "तना" }
    ],
    correct: {
      en: "Fruit",
      hi: "फल"
    },
    explanation: {
      en: "Fruits grow from flowers and hold seeds inside them.",
      hi: "फल फूलों से बनते हैं और उनके अंदर बीज होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the plant grows underground?",
      hi: "पौधे का कौन सा भाग जमीन के नीचे उगता है?"
    },
    options: [
      { en: "Leaf", hi: "पत्ता" },
      { en: "Flower", hi: "फूल" },
      { en: "Root", hi: "जड़" },
      { en: "Fruit", hi: "फल" }
    ],
    correct: {
      en: "Root",
      hi: "जड़"
    },
    explanation: {
      en: "Roots usually grow under the soil and absorb water and minerals.",
      hi: "जड़ें आमतौर पर मिट्टी के नीचे उगती हैं और पानी व खनिज सोखती हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "How does the leaf help the plant?",
      hi: "पत्ता पौधे की किस प्रकार सहायता करता है?"
    },
    options: [
      { en: "By holding fruits", hi: "फलों को पकड़कर" },
      { en: "By making food", hi: "भोजन बनाकर" },
      { en: "By growing roots", hi: "जड़ें उगाकर" },
      { en: "By producing seeds", hi: "बीज बनाकर" }
    ],
    correct: {
      en: "By making food",
      hi: "भोजन बनाकर"
    },
    explanation: {
      en: "The leaf helps the plant by producing food through photosynthesis.",
      hi: "पत्ता प्रकाश-संश्लेषण द्वारा भोजन बनाकर पौधे की सहायता करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which part supports the plant to stand straight?",
      hi: "कौन सा भाग पौधे को सीधा खड़ा रहने में सहारा देता है?"
    },
    options: [
      { en: "Root", hi: "जड़" },
      { en: "Stem", hi: "तना" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Fruit", hi: "फल" }
    ],
    correct: {
      en: "Stem",
      hi: "तना"
    },
    explanation: {
      en: "The stem gives support to the plant and keeps it upright.",
      hi: "तना पौधे को सहारा देता है और उसे सीधा रखता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which part helps in attracting insects for pollination?",
      hi: "पौधे का कौन सा भाग परागण के लिए कीटों को आकर्षित करता है?"
    },
    options: [
      { en: "Fruit", hi: "फल" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Flower", hi: "फूल" },
      { en: "Root", hi: "जड़" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Flowers are often colorful and scented to attract insects.",
      hi: "फूल रंगीन और सुगंधित होते हैं जो कीटों को आकर्षित करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which part helps in the growth of new plants?",
      hi: "पौधे का कौन सा भाग नए पौधे उगाने में मदद करता है?"
    },
    options: [
      { en: "Fruit", hi: "फल" },
      { en: "Seed", hi: "बीज" },
      { en: "Leaf", hi: "पत्ता" },
      { en: "Stem", hi: "तना" }
    ],
    correct: {
      en: "Seed",
      hi: "बीज"
    },
    explanation: {
      en: "Seeds germinate and grow into new plants.",
      hi: "बीज अंकुरित होकर नए पौधों में विकसित होते हैं।"
    }
  }
];

export default functionsOfParts;
