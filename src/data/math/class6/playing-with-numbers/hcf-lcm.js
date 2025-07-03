const hcfLcm = {
  questions: [
    {
      question: {
        en: "What is the HCF of 12 and 18?",
        hi: "12 और 18 का महत्तम समापवर्तक (HCF) क्या है?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "6", hi: "6" },
        { en: "12", hi: "12" }
      ],
      correct: {
        en: "6",
        hi: "6"
      },
      explanation: {
        en: "Factors of 12: 1,2,3,4,6,12; of 18: 1,2,3,6,9,18. Highest common is 6.",
        hi: "12 और 18 के सामान्य गुणक 1,2,3,6 हैं, जिनमें सबसे बड़ा 6 है।"
      }
    },
    {
      question: {
        en: "What is the LCM of 4 and 5?",
        hi: "4 और 5 का लघुत्तम समापवर्त्य (LCM) क्या है?"
      },
      options: [
        { en: "9", hi: "9" },
        { en: "10", hi: "10" },
        { en: "20", hi: "20" },
        { en: "25", hi: "25" }
      ],
      correct: {
        en: "20",
        hi: "20"
      },
      explanation: {
        en: "Multiples of 4: 4,8,12,16,20... of 5: 5,10,15,20. First common is 20.",
        hi: "4 और 5 का पहला सामान्य गुणज 20 है।"
      }
    },
    {
      question: {
        en: "HCF of any two prime numbers is always:",
        hi: "किसी दो अभाज्य संख्याओं का HCF हमेशा होता है:"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "The smaller number", hi: "छोटी संख्या" },
        { en: "The larger number", hi: "बड़ी संख्या" }
      ],
      correct: {
        en: "1",
        hi: "1"
      },
      explanation: {
        en: "Prime numbers have only 1 common factor: 1.",
        hi: "दो अभाज्य संख्याओं का केवल एक सामान्य गुणक होता है: 1।"
      }
    },
    {
      question: {
        en: "LCM of two numbers is always divisible by:",
        hi: "दो संख्याओं का LCM हमेशा किससे विभाज्य होता है?"
      },
      options: [
        { en: "Only one of them", hi: "केवल एक संख्या" },
        { en: "Both numbers", hi: "दोनों संख्याएँ" },
        { en: "HCF", hi: "HCF" },
        { en: "1", hi: "1" }
      ],
      correct: {
        en: "Both numbers",
        hi: "दोनों संख्याएँ"
      },
      explanation: {
        en: "LCM is the smallest number divisible by both numbers.",
        hi: "LCM वह सबसे छोटी संख्या होती है जो दोनों संख्याओं से विभाज्य होती है।"
      }
    },
    {
      question: {
        en: "What is the HCF of 7 and 13?",
        hi: "7 और 13 का HCF क्या है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "7", hi: "7" },
        { en: "13", hi: "13" },
        { en: "0", hi: "0" }
      ],
      correct: {
        en: "1",
        hi: "1"
      },
      explanation: {
        en: "Both are prime numbers, so HCF = 1.",
        hi: "दोनों अभाज्य संख्याएं हैं, इसलिए HCF = 1।"
      }
    },
    {
      question: {
        en: "What is the LCM of 6 and 8?",
        hi: "6 और 8 का LCM क्या है?"
      },
      options: [
        { en: "24", hi: "24" },
        { en: "48", hi: "48" },
        { en: "12", hi: "12" },
        { en: "18", hi: "18" }
      ],
      correct: {
        en: "24",
        hi: "24"
      },
      explanation: {
        en: "LCM of 6 and 8 is the smallest number divisible by both → 24.",
        hi: "6 और 8 का सबसे छोटा सामान्य गुणज 24 है।"
      }
    },
    {
      question: {
        en: "Which method is used to find HCF?",
        hi: "HCF निकालने के लिए कौन-सी विधि प्रयोग होती है?"
      },
      options: [
        { en: "Division method", hi: "विभाजन विधि" },
        { en: "Multiplication method", hi: "गुणा विधि" },
        { en: "LCM method", hi: "LCM विधि" },
        { en: "Subtraction", hi: "घटाव" }
      ],
      correct: {
        en: "Division method",
        hi: "विभाजन विधि"
      },
      explanation: {
        en: "HCF is often found using long division method.",
        hi: "HCF निकालने के लिए प्रायः विभाजन विधि का उपयोग किया जाता है।"
      }
    },
    {
      question: {
        en: "Which is greater: HCF or LCM of two numbers?",
        hi: "HCF और LCM में से कौन अधिक होता है?"
      },
      options: [
        { en: "HCF", hi: "HCF" },
        { en: "LCM", hi: "LCM" },
        { en: "Both same", hi: "दोनों समान" },
        { en: "Can't say", hi: "कहा नहीं जा सकता" }
      ],
      correct: {
        en: "LCM",
        hi: "LCM"
      },
      explanation: {
        en: "LCM is always equal to or greater than HCF.",
        hi: "LCM हमेशा HCF से बड़ा या बराबर होता है।"
      }
    },
    {
      question: {
        en: "The product of HCF and LCM of two numbers is equal to:",
        hi: "दो संख्याओं का HCF और LCM का गुणनफल किसके बराबर होता है?"
      },
      options: [
        { en: "Their sum", hi: "उनका योग" },
        { en: "Their product", hi: "उनका गुणनफल" },
        { en: "Their difference", hi: "उनका अंतर" },
        { en: "1", hi: "1" }
      ],
      correct: {
        en: "Their product",
        hi: "उनका गुणनफल"
      },
      explanation: {
        en: "HCF × LCM = Product of the two numbers.",
        hi: "HCF × LCM = दोनों संख्याओं का गुणनफल।"
      }
    },
    {
      question: {
        en: "If LCM of 5 and x is 20, what is the least value of x?",
        hi: "यदि 5 और x का LCM 20 है, तो x का न्यूनतम मान क्या हो सकता है?"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "20", hi: "20" },
        { en: "15", hi: "15" },
        { en: "10", hi: "10" }
      ],
      correct: {
        en: "4",
        hi: "4"
      },
      explanation: {
        en: "5 × 4 = 20, and 20 is divisible by both 5 and 4.",
        hi: "4 और 5 का LCM 20 होता है, इसलिए न्यूनतम मान 4 हो सकता है।"
      }
    }
  ]
};

export default hcfLcm;
