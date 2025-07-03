const simpleInterest = {
  questions: [
    {
      question: {
        en: "What is the formula for calculating Simple Interest?",
        hi: "साधारण ब्याज की गणना का सूत्र क्या है?"
      },
      options: [
        { en: "SI = P × R × T / 100", hi: "SI = P × R × T / 100" },
        { en: "SI = P + R + T", hi: "SI = P + R + T" },
        { en: "SI = P × T / R", hi: "SI = P × T / R" },
        { en: "SI = R × T / P", hi: "SI = R × T / P" }
      ],
      correct: { en: "SI = P × R × T / 100", hi: "SI = P × R × T / 100" },
      explanation: {
        en: "The correct formula is SI = (Principal × Rate × Time) / 100",
        hi: "सही सूत्र है SI = (मूलधन × दर × समय) / 100"
      }
    },
    {
      question: {
        en: "Find the simple interest for ₹1000 at 5% rate for 2 years.",
        hi: "₹1000 पर 5% दर से 2 वर्षों के लिए साधारण ब्याज क्या होगा?"
      },
      options: [
        { en: "₹50", hi: "₹50" },
        { en: "₹100", hi: "₹100" },
        { en: "₹75", hi: "₹75" },
        { en: "₹200", hi: "₹200" }
      ],
      correct: { en: "₹100", hi: "₹100" },
      explanation: {
        en: "SI = (1000 × 5 × 2)/100 = ₹100",
        hi: "SI = (1000 × 5 × 2)/100 = ₹100"
      }
    },
    {
      question: {
        en: "If P = ₹500, R = 4%, T = 3 years, what is SI?",
        hi: "यदि P = ₹500, R = 4%, T = 3 वर्ष है, तो SI क्या होगा?"
      },
      options: [
        { en: "₹60", hi: "₹60" },
        { en: "₹50", hi: "₹50" },
        { en: "₹70", hi: "₹70" },
        { en: "₹40", hi: "₹40" }
      ],
      correct: { en: "₹60", hi: "₹60" },
      explanation: {
        en: "SI = (500 × 4 × 3)/100 = ₹60",
        hi: "SI = (500 × 4 × 3)/100 = ₹60"
      }
    },
    {
      question: {
        en: "Find the SI on ₹800 for 5 years at 2% rate.",
        hi: "₹800 पर 5 वर्षों के लिए 2% की दर से SI निकालें।"
      },
      options: [
        { en: "₹80", hi: "₹80" },
        { en: "₹100", hi: "₹100" },
        { en: "₹90", hi: "₹90" },
        { en: "₹60", hi: "₹60" }
      ],
      correct: { en: "₹80", hi: "₹80" },
      explanation: {
        en: "SI = (800 × 2 × 5)/100 = ₹80",
        hi: "SI = (800 × 2 × 5)/100 = ₹80"
      }
    },
    {
      question: {
        en: "If SI = ₹120, R = 6%, T = 2 years, find the principal (P).",
        hi: "यदि SI = ₹120, R = 6%, T = 2 वर्ष, तो मूलधन (P) ज्ञात करें।"
      },
      options: [
        { en: "₹1000", hi: "₹1000" },
        { en: "₹800", hi: "₹800" },
        { en: "₹900", hi: "₹900" },
        { en: "₹1200", hi: "₹1200" }
      ],
      correct: { en: "₹1000", hi: "₹1000" },
      explanation: {
        en: "SI = P × R × T / 100 → 120 = P × 6 × 2 / 100 ⇒ P = ₹1000",
        hi: "120 = P × 6 × 2 / 100 ⇒ P = ₹1000"
      }
    },
    {
      question: {
        en: "For ₹1500 at 3% per annum for 4 years, find SI.",
        hi: "₹1500 पर 3% वार्षिक दर से 4 वर्षों के लिए SI ज्ञात करें।"
      },
      options: [
        { en: "₹160", hi: "₹160" },
        { en: "₹170", hi: "₹170" },
        { en: "₹180", hi: "₹180" },
        { en: "₹200", hi: "₹200" }
      ],
      correct: { en: "₹180", hi: "₹180" },
      explanation: {
        en: "SI = (1500 × 3 × 4)/100 = ₹180",
        hi: "SI = (1500 × 3 × 4)/100 = ₹180"
      }
    },
    {
      question: {
        en: "If T = 1 year, P = ₹2000, and SI = ₹160, find rate R.",
        hi: "यदि T = 1 वर्ष, P = ₹2000, और SI = ₹160 है, तो R दर क्या होगी?"
      },
      options: [
        { en: "6%", hi: "6%" },
        { en: "8%", hi: "8%" },
        { en: "10%", hi: "10%" },
        { en: "12%", hi: "12%" }
      ],
      correct: { en: "8%", hi: "8%" },
      explanation: {
        en: "SI = P × R × T / 100 → 160 = 2000 × R / 100 ⇒ R = 8%",
        hi: "160 = 2000 × R / 100 ⇒ R = 8%"
      }
    },
    {
      question: {
        en: "A student borrows ₹1000 at 10% per year. What is the SI for 1 year?",
        hi: "एक छात्र ₹1000 10% वार्षिक पर उधार लेता है। 1 वर्ष के लिए SI क्या होगा?"
      },
      options: [
        { en: "₹90", hi: "₹90" },
        { en: "₹100", hi: "₹100" },
        { en: "₹110", hi: "₹110" },
        { en: "₹120", hi: "₹120" }
      ],
      correct: { en: "₹100", hi: "₹100" },
      explanation: {
        en: "SI = (1000 × 10 × 1)/100 = ₹100",
        hi: "SI = (1000 × 10 × 1)/100 = ₹100"
      }
    },
    {
      question: {
        en: "Ravi pays ₹75 as interest for 3 years at 5% rate. What is the principal?",
        hi: "रवि 3 वर्षों के लिए 5% दर पर ₹75 ब्याज देता है। मूलधन क्या है?"
      },
      options: [
        { en: "₹400", hi: "₹400" },
        { en: "₹500", hi: "₹500" },
        { en: "₹600", hi: "₹600" },
        { en: "₹700", hi: "₹700" }
      ],
      correct: { en: "₹500", hi: "₹500" },
      explanation: {
        en: "75 = P × 5 × 3 / 100 ⇒ P = ₹500",
        hi: "75 = P × 5 × 3 / 100 ⇒ P = ₹500"
      }
    },
    {
      question: {
        en: "Which of these is **not** needed to find simple interest?",
        hi: "निम्न में से कौन सा साधारण ब्याज निकालने के लिए आवश्यक नहीं है?"
      },
      options: [
        { en: "Principal", hi: "मूलधन" },
        { en: "Rate", hi: "ब्याज दर" },
        { en: "Time", hi: "समय" },
        { en: "Height", hi: "ऊँचाई" }
      ],
      correct: { en: "Height", hi: "ऊँचाई" },
      explanation: {
        en: "SI depends on Principal, Rate, and Time. Height is not required.",
        hi: "SI के लिए Principal, Rate और Time की आवश्यकता होती है। Height नहीं।"
      }
    }
  ]
};

export default simpleInterest;
