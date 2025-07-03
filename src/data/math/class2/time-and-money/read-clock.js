const questions = [
  {
    question: {
      en: "What time is shown when the hour hand is at 3?",
      hi: "जब घंटे की सुई 3 पर हो, तो समय क्या होता है?"
    },
    options: [
      { en: "3 o'clock", hi: "3 बजे" },
      { en: "6 o'clock", hi: "6 बजे" },
      { en: "9 o'clock", hi: "9 बजे" },
      { en: "12 o'clock", hi: "12 बजे" }
    ],
    correct: { en: "3 o'clock", hi: "3 बजे" },
    explanation: {
      en: "If the hour hand is at 3, it is 3 o'clock.",
      hi: "यदि घंटे की सुई 3 पर है, तो समय 3 बजा है।"
    }
  },
  {
    question: {
      en: "If the hour hand points to 7, what time is it?",
      hi: "यदि घंटे की सुई 7 पर है, तो समय क्या है?"
    },
    options: [
      { en: "6 o'clock", hi: "6 बजे" },
      { en: "7 o'clock", hi: "7 बजे" },
      { en: "8 o'clock", hi: "8 बजे" },
      { en: "9 o'clock", hi: "9 बजे" }
    ],
    correct: { en: "7 o'clock", hi: "7 बजे" },
    explanation: {
      en: "The hour hand at 7 means it is 7 o'clock.",
      hi: "घंटे की सुई 7 पर हो तो समय 7 बजा होता है।"
    }
  },
  {
    question: {
      en: "When the hour hand is at 12, what time is it?",
      hi: "जब घंटे की सुई 12 पर हो, तो समय क्या होता है?"
    },
    options: [
      { en: "12 o'clock", hi: "12 बजे" },
      { en: "6 o'clock", hi: "6 बजे" },
      { en: "3 o'clock", hi: "3 बजे" },
      { en: "9 o'clock", hi: "9 बजे" }
    ],
    correct: { en: "12 o'clock", hi: "12 बजे" },
    explanation: {
      en: "12 on the clock means 12 o'clock.",
      hi: "घंटी की सुई 12 पर हो तो समय 12 बजे होता है।"
    }
  },
  {
    question: {
      en: "If the hour hand is at 6, what time is it?",
      hi: "यदि घंटे की सुई 6 पर है, तो समय क्या है?"
    },
    options: [
      { en: "5 o'clock", hi: "5 बजे" },
      { en: "6 o'clock", hi: "6 बजे" },
      { en: "7 o'clock", hi: "7 बजे" },
      { en: "8 o'clock", hi: "8 बजे" }
    ],
    correct: { en: "6 o'clock", hi: "6 बजे" },
    explanation: {
      en: "Hour hand at 6 means 6 o'clock.",
      hi: "घंटे की सुई 6 पर हो तो 6 बजा होता है।"
    }
  },
  {
    question: {
      en: "What time is shown when the hour hand is pointing at 9?",
      hi: "जब घंटे की सुई 9 पर हो, तो समय क्या होता है?"
    },
    options: [
      { en: "9 o'clock", hi: "9 बजे" },
      { en: "10 o'clock", hi: "10 बजे" },
      { en: "8 o'clock", hi: "8 बजे" },
      { en: "11 o'clock", hi: "11 बजे" }
    ],
    correct: { en: "9 o'clock", hi: "9 बजे" },
    explanation: {
      en: "Hour hand at 9 means it is 9 o'clock.",
      hi: "घंटे की सुई 9 पर हो तो समय 9 बजा होता है।"
    }
  },
  {
    question: {
      en: "If the hour hand is at 1, what time is it?",
      hi: "यदि घंटे की सुई 1 पर है, तो समय क्या है?"
    },
    options: [
      { en: "1 o'clock", hi: "1 बजे" },
      { en: "2 o'clock", hi: "2 बजे" },
      { en: "3 o'clock", hi: "3 बजे" },
      { en: "4 o'clock", hi: "4 बजे" }
    ],
    correct: { en: "1 o'clock", hi: "1 बजे" },
    explanation: {
      en: "The hour hand at 1 means it is 1 o'clock.",
      hi: "घंटे की सुई 1 पर हो तो 1 बजा होता है।"
    }
  },
  {
    question: {
      en: "What is the time if the hour hand is on 5?",
      hi: "अगर घंटे की सुई 5 पर हो, तो समय क्या है?"
    },
    options: [
      { en: "4 o'clock", hi: "4 बजे" },
      { en: "5 o'clock", hi: "5 बजे" },
      { en: "6 o'clock", hi: "6 बजे" },
      { en: "7 o'clock", hi: "7 बजे" }
    ],
    correct: { en: "5 o'clock", hi: "5 बजे" },
    explanation: {
      en: "The hour hand on 5 means it is 5 o'clock.",
      hi: "घंटे की सुई 5 पर हो तो 5 बजा होता है।"
    }
  },
  {
    question: {
      en: "When the hour hand is at 10, what is the time?",
      hi: "जब घंटे की सुई 10 पर हो, तो समय क्या है?"
    },
    options: [
      { en: "10 o'clock", hi: "10 बजे" },
      { en: "9 o'clock", hi: "9 बजे" },
      { en: "8 o'clock", hi: "8 बजे" },
      { en: "11 o'clock", hi: "11 बजे" }
    ],
    correct: { en: "10 o'clock", hi: "10 बजे" },
    explanation: {
      en: "If hour hand is at 10, the time is 10 o'clock.",
      hi: "घंटे की सुई 10 पर हो तो समय 10 बजे होता है।"
    }
  },
  {
    question: {
      en: "What time is it if the hour hand is pointing to 11?",
      hi: "अगर घंटे की सुई 11 पर हो, तो समय क्या है?"
    },
    options: [
      { en: "11 o'clock", hi: "11 बजे" },
      { en: "12 o'clock", hi: "12 बजे" },
      { en: "10 o'clock", hi: "10 बजे" },
      { en: "9 o'clock", hi: "9 बजे" }
    ],
    correct: { en: "11 o'clock", hi: "11 बजे" },
    explanation: {
      en: "Hour hand at 11 means 11 o'clock.",
      hi: "घंटे की सुई 11 पर हो तो 11 बजे होते हैं।"
    }
  },
  {
    question: {
      en: "If the hour hand is pointing at 2, what is the time?",
      hi: "यदि घंटे की सुई 2 पर हो, तो समय क्या है?"
    },
    options: [
      { en: "1 o'clock", hi: "1 बजे" },
      { en: "2 o'clock", hi: "2 बजे" },
      { en: "3 o'clock", hi: "3 बजे" },
      { en: "4 o'clock", hi: "4 बजे" }
    ],
    correct: { en: "2 o'clock", hi: "2 बजे" },
    explanation: {
      en: "2 on the clock means 2 o'clock.",
      hi: "घंटे की सुई 2 पर हो तो समय 2 बजा होता है।"
    }
  }
];

export default { questions };
