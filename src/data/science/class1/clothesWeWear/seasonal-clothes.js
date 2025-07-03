const questions = [
  {
    id: 1,
    question: {
      en: "What kind of clothes do we wear in summer?",
      hi: "हम गर्मियों में किस प्रकार के कपड़े पहनते हैं?"
    },
    options: [
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Cotton clothes", hi: "सूती कपड़े" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Leather jacket", hi: "चमड़े की जैकेट" }
    ],
    correct: { en: "Cotton clothes", hi: "सूती कपड़े" },
    explanation: {
      en: "Cotton clothes keep us cool in summer.",
      hi: "गर्मियों में सूती कपड़े हमें ठंडक प्रदान करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which clothes keep us warm in winter?",
      hi: "सर्दियों में हमें गर्म रखने के लिए कौन से कपड़े पहनते हैं?"
    },
    options: [
      { en: "Silk clothes", hi: "रेशमी कपड़े" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Cotton clothes", hi: "सूती कपड़े" }
    ],
    correct: { en: "Woolen clothes", hi: "ऊन के कपड़े" },
    explanation: {
      en: "Woolen clothes keep the body warm in cold weather.",
      hi: "सर्दी में ऊन के कपड़े शरीर को गर्म रखते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What do we wear during rainy season?",
      hi: "बरसात के मौसम में हम क्या पहनते हैं?"
    },
    options: [
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Raincoat and gumboots", hi: "रेनकोट और रबर के जूते" },
      { en: "Silk dress", hi: "रेशमी कपड़े" },
      { en: "Leather boots", hi: "चमड़े के जूते" }
    ],
    correct: { en: "Raincoat and gumboots", hi: "रेनकोट और रबर के जूते" },
    explanation: {
      en: "Raincoat and gumboots protect us from rain.",
      hi: "रेनकोट और रबर के जूते हमें बारिश से बचाते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do we wear cotton clothes in summer?",
      hi: "हम गर्मियों में सूती कपड़े क्यों पहनते हैं?"
    },
    options: [
      { en: "To look shiny", hi: "चमकदार दिखने के लिए" },
      { en: "Because they keep us warm", hi: "क्योंकि वे हमें गर्म रखते हैं" },
      { en: "Because they keep us cool", hi: "क्योंकि वे हमें ठंडा रखते हैं" },
      { en: "Because they are expensive", hi: "क्योंकि वे महंगे होते हैं" }
    ],
    correct: { en: "Because they keep us cool", hi: "क्योंकि वे हमें ठंडा रखते हैं" },
    explanation: {
      en: "Cotton clothes absorb sweat and keep the body cool.",
      hi: "सूती कपड़े पसीना सोखते हैं और शरीर को ठंडा रखते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is a summer clothing item?",
      hi: "निम्न में से कौन सा गर्मियों का कपड़ा है?"
    },
    options: [
      { en: "Sweater", hi: "स्वेटर" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Cotton T-shirt", hi: "सूती टी-शर्ट" },
      { en: "Woolen cap", hi: "ऊन की टोपी" }
    ],
    correct: { en: "Cotton T-shirt", hi: "सूती टी-शर्ट" },
    explanation: {
      en: "Cotton T-shirts are ideal for summer.",
      hi: "गर्मियों में सूती टी-शर्ट सबसे उपयुक्त होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which clothing is used in winter?",
      hi: "सर्दियों में किस प्रकार के कपड़े पहने जाते हैं?"
    },
    options: [
      { en: "Sweater", hi: "स्वेटर" },
      { en: "Cotton kurta", hi: "सूती कुर्ता" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Shirt", hi: "कमीज़" }
    ],
    correct: { en: "Sweater", hi: "स्वेटर" },
    explanation: {
      en: "Sweaters are warm clothes for winter.",
      hi: "स्वेटर सर्दियों में गर्म रखने वाले कपड़े होते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "When do we wear gumboots?",
      hi: "हम गमबूट्स कब पहनते हैं?"
    },
    options: [
      { en: "In summer", hi: "गर्मी में" },
      { en: "In rainy season", hi: "बरसात में" },
      { en: "In winter", hi: "सर्दियों में" },
      { en: "At night", hi: "रात में" }
    ],
    correct: { en: "In rainy season", hi: "बरसात में" },
    explanation: {
      en: "Gumboots keep our feet dry during rain.",
      hi: "गमबूट्स बरसात में हमारे पैर सूखे रखते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is worn to stay dry in the rain?",
      hi: "निम्न में से किसे पहनकर हम बारिश में सूखे रहते हैं?"
    },
    options: [
      { en: "Sweater", hi: "स्वेटर" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Cotton shirt", hi: "सूती कमीज़" },
      { en: "Jeans", hi: "जीन्स" }
    ],
    correct: { en: "Raincoat", hi: "रेनकोट" },
    explanation: {
      en: "Raincoat protects from getting wet in rain.",
      hi: "रेनकोट हमें बारिश में भीगने से बचाता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Woolen clothes are made from:",
      hi: "ऊन के कपड़े किससे बनते हैं?"
    },
    options: [
      { en: "Cotton", hi: "कपास" },
      { en: "Sheep's wool", hi: "भेड़ की ऊन" },
      { en: "Plastic", hi: "प्लास्टिक" },
      { en: "Silk", hi: "रेशम" }
    ],
    correct: { en: "Sheep's wool", hi: "भेड़ की ऊन" },
    explanation: {
      en: "Woolen clothes are made from the wool of sheep.",
      hi: "ऊन के कपड़े भेड़ की ऊन से बनाए जाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do we wear different clothes in different seasons?",
      hi: "हम विभिन्न ऋतुओं में अलग-अलग कपड़े क्यों पहनते हैं?"
    },
    options: [
      { en: "To follow fashion", hi: "फैशन के लिए" },
      { en: "For comfort and protection", hi: "सुविधा और सुरक्षा के लिए" },
      { en: "To impress others", hi: "दूसरों को प्रभावित करने के लिए" },
      { en: "For color matching", hi: "रंग मिलाने के लिए" }
    ],
    correct: { en: "For comfort and protection", hi: "सुविधा और सुरक्षा के लिए" },
    explanation: {
      en: "Different seasons need different clothes for protection and comfort.",
      hi: "हर ऋतु में सुरक्षा और आराम के लिए अलग कपड़े पहनने चाहिए।"
    }
  }
];

export default questions;
