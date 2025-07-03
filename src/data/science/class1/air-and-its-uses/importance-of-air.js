const questions = [
  {
    id: 1,
    question: {
      en: "What do we need air for?",
      hi: "हमें हवा की आवश्यकता किस लिए होती है?"
    },
    options: [
      { en: "To play", hi: "खेलने के लिए" },
      { en: "To breathe", hi: "साँस लेने के लिए" },
      { en: "To sing", hi: "गाने के लिए" },
      { en: "To jump", hi: "कूदने के लिए" }
    ],
    correct: {
      en: "To breathe",
      hi: "साँस लेने के लिए"
    },
    explanation: {
      en: "We need air (oxygen) to breathe and stay alive.",
      hi: "हमें साँस लेने और जीवित रहने के लिए हवा (ऑक्सीजन) की आवश्यकता होती है।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the gas in air that we breathe in?",
      hi: "हवा में वह कौन सी गैस है जिसे हम साँस में लेते हैं?"
    },
    options: [
      { en: "Oxygen", hi: "ऑक्सीजन" },
      { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" },
      { en: "Nitrogen", hi: "नाइट्रोजन" },
      { en: "Hydrogen", hi: "हाइड्रोजन" }
    ],
    correct: {
      en: "Oxygen",
      hi: "ऑक्सीजन"
    },
    explanation: {
      en: "Oxygen is the essential gas we breathe in.",
      hi: "ऑक्सीजन वह आवश्यक गैस है जिसे हम साँस में लेते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following needs air to live?",
      hi: "निम्न में से किसे जीवित रहने के लिए हवा चाहिए?"
    },
    options: [
      { en: "Humans", hi: "मनुष्य" },
      { en: "Animals", hi: "जानवर" },
      { en: "Plants", hi: "पौधे" },
      { en: "All of the above", hi: "उपरोक्त सभी" }
    ],
    correct: {
      en: "All of the above",
      hi: "उपरोक्त सभी"
    },
    explanation: {
      en: "All living things need air to stay alive.",
      hi: "सभी सजीवों को जीवित रहने के लिए हवा की आवश्यकता होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "How does air help plants?",
      hi: "हवा पौधों की किस प्रकार मदद करती है?"
    },
    options: [
      { en: "To cook food", hi: "भोजन पकाने में" },
      { en: "To breathe", hi: "साँस लेने में" },
      { en: "To fly", hi: "उड़ने में" },
      { en: "To walk", hi: "चलने में" }
    ],
    correct: {
      en: "To breathe",
      hi: "साँस लेने में"
    },
    explanation: {
      en: "Plants also take in air for their survival.",
      hi: "पौधे भी जीवित रहने के लिए हवा लेते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What would happen if there was no air?",
      hi: "अगर हवा नहीं होती तो क्या होता?"
    },
    options: [
      { en: "We could still live", hi: "हम जीवित रह सकते" },
      { en: "We would grow faster", hi: "हम तेजी से बढ़ते" },
      { en: "We could not survive", hi: "हम जीवित नहीं रह पाते" },
      { en: "It would rain more", hi: "अधिक बारिश होती" }
    ],
    correct: {
      en: "We could not survive",
      hi: "हम जीवित नहीं रह पाते"
    },
    explanation: {
      en: "Air is necessary for all living beings to survive.",
      hi: "हवा सभी सजीवों के जीवित रहने के लिए आवश्यक है।"
    }
  },
  {
    id: 6,
    question: {
      en: "Air helps us to:",
      hi: "हवा हमें किसमें मदद करती है?"
    },
    options: [
      { en: "Sleep", hi: "सोने में" },
      { en: "Move and fly kites", hi: "हिलने और पतंग उड़ाने में" },
      { en: "Eat", hi: "खाने में" },
      { en: "Study", hi: "पढ़ने में" }
    ],
    correct: {
      en: "Move and fly kites",
      hi: "हिलने और पतंग उड़ाने में"
    },
    explanation: {
      en: "Moving air helps us in flying kites and turning windmills.",
      hi: "चलती हवा पतंग उड़ाने और पवनचक्की चलाने में मदद करती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is wind?",
      hi: "पवन क्या है?"
    },
    options: [
      { en: "Still air", hi: "स्थिर हवा" },
      { en: "Moving air", hi: "चलती हवा" },
      { en: "Heavy air", hi: "भारी हवा" },
      { en: "Wet air", hi: "गीली हवा" }
    ],
    correct: {
      en: "Moving air",
      hi: "चलती हवा"
    },
    explanation: {
      en: "When air moves, we call it wind.",
      hi: "जब हवा चलती है, तो उसे पवन कहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of the following is true about air?",
      hi: "हवा के बारे में कौन-सा कथन सही है?"
    },
    options: [
      { en: "We cannot see or feel it", hi: "हम इसे देख या महसूस नहीं कर सकते" },
      { en: "We can only see air", hi: "हम केवल हवा को देख सकते हैं" },
      { en: "We can feel air but not see it", hi: "हम हवा को महसूस कर सकते हैं लेकिन देख नहीं सकते" },
      { en: "Air is red in color", hi: "हवा लाल रंग की होती है" }
    ],
    correct: {
      en: "We can feel air but not see it",
      hi: "हम हवा को महसूस कर सकते हैं लेकिन देख नहीं सकते"
    },
    explanation: {
      en: "Air is invisible but can be felt when it moves.",
      hi: "हवा अदृश्य होती है लेकिन जब चलती है तो महसूस होती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "How do animals use air?",
      hi: "जानवर हवा का उपयोग कैसे करते हैं?"
    },
    options: [
      { en: "To play", hi: "खेलने के लिए" },
      { en: "To breathe", hi: "साँस लेने के लिए" },
      { en: "To eat", hi: "खाने के लिए" },
      { en: "To swim", hi: "तैरने के लिए" }
    ],
    correct: {
      en: "To breathe",
      hi: "साँस लेने के लिए"
    },
    explanation: {
      en: "Animals, like humans, breathe in air to live.",
      hi: "जानवर भी मनुष्यों की तरह जीवित रहने के लिए हवा लेते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which one uses air to fly?",
      hi: "इनमें से कौन हवा का उपयोग उड़ने के लिए करता है?"
    },
    options: [
      { en: "Fish", hi: "मछली" },
      { en: "Bird", hi: "पक्षी" },
      { en: "Snake", hi: "साँप" },
      { en: "Frog", hi: "मेंढक" }
    ],
    correct: {
      en: "Bird",
      hi: "पक्षी"
    },
    explanation: {
      en: "Birds use air to fly with the help of their wings.",
      hi: "पक्षी अपने पंखों की मदद से हवा में उड़ते हैं।"
    }
  }
];

export default questions;
