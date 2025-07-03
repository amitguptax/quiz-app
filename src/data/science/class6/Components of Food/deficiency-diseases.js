const deficiencyDiseases = [
  {
    id: 1,
    question: {
      en: "Deficiency of which nutrient causes rickets?",
      hi: "किस पोषक तत्व की कमी से रिकेट्स होता है?"
    },
    options: [
      { en: "Vitamin A", hi: "विटामिन A" },
      { en: "Vitamin B", hi: "विटामिन B" },
      { en: "Vitamin D", hi: "विटामिन D" },
      { en: "Iron", hi: "लोहा" }
    ],
    correct: {
      en: "Vitamin D",
      hi: "विटामिन D"
    },
    explanation: {
      en: "Vitamin D deficiency leads to rickets, causing weak and soft bones.",
      hi: "विटामिन D की कमी से रिकेट्स होता है, जिससे हड्डियाँ कमजोर और मुलायम हो जाती हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which disease is caused due to lack of iron?",
      hi: "लौह तत्व (Iron) की कमी से कौन सी बीमारी होती है?"
    },
    options: [
      { en: "Scurvy", hi: "स्कर्वी" },
      { en: "Goitre", hi: "ग्वायटर" },
      { en: "Anemia", hi: "एनीमिया" },
      { en: "Rickets", hi: "रिकेट्स" }
    ],
    correct: {
      en: "Anemia",
      hi: "एनीमिया"
    },
    explanation: {
      en: "Iron is essential for making hemoglobin. Its deficiency causes anemia.",
      hi: "लोहा हीमोग्लोबिन बनाने के लिए आवश्यक है। इसकी कमी से एनीमिया होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Scurvy is caused due to deficiency of which vitamin?",
      hi: "स्कर्वी किस विटामिन की कमी से होता है?"
    },
    options: [
      { en: "Vitamin C", hi: "विटामिन C" },
      { en: "Vitamin A", hi: "विटामिन A" },
      { en: "Vitamin B", hi: "विटामिन B" },
      { en: "Vitamin D", hi: "विटामिन D" }
    ],
    correct: {
      en: "Vitamin C",
      hi: "विटामिन C"
    },
    explanation: {
      en: "Vitamin C deficiency causes scurvy, leading to bleeding gums and weakness.",
      hi: "विटामिन C की कमी से स्कर्वी होता है, जिससे मसूड़े से खून आना और कमजोरी होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Night blindness occurs due to deficiency of which vitamin?",
      hi: "नाइट ब्लाइंडनेस किस विटामिन की कमी से होती है?"
    },
    options: [
      { en: "Vitamin B", hi: "विटामिन B" },
      { en: "Vitamin C", hi: "विटामिन C" },
      { en: "Vitamin A", hi: "विटामिन A" },
      { en: "Vitamin D", hi: "विटामिन D" }
    ],
    correct: {
      en: "Vitamin A",
      hi: "विटामिन A"
    },
    explanation: {
      en: "Vitamin A is needed for good vision. Its deficiency causes night blindness.",
      hi: "विटामिन A आंखों की रोशनी के लिए आवश्यक है। इसकी कमी से नाइट ब्लाइंडनेस होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which deficiency disease causes swelling in the neck?",
      hi: "गर्दन में सूजन किस कमी से होती है?"
    },
    options: [
      { en: "Scurvy", hi: "स्कर्वी" },
      { en: "Goitre", hi: "ग्वायटर" },
      { en: "Rickets", hi: "रिकेट्स" },
      { en: "Anemia", hi: "एनीमिया" }
    ],
    correct: {
      en: "Goitre",
      hi: "ग्वायटर"
    },
    explanation: {
      en: "Goitre is caused by iodine deficiency and leads to swelling in the neck.",
      hi: "ग्वायटर आयोडीन की कमी से होता है और इससे गर्दन में सूजन आ जाती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Beriberi is caused due to deficiency of:",
      hi: "बेरीबेरी किस की कमी से होता है?"
    },
    options: [
      { en: "Vitamin B1", hi: "विटामिन B1" },
      { en: "Vitamin D", hi: "विटामिन D" },
      { en: "Vitamin A", hi: "विटामिन A" },
      { en: "Calcium", hi: "कैल्शियम" }
    ],
    correct: {
      en: "Vitamin B1",
      hi: "विटामिन B1"
    },
    explanation: {
      en: "Vitamin B1 deficiency causes beriberi, affecting nerves and muscles.",
      hi: "विटामिन B1 की कमी से बेरीबेरी होता है, जो तंत्रिकाओं और मांसपेशियों को प्रभावित करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which mineral deficiency causes weak bones and teeth?",
      hi: "कौन से खनिज की कमी से हड्डियाँ और दाँत कमजोर होते हैं?"
    },
    options: [
      { en: "Iron", hi: "लोहा" },
      { en: "Iodine", hi: "आयोडीन" },
      { en: "Calcium", hi: "कैल्शियम" },
      { en: "Zinc", hi: "जिंक" }
    ],
    correct: {
      en: "Calcium",
      hi: "कैल्शियम"
    },
    explanation: {
      en: "Calcium is essential for strong bones and teeth.",
      hi: "कैल्शियम हड्डियों और दाँतों को मजबूत बनाने के लिए आवश्यक है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Pellagra is caused due to deficiency of which vitamin?",
      hi: "पेलैग्रा किस विटामिन की कमी से होता है?"
    },
    options: [
      { en: "Vitamin C", hi: "विटामिन C" },
      { en: "Vitamin D", hi: "विटामिन D" },
      { en: "Niacin (Vitamin B3)", hi: "नियासिन (विटामिन B3)" },
      { en: "Vitamin A", hi: "विटामिन A" }
    ],
    correct: {
      en: "Niacin (Vitamin B3)",
      hi: "नियासिन (विटामिन B3)"
    },
    explanation: {
      en: "Pellagra is caused by the deficiency of Vitamin B3 (Niacin).",
      hi: "पेलैग्रा विटामिन B3 (नियासिन) की कमी से होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Kwashiorkor is caused by the deficiency of:",
      hi: "क्वाशियोरकोर किस की कमी से होता है?"
    },
    options: [
      { en: "Fat", hi: "वसा" },
      { en: "Carbohydrates", hi: "कार्बोहाइड्रेट" },
      { en: "Protein", hi: "प्रोटीन" },
      { en: "Vitamin C", hi: "विटामिन C" }
    ],
    correct: {
      en: "Protein",
      hi: "प्रोटीन"
    },
    explanation: {
      en: "Kwashiorkor is a protein deficiency disease seen in children.",
      hi: "क्वाशियोरकोर बच्चों में होने वाली प्रोटीन की कमी की बीमारी है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is not a deficiency disease?",
      hi: "निम्न में से कौन एक कमी से होने वाली बीमारी नहीं है?"
    },
    options: [
      { en: "Diabetes", hi: "मधुमेह" },
      { en: "Goitre", hi: "ग्वायटर" },
      { en: "Rickets", hi: "रिकेट्स" },
      { en: "Scurvy", hi: "स्कर्वी" }
    ],
    correct: {
      en: "Diabetes",
      hi: "मधुमेह"
    },
    explanation: {
      en: "Diabetes is not caused by nutrient deficiency but by insulin imbalance.",
      hi: "मधुमेह पोषक तत्वों की कमी से नहीं बल्कि इंसुलिन असंतुलन के कारण होता है।"
    }
  }
];

export default deficiencyDiseases;
