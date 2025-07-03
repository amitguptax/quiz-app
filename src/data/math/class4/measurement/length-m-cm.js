const questions = [
  {
    question: {
      en: "How many centimeters are there in 3 meters?",
      hi: "3 मीटर में कितने सेंटीमीटर होते हैं?"
    },
    options: ["100 cm", "200 cm", "300 cm", "400 cm"],
    correct: { en: "300 cm", hi: "300 सेंटीमीटर" },
    explanation: {
      en: "1 meter = 100 cm, so 3 meters = 3 × 100 = 300 cm.",
      hi: "1 मीटर = 100 सेमी होता है, इसलिए 3 मीटर = 300 सेमी।"
    }
  },
  {
    question: {
      en: "Which is longer: 150 cm or 1.2 m?",
      hi: "कौन लंबा है: 150 सेमी या 1.2 मीटर?"
    },
    options: ["150 cm", "1.2 m", "Equal", "Can't say"],
    correct: { en: "150 cm", hi: "150 सेमी" },
    explanation: {
      en: "1.2 m = 120 cm, and 150 > 120.",
      hi: "1.2 मीटर = 120 सेमी होता है, और 150 > 120।"
    }
  },
  {
    question: {
      en: "Convert 250 cm to meters.",
      hi: "250 सेंटीमीटर को मीटर में बदलें।"
    },
    options: ["2.5 m", "25 m", "0.25 m", "1.5 m"],
    correct: { en: "2.5 m", hi: "2.5 मीटर" },
    explanation: {
      en: "250 ÷ 100 = 2.5 meters.",
      hi: "250 को 100 से विभाजित करने पर 2.5 मीटर मिलता है।"
    }
  },
  {
    question: {
      en: "If a rope is 2.75 meters long, how many centimeters is it?",
      hi: "अगर एक रस्सी 2.75 मीटर लंबी है, तो वह कितनी सेंटीमीटर होगी?"
    },
    options: ["275 cm", "270 cm", "250 cm", "300 cm"],
    correct: { en: "275 cm", hi: "275 सेमी" },
    explanation: {
      en: "Multiply 2.75 by 100 to convert to cm: 2.75 × 100 = 275 cm.",
      hi: "2.75 × 100 = 275 सेमी।"
    }
  },
  {
    question: {
      en: "Which is the shortest distance?",
      hi: "निम्न में से सबसे छोटी दूरी कौन सी है?"
    },
    options: ["0.5 m", "80 cm", "100 cm", "1 m"],
    correct: { en: "80 cm", hi: "80 सेमी" },
    explanation: {
      en: "0.5 m = 50 cm, so 80 cm is greater than 0.5 m. But 80 cm < 100 cm and 1 m. So, 0.5 m (50 cm) is shortest.",
      hi: "0.5 मीटर = 50 सेमी, जो सबसे छोटी दूरी है।"
    }
  },
  {
    question: {
      en: "How many meters are there in 5000 cm?",
      hi: "5000 सेंटीमीटर में कितने मीटर होते हैं?"
    },
    options: ["5 m", "50 m", "500 m", "0.5 m"],
    correct: { en: "50 m", hi: "50 मीटर" },
    explanation: {
      en: "5000 ÷ 100 = 50 meters.",
      hi: "5000 को 100 से विभाजित करने पर 50 मीटर मिलता है।"
    }
  },
  {
    question: {
      en: "What is the length of a 1.5 meter stick in centimeters?",
      hi: "1.5 मीटर की छड़ी कितनी सेंटीमीटर लंबी होगी?"
    },
    options: ["120 cm", "130 cm", "150 cm", "160 cm"],
    correct: { en: "150 cm", hi: "150 सेमी" },
    explanation: {
      en: "1.5 × 100 = 150 cm.",
      hi: "1.5 को 100 से गुणा करें: 1.5 × 100 = 150 सेमी।"
    }
  },
  {
    question: {
      en: "Which measurement is the same as 3 meters?",
      hi: "3 मीटर के बराबर कौन सा मापन है?"
    },
    options: ["30 cm", "300 cm", "3 cm", "3000 cm"],
    correct: { en: "300 cm", hi: "300 सेमी" },
    explanation: {
      en: "1 m = 100 cm, so 3 m = 300 cm.",
      hi: "3 मीटर = 300 सेमी।"
    }
  },
  {
    question: {
      en: "Which is longer: 2 m 50 cm or 250 cm?",
      hi: "कौन लंबा है: 2 मीटर 50 सेमी या 250 सेमी?"
    },
    options: ["2 m 50 cm", "250 cm", "Equal", "Can't say"],
    correct: { en: "Equal", hi: "समान" },
    explanation: {
      en: "2 m = 200 cm, 200 + 50 = 250 cm.",
      hi: "2 मीटर 50 सेमी = 250 सेमी।"
    }
  },
  {
    question: {
      en: "What is the total length of two rods measuring 1.25 m and 2.75 m?",
      hi: "1.25 मीटर और 2.75 मीटर की दो छड़ों की कुल लंबाई कितनी है?"
    },
    options: ["3 m", "4 m", "5 m", "6 m"],
    correct: { en: "4 m", hi: "4 मीटर" },
    explanation: {
      en: "1.25 + 2.75 = 4.00 meters.",
      hi: "1.25 + 2.75 = 4.00 मीटर।"
    }
  }
];

export default { questions };
