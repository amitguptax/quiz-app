const polity = [
  {
    id: 1,
    question: {
      en: "Who is known as the Father of the Indian Constitution?",
      hi: "भारतीय संविधान के जनक किसे कहा जाता है?"
    },
    options: {
      en: ["Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel", "Rajendra Prasad"],
      hi: ["जवाहरलाल नेहरू", "भीमराव अंबेडकर", "सरदार पटेल", "राजेन्द्र प्रसाद"]
    },
    correctAnswer: "B. R. Ambedkar",
    explanation: {
      en: "Dr. B. R. Ambedkar is regarded as the principal architect of the Indian Constitution.",
      hi: "डॉ. भीमराव अंबेडकर को भारतीय संविधान का प्रमुख वास्तुकार माना जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which Article of the Constitution deals with the Right to Equality?",
      hi: "संविधान का कौन सा अनुच्छेद समानता के अधिकार से संबंधित है?"
    },
    options: {
      en: ["Article 14", "Article 19", "Article 21", "Article 25"],
      hi: ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 25"]
    },
    correctAnswer: "Article 14",
    explanation: {
      en: "Article 14 guarantees equality before the law and equal protection of the laws.",
      hi: "अनुच्छेद 14 कानून के समक्ष समानता और कानूनों के समान संरक्षण की गारंटी देता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "How many members are nominated by the President to the Rajya Sabha?",
      hi: "राज्यसभा में राष्ट्रपति द्वारा कितने सदस्य नामित किए जाते हैं?"
    },
    options: {
      en: ["10", "12", "14", "15"],
      hi: ["10", "12", "14", "15"]
    },
    correctAnswer: "12",
    explanation: {
      en: "The President nominates 12 members to the Rajya Sabha from fields like arts, literature, science, and social service.",
      hi: "राष्ट्रपति कला, साहित्य, विज्ञान और समाज सेवा के क्षेत्रों से राज्यसभा में 12 सदस्यों को नामित करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which body conducts elections in India?",
      hi: "भारत में चुनाव कौन कराता है?"
    },
    options: {
      en: ["Supreme Court", "Election Commission", "Parliament", "President"],
      hi: ["सुप्रीम कोर्ट", "चुनाव आयोग", "संसद", "राष्ट्रपति"]
    },
    correctAnswer: "Election Commission",
    explanation: {
      en: "The Election Commission of India conducts all elections in the country.",
      hi: "भारत में सभी चुनाव भारतीय चुनाव आयोग कराता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Who was the first President of India?",
      hi: "भारत के पहले राष्ट्रपति कौन थे?"
    },
    options: {
      en: ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "Jawaharlal Nehru"],
      hi: ["राजेन्द्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "जवाहरलाल नेहरू"]
    },
    correctAnswer: "Rajendra Prasad",
    explanation: {
      en: "Dr. Rajendra Prasad served as the first President of independent India.",
      hi: "डॉ. राजेन्द्र प्रसाद स्वतंत्र भारत के पहले राष्ट्रपति थे।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which part of the Constitution deals with Fundamental Rights?",
      hi: "संविधान का कौन सा भाग मौलिक अधिकारों से संबंधित है?"
    },
    options: {
      en: ["Part I", "Part II", "Part III", "Part IV"],
      hi: ["भाग I", "भाग II", "भाग III", "भाग IV"]
    },
    correctAnswer: "Part III",
    explanation: {
      en: "Part III of the Indian Constitution contains Fundamental Rights from Article 12 to 35.",
      hi: "भारतीय संविधान का भाग III अनुच्छेद 12 से 35 तक मौलिक अधिकारों से संबंधित है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Who appoints the Chief Justice of India?",
      hi: "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?"
    },
    options: {
      en: ["Prime Minister", "President", "Lok Sabha", "Supreme Court"],
      hi: ["प्रधानमंत्री", "राष्ट्रपति", "लोकसभा", "सुप्रीम कोर्ट"]
    },
    correctAnswer: "President",
    explanation: {
      en: "The Chief Justice of India is appointed by the President of India.",
      hi: "भारत के मुख्य न्यायाधीश की नियुक्ति राष्ट्रपति द्वारा की जाती है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the tenure of the Lok Sabha?",
      hi: "लोकसभा का कार्यकाल कितने वर्षों का होता है?"
    },
    options: {
      en: ["3 years", "4 years", "5 years", "6 years"],
      hi: ["3 वर्ष", "4 वर्ष", "5 वर्ष", "6 वर्ष"]
    },
    correctAnswer: "5 years",
    explanation: {
      en: "The tenure of Lok Sabha is 5 years from the date of its first meeting.",
      hi: "लोकसभा का कार्यकाल पहली बैठक की तारीख से 5 वर्ष होता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Who can dissolve the Lok Sabha?",
      hi: "लोकसभा को कौन भंग कर सकता है?"
    },
    options: {
      en: ["Prime Minister", "President", "Speaker", "Chief Justice"],
      hi: ["प्रधानमंत्री", "राष्ट्रपति", "स्पीकर", "मुख्य न्यायाधीश"]
    },
    correctAnswer: "President",
    explanation: {
      en: "The President can dissolve the Lok Sabha on the advice of the Prime Minister.",
      hi: "प्रधानमंत्री की सलाह पर राष्ट्रपति लोकसभा को भंग कर सकते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which schedule of the Constitution contains the anti-defection law?",
      hi: "संविधान की कौन सी अनुसूची दल-बदल कानून से संबंधित है?"
    },
    options: {
      en: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"],
      hi: ["आठवीं अनुसूची", "नौवीं अनुसूची", "दसवीं अनुसूची", "ग्यारहवीं अनुसूची"]
    },
    correctAnswer: "10th Schedule",
    explanation: {
      en: "The 10th Schedule of the Constitution contains provisions for disqualification on the grounds of defection.",
      hi: "संविधान की दसवीं अनुसूची में दल-बदल के आधार पर अयोग्यता की व्यवस्था है।"
    }
  }
];

export default polity;
