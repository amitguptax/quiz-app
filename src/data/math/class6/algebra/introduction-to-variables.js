const introductionToVariables = {
  questions: [
    {
      question: {
        en: "What is a variable in algebra?",
        hi: "बीजगणित में चर क्या होता है?"
      },
      options: [
        { en: "A fixed number", hi: "एक स्थायी संख्या" },
        { en: "A symbol that can change", hi: "एक ऐसा प्रतीक जो बदल सकता है" },
        { en: "A decimal", hi: "एक दशमलव" },
        { en: "A shape", hi: "एक आकृति" }
      ],
      correct: { en: "A symbol that can change", hi: "एक ऐसा प्रतीक जो बदल सकता है" },
      explanation: {
        en: "A variable is a symbol like x or y that can take different values.",
        hi: "चर एक ऐसा प्रतीक होता है जो अलग-अलग मान ले सकता है, जैसे x या y।"
      }
    },
    {
      question: {
        en: "Which of the following is a variable?",
        hi: "निम्नलिखित में से कौन एक चर है?"
      },
      options: [
        { en: "5", hi: "5" },
        { en: "a", hi: "a" },
        { en: "10", hi: "10" },
        { en: "3.5", hi: "3.5" }
      ],
      correct: { en: "a", hi: "a" },
      explanation: {
        en: "'a' is a variable because it can represent any number.",
        hi: "'a' एक चर है क्योंकि यह किसी भी संख्या को दर्शा सकता है।"
      }
    },
    {
      question: {
        en: "In the expression 2x, what does x represent?",
        hi: "व्यंजक 2x में x क्या दर्शाता है?"
      },
      options: [
        { en: "A fixed value", hi: "एक स्थायी मान" },
        { en: "A shape", hi: "एक आकृति" },
        { en: "A variable", hi: "एक चर" },
        { en: "An operator", hi: "एक क्रिया चिह्न" }
      ],
      correct: { en: "A variable", hi: "एक चर" },
      explanation: {
        en: "x is the variable that can take various values.",
        hi: "x एक चर है जो विभिन्न मान ले सकता है।"
      }
    },
    {
      question: {
        en: "Which is a correct algebraic expression?",
        hi: "निम्नलिखित में से कौन सा एक सही बीजगणितीय व्यंजक है?"
      },
      options: [
        { en: "2 + x", hi: "2 + x" },
        { en: "x ×", hi: "x ×" },
        { en: "5 -", hi: "5 -" },
        { en: "+ x", hi: "+ x" }
      ],
      correct: { en: "2 + x", hi: "2 + x" },
      explanation: {
        en: "2 + x is a valid algebraic expression with a number and a variable.",
        hi: "2 + x एक सही बीजगणितीय व्यंजक है जिसमें संख्या और चर दोनों हैं।"
      }
    },
    {
      question: {
        en: "If x = 3, then what is the value of 5 + x?",
        hi: "यदि x = 3 है, तो 5 + x का मान क्या होगा?"
      },
      options: [
        { en: "15", hi: "15" },
        { en: "8", hi: "8" },
        { en: "2", hi: "2" },
        { en: "53", hi: "53" }
      ],
      correct: { en: "8", hi: "8" },
      explanation: {
        en: "Substitute x = 3: 5 + 3 = 8.",
        hi: "x = 3 रखने पर: 5 + 3 = 8।"
      }
    },
    {
      question: {
        en: "Which symbol is commonly used to represent variables?",
        hi: "चर को दर्शाने के लिए सामान्यतः कौन सा प्रतीक उपयोग किया जाता है?"
      },
      options: [
        { en: "a, b, c", hi: "a, b, c" },
        { en: "5, 6, 7", hi: "5, 6, 7" },
        { en: "+, -, ×", hi: "+, -, ×" },
        { en: "□, △", hi: "□, △" }
      ],
      correct: { en: "a, b, c", hi: "a, b, c" },
      explanation: {
        en: "Letters like a, b, x, y are used as variables.",
        hi: "a, b, x, y जैसे अक्षरों को चर के रूप में प्रयोग किया जाता है।"
      }
    },
    {
      question: {
        en: "Which one is NOT a variable?",
        hi: "निम्न में से कौन चर नहीं है?"
      },
      options: [
        { en: "x", hi: "x" },
        { en: "7", hi: "7" },
        { en: "y", hi: "y" },
        { en: "a", hi: "a" }
      ],
      correct: { en: "7", hi: "7" },
      explanation: {
        en: "7 is a constant number, not a variable.",
        hi: "7 एक स्थायी संख्या है, यह चर नहीं है।"
      }
    },
    {
      question: {
        en: "An expression with a variable is called?",
        hi: "चर के साथ बना व्यंजक क्या कहलाता है?"
      },
      options: [
        { en: "Constant", hi: "स्थिरांक" },
        { en: "Equation", hi: "समीकरण" },
        { en: "Algebraic expression", hi: "बीजगणितीय व्यंजक" },
        { en: "Product", hi: "गुणनफल" }
      ],
      correct: { en: "Algebraic expression", hi: "बीजगणितीय व्यंजक" },
      explanation: {
        en: "An algebraic expression includes constants and variables.",
        hi: "बीजगणितीय व्यंजक में चर और स्थायी मान दोनों होते हैं।"
      }
    },
    {
      question: {
        en: "If x = 4, what is the value of 2x?",
        hi: "यदि x = 4 है, तो 2x का मान क्या होगा?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "6", hi: "6" },
        { en: "8", hi: "8" },
        { en: "12", hi: "12" }
      ],
      correct: { en: "8", hi: "8" },
      explanation: {
        en: "2x = 2 × 4 = 8.",
        hi: "2x = 2 × 4 = 8।"
      }
    },
    {
      question: {
        en: "Algebra is useful to?",
        hi: "बीजगणित किसमें उपयोगी है?"
      },
      options: [
        { en: "Making graphs", hi: "ग्राफ बनाना" },
        { en: "Solving unknown values", hi: "अज्ञात मानों को हल करना" },
        { en: "Finding angles", hi: "कोण निकालना" },
        { en: "Coloring shapes", hi: "आकृतियों को रंगना" }
      ],
      correct: { en: "Solving unknown values", hi: "अज्ञात मानों को हल करना" },
      explanation: {
        en: "Algebra helps solve problems with unknown values using variables.",
        hi: "बीजगणित अज्ञात मानों को हल करने में मदद करता है।"
      }
    }
  ]
};

export default introductionToVariables;
