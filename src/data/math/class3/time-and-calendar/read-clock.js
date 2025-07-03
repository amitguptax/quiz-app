const readClock = {
  label: {
    en: "Read analogue & digital clocks",
    hi: "एनालॉग और डिजिटल घड़ी पढ़ें",
  },
  questions: [
    {
      question: {
        en: "What time is shown on the clock if the hour hand is on 3 and the minute hand is on 12?",
        hi: "यदि घंटे की सुई 3 पर और मिनट की सुई 12 पर हो, तो समय क्या होगा?",
      },
      options: [
        { en: "3:00", hi: "3:00" },
        { en: "12:15", hi: "12:15" },
        { en: "6:00", hi: "6:00" },
        { en: "9:30", hi: "9:30" },
      ],
      correct: { en: "3:00", hi: "3:00" },
      explanation: {
        en: "When the minute hand is on 12 and the hour hand is on 3, the time is exactly 3 o'clock.",
        hi: "जब मिनट की सुई 12 पर और घंटे की सुई 3 पर होती है, तो समय ठीक 3 बजता है।",
      },
    },
    {
      question: {
        en: "What does the digital time 7:30 represent?",
        hi: "डिजिटल समय 7:30 का क्या अर्थ है?",
      },
      options: [
        { en: "7 o'clock", hi: "7 बजे" },
        { en: "7:30", hi: "7:30" },
        { en: "8 o'clock", hi: "8 बजे" },
        { en: "6:30", hi: "6:30" },
      ],
      correct: { en: "7:30", hi: "7:30" },
      explanation: {
        en: "The digital time 7:30 means half past seven.",
        hi: "डिजिटल समय 7:30 का मतलब साढ़े सात बजे होता है।",
      },
    },
    {
      question: {
        en: "If the clock shows 6:15, where is the minute hand?",
        hi: "यदि घड़ी 6:15 दिखा रही हो, तो मिनट की सुई कहाँ होगी?",
      },
      options: [
        { en: "At 3", hi: "3 पर" },
        { en: "At 6", hi: "6 पर" },
        { en: "At 9", hi: "9 पर" },
        { en: "At 12", hi: "12 पर" },
      ],
      correct: { en: "At 3", hi: "3 पर" },
      explanation: {
        en: "15 minutes past the hour means the minute hand is on 3.",
        hi: "15 मिनट होने का मतलब है मिनट की सुई 3 पर होती है।",
      },
    },
    {
      question: {
        en: "How many minutes are there in one hour?",
        hi: "एक घंटे में कितने मिनट होते हैं?",
      },
      options: [
        { en: "30", hi: "30" },
        { en: "45", hi: "45" },
        { en: "60", hi: "60" },
        { en: "100", hi: "100" },
      ],
      correct: { en: "60", hi: "60" },
      explanation: {
        en: "Each hour has 60 minutes.",
        hi: "हर घंटे में 60 मिनट होते हैं।",
      },
    },
    {
      question: {
        en: "If it's 9:45, how many minutes to 10?",
        hi: "यदि समय 9:45 है, तो 10 बजे होने में कितने मिनट शेष हैं?",
      },
      options: [
        { en: "15 minutes", hi: "15 मिनट" },
        { en: "20 minutes", hi: "20 मिनट" },
        { en: "10 minutes", hi: "10 मिनट" },
        { en: "5 minutes", hi: "5 मिनट" },
      ],
      correct: { en: "15 minutes", hi: "15 मिनट" },
      explanation: {
        en: "From 9:45 to 10:00, there are 15 minutes.",
        hi: "9:45 से 10:00 तक 15 मिनट होते हैं।",
      },
    },
    {
      question: {
        en: "What time will it be 1 hour after 2:30?",
        hi: "2:30 के 1 घंटे बाद क्या समय होगा?",
      },
      options: [
        { en: "3:30", hi: "3:30" },
        { en: "2:45", hi: "2:45" },
        { en: "4:30", hi: "4:30" },
        { en: "1:30", hi: "1:30" },
      ],
      correct: { en: "3:30", hi: "3:30" },
      explanation: {
        en: "Adding 1 hour to 2:30 gives 3:30.",
        hi: "2:30 में 1 घंटा जोड़ने पर 3:30 होता है।",
      },
    },
    {
      question: {
        en: "If the hour hand is between 4 and 5 and the minute hand is on 6, what time is it?",
        hi: "यदि घंटे की सुई 4 और 5 के बीच है और मिनट की सुई 6 पर है, तो समय क्या है?",
      },
      options: [
        { en: "4:30", hi: "4:30" },
        { en: "5:30", hi: "5:30" },
        { en: "6:00", hi: "6:00" },
        { en: "4:00", hi: "4:00" },
      ],
      correct: { en: "4:30", hi: "4:30" },
      explanation: {
        en: "When the minute hand is on 6, it's 30 minutes. Hour hand between 4 and 5 means 4:30.",
        hi: "मिनट की सुई 6 पर यानी 30 मिनट और घंटे की सुई 4 व 5 के बीच हो तो समय 4:30 होता है।",
      },
    },
    {
      question: {
        en: "What is the time if the digital clock reads 12:00 noon?",
        hi: "यदि डिजिटल घड़ी 12:00 दोपहर दिखाती है, तो समय क्या है?",
      },
      options: [
        { en: "Midnight", hi: "मध्यरात्रि" },
        { en: "Afternoon", hi: "दोपहर" },
        { en: "Morning", hi: "सुबह" },
        { en: "Evening", hi: "शाम" },
      ],
      correct: { en: "Afternoon", hi: "दोपहर" },
      explanation: {
        en: "12:00 noon is midday or afternoon time.",
        hi: "12:00 दोपहर को दोपहर का समय माना जाता है।",
      },
    },
    {
      question: {
        en: "What time is shown when both hands of the clock are at 12?",
        hi: "जब घड़ी की दोनों सुइयाँ 12 पर हों तो समय क्या होता है?",
      },
      options: [
        { en: "6:00", hi: "6:00" },
        { en: "12:00", hi: "12:00" },
        { en: "3:00", hi: "3:00" },
        { en: "9:00", hi: "9:00" },
      ],
      correct: { en: "12:00", hi: "12:00" },
      explanation: {
        en: "When both hands are on 12, the time is 12:00.",
        hi: "जब दोनों सुइयाँ 12 पर होती हैं, तब समय 12:00 होता है।",
      },
    },
    {
      question: {
        en: "What time is it if it’s half past 8?",
        hi: "यदि समय 'आठ बजकर तीस मिनट' है तो घड़ी में क्या समय होगा?",
      },
      options: [
        { en: "8:00", hi: "8:00" },
        { en: "8:15", hi: "8:15" },
        { en: "8:30", hi: "8:30" },
        { en: "9:00", hi: "9:00" },
      ],
      correct: { en: "8:30", hi: "8:30" },
      explanation: {
        en: "Half past 8 means 30 minutes after 8:00, which is 8:30.",
        hi: "'आठ बजकर तीस मिनट' का मतलब है 8:30।",
      },
    },
  ],
};

export default readClock;
