const readCalendar = {
  label: {
    en: "Read calendars and dates",
    hi: "कैलेंडर और दिनांक पढ़ें"
  },
  questions: [
    {
      question: {
        en: "How many days are there in the month of February (non-leap year)?",
        hi: "फरवरी महीने में (लीप वर्ष नहीं) कितने दिन होते हैं?"
      },
      options: [
        { en: "30", hi: "30" },
        { en: "29", hi: "29" },
        { en: "28", hi: "28" },
        { en: "31", hi: "31" }
      ],
      correct: { en: "28", hi: "28" },
      explanation: {
        en: "In a non-leap year, February has 28 days.",
        hi: "लीप वर्ष नहीं होने पर फरवरी में 28 दिन होते हैं।"
      }
    },
    {
      question: {
        en: "Which month comes after April?",
        hi: "अप्रैल के बाद कौन सा महीना आता है?"
      },
      options: [
        { en: "June", hi: "जून" },
        { en: "May", hi: "मई" },
        { en: "March", hi: "मार्च" },
        { en: "July", hi: "जुलाई" }
      ],
      correct: { en: "May", hi: "मई" },
      explanation: {
        en: "April is followed by May in the calendar.",
        hi: "अप्रैल के बाद मई आता है।"
      }
    },
    {
      question: {
        en: "Which day comes after Friday?",
        hi: "शुक्रवार के बाद कौन सा दिन आता है?"
      },
      options: [
        { en: "Wednesday", hi: "बुधवार" },
        { en: "Sunday", hi: "रविवार" },
        { en: "Saturday", hi: "शनिवार" },
        { en: "Monday", hi: "सोमवार" }
      ],
      correct: { en: "Saturday", hi: "शनिवार" },
      explanation: {
        en: "Friday is followed by Saturday.",
        hi: "शुक्रवार के बाद शनिवार आता है।"
      }
    },
    {
      question: {
        en: "How many months are there in a year?",
        hi: "एक वर्ष में कितने महीने होते हैं?"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "11", hi: "11" },
        { en: "12", hi: "12" },
        { en: "13", hi: "13" }
      ],
      correct: { en: "12", hi: "12" },
      explanation: {
        en: "There are 12 months in a year.",
        hi: "एक वर्ष में 12 महीने होते हैं।"
      }
    },
    {
      question: {
        en: "How many days are there in July?",
        hi: "जुलाई में कितने दिन होते हैं?"
      },
      options: [
        { en: "30", hi: "30" },
        { en: "31", hi: "31" },
        { en: "28", hi: "28" },
        { en: "29", hi: "29" }
      ],
      correct: { en: "31", hi: "31" },
      explanation: {
        en: "July has 31 days.",
        hi: "जुलाई में 31 दिन होते हैं।"
      }
    },
    {
      question: {
        en: "What is the first month of the year?",
        hi: "वर्ष का पहला महीना कौन सा होता है?"
      },
      options: [
        { en: "February", hi: "फरवरी" },
        { en: "January", hi: "जनवरी" },
        { en: "March", hi: "मार्च" },
        { en: "April", hi: "अप्रैल" }
      ],
      correct: { en: "January", hi: "जनवरी" },
      explanation: {
        en: "January is the first month of the year.",
        hi: "जनवरी वर्ष का पहला महीना होता है।"
      }
    },
    {
      question: {
        en: "If 1st January is a Monday, what day is 3rd January?",
        hi: "यदि 1 जनवरी सोमवार है, तो 3 जनवरी कौन सा दिन होगा?"
      },
      options: [
        { en: "Tuesday", hi: "मंगलवार" },
        { en: "Wednesday", hi: "बुधवार" },
        { en: "Thursday", hi: "गुरुवार" },
        { en: "Friday", hi: "शुक्रवार" }
      ],
      correct: { en: "Wednesday", hi: "बुधवार" },
      explanation: {
        en: "1 Jan - Monday → 2 Jan - Tuesday → 3 Jan - Wednesday.",
        hi: "1 जनवरी - सोमवार, 2 जनवरी - मंगलवार, 3 जनवरी - बुधवार।"
      }
    },
    {
      question: {
        en: "Which of the following months has 30 days?",
        hi: "निम्न में से किस महीने में 30 दिन होते हैं?"
      },
      options: [
        { en: "January", hi: "जनवरी" },
        { en: "April", hi: "अप्रैल" },
        { en: "July", hi: "जुलाई" },
        { en: "December", hi: "दिसंबर" }
      ],
      correct: { en: "April", hi: "अप्रैल" },
      explanation: {
        en: "April has 30 days.",
        hi: "अप्रैल में 30 दिन होते हैं।"
      }
    },
    {
      question: {
        en: "How many days are there in a leap year?",
        hi: "लीप वर्ष में कितने दिन होते हैं?"
      },
      options: [
        { en: "365", hi: "365" },
        { en: "366", hi: "366" },
        { en: "364", hi: "364" },
        { en: "367", hi: "367" }
      ],
      correct: { en: "366", hi: "366" },
      explanation: {
        en: "A leap year has 366 days (February has 29 days).",
        hi: "लीप वर्ष में 366 दिन होते हैं (फरवरी में 29 दिन)।"
      }
    },
    {
      question: {
        en: "Which day comes before Sunday?",
        hi: "रविवार से पहले कौन सा दिन आता है?"
      },
      options: [
        { en: "Monday", hi: "सोमवार" },
        { en: "Friday", hi: "शुक्रवार" },
        { en: "Saturday", hi: "शनिवार" },
        { en: "Thursday", hi: "गुरुवार" }
      ],
      correct: { en: "Saturday", hi: "शनिवार" },
      explanation: {
        en: "Saturday comes before Sunday.",
        hi: "शनिवार, रविवार से पहले आता है।"
      }
    }
  ]
};

export default readCalendar;
