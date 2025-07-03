const simpleInterest = [
  {
    id: 1,
    question: {
      en: "What is the formula for Simple Interest?",
      hi: "सरल ब्याज का सूत्र क्या है?"
    },
    options: [
      "P × R × T / 100",
      "P + R + T",
      "P × R / T",
      "P × T / R"
    ],
    answer: "P × R × T / 100",
    explanation: {
      en: "Simple Interest (SI) = (Principal × Rate × Time) / 100",
      hi: "सरल ब्याज = (मूलधन × ब्याज दर × समय) / 100"
    }
  },
  {
    id: 2,
    question: {
      en: "If P = ₹1000, R = 5%, T = 2 years, find the SI.",
      hi: "यदि P = ₹1000, R = 5%, T = 2 वर्ष हो, तो सरल ब्याज ज्ञात करें।"
    },
    options: ["₹100", "₹90", "₹110", "₹95"],
    answer: "₹100",
    explanation: {
      en: "SI = (1000 × 5 × 2)/100 = ₹100",
      hi: "SI = (1000 × 5 × 2)/100 = ₹100"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the principal if SI = ₹120, R = 6%, T = 2 years?",
      hi: "यदि SI = ₹120, R = 6%, T = 2 वर्ष हो, तो मूलधन कितना होगा?"
    },
    options: ["₹1000", "₹1200", "₹1100", "₹1500"],
    answer: "₹1000",
    explanation: {
      en: "SI = (P × 6 × 2)/100 → P = (120 × 100)/(6 × 2) = ₹1000",
      hi: "SI = (P × 6 × 2)/100 → P = (120 × 100)/(6 × 2) = ₹1000"
    }
  },
  {
    id: 4,
    question: {
      en: "If the time is doubled, what happens to SI?",
      hi: "यदि समय दुगुना हो जाए तो सरल ब्याज पर क्या असर होगा?"
    },
    options: ["SI doubles", "SI halves", "SI remains same", "SI becomes zero"],
    answer: "SI doubles",
    explanation: {
      en: "SI is directly proportional to time, so it doubles.",
      hi: "SI समय के समानुपाती होता है, इसलिए यह दुगुना हो जाएगा।"
    }
  },
  {
    id: 5,
    question: {
      en: "SI on ₹5000 at 4% for 3 years is:",
      hi: "₹5000 पर 4% की दर से 3 वर्षों का सरल ब्याज है:"
    },
    options: ["₹600", "₹500", "₹700", "₹550"],
    answer: "₹600",
    explanation: {
      en: "SI = (5000 × 4 × 3)/100 = ₹600",
      hi: "SI = (5000 × 4 × 3)/100 = ₹600"
    }
  },
  {
    id: 6,
    question: {
      en: "If the interest earned is ₹200 in 4 years at 5%, what is the principal?",
      hi: "यदि 4 वर्षों में 5% की दर से ब्याज ₹200 हो, तो मूलधन कितना है?"
    },
    options: ["₹1000", "₹1200", "₹800", "₹1100"],
    answer: "₹1000",
    explanation: {
      en: "P = (SI × 100)/(R × T) = (200 × 100)/(5 × 4) = ₹1000",
      hi: "P = (SI × 100)/(R × T) = (200 × 100)/(5 × 4) = ₹1000"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following affects SI?",
      hi: "निम्न में से कौन सरल ब्याज को प्रभावित करता है?"
    },
    options: ["Principal", "Rate of interest", "Time", "All of these"],
    answer: "All of these",
    explanation: {
      en: "SI depends on P, R and T.",
      hi: "सरल ब्याज P, R और T पर निर्भर करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Find the rate when SI = ₹240, P = ₹2000, T = 3 years.",
      hi: "SI = ₹240, P = ₹2000, T = 3 वर्ष हो, तो ब्याज दर ज्ञात करें।"
    },
    options: ["4%", "3%", "5%", "6%"],
    answer: "4%",
    explanation: {
      en: "R = (SI × 100) / (P × T) = (240 × 100) / (2000 × 3) = 4%",
      hi: "R = (SI × 100) / (P × T) = (240 × 100) / (2000 × 3) = 4%"
    }
  },
  {
    id: 9,
    question: {
      en: "For how many years should ₹2500 be invested at 8% to get ₹400 as SI?",
      hi: "₹2500 को 8% की दर से ₹400 सरल ब्याज प्राप्त करने के लिए कितने वर्षों तक निवेश करना होगा?"
    },
    options: ["2 years", "1 year", "3 years", "2.5 years"],
    answer: "2 years",
    explanation: {
      en: "T = (SI × 100) / (P × R) = (400 × 100)/(2500 × 8) = 2 years",
      hi: "T = (SI × 100) / (P × R) = (400 × 100)/(2500 × 8) = 2 वर्ष"
    }
  },
  {
    id: 10,
    question: {
      en: "If ₹8000 gives ₹1600 interest in 4 years, what is the rate?",
      hi: "₹8000 पर 4 वर्षों में ₹1600 ब्याज प्राप्त हो, तो दर क्या है?"
    },
    options: ["5%", "4%", "6%", "7%"],
    answer: "5%",
    explanation: {
      en: "R = (SI × 100)/(P × T) = (1600 × 100)/(8000 × 4) = 5%",
      hi: "R = (SI × 100)/(P × T) = (1600 × 100)/(8000 × 4) = 5%"
    }
  }
];

export default simpleInterest;
