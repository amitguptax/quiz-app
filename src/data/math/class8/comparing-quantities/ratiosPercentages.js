const ratiosPercentages = [
  {
    id: 1,
    question: {
      en: "What is the ratio of 2 kg to 500 g?",
      hi: "2 किलोग्राम और 500 ग्राम का अनुपात क्या है?"
    },
    options: ["4:1", "2:5", "5:2", "1:4"],
    answer: "4:1",
    explanation: {
      en: "2 kg = 2000 g, so ratio = 2000:500 = 4:1",
      hi: "2 किग्रा = 2000 ग्राम, तो अनुपात = 2000:500 = 4:1"
    }
  },
  {
    id: 2,
    question: {
      en: "Find the percentage of 25 out of 200.",
      hi: "200 में से 25 का प्रतिशत ज्ञात करें।"
    },
    options: ["12.5%", "10%", "15%", "20%"],
    answer: "12.5%",
    explanation: {
      en: "(25/200) × 100 = 12.5%",
      hi: "(25/200) × 100 = 12.5%"
    }
  },
  {
    id: 3,
    question: {
      en: "In a class, 12 boys and 8 girls. What is the ratio of girls to total students?",
      hi: "एक कक्षा में 12 लड़के और 8 लड़कियाँ हैं। कुल छात्रों में लड़कियों का अनुपात क्या है?"
    },
    options: ["8:20", "2:5", "3:5", "4:5"],
    answer: "2:5",
    explanation: {
      en: "Total = 12 + 8 = 20, Ratio = 8:20 = 2:5",
      hi: "कुल = 12 + 8 = 20, अनुपात = 8:20 = 2:5"
    }
  },
  {
    id: 4,
    question: {
      en: "50% of 300 is:",
      hi: "300 का 50% कितना है?"
    },
    options: ["100", "200", "150", "250"],
    answer: "150",
    explanation: {
      en: "50% of 300 = (50/100) × 300 = 150",
      hi: "50% का 300 = (50/100) × 300 = 150"
    }
  },
  {
    id: 5,
    question: {
      en: "Which is equivalent to 25%?",
      hi: "25% के बराबर कौन है?"
    },
    options: ["1/4", "1/3", "3/4", "1/5"],
    answer: "1/4",
    explanation: {
      en: "25% = 25/100 = 1/4",
      hi: "25% = 25/100 = 1/4"
    }
  },
  {
    id: 6,
    question: {
      en: "Convert 0.75 into percentage.",
      hi: "0.75 को प्रतिशत में बदलें।"
    },
    options: ["75%", "7.5%", "0.75%", "750%"],
    answer: "75%",
    explanation: {
      en: "0.75 × 100 = 75%",
      hi: "0.75 × 100 = 75%"
    }
  },
  {
    id: 7,
    question: {
      en: "If the ratio of boys to girls is 3:2, what percentage are boys?",
      hi: "अगर लड़कों और लड़कियों का अनुपात 3:2 है, तो लड़के कितने प्रतिशत हैं?"
    },
    options: ["40%", "50%", "60%", "30%"],
    answer: "60%",
    explanation: {
      en: "Total = 3+2 = 5, Boys = (3/5) × 100 = 60%",
      hi: "कुल = 5, लड़के = (3/5) × 100 = 60%"
    }
  },
  {
    id: 8,
    question: {
      en: "Increase 200 by 20%.",
      hi: "200 को 20% से बढ़ाएँ।"
    },
    options: ["220", "210", "230", "240"],
    answer: "240",
    explanation: {
      en: "200 + 20% of 200 = 200 + 40 = 240",
      hi: "200 + 20% का 200 = 240"
    }
  },
  {
    id: 9,
    question: {
      en: "Reduce 180 by 25%.",
      hi: "180 को 25% से घटाएँ।"
    },
    options: ["135", "150", "145", "160"],
    answer: "135",
    explanation: {
      en: "25% of 180 = 45, 180 - 45 = 135",
      hi: "25% का 180 = 45, तो 180 - 45 = 135"
    }
  },
  {
    id: 10,
    question: {
      en: "Which is not a correct percentage to fraction match?",
      hi: "निम्न में से कौन-सा प्रतिशत और भिन्न का मिलान सही नहीं है?"
    },
    options: ["50% = 1/2", "75% = 3/4", "10% = 1/10", "33% = 1/2"],
    answer: "33% = 1/2",
    explanation: {
      en: "33% ≠ 1/2, but approximately 1/3",
      hi: "33% लगभग 1/3 होता है, न कि 1/2"
    }
  }
];

export default ratiosPercentages;
