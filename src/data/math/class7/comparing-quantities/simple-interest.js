const simpleInterestMCQs = [
  {
    id: 1,
    question: {
      en: "What is the formula for Simple Interest?",
      hi: "सरल ब्याज का सूत्र क्या है?"
    },
    options: [
      "SI = (P × R × T) / 100",
      "SI = (P + R + T) / 100",
      "SI = (P × R) / T",
      "SI = (R × T) / P"
    ],
    answer: "SI = (P × R × T) / 100",
    explanation: {
      en: "Simple Interest = (Principal × Rate × Time) / 100",
      hi: "सरल ब्याज = (मूलधन × दर × समय) / 100"
    }
  },
  {
    id: 2,
    question: {
      en: "Find the SI on ₹1000 at 5% per annum for 2 years.",
      hi: "₹1000 पर 5% वार्षिक दर से 2 वर्षों के लिए सरल ब्याज कितना होगा?"
    },
    options: ["₹50", "₹100", "₹150", "₹200"],
    answer: "₹100",
    explanation: {
      en: "SI = (1000 × 5 × 2)/100 = ₹100",
      hi: "SI = (1000 × 5 × 2)/100 = ₹100"
    }
  },
  {
    id: 3,
    question: {
      en: "If SI is ₹120, rate is 4%, time is 3 years. Find the principal.",
      hi: "SI ₹120 है, दर 4% है, समय 3 वर्ष है। मूलधन कितना होगा?"
    },
    options: ["₹900", "₹1000", "₹1100", "₹1200"],
    answer: "₹1000",
    explanation: {
      en: "SI = (P × 4 × 3)/100 ⇒ 120 = (P × 12)/100 ⇒ P = 1000",
      hi: "SI = (P × 4 × 3)/100 = 120 ⇒ P = 1000"
    }
  },
  {
    id: 4,
    question: {
      en: "If P = ₹800, R = 10%, T = 1.5 years, find the SI.",
      hi: "P = ₹800, R = 10%, T = 1.5 वर्ष हो तो SI ज्ञात करें।"
    },
    options: ["₹100", "₹120", "₹150", "₹90"],
    answer: "₹120",
    explanation: {
      en: "SI = (800 × 10 × 1.5)/100 = ₹120",
      hi: "SI = (800 × 10 × 1.5)/100 = ₹120"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the interest earned on ₹5000 at 8% per annum in 3 years?",
      hi: "₹5000 पर 8% वार्षिक दर से 3 वर्षों में ब्याज कितना होगा?"
    },
    options: ["₹1200", "₹1000", "₹1500", "₹1100"],
    answer: "₹1200",
    explanation: {
      en: "SI = (5000 × 8 × 3)/100 = ₹1200",
      hi: "SI = (5000 × 8 × 3)/100 = ₹1200"
    }
  },
  {
    id: 6,
    question: {
      en: "If SI is ₹240, P = ₹2000, R = 6%. Find T.",
      hi: "SI ₹240 है, P ₹2000 है, R 6% है। T ज्ञात करें।"
    },
    options: ["1 year", "2 years", "3 years", "4 years"],
    answer: "2 years",
    explanation: {
      en: "SI = (2000 × 6 × T)/100 ⇒ 240 = 120T ⇒ T = 2 years",
      hi: "SI = (2000 × 6 × T)/100 = 240 ⇒ T = 2"
    }
  },
  {
    id: 7,
    question: {
      en: "For ₹1200, the SI after 2 years is ₹96. What is the rate?",
      hi: "₹1200 पर 2 वर्षों के बाद SI ₹96 है। दर ज्ञात करें।"
    },
    options: ["3%", "4%", "5%", "6%"],
    answer: "4%",
    explanation: {
      en: "SI = (1200 × R × 2)/100 = 96 ⇒ R = 4%",
      hi: "SI = (1200 × R × 2)/100 = 96 ⇒ R = 4%"
    }
  },
  {
    id: 8,
    question: {
      en: "How much SI will ₹1500 earn in 4 years at 6% p.a.?",
      hi: "₹1500 पर 6% वार्षिक दर से 4 वर्षों में SI कितना होगा?"
    },
    options: ["₹360", "₹320", "₹300", "₹280"],
    answer: "₹360",
    explanation: {
      en: "SI = (1500 × 6 × 4)/100 = ₹360",
      hi: "SI = (1500 × 6 × 4)/100 = ₹360"
    }
  },
  {
    id: 9,
    question: {
      en: "If rate = 10% and SI = ₹200 for 2 years, what is the principal?",
      hi: "दर 10% है और SI ₹200 है 2 वर्षों के लिए। मूलधन कितना है?"
    },
    options: ["₹800", "₹1000", "₹1200", "₹1500"],
    answer: "₹1000",
    explanation: {
      en: "SI = (P × 10 × 2)/100 = 200 ⇒ P = ₹1000",
      hi: "SI = (P × 10 × 2)/100 = ₹200 ⇒ P = ₹1000"
    }
  },
  {
    id: 10,
    question: {
      en: "In what time will ₹1600 earn ₹128 at 4% rate?",
      hi: "₹1600 पर ₹128 ब्याज प्राप्त करने में कितने वर्ष लगेंगे यदि दर 4% है?"
    },
    options: ["1 year", "2 years", "3 years", "4 years"],
    answer: "2 years",
    explanation: {
      en: "SI = (1600 × 4 × T)/100 = 128 ⇒ T = 2 years",
      hi: "SI = (1600 × 4 × T)/100 = 128 ⇒ T = 2"
    }
  }
];

export default simpleInterestMCQs;
