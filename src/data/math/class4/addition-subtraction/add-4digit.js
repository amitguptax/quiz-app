const add4digit = {
  label: {
    en: "Add 4‑digit numbers with/without carry",
    hi: "4‑अंकीय संयोजन जोड़ें (पूर्ति सहित/बिना)"
  },
  questions: [
    {
      question: {
        en: "What is 2345 + 1234?",
        hi: "2345 + 1234 का योग कितना है?"
      },
      options: [
        { en: "3579", hi: "3579" },
        { en: "3589", hi: "3589" },
        { en: "3599", hi: "3599" },
        { en: "3600", hi: "3600" }
      ],
      correct: { en: "3579", hi: "3579" },
      explanation: {
        en: "2345 + 1234 = 3579. Add units, tens, hundreds and thousands.",
        hi: "2345 + 1234 = 3579। इकाई, दहाई, सैकड़ा और हजार जोड़ें।"
      }
    },
    {
      question: {
        en: "Find the sum: 4567 + 3210",
        hi: "योग ज्ञात करें: 4567 + 3210"
      },
      options: [
        { en: "7777", hi: "7777" },
        { en: "7787", hi: "7787" },
        { en: "7767", hi: "7767" },
        { en: "7797", hi: "7797" }
      ],
      correct: { en: "7777", hi: "7777" },
      explanation: {
        en: "4567 + 3210 = 7777",
        hi: "4567 + 3210 = 7777"
      }
    },
    {
      question: {
        en: "Add 1023 and 3001",
        hi: "1023 और 3001 को जोड़ें"
      },
      options: [
        { en: "4024", hi: "4024" },
        { en: "4034", hi: "4034" },
        { en: "4044", hi: "4044" },
        { en: "4014", hi: "4014" }
      ],
      correct: { en: "4024", hi: "4024" },
      explanation: {
        en: "1023 + 3001 = 4024",
        hi: "1023 + 3001 = 4024"
      }
    },
    {
      question: {
        en: "What is the result of 9999 + 1?",
        hi: "9999 + 1 का परिणाम क्या है?"
      },
      options: [
        { en: "10000", hi: "10000" },
        { en: "9998", hi: "9998" },
        { en: "10001", hi: "10001" },
        { en: "10010", hi: "10010" }
      ],
      correct: { en: "10000", hi: "10000" },
      explanation: {
        en: "9999 + 1 = 10000. Carry over occurs in all digits.",
        hi: "9999 + 1 = 10000। सभी अंकों में पूर्ति होती है।"
      }
    },
    {
      question: {
        en: "Find the total of 2000 and 6000",
        hi: "2000 और 6000 का कुल योग कितना है?"
      },
      options: [
        { en: "8000", hi: "8000" },
        { en: "7000", hi: "7000" },
        { en: "6000", hi: "6000" },
        { en: "9000", hi: "9000" }
      ],
      correct: { en: "8000", hi: "8000" },
      explanation: {
        en: "2000 + 6000 = 8000",
        hi: "2000 + 6000 = 8000"
      }
    },
    {
      question: {
        en: "Add: 1234 + 4321",
        hi: "जोड़ें: 1234 + 4321"
      },
      options: [
        { en: "5555", hi: "5555" },
        { en: "5655", hi: "5655" },
        { en: "5535", hi: "5535" },
        { en: "5432", hi: "5432" }
      ],
      correct: { en: "5555", hi: "5555" },
      explanation: {
        en: "1234 + 4321 = 5555",
        hi: "1234 + 4321 = 5555"
      }
    },
    {
      question: {
        en: "Sum of 1100 and 990",
        hi: "1100 और 990 का योग?"
      },
      options: [
        { en: "2090", hi: "2090" },
        { en: "2000", hi: "2000" },
        { en: "1990", hi: "1990" },
        { en: "1890", hi: "1890" }
      ],
      correct: { en: "2090", hi: "2090" },
      explanation: {
        en: "1100 + 990 = 2090",
        hi: "1100 + 990 = 2090"
      }
    },
    {
      question: {
        en: "Add the numbers: 4004 + 1001",
        hi: "संख्याओं को जोड़ें: 4004 + 1001"
      },
      options: [
        { en: "5005", hi: "5005" },
        { en: "6005", hi: "6005" },
        { en: "7005", hi: "7005" },
        { en: "5050", hi: "5050" }
      ],
      correct: { en: "5005", hi: "5005" },
      explanation: {
        en: "4004 + 1001 = 5005",
        hi: "4004 + 1001 = 5005"
      }
    },
    {
      question: {
        en: "Find: 2987 + 7013",
        hi: "2987 + 7013 ज्ञात करें"
      },
      options: [
        { en: "10000", hi: "10000" },
        { en: "9999", hi: "9999" },
        { en: "9980", hi: "9980" },
        { en: "10010", hi: "10010" }
      ],
      correct: { en: "10000", hi: "10000" },
      explanation: {
        en: "2987 + 7013 = 10000",
        hi: "2987 + 7013 = 10000"
      }
    },
    {
      question: {
        en: "What is 3567 + 2433?",
        hi: "3567 + 2433 कितना है?"
      },
      options: [
        { en: "6000", hi: "6000" },
        { en: "5999", hi: "5999" },
        { en: "6010", hi: "6010" },
        { en: "5980", hi: "5980" }
      ],
      correct: { en: "6000", hi: "6000" },
      explanation: {
        en: "3567 + 2433 = 6000",
        hi: "3567 + 2433 = 6000"
      }
    }
  ]
};

export default add4digit;
