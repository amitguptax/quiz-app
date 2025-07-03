const convertUnits = {
  questions: [
    {
      question: {
        en: "How many milliliters are in 2 liters?",
        hi: "2 लीटर में कितने मिलीलीटर होते हैं?"
      },
      options: [
        { en: "200 ml", hi: "200 मि.ली." },
        { en: "500 ml", hi: "500 मि.ली." },
        { en: "1000 ml", hi: "1000 मि.ली." },
        { en: "2000 ml", hi: "2000 मि.ली." }
      ],
      correct: { en: "2000 ml", hi: "2000 मि.ली." },
      explanation: {
        en: "1 liter = 1000 mL, so 2 liters = 2000 mL",
        hi: "1 लीटर = 1000 मि.ली., इसलिए 2 लीटर = 2000 मि.ली."
      }
    },
    {
      question: {
        en: "Convert 300 cm to meters.",
        hi: "300 सेमी को मीटर में बदलें।"
      },
      options: [
        { en: "0.3 m", hi: "0.3 मीटर" },
        { en: "3 m", hi: "3 मीटर" },
        { en: "30 m", hi: "30 मीटर" },
        { en: "3000 m", hi: "3000 मीटर" }
      ],
      correct: { en: "3 m", hi: "3 मीटर" },
      explanation: {
        en: "300 ÷ 100 = 3 meters",
        hi: "300 ÷ 100 = 3 मीटर"
      }
    },
    {
      question: {
        en: "Convert 1500 g to kilograms.",
        hi: "1500 ग्राम को किलोग्राम में बदलें।"
      },
      options: [
        { en: "1.5 kg", hi: "1.5 किलोग्राम" },
        { en: "15 kg", hi: "15 किलोग्राम" },
        { en: "0.15 kg", hi: "0.15 किलोग्राम" },
        { en: "150 kg", hi: "150 किलोग्राम" }
      ],
      correct: { en: "1.5 kg", hi: "1.5 किलोग्राम" },
      explanation: {
        en: "1500 ÷ 1000 = 1.5 kg",
        hi: "1500 ÷ 1000 = 1.5 किलोग्राम"
      }
    },
    {
      question: {
        en: "Convert 2.5 meters into centimeters.",
        hi: "2.5 मीटर को सेंटीमीटर में बदलें।"
      },
      options: [
        { en: "250 cm", hi: "250 सेमी" },
        { en: "25 cm", hi: "25 सेमी" },
        { en: "2.5 cm", hi: "2.5 सेमी" },
        { en: "205 cm", hi: "205 सेमी" }
      ],
      correct: { en: "250 cm", hi: "250 सेमी" },
      explanation: {
        en: "2.5 × 100 = 250 cm",
        hi: "2.5 × 100 = 250 सेमी"
      }
    },
    {
      question: {
        en: "Convert 0.75 liters into milliliters.",
        hi: "0.75 लीटर को मिलीलीटर में बदलें।"
      },
      options: [
        { en: "750 mL", hi: "750 मि.ली." },
        { en: "75 mL", hi: "75 मि.ली." },
        { en: "705 mL", hi: "705 मि.ली." },
        { en: "700 mL", hi: "700 मि.ली." }
      ],
      correct: { en: "750 mL", hi: "750 मि.ली." },
      explanation: {
        en: "0.75 × 1000 = 750 mL",
        hi: "0.75 × 1000 = 750 मि.ली."
      }
    },
    {
      question: {
        en: "Convert 4 kg into grams.",
        hi: "4 किलोग्राम को ग्राम में बदलें।"
      },
      options: [
        { en: "400 g", hi: "400 ग्राम" },
        { en: "4000 g", hi: "4000 ग्राम" },
        { en: "40 g", hi: "40 ग्राम" },
        { en: "4.4 g", hi: "4.4 ग्राम" }
      ],
      correct: { en: "4000 g", hi: "4000 ग्राम" },
      explanation: {
        en: "1 kg = 1000 g, so 4 × 1000 = 4000 g",
        hi: "1 किग्रा = 1000 ग्राम, इसलिए 4 × 1000 = 4000 ग्राम"
      }
    },
    {
      question: {
        en: "Convert 1.25 meters into centimeters.",
        hi: "1.25 मीटर को सेंटीमीटर में बदलें।"
      },
      options: [
        { en: "125 cm", hi: "125 सेमी" },
        { en: "112 cm", hi: "112 सेमी" },
        { en: "150 cm", hi: "150 सेमी" },
        { en: "105 cm", hi: "105 सेमी" }
      ],
      correct: { en: "125 cm", hi: "125 सेमी" },
      explanation: {
        en: "1.25 × 100 = 125 cm",
        hi: "1.25 × 100 = 125 सेमी"
      }
    },
    {
      question: {
        en: "Convert 2000 ml to liters.",
        hi: "2000 मिलीलीटर को लीटर में बदलें।"
      },
      options: [
        { en: "0.2 L", hi: "0.2 लीटर" },
        { en: "2 L", hi: "2 लीटर" },
        { en: "20 L", hi: "20 लीटर" },
        { en: "200 L", hi: "200 लीटर" }
      ],
      correct: { en: "2 L", hi: "2 लीटर" },
      explanation: {
        en: "2000 ÷ 1000 = 2 L",
        hi: "2000 ÷ 1000 = 2 लीटर"
      }
    },
    {
      question: {
        en: "Convert 0.2 kg into grams.",
        hi: "0.2 किलोग्राम को ग्राम में बदलें।"
      },
      options: [
        { en: "200 g", hi: "200 ग्राम" },
        { en: "20 g", hi: "20 ग्राम" },
        { en: "2 g", hi: "2 ग्राम" },
        { en: "100 g", hi: "100 ग्राम" }
      ],
      correct: { en: "200 g", hi: "200 ग्राम" },
      explanation: {
        en: "0.2 × 1000 = 200 g",
        hi: "0.2 × 1000 = 200 ग्राम"
      }
    },
    {
      question: {
        en: "Convert 500 mL to liters.",
        hi: "500 मिलीलीटर को लीटर में बदलें।"
      },
      options: [
        { en: "0.5 L", hi: "0.5 लीटर" },
        { en: "5 L", hi: "5 लीटर" },
        { en: "50 L", hi: "50 लीटर" },
        { en: "0.05 L", hi: "0.05 लीटर" }
      ],
      correct: { en: "0.5 L", hi: "0.5 लीटर" },
      explanation: {
        en: "500 ÷ 1000 = 0.5 L",
        hi: "500 ÷ 1000 = 0.5 लीटर"
      }
    }
  ]
};

export default convertUnits;
