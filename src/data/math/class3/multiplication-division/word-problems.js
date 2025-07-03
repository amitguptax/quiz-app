const questions = [
  {
    question: {
      en: "A pen costs ₹8. How much do 5 pens cost?",
      hi: "एक पेन की कीमत ₹8 है। 5 पेन की कुल कीमत क्या होगी?"
    },
    options: ["₹35", "₹30", "₹40", "₹45"],
    correct: { en: "₹40", hi: "₹40" },
    explanation: {
      en: "₹8 × 5 = ₹40",
      hi: "₹8 × 5 = ₹40"
    }
  },
  {
    question: {
      en: "There are 6 rows of chairs with 4 chairs in each row. How many chairs in total?",
      hi: "6 कतारों में 4 कुर्सियाँ हैं। कुल कितनी कुर्सियाँ हैं?"
    },
    options: ["20", "22", "24", "26"],
    correct: { en: "24", hi: "24" },
    explanation: {
      en: "6 × 4 = 24 chairs",
      hi: "6 × 4 = 24 कुर्सियाँ"
    }
  },
  {
    question: {
      en: "Ravi has 36 chocolates. He gives 9 to each of his 4 friends. How many chocolates are left?",
      hi: "रवि के पास 36 चॉकलेट हैं। वह 4 दोस्तों को 9-9 देता है। उसके पास कितनी बचती हैं?"
    },
    options: ["0", "4", "2", "5"],
    correct: { en: "0", hi: "0" },
    explanation: {
      en: "9 × 4 = 36, 36 - 36 = 0",
      hi: "9 × 4 = 36, 36 - 36 = 0 बची"
    }
  },
  {
    question: {
      en: "There are 5 packets. Each packet has 6 pencils. How many pencils in total?",
      hi: "5 पैकेट हैं और हर पैकेट में 6 पेंसिल हैं। कुल पेंसिल कितनी हैं?"
    },
    options: ["25", "30", "35", "36"],
    correct: { en: "30", hi: "30" },
    explanation: {
      en: "5 × 6 = 30 pencils",
      hi: "5 × 6 = 30 पेंसिल"
    }
  },
  {
    question: {
      en: "40 apples are divided among 5 children. How many apples does each child get?",
      hi: "40 सेबों को 5 बच्चों में बराबर बांटा गया। प्रत्येक को कितने सेब मिले?"
    },
    options: ["6", "8", "7", "10"],
    correct: { en: "8", hi: "8" },
    explanation: {
      en: "40 ÷ 5 = 8",
      hi: "40 ÷ 5 = 8 सेब"
    }
  },
  {
    question: {
      en: "A box contains 7 rows of 5 toys. How many toys are there in total?",
      hi: "एक डिब्बे में 7 कतारें हैं और प्रत्येक में 5 खिलौने हैं। कुल कितने खिलौने हैं?"
    },
    options: ["35", "30", "40", "45"],
    correct: { en: "35", hi: "35" },
    explanation: {
      en: "7 × 5 = 35 toys",
      hi: "7 × 5 = 35 खिलौने"
    }
  },
  {
    question: {
      en: "A book costs ₹15. How many such books can be bought with ₹90?",
      hi: "एक किताब की कीमत ₹15 है। ₹90 में कितनी किताबें खरीदी जा सकती हैं?"
    },
    options: ["5", "6", "7", "8"],
    correct: { en: "6", hi: "6" },
    explanation: {
      en: "90 ÷ 15 = 6 books",
      hi: "90 ÷ 15 = 6 किताबें"
    }
  },
  {
    question: {
      en: "Maya has ₹45. She buys 3 pens of equal price. What is the cost of one pen?",
      hi: "माया के पास ₹45 हैं। वह 3 पेन एक जैसी कीमत के खरीदती है। एक पेन की कीमत क्या है?"
    },
    options: ["₹10", "₹15", "₹20", "₹25"],
    correct: { en: "₹15", hi: "₹15" },
    explanation: {
      en: "45 ÷ 3 = ₹15",
      hi: "45 ÷ 3 = ₹15"
    }
  },
  {
    question: {
      en: "If 6 bananas cost ₹24, what is the cost of 1 banana?",
      hi: "6 केले ₹24 के हैं। 1 केले की कीमत क्या होगी?"
    },
    options: ["₹5", "₹6", "₹4", "₹3"],
    correct: { en: "₹4", hi: "₹4" },
    explanation: {
      en: "24 ÷ 6 = ₹4",
      hi: "24 ÷ 6 = ₹4"
    }
  },
  {
    question: {
      en: "There are 5 baskets. Each has 8 oranges. How many oranges in all?",
      hi: "5 टोकरी हैं और हर एक में 8 संतरे हैं। कुल कितने संतरे हैं?"
    },
    options: ["40", "35", "45", "30"],
    correct: { en: "40", hi: "40" },
    explanation: {
      en: "5 × 8 = 40 oranges",
      hi: "5 × 8 = 40 संतरे"
    }
  }
];

export default { questions };
