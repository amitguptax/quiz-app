const addSubTime = {
  questions: [
    {
      question: {
        en: "If a movie starts at 2:30 PM and ends at 4:00 PM, how long is the movie?",
        hi: "यदि फिल्म 2:30 बजे शुरू होकर 4:00 बजे समाप्त होती है, तो फिल्म की अवधि कितनी है?"
      },
      options: [
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" }
      ],
      correct: { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
      explanation: {
        en: "4:00 - 2:30 = 1 hour 30 minutes",
        hi: "4:00 - 2:30 = 1 घंटा 30 मिनट"
      }
    },
    {
      question: {
        en: "A train journey takes 2 hours 45 minutes. If it starts at 10:15 AM, when does it end?",
        hi: "एक ट्रेन यात्रा 2 घंटे 45 मिनट की है। यह 10:15 AM पर शुरू होती है। यह कब समाप्त होगी?"
      },
      options: [
        { en: "12:45 PM", hi: "12:45 PM" },
        { en: "1:00 PM", hi: "1:00 PM" },
        { en: "1:15 PM", hi: "1:15 PM" },
        { en: "12:30 PM", hi: "12:30 PM" }
      ],
      correct: { en: "1:00 PM", hi: "1:00 PM" },
      explanation: {
        en: "10:15 + 2:45 = 13:00 or 1:00 PM",
        hi: "10:15 + 2:45 = 1:00 PM"
      }
    },
    {
      question: {
        en: "How many minutes are there between 3:10 PM and 3:50 PM?",
        hi: "3:10 PM और 3:50 PM के बीच कितने मिनट होते हैं?"
      },
      options: [
        { en: "30 minutes", hi: "30 मिनट" },
        { en: "35 minutes", hi: "35 मिनट" },
        { en: "40 minutes", hi: "40 मिनट" },
        { en: "45 minutes", hi: "45 मिनट" }
      ],
      correct: { en: "40 minutes", hi: "40 मिनट" },
      explanation: {
        en: "3:50 - 3:10 = 40 minutes",
        hi: "3:50 - 3:10 = 40 मिनट"
      }
    },
    {
      question: {
        en: "If school starts at 8:00 AM and ends at 2:30 PM, how long is the school day?",
        hi: "यदि स्कूल 8:00 AM से शुरू होकर 2:30 PM को समाप्त होता है, तो स्कूल का समय कितना है?"
      },
      options: [
        { en: "6 hours", hi: "6 घंटे" },
        { en: "6.5 hours", hi: "6.5 घंटे" },
        { en: "7 hours", hi: "7 घंटे" },
        { en: "7.5 hours", hi: "7.5 घंटे" }
      ],
      correct: { en: "6.5 hours", hi: "6.5 घंटे" },
      explanation: {
        en: "2:30 - 8:00 = 6 hours 30 minutes",
        hi: "2:30 - 8:00 = 6 घंटे 30 मिनट"
      }
    },
    {
      question: {
        en: "If a class starts at 11:20 AM and lasts 40 minutes, when will it end?",
        hi: "यदि एक कक्षा 11:20 AM पर शुरू होकर 40 मिनट चलती है, तो यह कब समाप्त होगी?"
      },
      options: [
        { en: "12:00 PM", hi: "12:00 PM" },
        { en: "12:10 PM", hi: "12:10 PM" },
        { en: "12:20 PM", hi: "12:20 PM" },
        { en: "12:30 PM", hi: "12:30 PM" }
      ],
      correct: { en: "12:00 PM", hi: "12:00 PM" },
      explanation: {
        en: "11:20 + 40 minutes = 12:00 PM",
        hi: "11:20 + 40 मिनट = 12:00 PM"
      }
    },
    {
      question: {
        en: "What is the time difference between 9:15 AM and 11:45 AM?",
        hi: "9:15 AM और 11:45 AM के बीच समय अंतर कितना है?"
      },
      options: [
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" },
        { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" },
        { en: "3 hours", hi: "3 घंटे" }
      ],
      correct: { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" },
      explanation: {
        en: "11:45 - 9:15 = 2 hours 30 minutes",
        hi: "11:45 - 9:15 = 2 घंटे 30 मिनट"
      }
    },
    {
      question: {
        en: "If a lunch break is 45 minutes and starts at 12:15 PM, what time does it end?",
        hi: "यदि दोपहर का भोजन अवकाश 45 मिनट का है और यह 12:15 PM पर शुरू होता है, तो यह कब समाप्त होगा?"
      },
      options: [
        { en: "1:00 PM", hi: "1:00 PM" },
        { en: "12:45 PM", hi: "12:45 PM" },
        { en: "1:15 PM", hi: "1:15 PM" },
        { en: "1:30 PM", hi: "1:30 PM" }
      ],
      correct: { en: "1:00 PM", hi: "1:00 PM" },
      explanation: {
        en: "12:15 + 45 minutes = 1:00 PM",
        hi: "12:15 + 45 मिनट = 1:00 PM"
      }
    },
    {
      question: {
        en: "A game started at 5:10 PM and ended at 6:00 PM. What was its duration?",
        hi: "एक खेल 5:10 PM पर शुरू हुआ और 6:00 PM पर समाप्त हुआ। इसकी अवधि क्या थी?"
      },
      options: [
        { en: "40 minutes", hi: "40 मिनट" },
        { en: "50 minutes", hi: "50 मिनट" },
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 10 minutes", hi: "1 घंटा 10 मिनट" }
      ],
      correct: { en: "50 minutes", hi: "50 मिनट" },
      explanation: {
        en: "6:00 - 5:10 = 50 minutes",
        hi: "6:00 - 5:10 = 50 मिनट"
      }
    },
    {
      question: {
        en: "If bedtime is at 9:30 PM and you sleep at 10:15 PM, how late did you sleep?",
        hi: "यदि सोने का समय 9:30 PM है और आप 10:15 PM पर सोए, तो आपने कितनी देर से सोया?"
      },
      options: [
        { en: "45 minutes", hi: "45 मिनट" },
        { en: "30 minutes", hi: "30 मिनट" },
        { en: "15 minutes", hi: "15 मिनट" },
        { en: "1 hour", hi: "1 घंटा" }
      ],
      correct: { en: "45 minutes", hi: "45 मिनट" },
      explanation: {
        en: "10:15 - 9:30 = 45 minutes",
        hi: "10:15 - 9:30 = 45 मिनट"
      }
    },
    {
      question: {
        en: "How much time passes between 7:00 AM and 8:20 AM?",
        hi: "7:00 AM और 8:20 AM के बीच कितना समय व्यतीत होता है?"
      },
      options: [
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 10 minutes", hi: "1 घंटा 10 मिनट" },
        { en: "1 hour 20 minutes", hi: "1 घंटा 20 मिनट" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" }
      ],
      correct: { en: "1 hour 20 minutes", hi: "1 घंटा 20 मिनट" },
      explanation: {
        en: "8:20 - 7:00 = 1 hour 20 minutes",
        hi: "8:20 - 7:00 = 1 घंटा 20 मिनट"
      }
    }
  ]
};

export default addSubTime;
