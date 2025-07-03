const applications = [
  {
    id: 1,
    question: {
      en: "If the sum of a number and 9 is 20, what is the number?",
      hi: "यदि किसी संख्या और 9 का योग 20 है, तो वह संख्या क्या है?"
    },
    options: ["10", "11", "12", "13"],
    answer: "11",
    explanation: {
      en: "Let the number be x. x + 9 = 20 ⇒ x = 20 - 9 = 11",
      hi: "मान लें संख्या x है। x + 9 = 20 ⇒ x = 20 - 9 = 11"
    }
  },
  {
    id: 2,
    question: {
      en: "Ravi is 5 years older than his sister. If the sum of their ages is 25, what is Ravi's age?",
      hi: "रवि अपनी बहन से 5 वर्ष बड़ा है। यदि दोनों की आयु का योग 25 है, तो रवि की आयु क्या है?"
    },
    options: ["10", "12", "15", "20"],
    answer: "15",
    explanation: {
      en: "Let sister's age = x. Then Ravi = x + 5 ⇒ x + x + 5 = 25 ⇒ 2x = 20 ⇒ x = 10, Ravi = 10 + 5 = 15",
      hi: "बहन की आयु = x मान लें। रवि = x + 5 ⇒ x + x + 5 = 25 ⇒ 2x = 20 ⇒ x = 10, रवि = 10 + 5 = 15"
    }
  },
  {
    id: 3,
    question: {
      en: "The cost of a pen is ₹5 more than the cost of a pencil. If the total cost is ₹35, find the cost of the pencil.",
      hi: "एक पेन की कीमत एक पेंसिल से ₹5 अधिक है। यदि कुल लागत ₹35 है, तो पेंसिल की कीमत क्या है?"
    },
    options: ["₹10", "₹15", "₹12", "₹20"],
    answer: "₹15",
    explanation: {
      en: "Let pencil cost = x. Then pen = x + 5 ⇒ x + x + 5 = 35 ⇒ 2x = 30 ⇒ x = 15",
      hi: "पेंसिल की कीमत = x, पेन = x + 5 ⇒ x + x + 5 = 35 ⇒ 2x = 30 ⇒ x = 15"
    }
  },
  {
    id: 4,
    question: {
      en: "Twice a number added to 7 is 25. Find the number.",
      hi: "किसी संख्या का दुगना और 7 जोड़कर 25 आता है। संख्या ज्ञात करें।"
    },
    options: ["8", "9", "10", "11"],
    answer: "9",
    explanation: {
      en: "Let the number = x ⇒ 2x + 7 = 25 ⇒ 2x = 18 ⇒ x = 9",
      hi: "संख्या = x मानें ⇒ 2x + 7 = 25 ⇒ 2x = 18 ⇒ x = 9"
    }
  },
  {
    id: 5,
    question: {
      en: "The perimeter of a rectangle is 50 cm. Its length is 2 cm more than its breadth. What is its length?",
      hi: "एक आयत की परिमिति 50 सेमी है। उसकी लंबाई चौड़ाई से 2 सेमी अधिक है। लंबाई ज्ञात करें।"
    },
    options: ["12", "13", "14", "16"],
    answer: "13",
    explanation: {
      en: "Let breadth = x, then length = x + 2. ⇒ 2(x + x + 2) = 50 ⇒ 2(2x + 2) = 50 ⇒ 2x + 2 = 25 ⇒ x = 11.5, L = 13",
      hi: "चौड़ाई = x ⇒ लंबाई = x + 2 ⇒ 2(x + x + 2) = 50 ⇒ 2(2x + 2) = 50 ⇒ 2x + 2 = 25 ⇒ x = 11.5 ⇒ L = 13"
    }
  },
  {
    id: 6,
    question: {
      en: "A number subtracted from 30 gives 12. Find the number.",
      hi: "किसी संख्या को 30 से घटाने पर 12 प्राप्त होता है। संख्या ज्ञात करें।"
    },
    options: ["18", "20", "22", "16"],
    answer: "18",
    explanation: {
      en: "Let the number = x ⇒ 30 - x = 12 ⇒ x = 18",
      hi: "संख्या = x ⇒ 30 - x = 12 ⇒ x = 18"
    }
  },
  {
    id: 7,
    question: {
      en: "The total cost of 3 notebooks and a pen is ₹75. If the pen costs ₹15, find the cost of one notebook.",
      hi: "3 नोटबुक और एक पेन की कुल कीमत ₹75 है। यदि पेन की कीमत ₹15 है, तो एक नोटबुक की कीमत ज्ञात करें।"
    },
    options: ["₹15", "₹20", "₹25", "₹30"],
    answer: "₹20",
    explanation: {
      en: "Let notebook cost = x ⇒ 3x + 15 = 75 ⇒ 3x = 60 ⇒ x = 20",
      hi: "नोटबुक की कीमत = x ⇒ 3x + 15 = 75 ⇒ 3x = 60 ⇒ x = 20"
    }
  },
  {
    id: 8,
    question: {
      en: "5 more than a number is equal to twice the number. Find the number.",
      hi: "किसी संख्या में 5 जोड़ने पर वह संख्या के दुगने के बराबर हो जाती है। संख्या ज्ञात करें।"
    },
    options: ["2", "3", "4", "5"],
    answer: "5",
    explanation: {
      en: "x + 5 = 2x ⇒ x = 5",
      hi: "x + 5 = 2x ⇒ x = 5"
    }
  },
  {
    id: 9,
    question: {
      en: "If x/4 = 6, what is the value of x?",
      hi: "यदि x/4 = 6, तो x का मान क्या है?"
    },
    options: ["10", "12", "18", "24"],
    answer: "24",
    explanation: {
      en: "Multiply both sides by 4 ⇒ x = 6 × 4 = 24",
      hi: "दोनों ओर 4 से गुणा करें ⇒ x = 6 × 4 = 24"
    }
  },
  {
    id: 10,
    question: {
      en: "The sum of two consecutive integers is 33. Find the smaller number.",
      hi: "दो क्रमागत पूर्णांकों का योग 33 है। छोटा पूर्णांक ज्ञात करें।"
    },
    options: ["16", "17", "18", "15"],
    answer: "16",
    explanation: {
      en: "Let first number = x, then second = x + 1 ⇒ x + x + 1 = 33 ⇒ 2x = 32 ⇒ x = 16",
      hi: "पहली संख्या = x ⇒ दूसरी = x + 1 ⇒ x + x + 1 = 33 ⇒ 2x = 32 ⇒ x = 16"
    }
  }
];

export default applications;
