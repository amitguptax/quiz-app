const usesOfAir = [
  {
    id: 1,
    question: {
      en: "What do humans need air for?",
      hi: "मनुष्य को हवा की किसलिए आवश्यकता होती है?"
    },
    options: [
      { en: "Breathing", hi: "साँस लेने के लिए" },
      { en: "Swimming", hi: "तैरने के लिए" },
      { en: "Jumping", hi: "कूदने के लिए" },
      { en: "Writing", hi: "लिखने के लिए" }
    ],
    correct: {
      en: "Breathing",
      hi: "साँस लेने के लिए"
    },
    explanation: {
      en: "Humans and animals need air to breathe.",
      hi: "मनुष्य और जानवरों को साँस लेने के लिए हवा की आवश्यकता होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What does air help birds to do?",
      hi: "हवा पक्षियों को किसमें मदद करती है?"
    },
    options: [
      { en: "Fly", hi: "उड़ने में" },
      { en: "Sing", hi: "गाने में" },
      { en: "Eat", hi: "खाने में" },
      { en: "Swim", hi: "तैरने में" }
    ],
    correct: {
      en: "Fly",
      hi: "उड़ने में"
    },
    explanation: {
      en: "Air gives lift to help birds fly.",
      hi: "हवा पक्षियों को उड़ने के लिए सहारा देती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of these needs air to move?",
      hi: "इनमें से किसको चलने के लिए हवा चाहिए?"
    },
    options: [
      { en: "Kite", hi: "पतंग" },
      { en: "Stone", hi: "पत्थर" },
      { en: "Pencil", hi: "पेंसिल" },
      { en: "Book", hi: "किताब" }
    ],
    correct: {
      en: "Kite",
      hi: "पतंग"
    },
    explanation: {
      en: "Kites need air (wind) to fly.",
      hi: "पतंग को उड़ने के लिए हवा (पवन) की आवश्यकता होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Air helps clothes to:",
      hi: "हवा कपड़ों को किसमें मदद करती है?"
    },
    options: [
      { en: "Dry", hi: "सूखने में" },
      { en: "Fold", hi: "तह करने में" },
      { en: "Stitch", hi: "सिलने में" },
      { en: "Color", hi: "रंगने में" }
    ],
    correct: {
      en: "Dry",
      hi: "सूखने में"
    },
    explanation: {
      en: "Air helps wet clothes to dry faster.",
      hi: "हवा गीले कपड़ों को जल्दी सूखने में मदद करती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What needs air to burn?",
      hi: "जलने के लिए हवा किसे चाहिए?"
    },
    options: [
      { en: "Fire", hi: "आग" },
      { en: "Water", hi: "पानी" },
      { en: "Metal", hi: "धातु" },
      { en: "Glass", hi: "काँच" }
    ],
    correct: {
      en: "Fire",
      hi: "आग"
    },
    explanation: {
      en: "Fire needs oxygen in air to keep burning.",
      hi: "आग को जलने के लिए हवा में ऑक्सीजन की आवश्यकता होती है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which toy uses air to move?",
      hi: "कौन सा खिलौना हवा से चलता है?"
    },
    options: [
      { en: "Balloon", hi: "गुब्बारा" },
      { en: "Doll", hi: "गुड़िया" },
      { en: "Car", hi: "कार" },
      { en: "Puzzle", hi: "पहेली" }
    ],
    correct: {
      en: "Balloon",
      hi: "गुब्बारा"
    },
    explanation: {
      en: "Balloon flies or moves using air inside it.",
      hi: "गुब्बारा हवा की मदद से उड़ता या चलता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What do plants need air for?",
      hi: "पौधों को हवा की किसलिए आवश्यकता होती है?"
    },
    options: [
      { en: "Breathing and making food", hi: "साँस लेने और भोजन बनाने के लिए" },
      { en: "Walking", hi: "चलने के लिए" },
      { en: "Reading", hi: "पढ़ने के लिए" },
      { en: "Sleeping", hi: "सोने के लिए" }
    ],
    correct: {
      en: "Breathing and making food",
      hi: "साँस लेने और भोजन बनाने के लिए"
    },
    explanation: {
      en: "Plants use air to breathe and make food through photosynthesis.",
      hi: "पौधे साँस लेने और प्रकाश-संश्लेषण से भोजन बनाने के लिए हवा का उपयोग करते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Air is filled in which of these?",
      hi: "इनमें से किसमें हवा भरी जाती है?"
    },
    options: [
      { en: "Tyre", hi: "टायर" },
      { en: "Pen", hi: "कलम" },
      { en: "Book", hi: "किताब" },
      { en: "Stone", hi: "पत्थर" }
    ],
    correct: {
      en: "Tyre",
      hi: "टायर"
    },
    explanation: {
      en: "Tyres are filled with air to help vehicles move smoothly.",
      hi: "टायरों में हवा भरी जाती है ताकि वाहन आसानी से चल सकें।"
    }
  },
  {
    id: 9,
    question: {
      en: "How does air help in playing football?",
      hi: "फुटबॉल खेलने में हवा कैसे मदद करती है?"
    },
    options: [
      { en: "Ball is filled with air", hi: "गेंद में हवा भरी होती है" },
      { en: "Field is covered with air", hi: "मैदान हवा से ढका होता है" },
      { en: "Shoes are made of air", hi: "जूते हवा से बने होते हैं" },
      { en: "Players fly with air", hi: "खिलाड़ी हवा में उड़ते हैं" }
    ],
    correct: {
      en: "Ball is filled with air",
      hi: "गेंद में हवा भरी होती है"
    },
    explanation: {
      en: "Football has air inside it to make it bounce and roll.",
      hi: "फुटबॉल में हवा भरी होती है जिससे वह उछलती और लुड़कती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What does air help a windmill do?",
      hi: "हवा पवनचक्की को किसमें मदद करती है?"
    },
    options: [
      { en: "Rotate", hi: "घूमने में" },
      { en: "Jump", hi: "कूदने में" },
      { en: "Sing", hi: "गाने में" },
      { en: "Sleep", hi: "सोने में" }
    ],
    correct: {
      en: "Rotate",
      hi: "घूमने में"
    },
    explanation: {
      en: "Moving air (wind) rotates the blades of a windmill.",
      hi: "चलती हवा (पवन) पवनचक्की के पंखों को घुमाती है।"
    }
  }
];

export default usesOfAir;
