const inverseProportion = [
  {
    id: 1,
    question: {
      en: "If 4 workers complete a task in 12 days, how many days will 6 workers take to complete it?",
      hi: "यदि 4 श्रमिक एक कार्य को 12 दिनों में पूरा करते हैं, तो 6 श्रमिक उसे कितने दिनों में पूरा करेंगे?"
    },
    options: ["8", "6", "10", "9"],
    answer: "8",
    explanation: {
      en: "More workers, fewer days ⇒ 4 × 12 = 6 × x ⇒ x = 8",
      hi: "अधिक श्रमिक, कम दिन ⇒ 4 × 12 = 6 × x ⇒ x = 8"
    }
  },
  {
    id: 2,
    question: {
      en: "In inverse proportion, if x increases, then y:",
      hi: "व्युत्क्रमानुपात में यदि x बढ़ता है, तो y:"
    },
    options: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
    answer: "Decreases",
    explanation: {
      en: "In inverse proportion, as one quantity increases, the other decreases.",
      hi: "व्युत्क्रमानुपात में एक राशि बढ़ने पर दूसरी घटती है।"
    }
  },
  {
    id: 3,
    question: {
      en: "If 5 taps fill a tank in 6 hours, how many taps will fill it in 2 hours?",
      hi: "यदि 5 नल एक टंकी को 6 घंटे में भरते हैं, तो 2 घंटे में उसे भरने के लिए कितने नल चाहिए?"
    },
    options: ["15", "10", "12", "20"],
    answer: "15",
    explanation: {
      en: "More taps = less time ⇒ 5 × 6 = x × 2 ⇒ x = 15",
      hi: "अधिक नल = कम समय ⇒ 5 × 6 = x × 2 ⇒ x = 15"
    }
  },
  {
    id: 4,
    question: {
      en: "Which of the following is an inverse proportion?",
      hi: "निम्न में से कौन व्युत्क्रमानुपात है?"
    },
    options: [
      "Workers and time",
      "Speed and time (fixed distance)",
      "Number of machines and production time",
      "All of the above"
    ],
    answer: "All of the above",
    explanation: {
      en: "All show inverse relation: more of one means less of the other.",
      hi: "सभी में व्युत्क्रमानुपात है: एक बढ़ने पर दूसरा घटता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "A car takes 5 hours at 60 km/h. How much time at 100 km/h for same distance?",
      hi: "एक कार 60 किमी/घं की रफ्तार से 5 घंटे लेती है। 100 किमी/घं पर कितना समय लगेगा?"
    },
    options: ["3", "2", "4", "6"],
    answer: "3",
    explanation: {
      en: "Speed ↑, time ↓ ⇒ 60 × 5 = 100 × x ⇒ x = 3",
      hi: "गति बढ़ी, समय घटा ⇒ 60 × 5 = 100 × x ⇒ x = 3"
    }
  },
  {
    id: 6,
    question: {
      en: "In inverse proportion, the product x × y is:",
      hi: "व्युत्क्रमानुपात में x × y का मान होता है:"
    },
    options: ["Constant", "Zero", "Increasing", "Variable"],
    answer: "Constant",
    explanation: {
      en: "In inverse proportion, x × y = constant.",
      hi: "व्युत्क्रमानुपात में x × y स्थिर रहता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "12 men can paint a wall in 8 hours. How long will 6 men take?",
      hi: "12 आदमी एक दीवार को 8 घंटे में रंग सकते हैं। 6 आदमी कितने समय में रंगेंगे?"
    },
    options: ["16", "12", "10", "6"],
    answer: "16",
    explanation: {
      en: "12 × 8 = 6 × x ⇒ x = 16",
      hi: "12 × 8 = 6 × x ⇒ x = 16"
    }
  },
  {
    id: 8,
    question: {
      en: "Which of these is *not* an inverse proportion?",
      hi: "इनमें से कौन *व्युत्क्रमानुपात नहीं* है?"
    },
    options: [
      "Speed and time (fixed distance)",
      "Quantity and price (fixed cost)",
      "Distance and time (fixed speed)",
      "Workers and days (fixed work)"
    ],
    answer: "Distance and time (fixed speed)",
    explanation: {
      en: "At fixed speed, more time means more distance (direct).",
      hi: "नियत गति पर समय बढ़ने से दूरी बढ़ती है ⇒ प्रत्यक्ष अनुपात।"
    }
  },
  {
    id: 9,
    question: {
      en: "If 6 pipes drain a tank in 4 hours, 2 pipes will drain it in:",
      hi: "6 पाइप एक टंकी को 4 घंटे में खाली करते हैं, तो 2 पाइप कितने समय में?"
    },
    options: ["12", "10", "8", "6"],
    answer: "12",
    explanation: {
      en: "6 × 4 = 2 × x ⇒ x = 12",
      hi: "6 × 4 = 2 × x ⇒ x = 12"
    }
  },
  {
    id: 10,
    question: {
      en: "If 18 workers take 20 days, 30 workers will take how many days?",
      hi: "यदि 18 श्रमिक 20 दिन लेते हैं, तो 30 श्रमिक कितने दिन लेंगे?"
    },
    options: ["12", "10", "15", "18"],
    answer: "12",
    explanation: {
      en: "18 × 20 = 30 × x ⇒ x = 12",
      hi: "18 × 20 = 30 × x ⇒ x = 12"
    }
  }
];

export default inverseProportion;
