const animalNutrition = [
  {
    id: 1,
    question: {
      en: "What type of nutrition do animals exhibit?",
      hi: "जानवर किस प्रकार का पोषण प्रदर्शित करते हैं?"
    },
    options: [
      { en: "Autotrophic", hi: "स्वपोषी" },
      { en: "Heterotrophic", hi: "परपोषी" },
      { en: "Symbiotic", hi: "सहजीवी" },
      { en: "Saprotrophic", hi: "मृतपोषी" }
    ],
    correct: {
      en: "Heterotrophic",
      hi: "परपोषी"
    },
    explanation: {
      en: "Animals depend on other organisms for food, hence they show heterotrophic nutrition.",
      hi: "जानवर भोजन के लिए अन्य जीवों पर निर्भर होते हैं, इसलिए वे परपोषी पोषण दिखाते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following animals chews the cud?",
      hi: "निम्न में से कौन जानवर जुगाली करता है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cow", hi: "गाय" },
      { en: "Cat", hi: "बिल्ली" },
      { en: "Horse", hi: "घोड़ा" }
    ],
    correct: {
      en: "Cow",
      hi: "गाय"
    },
    explanation: {
      en: "Cows are ruminants and chew cud to digest cellulose.",
      hi: "गाय जुगाली करने वाले जानवर होते हैं और सेलूलोज़ को पचाने के लिए जुगाली करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the name of the partially digested food returned to the mouth for chewing?",
      hi: "आंशिक रूप से पचा हुआ भोजन जो फिर से चबाने के लिए मुँह में लाया जाता है, उसे क्या कहते हैं?"
    },
    options: [
      { en: "Chyme", hi: "काइम" },
      { en: "Bolus", hi: "बोलस" },
      { en: "Cud", hi: "जुगाली" },
      { en: "Bile", hi: "पित्त" }
    ],
    correct: {
      en: "Cud",
      hi: "जुगाली"
    },
    explanation: {
      en: "Cud is the food that ruminants bring back to the mouth for re-chewing.",
      hi: "जुगाली वह भोजन है जिसे जुगाली करने वाले जानवर फिर से चबाने के लिए मुँह में लाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following animals swallows food without chewing?",
      hi: "निम्न में से कौन सा जानवर बिना चबाए भोजन निगलता है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Snake", hi: "साँप" },
      { en: "Goat", hi: "बकरी" }
    ],
    correct: {
      en: "Snake",
      hi: "साँप"
    },
    explanation: {
      en: "Snakes swallow their prey whole without chewing.",
      hi: "साँप अपने शिकार को बिना चबाए पूरा निगल लेते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the function of the rumen in ruminants?",
      hi: "जुगाली करने वाले जानवरों में रूमेन का कार्य क्या है?"
    },
    options: [
      { en: "Absorbs nutrients", hi: "पोषक तत्वों को अवशोषित करता है" },
      { en: "Stores bile", hi: "पित्त को संग्रह करता है" },
      { en: "Ferments cellulose", hi: "सेलुलोज़ का किण्वन करता है" },
      { en: "Secretes enzymes", hi: "एंजाइम का स्राव करता है" }
    ],
    correct: {
      en: "Ferments cellulose",
      hi: "सेलुलोज़ का किण्वन करता है"
    },
    explanation: {
      en: "The rumen contains microbes that help ferment cellulose in plant food.",
      hi: "रूमेन में सूक्ष्मजीव होते हैं जो पौधों के भोजन में मौजूद सेलुलोज़ का किण्वन करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the bird’s digestive system stores food temporarily?",
      hi: "पक्षी के पाचन तंत्र का कौन सा भाग अस्थायी रूप से भोजन को संग्रह करता है?"
    },
    options: [
      { en: "Gizzard", hi: "गिज़ार्ड" },
      { en: "Crop", hi: "क्रॉप" },
      { en: "Cloaca", hi: "क्लोआका" },
      { en: "Beak", hi: "चोंच" }
    ],
    correct: {
      en: "Crop",
      hi: "क्रॉप"
    },
    explanation: {
      en: "The crop is a storage sac in birds where food is kept before digestion.",
      hi: "क्रॉप पक्षियों में एक संग्रह थैली होती है जहाँ भोजन को पाचन से पहले रखा जाता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "How many chambers are there in a ruminant’s stomach?",
      hi: "जुगाली करने वाले जानवर के पेट में कितने कक्ष होते हैं?"
    },
    options: [
      { en: "2", hi: "2" },
      { en: "3", hi: "3" },
      { en: "4", hi: "4" },
      { en: "5", hi: "5" }
    ],
    correct: {
      en: "4",
      hi: "4"
    },
    explanation: {
      en: "Ruminants have a stomach divided into four compartments: rumen, reticulum, omasum, and abomasum.",
      hi: "जुगाली करने वाले जानवरों का पेट चार भागों में बंटा होता है: रूमेन, रेटिकुलम, ओमासम और एबोमासम।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the name of the muscular organ in birds that crushes food?",
      hi: "पक्षियों में भोजन को कुचलने वाला पेशीय अंग कौन सा है?"
    },
    options: [
      { en: "Crop", hi: "क्रॉप" },
      { en: "Gizzard", hi: "गिज़ार्ड" },
      { en: "Beak", hi: "चोंच" },
      { en: "Stomach", hi: "पेट" }
    ],
    correct: {
      en: "Gizzard",
      hi: "गिज़ार्ड"
    },
    explanation: {
      en: "The gizzard helps grind food using small stones in birds.",
      hi: "गिज़ार्ड पक्षियों में छोटे पत्थरों की मदद से भोजन को पीसने में मदद करता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these animals has a single-chambered stomach?",
      hi: "इनमें से किस जानवर का पेट एक कक्ष वाला होता है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Deer", hi: "हिरन" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Sheep", hi: "भेड़" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "Non-ruminants like dogs have a simple single-chambered stomach.",
      hi: "कुत्ते जैसे परगामी जानवरों का पेट एक कक्ष वाला सरल पेट होता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which component helps digest cellulose in ruminants?",
      hi: "जुगाली करने वाले जानवरों में सेलुलोज़ को पचाने में कौन मदद करता है?"
    },
    options: [
      { en: "Acid", hi: "अम्ल" },
      { en: "Enzymes", hi: "एंजाइम" },
      { en: "Bacteria", hi: "बैक्टीरिया" },
      { en: "Liver", hi: "यकृत" }
    ],
    correct: {
      en: "Bacteria",
      hi: "बैक्टीरिया"
    },
    explanation: {
      en: "Bacteria present in the rumen help break down cellulose.",
      hi: "रूमेन में मौजूद बैक्टीरिया सेलुलोज़ को तोड़ने में मदद करते हैं।"
    }
  }
];

export default animalNutrition;
