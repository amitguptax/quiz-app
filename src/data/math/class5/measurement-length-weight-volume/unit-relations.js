const unitRelations = {
  questions: [
    {
      question: {
        en: "How many centimeters are there in 1 meter?",
        hi: "1 मीटर में कितने सेंटीमीटर होते हैं?"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "100", hi: "100" },
        { en: "1000", hi: "1000" },
        { en: "10000", hi: "10000" }
      ],
      correct: { en: "100", hi: "100" },
      explanation: {
        en: "1 meter = 100 centimeters",
        hi: "1 मीटर = 100 सेंटीमीटर"
      }
    },
    {
      question: {
        en: "1 kilogram = ? grams",
        hi: "1 किलोग्राम = ? ग्राम"
      },
      options: [
        { en: "10", hi: "10" },
        { en: "100", hi: "100" },
        { en: "1000", hi: "1000" },
        { en: "10000", hi: "10000" }
      ],
      correct: { en: "1000", hi: "1000" },
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
        { en: "100", hi: "100" },
        { en: "500", hi: "500" },
        { en: "1000", hi: "1000" },
        { en: "1500", hi: "1500" }
      ],
      correct: { en: "1000", hi: "1000" },
      explanation: {
        en: "1 liter = 1000 milliliters",
        hi: "1 लीटर = 1000 मिलीलीटर"
      }
    },
    {
      question: {
        en: "Which is the larger unit of length?",
        hi: "निम्न में से लंबाई की बड़ी इकाई कौन सी है?"
      },
      options: [
        { en: "cm", hi: "सेमी" },
        { en: "mm", hi: "मिमी" },
        { en: "m", hi: "मीटर" },
        { en: "inch", hi: "इंच" }
      ],
      correct: { en: "m", hi: "मीटर" },
      explanation: {
        en: "Meter is larger than centimeter (cm) and millimeter (mm)",
        hi: "मीटर, सेंटीमीटर और मिलीमीटर से बड़ी इकाई है"
      }
    },
    {
      question: {
        en: "Which is the smaller unit of mass?",
        hi: "द्रव्यमान की सबसे छोटी इकाई कौन सी है?"
      },
      options: [
        { en: "g", hi: "ग्राम" },
        { en: "kg", hi: "किलोग्राम" },
        { en: "mg", hi: "मिलीग्राम" },
        { en: "tonne", hi: "टन" }
      ],
      correct: { en: "mg", hi: "मिलीग्राम" },
      explanation: {
        en: "Milligram (mg) is smaller than gram (g) and kilogram (kg)",
        hi: "मिलीग्राम (mg) ग्राम और किलोग्राम से छोटी इकाई है"
      }
    },
    {
      question: {
        en: "If 1 kg = 1000 g, then 0.5 kg = ?",
        hi: "यदि 1 किग्रा = 1000 ग्राम, तो 0.5 किग्रा = ?"
      },
      options: [
        { en: "200 g", hi: "200 ग्राम" },
        { en: "250 g", hi: "250 ग्राम" },
        { en: "500 g", hi: "500 ग्राम" },
        { en: "100 g", hi: "100 ग्राम" }
      ],
      correct: { en: "500 g", hi: "500 ग्राम" },
      explanation: {
        en: "0.5 × 1000 = 500 grams",
        hi: "0.5 × 1000 = 500 ग्राम"
      }
    },
    {
      question: {
        en: "Convert 250 cm into meters.",
        hi: "250 सेंटीमीटर को मीटर में बदलें।"
      },
      options: [
        { en: "2.5 m", hi: "2.5 मीटर" },
        { en: "25 m", hi: "25 मीटर" },
        { en: "0.25 m", hi: "0.25 मीटर" },
        { en: "3 m", hi: "3 मीटर" }
      ],
      correct: { en: "2.5 m", hi: "2.5 मीटर" },
      explanation: {
        en: "250 ÷ 100 = 2.5 meters",
        hi: "250 ÷ 100 = 2.5 मीटर"
      }
    },
    {
      question: {
        en: "Which is bigger: 1500 mL or 1.5 L?",
        hi: "1500 मिलीलीटर और 1.5 लीटर में कौन बड़ा है?"
      },
      options: [
        { en: "1500 mL", hi: "1500 मिलीलीटर" },
        { en: "1.5 L", hi: "1.5 लीटर" },
        { en: "Both are equal", hi: "दोनों समान हैं" },
        { en: "None", hi: "कोई नहीं" }
      ],
      correct: { en: "Both are equal", hi: "दोनों समान हैं" },
      explanation: {
        en: "1.5 L = 1500 mL",
        hi: "1.5 लीटर = 1500 मिलीलीटर"
      }
    },
    {
      question: {
        en: "Which unit would you use to measure water in a swimming pool?",
        hi: "स्विमिंग पूल में पानी मापने के लिए कौन सी इकाई उपयुक्त है?"
      },
      options: [
        { en: "mL", hi: "मिलीलीटर" },
        { en: "L", hi: "लीटर" },
        { en: "kg", hi: "किलोग्राम" },
        { en: "km", hi: "किलोमीटर" }
      ],
      correct: { en: "L", hi: "लीटर" },
      explanation: {
        en: "Liters are used to measure large quantities of liquid like in pools.",
        hi: "स्विमिंग पूल में पानी को लीटर में मापा जाता है।"
      }
    },
    {
      question: {
        en: "What is 3000 grams in kilograms?",
        hi: "3000 ग्राम कितने किलोग्राम होते हैं?"
      },
      options: [
        { en: "1 kg", hi: "1 किग्रा" },
        { en: "2 kg", hi: "2 किग्रा" },
        { en: "3 kg", hi: "3 किग्रा" },
        { en: "4 kg", hi: "4 किग्रा" }
      ],
      correct: { en: "3 kg", hi: "3 किग्रा" },
      explanation: {
        en: "3000 ÷ 1000 = 3 kilograms",
        hi: "3000 ÷ 1000 = 3 किलोग्राम"
      }
    }
  ]
};

export default unitRelations;
