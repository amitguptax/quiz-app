const modesOfNutrition = [
  {
    id: 1,
    question: {
      en: "What is the mode of nutrition in green plants?",
      hi: "हरे पौधों में पोषण का प्रकार क्या है?"
    },
    options: [
      { en: "Heterotrophic", hi: "परपोषी" },
      { en: "Saprotrophic", hi: "सैप्रोट्रॉफिक" },
      { en: "Autotrophic", hi: "स्वपोषी" },
      { en: "Parasitic", hi: "परजीवी" }
    ],
    correct: {
      en: "Autotrophic",
      hi: "स्वपोषी"
    },
    explanation: {
      en: "Green plants make their own food using sunlight and are autotrophs.",
      hi: "हरे पौधे सूर्य के प्रकाश का उपयोग करके अपना भोजन स्वयं बनाते हैं, इसलिए वे स्वपोषी होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following organisms shows heterotrophic nutrition?",
      hi: "निम्न में से किसमें परपोषी पोषण पाया जाता है?"
    },
    options: [
      { en: "Neem tree", hi: "नीम का पेड़" },
      { en: "Mushroom", hi: "कवक" },
      { en: "Algae", hi: "शैवाल" },
      { en: "Spinach", hi: "पालक" }
    ],
    correct: {
      en: "Mushroom",
      hi: "कवक"
    },
    explanation: {
      en: "Mushrooms cannot prepare their food and depend on decaying matter.",
      hi: "कवक अपना भोजन स्वयं नहीं बनाते, वे सड़े-गले पदार्थों पर निर्भर रहते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which plant shows parasitic mode of nutrition?",
      hi: "कौन सा पौधा परजीवी पोषण दिखाता है?"
    },
    options: [
      { en: "Cactus", hi: "कैक्टस" },
      { en: "Cuscuta", hi: "अमरबेल (कसकटा)" },
      { en: "Mango", hi: "आम" },
      { en: "Neem", hi: "नीम" }
    ],
    correct: {
      en: "Cuscuta",
      hi: "अमरबेल (कसकटा)"
    },
    explanation: {
      en: "Cuscuta is a parasitic plant that depends on host for nutrition.",
      hi: "अमरबेल एक परजीवी पौधा है जो अपने पोषण के लिए दूसरे पौधों पर निर्भर रहता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "In saprotrophic nutrition, organisms feed on:",
      hi: "सैप्रोट्रॉफिक पोषण में जीव किस पर भोजन करते हैं?"
    },
    options: [
      { en: "Living organisms", hi: "सजीव प्राणी" },
      { en: "Green plants", hi: "हरे पौधे" },
      { en: "Dead and decaying matter", hi: "मृत और सड़ा-गला पदार्थ" },
      { en: "Sunlight", hi: "सूर्य का प्रकाश" }
    ],
    correct: {
      en: "Dead and decaying matter",
      hi: "मृत और सड़ा-गला पदार्थ"
    },
    explanation: {
      en: "Saprotrophs get nutrition from dead and decaying organic matter.",
      hi: "सैप्रोट्रॉफ्स मृत और सड़ी-गली जैविक वस्तुओं से पोषण प्राप्त करते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is an autotrophic organism?",
      hi: "निम्न में से कौन सा स्वपोषी जीव है?"
    },
    options: [
      { en: "Fungi", hi: "फफूंदी" },
      { en: "Lice", hi: "जूं" },
      { en: "Algae", hi: "शैवाल" },
      { en: "Leech", hi: "जोंक" }
    ],
    correct: {
      en: "Algae",
      hi: "शैवाल"
    },
    explanation: {
      en: "Algae prepare their food using sunlight and are autotrophic.",
      hi: "शैवाल सूर्य के प्रकाश से अपना भोजन बनाते हैं, इसलिए वे स्वपोषी होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which mode of nutrition is seen in fungi?",
      hi: "फफूंद में कौन सा पोषण प्रकार देखा जाता है?"
    },
    options: [
      { en: "Autotrophic", hi: "स्वपोषी" },
      { en: "Heterotrophic", hi: "परपोषी" },
      { en: "Parasitic", hi: "परजीवी" },
      { en: "Saprotrophic", hi: "सैप्रोट्रॉफिक" }
    ],
    correct: {
      en: "Saprotrophic",
      hi: "सैप्रोट्रॉफिक"
    },
    explanation: {
      en: "Fungi get their food from dead organic matter through saprotrophic nutrition.",
      hi: "फफूंद मृत जैविक वस्तुओं से भोजन प्राप्त करती है और सैप्रोट्रॉफिक पोषण अपनाती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following does not show autotrophic nutrition?",
      hi: "निम्न में से कौन स्वपोषी पोषण नहीं दिखाता?"
    },
    options: [
      { en: "Green plant", hi: "हरा पौधा" },
      { en: "Algae", hi: "शैवाल" },
      { en: "Fungi", hi: "फफूंदी" },
      { en: "Cactus", hi: "कैक्टस" }
    ],
    correct: {
      en: "Fungi",
      hi: "फफूंदी"
    },
    explanation: {
      en: "Fungi do not perform photosynthesis and hence are not autotrophs.",
      hi: "फफूंदी प्रकाश संश्लेषण नहीं करती, इसलिए यह स्वपोषी नहीं है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is an insectivorous plant?",
      hi: "इनमें से कौन सा एक कीटभक्षी पौधा है?"
    },
    options: [
      { en: "Cuscuta", hi: "अमरबेल" },
      { en: "Pitcher plant", hi: "घड़ा पौधा" },
      { en: "Mango tree", hi: "आम का पेड़" },
      { en: "Neem", hi: "नीम" }
    ],
    correct: {
      en: "Pitcher plant",
      hi: "घड़ा पौधा"
    },
    explanation: {
      en: "Pitcher plant traps insects and digests them for nutrients.",
      hi: "घड़ा पौधा कीटों को पकड़कर पचाता है और पोषक तत्व प्राप्त करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which organism prepares food using chlorophyll?",
      hi: "कौन सा जीव क्लोरोफिल की सहायता से भोजन बनाता है?"
    },
    options: [
      { en: "Fungi", hi: "फफूंदी" },
      { en: "Algae", hi: "शैवाल" },
      { en: "Bacteria", hi: "बैक्टीरिया" },
      { en: "Earthworm", hi: "केंचुआ" }
    ],
    correct: {
      en: "Algae",
      hi: "शैवाल"
    },
    explanation: {
      en: "Algae have chlorophyll and make food through photosynthesis.",
      hi: "शैवाल में क्लोरोफिल होता है और यह प्रकाश-संश्लेषण से भोजन बनाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which organism derives nutrition from a host without killing it?",
      hi: "कौन सा जीव पोषण के लिए अपने होस्ट से बिना उसे मारे प्राप्त करता है?"
    },
    options: [
      { en: "Tiger", hi: "बाघ" },
      { en: "Cuscuta", hi: "अमरबेल" },
      { en: "Crow", hi: "कौआ" },
      { en: "Goat", hi: "बकरी" }
    ],
    correct: {
      en: "Cuscuta",
      hi: "अमरबेल"
    },
    explanation: {
      en: "Cuscuta is a parasitic plant that lives on host and takes its food.",
      hi: "अमरबेल एक परजीवी पौधा है जो होस्ट पौधे से पोषण प्राप्त करता है।"
    }
  }
];

export default modesOfNutrition;
