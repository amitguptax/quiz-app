const amPm = {
  label: {
    en: "Differentiate AM and PM",
    hi: "AM और PM के बीच अंतर समझें"
  },
  questions: [
    {
      question: {
        en: "What does AM stand for?",
        hi: "AM का पूर्ण रूप क्या है?"
      },
      options: [
        { en: "After Morning", hi: "आफ्टर मॉर्निंग" },
        { en: "Ante Meridiem", hi: "एंटी मेरीडियम" },
        { en: "After Midnight", hi: "आफ्टर मिडनाइट" },
        { en: "Always Morning", hi: "ऑलवेज़ मॉर्निंग" }
      ],
      correct: { en: "Ante Meridiem", hi: "एंटी मेरीडियम" },
      explanation: {
        en: "'AM' means Ante Meridiem, which refers to time before noon.",
        hi: "AM का अर्थ है एंटी मेरीडियम, यानी दोपहर से पहले का समय।"
      }
    },
    {
      question: {
        en: "What does PM stand for?",
        hi: "PM का पूर्ण रूप क्या है?"
      },
      options: [
        { en: "Post Meridiem", hi: "पोस्ट मेरीडियम" },
        { en: "Past Morning", hi: "पास्ट मॉर्निंग" },
        { en: "Post Midnight", hi: "पोस्ट मिडनाइट" },
        { en: "Pre Midday", hi: "प्री मिडडे" }
      ],
      correct: { en: "Post Meridiem", hi: "पोस्ट मेरीडियम" },
      explanation: {
        en: "'PM' means Post Meridiem, which refers to time after noon.",
        hi: "PM का अर्थ है पोस्ट मेरीडियम, यानी दोपहर के बाद का समय।"
      }
    },
    {
      question: {
        en: "Which of these times is in the AM?",
        hi: "इनमें से कौन सा समय AM में आता है?"
      },
      options: [
        { en: "9:00 AM", hi: "9:00 AM" },
        { en: "4:00 PM", hi: "4:00 PM" },
        { en: "7:00 PM", hi: "7:00 PM" },
        { en: "10:30 PM", hi: "10:30 PM" }
      ],
      correct: { en: "9:00 AM", hi: "9:00 AM" },
      explanation: {
        en: "Times before 12:00 noon are AM.",
        hi: "12:00 दोपहर से पहले के समय AM में आते हैं।"
      }
    },
    {
      question: {
        en: "Which of these activities usually happens in PM?",
        hi: "इनमें से कौन सी गतिविधि आमतौर पर PM में होती है?"
      },
      options: [
        { en: "Breakfast", hi: "नाश्ता" },
        { en: "Morning walk", hi: "सुबह की सैर" },
        { en: "Lunch", hi: "दोपहर का खाना" },
        { en: "Dinner", hi: "रात का खाना" }
      ],
      correct: { en: "Dinner", hi: "रात का खाना" },
      explanation: {
        en: "Dinner usually happens in the evening, which is PM.",
        hi: "रात का खाना आमतौर पर शाम को होता है, जो PM होता है।"
      }
    },
    {
      question: {
        en: "If the time is 11:00 PM, what part of the day is it?",
        hi: "यदि समय 11:00 PM है, तो दिन का कौन सा भाग है?"
      },
      options: [
        { en: "Morning", hi: "सुबह" },
        { en: "Afternoon", hi: "दोपहर" },
        { en: "Evening/Night", hi: "शाम / रात" },
        { en: "Noon", hi: "दोपहर 12 बजे" }
      ],
      correct: { en: "Evening/Night", hi: "शाम / रात" },
      explanation: {
        en: "PM after 6:00 refers to evening or night.",
        hi: "6:00 PM के बाद का समय शाम या रात माना जाता है।"
      }
    },
    {
      question: {
        en: "What time of the day is 5:00 AM?",
        hi: "5:00 AM दिन के किस समय को दर्शाता है?"
      },
      options: [
        { en: "Late night", hi: "रात देर" },
        { en: "Morning", hi: "सुबह" },
        { en: "Noon", hi: "दोपहर" },
        { en: "Evening", hi: "शाम" }
      ],
      correct: { en: "Morning", hi: "सुबह" },
      explanation: {
        en: "5:00 AM is early morning.",
        hi: "5:00 AM सुबह का समय होता है।"
      }
    },
    {
      question: {
        en: "When do most schools start?",
        hi: "अधिकांश स्कूल कब शुरू होते हैं?"
      },
      options: [
        { en: "8:00 PM", hi: "8:00 PM" },
        { en: "7:30 AM", hi: "7:30 AM" },
        { en: "1:00 PM", hi: "1:00 PM" },
        { en: "6:00 PM", hi: "6:00 PM" }
      ],
      correct: { en: "7:30 AM", hi: "7:30 AM" },
      explanation: {
        en: "Most schools start in the morning, usually between 7–8 AM.",
        hi: "अधिकांश स्कूल सुबह 7–8 बजे के बीच शुरू होते हैं।"
      }
    },
    {
      question: {
        en: "What is the time 3 hours after 10:00 AM?",
        hi: "10:00 AM के 3 घंटे बाद समय क्या होगा?"
      },
      options: [
        { en: "12:00 PM", hi: "12:00 PM" },
        { en: "1:00 PM", hi: "1:00 PM" },
        { en: "3:00 AM", hi: "3:00 AM" },
        { en: "10:00 PM", hi: "10:00 PM" }
      ],
      correct: { en: "1:00 PM", hi: "1:00 PM" },
      explanation: {
        en: "10 AM + 3 hours = 1 PM (which is PM).",
        hi: "10 AM में 3 घंटे जोड़ने पर 1 PM होता है।"
      }
    },
    {
      question: {
        en: "Which one is not in AM?",
        hi: "इनमें से कौन AM में नहीं आता है?"
      },
      options: [
        { en: "6:00 AM", hi: "6:00 AM" },
        { en: "9:00 AM", hi: "9:00 AM" },
        { en: "11:00 PM", hi: "11:00 PM" },
        { en: "7:00 AM", hi: "7:00 AM" }
      ],
      correct: { en: "11:00 PM", hi: "11:00 PM" },
      explanation: {
        en: "11:00 PM is late night, so it is PM.",
        hi: "11:00 PM रात का समय है, यह PM में आता है।"
      }
    },
    {
      question: {
        en: "Which time is just before noon?",
        hi: "दोपहर से ठीक पहले का समय कौन सा है?"
      },
      options: [
        { en: "11:59 AM", hi: "11:59 AM" },
        { en: "12:01 PM", hi: "12:01 PM" },
        { en: "11:59 PM", hi: "11:59 PM" },
        { en: "12:00 AM", hi: "12:00 AM" }
      ],
      correct: { en: "11:59 AM", hi: "11:59 AM" },
      explanation: {
        en: "11:59 AM is 1 minute before noon (12:00 PM).",
        hi: "11:59 AM दोपहर 12:00 PM से 1 मिनट पहले होता है।"
      }
    }
  ]
};

export default amPm;
