const timelineTime = {
  questions: [
    {
      question: {
        en: "If a movie starts at 5:30 PM and ends at 7:45 PM, what duration should be shown on the timeline?",
        hi: "यदि एक फिल्म 5:30 PM पर शुरू होती है और 7:45 PM पर समाप्त होती है, तो टाइमलाइन पर कौन सी अवधि दिखानी चाहिए?"
      },
      options: [
        { en: "2 hours 10 minutes", hi: "2 घंटे 10 मिनट" },
        { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" }
      ],
      correct: { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" },
      explanation: {
        en: "7:45 – 5:30 = 2 hours 15 minutes",
        hi: "7:45 – 5:30 = 2 घंटे 15 मिनट"
      }
    },
    {
      question: {
        en: "A student studies from 4:00 PM to 6:30 PM. What is the time interval?",
        hi: "एक छात्र 4:00 PM से 6:30 PM तक पढ़ाई करता है। समय अंतराल क्या है?"
      },
      options: [
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" },
        { en: "3 hours", hi: "3 घंटे" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" }
      ],
      correct: { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" },
      explanation: {
        en: "6:30 – 4:00 = 2 hours 30 minutes",
        hi: "6:30 – 4:00 = 2 घंटे 30 मिनट"
      }
    },
    {
      question: {
        en: "If a match starts at 3:15 PM and ends at 5:00 PM, how long did it last?",
        hi: "यदि एक मैच 3:15 PM पर शुरू होता है और 5:00 PM पर समाप्त होता है, तो वह कितनी देर चला?"
      },
      options: [
        { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" }
      ],
      correct: { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
      explanation: {
        en: "5:00 – 3:15 = 1 hour 45 minutes",
        hi: "5:00 – 3:15 = 1 घंटा 45 मिनट"
      }
    },
    {
      question: {
        en: "Timeline shows a start at 8:00 AM and end at 9:30 AM. What is the duration?",
        hi: "टाइमलाइन 8:00 AM से शुरू और 9:30 AM पर समाप्त दिखा रही है। अवधि क्या है?"
      },
      options: [
        { en: "1 hour 15 minutes", hi: "1 घंटा 15 मिनट" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "1 hour", hi: "1 घंटा" },
        { en: "2 hours", hi: "2 घंटे" }
      ],
      correct: { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
      explanation: {
        en: "9:30 – 8:00 = 1 hour 30 minutes",
        hi: "9:30 – 8:00 = 1 घंटा 30 मिनट"
      }
    },
    {
      question: {
        en: "If a cooking class is from 2:20 PM to 4:05 PM, show the interval on a timeline.",
        hi: "यदि एक कुकिंग क्लास 2:20 PM से 4:05 PM तक है, तो टाइमलाइन पर कौन सी अवधि दिखेगी?"
      },
      options: [
        { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "2 hours 10 minutes", hi: "2 घंटे 10 मिनट" }
      ],
      correct: { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
      explanation: {
        en: "4:05 – 2:20 = 1 hour 45 minutes",
        hi: "4:05 – 2:20 = 1 घंटा 45 मिनट"
      }
    },
    {
      question: {
        en: "A workshop begins at 10:10 AM and ends at 1:10 PM. What is the total time?",
        hi: "एक कार्यशाला 10:10 AM पर शुरू होकर 1:10 PM पर समाप्त होती है। कुल समय क्या है?"
      },
      options: [
        { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" },
        { en: "3 hours", hi: "3 घंटे" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "3 hours 10 minutes", hi: "3 घंटे 10 मिनट" }
      ],
      correct: { en: "3 hours", hi: "3 घंटे" },
      explanation: {
        en: "1:10 – 10:10 = 3 hours",
        hi: "1:10 – 10:10 = 3 घंटे"
      }
    },
    {
      question: {
        en: "A child watches TV from 6:45 PM to 8:15 PM. Show the duration on a timeline.",
        hi: "एक बच्चा 6:45 PM से 8:15 PM तक टीवी देखता है। टाइमलाइन पर अवधि दिखाएँ।"
      },
      options: [
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "1 hour 15 minutes", hi: "1 घंटा 15 मिनट" }
      ],
      correct: { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
      explanation: {
        en: "8:15 – 6:45 = 1 hour 30 minutes",
        hi: "8:15 – 6:45 = 1 घंटा 30 मिनट"
      }
    },
    {
      question: {
        en: "A journey starts at 11:00 AM and ends at 1:25 PM. What is the time interval?",
        hi: "एक यात्रा 11:00 AM पर शुरू होती है और 1:25 PM पर समाप्त होती है। समय अंतराल क्या है?"
      },
      options: [
        { en: "2 hours 25 minutes", hi: "2 घंटे 25 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" },
        { en: "2 hours 10 minutes", hi: "2 घंटे 10 मिनट" }
      ],
      correct: { en: "2 hours 25 minutes", hi: "2 घंटे 25 मिनट" },
      explanation: {
        en: "1:25 – 11:00 = 2 hours 25 minutes",
        hi: "1:25 – 11:00 = 2 घंटे 25 मिनट"
      }
    },
    {
      question: {
        en: "School is from 7:50 AM to 2:00 PM. What duration does the timeline represent?",
        hi: "स्कूल 7:50 AM से 2:00 PM तक है। टाइमलाइन कौन सी अवधि दिखाएगी?"
      },
      options: [
        { en: "6 hours 10 minutes", hi: "6 घंटे 10 मिनट" },
        { en: "6 hours", hi: "6 घंटे" },
        { en: "7 hours", hi: "7 घंटे" },
        { en: "7 hours 10 minutes", hi: "7 घंटे 10 मिनट" }
      ],
      correct: { en: "6 hours 10 minutes", hi: "6 घंटे 10 मिनट" },
      explanation: {
        en: "2:00 – 7:50 = 6 hours 10 minutes",
        hi: "2:00 – 7:50 = 6 घंटे 10 मिनट"
      }
    },
    {
      question: {
        en: "Timeline from 9:30 AM to 10:45 AM represents how much time?",
        hi: "9:30 AM से 10:45 AM तक की टाइमलाइन कितने समय को दर्शाती है?"
      },
      options: [
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 15 minutes", hi: "1 घंटा 15 मिनट" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "1 hour 20 minutes", hi: "1 घंटा 20 मिनट" }
      ],
      correct: { en: "1 hour 15 minutes", hi: "1 घंटा 15 मिनट" },
      explanation: {
        en: "10:45 – 9:30 = 1 hour 15 minutes",
        hi: "10:45 – 9:30 = 1 घंटा 15 मिनट"
      }
    }
  ]
};

export default timelineTime;
