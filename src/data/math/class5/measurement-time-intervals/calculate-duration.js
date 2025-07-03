const calculateDuration = {
  questions: [
    {
      question: {
        en: "A train leaves at 6:15 AM and reaches at 9:00 AM. What is the journey time?",
        hi: "एक ट्रेन 6:15 AM पर चलती है और 9:00 AM पर पहुँचती है। यात्रा का समय क्या है?"
      },
      options: [
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" },
        { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" },
        { en: "3 hours", hi: "3 घंटे" }
      ],
      correct: { en: "2 hours 45 minutes", hi: "2 घंटे 45 मिनट" },
      explanation: {
        en: "9:00 AM – 6:15 AM = 2 hours 45 minutes",
        hi: "9:00 AM – 6:15 AM = 2 घंटे 45 मिनट"
      }
    },
    {
      question: {
        en: "If a flight starts at 1:10 PM and lands at 4:30 PM, how long was the flight?",
        hi: "यदि एक उड़ान 1:10 PM पर शुरू होती है और 4:30 PM पर लैंड करती है, तो उड़ान कितनी लंबी थी?"
      },
      options: [
        { en: "3 hours 20 minutes", hi: "3 घंटे 20 मिनट" },
        { en: "3 hours 10 minutes", hi: "3 घंटे 10 मिनट" },
        { en: "3 hours 15 minutes", hi: "3 घंटे 15 मिनट" },
        { en: "3 hours", hi: "3 घंटे" }
      ],
      correct: { en: "3 hours 20 minutes", hi: "3 घंटे 20 मिनट" },
      explanation: {
        en: "4:30 – 1:10 = 3 hours 20 minutes",
        hi: "4:30 – 1:10 = 3 घंटे 20 मिनट"
      }
    },
    {
      question: {
        en: "A school trip begins at 7:30 AM and ends at 2:00 PM. Find the total duration.",
        hi: "एक स्कूल यात्रा 7:30 AM पर शुरू होती है और 2:00 PM पर समाप्त होती है। कुल अवधि निकालें।"
      },
      options: [
        { en: "6.5 hours", hi: "6.5 घंटे" },
        { en: "7 hours", hi: "7 घंटे" },
        { en: "7.5 hours", hi: "7.5 घंटे" },
        { en: "8 hours", hi: "8 घंटे" }
      ],
      correct: { en: "6.5 hours", hi: "6.5 घंटे" },
      explanation: {
        en: "2:00 PM – 7:30 AM = 6 hours 30 minutes",
        hi: "2:00 PM – 7:30 AM = 6 घंटे 30 मिनट"
      }
    },
    {
      question: {
        en: "A bus journey took 4 hours 15 minutes. If it started at 8:20 AM, when did it end?",
        hi: "एक बस यात्रा 4 घंटे 15 मिनट की थी। यदि यह 8:20 AM पर शुरू हुई, तो यह कब समाप्त हुई?"
      },
      options: [
        { en: "12:35 PM", hi: "12:35 PM" },
        { en: "12:45 PM", hi: "12:45 PM" },
        { en: "1:00 PM", hi: "1:00 PM" },
        { en: "1:15 PM", hi: "1:15 PM" }
      ],
      correct: { en: "12:35 PM", hi: "12:35 PM" },
      explanation: {
        en: "8:20 + 4:15 = 12:35 PM",
        hi: "8:20 + 4:15 = 12:35 PM"
      }
    },
    {
      question: {
        en: "A train took 2 hours 30 minutes to reach. It started at 5:45 PM. When did it arrive?",
        hi: "ट्रेन को पहुँचने में 2 घंटे 30 मिनट लगे। यह 5:45 PM पर शुरू हुई। यह कब पहुँची?"
      },
      options: [
        { en: "8:15 PM", hi: "8:15 PM" },
        { en: "8:00 PM", hi: "8:00 PM" },
        { en: "7:45 PM", hi: "7:45 PM" },
        { en: "7:30 PM", hi: "7:30 PM" }
      ],
      correct: { en: "8:15 PM", hi: "8:15 PM" },
      explanation: {
        en: "5:45 + 2:30 = 8:15 PM",
        hi: "5:45 + 2:30 = 8:15 PM"
      }
    },
    {
      question: {
        en: "If a workshop starts at 10:00 AM and ends at 12:20 PM, what is its duration?",
        hi: "यदि एक कार्यशाला 10:00 AM पर शुरू होकर 12:20 PM पर समाप्त होती है, तो इसकी अवधि क्या है?"
      },
      options: [
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 10 minutes", hi: "2 घंटे 10 मिनट" },
        { en: "2 hours 20 minutes", hi: "2 घंटे 20 मिनट" },
        { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" }
      ],
      correct: { en: "2 hours 20 minutes", hi: "2 घंटे 20 मिनट" },
      explanation: {
        en: "12:20 – 10:00 = 2 hours 20 minutes",
        hi: "12:20 – 10:00 = 2 घंटे 20 मिनट"
      }
    },
    {
      question: {
        en: "A delivery van starts at 9:40 AM and reaches at 1:10 PM. Find the travel duration.",
        hi: "एक डिलीवरी वैन 9:40 AM पर चलती है और 1:10 PM पर पहुँचती है। यात्रा की अवधि निकालें।"
      },
      options: [
        { en: "3 hours", hi: "3 घंटे" },
        { en: "3 hours 30 minutes", hi: "3 घंटे 30 मिनट" },
        { en: "3 hours 20 minutes", hi: "3 घंटे 20 मिनट" },
        { en: "3 hours 40 minutes", hi: "3 घंटे 40 मिनट" }
      ],
      correct: { en: "3 hours 30 minutes", hi: "3 घंटे 30 मिनट" },
      explanation: {
        en: "1:10 – 9:40 = 3 hours 30 minutes",
        hi: "1:10 – 9:40 = 3 घंटे 30 मिनट"
      }
    },
    {
      question: {
        en: "If a schedule says a movie is 2 hours 10 minutes long, when will it end if it starts at 6:25 PM?",
        hi: "यदि किसी कार्यक्रम में फिल्म की अवधि 2 घंटे 10 मिनट है और यह 6:25 PM पर शुरू होती है, तो यह कब समाप्त होगी?"
      },
      options: [
        { en: "8:35 PM", hi: "8:35 PM" },
        { en: "8:25 PM", hi: "8:25 PM" },
        { en: "8:30 PM", hi: "8:30 PM" },
        { en: "8:45 PM", hi: "8:45 PM" }
      ],
      correct: { en: "8:35 PM", hi: "8:35 PM" },
      explanation: {
        en: "6:25 + 2:10 = 8:35 PM",
        hi: "6:25 + 2:10 = 8:35 PM"
      }
    },
    {
      question: {
        en: "A train left at 11:50 AM and took 3 hours 40 minutes. When did it arrive?",
        hi: "एक ट्रेन 11:50 AM पर चली और उसे 3 घंटे 40 मिनट लगे। यह कब पहुँची?"
      },
      options: [
        { en: "3:30 PM", hi: "3:30 PM" },
        { en: "3:20 PM", hi: "3:20 PM" },
        { en: "4:00 PM", hi: "4:00 PM" },
        { en: "4:10 PM", hi: "4:10 PM" }
      ],
      correct: { en: "3:30 PM", hi: "3:30 PM" },
      explanation: {
        en: "11:50 + 3:40 = 3:30 PM",
        hi: "11:50 + 3:40 = 3:30 PM"
      }
    },
    {
      question: {
        en: "If the exam started at 9:00 AM and ended at 11:45 AM, what was its duration?",
        hi: "यदि परीक्षा 9:00 AM पर शुरू हुई और 11:45 AM पर समाप्त हुई, तो इसकी अवधि क्या थी?"
      },
      options: [
        { en: "2 hours 30 minutes", hi: "2 घंटे 30 मिनट" },
        { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" },
        { en: "2 hours 45 minutes", hi: "2 घंटे 45 मिनट" },
        { en: "3 hours", hi: "3 घंटे" }
      ],
      correct: { en: "2 hours 45 minutes", hi: "2 घंटे 45 मिनट" },
      explanation: {
        en: "11:45 – 9:00 = 2 hours 45 minutes",
        hi: "11:45 – 9:00 = 2 घंटे 45 मिनट"
      }
    }
  ]
};

export default calculateDuration;
