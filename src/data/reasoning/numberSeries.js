const numberSeries = [
  {
    id: 1,
    question: {
      en: "What comes next in the series: 2, 4, 8, 16, ?",
      hi: "श्रृंखला में अगली संख्या क्या होगी: 2, 4, 8, 16, ?"
    },
    options: {
      en: ["18", "32", "20", "24"],
      hi: ["18", "32", "20", "24"]
    },
    correctAnswer: "32"
  },
  {
    id: 2,
    question: {
      en: "1, 8, 27, 64, ?",
      hi: "1, 8, 27, 64, ? के बाद क्या आएगा?"
    },
    options: {
      en: ["256", "125", "40", "43"],
      hi: ["256", "125", "40", "43"]
    },
    correctAnswer: "125"
  },
  // Add more questions in same format up to 50
];

export default numberSeries;
