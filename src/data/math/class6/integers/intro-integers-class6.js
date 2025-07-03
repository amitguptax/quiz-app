const additionSubtractionIntegers = {
  questions: [
    {
      question: {
        en: "What is the result of (-5) + 3?",
        hi: "(-5) + 3 का परिणाम क्या होगा?"
      },
      options: [
        { en: "-8", hi: "-8" },
        { en: "2", hi: "2" },
        { en: "-2", hi: "-2" },
        { en: "8", hi: "8" }
      ],
      correct: { en: "-2", hi: "-2" },
      explanation: {
        en: "(-5) + 3 = -2, because adding a smaller positive number to a negative reduces its magnitude.",
        hi: "(-5) + 3 = -2 क्योंकि ऋणात्मक संख्या में छोटा धनात्मक जोड़ने से उसका परिमाण घटता है।"
      }
    },
    {
      question: {
        en: "What is the result of 7 - (-2)?",
        hi: "7 - (-2) का उत्तर क्या होगा?"
      },
      options: [
        { en: "9", hi: "9" },
        { en: "5", hi: "5" },
        { en: "-9", hi: "-9" },
        { en: "-5", hi: "-5" }
      ],
      correct: { en: "9", hi: "9" },
      explanation: {
        en: "Subtracting a negative is the same as addition: 7 - (-2) = 7 + 2 = 9.",
        hi: "ऋणात्मक संख्या घटाने का अर्थ जोड़ना होता है: 7 - (-2) = 7 + 2 = 9।"
      }
    },
    {
      question: {
        en: "What is the sum of (-3) + (-4)?",
        hi: "(-3) + (-4) का योग क्या है?"
      },
      options: [
        { en: "-7", hi: "-7" },
        { en: "1", hi: "1" },
        { en: "7", hi: "7" },
        { en: "-1", hi: "-1" }
      ],
      correct: { en: "-7", hi: "-7" },
      explanation: {
        en: "Adding two negative numbers gives a more negative result: -3 + (-4) = -7.",
        hi: "दो ऋणात्मक संख्याओं को जोड़ने पर अधिक ऋणात्मक परिणाम मिलता है: -3 + (-4) = -7।"
      }
    },
    {
      question: {
        en: "What is the result of (-6) - 3?",
        hi: "(-6) - 3 का उत्तर क्या होगा?"
      },
      options: [
        { en: "9", hi: "9" },
        { en: "-3", hi: "-3" },
        { en: "-9", hi: "-9" },
        { en: "3", hi: "3" }
      ],
      correct: { en: "-9", hi: "-9" },
      explanation: {
        en: "-6 - 3 means going 3 more steps in negative direction: result = -9.",
        hi: "-6 में से 3 घटाने का मतलब और 3 कदम ऋणात्मक दिशा में जाना है: उत्तर = -9।"
      }
    },
    {
      question: {
        en: "What is the value of 0 - (-7)?",
        hi: "0 - (-7) का मान क्या है?"
      },
      options: [
        { en: "7", hi: "7" },
        { en: "-7", hi: "-7" },
        { en: "0", hi: "0" },
        { en: "14", hi: "14" }
      ],
      correct: { en: "7", hi: "7" },
      explanation: {
        en: "Subtracting a negative becomes addition: 0 - (-7) = 7.",
        hi: "ऋणात्मक संख्या को घटाना जोड़ने के समान है: 0 - (-7) = 7।"
      }
    },
    {
      question: {
        en: "What is (-8) + 8?",
        hi: "(-8) + 8 का परिणाम क्या होगा?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "16", hi: "16" },
        { en: "-16", hi: "-16" },
        { en: "1", hi: "1" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "-8 and +8 cancel each other out, so the result is 0.",
        hi: "-8 और +8 एक-दूसरे को काटते हैं, इसलिए उत्तर 0 है।"
      }
    },
    {
      question: {
        en: "Which operation is the same as adding a negative number?",
        hi: "ऋणात्मक संख्या जोड़ने के समान कौन सा क्रिया है?"
      },
      options: [
        { en: "Subtraction", hi: "घटाव" },
        { en: "Multiplication", hi: "गुणा" },
        { en: "Division", hi: "भाग" },
        { en: "Addition", hi: "जोड़" }
      ],
      correct: { en: "Subtraction", hi: "घटाव" },
      explanation: {
        en: "Adding a negative is the same as subtracting: 5 + (-2) = 5 - 2.",
        hi: "ऋणात्मक जोड़ना घटाव के समान होता है: 5 + (-2) = 5 - 2।"
      }
    },
    {
      question: {
        en: "What is the result of (-2) - (-3)?",
        hi: "(-2) - (-3) का उत्तर क्या होगा?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "-1", hi: "-1" },
        { en: "5", hi: "5" },
        { en: "-5", hi: "-5" }
      ],
      correct: { en: "1", hi: "1" },
      explanation: {
        en: "-2 - (-3) = -2 + 3 = 1.",
        hi: "-2 - (-3) का अर्थ है -2 + 3 = 1।"
      }
    },
    {
      question: {
        en: "Which number is additive identity?",
        hi: "कौन सा संख्या जोड़ में पहचान तत्त्व है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "-1", hi: "-1" },
        { en: "10", hi: "10" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "0 is the additive identity because adding it doesn't change the number.",
        hi: "0 जोड़ में पहचान तत्त्व है क्योंकि इसे जोड़ने से संख्या नहीं बदलती।"
      }
    },
    {
      question: {
        en: "What is the result of 12 + (-15)?",
        hi: "12 + (-15) का उत्तर क्या होगा?"
      },
      options: [
        { en: "-3", hi: "-3" },
        { en: "3", hi: "3" },
        { en: "-27", hi: "-27" },
        { en: "27", hi: "27" }
      ],
      correct: { en: "-3", hi: "-3" },
      explanation: {
        en: "12 + (-15) = -3 because you are subtracting a bigger number from a smaller one.",
        hi: "12 + (-15) = -3 क्योंकि छोटे संख्या में बड़ी संख्या को जोड़ने का अर्थ है घटाना।"
      }
    }
  ]
};

export default additionSubtractionIntegers;
