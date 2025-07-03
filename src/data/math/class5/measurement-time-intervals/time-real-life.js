const timeRealLife = {
  questions: [
    {
      question: {
        en: "Ravi studies from 5:00 PM to 6:30 PM. How long does he study?",
        hi: "रवि शाम 5:00 बजे से 6:30 बजे तक पढ़ाई करता है। वह कितनी देर पढ़ता है?"
      },
      options: [
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "1 hour 15 minutes", hi: "1 घंटा 15 मिनट" }
      ],
      correct: { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
      explanation: {
        en: "6:30 PM – 5:00 PM = 1 hour 30 minutes",
        hi: "6:30 PM – 5:00 PM = 1 घंटा 30 मिनट"
      }
    },
    {
      question: {
        en: "A bus left at 10:15 AM and reached at 12:00 PM. What is the duration of the journey?",
        hi: "एक बस 10:15 AM पर चली और 12:00 PM पर पहुँची। यात्रा की अवधि क्या है?"
      },
      options: [
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" }
      ],
      correct: { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
      explanation: {
        en: "12:00 – 10:15 = 1 hour 45 minutes",
        hi: "12:00 – 10:15 = 1 घंटा 45 मिनट"
      }
    },
    {
      question: {
        en: "The movie starts at 3:45 PM and ends at 5:30 PM. How long is the movie?",
        hi: "फिल्म 3:45 PM पर शुरू होकर 5:30 PM पर समाप्त होती है। फिल्म कितनी लंबी है?"
      },
      options: [
        { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
        { en: "1 hour 30 minutes", hi: "1 घंटा 30 मिनट" },
        { en: "2 hours", hi: "2 घंटे" },
        { en: "2 hours 15 minutes", hi: "2 घंटे 15 मिनट" }
      ],
      correct: { en: "1 hour 45 minutes", hi: "1 घंटा 45 मिनट" },
      explanation: {
        en: "5:30 – 3:45 = 1 hour 45 minutes",
        hi: "5:30 – 3:45 = 1 घंटा 45 मिनट"
      }
    },
    {
      question: {
        en: "A cake needs to be baked for 50 minutes. If it starts baking at 4:20 PM, when will it be ready?",
        hi: "केक को 50 मिनट तक पकाना है। यदि यह 4:20 PM पर पकना शुरू हो, तो यह कब तैयार होगा?"
      },
      options: [
        { en: "5:00 PM", hi: "5:00 PM" },
        { en: "5:10 PM", hi: "5:10 PM" },
        { en: "5:20 PM", hi: "5:20 PM" },
        { en: "5:30 PM", hi: "5:30 PM" }
      ],
      correct: { en: "5:10 PM", hi: "5:10 PM" },
      explanation: {
        en: "4:20 + 50 minutes = 5:10 PM",
        hi: "4:20 + 50 मिनट = 5:10 PM"
      }
    },
    {
      question: {
        en: "If a cricket match starts at 9:00 AM and ends at 1:30 PM, how long did it last?",
        hi: "यदि एक क्रिकेट मैच 9:00 AM पर शुरू होकर 1:30 PM पर समाप्त होता है, तो यह कितनी देर तक चला?"
      },
      options: [
        { en: "4 hours", hi: "4 घंटे" },
        { en: "4 hours 30 minutes", hi: "4 घंटे 30 मिनट" },
        { en: "5 hours", hi: "5 घंटे" },
        { en: "5 hours 30 minutes", hi: "5 घंटे 30 मिनट" }
      ],
      correct: { en: "4 hours 30 minutes", hi: "4 घंटे 30 मिनट" },
      explanation: {
        en: "1:30 – 9:00 = 4 hours 30 minutes",
        hi: "1:30 – 9:00 = 4 घंटे 30 मिनट"
      }
    },
    {
      question: {
        en: "You watched TV for 2 hours and 15 minutes starting at 7:10 PM. What time did you stop?",
        hi: "आपने 7:10 PM से 2 घंटे 15 मिनट तक टीवी देखा। आपने टीवी कब बंद किया?"
      },
      options: [
        { en: "9:15 PM", hi: "9:15 PM" },
        { en: "9:25 PM", hi: "9:25 PM" },
        { en: "9:30 PM", hi: "9:30 PM" },
        { en: "9:00 PM", hi: "9:00 PM" }
      ],
      correct: { en: "9:25 PM", hi: "9:25 PM" },
      explanation: {
        en: "7:10 + 2:15 = 9:25 PM",
        hi: "7:10 + 2:15 = 9:25 PM"
      }
    },
    {
      question: {
        en: "If dinner is at 8:00 PM and now it's 7:15 PM, how much time is left for dinner?",
        hi: "अगर रात का खाना 8:00 PM पर है और अब 7:15 PM है, तो खाने में कितना समय बाकी है?"
      },
      options: [
        { en: "30 minutes", hi: "30 मिनट" },
        { en: "45 minutes", hi: "45 मिनट" },
        { en: "1 hour", hi: "1 घंटा" },
        { en: "1 hour 15 minutes", hi: "1 घंटा 15 मिनट" }
      ],
      correct: { en: "45 minutes", hi: "45 मिनट" },
      explanation: {
        en: "8:00 – 7:15 = 45 minutes",
        hi: "8:00 – 7:15 = 45 मिनट"
      }
    },
    {
      question: {
        en: "Riya wakes up at 6:45 AM and gets ready by 7:20 AM. How long does she take to get ready?",
        hi: "रिया 6:45 AM पर उठती है और 7:20 AM तक तैयार हो जाती है। वह तैयार होने में कितना समय लेती है?"
      },
      options: [
        { en: "25 minutes", hi: "25 मिनट" },
        { en: "30 minutes", hi: "30 मिनट" },
        { en: "35 minutes", hi: "35 मिनट" },
        { en: "40 minutes", hi: "40 मिनट" }
      ],
      correct: { en: "35 minutes", hi: "35 मिनट" },
      explanation: {
        en: "7:20 – 6:45 = 35 minutes",
        hi: "7:20 – 6:45 = 35 मिनट"
      }
    },
    {
      question: {
        en: "Your school assembly starts at 8:00 AM and ends at 8:25 AM. What is its duration?",
        hi: "आपकी स्कूल प्रार्थना सभा 8:00 AM से शुरू होकर 8:25 AM पर समाप्त होती है। इसकी अवधि क्या है?"
      },
      options: [
        { en: "20 minutes", hi: "20 मिनट" },
        { en: "25 minutes", hi: "25 मिनट" },
        { en: "30 minutes", hi: "30 मिनट" },
        { en: "35 minutes", hi: "35 मिनट" }
      ],
      correct: { en: "25 minutes", hi: "25 मिनट" },
      explanation: {
        en: "8:25 – 8:00 = 25 minutes",
        hi: "8:25 – 8:00 = 25 मिनट"
      }
    },
    {
      question: {
        en: "Rohan reads a book for 1 hour 45 minutes starting at 6:15 PM. What time does he finish?",
        hi: "रोहन 6:15 PM से 1 घंटा 45 मिनट किताब पढ़ता है। वह कब पढ़ना बंद करता है?"
      },
      options: [
        { en: "7:45 PM", hi: "7:45 PM" },
        { en: "8:00 PM", hi: "8:00 PM" },
        { en: "8:15 PM", hi: "8:15 PM" },
        { en: "8:30 PM", hi: "8:30 PM" }
      ],
      correct: { en: "8:00 PM", hi: "8:00 PM" },
      explanation: {
        en: "6:15 + 1:45 = 8:00 PM",
        hi: "6:15 + 1:45 = 8:00 PM"
      }
    }
  ]
};

export default timeRealLife;
