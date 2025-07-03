const airUses = [
  {
    id: 1,
    question: {
      en: "What do we need air for?",
      hi: "हमें हवा की आवश्यकता किसलिए होती है?"
    },
    options: [
      { en: "Breathing", hi: "सांस लेने के लिए" },
      { en: "Drinking", hi: "पीने के लिए" },
      { en: "Washing", hi: "धोने के लिए" },
      { en: "Eating", hi: "खाने के लिए" }
    ],
    correct: {
      en: "Breathing",
      hi: "सांस लेने के लिए"
    },
    explanation: {
      en: "We need air to breathe and stay alive.",
      hi: "हमें जीवित रहने के लिए सांस लेनी होती है, जिसमें हवा की आवश्यकता होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of these uses air to fly?",
      hi: "इनमें से कौन हवा का उपयोग उड़ने के लिए करता है?"
    },
    options: [
      { en: "Bird", hi: "पक्षी" },
      { en: "Fish", hi: "मछली" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Elephant", hi: "हाथी" }
    ],
    correct: {
      en: "Bird",
      hi: "पक्षी"
    },
    explanation: {
      en: "Birds use air to fly with their wings.",
      hi: "पक्षी अपने पंखों से उड़ने के लिए हवा का उपयोग करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following needs air to move?",
      hi: "निम्न में से किसे चलने के लिए हवा की आवश्यकता होती है?"
    },
    options: [
      { en: "Sailboat", hi: "पाल नौका" },
      { en: "Car", hi: "कार" },
      { en: "Train", hi: "रेल" },
      { en: "Bicycle", hi: "साइकिल" }
    ],
    correct: {
      en: "Sailboat",
      hi: "पाल नौका"
    },
    explanation: {
      en: "Sailboats move using the wind in their sails.",
      hi: "पाल नौकाएँ हवा से चलती हैं जो उनके पालों को भरती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which activity needs air?",
      hi: "कौन सी गतिविधि में हवा की आवश्यकता होती है?"
    },
    options: [
      { en: "Flying a kite", hi: "पतंग उड़ाना" },
      { en: "Reading a book", hi: "किताब पढ़ना" },
      { en: "Drawing", hi: "चित्र बनाना" },
      { en: "Cooking", hi: "खाना पकाना" }
    ],
    correct: {
      en: "Flying a kite",
      hi: "पतंग उड़ाना"
    },
    explanation: {
      en: "We need wind (moving air) to fly a kite.",
      hi: "पतंग उड़ाने के लिए हमें हवा (चलती हवा) की आवश्यकता होती है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following uses air to dry clothes?",
      hi: "निम्न में से कौन हवा का उपयोग कपड़े सुखाने के लिए करता है?"
    },
    options: [
      { en: "Fan", hi: "पंखा" },
      { en: "Washing machine", hi: "वॉशिंग मशीन" },
      { en: "Fridge", hi: "फ्रिज" },
      { en: "Television", hi: "टीवी" }
    ],
    correct: {
      en: "Fan",
      hi: "पंखा"
    },
    explanation: {
      en: "Fans blow air which helps to dry clothes quickly.",
      hi: "पंखे हवा उड़ाते हैं जिससे कपड़े जल्दी सूखते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which toy works with air?",
      hi: "कौन सा खिलौना हवा से चलता है?"
    },
    options: [
      { en: "Balloon", hi: "गुब्बारा" },
      { en: "Car", hi: "कार" },
      { en: "Robot", hi: "रोबोट" },
      { en: "Doll", hi: "गुड़िया" }
    ],
    correct: {
      en: "Balloon",
      hi: "गुब्बारा"
    },
    explanation: {
      en: "Balloons rise and move because of air inside them.",
      hi: "गुब्बारे अंदर की हवा के कारण उड़ते और चलते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "What helps clothes dry on a clothesline?",
      hi: "कपड़े सूखने में कौन मदद करता है?"
    },
    options: [
      { en: "Wind", hi: "हवा" },
      { en: "Rain", hi: "बारिश" },
      { en: "Snow", hi: "बर्फ" },
      { en: "Cloud", hi: "बादल" }
    ],
    correct: {
      en: "Wind",
      hi: "हवा"
    },
    explanation: {
      en: "Wind or air helps clothes dry faster on a clothesline.",
      hi: "हवा कपड़ों को जल्दी सूखने में मदद करती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Air is needed for which of the following to burn?",
      hi: "निम्न में से किस चीज को जलने के लिए हवा की आवश्यकता होती है?"
    },
    options: [
      { en: "Candle", hi: "मोमबत्ती" },
      { en: "Stone", hi: "पत्थर" },
      { en: "Water", hi: "पानी" },
      { en: "Metal", hi: "धातु" }
    ],
    correct: {
      en: "Candle",
      hi: "मोमबत्ती"
    },
    explanation: {
      en: "Fire needs oxygen in the air to burn.",
      hi: "आग को जलने के लिए हवा में मौजूद ऑक्सीजन की आवश्यकता होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "What is needed to fill a football?",
      hi: "फुटबॉल को भरने के लिए क्या आवश्यक है?"
    },
    options: [
      { en: "Air", hi: "हवा" },
      { en: "Water", hi: "पानी" },
      { en: "Sand", hi: "रेत" },
      { en: "Stones", hi: "पत्थर" }
    ],
    correct: {
      en: "Air",
      hi: "हवा"
    },
    explanation: {
      en: "Air is pumped into the football to make it bounce.",
      hi: "फुटबॉल को उछालने योग्य बनाने के लिए उसमें हवा भरी जाती है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why do we need air?",
      hi: "हमें हवा की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "To breathe and live", hi: "सांस लेने और जीवित रहने के लिए" },
      { en: "To color pictures", hi: "चित्र रंगने के लिए" },
      { en: "To sleep", hi: "सोने के लिए" },
      { en: "To write", hi: "लिखने के लिए" }
    ],
    correct: {
      en: "To breathe and live",
      hi: "सांस लेने और जीवित रहने के लिए"
    },
    explanation: {
      en: "All living beings need air to breathe and survive.",
      hi: "सभी जीवों को जीवित रहने के लिए हवा की आवश्यकता होती है।"
    }
  }
];

export default airUses;
