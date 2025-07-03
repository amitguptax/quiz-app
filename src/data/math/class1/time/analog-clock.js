const questions = [
  {
    question: {
      en: "If the hour hand is on 3 and the minute hand is on 12, what time is it?",
      hi: "अगर घंटे की सुई 3 पर है और मिनट की सुई 12 पर है, तो समय क्या है?"
    },
    options: [
      { en: "3:00", hi: "3:00" },
      { en: "12:15", hi: "12:15" },
      { en: "6:30", hi: "6:30" },
      { en: "9:45", hi: "9:45" }
    ],
    correct: {
      en: "3:00",
      hi: "3:00"
    },
    explanation: {
      en: "When minute hand is on 12, it is the exact hour.",
      hi: "जब मिनट की सुई 12 पर होती है, तो वह पूरा घंटा होता है।"
    }
  },
  {
    question: {
      en: "When the hour hand is on 6 and minute hand on 6, what is the time?",
      hi: "अगर घंटे की सुई 6 पर और मिनट की सुई 6 पर है, तो समय क्या है?"
    },
    options: [
      { en: "6:00", hi: "6:00" },
      { en: "6:30", hi: "6:30" },
      { en: "6:15", hi: "6:15" },
      { en: "6:45", hi: "6:45" }
    ],
    correct: {
      en: "6:30",
      hi: "6:30"
    },
    explanation: {
      en: "Minute hand on 6 means 30 minutes past the hour.",
      hi: "मिनट की सुई 6 पर हो तो 30 मिनट होते हैं।"
    }
  },
  {
    question: {
      en: "If the clock shows hour hand between 7 and 8, and minute hand on 6, what is the time?",
      hi: "घड़ी में घंटे की सुई 7 और 8 के बीच और मिनट की सुई 6 पर है, तो समय क्या है?"
    },
    options: [
      { en: "7:30", hi: "7:30" },
      { en: "6:30", hi: "6:30" },
      { en: "8:30", hi: "8:30" },
      { en: "7:00", hi: "7:00" }
    ],
    correct: {
      en: "7:30",
      hi: "7:30"
    },
    explanation: {
      en: "Hour hand between 7 and 8 means it's after 7, and 6 means 30 minutes.",
      hi: "घंटे की सुई 7 और 8 के बीच है और मिनट की सुई 6 पर = 7:30।"
    }
  },
  {
    question: {
      en: "If the minute hand is on 3, how many minutes have passed?",
      hi: "अगर मिनट की सुई 3 पर है, तो कितने मिनट हुए?"
    },
    options: [
      { en: "3 minutes", hi: "3 मिनट" },
      { en: "15 minutes", hi: "15 मिनट" },
      { en: "30 minutes", hi: "30 मिनट" },
      { en: "45 minutes", hi: "45 मिनट" }
    ],
    correct: {
      en: "15 minutes",
      hi: "15 मिनट"
    },
    explanation: {
      en: "Each number on the clock represents 5 minutes. 3 = 15 minutes.",
      hi: "घड़ी में एक अंक = 5 मिनट, तो 3 × 5 = 15 मिनट।"
    }
  },
  {
    question: {
      en: "When both hands are on 12, what is the time?",
      hi: "जब दोनों सुईयाँ 12 पर हों, तो समय क्या होता है?"
    },
    options: [
      { en: "6:00", hi: "6:00" },
      { en: "12:00", hi: "12:00" },
      { en: "3:00", hi: "3:00" },
      { en: "9:00", hi: "9:00" }
    ],
    correct: {
      en: "12:00",
      hi: "12:00"
    },
    explanation: {
      en: "Both hands at 12 mean it's either midnight or noon.",
      hi: "दोनों सुई 12 पर हों, तो 12:00 बजे होते हैं।"
    }
  },
  {
    question: {
      en: "If the minute hand is on 9, how many minutes is that?",
      hi: "अगर मिनट की सुई 9 पर है, तो वह कितने मिनट होते हैं?"
    },
    options: [
      { en: "45 minutes", hi: "45 मिनट" },
      { en: "15 minutes", hi: "15 मिनट" },
      { en: "30 minutes", hi: "30 मिनट" },
      { en: "9 minutes", hi: "9 मिनट" }
    ],
    correct: {
      en: "45 minutes",
      hi: "45 मिनट"
    },
    explanation: {
      en: "9 on the clock = 9 × 5 = 45 minutes.",
      hi: "9 × 5 = 45 मिनट।"
    }
  },
  {
    question: {
      en: "If the hour hand is on 10 and the minute hand is on 12, what is the time?",
      hi: "अगर घंटे की सुई 10 पर और मिनट की सुई 12 पर है, तो समय क्या है?"
    },
    options: [
      { en: "10:00", hi: "10:00" },
      { en: "12:10", hi: "12:10" },
      { en: "11:00", hi: "11:00" },
      { en: "10:30", hi: "10:30" }
    ],
    correct: {
      en: "10:00",
      hi: "10:00"
    },
    explanation: {
      en: "Minute on 12 = o’clock. Hour on 10 = 10 o’clock.",
      hi: "मिनट की सुई 12 पर हो तो पूरा घंटा।"
    }
  },
  {
    question: {
      en: "What time is it if hour hand is on 9 and minute hand is on 3?",
      hi: "अगर घंटे की सुई 9 पर और मिनट की सुई 3 पर हो, तो समय क्या है?"
    },
    options: [
      { en: "9:15", hi: "9:15" },
      { en: "3:45", hi: "3:45" },
      { en: "9:00", hi: "9:00" },
      { en: "3:00", hi: "3:00" }
    ],
    correct: {
      en: "9:15",
      hi: "9:15"
    },
    explanation: {
      en: "Minute hand on 3 = 15 minutes. Hour hand on 9 = 9:15.",
      hi: "मिनट सुई 3 पर = 15 मिनट, घंटे की सुई 9 = 9:15।"
    }
  },
  {
    question: {
      en: "Which hand moves faster on the analog clock?",
      hi: "एनालॉग घड़ी में कौन-सी सुई तेजी से चलती है?"
    },
    options: [
      { en: "Hour hand", hi: "घंटे की सुई" },
      { en: "Minute hand", hi: "मिनट की सुई" },
      { en: "Second hand", hi: "सेकंड की सुई" },
      { en: "None", hi: "कोई नहीं" }
    ],
    correct: {
      en: "Second hand",
      hi: "सेकंड की सुई"
    },
    explanation: {
      en: "Second hand completes one round every 60 seconds.",
      hi: "सेकंड की सुई हर 60 सेकंड में एक पूरा चक्कर लगाती है।"
    }
  },
  {
    question: {
      en: "How many times does minute hand complete full circle in 1 hour?",
      hi: "1 घंटे में मिनट की सुई कितनी बार पूरा चक्कर लगाती है?"
    },
    options: [
      { en: "1", hi: "1" },
      { en: "2", hi: "2" },
      { en: "3", hi: "3" },
      { en: "12", hi: "12" }
    ],
    correct: {
      en: "1",
      hi: "1"
    },
    explanation: {
      en: "Minute hand completes 1 full circle every hour.",
      hi: "मिनट की सुई हर 1 घंटे में एक चक्कर लगाती है।"
    }
  }
];

export default { questions };
