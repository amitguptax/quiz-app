const questions = [
  {
    question: {
      en: "What time is shown on the digital clock: 07:30?",
      hi: "डिजिटल घड़ी 07:30 पर क्या समय दिखा रही है?"
    },
    options: [
      { en: "7:30 AM", hi: "सुबह 7:30" },
      { en: "7:30 PM", hi: "शाम 7:30" },
      { en: "3:30 PM", hi: "शाम 3:30" },
      { en: "6:30 AM", hi: "सुबह 6:30" }
    ],
    correct: {
      en: "7:30 AM",
      hi: "सुबह 7:30"
    },
    explanation: {
      en: "07:30 means 7:30 in the morning.",
      hi: "07:30 का मतलब है सुबह 7:30।"
    }
  },
  {
    question: {
      en: "Which of these is night time?",
      hi: "इनमें से रात का समय कौन-सा है?"
    },
    options: [
      { en: "08:00", hi: "08:00" },
      { en: "13:00", hi: "13:00" },
      { en: "22:00", hi: "22:00" },
      { en: "11:00", hi: "11:00" }
    ],
    correct: {
      en: "22:00",
      hi: "22:00"
    },
    explanation: {
      en: "22:00 means 10 PM, which is night.",
      hi: "22:00 का अर्थ रात के 10 बजे है।"
    }
  },
  {
    question: {
      en: "What is 15:00 in 12-hour format?",
      hi: "12-घंटे के प्रारूप में 15:00 क्या होता है?"
    },
    options: [
      { en: "3:00 AM", hi: "सुबह 3:00" },
      { en: "3:00 PM", hi: "शाम 3:00" },
      { en: "5:00 PM", hi: "शाम 5:00" },
      { en: "12:00 PM", hi: "दोपहर 12:00" }
    ],
    correct: {
      en: "3:00 PM",
      hi: "शाम 3:00"
    },
    explanation: {
      en: "15:00 in 24-hour format is 3:00 PM in 12-hour format.",
      hi: "24-घंटे की घड़ी में 15:00 = 12 + 3 = शाम 3:00।"
    }
  },
  {
    question: {
      en: "Which time is shown as 00:00?",
      hi: "00:00 किस समय को दर्शाता है?"
    },
    options: [
      { en: "Midnight", hi: "मध्यरात्रि" },
      { en: "Noon", hi: "दोपहर" },
      { en: "Morning", hi: "सुबह" },
      { en: "Evening", hi: "शाम" }
    ],
    correct: {
      en: "Midnight",
      hi: "मध्यरात्रि"
    },
    explanation: {
      en: "00:00 is 12:00 AM, i.e., midnight.",
      hi: "00:00 का अर्थ है रात के 12:00 बजे, यानी मध्यरात्रि।"
    }
  },
  {
    question: {
      en: "How is 12:00 shown in digital format?",
      hi: "डिजिटल प्रारूप में 12:00 को कैसे दिखाया जाता है?"
    },
    options: [
      { en: "12:00", hi: "12:00" },
      { en: "00:00", hi: "00:00" },
      { en: "24:00", hi: "24:00" },
      { en: "11:59", hi: "11:59" }
    ],
    correct: {
      en: "12:00",
      hi: "12:00"
    },
    explanation: {
      en: "12:00 in digital format means noon or midnight depending on AM/PM.",
      hi: "12:00 डिजिटल घड़ी में दोपहर या मध्यरात्रि हो सकता है (AM/PM पर निर्भर करता है)।"
    }
  },
  {
    question: {
      en: "Which clock shows 6:45 in digital format?",
      hi: "डिजिटल घड़ी में 6:45 कौन दिखाता है?"
    },
    options: [
      { en: "06:45", hi: "06:45" },
      { en: "16:45", hi: "16:45" },
      { en: "04:45", hi: "04:45" },
      { en: "18:45", hi: "18:45" }
    ],
    correct: {
      en: "06:45",
      hi: "06:45"
    },
    explanation: {
      en: "06:45 is 6:45 AM in digital clock.",
      hi: "06:45 डिजिटल घड़ी में सुबह 6:45 दर्शाता है।"
    }
  },
  {
    question: {
      en: "What does 09:15 mean?",
      hi: "09:15 का क्या मतलब है?"
    },
    options: [
      { en: "9:15 PM", hi: "रात 9:15" },
      { en: "9:15 AM", hi: "सुबह 9:15" },
      { en: "7:15 AM", hi: "सुबह 7:15" },
      { en: "10:15 AM", hi: "सुबह 10:15" }
    ],
    correct: {
      en: "9:15 AM",
      hi: "सुबह 9:15"
    },
    explanation: {
      en: "09:15 in digital format is 9:15 AM.",
      hi: "डिजिटल प्रारूप में 09:15 का अर्थ है सुबह 9:15।"
    }
  },
  {
    question: {
      en: "Which digital time comes just before 08:00?",
      hi: "08:00 से ठीक पहले कौन-सा डिजिटल समय आता है?"
    },
    options: [
      { en: "07:59", hi: "07:59" },
      { en: "08:01", hi: "08:01" },
      { en: "08:00", hi: "08:00" },
      { en: "07:30", hi: "07:30" }
    ],
    correct: {
      en: "07:59",
      hi: "07:59"
    },
    explanation: {
      en: "07:59 is one minute before 08:00.",
      hi: "07:59, 08:00 से ठीक एक मिनट पहले होता है।"
    }
  },
  {
    question: {
      en: "What is the meaning of 17:30?",
      hi: "17:30 का अर्थ क्या है?"
    },
    options: [
      { en: "5:30 AM", hi: "सुबह 5:30" },
      { en: "7:30 PM", hi: "शाम 7:30" },
      { en: "5:30 PM", hi: "शाम 5:30" },
      { en: "6:30 PM", hi: "शाम 6:30" }
    ],
    correct: {
      en: "5:30 PM",
      hi: "शाम 5:30"
    },
    explanation: {
      en: "17:30 means 5:30 PM in 24-hour format.",
      hi: "17:30 का मतलब 24 घंटे की घड़ी में शाम 5:30 होता है।"
    }
  },
  {
    question: {
      en: "Which of these shows noon time?",
      hi: "इनमें से कौन दोपहर का समय दर्शाता है?"
    },
    options: [
      { en: "12:00", hi: "12:00" },
      { en: "00:00", hi: "00:00" },
      { en: "06:00", hi: "06:00" },
      { en: "18:00", hi: "18:00" }
    ],
    correct: {
      en: "12:00",
      hi: "12:00"
    },
    explanation: {
      en: "12:00 PM is noon time.",
      hi: "12:00 दोपहर का समय होता है।"
    }
  }
];

export default { questions };
