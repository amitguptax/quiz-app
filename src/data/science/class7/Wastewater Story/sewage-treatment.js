const sewageTreatment = [
  {
    id: 1,
    question: {
      en: "What is sewage?",
      hi: "मलजल क्या है?"
    },
    options: [
      { en: "Clean water", hi: "स्वच्छ पानी" },
      { en: "Dirty water with waste", hi: "कचरे वाला गंदा पानी" },
      { en: "Boiled water", hi: "उबला हुआ पानी" },
      { en: "Rainwater", hi: "वर्षा का पानी" }
    ],
    correct: {
      en: "Dirty water with waste",
      hi: "कचरे वाला गंदा पानी"
    },
    explanation: {
      en: "Sewage is wastewater that contains human and other wastes.",
      hi: "मलजल वह गंदा पानी होता है जिसमें मानव और अन्य कचरे होते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the first step in sewage treatment?",
      hi: "मलजल उपचार में पहला चरण क्या होता है?"
    },
    options: [
      { en: "Disinfection", hi: "कीटाणुशोधन" },
      { en: "Chlorination", hi: "क्लोरीनीकरण" },
      { en: "Screening", hi: "छँटाई (स्क्रीनिंग)" },
      { en: "Aeration", hi: "वातन (एरेशन)" }
    ],
    correct: {
      en: "Screening",
      hi: "छँटाई (स्क्रीनिंग)"
    },
    explanation: {
      en: "In screening, large solid waste materials are removed from sewage.",
      hi: "स्क्रीनिंग में मलजल से बड़े ठोस कचरे को हटा दिया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which type of waste is removed in the primary treatment?",
      hi: "प्राथमिक उपचार में किस प्रकार के कचरे को हटाया जाता है?"
    },
    options: [
      { en: "Dissolved impurities", hi: "घुले हुए अशुद्धियाँ" },
      { en: "Large floating solids", hi: "बड़े तैरते ठोस पदार्थ" },
      { en: "Gases", hi: "गैसें" },
      { en: "Pathogens", hi: "रोगाणु" }
    ],
    correct: {
      en: "Large floating solids",
      hi: "बड़े तैरते ठोस पदार्थ"
    },
    explanation: {
      en: "Primary treatment removes suspended and floating solids from sewage.",
      hi: "प्राथमिक उपचार में मलजल से तैरते हुए ठोस पदार्थ हटाए जाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which process is used in secondary treatment of sewage?",
      hi: "मलजल के द्वितीयक उपचार में कौन सी प्रक्रिया का उपयोग किया जाता है?"
    },
    options: [
      { en: "Heating", hi: "गर्म करना" },
      { en: "Cooling", hi: "ठंडा करना" },
      { en: "Biological treatment using microbes", hi: "सूक्ष्मजीवों द्वारा जैविक उपचार" },
      { en: "Filtering through sand", hi: "रेत से छनाई" }
    ],
    correct: {
      en: "Biological treatment using microbes",
      hi: "सूक्ष्मजीवों द्वारा जैविक उपचार"
    },
    explanation: {
      en: "In secondary treatment, microbes are used to decompose organic matter.",
      hi: "द्वितीयक उपचार में जैविक पदार्थ को सड़ाने के लिए सूक्ष्मजीवों का उपयोग किया जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the purpose of aeration in sewage treatment?",
      hi: "मलजल उपचार में वातन (एरेशन) का उद्देश्य क्या है?"
    },
    options: [
      { en: "To kill germs", hi: "रोगाणुओं को मारना" },
      { en: "To remove solids", hi: "ठोस पदार्थ हटाना" },
      { en: "To add oxygen for microbes", hi: "सूक्ष्मजीवों के लिए ऑक्सीजन जोड़ना" },
      { en: "To make water hot", hi: "पानी को गर्म करना" }
    ],
    correct: {
      en: "To add oxygen for microbes",
      hi: "सूक्ष्मजीवों के लिए ऑक्सीजन जोड़ना"
    },
    explanation: {
      en: "Aeration helps provide oxygen to microbes that break down waste.",
      hi: "वातन से सूक्ष्मजीवों को ऑक्सीजन मिलती है जो कचरे को विघटित करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is sludge in sewage treatment?",
      hi: "मलजल उपचार में स्लज क्या होता है?"
    },
    options: [
      { en: "Clean water", hi: "स्वच्छ पानी" },
      { en: "Solid waste collected at the bottom", hi: "तल पर जमा ठोस कचरा" },
      { en: "Air bubbles", hi: "हवा के बुलबुले" },
      { en: "Chlorinated water", hi: "क्लोरीन युक्त पानी" }
    ],
    correct: {
      en: "Solid waste collected at the bottom",
      hi: "तल पर जमा ठोस कचरा"
    },
    explanation: {
      en: "Sludge is the thick solid waste settled at the bottom during treatment.",
      hi: "स्लज वह मोटा ठोस कचरा होता है जो उपचार के दौरान तल में जमा हो जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "How is sludge used after treatment?",
      hi: "उपचार के बाद स्लज का उपयोग कैसे किया जाता है?"
    },
    options: [
      { en: "Thrown into rivers", hi: "नदियों में फेंका जाता है" },
      { en: "Burned", hi: "जला दिया जाता है" },
      { en: "Used as fertilizer", hi: "उर्वरक के रूप में उपयोग किया जाता है" },
      { en: "Buried without treatment", hi: "बिना उपचार के गाड़ दिया जाता है" }
    ],
    correct: {
      en: "Used as fertilizer",
      hi: "उर्वरक के रूप में उपयोग किया जाता है"
    },
    explanation: {
      en: "Treated sludge is used as manure or fertilizer for plants.",
      hi: "उपचारित स्लज का उपयोग खाद या उर्वरक के रूप में किया जाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Why should untreated sewage not be released into water bodies?",
      hi: "बिना उपचार का मलजल जल स्रोतों में क्यों नहीं छोड़ा जाना चाहिए?"
    },
    options: [
      { en: "It is clean", hi: "यह स्वच्छ होता है" },
      { en: "It cools the water", hi: "यह पानी को ठंडा करता है" },
      { en: "It pollutes water and harms organisms", hi: "यह पानी को प्रदूषित करता है और जीवों को नुकसान पहुँचाता है" },
      { en: "It helps plants grow", hi: "यह पौधों की वृद्धि में मदद करता है" }
    ],
    correct: {
      en: "It pollutes water and harms organisms",
      hi: "यह पानी को प्रदूषित करता है और जीवों को नुकसान पहुँचाता है"
    },
    explanation: {
      en: "Untreated sewage contains harmful microbes and chemicals.",
      hi: "बिना उपचार का मलजल हानिकारक सूक्ष्मजीव और रसायन लिए होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the role of chlorine in sewage treatment?",
      hi: "मलजल उपचार में क्लोरीन की भूमिका क्या होती है?"
    },
    options: [
      { en: "To color the water", hi: "पानी को रंगने के लिए" },
      { en: "To remove solids", hi: "ठोस पदार्थ हटाने के लिए" },
      { en: "To kill harmful bacteria", hi: "हानिकारक बैक्टीरिया को मारने के लिए" },
      { en: "To increase smell", hi: "गंध बढ़ाने के लिए" }
    ],
    correct: {
      en: "To kill harmful bacteria",
      hi: "हानिकारक बैक्टीरिया को मारने के लिए"
    },
    explanation: {
      en: "Chlorine is used to disinfect and kill harmful germs in treated water.",
      hi: "क्लोरीन का उपयोग उपचारित पानी में हानिकारक कीटाणुओं को मारने के लिए किया जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is wastewater commonly called?",
      hi: "अपशिष्ट जल को सामान्यतः क्या कहा जाता है?"
    },
    options: [
      { en: "Drinking water", hi: "पेयजल" },
      { en: "Fresh water", hi: "ताजा पानी" },
      { en: "Sewage", hi: "मलजल" },
      { en: "Rainwater", hi: "वर्षा जल" }
    ],
    correct: {
      en: "Sewage",
      hi: "मलजल"
    },
    explanation: {
      en: "Wastewater from homes and industries is known as sewage.",
      hi: "घरों और उद्योगों से निकलने वाले अपशिष्ट जल को मलजल कहा जाता है।"
    }
  }
];

export default sewageTreatment;
