const questions = [
  {
    question: {
      en: "When do we usually eat breakfast?",
      hi: "हम आमतौर पर नाश्ता कब करते हैं?"
    },
    options: [
      { en: "8:00 AM", hi: "सुबह 8:00" },
      { en: "8:00 PM", hi: "रात 8:00" },
      { en: "12:00 PM", hi: "दोपहर 12:00" },
      { en: "6:00 PM", hi: "शाम 6:00" }
    ],
    correct: {
      en: "8:00 AM",
      hi: "सुबह 8:00"
    },
    explanation: {
      en: "We eat breakfast in the morning, which is AM time.",
      hi: "नाश्ता हम सुबह करते हैं, जो AM समय होता है।"
    }
  },
  {
    question: {
      en: "When do we usually go to sleep at night?",
      hi: "हम रात को आमतौर पर कब सोते हैं?"
    },
    options: [
      { en: "9:00 AM", hi: "सुबह 9:00" },
      { en: "10:00 PM", hi: "रात 10:00" },
      { en: "1:00 PM", hi: "दोपहर 1:00" },
      { en: "6:00 AM", hi: "सुबह 6:00" }
    ],
    correct: {
      en: "10:00 PM",
      hi: "रात 10:00"
    },
    explanation: {
      en: "We sleep at night, which is PM time.",
      hi: "हम रात को सोते हैं, जो PM समय होता है।"
    }
  },
  {
    question: {
      en: "What time is school assembly usually held?",
      hi: "स्कूल की प्रार्थना सभा आमतौर पर किस समय होती है?"
    },
    options: [
      { en: "8:30 AM", hi: "सुबह 8:30" },
      { en: "3:00 PM", hi: "दोपहर 3:00" },
      { en: "7:00 PM", hi: "शाम 7:00" },
      { en: "12:00 AM", hi: "रात 12:00" }
    ],
    correct: {
      en: "8:30 AM",
      hi: "सुबह 8:30"
    },
    explanation: {
      en: "School assembly happens in the morning, hence AM.",
      hi: "प्रार्थना सभा सुबह होती है, इसलिए AM।"
    }
  },
  {
    question: {
      en: "What time do we usually have dinner?",
      hi: "हम आमतौर पर रात का खाना कब खाते हैं?"
    },
    options: [
      { en: "1:00 PM", hi: "दोपहर 1:00" },
      { en: "8:00 PM", hi: "रात 8:00" },
      { en: "8:00 AM", hi: "सुबह 8:00" },
      { en: "11:00 AM", hi: "सुबह 11:00" }
    ],
    correct: {
      en: "8:00 PM",
      hi: "रात 8:00"
    },
    explanation: {
      en: "Dinner is usually eaten at night, which is PM.",
      hi: "रात का खाना PM समय में होता है।"
    }
  },
  {
    question: {
      en: "If the clock shows 2:00 PM, is it morning or afternoon?",
      hi: "अगर घड़ी 2:00 PM दिखा रही हो, तो वह सुबह है या दोपहर?"
    },
    options: [
      { en: "Morning", hi: "सुबह" },
      { en: "Afternoon", hi: "दोपहर" },
      { en: "Night", hi: "रात" },
      { en: "Midnight", hi: "आधी रात" }
    ],
    correct: {
      en: "Afternoon",
      hi: "दोपहर"
    },
    explanation: {
      en: "PM means post noon (after 12), so it's afternoon.",
      hi: "PM का मतलब दोपहर के बाद, यानी दोपहर।"
    }
  },
  {
    question: {
      en: "What is the correct time to say 'Good Morning'?",
      hi: "‘सुप्रभात’ कहने का सही समय क्या है?"
    },
    options: [
      { en: "10:00 AM", hi: "सुबह 10:00" },
      { en: "5:00 PM", hi: "शाम 5:00" },
      { en: "9:00 PM", hi: "रात 9:00" },
      { en: "1:00 AM", hi: "रात 1:00" }
    ],
    correct: {
      en: "10:00 AM",
      hi: "सुबह 10:00"
    },
    explanation: {
      en: "We say 'Good Morning' till noon, which is AM time.",
      hi: "हम दोपहर तक 'सुप्रभात' कहते हैं, जो AM समय है।"
    }
  },
  {
    question: {
      en: "Which one is PM time?",
      hi: "निम्न में से कौन PM समय है?"
    },
    options: [
      { en: "7:00 AM", hi: "सुबह 7:00" },
      { en: "12:00 PM", hi: "दोपहर 12:00" },
      { en: "3:00 AM", hi: "रात 3:00" },
      { en: "6:00 AM", hi: "सुबह 6:00" }
    ],
    correct: {
      en: "12:00 PM",
      hi: "दोपहर 12:00"
    },
    explanation: {
      en: "12:00 PM is noon, starting PM time.",
      hi: "दोपहर 12:00 से PM शुरू होता है।"
    }
  },
  {
    question: {
      en: "When do we celebrate New Year?",
      hi: "हम नववर्ष कब मनाते हैं?"
    },
    options: [
      { en: "12:00 AM", hi: "रात 12:00" },
      { en: "12:00 PM", hi: "दोपहर 12:00" },
      { en: "6:00 AM", hi: "सुबह 6:00" },
      { en: "9:00 PM", hi: "रात 9:00" }
    ],
    correct: {
      en: "12:00 AM",
      hi: "रात 12:00"
    },
    explanation: {
      en: "New Year begins at midnight, 12:00 AM.",
      hi: "नववर्ष रात 12:00 (AM) से शुरू होता है।"
    }
  },
  {
    question: {
      en: "What does AM mean?",
      hi: "AM का क्या अर्थ है?"
    },
    options: [
      { en: "After Midnight", hi: "मध्यरात्रि के बाद" },
      { en: "After Morning", hi: "सुबह के बाद" },
      { en: "Ante Meridiem", hi: "Ante Meridiem" },
      { en: "After Meal", hi: "भोजन के बाद" }
    ],
    correct: {
      en: "Ante Meridiem",
      hi: "Ante Meridiem"
    },
    explanation: {
      en: "AM = Ante Meridiem (before noon in Latin).",
      hi: "AM का मतलब Ante Meridiem होता है (दोपहर से पहले)।"
    }
  },
  {
    question: {
      en: "What does PM stand for?",
      hi: "PM का पूरा रूप क्या है?"
    },
    options: [
      { en: "Post Meridiem", hi: "Post Meridiem" },
      { en: "Past Morning", hi: "सुबह के बाद" },
      { en: "Post Midnight", hi: "आधी रात के बाद" },
      { en: "Perfect Morning", hi: "बेहतर सुबह" }
    ],
    correct: {
      en: "Post Meridiem",
      hi: "Post Meridiem"
    },
    explanation: {
      en: "PM = Post Meridiem (after noon in Latin).",
      hi: "PM का मतलब Post Meridiem होता है (दोपहर के बाद)।"
    }
  }
];

export default { questions };
