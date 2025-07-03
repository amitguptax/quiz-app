const questions = [
  {
    question: {
      en: "If the clock shows 3:15, where is the minute hand pointing?",
      hi: "यदि घड़ी में 3:15 हो, तो मिनट की सुई किस पर होगी?"
    },
    options: ["3", "6", "9", "12"],
    correct: { en: "3", hi: "3" },
    explanation: {
      en: "15 minutes = 3 on the clock (each number = 5 minutes).",
      hi: "15 मिनट = घड़ी में 3 (प्रत्येक अंक = 5 मिनट)।"
    }
  },
  {
    question: {
      en: "How many minutes are there in 2 hours?",
      hi: "2 घंटे में कितने मिनट होते हैं?"
    },
    options: ["60", "100", "90", "120"],
    correct: { en: "120", hi: "120" },
    explanation: {
      en: "1 hour = 60 minutes, so 2 hours = 2 × 60 = 120 minutes.",
      hi: "1 घंटा = 60 मिनट, तो 2 घंटे = 2 × 60 = 120 मिनट।"
    }
  },
  {
    question: {
      en: "If a movie starts at 2:30 PM and ends at 4:00 PM, how long is it?",
      hi: "अगर फ़िल्म 2:30 बजे शुरू होकर 4:00 बजे खत्म हो, तो इसकी अवधि क्या है?"
    },
    options: ["1 hour 30 minutes", "2 hours", "90 minutes", "Both A and C"],
    correct: { en: "Both A and C", hi: "A और C दोनों" },
    explanation: {
      en: "From 2:30 to 4:00 is 1 hour and 30 minutes = 90 minutes.",
      hi: "2:30 से 4:00 = 1 घंटा 30 मिनट = 90 मिनट।"
    }
  },
  {
    question: {
      en: "What time will it be 45 minutes after 10:15?",
      hi: "10:15 के 45 मिनट बाद समय क्या होगा?"
    },
    options: ["11:00", "11:15", "10:45", "11:30"],
    correct: { en: "11:00", hi: "11:00" },
    explanation: {
      en: "10:15 + 45 mins = 11:00",
      hi: "10:15 + 45 मिनट = 11:00"
    }
  },
  {
    question: {
      en: "Which hand of the clock shows seconds?",
      hi: "घड़ी की कौन सी सुई सेकंड दिखाती है?"
    },
    options: ["Short", "Long", "Thin and fast", "None"],
    correct: { en: "Thin and fast", hi: "पतली और तेज़" },
    explanation: {
      en: "The thin, fast-moving hand represents seconds.",
      hi: "घड़ी की पतली और तेज़ सुई सेकंड दर्शाती है।"
    }
  },
  {
    question: {
      en: "How many hours are there in a day?",
      hi: "एक दिन में कितने घंटे होते हैं?"
    },
    options: ["24", "12", "48", "60"],
    correct: { en: "24", hi: "24" },
    explanation: {
      en: "A full day has 24 hours: 12 AM to 11:59 PM.",
      hi: "एक दिन में 24 घंटे होते हैं: 12 AM से 11:59 PM।"
    }
  },
  {
    question: {
      en: "A train arrives at 5:45 and departs at 6:15. How long does it stop?",
      hi: "एक ट्रेन 5:45 पर आती है और 6:15 पर जाती है। यह कितनी देर रुकी?"
    },
    options: ["30 minutes", "1 hour", "45 minutes", "15 minutes"],
    correct: { en: "30 minutes", hi: "30 मिनट" },
    explanation: {
      en: "6:15 − 5:45 = 30 minutes",
      hi: "6:15 − 5:45 = 30 मिनट"
    }
  },
  {
    question: {
      en: "How many seconds are there in 5 minutes?",
      hi: "5 मिनट में कितने सेकंड होते हैं?"
    },
    options: ["300", "60", "180", "500"],
    correct: { en: "300", hi: "300" },
    explanation: {
      en: "1 minute = 60 seconds → 5 × 60 = 300 seconds",
      hi: "1 मिनट = 60 सेकंड → 5 × 60 = 300 सेकंड"
    }
  },
  {
    question: {
      en: "Which time is in the afternoon?",
      hi: "इनमें से कौन सा समय दोपहर का है?"
    },
    options: ["2:00 PM", "9:00 AM", "11:00 AM", "7:00 AM"],
    correct: { en: "2:00 PM", hi: "2:00 PM" },
    explanation: {
      en: "PM times after 12:00 noon are afternoon.",
      hi: "12:00 दोपहर के बाद के समय PM कहलाते हैं।"
    }
  },
  {
    question: {
      en: "Which of these shows a quarter past 9?",
      hi: "इनमें से कौन सा समय 9 बजकर 15 मिनट दिखाता है?"
    },
    options: ["9:15", "9:30", "8:45", "9:45"],
    correct: { en: "9:15", hi: "9:15" },
    explanation: {
      en: "Quarter past means 15 minutes after the hour.",
      hi: "Quarter past का मतलब है घंटे के बाद 15 मिनट।"
    }
  }
];

export default { questions };
