const standardUnits = {
  questions: [
    {
      question: {
        en: "How many centimeters are there in 1 meter?",
        hi: "1 मीटर में कितने सेंटीमीटर होते हैं?"
      },
      options: [
        { en: "10 cm", hi: "10 सेमी" },
        { en: "100 cm", hi: "100 सेमी" },
        { en: "1000 cm", hi: "1000 सेमी" },
        { en: "50 cm", hi: "50 सेमी" }
      ],
      correct: { en: "100 cm", hi: "100 सेमी" },
      explanation: {
        en: "1 meter = 100 centimeters",
        hi: "1 मीटर = 100 सेंटीमीटर"
      }
    },
    {
      question: {
        en: "How many grams are in 1 kilogram?",
        hi: "1 किलोग्राम में कितने ग्राम होते हैं?"
      },
      options: [
        { en: "10 g", hi: "10 ग्राम" },
        { en: "100 g", hi: "100 ग्राम" },
        { en: "1000 g", hi: "1000 ग्राम" },
        { en: "500 g", hi: "500 ग्राम" }
      ],
      correct: { en: "1000 g", hi: "1000 ग्राम" },
      explanation: {
        en: "1 kilogram = 1000 grams",
        hi: "1 किलोग्राम = 1000 ग्राम"
      }
    },
    {
      question: {
        en: "How many milliliters are there in 1 liter?",
        hi: "1 लीटर में कितने मिलीलीटर होते हैं?"
      },
      options: [
        { en: "100 ml", hi: "100 मि.ली." },
        { en: "500 ml", hi: "500 मि.ली." },
        { en: "1000 ml", hi: "1000 मि.ली." },
        { en: "250 ml", hi: "250 मि.ली." }
      ],
      correct: { en: "1000 ml", hi: "1000 मि.ली." },
      explanation: {
        en: "1 liter = 1000 milliliters",
        hi: "1 लीटर = 1000 मि.ली."
      }
    },
    {
      question: {
        en: "Which unit is smaller: meter or centimeter?",
        hi: "मीटर और सेंटीमीटर में से कौन सी इकाई छोटी है?"
      },
      options: [
        { en: "Meter", hi: "मीटर" },
        { en: "Centimeter", hi: "सेंटीमीटर" },
        { en: "Both same", hi: "दोनों समान" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "Centimeter", hi: "सेंटीमीटर" },
      explanation: {
        en: "Centimeter is smaller than a meter (1 m = 100 cm)",
        hi: "सेंटीमीटर मीटर से छोटा होता है (1 मी = 100 सेमी)"
      }
    },
    {
      question: {
        en: "Convert 3 meters to centimeters.",
        hi: "3 मीटर को सेंटीमीटर में बदलें।"
      },
      options: [
        { en: "30 cm", hi: "30 सेमी" },
        { en: "300 cm", hi: "300 सेमी" },
        { en: "3 cm", hi: "3 सेमी" },
        { en: "100 cm", hi: "100 सेमी" }
      ],
      correct: { en: "300 cm", hi: "300 सेमी" },
      explanation: {
        en: "3 × 100 = 300 cm",
        hi: "3 × 100 = 300 सेमी"
      }
    },
    {
      question: {
        en: "Convert 5000 grams into kilograms.",
        hi: "5000 ग्राम को किलोग्राम में बदलें।"
      },
      options: [
        { en: "5 kg", hi: "5 किग्रा" },
        { en: "0.5 kg", hi: "0.5 किग्रा" },
        { en: "50 kg", hi: "50 किग्रा" },
        { en: "2.5 kg", hi: "2.5 किग्रा" }
      ],
      correct: { en: "5 kg", hi: "5 किग्रा" },
      explanation: {
        en: "5000 ÷ 1000 = 5 kg",
        hi: "5000 ÷ 1000 = 5 किग्रा"
      }
    },
    {
      question: {
        en: "Which of the following is a standard unit of length?",
        hi: "निम्न में से कौन लंबाई की मानक इकाई है?"
      },
      options: [
        { en: "Meter", hi: "मीटर" },
        { en: "Gram", hi: "ग्राम" },
        { en: "Litre", hi: "लीटर" },
        { en: "Kilogram", hi: "किलोग्राम" }
      ],
      correct: { en: "Meter", hi: "मीटर" },
      explanation: {
        en: "Meter is the standard unit of length.",
        hi: "मीटर लंबाई की मानक इकाई है।"
      }
    },
    {
      question: {
        en: "Which unit would you use to measure the weight of a watermelon?",
        hi: "तरबूज का वजन मापने के लिए आप कौन सी इकाई का उपयोग करेंगे?"
      },
      options: [
        { en: "Centimeter", hi: "सेंटीमीटर" },
        { en: "Gram", hi: "ग्राम" },
        { en: "Kilogram", hi: "किलोग्राम" },
        { en: "Meter", hi: "मीटर" }
      ],
      correct: { en: "Kilogram", hi: "किलोग्राम" },
      explanation: {
        en: "Kilogram is suitable for heavier objects like a watermelon.",
        hi: "तरबूज जैसे भारी वस्तु के लिए किलोग्राम उपयुक्त है।"
      }
    },
    {
      question: {
        en: "Which unit would you use to measure milk?",
        hi: "दूध मापने के लिए आप किस इकाई का उपयोग करेंगे?"
      },
      options: [
        { en: "Meter", hi: "मीटर" },
        { en: "Gram", hi: "ग्राम" },
        { en: "Liter", hi: "लीटर" },
        { en: "Centimeter", hi: "सेंटीमीटर" }
      ],
      correct: { en: "Liter", hi: "लीटर" },
      explanation: {
        en: "Milk is a liquid, so we use liters or milliliters.",
        hi: "दूध एक तरल है, इसलिए हम लीटर या मिलीलीटर का उपयोग करते हैं।"
      }
    },
    {
      question: {
        en: "Which is heavier: 1500 g or 1 kg?",
        hi: "1500 ग्राम और 1 किलोग्राम में कौन भारी है?"
      },
      options: [
        { en: "1500 g", hi: "1500 ग्राम" },
        { en: "1 kg", hi: "1 किग्रा" },
        { en: "Both same", hi: "दोनों समान" },
        { en: "Can't say", hi: "कह नहीं सकते" }
      ],
      correct: { en: "1500 g", hi: "1500 ग्राम" },
      explanation: {
        en: "1500 g = 1.5 kg, which is more than 1 kg",
        hi: "1500 ग्राम = 1.5 किग्रा, जो 1 किग्रा से अधिक है।"
      }
    }
  ]
};

export default standardUnits;
