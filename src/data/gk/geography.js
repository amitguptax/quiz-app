const geography = [
  {
    id: 1,
    question: {
      en: "What is the capital of India?",
      hi: "भारत की राजधानी क्या है?"
    },
    options: {
      en: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      hi: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"]
    },
    correctAnswer: "Delhi", // match from 'en' array
    explanation: {
      en: "New Delhi is the capital of India.",
      hi: "नई दिल्ली भारत की राजधानी है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which river is the longest in India?",
      hi: "भारत की सबसे लंबी नदी कौन सी है?"
    },
    options: {
      en: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
      hi: ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"]
    },
    correctAnswer: "Ganga",
    explanation: {
      en: "Ganga is the longest river in India.",
      hi: "गंगा भारत की सबसे लंबी नदी है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which state has the largest forest cover?",
      hi: "किस राज्य में सबसे अधिक वन क्षेत्र है?"
    },
    options: {
      en: ["Madhya Pradesh", "Maharashtra", "Odisha", "Chhattisgarh"],
      hi: ["मध्य प्रदेश", "महाराष्ट्र", "ओडिशा", "छत्तीसगढ़"]
    },
    correctAnswer: "Madhya Pradesh",
    explanation: {
      en: "Madhya Pradesh has the largest forest area in India.",
      hi: "भारत में सबसे अधिक वन क्षेत्र मध्य प्रदेश में है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which mountain range separates Northern and Southern India?",
      hi: "कौन सी पर्वतमाला उत्तर और दक्षिण भारत को विभाजित करती है?"
    },
    options: {
      en: ["Himalayas", "Vindhyas", "Aravalli", "Satpura"],
      hi: ["हिमालय", "विंध्याचल", "अरावली", "सतपुड़ा"]
    },
    correctAnswer: "Vindhyas",
    explanation: {
      en: "Vindhyas form a natural divide between North and South India.",
      hi: "विंध्याचल उत्तर और दक्षिण भारत के बीच एक प्राकृतिक विभाजन बनाते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is the southernmost point of India?",
      hi: "भारत का सबसे दक्षिणी बिंदु कौन सा है?"
    },
    options: {
      en: ["Kanyakumari", "Indira Point", "Lakshadweep", "Nicobar"],
      hi: ["कन्याकुमारी", "इंदिरा पॉइंट", "लक्षद्वीप", "निकोबार"]
    },
    correctAnswer: "Indira Point",
    explanation: {
      en: "Indira Point is the southernmost tip of India, located in Andaman and Nicobar Islands.",
      hi: "इंदिरा पॉइंट भारत का सबसे दक्षिणी बिंदु है, जो अंडमान और निकोबार द्वीप समूह में स्थित है।"
    }
  }
];

export default geography;
