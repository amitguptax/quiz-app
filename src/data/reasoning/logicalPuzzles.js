const logicalPuzzles = [
  {
    id: 1,
    question: {
      en: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely:",
      hi: "यदि सभी Bloops, Razzies हैं और सभी Razzies, Lazzies हैं, तो सभी Bloops निश्चित रूप से क्या हैं?"
    },
    options: {
      en: ["Lazzies", "Razzies", "Bloops", "None of the above"],
      hi: ["Lazzies", "Razzies", "Bloops", "इनमें से कोई नहीं"]
    },
    correctAnswer: "Lazzies"
  },
  {
    id: 2,
    question: {
      en: "If two typists can type two pages in two minutes, how many typists will it take to type 18 pages in six minutes?",
      hi: "यदि दो टाइपिस्ट दो मिनट में दो पेज टाइप कर सकते हैं, तो छह मिनट में 18 पेज टाइप करने के लिए कितने टाइपिस्ट लगेंगे?"
    },
    options: {
      en: ["3", "4", "6", "9"],
      hi: ["3", "4", "6", "9"]
    },
    correctAnswer: "6"
  },
  {
    id: 3,
    question: {
      en: "A clock shows 3:15. What is the angle between the hour and minute hands?",
      hi: "घड़ी में 3:15 बजे क्या कोण बनता है घंटे और मिनट की सुई के बीच?"
    },
    options: {
      en: ["0°", "7.5°", "15°", "30°"],
      hi: ["0°", "7.5°", "15°", "30°"]
    },
    correctAnswer: "7.5°"
  },
  {
    id: 4,
    question: {
      en: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
      hi: "यदि 5 मशीनों को 5 मिनट में 5 वस्तुएं बनाने में लगते हैं, तो 100 मशीनों को 100 वस्तुएं बनाने में कितना समय लगेगा?"
    },
    options: {
      en: ["5 minutes", "100 minutes", "50 minutes", "1 minute"],
      hi: ["5 मिनट", "100 मिनट", "50 मिनट", "1 मिनट"]
    },
    correctAnswer: "5 minutes"
  },
  {
    id: 5,
    question: {
      en: "Which number comes next in the series: 2, 6, 12, 20, ?",
      hi: "श्रृंखला में अगली संख्या क्या होगी: 2, 6, 12, 20, ?"
    },
    options: {
      en: ["30", "28", "26", "24"],
      hi: ["30", "28", "26", "24"]
    },
    correctAnswer: "30"
  },
  {
    id: 6,
    question: {
      en: "John is taller than Mike. Mike is taller than Sam. Who is the shortest?",
      hi: "जॉन माइक से लंबा है। माइक सैम से लंबा है। सबसे छोटा कौन है?"
    },
    options: {
      en: ["John", "Mike", "Sam", "Can't say"],
      hi: ["जॉन", "माइक", "सैम", "कहा नहीं जा सकता"]
    },
    correctAnswer: "Sam"
  },
  {
    id: 7,
    question: {
      en: "Find the odd one out: 121, 144, 169, 196, 225, 260",
      hi: "असंगत संख्या चुनें: 121, 144, 169, 196, 225, 260"
    },
    options: {
      en: ["144", "196", "225", "260"],
      hi: ["144", "196", "225", "260"]
    },
    correctAnswer: "260"
  },
  {
    id: 8,
    question: {
      en: "Which one of the following is not a prime number?",
      hi: "निम्नलिखित में से कौन एक अभाज्य संख्या नहीं है?"
    },
    options: {
      en: ["29", "31", "49", "53"],
      hi: ["29", "31", "49", "53"]
    },
    correctAnswer: "49"
  },
  {
    id: 9,
    question: {
      en: "Which number replaces the question mark: 3, 9, 27, ?, 243",
      hi: "प्रश्नवाचक चिन्ह की जगह कौन-सी संख्या आएगी: 3, 9, 27, ?, 243"
    },
    options: {
      en: ["54", "72", "81", "90"],
      hi: ["54", "72", "81", "90"]
    },
    correctAnswer: "81"
  },
  {
    id: 10,
    question: {
      en: "What comes next in the sequence: A, C, F, J, O, ?",
      hi: "क्रम में अगला अक्षर क्या होगा: A, C, F, J, O, ?"
    },
    options: {
      en: ["U", "V", "W", "T"],
      hi: ["U", "V", "W", "T"]
    },
    correctAnswer: "U"
  }

  // Add more 40 questions below in the same format if needed
];

export default logicalPuzzles;
