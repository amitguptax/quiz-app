const timeIntervals = {
  label: {
    en: "Calculate time intervals",
    hi: "समय अंतराल निकालें"
  },
  questions: [
    {
      question: {
        en: "If a movie starts at 3:00 PM and ends at 5:00 PM, how long is it?",
        hi: "अगर एक फ़िल्म 3:00 PM पर शुरू होती है और 5:00 PM पर समाप्त होती है, तो यह कितनी लंबी है?"
      },
      options: [
        { en: "1 hour", hi: "1 घंटा" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "3 hours", hi: "3 घंटे" },
        { en: "4 hours", hi: "4 घंटे" }
      ],
      correct: { en: "2 hours", hi: "2 घंटे" },
      explanation: {
        en: "5:00 PM – 3:00 PM = 2 hours.",
        hi: "5:00 PM – 3:00 PM = 2 घंटे।"
      }
    },
    {
      question: {
        en: "School starts at 8:30 AM and ends at 2:30 PM. What is the duration?",
        hi: "स्कूल 8:30 AM पर शुरू होता है और 2:30 PM पर समाप्त होता है। कुल समय क्या है?"
      },
      options: [
        { en: "4 hours", hi: "4 घंटे" },
        { en: "5 hours", hi: "5 घंटे" },
        { en: "6 hours", hi: "6 घंटे" },
        { en: "7 hours", hi: "7 घंटे" }
      ],
      correct: { en: "6 hours", hi: "6 घंटे" },
      explanation: {
        en: "2:30 PM – 8:30 AM = 6 hours.",
        hi: "2:30 PM – 8:30 AM = 6 घंटे।"
      }
    },
    {
      question: {
        en: "If a game started at 4:15 PM and ended at 6:45 PM, how long did it last?",
        hi: "अगर एक खेल 4:15 PM पर शुरू हुआ और 6:45 PM पर खत्म हुआ, तो यह कितने समय तक चला?"
      },
      options: [
        { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "3 hours", hi: "3 घंटे" }
      ],
      correct: { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" },
      explanation: {
        en: "From 4:15 to 6:45 is 2 hours 30 minutes.",
        hi: "4:15 से 6:45 तक 2 घंटे 30 मिनट होते हैं।"
      }
    },
    {
      question: {
        en: "What is the time gap between 9:00 AM and 11:15 AM?",
        hi: "9:00 AM और 11:15 AM के बीच समय का अंतर क्या है?"
      },
      options: [
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" },
        { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
        { en: "3 hours", hi: "3 घंटे" }
      ],
      correct: { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" },
      explanation: {
        en: "11:15 – 9:00 = 2 hours 15 minutes.",
        hi: "11:15 – 9:00 = 2 घंटे 15 मिनट।"
      }
    },
    {
      question: {
        en: "A train leaves at 6:00 AM and reaches at 10:00 AM. How long is the journey?",
        hi: "एक ट्रेन 6:00 AM पर रवाना होती है और 10:00 AM पर पहुँचती है। यात्रा कितनी लंबी है?"
      },
      options: [
        { en: "3 hours", hi: "3 घंटे" },
        { en: "4 hours", hi: "4 घंटे" },
        { en: "5 hours", hi: "5 घंटे" },
        { en: "6 hours", hi: "6 घंटे" }
      ],
      correct: { en: "4 hours", hi: "4 घंटे" },
      explanation: {
        en: "10:00 AM – 6:00 AM = 4 hours.",
        hi: "10:00 AM – 6:00 AM = 4 घंटे।"
      }
    },
    {
      question: {
        en: "If lunch break is from 12:30 PM to 1:15 PM, how long is the break?",
        hi: "यदि लंच ब्रेक 12:30 PM से 1:15 PM तक है, तो ब्रेक कितनी देर का है?"
      },
      options: [
        { en: "30 minutes", hi: "30 मिनट" },
        { en: "45 minutes", hi: "45 मिनट" },
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 15 minutes", hi: "1 घंटा 15 मिनट" }
      ],
      correct: { en: "45 minutes", hi: "45 मिनट" },
      explanation: {
        en: "1:15 – 12:30 = 45 minutes.",
        hi: "1:15 – 12:30 = 45 मिनट।"
      }
    },
    {
      question: {
        en: "From 7:00 PM to 10:00 PM is how much time?",
        hi: "7:00 PM से 10:00 PM तक कितना समय होता है?"
      },
      options: [
        { en: "2 hours", hi: "2 घंटे" },
        { en: "3 hours", hi: "3 घंटे" },
        { en: "4 hours", hi: "4 घंटे" },
        { en: "5 hours", hi: "5 घंटे" }
      ],
      correct: { en: "3 hours", hi: "3 घंटे" },
      explanation: {
        en: "10:00 PM – 7:00 PM = 3 hours.",
        hi: "10:00 PM – 7:00 PM = 3 घंटे।"
      }
    },
    {
      question: {
        en: "How long is the time between 1:00 PM and 2:45 PM?",
        hi: "1:00 PM और 2:45 PM के बीच समय कितना है?"
      },
      options: [
        { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
        { en: "1 hour", hi: "1 घंटा" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" }
      ],
      correct: { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
      explanation: {
        en: "2:45 – 1:00 = 1 hour 45 minutes.",
        hi: "2:45 – 1:00 = 1 घंटा 45 मिनट।"
      }
    },
    {
      question: {
        en: "If a show starts at 5:30 PM and runs for 2 hours, what time will it end?",
        hi: "यदि एक शो 5:30 PM पर शुरू होता है और 2 घंटे चलता है, तो यह किस समय समाप्त होगा?"
      },
      options: [
        { en: "6:30 PM", hi: "6:30 PM" },
        { en: "7:30 PM", hi: "7:30 PM" },
        { en: "8:30 PM", hi: "8:30 PM" },
        { en: "9:30 PM", hi: "9:30 PM" }
      ],
      correct: { en: "7:30 PM", hi: "7:30 PM" },
      explanation: {
        en: "5:30 PM + 2 hours = 7:30 PM.",
        hi: "5:30 PM + 2 घंटे = 7:30 PM।"
      }
    },
    {
      question: {
        en: "If you sleep at 10:00 PM and wake at 6:00 AM, how long did you sleep?",
        hi: "यदि आप 10:00 PM पर सोते हैं और 6:00 AM पर जागते हैं, तो आपने कितनी देर नींद ली?"
      },
      options: [
        { en: "6 hours", hi: "6 घंटे" },
        { en: "7 hours", hi: "7 घंटे" },
        { en: "8 hours", hi: "8 घंटे" },
        { en: "9 hours", hi: "9 घंटे" }
      ],
      correct: { en: "8 hours", hi: "8 घंटे" },
      explanation: {
        en: "From 10:00 PM to 6:00 AM is 8 hours.",
        hi: "10:00 PM से 6:00 AM = 8 घंटे।"
      }
    }
  ]
};

export default timeIntervals;
