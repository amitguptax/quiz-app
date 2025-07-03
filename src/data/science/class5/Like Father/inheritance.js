const hereditaryTraits = [
  {
    id: 1,
    question: {
      en: "What are traits that are passed from parents to children called?",
      hi: "माता-पिता से बच्चों में जाने वाले गुणों को क्या कहा जाता है?"
    },
    options: [
      { en: "Acquired traits", hi: "अर्जित गुण" },
      { en: "Hereditary traits", hi: "वंशानुगत गुण" },
      { en: "Social traits", hi: "सामाजिक गुण" },
      { en: "Learned traits", hi: "सीखे गए गुण" }
    ],
    correct: {
      en: "Hereditary traits",
      hi: "वंशानुगत गुण"
    },
    explanation: {
      en: "Traits passed from parents to offspring are called hereditary traits.",
      hi: "माता-पिता से बच्चों में जाने वाले गुण वंशानुगत गुण कहलाते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these is a hereditary trait?",
      hi: "इनमें से कौन सा एक वंशानुगत गुण है?"
    },
    options: [
      { en: "Language spoken", hi: "बोली जाने वाली भाषा" },
      { en: "Hair color", hi: "बालों का रंग" },
      { en: "Table manners", hi: "टेबल पर शिष्टाचार" },
      { en: "Reading skill", hi: "पढ़ने की क्षमता" }
    ],
    correct: {
      en: "Hair color",
      hi: "बालों का रंग"
    },
    explanation: {
      en: "Hair color is inherited from parents.",
      hi: "बालों का रंग माता-पिता से वंशानुगत होता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Eye color is an example of:",
      hi: "आँखों का रंग किसका उदाहरण है?"
    },
    options: [
      { en: "Learned behavior", hi: "सीखा हुआ व्यवहार" },
      { en: "Acquired skill", hi: "अर्जित कौशल" },
      { en: "Hereditary trait", hi: "वंशानुगत गुण" },
      { en: "Hobby", hi: "शौक" }
    ],
    correct: {
      en: "Hereditary trait",
      hi: "वंशानुगत गुण"
    },
    explanation: {
      en: "Eye color is passed down from parents through genes.",
      hi: "आँखों का रंग माता-पिता से जीन के माध्यम से आता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of these is NOT a hereditary trait?",
      hi: "इनमें से कौन वंशानुगत गुण नहीं है?"
    },
    options: [
      { en: "Height", hi: "ऊंचाई" },
      { en: "Skin color", hi: "त्वचा का रंग" },
      { en: "Handwriting", hi: "हस्तलिपि" },
      { en: "Eye shape", hi: "आँखों का आकार" }
    ],
    correct: {
      en: "Handwriting",
      hi: "हस्तलिपि"
    },
    explanation: {
      en: "Handwriting is learned, not inherited.",
      hi: "हस्तलिपि सीखी जाती है, यह वंशानुगत नहीं होती।"
    }
  },
  {
    id: 5,
    question: {
      en: "Genes carry information about:",
      hi: "जीन किसके बारे में जानकारी लेकर चलते हैं?"
    },
    options: [
      { en: "Books", hi: "किताबों" },
      { en: "Traits", hi: "गुणों" },
      { en: "Food", hi: "भोजन" },
      { en: "Music", hi: "संगीत" }
    ],
    correct: {
      en: "Traits",
      hi: "गुणों"
    },
    explanation: {
      en: "Genes carry the information that determines traits.",
      hi: "जीन ऐसे गुणों की जानकारी रखते हैं जो बच्चों में प्रकट होते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "From where do children get their hereditary traits?",
      hi: "बच्चों को वंशानुगत गुण कहाँ से मिलते हैं?"
    },
    options: [
      { en: "From school", hi: "स्कूल से" },
      { en: "From neighbors", hi: "पड़ोसियों से" },
      { en: "From parents", hi: "माता-पिता से" },
      { en: "From teachers", hi: "शिक्षकों से" }
    ],
    correct: {
      en: "From parents",
      hi: "माता-पिता से"
    },
    explanation: {
      en: "Hereditary traits are passed from parents to their children.",
      hi: "वंशानुगत गुण माता-पिता से बच्चों को मिलते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Who decides the traits of a baby?",
      hi: "कौन बच्चे के गुणों को निर्धारित करता है?"
    },
    options: [
      { en: "Genes", hi: "जीन" },
      { en: "Friends", hi: "दोस्त" },
      { en: "TV shows", hi: "टीवी शो" },
      { en: "Books", hi: "किताबें" }
    ],
    correct: {
      en: "Genes",
      hi: "जीन"
    },
    explanation: {
      en: "Genes from both parents decide a baby's traits.",
      hi: "माता-पिता के जीन मिलकर बच्चे के गुण निर्धारित करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is an inherited physical feature?",
      hi: "इनमें से कौन सी एक वंशानुगत शारीरिक विशेषता है?"
    },
    options: [
      { en: "Favorite food", hi: "पसंदीदा भोजन" },
      { en: "Voice tone", hi: "आवाज़ का स्वर" },
      { en: "Eye shape", hi: "आँखों का आकार" },
      { en: "Dance style", hi: "नृत्य शैली" }
    ],
    correct: {
      en: "Eye shape",
      hi: "आँखों का आकार"
    },
    explanation: {
      en: "Physical features like eye shape are inherited from parents.",
      hi: "आँखों का आकार जैसी शारीरिक विशेषताएँ माता-पिता से प्राप्त होती हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "What makes children look like their parents?",
      hi: "बच्चे अपने माता-पिता जैसे क्यों दिखते हैं?"
    },
    options: [
      { en: "Same clothes", hi: "एक जैसे कपड़े" },
      { en: "Same school", hi: "एक ही स्कूल" },
      { en: "Inherited traits", hi: "वंशानुगत गुण" },
      { en: "Same house", hi: "एक ही घर" }
    ],
    correct: {
      en: "Inherited traits",
      hi: "वंशानुगत गुण"
    },
    explanation: {
      en: "Inherited traits from parents make children resemble them.",
      hi: "माता-पिता से मिले गुण बच्चों को उनके जैसा दिखाते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following is passed from one generation to another?",
      hi: "निम्न में से कौन एक पीढ़ी से दूसरी पीढ़ी को जाता है?"
    },
    options: [
      { en: "Hobbies", hi: "शौक" },
      { en: "Genes", hi: "जीन" },
      { en: "School bag", hi: "स्कूल बैग" },
      { en: "Lunch box", hi: "लंच बॉक्स" }
    ],
    correct: {
      en: "Genes",
      hi: "जीन"
    },
    explanation: {
      en: "Genes are passed from parents to children across generations.",
      hi: "जीन पीढ़ी दर पीढ़ी माता-पिता से बच्चों को जाते हैं।"
    }
  }
];

export default hereditaryTraits;
