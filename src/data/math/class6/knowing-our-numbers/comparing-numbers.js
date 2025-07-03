const comparingNumbers = {
  questions: [
    {
      question: {
        en: "Which is greater: 58,643 or 58,364?",
        hi: "58,643 और 58,364 में से कौन सी संख्या बड़ी है?"
      },
      options: [
        { en: "58,643", hi: "58,643" },
        { en: "58,364", hi: "58,364" },
        { en: "Both equal", hi: "दोनों समान हैं" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "58,643", hi: "58,643" },
      explanation: {
        en: "Thousands place comparison: 643 > 364",
        hi: "हज़ारों के स्थान की तुलना: 643 > 364"
      }
    },
    {
      question: {
        en: "Arrange in ascending order: 9302, 3290, 9032, 2390",
        hi: "9302, 3290, 9032, 2390 को बढ़ते क्रम में व्यवस्थित करें।"
      },
      options: [
        { en: "2390, 3290, 9032, 9302", hi: "2390, 3290, 9032, 9302" },
        { en: "2390, 3290, 9302, 9032", hi: "2390, 3290, 9302, 9032" },
        { en: "3290, 2390, 9032, 9302", hi: "3290, 2390, 9032, 9302" },
        { en: "9032, 9302, 2390, 3290", hi: "9032, 9302, 2390, 3290" }
      ],
      correct: { en: "2390, 3290, 9032, 9302", hi: "2390, 3290, 9032, 9302" },
      explanation: {
        en: "Ascending means from smallest to largest.",
        hi: "बढ़ते क्रम का मतलब सबसे छोटी से सबसे बड़ी संख्या तक।"
      }
    },
    {
      question: {
        en: "Which is the smallest number: 78,123; 87,213; 71,832; 72,318?",
        hi: "78,123; 87,213; 71,832; 72,318 में सबसे छोटी संख्या कौन सी है?"
      },
      options: [
        { en: "78,123", hi: "78,123" },
        { en: "87,213", hi: "87,213" },
        { en: "71,832", hi: "71,832" },
        { en: "72,318", hi: "72,318" }
      ],
      correct: { en: "71,832", hi: "71,832" },
      explanation: {
        en: "71,832 has the smallest ten-thousands digit.",
        hi: "71,832 में सबसे छोटा दस-हज़ार अंकीय मान है।"
      }
    },
    {
      question: {
        en: "Which number has the greatest digit in the thousands place: 64329, 68213, 69510, 62509?",
        hi: "हज़ारों के स्थान पर सबसे बड़ी अंक वाली संख्या कौन सी है: 64329, 68213, 69510, 62509?"
      },
      options: [
        { en: "64329", hi: "64329" },
        { en: "68213", hi: "68213" },
        { en: "69510", hi: "69510" },
        { en: "62509", hi: "62509" }
      ],
      correct: { en: "69510", hi: "69510" },
      explanation: {
        en: "Thousands digits: 3, 2, 5, 5 → greatest is 5",
        hi: "हज़ारों का अंक: 3, 2, 5, 5 → सबसे बड़ा 5 है"
      }
    },
    {
      question: {
        en: "Write the largest 5-digit number using digits 3, 8, 0, 2, 9 without repeating.",
        hi: "3, 8, 0, 2, 9 अंकों का उपयोग कर बिना दोहराए सबसे बड़ी 5-अंकीय संख्या बनाएं।"
      },
      options: [
        { en: "98320", hi: "98320" },
        { en: "98230", hi: "98230" },
        { en: "98302", hi: "98302" },
        { en: "98032", hi: "98032" }
      ],
      correct: { en: "98320", hi: "98320" },
      explanation: {
        en: "Arrange in descending order: 9, 8, 3, 2, 0 → 98320",
        hi: "घटते क्रम में व्यवस्थित करें: 9, 8, 3, 2, 0 → 98320"
      }
    },
    {
      question: {
        en: "Which of these is a greater number: 70001 or 69999?",
        hi: "इनमें से कौन सी संख्या बड़ी है: 70001 या 69999?"
      },
      options: [
        { en: "70001", hi: "70001" },
        { en: "69999", hi: "69999" },
        { en: "Both equal", hi: "दोनों समान हैं" },
        { en: "Cannot say", hi: "कह नहीं सकते" }
      ],
      correct: { en: "70001", hi: "70001" },
      explanation: {
        en: "70001 is 2 more than 69999",
        hi: "70001, 69999 से 2 अधिक है।"
      }
    },
    {
      question: {
        en: "What comes between 89,999 and 90,001?",
        hi: "89,999 और 90,001 के बीच कौन सी संख्या आती है?"
      },
      options: [
        { en: "90,000", hi: "90,000" },
        { en: "89,998", hi: "89,998" },
        { en: "90,002", hi: "90,002" },
        { en: "89,997", hi: "89,997" }
      ],
      correct: { en: "90,000", hi: "90,000" },
      explanation: {
        en: "90,000 is exactly between 89,999 and 90,001.",
        hi: "90,000 ठीक 89,999 और 90,001 के बीच आता है।"
      }
    },
    {
      question: {
        en: "Arrange in descending order: 84562, 82645, 86524, 85426",
        hi: "84562, 82645, 86524, 85426 को घटते क्रम में व्यवस्थित करें।"
      },
      options: [
        { en: "86524, 85426, 84562, 82645", hi: "86524, 85426, 84562, 82645" },
        { en: "85426, 86524, 84562, 82645", hi: "85426, 86524, 84562, 82645" },
        { en: "86524, 84562, 82645, 85426", hi: "86524, 84562, 82645, 85426" },
        { en: "82645, 84562, 85426, 86524", hi: "82645, 84562, 85426, 86524" }
      ],
      correct: { en: "86524, 85426, 84562, 82645", hi: "86524, 85426, 84562, 82645" },
      explanation: {
        en: "Descending = from greatest to smallest.",
        hi: "घटते क्रम का अर्थ: सबसे बड़ी से सबसे छोटी।"
      }
    },
    {
      question: {
        en: "Which number is equal to 90,000 + 2,000 + 300 + 70 + 5?",
        hi: "90,000 + 2,000 + 300 + 70 + 5 के बराबर कौन सी संख्या है?"
      },
      options: [
        { en: "92375", hi: "92375" },
        { en: "90275", hi: "90275" },
        { en: "92305", hi: "92305" },
        { en: "92370", hi: "92370" }
      ],
      correct: { en: "92375", hi: "92375" },
      explanation: {
        en: "Adding values: 90,000 + 2,000 + 300 + 70 + 5 = 92,375",
        hi: "सभी अंश जोड़ने पर = 92,375"
      }
    },
    {
      question: {
        en: "If A = 56,321 and B = 65,123, which is greater?",
        hi: "यदि A = 56,321 और B = 65,123 हो, तो कौन बड़ा है?"
      },
      options: [
        { en: "A", hi: "A" },
        { en: "B", hi: "B" },
        { en: "Both equal", hi: "दोनों बराबर हैं" },
        { en: "Can't tell", hi: "कह नहीं सकते" }
      ],
      correct: { en: "B", hi: "B" },
      explanation: {
        en: "65,123 > 56,321",
        hi: "65,123 > 56,321"
      }
    }
  ]
};

export default comparingNumbers;
