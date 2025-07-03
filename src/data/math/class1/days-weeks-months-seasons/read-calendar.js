const questions = [
  {
    question: {
      en: "How many days are there in the month of February (non-leap year)?",
      hi: "फरवरी महीने में कितने दिन होते हैं? (लीप वर्ष नहीं)"
    },
    options: [
      { en: "30", hi: "30" },
      { en: "31", hi: "31" },
      { en: "28", hi: "28" },
      { en: "29", hi: "29" }
    ],
    correct: {
      en: "28",
      hi: "28"
    },
    explanation: {
      en: "February has 28 days in a normal year.",
      hi: "सामान्य वर्ष में फरवरी में 28 दिन होते हैं।"
    }
  },
  {
    question: {
      en: "Which day comes after Saturday?",
      hi: "शनिवार के बाद कौन-सा दिन आता है?"
    },
    options: [
      { en: "Sunday", hi: "रविवार" },
      { en: "Monday", hi: "सोमवार" },
      { en: "Friday", hi: "शुक्रवार" },
      { en: "Tuesday", hi: "मंगलवार" }
    ],
    correct: {
      en: "Sunday",
      hi: "रविवार"
    },
    explanation: {
      en: "Sunday comes after Saturday in the week.",
      hi: "सप्ताह में शनिवार के बाद रविवार आता है।"
    }
  },
  {
    question: {
      en: "How many months have 31 days?",
      hi: "कितने महीनों में 31 दिन होते हैं?"
    },
    options: [
      { en: "4", hi: "4" },
      { en: "6", hi: "6" },
      { en: "7", hi: "7" },
      { en: "5", hi: "5" }
    ],
    correct: {
      en: "7",
      hi: "7"
    },
    explanation: {
      en: "There are 7 months with 31 days: Jan, Mar, May, Jul, Aug, Oct, Dec.",
      hi: "जनवरी, मार्च, मई, जुलाई, अगस्त, अक्टूबर और दिसंबर — इन 7 महीनों में 31 दिन होते हैं।"
    }
  },
  {
    question: {
      en: "Which month comes before August?",
      hi: "अगस्त से पहले कौन-सा महीना आता है?"
    },
    options: [
      { en: "June", hi: "जून" },
      { en: "September", hi: "सितंबर" },
      { en: "July", hi: "जुलाई" },
      { en: "May", hi: "मई" }
    ],
    correct: {
      en: "July",
      hi: "जुलाई"
    },
    explanation: {
      en: "July comes just before August.",
      hi: "जुलाई, अगस्त से पहले आता है।"
    }
  },
  {
    question: {
      en: "How many days are there in the month of April?",
      hi: "अप्रैल महीने में कितने दिन होते हैं?"
    },
    options: [
      { en: "31", hi: "31" },
      { en: "30", hi: "30" },
      { en: "29", hi: "29" },
      { en: "28", hi: "28" }
    ],
    correct: {
      en: "30",
      hi: "30"
    },
    explanation: {
      en: "April always has 30 days.",
      hi: "अप्रैल में हमेशा 30 दिन होते हैं।"
    }
  },
  {
    question: {
      en: "Which day is the first of the week?",
      hi: "सप्ताह का पहला दिन कौन-सा होता है?"
    },
    options: [
      { en: "Sunday", hi: "रविवार" },
      { en: "Monday", hi: "सोमवार" },
      { en: "Saturday", hi: "शनिवार" },
      { en: "Tuesday", hi: "मंगलवार" }
    ],
    correct: {
      en: "Monday",
      hi: "सोमवार"
    },
    explanation: {
      en: "Monday is usually considered the first day of the week in calendars.",
      hi: "अधिकतर कैलेंडर में सोमवार को सप्ताह का पहला दिन माना जाता है।"
    }
  },
  {
    question: {
      en: "Which is the last month of the year?",
      hi: "वर्ष का अंतिम महीना कौन-सा है?"
    },
    options: [
      { en: "November", hi: "नवंबर" },
      { en: "December", hi: "दिसंबर" },
      { en: "October", hi: "अक्टूबर" },
      { en: "January", hi: "जनवरी" }
    ],
    correct: {
      en: "December",
      hi: "दिसंबर"
    },
    explanation: {
      en: "December is the 12th and last month of the year.",
      hi: "दिसंबर वर्ष का 12वां और अंतिम महीना होता है।"
    }
  },
  {
    question: {
      en: "How many days are there in a leap year February?",
      hi: "लीप वर्ष की फरवरी में कितने दिन होते हैं?"
    },
    options: [
      { en: "28", hi: "28" },
      { en: "29", hi: "29" },
      { en: "30", hi: "30" },
      { en: "27", hi: "27" }
    ],
    correct: {
      en: "29",
      hi: "29"
    },
    explanation: {
      en: "Leap year February has 29 days.",
      hi: "लीप वर्ष में फरवरी में 29 दिन होते हैं।"
    }
  },
  {
    question: {
      en: "Which day comes just before Friday?",
      hi: "शुक्रवार से ठीक पहले कौन-सा दिन आता है?"
    },
    options: [
      { en: "Thursday", hi: "गुरुवार" },
      { en: "Wednesday", hi: "बुधवार" },
      { en: "Saturday", hi: "शनिवार" },
      { en: "Sunday", hi: "रविवार" }
    ],
    correct: {
      en: "Thursday",
      hi: "गुरुवार"
    },
    explanation: {
      en: "Thursday comes right before Friday.",
      hi: "गुरुवार, शुक्रवार से ठीक पहले आता है।"
    }
  },
  {
    question: {
      en: "Which months have only 30 days?",
      hi: "किन महीनों में केवल 30 दिन होते हैं?"
    },
    options: [
      { en: "April, June, September, November", hi: "अप्रैल, जून, सितंबर, नवंबर" },
      { en: "January, March", hi: "जनवरी, मार्च" },
      { en: "February, May", hi: "फरवरी, मई" },
      { en: "July, August", hi: "जुलाई, अगस्त" }
    ],
    correct: {
      en: "April, June, September, November",
      hi: "अप्रैल, जून, सितंबर, नवंबर"
    },
    explanation: {
      en: "These 4 months always have 30 days.",
      hi: "अप्रैल, जून, सितंबर और नवंबर में हमेशा 30 दिन होते हैं।"
    }
  }
];

export default { questions };
