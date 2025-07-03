const forestEcosystem = [
  {
    id: 1,
    question: {
      en: "What is a forest ecosystem?",
      hi: "जंगल की पारिस्थितिकी क्या है?"
    },
    options: [
      { en: "Only trees", hi: "केवल पेड़" },
      { en: "Only animals", hi: "केवल जानवर" },
      { en: "Interaction of plants, animals, and environment", hi: "पौधों, जानवरों और पर्यावरण की पारस्परिक क्रिया" },
      { en: "Only water bodies", hi: "केवल जल निकाय" }
    ],
    correct: {
      en: "Interaction of plants, animals, and environment",
      hi: "पौधों, जानवरों और पर्यावरण की पारस्परिक क्रिया"
    },
    explanation: {
      en: "A forest ecosystem includes all living and non-living things interacting in the forest.",
      hi: "जंगल की पारिस्थितिकी में सभी सजीव और निर्जीव तत्व शामिल होते हैं जो एक-दूसरे से जुड़े होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is a producer in a forest ecosystem?",
      hi: "निम्न में से कौन जंगल की पारिस्थितिकी में उत्पादक है?"
    },
    options: [
      { en: "Deer", hi: "हिरण" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Trees", hi: "पेड़" },
      { en: "Fungi", hi: "कवक" }
    ],
    correct: {
      en: "Trees",
      hi: "पेड़"
    },
    explanation: {
      en: "Trees are producers because they make their own food by photosynthesis.",
      hi: "पेड़ उत्पादक होते हैं क्योंकि वे प्रकाश संश्लेषण द्वारा अपना भोजन बनाते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these is a decomposer in the forest?",
      hi: "निम्न में से कौन जंगल में अपघटक होता है?"
    },
    options: [
      { en: "Lion", hi: "सिंह" },
      { en: "Fungi", hi: "कवक" },
      { en: "Parrot", hi: "तोता" },
      { en: "Grass", hi: "घास" }
    ],
    correct: {
      en: "Fungi",
      hi: "कवक"
    },
    explanation: {
      en: "Fungi decompose dead plants and animals and recycle nutrients.",
      hi: "कवक मृत पौधों और जानवरों को अपघटित कर पोषक तत्वों को पुनः उपयोग में लाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What do herbivores in a forest eat?",
      hi: "जंगल में शाकाहारी जानवर क्या खाते हैं?"
    },
    options: [
      { en: "Meat", hi: "मांस" },
      { en: "Grass and plants", hi: "घास और पौधे" },
      { en: "Dead animals", hi: "मृत जानवर" },
      { en: "Insects", hi: "कीड़े" }
    ],
    correct: {
      en: "Grass and plants",
      hi: "घास और पौधे"
    },
    explanation: {
      en: "Herbivores feed on plants and grass.",
      hi: "शाकाहारी जानवर पौधों और घास पर निर्भर करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these is a carnivore in the forest?",
      hi: "जंगल में निम्न में से कौन मांसाहारी है?"
    },
    options: [
      { en: "Elephant", hi: "हाथी" },
      { en: "Monkey", hi: "बंदर" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Rabbit", hi: "खरगोश" }
    ],
    correct: {
      en: "Tiger",
      hi: "बाघ"
    },
    explanation: {
      en: "Tigers are carnivores and eat other animals.",
      hi: "बाघ मांसाहारी होते हैं और अन्य जानवरों को खाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is the role of decomposers in a forest?",
      hi: "जंगल में अपघटकों की भूमिका क्या होती है?"
    },
    options: [
      { en: "Hunting animals", hi: "जानवरों का शिकार करना" },
      { en: "Absorbing sunlight", hi: "सूरज की रोशनी सोखना" },
      { en: "Breaking down dead matter", hi: "मृत पदार्थ को विघटित करना" },
      { en: "Producing food", hi: "भोजन बनाना" }
    ],
    correct: {
      en: "Breaking down dead matter",
      hi: "मृत पदार्थ को विघटित करना"
    },
    explanation: {
      en: "Decomposers break down dead plants and animals and help recycle nutrients.",
      hi: "अपघटक मृत पौधों और जानवरों को विघटित करके पोषक तत्वों को पुनः प्रयोग में लाते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What do we call animals that eat both plants and animals?",
      hi: "उन जानवरों को क्या कहते हैं जो पौधे और जानवर दोनों खाते हैं?"
    },
    options: [
      { en: "Herbivores", hi: "शाकाहारी" },
      { en: "Carnivores", hi: "मांसाहारी" },
      { en: "Omnivores", hi: "सर्वाहारी" },
      { en: "Insectivores", hi: "कीटाहारी" }
    ],
    correct: {
      en: "Omnivores",
      hi: "सर्वाहारी"
    },
    explanation: {
      en: "Omnivores eat both plants and animals.",
      hi: "सर्वाहारी जानवर पौधों और जानवरों दोनों को खाते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is a non-living component of the forest ecosystem?",
      hi: "निम्न में से कौन जंगल की पारिस्थितिकी का निर्जीव घटक है?"
    },
    options: [
      { en: "Leopard", hi: "तेंदुआ" },
      { en: "Tree", hi: "पेड़" },
      { en: "Soil", hi: "मिट्टी" },
      { en: "Bird", hi: "पक्षी" }
    ],
    correct: {
      en: "Soil",
      hi: "मिट्टी"
    },
    explanation: {
      en: "Soil is a non-living part of the forest that supports plant growth.",
      hi: "मिट्टी जंगल का निर्जीव घटक है जो पौधों की वृद्धि में सहायता करती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these helps in seed dispersal in forests?",
      hi: "जंगल में बीज फैलाने में निम्न में से कौन मदद करता है?"
    },
    options: [
      { en: "Animals", hi: "जानवर" },
      { en: "Sun", hi: "सूर्य" },
      { en: "Rocks", hi: "चट्टानें" },
      { en: "Fire", hi: "आग" }
    ],
    correct: {
      en: "Animals",
      hi: "जानवर"
    },
    explanation: {
      en: "Animals help disperse seeds by carrying them to different places.",
      hi: "जानवर बीजों को एक स्थान से दूसरे स्थान तक ले जाकर फैलाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which gas is released by trees in forests?",
      hi: "जंगलों में पेड़ कौन सी गैस छोड़ते हैं?"
    },
    options: [
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Trees release oxygen during photosynthesis.",
      hi: "पेड़ प्रकाश संश्लेषण के दौरान ऑक्सीजन छोड़ते हैं।"
    }
  }
];

export default forestEcosystem;
