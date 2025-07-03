const clock24hr = {
  questions: [
    {
      question: {
        en: "What is 2:00 PM in 24-hour clock format?",
        hi: "24-घंटे प्रारूप में 2:00 PM क्या होगा?"
      },
      options: [
        { en: "14:00", hi: "14:00" },
        { en: "12:00", hi: "12:00" },
        { en: "13:00", hi: "13:00" },
        { en: "15:00", hi: "15:00" }
      ],
      correct: { en: "14:00", hi: "14:00" },
      explanation: {
        en: "Add 12 to PM hours: 2 + 12 = 14 → 14:00",
        hi: "PM के समय में 12 जोड़ें: 2 + 12 = 14 → 14:00"
      }
    },
    {
      question: {
        en: "Convert 11:30 AM to 24-hour format.",
        hi: "11:30 AM को 24-घंटे प्रारूप में बदलें।"
      },
      options: [
        { en: "11:30", hi: "11:30" },
        { en: "23:30", hi: "23:30" },
        { en: "12:30", hi: "12:30" },
        { en: "13:30", hi: "13:30" }
      ],
      correct: { en: "11:30", hi: "11:30" },
      explanation: {
        en: "AM times remain same in 24-hour format.",
        hi: "AM समय 24-घंटे प्रारूप में वैसा ही रहता है।"
      }
    },
    {
      question: {
        en: "What is 8:45 PM in 24-hour time?",
        hi: "8:45 PM को 24-घंटे प्रारूप में क्या लिखेंगे?"
      },
      options: [
        { en: "20:45", hi: "20:45" },
        { en: "18:45", hi: "18:45" },
        { en: "19:45", hi: "19:45" },
        { en: "21:45", hi: "21:45" }
      ],
      correct: { en: "20:45", hi: "20:45" },
      explanation: {
        en: "8 PM + 12 = 20 → 20:45",
        hi: "8 PM + 12 = 20 → 20:45"
      }
    },
    {
      question: {
        en: "A train departs at 6:15 PM. What is the 24-hour time?",
        hi: "एक ट्रेन 6:15 PM पर रवाना होती है। 24-घंटे समय क्या है?"
      },
      options: [
        { en: "18:15", hi: "18:15" },
        { en: "16:15", hi: "16:15" },
        { en: "17:15", hi: "17:15" },
        { en: "19:15", hi: "19:15" }
      ],
      correct: { en: "18:15", hi: "18:15" },
      explanation: {
        en: "6 PM + 12 = 18 → 18:15",
        hi: "6 PM + 12 = 18 → 18:15"
      }
    },
    {
      question: {
        en: "If school ends at 3:40 PM, what is the time in 24-hour format?",
        hi: "अगर स्कूल 3:40 PM पर खत्म होता है, तो 24-घंटे प्रारूप में समय क्या होगा?"
      },
      options: [
        { en: "15:40", hi: "15:40" },
        { en: "14:40", hi: "14:40" },
        { en: "16:40", hi: "16:40" },
        { en: "13:40", hi: "13:40" }
      ],
      correct: { en: "15:40", hi: "15:40" },
      explanation: {
        en: "3 PM + 12 = 15 → 15:40",
        hi: "3 PM + 12 = 15 → 15:40"
      }
    },
    {
      question: {
        en: "Convert 00:00 in 24-hour format to 12-hour format.",
        hi: "24-घंटे प्रारूप में 00:00 को 12-घंटे प्रारूप में बदलें।"
      },
      options: [
        { en: "12:00 AM", hi: "12:00 AM" },
        { en: "12:00 PM", hi: "12:00 PM" },
        { en: "1:00 AM", hi: "1:00 AM" },
        { en: "1:00 PM", hi: "1:00 PM" }
      ],
      correct: { en: "12:00 AM", hi: "12:00 AM" },
      explanation: {
        en: "00:00 in 24-hour is midnight → 12:00 AM",
        hi: "24-घंटे प्रारूप में 00:00 = मध्यरात्रि = 12:00 AM"
      }
    },
    {
      question: {
        en: "What is 12:00 PM in 24-hour format?",
        hi: "12:00 PM को 24-घंटे प्रारूप में कैसे लिखेंगे?"
      },
      options: [
        { en: "12:00", hi: "12:00" },
        { en: "00:00", hi: "00:00" },
        { en: "24:00", hi: "24:00" },
        { en: "13:00", hi: "13:00" }
      ],
      correct: { en: "12:00", hi: "12:00" },
      explanation: {
        en: "12:00 PM is noon = 12:00 in 24-hour time",
        hi: "12:00 PM दोपहर है = 24-घंटे समय में 12:00"
      }
    },
    {
      question: {
        en: "Convert 07:20 PM to 24-hour format.",
        hi: "07:20 PM को 24-घंटे प्रारूप में बदलें।"
      },
      options: [
        { en: "19:20", hi: "19:20" },
        { en: "17:20", hi: "17:20" },
        { en: "18:20", hi: "18:20" },
        { en: "20:20", hi: "20:20" }
      ],
      correct: { en: "19:20", hi: "19:20" },
      explanation: {
        en: "7 PM + 12 = 19 → 19:20",
        hi: "7 PM + 12 = 19 → 19:20"
      }
    },
    {
      question: {
        en: "What time is 23:00 in 12-hour clock?",
        hi: "23:00 को 12-घंटे घड़ी में क्या कहेंगे?"
      },
      options: [
        { en: "11:00 PM", hi: "11:00 PM" },
        { en: "12:00 PM", hi: "12:00 PM" },
        { en: "10:00 PM", hi: "10:00 PM" },
        { en: "11:00 AM", hi: "11:00 AM" }
      ],
      correct: { en: "11:00 PM", hi: "11:00 PM" },
      explanation: {
        en: "23 – 12 = 11 → 11:00 PM",
        hi: "23 – 12 = 11 → 11:00 PM"
      }
    },
    {
      question: {
        en: "What is the 24-hour format of 9:10 AM?",
        hi: "9:10 AM का 24-घंटे प्रारूप क्या है?"
      },
      options: [
        { en: "09:10", hi: "09:10" },
        { en: "19:10", hi: "19:10" },
        { en: "21:10", hi: "21:10" },
        { en: "10:10", hi: "10:10" }
      ],
      correct: { en: "09:10", hi: "09:10" },
      explanation: {
        en: "AM time remains same → 09:10",
        hi: "AM समय वैसा ही रहता है → 09:10"
      }
    }
  ]
};

export default clock24hr;
