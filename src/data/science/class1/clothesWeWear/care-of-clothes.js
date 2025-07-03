const questions = [
  {
    id: 1,
    question: {
      en: "Why should we take care of our clothes?",
      hi: "हमें अपने कपड़ों की देखभाल क्यों करनी चाहिए?"
    },
    options: [
      { en: "To keep them clean and long-lasting", hi: "उन्हें साफ़ और टिकाऊ रखने के लिए" },
      { en: "To throw them away", hi: "उन्हें फेंकने के लिए" },
      { en: "To get them dirty", hi: "उन्हें गंदा करने के लिए" },
      { en: "To color them", hi: "उन्हें रंगने के लिए" }
    ],
    correct: {
      en: "To keep them clean and long-lasting",
      hi: "उन्हें साफ़ और टिकाऊ रखने के लिए"
    },
    explanation: {
      en: "Taking care of clothes keeps them clean and helps them last longer.",
      hi: "कपड़ों की देखभाल से वे साफ़ रहते हैं और लंबे समय तक चलते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What should we use to clean dirty clothes?",
      hi: "गंदे कपड़े साफ़ करने के लिए हमें क्या इस्तेमाल करना चाहिए?"
    },
    options: [
      { en: "Soap or detergent", hi: "साबुन या डिटर्जेंट" },
      { en: "Oil", hi: "तेल" },
      { en: "Paint", hi: "पेंट" },
      { en: "Glue", hi: "गोंद" }
    ],
    correct: {
      en: "Soap or detergent",
      hi: "साबुन या डिटर्जेंट"
    },
    explanation: {
      en: "Soap or detergent is used to clean dirty clothes.",
      hi: "गंदे कपड़े धोने के लिए साबुन या डिटर्जेंट का उपयोग किया जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should we do before washing clothes?",
      hi: "कपड़े धोने से पहले हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Separate white and colored clothes", hi: "सफेद और रंगीन कपड़े अलग करना" },
      { en: "Throw all clothes together", hi: "सभी कपड़े एक साथ फेंक देना" },
      { en: "Cut the clothes", hi: "कपड़े काटना" },
      { en: "Iron them", hi: "इस्त्री करना" }
    ],
    correct: {
      en: "Separate white and colored clothes",
      hi: "सफेद और रंगीन कपड़े अलग करना"
    },
    explanation: {
      en: "Separating white and colored clothes prevents color bleeding.",
      hi: "सफेद और रंगीन कपड़े अलग करने से रंग फैलने से बचाव होता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do we iron clothes?",
      hi: "हम कपड़ों पर इस्त्री क्यों करते हैं?"
    },
    options: [
      { en: "To make them neat and wrinkle-free", hi: "उन्हें साफ़ और बिना सिलवट के बनाने के लिए" },
      { en: "To burn them", hi: "उन्हें जलाने के लिए" },
      { en: "To color them", hi: "उन्हें रंगने के लिए" },
      { en: "To get them dirty", hi: "उन्हें गंदा करने के लिए" }
    ],
    correct: {
      en: "To make them neat and wrinkle-free",
      hi: "उन्हें साफ़ और बिना सिलवट के बनाने के लिए"
    },
    explanation: {
      en: "Ironing helps clothes look neat and presentable.",
      hi: "इस्त्री करने से कपड़े साफ़ और अच्छे दिखते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Where should we keep our clothes?",
      hi: "हमें अपने कपड़े कहाँ रखने चाहिए?"
    },
    options: [
      { en: "In a clean cupboard", hi: "साफ़ अलमारी में" },
      { en: "On the floor", hi: "फर्श पर" },
      { en: "In a bag of trash", hi: "कूड़े के थैले में" },
      { en: "Outside the house", hi: "घर के बाहर" }
    ],
    correct: {
      en: "In a clean cupboard",
      hi: "साफ़ अलमारी में"
    },
    explanation: {
      en: "Clothes should be stored neatly in a clean cupboard.",
      hi: "कपड़ों को साफ़ अलमारी में अच्छी तरह रखना चाहिए।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should we do if clothes are torn?",
      hi: "अगर कपड़े फट जाएं तो हमें क्या करना चाहिए?"
    },
    options: [
      { en: "Stitch or repair them", hi: "उन्हें सिलना या ठीक करना" },
      { en: "Wear them as is", hi: "उन्हें वैसे ही पहनना" },
      { en: "Throw them without checking", hi: "बिना देखे फेंक देना" },
      { en: "Color them", hi: "उन्हें रंगना" }
    ],
    correct: {
      en: "Stitch or repair them",
      hi: "उन्हें सिलना या ठीक करना"
    },
    explanation: {
      en: "Torn clothes should be stitched or mended.",
      hi: "फटे हुए कपड़ों को सिलना या सुधारना चाहिए।"
    }
  },
  {
    id: 7,
    question: {
      en: "Should we fold clothes after drying?",
      hi: "क्या कपड़े सूखने के बाद मोड़ने चाहिए?"
    },
    options: [
      { en: "Yes, to keep them neat", hi: "हाँ, उन्हें साफ़ रखने के लिए" },
      { en: "No, leave them scattered", hi: "नहीं, उन्हें फैला हुआ छोड़ दें" },
      { en: "Throw them away", hi: "उन्हें फेंक दें" },
      { en: "Use them wet", hi: "गीले ही उपयोग करें" }
    ],
    correct: {
      en: "Yes, to keep them neat",
      hi: "हाँ, उन्हें साफ़ रखने के लिए"
    },
    explanation: {
      en: "Folding clothes after drying keeps them neat and tidy.",
      hi: "कपड़े सुखाने के बाद मोड़ने से वे साफ़ और सलीकेदार रहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which clothes need dry cleaning?",
      hi: "कौन से कपड़ों को ड्राई क्लीनिंग की आवश्यकता होती है?"
    },
    options: [
      { en: "Delicate and expensive clothes", hi: "नाज़ुक और महंगे कपड़े" },
      { en: "School uniforms", hi: "स्कूल की वर्दी" },
      { en: "Dirty socks", hi: "गंदे मोजे" },
      { en: "Old towels", hi: "पुराने तौलिए" }
    ],
    correct: {
      en: "Delicate and expensive clothes",
      hi: "नाज़ुक और महंगे कपड़े"
    },
    explanation: {
      en: "Dry cleaning is used for delicate and expensive clothes.",
      hi: "नाज़ुक और महंगे कपड़ों के लिए ड्राई क्लीनिंग की जाती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What should we not use on clothes?",
      hi: "हमें कपड़ों पर क्या उपयोग नहीं करना चाहिए?"
    },
    options: [
      { en: "Ink and paint", hi: "स्याही और पेंट" },
      { en: "Water", hi: "पानी" },
      { en: "Soap", hi: "साबुन" },
      { en: "Brush", hi: "ब्रश" }
    ],
    correct: {
      en: "Ink and paint",
      hi: "स्याही और पेंट"
    },
    explanation: {
      en: "Ink and paint can spoil clothes.",
      hi: "स्याही और पेंट कपड़ों को खराब कर सकते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "What keeps clothes smelling fresh?",
      hi: "कपड़े किससे ताज़ा महकते हैं?"
    },
    options: [
      { en: "Washing and drying properly", hi: "अच्छी तरह धोने और सुखाने से" },
      { en: "Keeping them wet", hi: "उन्हें गीला रखने से" },
      { en: "Putting them in garbage", hi: "उन्हें कूड़े में रखने से" },
      { en: "Wearing them dirty", hi: "उन्हें गंदा पहनने से" }
    ],
    correct: {
      en: "Washing and drying properly",
      hi: "अच्छी तरह धोने और सुखाने से"
    },
    explanation: {
      en: "Properly washed and dried clothes smell fresh and clean.",
      hi: "अच्छी तरह धोए और सुखाए गए कपड़े ताज़ा महकते हैं।"
    }
  }
];

export default questions;
