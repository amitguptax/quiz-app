const startEndTime = {
  questions: [
    {
      question: {
        en: "A class started at 9:15 AM and ended at 10:45 AM. How long was the class?",
        hi: "एक कक्षा 9:15 AM पर शुरू होकर 10:45 AM पर समाप्त हुई। कक्षा कितनी देर चली?"
      },
      options: [
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "1 hour 15 minutes", hi: "1 घंटा 15 मिनट" },
        { en: "2 hours", hi: "2 घंटे" }
      ],
      correct: { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
      explanation: {
        en: "10:45 – 9:15 = 1 hour 30 minutes",
        hi: "10:45 – 9:15 = 1 घंटा 30 मिनट"
      }
    },
    {
      question: {
        en: "The assembly began at 8:00 AM and lasted for 25 minutes. When did it end?",
        hi: "प्रार्थना सभा 8:00 AM पर शुरू हुई और 25 मिनट चली। यह कब समाप्त हुई?"
      },
      options: [
        { en: "8:20 AM", hi: "8:20 AM" },
        { en: "8:25 AM", hi: "8:25 AM" },
        { en: "8:30 AM", hi: "8:30 AM" },
        { en: "8:15 AM", hi: "8:15 AM" }
      ],
      correct: { en: "8:25 AM", hi: "8:25 AM" },
      explanation: {
        en: "8:00 + 25 minutes = 8:25 AM",
        hi: "8:00 + 25 मिनट = 8:25 AM"
      }
    },
    {
      question: {
        en: "If a movie ends at 6:45 PM and is 2 hours long, when did it start?",
        hi: "यदि कोई फिल्म 6:45 PM पर समाप्त होती है और 2 घंटे लंबी है, तो यह कब शुरू हुई?"
      },
      options: [
        { en: "4:45 PM", hi: "4:45 PM" },
        { en: "5:00 PM", hi: "5:00 PM" },
        { en: "4:30 PM", hi: "4:30 PM" },
        { en: "5:15 PM", hi: "5:15 PM" }
      ],
      correct: { en: "4:45 PM", hi: "4:45 PM" },
      explanation: {
        en: "6:45 – 2:00 = 4:45 PM",
        hi: "6:45 – 2:00 = 4:45 PM"
      }
    },
    {
      question: {
        en: "A match started at 3:20 PM and ended at 5:10 PM. What was the total time?",
        hi: "एक मैच 3:20 PM पर शुरू हुआ और 5:10 PM पर समाप्त हुआ। कुल समय क्या था?"
      },
      options: [
        { en: "1 hour 40 minutes", hi: "1 घंटा 40 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "2 hours 10 minutes", hi: "2 घंटे 10 मिनट" }
      ],
      correct: { en: "1 hour 50 minutes", hi: "1 घंटा 50 मिनट" },
      explanation: {
        en: "5:10 – 3:20 = 1 hour 50 minutes",
        hi: "5:10 – 3:20 = 1 घंटा 50 मिनट"
      }
    },
    {
      question: {
        en: "A workshop lasted 3 hours 15 minutes. If it started at 11:10 AM, when did it end?",
        hi: "एक कार्यशाला 3 घंटे 15 मिनट चली। यदि यह 11:10 AM पर शुरू हुई, तो यह कब समाप्त हुई?"
      },
      options: [
        { en: "2:25 PM", hi: "2:25 PM" },
        { en: "2:15 PM", hi: "2:15 PM" },
        { en: "2:30 PM", hi: "2:30 PM" },
        { en: "1:55 PM", hi: "1:55 PM" }
      ],
      correct: { en: "2:25 PM", hi: "2:25 PM" },
      explanation: {
        en: "11:10 + 3:15 = 2:25 PM",
        hi: "11:10 + 3:15 = 2:25 PM"
      }
    },
    {
      question: {
        en: "An online class began at 4:05 PM and ended at 5:40 PM. What is the duration?",
        hi: "एक ऑनलाइन कक्षा 4:05 PM पर शुरू होकर 5:40 PM पर समाप्त हुई। अवधि क्या है?"
      },
      options: [
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 35 minutes", hi: "1 घंटा 35 मिनट" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" }
      ],
      correct: { en: "1 hour 35 minutes", hi: "1 घंटा 35 मिनट" },
      explanation: {
        en: "5:40 – 4:05 = 1 hour 35 minutes",
        hi: "5:40 – 4:05 = 1 घंटा 35 मिनट"
      }
    },
    {
      question: {
        en: "A train journey of 2 hours 40 minutes ended at 3:15 PM. When did it start?",
        hi: "2 घंटे 40 मिनट की ट्रेन यात्रा 3:15 PM पर समाप्त हुई। यह कब शुरू हुई?"
      },
      options: [
        { en: "12:35 PM", hi: "12:35 PM" },
        { en: "12:30 PM", hi: "12:30 PM" },
        { en: "1:00 PM", hi: "1:00 PM" },
        { en: "12:45 PM", hi: "12:45 PM" }
      ],
      correct: { en: "12:35 PM", hi: "12:35 PM" },
      explanation: {
        en: "3:15 – 2:40 = 12:35 PM",
        hi: "3:15 – 2:40 = 12:35 PM"
      }
    },
    {
      question: {
        en: "A test began at 10:25 AM and lasted 55 minutes. What time did it finish?",
        hi: "एक परीक्षा 10:25 AM पर शुरू हुई और 55 मिनट चली। यह कब समाप्त हुई?"
      },
      options: [
        { en: "11:15 AM", hi: "11:15 AM" },
        { en: "11:20 AM", hi: "11:20 AM" },
        { en: "11:25 AM", hi: "11:25 AM" },
        { en: "11:10 AM", hi: "11:10 AM" }
      ],
      correct: { en: "11:20 AM", hi: "11:20 AM" },
      explanation: {
        en: "10:25 + 55 minutes = 11:20 AM",
        hi: "10:25 + 55 मिनट = 11:20 AM"
      }
    },
    {
      question: {
        en: "A train leaves at 11:50 AM and reaches at 3:20 PM. What is the journey time?",
        hi: "एक ट्रेन 11:50 AM पर रवाना होती है और 3:20 PM पर पहुँचती है। यात्रा की अवधि क्या है?"
      },
      options: [
        { en: "3 hours 30 minutes", hi: "3 घंटे 30 मिनट" },
        { en: "3 hours 20 minutes", hi: "3 घंटे 20 मिनट" },
        { en: "3 hours", hi: "3 घंटे" },
        { en: "3 hours 10 minutes", hi: "3 घंटे 10 मिनट" }
      ],
      correct: { en: "3 hours 30 minutes", hi: "3 घंटे 30 मिनट" },
      explanation: {
        en: "3:20 – 11:50 = 3 hours 30 minutes",
        hi: "3:20 – 11:50 = 3 घंटे 30 मिनट"
      }
    },
    {
      question: {
        en: "An event started at 7:10 PM and lasted 1 hour 25 minutes. When did it end?",
        hi: "एक कार्यक्रम 7:10 PM पर शुरू हुआ और 1 घंटा 25 मिनट चला। यह कब समाप्त हुआ?"
      },
      options: [
        { en: "8:25 PM", hi: "8:25 PM" },
        { en: "8:30 PM", hi: "8:30 PM" },
        { en: "8:35 PM", hi: "8:35 PM" },
        { en: "9:00 PM", hi: "9:00 PM" }
      ],
      correct: { en: "8:35 PM", hi: "8:35 PM" },
      explanation: {
        en: "7:10 + 1:25 = 8:35 PM",
        hi: "7:10 + 1:25 = 8:35 PM"
      }
    }
  ]
};

export default startEndTime;
