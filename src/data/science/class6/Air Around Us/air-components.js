const airComponents = [
  {
    id: 1,
    question: {
      en: "Which gas is the most abundant in the air?",
      hi: "हवा में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Nitrogen",
      hi: "नाइट्रोजन"
    },
    explanation: {
      en: "Nitrogen makes up about 78% of air.",
      hi: "हवा में लगभग 78% नाइट्रोजन होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which gas is essential for respiration?",
      hi: "श्वसन के लिए आवश्यक गैस कौन सी है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Helium", hi: "हीलियम" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Oxygen is used by living beings to breathe.",
      hi: "सजीवों द्वारा श्वसन के लिए ऑक्सीजन का उपयोग किया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which gas is used by plants during photosynthesis?",
      hi: "पौधे प्रकाश संश्लेषण के दौरान किस गैस का उपयोग करते हैं?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Argon", hi: "आर्गन" }
    ],
    correct: {
      en: "Carbon dioxide",
      hi: "कार्बन डाइऑक्साइड"
    },
    explanation: {
      en: "Plants absorb carbon dioxide to make food.",
      hi: "पौधे भोजन बनाने के लिए कार्बन डाइऑक्साइड का उपयोग करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which gas in the air supports burning?",
      hi: "हवा में कौन सी गैस जलने में सहायक होती है?"
    },
    options: [
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Neon", hi: "निऑन" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Oxygen helps in the combustion process.",
      hi: "ऑक्सीजन जलने की प्रक्रिया में सहायता करती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the percentage of oxygen in the air?",
      hi: "हवा में ऑक्सीजन की प्रतिशतता कितनी होती है?"
    },
    options: [
      { en: "78%", hi: "78%" },
      { en: "21%", hi: "21%" },
      { en: "10%", hi: "10%" },
      { en: "5%", hi: "5%" }
    ],
    correct: {
      en: "21%",
      hi: "21%"
    },
    explanation: {
      en: "Air contains about 21% oxygen.",
      hi: "हवा में लगभग 21% ऑक्सीजन होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which component of air is needed by aquatic animals to breathe?",
      hi: "जलचर प्राणियों को श्वसन के लिए हवा के किस घटक की आवश्यकता होती है?"
    },
    options: [
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Argon", hi: "आर्गन" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Oxygen dissolved in water is used by aquatic animals.",
      hi: "जल में घुली हुई ऑक्सीजन का उपयोग जलचर प्राणी करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which component of air is a noble gas?",
      hi: "हवा का कौन सा घटक एक निष्क्रिय गैस (नोबल गैस) है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Argon", hi: "आर्गन" }
    ],
    correct: {
      en: "Argon",
      hi: "आर्गन"
    },
    explanation: {
      en: "Argon is a noble gas present in small amounts in air.",
      hi: "आर्गन एक निष्क्रिय गैस है जो हवा में थोड़ी मात्रा में पाई जाती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these gases is used by bacteria to fix nitrogen?",
      hi: "नाइट्रोजन को स्थिर करने के लिए कौन सी गैस बैक्टीरिया द्वारा उपयोग की जाती है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Helium", hi: "हीलियम" }
    ],
    correct: {
      en: "Nitrogen",
      hi: "नाइट्रोजन"
    },
    explanation: {
      en: "Nitrogen-fixing bacteria use nitrogen from the air.",
      hi: "नाइट्रोजन स्थिरीकरण करने वाले बैक्टीरिया हवा से नाइट्रोजन का उपयोग करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which gas is exhaled by humans during breathing?",
      hi: "श्वसन के दौरान मनुष्य किस गैस को बाहर निकालता है?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Ozone", hi: "ओजोन" }
    ],
    correct: {
      en: "Carbon dioxide",
      hi: "कार्बन डाइऑक्साइड"
    },
    explanation: {
      en: "Humans exhale carbon dioxide after using oxygen.",
      hi: "मनुष्य ऑक्सीजन का उपयोग करने के बाद कार्बन डाइऑक्साइड बाहर निकालते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following gases is present in very small amount in the air?",
      hi: "निम्न में से कौन सी गैस हवा में बहुत कम मात्रा में होती है?"
    },
    options: [
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Water vapor", hi: "जल वाष्प" }
    ],
    correct: {
      en: "Carbon dioxide",
      hi: "कार्बन डाइऑक्साइड"
    },
    explanation: {
      en: "Air contains only about 0.03% carbon dioxide.",
      hi: "हवा में केवल लगभग 0.03% कार्बन डाइऑक्साइड होती है।"
    }
  }
];

export default airComponents;
