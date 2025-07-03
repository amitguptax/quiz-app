const wordProblems = [
  {
    id: 1,
    question: {
      en: "Ravi had ₹7. He gave ₹3.5 to his friend. How much money is left with Ravi?",
      hi: "रवि के पास ₹7 थे। उसने अपने मित्र को ₹3.5 दिए। उसके पास अब कितने पैसे बचे?"
    },
    options: ["₹3.5", "₹4", "₹2.5", "₹5"],
    answer: "₹3.5",
    explanation: {
      en: "₹7 - ₹3.5 = ₹3.5 is left.",
      hi: "₹7 - ₹3.5 = ₹3.5 रवि के पास बचे।"
    }
  },
  {
    id: 2,
    question: {
      en: "What is the total when you add -3/4 and 5/6?",
      hi: "-3/4 और 5/6 को जोड़ने पर कुल क्या होगा?"
    },
    options: ["1/2", "1/12", "11/12", "-1"],
    answer: "1/12",
    explanation: {
      en: "-3/4 + 5/6 = (-9+10)/12 = 1/12.",
      hi: "-3/4 + 5/6 = (-9+10)/12 = 1/12।"
    }
  },
  {
    id: 3,
    question: {
      en: "Aman spends 2/5 of his salary on rent. If his salary is ₹20,000, how much does he spend on rent?",
      hi: "अमन अपनी तनख्वाह का 2/5 किराए पर खर्च करता है। अगर उसकी तनख्वाह ₹20,000 है, तो किराया कितना है?"
    },
    options: ["₹8,000", "₹10,000", "₹12,000", "₹4,000"],
    answer: "₹8,000",
    explanation: {
      en: "2/5 × 20,000 = ₹8,000.",
      hi: "2/5 × ₹20,000 = ₹8,000।"
    }
  },
  {
    id: 4,
    question: {
      en: "What should be added to -2/3 to get 1/3?",
      hi: "1/3 प्राप्त करने के लिए -2/3 में क्या जोड़ना चाहिए?"
    },
    options: ["-1", "1", "2/3", "1"],
    answer: "1",
    explanation: {
      en: "-2/3 + 1 = 1/3.",
      hi: "-2/3 + 1 = 1/3।"
    }
  },
  {
    id: 5,
    question: {
      en: "If a car covers 3/4 of a kilometer in 1 minute, how much distance will it cover in 4 minutes?",
      hi: "यदि एक कार 1 मिनट में 3/4 किलोमीटर चलती है, तो 4 मिनट में वह कितनी दूरी तय करेगी?"
    },
    options: ["3 km", "2.5 km", "4 km", "2 km"],
    answer: "3 km",
    explanation: {
      en: "3/4 × 4 = 3 km.",
      hi: "3/4 × 4 = 3 किमी।"
    }
  },
  {
    id: 6,
    question: {
      en: "If a tank fills 1/5 of its capacity every hour, how long will it take to fill completely?",
      hi: "अगर एक टंकी हर घंटे अपनी 1/5 क्षमता भरती है, तो पूरी टंकी भरने में कितना समय लगेगा?"
    },
    options: ["3 hours", "4 hours", "5 hours", "6 hours"],
    answer: "5 hours",
    explanation: {
      en: "1/5 × 5 = 1, so 5 hours to fill completely.",
      hi: "1/5 × 5 = 1, इसलिए 5 घंटे में पूरी भर जाएगी।"
    }
  },
  {
    id: 7,
    question: {
      en: "What is the profit if you buy something for ₹4.5 and sell it for ₹6?",
      hi: "अगर कोई वस्तु ₹4.5 में खरीदी और ₹6 में बेची, तो लाभ कितना हुआ?"
    },
    options: ["₹1.5", "₹2", "₹1", "₹0.5"],
    answer: "₹1.5",
    explanation: {
      en: "₹6 - ₹4.5 = ₹1.5 profit.",
      hi: "₹6 - ₹4.5 = ₹1.5 लाभ।"
    }
  },
  {
    id: 8,
    question: {
      en: "Shreya drinks 2/3 liters of milk in the morning and 1/3 liters at night. How much milk did she drink in total?",
      hi: "श्रेया सुबह 2/3 लीटर और रात को 1/3 लीटर दूध पीती है। कुल कितना दूध पिया?"
    },
    options: ["1 liter", "2/3 liter", "1/2 liter", "3/2 liters"],
    answer: "1 liter",
    explanation: {
      en: "2/3 + 1/3 = 1 liter.",
      hi: "2/3 + 1/3 = 1 लीटर।"
    }
  },
  {
    id: 9,
    question: {
      en: "A book costs ₹120. If you pay 3/4 of the cost, how much did you pay?",
      hi: "एक किताब की कीमत ₹120 है। यदि आपने कीमत का 3/4 भुगतान किया, तो आपने कितनी राशि दी?"
    },
    options: ["₹90", "₹60", "₹30", "₹100"],
    answer: "₹90",
    explanation: {
      en: "3/4 × 120 = ₹90.",
      hi: "3/4 × ₹120 = ₹90।"
    }
  },
  {
    id: 10,
    question: {
      en: "Anil scored -5, 7, and 3 in three games. What is his average score?",
      hi: "अनिल ने तीन खेलों में -5, 7 और 3 अंक प्राप्त किए। उसका औसत स्कोर क्या है?"
    },
    options: ["5", "3", "2", "1.5"],
    answer: "1.5",
    explanation: {
      en: "(-5 + 7 + 3)/3 = 5/3 = 1.66 ≈ 1.5.",
      hi: "(-5 + 7 + 3)/3 = 5/3 ≈ 1.5।"
    }
  }
];

export default wordProblems;
