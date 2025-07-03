const questions = [
  {
    question: {
      en: "Ravi goes to school at 8 o'clock and returns at 2 o'clock. How many hours is he at school?",
      hi: "रवि सुबह 8 बजे स्कूल जाता है और दोपहर 2 बजे लौटता है। वह स्कूल में कितने घंटे रहता है?"
    },
    options: [
      { en: "6 hours", hi: "6 घंटे" },
      { en: "5 hours", hi: "5 घंटे" },
      { en: "7 hours", hi: "7 घंटे" },
      { en: "8 hours", hi: "8 घंटे" }
    ],
    correct: { en: "6 hours", hi: "6 घंटे" },
    explanation: {
      en: "2 o'clock - 8 o'clock = 6 hours.",
      hi: "2 बजे - 8 बजे = 6 घंटे।"
    }
  },
  {
    question: {
      en: "Meena started her homework at 5 PM and finished at 6 PM. How much time did she take?",
      hi: "मीना ने 5 बजे शाम को होमवर्क शुरू किया और 6 बजे खत्म किया। उसने कितना समय लिया?"
    },
    options: [
      { en: "1 hour", hi: "1 घंटा" },
      { en: "2 hours", hi: "2 घंटे" },
      { en: "30 minutes", hi: "30 मिनट" },
      { en: "90 minutes", hi: "90 मिनट" }
    ],
    correct: { en: "1 hour", hi: "1 घंटा" },
    explanation: {
      en: "6 PM - 5 PM = 1 hour.",
      hi: "6 बजे - 5 बजे = 1 घंटा।"
    }
  },
  {
    question: {
      en: "If a movie starts at 3 PM and ends at 5 PM, how long is the movie?",
      hi: "यदि एक फिल्म 3 बजे शुरू होती है और 5 बजे समाप्त होती है, तो फिल्म कितनी लंबी है?"
    },
    options: [
      { en: "2 hours", hi: "2 घंटे" },
      { en: "1 hour", hi: "1 घंटा" },
      { en: "3 hours", hi: "3 घंटे" },
      { en: "90 minutes", hi: "90 मिनट" }
    ],
    correct: { en: "2 hours", hi: "2 घंटे" },
    explanation: {
      en: "5 PM - 3 PM = 2 hours.",
      hi: "5 बजे - 3 बजे = 2 घंटे।"
    }
  },
  {
    question: {
      en: "A train takes 3 hours to reach Delhi from Agra. If it starts at 10 AM, when does it reach?",
      hi: "एक ट्रेन आगरा से दिल्ली पहुंचने में 3 घंटे लेती है। अगर यह 10 बजे सुबह चलती है, तो यह कब पहुंचेगी?"
    },
    options: [
      { en: "1 PM", hi: "1 बजे दोपहर" },
      { en: "12 PM", hi: "12 बजे" },
      { en: "11 AM", hi: "11 बजे" },
      { en: "2 PM", hi: "2 बजे" }
    ],
    correct: { en: "1 PM", hi: "1 बजे दोपहर" },
    explanation: {
      en: "10 AM + 3 hours = 1 PM.",
      hi: "10 बजे + 3 घंटे = 1 बजे।"
    }
  },
  {
    question: {
      en: "Reena studied from 4 PM to 6 PM. How many hours did she study?",
      hi: "रीना ने 4 बजे शाम से 6 बजे तक पढ़ाई की। उसने कितने घंटे पढ़ाई की?"
    },
    options: [
      { en: "1 hour", hi: "1 घंटा" },
      { en: "3 hours", hi: "3 घंटे" },
      { en: "2 hours", hi: "2 घंटे" },
      { en: "4 hours", hi: "4 घंटे" }
    ],
    correct: { en: "2 hours", hi: "2 घंटे" },
    explanation: {
      en: "6 PM - 4 PM = 2 hours.",
      hi: "6 बजे - 4 बजे = 2 घंटे।"
    }
  },
  {
    question: {
      en: "If it is 11 AM now, what will be the time after 3 hours?",
      hi: "अगर अभी 11 बजे सुबह है, तो 3 घंटे बाद क्या समय होगा?"
    },
    options: [
      { en: "2 PM", hi: "2 बजे" },
      { en: "1 PM", hi: "1 बजे" },
      { en: "12 PM", hi: "12 बजे" },
      { en: "3 PM", hi: "3 बजे" }
    ],
    correct: { en: "2 PM", hi: "2 बजे" },
    explanation: {
      en: "11 AM + 3 hours = 2 PM.",
      hi: "11 बजे + 3 घंटे = 2 बजे।"
    }
  },
  {
    question: {
      en: "What is the time 2 hours after 6 PM?",
      hi: "6 बजे शाम के 2 घंटे बाद क्या समय होगा?"
    },
    options: [
      { en: "8 PM", hi: "8 बजे" },
      { en: "7 PM", hi: "7 बजे" },
      { en: "9 PM", hi: "9 बजे" },
      { en: "6 PM", hi: "6 बजे" }
    ],
    correct: { en: "8 PM", hi: "8 बजे" },
    explanation: {
      en: "6 PM + 2 hours = 8 PM.",
      hi: "6 बजे + 2 घंटे = 8 बजे।"
    }
  },
  {
    question: {
      en: "If a child sleeps from 9 PM to 7 AM, how many hours did they sleep?",
      hi: "यदि एक बच्चा रात 9 बजे से सुबह 7 बजे तक सोता है, तो उसने कितने घंटे नींद ली?"
    },
    options: [
      { en: "10 hours", hi: "10 घंटे" },
      { en: "8 hours", hi: "8 घंटे" },
      { en: "9 hours", hi: "9 घंटे" },
      { en: "11 hours", hi: "11 घंटे" }
    ],
    correct: { en: "10 hours", hi: "10 घंटे" },
    explanation: {
      en: "From 9 PM to midnight = 3 hours, plus 7 AM = total 10 hours.",
      hi: "रात 9 से 12 = 3 घंटे, फिर 12 से 7 = 7 घंटे, कुल = 10 घंटे।"
    }
  },
  {
    question: {
      en: "If breakfast is at 8 AM and lunch is at 1 PM, how many hours between?",
      hi: "अगर नाश्ता 8 बजे और दोपहर का खाना 1 बजे है, तो कितने घंटे का अंतर है?"
    },
    options: [
      { en: "5 hours", hi: "5 घंटे" },
      { en: "4 hours", hi: "4 घंटे" },
      { en: "6 hours", hi: "6 घंटे" },
      { en: "3 hours", hi: "3 घंटे" }
    ],
    correct: { en: "5 hours", hi: "5 घंटे" },
    explanation: {
      en: "1 PM - 8 AM = 5 hours.",
      hi: "1 बजे - 8 बजे = 5 घंटे।"
    }
  },
  {
    question: {
      en: "School ends at 3 PM. If it is now 12 PM, how many hours are left?",
      hi: "स्कूल 3 बजे समाप्त होता है। अगर अभी 12 बजे हैं, तो कितने घंटे शेष हैं?"
    },
    options: [
      { en: "3 hours", hi: "3 घंटे" },
      { en: "2 hours", hi: "2 घंटे" },
      { en: "1 hour", hi: "1 घंटा" },
      { en: "4 hours", hi: "4 घंटे" }
    ],
    correct: { en: "3 hours", hi: "3 घंटे" },
    explanation: {
      en: "3 PM - 12 PM = 3 hours.",
      hi: "3 बजे - 12 बजे = 3 घंटे।"
    }
  }
];

export default { questions };
