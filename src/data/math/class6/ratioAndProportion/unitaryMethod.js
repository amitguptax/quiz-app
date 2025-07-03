const unitaryMethod = [
  {
    id: 1,
    question: {
      en: "If 5 pens cost ₹50, what is the cost of 1 pen?",
      hi: "यदि 5 पेन की कीमत ₹50 है, तो 1 पेन की कीमत क्या होगी?"
    },
    options: ["₹5", "₹10", "₹15", "₹20"],
    answer: "₹10",
    explanation: {
      en: "Cost of 1 pen = ₹50 ÷ 5 = ₹10",
      hi: "1 पेन की कीमत = ₹50 ÷ 5 = ₹10"
    }
  },
  {
    id: 2,
    question: {
      en: "If 1 kg of sugar costs ₹36, what is the cost of 3 kg?",
      hi: "यदि 1 किग्रा चीनी की कीमत ₹36 है, तो 3 किग्रा की कीमत क्या होगी?"
    },
    options: ["₹72", "₹108", "₹36", "₹90"],
    answer: "₹108",
    explanation: {
      en: "Cost of 3 kg = ₹36 × 3 = ₹108",
      hi: "3 किग्रा की कीमत = ₹36 × 3 = ₹108"
    }
  },
  {
    id: 3,
    question: {
      en: "If 12 notebooks cost ₹240, what is the cost of 1 notebook?",
      hi: "यदि 12 नोटबुक की कीमत ₹240 है, तो 1 नोटबुक की कीमत क्या है?"
    },
    options: ["₹25", "₹20", "₹18", "₹30"],
    answer: "₹20",
    explanation: {
      en: "Cost of 1 notebook = ₹240 ÷ 12 = ₹20",
      hi: "1 नोटबुक की कीमत = ₹240 ÷ 12 = ₹20"
    }
  },
  {
    id: 4,
    question: {
      en: "If 8 apples cost ₹64, what is the cost of 6 apples?",
      hi: "यदि 8 सेब की कीमत ₹64 है, तो 6 सेब की कीमत क्या होगी?"
    },
    options: ["₹48", "₹50", "₹56", "₹60"],
    answer: "₹48",
    explanation: {
      en: "Cost of 1 apple = ₹64 ÷ 8 = ₹8; Cost of 6 apples = ₹8 × 6 = ₹48",
      hi: "1 सेब की कीमत ₹64 ÷ 8 = ₹8; 6 सेब = ₹8 × 6 = ₹48"
    }
  },
  {
    id: 5,
    question: {
      en: "If 3 meters of cloth costs ₹180, what is the cost of 5 meters?",
      hi: "3 मीटर कपड़े की कीमत ₹180 है, तो 5 मीटर की कीमत क्या है?"
    },
    options: ["₹250", "₹300", "₹270", "₹310"],
    answer: "₹300",
    explanation: {
      en: "Cost of 1 meter = ₹180 ÷ 3 = ₹60; 5 meters = ₹60 × 5 = ₹300",
      hi: "1 मीटर की कीमत ₹60; 5 मीटर = ₹60 × 5 = ₹300"
    }
  },
  {
    id: 6,
    question: {
      en: "If 6 chocolates cost ₹90, what is the cost of 2 chocolates?",
      hi: "यदि 6 चॉकलेट की कीमत ₹90 है, तो 2 चॉकलेट की कीमत क्या होगी?"
    },
    options: ["₹20", "₹25", "₹30", "₹35"],
    answer: "₹30",
    explanation: {
      en: "1 chocolate = ₹90 ÷ 6 = ₹15; 2 chocolates = ₹15 × 2 = ₹30",
      hi: "1 चॉकलेट = ₹15; 2 चॉकलेट = ₹15 × 2 = ₹30"
    }
  },
  {
    id: 7,
    question: {
      en: "If 4 litres of oil cost ₹320, what is the cost of 1 litre?",
      hi: "यदि 4 लीटर तेल की कीमत ₹320 है, तो 1 लीटर की कीमत क्या है?"
    },
    options: ["₹80", "₹70", "₹90", "₹85"],
    answer: "₹80",
    explanation: {
      en: "Cost of 1 litre = ₹320 ÷ 4 = ₹80",
      hi: "1 लीटर की कीमत = ₹320 ÷ 4 = ₹80"
    }
  },
  {
    id: 8,
    question: {
      en: "If 1 bag of rice weighs 25 kg, what will be the weight of 8 such bags?",
      hi: "1 चावल की बोरी 25 किग्रा है, तो 8 बोरियों का वजन क्या होगा?"
    },
    options: ["200 kg", "180 kg", "225 kg", "150 kg"],
    answer: "200 kg",
    explanation: {
      en: "Total = 25 × 8 = 200 kg",
      hi: "कुल = 25 × 8 = 200 किग्रा"
    }
  },
  {
    id: 9,
    question: {
      en: "If 1 man can do a job in 12 days, how many days will 3 men take?",
      hi: "यदि 1 आदमी एक काम 12 दिन में करता है, तो 3 आदमी कितने दिन में करेंगे?"
    },
    options: ["4", "6", "3", "5"],
    answer: "4",
    explanation: {
      en: "More men = fewer days. 12 ÷ 3 = 4 days",
      hi: "ज्यादा आदमी = कम दिन; 12 ÷ 3 = 4 दिन"
    }
  },
  {
    id: 10,
    question: {
      en: "If 10 eggs cost ₹50, what is the cost of 1 egg?",
      hi: "10 अंडों की कीमत ₹50 है, तो 1 अंडे की कीमत क्या है?"
    },
    options: ["₹10", "₹7", "₹6", "₹5"],
    answer: "₹5",
    explanation: {
      en: "₹50 ÷ 10 = ₹5",
      hi: "₹50 ÷ 10 = ₹5"
    }
  }
];

export default unitaryMethod;
