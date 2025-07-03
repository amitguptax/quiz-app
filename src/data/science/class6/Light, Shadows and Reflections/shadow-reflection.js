const shadowReflection = [
  {
    id: 1,
    question: {
      en: "What is required to form a shadow?",
      hi: "छाया बनने के लिए क्या आवश्यक है?"
    },
    options: [
      { en: "Only light", hi: "केवल प्रकाश" },
      { en: "Only object", hi: "केवल वस्तु" },
      { en: "Light and object", hi: "प्रकाश और वस्तु" },
      { en: "Only screen", hi: "केवल पर्दा" }
    ],
    correct: {
      en: "Light and object",
      hi: "प्रकाश और वस्तु"
    },
    explanation: {
      en: "A shadow forms when an object blocks light.",
      hi: "जब कोई वस्तु प्रकाश को रोकती है, तब छाया बनती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which type of object forms a shadow?",
      hi: "किस प्रकार की वस्तु छाया बनाती है?"
    },
    options: [
      { en: "Transparent", hi: "पारदर्शी" },
      { en: "Opaque", hi: "अपारदर्शी" },
      { en: "Translucent", hi: "अर्धपारदर्शी" },
      { en: "Shiny", hi: "चमकदार" }
    ],
    correct: {
      en: "Opaque",
      hi: "अपारदर्शी"
    },
    explanation: {
      en: "Opaque objects block light and form clear shadows.",
      hi: "अपारदर्शी वस्तुएं प्रकाश को रोकती हैं और स्पष्ट छाया बनाती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the shape of a shadow?",
      hi: "छाया का आकार कैसा होता है?"
    },
    options: [
      { en: "Same as the object", hi: "वस्तु के समान" },
      { en: "Always round", hi: "हमेशा गोल" },
      { en: "Rectangular", hi: "आयताकार" },
      { en: "Depends on light", hi: "प्रकाश पर निर्भर" }
    ],
    correct: {
      en: "Same as the object",
      hi: "वस्तु के समान"
    },
    explanation: {
      en: "A shadow has the same shape as the object blocking the light.",
      hi: "छाया का आकार उस वस्तु के समान होता है जो प्रकाश को रोक रही होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "What is the color of a shadow?",
      hi: "छाया का रंग कैसा होता है?"
    },
    options: [
      { en: "Colorful", hi: "रंगीन" },
      { en: "Transparent", hi: "पारदर्शी" },
      { en: "Same as object", hi: "वस्तु जैसा" },
      { en: "Black or dark", hi: "काला या गहरा" }
    ],
    correct: {
      en: "Black or dark",
      hi: "काला या गहरा"
    },
    explanation: {
      en: "A shadow is dark because it blocks light.",
      hi: "छाया काली या गहरी होती है क्योंकि वह प्रकाश को रोकती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is reflection?",
      hi: "परावर्तन क्या है?"
    },
    options: [
      { en: "Light bending", hi: "प्रकाश का मुड़ना" },
      { en: "Light bouncing back", hi: "प्रकाश का लौटना" },
      { en: "Shadow forming", hi: "छाया बनना" },
      { en: "Light absorbing", hi: "प्रकाश का अवशोषण" }
    ],
    correct: {
      en: "Light bouncing back",
      hi: "प्रकाश का लौटना"
    },
    explanation: {
      en: "Reflection is when light bounces back from a surface.",
      hi: "जब प्रकाश किसी सतह से टकराकर वापस लौटता है तो उसे परावर्तन कहते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which surface shows clear reflection?",
      hi: "कौन सी सतह स्पष्ट परावर्तन दिखाती है?"
    },
    options: [
      { en: "Wood", hi: "लकड़ी" },
      { en: "Mirror", hi: "आईना" },
      { en: "Wall", hi: "दीवार" },
      { en: "Cloth", hi: "कपड़ा" }
    ],
    correct: {
      en: "Mirror",
      hi: "आईना"
    },
    explanation: {
      en: "Mirrors have smooth surfaces that reflect light clearly.",
      hi: "आईने की सतह चिकनी होती है, जिससे वह स्पष्ट रूप से प्रकाश को परावर्तित करता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What helps us see our face in a mirror?",
      hi: "हम आईने में अपना चेहरा कैसे देख पाते हैं?"
    },
    options: [
      { en: "Refraction", hi: "अपवर्तन" },
      { en: "Shadow", hi: "छाया" },
      { en: "Reflection", hi: "परावर्तन" },
      { en: "Diffusion", hi: "विक्षेपण" }
    ],
    correct: {
      en: "Reflection",
      hi: "परावर्तन"
    },
    explanation: {
      en: "We see our image in a mirror due to reflection of light.",
      hi: "प्रकाश के परावर्तन के कारण हम आईने में अपनी छवि देख पाते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Shadows are always formed on which side of the object?",
      hi: "छायाएँ वस्तु की किस दिशा में बनती हैं?"
    },
    options: [
      { en: "Toward light", hi: "प्रकाश की ओर" },
      { en: "Opposite light", hi: "प्रकाश की विपरीत दिशा" },
      { en: "Above", hi: "ऊपर" },
      { en: "Under object", hi: "वस्तु के नीचे" }
    ],
    correct: {
      en: "Opposite light",
      hi: "प्रकाश की विपरीत दिशा"
    },
    explanation: {
      en: "Shadows are formed on the side opposite to the light source.",
      hi: "छायाएँ हमेशा प्रकाश स्रोत के विपरीत दिशा में बनती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these does NOT form a shadow?",
      hi: "इनमें से कौन छाया नहीं बनाता?"
    },
    options: [
      { en: "Book", hi: "किताब" },
      { en: "Stone", hi: "पत्थर" },
      { en: "Glass", hi: "कांच" },
      { en: "Wall", hi: "दीवार" }
    ],
    correct: {
      en: "Glass",
      hi: "कांच"
    },
    explanation: {
      en: "Transparent objects like glass allow light to pass, so they don't form clear shadows.",
      hi: "कांच जैसी पारदर्शी वस्तुएं प्रकाश को पारित कर देती हैं, इसलिए ये स्पष्ट छाया नहीं बनातीं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why are shadows longer in the morning and evening?",
      hi: "सुबह और शाम छायाएँ लंबी क्यों होती हैं?"
    },
    options: [
      { en: "Sun is overhead", hi: "सूर्य सिर के ऊपर होता है" },
      { en: "Sunlight is weaker", hi: "सूरज की रोशनी कमजोर होती है" },
      { en: "Sun is at a low angle", hi: "सूर्य एक निम्न कोण पर होता है" },
      { en: "Object becomes longer", hi: "वस्तु लंबी हो जाती है" }
    ],
    correct: {
      en: "Sun is at a low angle",
      hi: "सूर्य एक निम्न कोण पर होता है"
    },
    explanation: {
      en: "Shadows are longer when the Sun is low in the sky.",
      hi: "जब सूर्य क्षितिज के पास होता है, तब छायाएँ लंबी होती हैं।"
    }
  }
];

export default shadowReflection;
