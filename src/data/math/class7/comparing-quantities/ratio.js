const ratioAndProportionMCQs = [
  {
    id: 1,
    question: {
      en: "What is the ratio of 3 kg to 500 g?",
      hi: "3 किलोग्राम का 500 ग्राम से अनुपात क्या है?"
    },
    options: ["3:5", "6:1", "1:6", "5:3"],
    answer: "6:1",
    explanation: {
      en: "3 kg = 3000 g, so ratio is 3000:500 = 6:1",
      hi: "3 किलोग्राम = 3000 ग्राम, तो अनुपात 3000:500 = 6:1 होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "If 2:3 = x:15, find the value of x.",
      hi: "यदि 2:3 = x:15, तो x का मान क्या होगा?"
    },
    options: ["5", "10", "12", "8"],
    answer: "10",
    explanation: {
      en: "2:3 = x:15 → 2×15 = 3x → x = 30/3 = 10",
      hi: "2:3 = x:15 → 2×15 = 3x → x = 30/3 = 10"
    }
  },
  {
    id: 3,
    question: {
      en: "Which of the following ratios is equivalent to 4:5?",
      hi: "निम्न में से कौन सा अनुपात 4:5 के बराबर है?"
    },
    options: ["8:10", "12:20", "2:3", "10:15"],
    answer: "8:10",
    explanation: {
      en: "4:5 × 2 = 8:10; hence, 8:10 is equivalent.",
      hi: "4:5 × 2 = 8:10, इसलिए यह समतुल्य है।"
    }
  },
  {
    id: 4,
    question: {
      en: "If the cost of 5 pens is ₹100, what is the cost of 8 pens?",
      hi: "यदि 5 पेन की कीमत ₹100 है, तो 8 पेन की कीमत क्या होगी?"
    },
    options: ["₹150", "₹160", "₹180", "₹120"],
    answer: "₹160",
    explanation: {
      en: "Cost of 1 pen = 100/5 = ₹20; 8 pens = 8×20 = ₹160",
      hi: "1 पेन की कीमत = ₹100/5 = ₹20; 8 पेन = 8×20 = ₹160"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is not a valid proportion?",
      hi: "इनमें से कौन सही समानुपात नहीं है?"
    },
    options: ["2:3 = 4:6", "5:10 = 1:2", "3:4 = 9:12", "7:2 = 21:5"],
    answer: "7:2 = 21:5",
    explanation: {
      en: "7×5 ≠ 2×21, so this is not a valid proportion.",
      hi: "7×5 ≠ 2×21, इसलिए यह समानुपात नहीं है।"
    }
  },
  {
    id: 6,
    question: {
      en: "A and B share ₹400 in the ratio 1:3. What is B’s share?",
      hi: "A और B ₹400 को 1:3 के अनुपात में बाँटते हैं। B का हिस्सा क्या होगा?"
    },
    options: ["₹100", "₹200", "₹300", "₹150"],
    answer: "₹300",
    explanation: {
      en: "Total parts = 1+3 = 4; B gets 3/4 of ₹400 = ₹300",
      hi: "कुल भाग = 4; B का हिस्सा = ₹400 × 3/4 = ₹300"
    }
  },
  {
    id: 7,
    question: {
      en: "If a:b = 2:5 and b:c = 3:7, find a:c.",
      hi: "यदि a:b = 2:5 और b:c = 3:7 हो, तो a:c का अनुपात क्या होगा?"
    },
    options: ["6:35", "2:7", "6:7", "5:3"],
    answer: "6:35",
    explanation: {
      en: "Make b common: 2:5 and 5:7 → a:c = 2×3 : 5×7 = 6:35",
      hi: "b को सामान्य बनाएं: a:b = 2:5 और b:c = 3:7 → a:c = 6:35"
    }
  },
  {
    id: 8,
    question: {
      en: "Find x: If 12:x = 4:5",
      hi: "x का मान ज्ञात करें: 12:x = 4:5"
    },
    options: ["15", "16", "12", "10"],
    answer: "15",
    explanation: {
      en: "12×5 = x×4 → 60 = 4x → x = 15",
      hi: "12×5 = x×4 → 60 = 4x → x = 15"
    }
  },
  {
    id: 9,
    question: {
      en: "In the ratio 5:9, what is the total number of parts?",
      hi: "5:9 अनुपात में कुल भागों की संख्या क्या है?"
    },
    options: ["14", "9", "5", "4"],
    answer: "14",
    explanation: {
      en: "Add both terms: 5 + 9 = 14 parts",
      hi: "5 + 9 = 14 भाग होते हैं"
    }
  },
  {
    id: 10,
    question: {
      en: "If two quantities increase or decrease together, they are:",
      hi: "यदि दो मात्राएँ साथ-साथ बढ़ती या घटती हैं, तो वे कहलाती हैं:"
    },
    options: ["Inverse ratio", "Direct proportion", "Equal quantities", "None"],
    answer: "Direct proportion",
    explanation: {
      en: "When both increase/decrease together → Direct Proportion",
      hi: "दोनों का साथ-साथ बढ़ना या घटना → प्रत्यक्ष समानुपात होता है।"
    }
  }
];

export default ratioAndProportionMCQs;
