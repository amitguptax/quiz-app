const alphabetSeries = [
  {
    id: 1,
    question: {
      en: "What comes next: A, C, F, J, O, ?",
      hi: "क्या अगला अक्षर होगा: A, C, F, J, O, ?"
    },
    options: {
      en: ["U", "V", "T", "S"],
      hi: ["यू", "वी", "टी", "एस"]
    },
    correctAnswer: "U"
  },
  {
    id: 2,
    question: {
      en: "What is the next letter in the series: Z, X, V, T, ?",
      hi: "श्रृंखला में अगला अक्षर क्या होगा: Z, X, V, T, ?"
    },
    options: {
      en: ["R", "S", "U", "Q"],
      hi: ["आर", "एस", "यू", "क्यू"]
    },
    correctAnswer: "R"
  },
  {
    id: 3,
    question: {
      en: "Complete the series: A, D, G, J, ?",
      hi: "श्रृंखला को पूरा करें: A, D, G, J, ?"
    },
    options: {
      en: ["K", "L", "M", "N"],
      hi: ["के", "एल", "एम", "एन"]
    },
    correctAnswer: "M"
  },
  {
    id: 4,
    question: {
      en: "Find the next in series: B, D, G, K, ?",
      hi: "श्रृंखला में अगला अक्षर खोजें: B, D, G, K, ?"
    },
    options: {
      en: ["M", "N", "P", "Q"],
      hi: ["एम", "एन", "पी", "क्यू"]
    },
    correctAnswer: "P"
  },
  {
    id: 5,
    question: {
      en: "What comes next: C, F, I, L, ?",
      hi: "क्या अगला अक्षर होगा: C, F, I, L, ?"
    },
    options: {
      en: ["M", "O", "N", "Q"],
      hi: ["एम", "ओ", "एन", "क्यू"]
    },
    correctAnswer: "O"
  },
  {
    id: 6,
    question: {
      en: "Find the missing letter: A, E, I, M, ?",
      hi: "गुम अक्षर खोजें: A, E, I, M, ?"
    },
    options: {
      en: ["N", "Q", "S", "U"],
      hi: ["एन", "क्यू", "एस", "यू"]
    },
    correctAnswer: "Q"
  },
  {
    id: 7,
    question: {
      en: "Identify the next letter: Z, W, T, Q, ?",
      hi: "अगला अक्षर पहचानें: Z, W, T, Q, ?"
    },
    options: {
      en: ["M", "N", "L", "K"],
      hi: ["एम", "एन", "एल", "के"]
    },
    correctAnswer: "N"
  },
  {
    id: 8,
    question: {
      en: "Complete the pattern: M, N, P, S, ?",
      hi: "पैटर्न पूरा करें: M, N, P, S, ?"
    },
    options: {
      en: ["W", "T", "U", "V"],
      hi: ["डब्ल्यू", "टी", "यू", "वी"]
    },
    correctAnswer: "W"
  },
  {
    id: 9,
    question: {
      en: "Which letter comes next: D, H, L, P, ?",
      hi: "अगला अक्षर कौन सा है: D, H, L, P, ?"
    },
    options: {
      en: ["R", "S", "T", "U"],
      hi: ["आर", "एस", "टी", "यू"]
    },
    correctAnswer: "T"
  },
  {
    id: 10,
    question: {
      en: "Next letter: A, Z, Y, X, ?",
      hi: "अगला अक्षर: A, Z, Y, X, ?"
    },
    options: {
      en: ["W", "V", "U", "T"],
      hi: ["डब्ल्यू", "वी", "यू", "टी"]
    },
    correctAnswer: "W"
  },

  // Questions 11–50 (Generic pattern for now)
  ...Array.from({ length: 40 }, (_, i) => ({
    id: i + 11,
    question: {
      en: `What comes next in the series pattern #${i + 11}?`,
      hi: `श्रृंखला पैटर्न #${i + 11} में अगला क्या आएगा?`
    },
    options: {
      en: ["Option A", "Option B", "Option C", "Option D"],
      hi: ["विकल्प A", "विकल्प B", "विकल्प C", "विकल्प D"]
    },
    correctAnswer: "Option A"
  }))
];

export default alphabetSeries;
