const animalAdaptations = [
  {
    id: 1,
    question: {
      en: "Why do polar bears have thick fur?",
      hi: "ध्रुवीय भालुओं के शरीर पर मोटे बाल क्यों होते हैं?"
    },
    options: [
      { en: "For swimming", hi: "तैराकी के लिए" },
      { en: "For camouflage", hi: "छलावरण के लिए" },
      { en: "To keep warm", hi: "गर्म रहने के लिए" },
      { en: "To attract mates", hi: "साथी को आकर्षित करने के लिए" }
    ],
    correct: {
      en: "To keep warm",
      hi: "गर्म रहने के लिए"
    },
    explanation: {
      en: "Thick fur helps polar bears survive in cold climates by keeping them warm.",
      hi: "मोटे बाल ध्रुवीय भालुओं को ठंडी जलवायु में गर्म रखने में मदद करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which adaptation helps a camel survive in the desert?",
      hi: "ऊंट को रेगिस्तान में जीवित रहने के लिए कौन सा अनुकूलन मदद करता है?"
    },
    options: [
      { en: "Sharp claws", hi: "नुकीले पंजे" },
      { en: "Webbed feet", hi: "जालीदार पैर" },
      { en: "Fat stored in hump", hi: "कूबड़ में वसा संग्रहित होती है" },
      { en: "Thick skin", hi: "मोटी त्वचा" }
    ],
    correct: {
      en: "Fat stored in hump",
      hi: "कूबड़ में वसा संग्रहित होती है"
    },
    explanation: {
      en: "The camel’s hump stores fat, which can be converted to water and energy.",
      hi: "ऊंट के कूबड़ में वसा संग्रहित होती है जो ऊर्जा और पानी में बदली जा सकती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following animals is adapted to cold climates?",
      hi: "निम्न में से कौन सा जानवर ठंडी जलवायु के लिए अनुकूलित है?"
    },
    options: [
      { en: "Camel", hi: "ऊँट" },
      { en: "Polar bear", hi: "ध्रुवीय भालू" },
      { en: "Lion", hi: "शेर" },
      { en: "Elephant", hi: "हाथी" }
    ],
    correct: {
      en: "Polar bear",
      hi: "ध्रुवीय भालू"
    },
    explanation: {
      en: "Polar bears have adaptations like thick fur and fat to survive in the Arctic.",
      hi: "ध्रुवीय भालू के पास आर्कटिक में जीवित रहने के लिए मोटे बाल और वसा जैसे अनुकूलन होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "How do penguins keep themselves warm?",
      hi: "पेंगुइन खुद को गर्म कैसे रखते हैं?"
    },
    options: [
      { en: "By eating a lot", hi: "बहुत खाकर" },
      { en: "By hibernating", hi: "शीतनिद्रा लेकर" },
      { en: "By huddling together", hi: "एक साथ जुड़कर" },
      { en: "By burrowing", hi: "गड्ढा खोदकर" }
    ],
    correct: {
      en: "By huddling together",
      hi: "एक साथ जुड़कर"
    },
    explanation: {
      en: "Penguins stay warm by huddling in groups, reducing heat loss.",
      hi: "पेंगुइन समूह में जुड़कर गर्म रहते हैं जिससे गर्मी का नुकसान कम होता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which feature helps fish to live in water?",
      hi: "कौन सी विशेषता मछलियों को पानी में रहने में मदद करती है?"
    },
    options: [
      { en: "Thick fur", hi: "मोटा फर" },
      { en: "Gills", hi: "गलफड़े" },
      { en: "Wings", hi: "पंख" },
      { en: "Hump", hi: "कूबड़" }
    ],
    correct: {
      en: "Gills",
      hi: "गलफड़े"
    },
    explanation: {
      en: "Gills allow fish to extract oxygen from water.",
      hi: "गलफड़े मछलियों को पानी से ऑक्सीजन लेने में सक्षम बनाते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which body part helps birds fly?",
      hi: "कौन सा अंग पक्षियों को उड़ने में मदद करता है?"
    },
    options: [
      { en: "Tail", hi: "पूंछ" },
      { en: "Feathers", hi: "पंख" },
      { en: "Beak", hi: "चोंच" },
      { en: "Legs", hi: "पैर" }
    ],
    correct: {
      en: "Feathers",
      hi: "पंख"
    },
    explanation: {
      en: "Feathers provide lift and help in flying.",
      hi: "पंख पक्षियों को उड़ान में उठाव और संतुलन प्रदान करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Why do desert animals usually come out at night?",
      hi: "रेगिस्तानी जानवर आमतौर पर रात में क्यों बाहर आते हैं?"
    },
    options: [
      { en: "To find more food", hi: "अधिक भोजन पाने के लिए" },
      { en: "To avoid daytime heat", hi: "दिन की गर्मी से बचने के लिए" },
      { en: "To avoid predators", hi: "शिकारियों से बचने के लिए" },
      { en: "To drink water", hi: "पानी पीने के लिए" }
    ],
    correct: {
      en: "To avoid daytime heat",
      hi: "दिन की गर्मी से बचने के लिए"
    },
    explanation: {
      en: "Desert animals are mostly nocturnal to avoid extreme daytime temperatures.",
      hi: "रेगिस्तानी जानवर दिन की अत्यधिक गर्मी से बचने के लिए सामान्यतः रात्रिचर होते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "What adaptation helps whales to survive in cold oceans?",
      hi: "व्हेल को ठंडे महासागरों में जीवित रहने के लिए कौन सा अनुकूलन मदद करता है?"
    },
    options: [
      { en: "Fins", hi: "पंख" },
      { en: "Sharp teeth", hi: "नुकीले दांत" },
      { en: "Blubber", hi: "मोटी वसा (ब्लबर)" },
      { en: "Gills", hi: "गलफड़े" }
    ],
    correct: {
      en: "Blubber",
      hi: "मोटी वसा (ब्लबर)"
    },
    explanation: {
      en: "Blubber is a thick layer of fat that insulates whales from cold water.",
      hi: "ब्लबर एक मोटी वसा की परत होती है जो व्हेल को ठंडे पानी से बचाती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How do frogs adapt to both land and water?",
      hi: "मेंढ़क भूमि और जल दोनों में कैसे अनुकूलित होते हैं?"
    },
    options: [
      { en: "By changing shape", hi: "आकार बदलकर" },
      { en: "Through moist skin and lungs", hi: "नम त्वचा और फेफड़ों से" },
      { en: "With fur and claws", hi: "फर और पंजों से" },
      { en: "Using fins and scales", hi: "पंख और तराजू से" }
    ],
    correct: {
      en: "Through moist skin and lungs",
      hi: "नम त्वचा और फेफड़ों से"
    },
    explanation: {
      en: "Frogs breathe through their lungs and moist skin to live on land and in water.",
      hi: "मेंढ़क फेफड़ों और नम त्वचा के माध्यम से सांस लेते हैं जिससे वे भूमि और जल दोनों में रह सकते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which animal has long legs and eyelashes to adapt to desert?",
      hi: "कौन से जानवर के लंबे पैर और बरौनियाँ होती हैं जो रेगिस्तान के लिए अनुकूल होती हैं?"
    },
    options: [
      { en: "Lion", hi: "शेर" },
      { en: "Camel", hi: "ऊँट" },
      { en: "Kangaroo", hi: "कंगारू" },
      { en: "Elephant", hi: "हाथी" }
    ],
    correct: {
      en: "Camel",
      hi: "ऊँट"
    },
    explanation: {
      en: "Camels have long legs to keep body away from hot sand and long eyelashes to protect from sand.",
      hi: "ऊँट के लंबे पैर गर्म रेत से शरीर को दूर रखते हैं और लंबी बरौनियाँ रेत से आंखों को बचाती हैं।"
    }
  }
];

export default animalAdaptations;
