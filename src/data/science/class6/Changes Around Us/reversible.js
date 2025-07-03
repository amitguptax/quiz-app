const reversibleChanges = [
  {
    id: 1,
    question: {
      en: "Which of the following is a reversible change?",
      hi: "निम्न में से कौन एक वापसी योग्य परिवर्तन है?"
    },
    options: [
      { en: "Burning of paper", hi: "कागज का जलना" },
      { en: "Melting of ice", hi: "बर्फ का पिघलना" },
      { en: "Cooking of rice", hi: "चावल पकाना" },
      { en: "Rusting of iron", hi: "लोहा जंग लगना" }
    ],
    correct: {
      en: "Melting of ice",
      hi: "बर्फ का पिघलना"
    },
    explanation: {
      en: "Melting of ice can be reversed by freezing the water again.",
      hi: "बर्फ का पिघलना एक वापसी योग्य परिवर्तन है क्योंकि पानी को फिर से जमाया जा सकता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which change cannot be reversed?",
      hi: "कौन सा परिवर्तन वापस नहीं किया जा सकता?"
    },
    options: [
      { en: "Freezing water", hi: "पानी जमाना" },
      { en: "Melting wax", hi: "मोम पिघलाना" },
      { en: "Burning candle", hi: "मोमबत्ती जलाना" },
      { en: "Folding paper", hi: "कागज मोड़ना" }
    ],
    correct: {
      en: "Burning candle",
      hi: "मोमबत्ती जलाना"
    },
    explanation: {
      en: "Burning is an irreversible change as the substance turns into ash or gas.",
      hi: "जलना एक अवापसी परिवर्तन है क्योंकि पदार्थ राख या गैस में बदल जाता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Tearing a piece of paper is an example of",
      hi: "कागज फाड़ना किस प्रकार का उदाहरण है?"
    },
    options: [
      { en: "Reversible change", hi: "वापसी योग्य परिवर्तन" },
      { en: "Irreversible change", hi: "अवापसी परिवर्तन" },
      { en: "Chemical change", hi: "रासायनिक परिवर्तन" },
      { en: "Growth", hi: "विकास" }
    ],
    correct: {
      en: "Irreversible change",
      hi: "अवापसी परिवर्तन"
    },
    explanation: {
      en: "Once torn, the paper cannot be restored to its original form.",
      hi: "एक बार फाड़ने के बाद, कागज को उसकी मूल अवस्था में वापस नहीं लाया जा सकता।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these changes is reversible?",
      hi: "इनमें से कौन सा परिवर्तन वापसी योग्य है?"
    },
    options: [
      { en: "Boiling of water", hi: "पानी का उबालना" },
      { en: "Burning of wood", hi: "लकड़ी का जलना" },
      { en: "Cooking an egg", hi: "अंडा पकाना" },
      { en: "Ripening of fruit", hi: "फल पकना" }
    ],
    correct: {
      en: "Boiling of water",
      hi: "पानी का उबालना"
    },
    explanation: {
      en: "Boiled water can be condensed back to liquid form.",
      hi: "उबाले गए पानी को फिर से ठंडा करके तरल रूप में बदला जा सकता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is a chemical and irreversible change?",
      hi: "निम्न में से कौन एक रासायनिक और अवापसी परिवर्तन है?"
    },
    options: [
      { en: "Melting butter", hi: "मक्खन पिघलना" },
      { en: "Freezing juice", hi: "जूस को जमाना" },
      { en: "Rusting of iron", hi: "लोहा जंग लगना" },
      { en: "Stretching rubber", hi: "रबर खींचना" }
    ],
    correct: {
      en: "Rusting of iron",
      hi: "लोहा जंग लगना"
    },
    explanation: {
      en: "Rusting is a chemical change and cannot be reversed easily.",
      hi: "जंग लगना एक रासायनिक और अवापसी परिवर्तन है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which of the following changes is caused by heating?",
      hi: "निम्न में से कौन सा परिवर्तन गर्म करने से होता है?"
    },
    options: [
      { en: "Ice melting", hi: "बर्फ पिघलना" },
      { en: "Water freezing", hi: "पानी जमना" },
      { en: "Evaporation", hi: "वाष्पीकरण" },
      { en: "Both A and C", hi: "A और C दोनों" }
    ],
    correct: {
      en: "Both A and C",
      hi: "A और C दोनों"
    },
    explanation: {
      en: "Heating causes both ice melting and water evaporation.",
      hi: "गर्म करने से बर्फ पिघलती है और पानी वाष्पित होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which change is NOT permanent?",
      hi: "इनमें से कौन सा परिवर्तन स्थायी नहीं है?"
    },
    options: [
      { en: "Burning paper", hi: "कागज जलाना" },
      { en: "Melting ice cream", hi: "आइसक्रीम पिघलना" },
      { en: "Rusting", hi: "जंग लगना" },
      { en: "Cooking vegetables", hi: "सब्जी पकाना" }
    ],
    correct: {
      en: "Melting ice cream",
      hi: "आइसक्रीम पिघलना"
    },
    explanation: {
      en: "Melted ice cream can be refrozen, so it is not a permanent change.",
      hi: "आइसक्रीम पिघलने पर उसे फिर से जमाया जा सकता है, इसलिए यह स्थायी परिवर्तन नहीं है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these changes can be reversed easily?",
      hi: "इनमें से कौन सा परिवर्तन आसानी से पलटा जा सकता है?"
    },
    options: [
      { en: "Breaking glass", hi: "कांच तोड़ना" },
      { en: "Dissolving sugar in water", hi: "पानी में चीनी घुलना" },
      { en: "Burning coal", hi: "कोयला जलाना" },
      { en: "Frying an egg", hi: "अंडा तलना" }
    ],
    correct: {
      en: "Dissolving sugar in water",
      hi: "पानी में चीनी घुलना"
    },
    explanation: {
      en: "Dissolved sugar can be separated by evaporation.",
      hi: "पानी से वाष्पीकरण द्वारा चीनी को पुनः प्राप्त किया जा सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of the following is a slow and irreversible change?",
      hi: "निम्न में से कौन सा परिवर्तन धीमा और अवापसी है?"
    },
    options: [
      { en: "Folding paper", hi: "कागज मोड़ना" },
      { en: "Melting ice", hi: "बर्फ पिघलना" },
      { en: "Rusting of iron", hi: "लोहा जंग लगना" },
      { en: "Cutting fruits", hi: "फल काटना" }
    ],
    correct: {
      en: "Rusting of iron",
      hi: "लोहा जंग लगना"
    },
    explanation: {
      en: "Rusting is a slow and irreversible change caused by moisture and air.",
      hi: "जंग लगना हवा और नमी से धीरे-धीरे होने वाला अवापसी परिवर्तन है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Making a paper boat is a",
      hi: "कागज की नाव बनाना एक ______ है।"
    },
    options: [
      { en: "Reversible change", hi: "वापसी योग्य परिवर्तन" },
      { en: "Irreversible change", hi: "अवापसी परिवर्तन" },
      { en: "Chemical change", hi: "रासायनिक परिवर्तन" },
      { en: "Natural change", hi: "प्राकृतिक परिवर्तन" }
    ],
    correct: {
      en: "Reversible change",
      hi: "वापसी योग्य परिवर्तन"
    },
    explanation: {
      en: "You can unfold the paper boat back into a sheet, so it is reversible.",
      hi: "कागज की नाव को फिर से खोलकर शीट बनाया जा सकता है, इसलिए यह वापसी योग्य है।"
    }
  }
];

export default reversibleChanges;
