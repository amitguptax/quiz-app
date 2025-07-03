const placeValue = {
  label: {
    en: "Understand place values (ones, tens, hundreds)",
    hi: "स्थान मान समझें (एकक, दसक, सैकड़क)"
  },
  questions: [
    {
      question: {
        en: "What is the place value of 5 in 452?",
        hi: "452 में 5 का स्थान मान क्या है?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "50", hi: "50" },
        { en: "500", hi: "500" },
        { en: "0.5", hi: "0.5" }
      ],
      correct: { en: "50", hi: "50" },
      explanation: {
        en: "5 is in the tens place, so its value is 5×10 = 50.",
        hi: "5 दसक के स्थान पर है, इसलिए इसका मान 5×10 = 50 है।"
      }
    },
    {
      question: {
        en: "What is the place value of 2 in 321?",
        hi: "321 में 2 का स्थान मान क्या है?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "20", hi: "20" },
        { en: "200", hi: "200" },
        { en: "1", hi: "1" }
      ],
      correct: { en: "20", hi: "20" },
      explanation: {
        en: "2 is in the tens place, so 2×10 = 20.",
        hi: "2 दसक के स्थान पर है, इसलिए 2×10 = 20।"
      }
    },
    {
      question: {
        en: "Which digit is in the hundreds place in 873?",
        hi: "873 में सैकड़ा स्थान पर कौन सा अंक है?"
      },
      options: [
        { en: "8", hi: "8" },
        { en: "7", hi: "7" },
        { en: "3", hi: "3" },
        { en: "0", hi: "0" }
      ],
      correct: { en: "8", hi: "8" },
      explanation: {
        en: "The hundreds digit in 873 is 8.",
        hi: "873 में सैकड़ा स्थान पर 8 है।"
      }
    },
    {
      question: {
        en: "In 209, what is the place value of 0?",
        hi: "209 में 0 का स्थान मान क्या है?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "10", hi: "10" },
        { en: "100", hi: "100" },
        { en: "9", hi: "9" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "0 has no value, so its place value is 0.",
        hi: "0 का कोई मान नहीं होता, इसलिए स्थान मान 0 है।"
      }
    },
    {
      question: {
        en: "In 614, which digit is in the ones place?",
        hi: "614 में एकक स्थान पर कौन सा अंक है?"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "6", hi: "6" },
        { en: "1", hi: "1" },
        { en: "0", hi: "0" }
      ],
      correct: { en: "4", hi: "4" },
      explanation: {
        en: "The last digit is the ones place: 4.",
        hi: "अंतिम अंक एकक स्थान पर होता है: 4।"
      }
    },
    {
      question: {
        en: "What is the value of 7 in 786?",
        hi: "786 में 7 का स्थान मान क्या है?"
      },
      options: [
        { en: "70", hi: "70" },
        { en: "700", hi: "700" },
        { en: "7", hi: "7" },
        { en: "786", hi: "786" }
      ],
      correct: { en: "700", hi: "700" },
      explanation: {
        en: "7 is in the hundreds place → 7×100 = 700.",
        hi: "7 सैकड़ा स्थान पर है → 7×100 = 700।"
      }
    },
    {
      question: {
        en: "What is the place value of 6 in 967?",
        hi: "967 में 6 का स्थान मान क्या है?"
      },
      options: [
        { en: "60", hi: "60" },
        { en: "600", hi: "600" },
        { en: "6", hi: "6" },
        { en: "960", hi: "960" }
      ],
      correct: { en: "60", hi: "60" },
      explanation: {
        en: "6 is in the tens place → 6×10 = 60.",
        hi: "6 दसक स्थान पर है → 6×10 = 60।"
      }
    },
    {
      question: {
        en: "Which place is the digit 3 in 431?",
        hi: "431 में अंक 3 किस स्थान पर है?"
      },
      options: [
        { en: "Ones", hi: "एकक" },
        { en: "Tens", hi: "दसक" },
        { en: "Hundreds", hi: "सैकड़ा" },
        { en: "Thousands", hi: "हजार" }
      ],
      correct: { en: "Tens", hi: "दसक" },
      explanation: {
        en: "3 is in the tens position of 431.",
        hi: "431 में 3 दसक स्थान पर है।"
      }
    },
    {
      question: {
        en: "What is the expanded form of 345?",
        hi: "345 का विस्तारित रूप क्या है?"
      },
      options: [
        { en: "300 + 4 + 5", hi: "300 + 4 + 5" },
        { en: "300 + 40 + 5", hi: "300 + 40 + 5" },
        { en: "30 + 40 + 5", hi: "30 + 40 + 5" },
        { en: "3 + 4 + 5", hi: "3 + 4 + 5" }
      ],
      correct: { en: "300 + 40 + 5", hi: "300 + 40 + 5" },
      explanation: {
        en: "345 = 3 hundreds + 4 tens + 5 ones.",
        hi: "345 = 3 सैकड़ा + 4 दसक + 5 एकक।"
      }
    },
    {
      question: {
        en: "In 708, which digit is in the tens place?",
        hi: "708 में दसक स्थान पर कौन सा अंक है?"
      },
      options: [
        { en: "0", hi: "0" },
        { en: "7", hi: "7" },
        { en: "8", hi: "8" },
        { en: "70", hi: "70" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "0 is in the tens place in 708.",
        hi: "708 में 0 दसक स्थान पर है।"
      }
    }
  ]
};

export default placeValue;
