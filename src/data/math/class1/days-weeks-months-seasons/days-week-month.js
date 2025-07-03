const questions = [
  {
    question: {
      en: "How many days are there in a week?",
      hi: "एक सप्ताह में कितने दिन होते हैं?"
    },
    options: [
      { en: "5", hi: "5" },
      { en: "6", hi: "6" },
      { en: "7", hi: "7" },
      { en: "10", hi: "10" }
    ],
    correct: {
      en: "7",
      hi: "7"
    },
    explanation: {
      en: "A week has 7 days: Monday to Sunday.",
      hi: "सप्ताह में 7 दिन होते हैं: सोमवार से रविवार तक।"
    }
  },
  {
    question: {
      en: "Which day comes after Monday?",
      hi: "सोमवार के बाद कौन-सा दिन आता है?"
    },
    options: [
      { en: "Wednesday", hi: "बुधवार" },
      { en: "Tuesday", hi: "मंगलवार" },
      { en: "Sunday", hi: "रविवार" },
      { en: "Friday", hi: "शुक्रवार" }
    ],
    correct: {
      en: "Tuesday",
      hi: "मंगलवार"
    },
    explanation: {
      en: "Tuesday comes after Monday.",
      hi: "मंगलवार, सोमवार के बाद आता है।"
    }
  },
  {
    question: {
      en: "How many months are there in a year?",
      hi: "एक वर्ष में कितने महीने होते हैं?"
    },
    options: [
      { en: "10", hi: "10" },
      { en: "12", hi: "12" },
      { en: "11", hi: "11" },
      { en: "9", hi: "9" }
    ],
    correct: {
      en: "12",
      hi: "12"
    },
    explanation: {
      en: "There are 12 months in a year, from January to December.",
      hi: "एक वर्ष में 12 महीने होते हैं, जनवरी से दिसंबर तक।"
    }
  },
  {
    question: {
      en: "Which is the first month of the year?",
      hi: "वर्ष का पहला महीना कौन-सा है?"
    },
    options: [
      { en: "March", hi: "मार्च" },
      { en: "January", hi: "जनवरी" },
      { en: "December", hi: "दिसंबर" },
      { en: "April", hi: "अप्रैल" }
    ],
    correct: {
      en: "January",
      hi: "जनवरी"
    },
    explanation: {
      en: "The first month of the year is January.",
      hi: "वर्ष का पहला महीना जनवरी होता है।"
    }
  },
  {
    question: {
      en: "Which day is the holiday for most schools?",
      hi: "अधिकतर स्कूलों की छुट्टी किस दिन होती है?"
    },
    options: [
      { en: "Saturday", hi: "शनिवार" },
      { en: "Monday", hi: "सोमवार" },
      { en: "Sunday", hi: "रविवार" },
      { en: "Friday", hi: "शुक्रवार" }
    ],
    correct: {
      en: "Sunday",
      hi: "रविवार"
    },
    explanation: {
      en: "Most schools remain closed on Sunday.",
      hi: "अधिकतर स्कूल रविवार को बंद रहते हैं।"
    }
  },
  {
    question: {
      en: "Which month comes after March?",
      hi: "मार्च के बाद कौन-सा महीना आता है?"
    },
    options: [
      { en: "May", hi: "मई" },
      { en: "June", hi: "जून" },
      { en: "April", hi: "अप्रैल" },
      { en: "January", hi: "जनवरी" }
    ],
    correct: {
      en: "April",
      hi: "अप्रैल"
    },
    explanation: {
      en: "After March, the next month is April.",
      hi: "मार्च के बाद अप्रैल आता है।"
    }
  },
  {
    question: {
      en: "Which is the last day of the week?",
      hi: "सप्ताह का अंतिम दिन कौन-सा है?"
    },
    options: [
      { en: "Saturday", hi: "शनिवार" },
      { en: "Sunday", hi: "रविवार" },
      { en: "Monday", hi: "सोमवार" },
      { en: "Friday", hi: "शुक्रवार" }
    ],
    correct: {
      en: "Sunday",
      hi: "रविवार"
    },
    explanation: {
      en: "Sunday is the last day of the week.",
      hi: "रविवार सप्ताह का अंतिम दिन होता है।"
    }
  },
  {
    question: {
      en: "Which month has 28 or 29 days?",
      hi: "किस महीने में 28 या 29 दिन होते हैं?"
    },
    options: [
      { en: "February", hi: "फरवरी" },
      { en: "March", hi: "मार्च" },
      { en: "April", hi: "अप्रैल" },
      { en: "June", hi: "जून" }
    ],
    correct: {
      en: "February",
      hi: "फरवरी"
    },
    explanation: {
      en: "February has 28 days, and 29 in leap years.",
      hi: "फरवरी में 28 दिन होते हैं, और लीप वर्ष में 29।"
    }
  },
  {
    question: {
      en: "What do we call 7 days together?",
      hi: "7 दिनों को मिलाकर क्या कहते हैं?"
    },
    options: [
      { en: "Month", hi: "महीना" },
      { en: "Week", hi: "सप्ताह" },
      { en: "Year", hi: "वर्ष" },
      { en: "Hour", hi: "घंटा" }
    ],
    correct: {
      en: "Week",
      hi: "सप्ताह"
    },
    explanation: {
      en: "A week has 7 days.",
      hi: "एक सप्ताह में 7 दिन होते हैं।"
    }
  },
  {
    question: {
      en: "Which month comes before December?",
      hi: "दिसंबर से पहले कौन-सा महीना आता है?"
    },
    options: [
      { en: "January", hi: "जनवरी" },
      { en: "November", hi: "नवंबर" },
      { en: "October", hi: "अक्टूबर" },
      { en: "March", hi: "मार्च" }
    ],
    correct: {
      en: "November",
      hi: "नवंबर"
    },
    explanation: {
      en: "November comes right before December.",
      hi: "नवंबर, दिसंबर से पहले आता है।"
    }
  }
];

export default { questions };
