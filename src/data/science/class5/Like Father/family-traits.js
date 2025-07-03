const familyTraits = [
  {
    id: 1,
    question: {
      en: "Why do some children look like their parents?",
      hi: "कुछ बच्चे अपने माता-पिता जैसे क्यों दिखते हैं?"
    },
    options: [
      { en: "Because of same clothes", hi: "एक जैसे कपड़े पहनने के कारण" },
      { en: "Because of inheritance", hi: "वंशानुगत गुणों के कारण" },
      { en: "Because of school", hi: "स्कूल के कारण" },
      { en: "Because of food", hi: "खान-पान के कारण" }
    ],
    correct: {
      en: "Because of inheritance",
      hi: "वंशानुगत गुणों के कारण"
    },
    explanation: {
      en: "Children may look like parents due to inherited physical traits.",
      hi: "बच्चे अपने माता-पिता जैसे दिख सकते हैं क्योंकि वे उनके रूपों को विरासत में पाते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following can be a family trait?",
      hi: "निम्न में से कौन एक पारिवारिक विशेषता हो सकती है?"
    },
    options: [
      { en: "Skin color", hi: "त्वचा का रंग" },
      { en: "Favorite food", hi: "पसंदीदा भोजन" },
      { en: "Friendship", hi: "दोस्ती" },
      { en: "School bag", hi: "स्कूल बैग" }
    ],
    correct: {
      en: "Skin color",
      hi: "त्वचा का रंग"
    },
    explanation: {
      en: "Physical features like skin color can run in families.",
      hi: "त्वचा का रंग जैसी विशेषताएँ परिवार में पीढ़ियों तक चल सकती हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which skill is generally learned and not inherited?",
      hi: "कौन सा कौशल सामान्यतः सीखा जाता है और विरासत में नहीं मिलता?"
    },
    options: [
      { en: "Singing", hi: "गाना गाना" },
      { en: "Hair color", hi: "बालों का रंग" },
      { en: "Eye shape", hi: "आँखों का आकार" },
      { en: "Height", hi: "ऊंचाई" }
    ],
    correct: {
      en: "Singing",
      hi: "गाना गाना"
    },
    explanation: {
      en: "Skills like singing are learned, not inherited like physical traits.",
      hi: "गाना गाना एक सीखा गया कौशल है, यह वंशानुगत नहीं होता।"
    }
  },
  {
    id: 4,
    question: {
      en: "What does a child inherit from parents?",
      hi: "एक बच्चा अपने माता-पिता से क्या प्राप्त करता है?"
    },
    options: [
      { en: "Games", hi: "खेल" },
      { en: "Hobbies", hi: "शौक" },
      { en: "Physical appearance", hi: "शारीरिक रूप" },
      { en: "Books", hi: "किताबें" }
    ],
    correct: {
      en: "Physical appearance",
      hi: "शारीरिक रूप"
    },
    explanation: {
      en: "Children inherit traits like eye color, hair type, and facial features.",
      hi: "बच्चे आँखों का रंग, बालों का प्रकार, चेहरे की बनावट जैसी चीजें विरासत में पाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following skills can be learned at school?",
      hi: "निम्न में से कौन सा कौशल स्कूल में सीखा जा सकता है?"
    },
    options: [
      { en: "Reading", hi: "पढ़ना" },
      { en: "Nose shape", hi: "नाक का आकार" },
      { en: "Hair type", hi: "बालों का प्रकार" },
      { en: "Height", hi: "ऊंचाई" }
    ],
    correct: {
      en: "Reading",
      hi: "पढ़ना"
    },
    explanation: {
      en: "Reading is a learned skill, not inherited.",
      hi: "पढ़ना एक सीखा गया कौशल है, यह जन्म से नहीं आता।"
    }
  },
  {
    id: 6,
    question: {
      en: "If a mother is a good painter, will the child definitely be one?",
      hi: "यदि माँ अच्छी चित्रकार है, तो क्या बच्चा निश्चित रूप से चित्रकार होगा?"
    },
    options: [
      { en: "Yes", hi: "हाँ" },
      { en: "No", hi: "नहीं" },
      { en: "Only if child wants", hi: "यदि बच्चा चाहे तो" },
      { en: "Only girls inherit skills", hi: "केवल लड़कियाँ गुण प्राप्त करती हैं" }
    ],
    correct: {
      en: "Only if child wants",
      hi: "यदि बच्चा चाहे तो"
    },
    explanation: {
      en: "Skills like painting depend on interest and practice.",
      hi: "चित्रकारी जैसे कौशल रुचि और अभ्यास पर निर्भर करते हैं, न कि केवल वंशानुगत होने पर।"
    }
  },
  {
    id: 7,
    question: {
      en: "A child’s voice is similar to the parent’s voice due to:",
      hi: "बच्चे की आवाज़ माता-पिता जैसी क्यों होती है?"
    },
    options: [
      { en: "Same school", hi: "एक ही स्कूल" },
      { en: "Inherited voice box traits", hi: "स्वर पेटी के वंशानुगत गुणों के कारण" },
      { en: "Same TV habits", hi: "एक जैसे टीवी देखने की आदत" },
      { en: "Shared mobile", hi: "साझा मोबाइल" }
    ],
    correct: {
      en: "Inherited voice box traits",
      hi: "स्वर पेटी के वंशानुगत गुणों के कारण"
    },
    explanation: {
      en: "Voice similarity is due to inherited structure of vocal cords.",
      hi: "स्वर पेटी की बनावट माता-पिता से मिलती है जिससे आवाज़ में समानता होती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What kind of trait is dance style?",
      hi: "नृत्य शैली किस प्रकार का गुण है?"
    },
    options: [
      { en: "Inherited", hi: "वंशानुगत" },
      { en: "Learned", hi: "सीखा गया" },
      { en: "Magical", hi: "जादुई" },
      { en: "Natural force", hi: "प्राकृतिक शक्ति" }
    ],
    correct: {
      en: "Learned",
      hi: "सीखा गया"
    },
    explanation: {
      en: "Dance style is a learned ability, not inherited.",
      hi: "नृत्य शैली सीखी जाती है, यह वंशानुगत नहीं होती।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these is most likely to run in a family?",
      hi: "इनमें से कौन सी चीज़ परिवार में सबसे अधिक देखने को मिलती है?"
    },
    options: [
      { en: "Height", hi: "ऊंचाई" },
      { en: "Favorite movie", hi: "पसंदीदा फिल्म" },
      { en: "Bike brand", hi: "बाइक ब्रांड" },
      { en: "Lunch menu", hi: "लंच मेन्यू" }
    ],
    correct: {
      en: "Height",
      hi: "ऊंचाई"
    },
    explanation: {
      en: "Height is often inherited from parents and relatives.",
      hi: "ऊंचाई आमतौर पर माता-पिता और परिवार से विरासत में मिलती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which is an example of a learned skill, not inherited?",
      hi: "निम्न में से कौन एक सीखा गया कौशल है, वंशानुगत नहीं?"
    },
    options: [
      { en: "Hair type", hi: "बालों का प्रकार" },
      { en: "Running", hi: "दौड़ना" },
      { en: "Writing", hi: "लिखना" },
      { en: "Face shape", hi: "चेहरे की बनावट" }
    ],
    correct: {
      en: "Writing",
      hi: "लिखना"
    },
    explanation: {
      en: "Writing is learned through teaching and practice.",
      hi: "लिखना एक सीखी जाने वाली कला है, यह जन्म से नहीं आती।"
    }
  }
];

export default familyTraits;

