const directProportion = [
  {
    id: 1,
    question: {
      en: "If 3 pens cost ₹15, how much will 7 pens cost in direct proportion?",
      hi: "यदि 3 पेन की कीमत ₹15 है, तो 7 पेन की कीमत प्रत्यक्ष अनुपात में कितनी होगी?"
    },
    options: ["₹35", "₹25", "₹30", "₹28"],
    answer: "₹35",
    explanation: {
      en: "Cost per pen = ₹15 ÷ 3 = ₹5, so 7 pens = 7 × 5 = ₹35",
      hi: "1 पेन = ₹15 ÷ 3 = ₹5, तो 7 पेन = 7 × 5 = ₹35"
    }
  },
  {
    id: 2,
    question: {
      en: "In direct proportion, if x = 4 and y = 8, then when x = 6, y = ?",
      hi: "प्रत्यक्ष अनुपात में यदि x = 4 और y = 8 है, तो जब x = 6 हो तो y = ?"
    },
    options: ["10", "12", "16", "14"],
    answer: "12",
    explanation: {
      en: "x/y = 4/8 = 1/2, so 6/y = 1/2 ⇒ y = 12",
      hi: "x/y = 4/8 = 1/2, तो 6/y = 1/2 ⇒ y = 12"
    }
  },
  {
    id: 3,
    question: {
      en: "Direct proportion means:",
      hi: "प्रत्यक्ष अनुपात का अर्थ है:"
    },
    options: [
      "Both quantities increase or decrease together",
      "One increases, other decreases",
      "Only one remains constant",
      "None of these"
    ],
    answer: "Both quantities increase or decrease together",
    explanation: {
      en: "In direct proportion, both variables change in the same direction.",
      hi: "प्रत्यक्ष अनुपात में दोनों राशियाँ एक ही दिशा में बदलती हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "If 5 kg sugar costs ₹250, then 2 kg sugar will cost?",
      hi: "यदि 5 किग्रा चीनी की कीमत ₹250 है, तो 2 किग्रा की कीमत क्या होगी?"
    },
    options: ["₹100", "₹80", "₹90", "₹120"],
    answer: "₹100",
    explanation: {
      en: "₹250 ÷ 5 = ₹50/kg ⇒ 2 kg = ₹100",
      hi: "₹250 ÷ 5 = ₹50 प्रति किग्रा ⇒ 2 किग्रा = ₹100"
    }
  },
  {
    id: 5,
    question: {
      en: "In direct proportion, the ratio x/y is:",
      hi: "प्रत्यक्ष अनुपात में x/y अनुपात होता है:"
    },
    options: ["Constant", "Variable", "Zero", "Increasing"],
    answer: "Constant",
    explanation: {
      en: "In direct proportion, x/y remains constant.",
      hi: "प्रत्यक्ष अनुपात में x/y स्थिर रहता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "If 8 workers complete a task in 6 days, how long will 4 workers take (assuming direct proportion of men and days)?",
      hi: "यदि 8 श्रमिक 6 दिनों में काम पूरा करते हैं, तो 4 श्रमिक कितने दिनों में करेंगे? (प्रत्यक्ष अनुपात मानते हुए)"
    },
    options: ["12", "6", "8", "4"],
    answer: "12",
    explanation: {
      en: "More workers → less time is inverse. So here it's inverse not direct.",
      hi: "अधिक श्रमिक → कम समय = व्युत्क्रम अनुपात। यह प्रत्यक्ष नहीं है।"
    }
  },
  {
    id: 7,
    question: {
      en: "If distance is directly proportional to time, then doubling the time will:",
      hi: "यदि दूरी समय के प्रत्यक्ष अनुपाती है, तो समय को दोगुना करने से:"
    },
    options: [
      "Double the distance",
      "Halve the distance",
      "No change",
      "Triples the distance"
    ],
    answer: "Double the distance",
    explanation: {
      en: "Direct proportion → double time = double distance",
      hi: "प्रत्यक्ष अनुपात ⇒ दोगुना समय = दोगुनी दूरी"
    }
  },
  {
    id: 8,
    question: {
      en: "If 6 notebooks cost ₹90, cost of 10 notebooks is:",
      hi: "यदि 6 कॉपी की कीमत ₹90 है, तो 10 कॉपी की कीमत क्या होगी?"
    },
    options: ["₹150", "₹140", "₹120", "₹100"],
    answer: "₹150",
    explanation: {
      en: "₹90 ÷ 6 = ₹15 each, so 10 × 15 = ₹150",
      hi: "1 कॉपी = ₹15 ⇒ 10 कॉपी = ₹150"
    }
  },
  {
    id: 9,
    question: {
      en: "A car covers 200 km in 4 hours. At the same speed, distance in 6 hours is:",
      hi: "एक कार 4 घंटे में 200 किमी चलती है। समान गति पर 6 घंटे में दूरी होगी:"
    },
    options: ["300 km", "400 km", "250 km", "100 km"],
    answer: "300 km",
    explanation: {
      en: "Speed = 50 km/hr ⇒ 6 × 50 = 300 km",
      hi: "गति = 50 किमी/घंटा ⇒ 6 × 50 = 300 किमी"
    }
  },
  {
    id: 10,
    question: {
      en: "Which of the following shows a direct proportion?",
      hi: "निम्न में से कौन प्रत्यक्ष अनुपात दर्शाता है?"
    },
    options: [
      "Cost vs Quantity",
      "Speed vs Time (for same distance)",
      "Number of workers vs time",
      "None of these"
    ],
    answer: "Cost vs Quantity",
    explanation: {
      en: "More quantity = more cost ⇒ direct proportion",
      hi: "अधिक मात्रा = अधिक कीमत ⇒ प्रत्यक्ष अनुपात"
    }
  }
];

export default directProportion;
