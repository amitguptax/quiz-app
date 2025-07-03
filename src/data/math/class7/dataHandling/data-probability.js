const dataProbability = {
  questions: [
    {
      question: {
        en: "What is the probability of getting a head when a coin is tossed?",
        hi: "एक सिक्का उछालने पर हेड आने की प्रायिकता क्या है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "0", hi: "0" },
        { en: "1/2", hi: "1/2" },
        { en: "2", hi: "2" }
      ],
      correct: { en: "1/2", hi: "1/2" },
      explanation: {
        en: "A coin has two outcomes: Head or Tail, so probability of Head is 1 out of 2.",
        hi: "सिक्के के दो परिणाम होते हैं: हेड या टेल। हेड की प्रायिकता = 1/2।"
      }
    },
    {
      question: {
        en: "What is the probability of getting a number less than 6 on a standard die?",
        hi: "एक पासे पर 6 से कम संख्या आने की प्रायिकता क्या है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "1/6", hi: "1/6" },
        { en: "5/6", hi: "5/6" },
        { en: "0", hi: "0" }
      ],
      correct: { en: "5/6", hi: "5/6" },
      explanation: {
        en: "A die has 6 faces (1 to 6); 5 of them are less than 6. So, probability = 5/6.",
        hi: "पासे की 6 सतहें होती हैं (1 से 6), जिनमें से 5 संख्या 6 से कम होती हैं।"
      }
    },
    {
      question: {
        en: "Which number is impossible to get when rolling a standard die?",
        hi: "एक सामान्य पासे पर कौन-सी संख्या आना असंभव है?"
      },
      options: [
        { en: "3", hi: "3" },
        { en: "0", hi: "0" },
        { en: "6", hi: "6" },
        { en: "1", hi: "1" }
      ],
      correct: { en: "0", hi: "0" },
      explanation: {
        en: "Standard dice have numbers from 1 to 6 only.",
        hi: "सामान्य पासे पर केवल 1 से 6 तक की संख्याएँ होती हैं।"
      }
    },
    {
      question: {
        en: "Which of the following is a sure event?",
        hi: "निम्न में से कौन-सी घटना निश्चित घटना है?"
      },
      options: [
        { en: "Getting a red card from a shuffled deck", hi: "शफल किए गए ताश से लाल कार्ड निकालना" },
        { en: "Getting a number less than 10 on a standard die", hi: "पासे पर 10 से कम संख्या आना" },
        { en: "Getting a tail when a coin is tossed", hi: "सिक्का उछालने पर टेल आना" },
        { en: "Getting a number from 1 to 6 on a die", hi: "पासे पर 1 से 6 तक की संख्या आना" }
      ],
      correct: { en: "Getting a number from 1 to 6 on a die", hi: "पासे पर 1 से 6 तक की संख्या आना" },
      explanation: {
        en: "A standard die always gives a number between 1 and 6.",
        hi: "सामान्य पासे से हमेशा 1 से 6 तक की संख्या आती है।"
      }
    },
    {
      question: {
        en: "What is the probability of drawing a red ball from a bag of 3 red and 2 blue balls?",
        hi: "3 लाल और 2 नीले गेंदों की थैली से लाल गेंद निकालने की प्रायिकता क्या है?"
      },
      options: [
        { en: "3/5", hi: "3/5" },
        { en: "2/5", hi: "2/5" },
        { en: "1/2", hi: "1/2" },
        { en: "1", hi: "1" }
      ],
      correct: { en: "3/5", hi: "3/5" },
      explanation: {
        en: "Total balls = 5, red balls = 3, so probability = 3/5.",
        hi: "कुल गेंदें = 5, लाल = 3, प्रायिकता = 3/5।"
      }
    },
    {
      question: {
        en: "Which of these is an experiment with equally likely outcomes?",
        hi: "निम्न में से किस प्रयोग में सभी संभावनाएँ समान रूप से संभव हैं?"
      },
      options: [
        { en: "Choosing a student from class based on marks", hi: "अंकों के आधार पर छात्र चुनना" },
        { en: "Rolling a standard die", hi: "सामान्य पासा फेंकना" },
        { en: "Picking a colored ball from a mixed bag", hi: "मिश्रित थैली से रंगीन गेंद चुनना" },
        { en: "Guessing a password", hi: "पासवर्ड अनुमान लगाना" }
      ],
      correct: { en: "Rolling a standard die", hi: "सामान्य पासा फेंकना" },
      explanation: {
        en: "Each number from 1 to 6 has equal chance on a standard die.",
        hi: "पासे की हर संख्या (1 से 6) की संभावना समान होती है।"
      }
    },
    {
      question: {
        en: "What does an experimental probability depend on?",
        hi: "प्रयोगात्मक प्रायिकता किस पर निर्भर करती है?"
      },
      options: [
        { en: "Logic", hi: "तर्क" },
        { en: "Outcomes of experiment", hi: "प्रयोग के परिणाम" },
        { en: "Guessing", hi: "अनुमान" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "Outcomes of experiment", hi: "प्रयोग के परिणाम" },
      explanation: {
        en: "Experimental probability is calculated using results of actual trials.",
        hi: "प्रयोगात्मक प्रायिकता वास्तव में किए गए प्रयोगों के परिणामों पर आधारित होती है।"
      }
    },
    {
      question: {
        en: "How can we increase accuracy of experimental probability?",
        hi: "प्रयोगात्मक प्रायिकता की सटीकता कैसे बढ़ाई जा सकती है?"
      },
      options: [
        { en: "By guessing answers", hi: "उत्तर अनुमान लगाकर" },
        { en: "By repeating the experiment more times", hi: "प्रयोग को अधिक बार दोहराकर" },
        { en: "By changing outcomes", hi: "परिणाम बदलकर" },
        { en: "By asking others", hi: "दूसरों से पूछकर" }
      ],
      correct: { en: "By repeating the experiment more times", hi: "प्रयोग को अधिक बार दोहराकर" },
      explanation: {
        en: "More trials give results closer to actual theoretical probability.",
        hi: "ज्यादा बार प्रयोग करने से सटीक परिणाम मिलते हैं।"
      }
    },
    {
      question: {
        en: "What is the range of any probability value?",
        hi: "किसी भी प्रायिकता मान की सीमा क्या होती है?"
      },
      options: [
        { en: "0 to 100", hi: "0 से 100" },
        { en: "0 to 1", hi: "0 से 1" },
        { en: "-1 to 1", hi: "-1 से 1" },
        { en: "Only positive", hi: "केवल धनात्मक" }
      ],
      correct: { en: "0 to 1", hi: "0 से 1" },
      explanation: {
        en: "Probability always lies between 0 (impossible) and 1 (certain).",
        hi: "प्रायिकता हमेशा 0 और 1 के बीच होती है।"
      }
    },
    {
      question: {
        en: "If the probability of winning a game is 1/4, what is the probability of losing?",
        hi: "यदि खेल जीतने की प्रायिकता 1/4 है, तो हारने की प्रायिकता क्या होगी?"
      },
      options: [
        { en: "3/4", hi: "3/4" },
        { en: "1/2", hi: "1/2" },
        { en: "1/4", hi: "1/4" },
        { en: "1", hi: "1" }
      ],
      correct: { en: "3/4", hi: "3/4" },
      explanation: {
        en: "Total probability = 1. So, losing = 1 - 1/4 = 3/4.",
        hi: "कुल प्रायिकता = 1 होती है। हारने की प्रायिकता = 1 - 1/4 = 3/4।"
      }
    }
  ]
};

export default dataProbability;
