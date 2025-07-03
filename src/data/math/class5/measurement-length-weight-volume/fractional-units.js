const fractionalUnits = {
  questions: [
    {
      question: {
        en: "Convert 0.5 kg into grams.",
        hi: "0.5 किग्रा को ग्राम में बदलें।"
      },
      options: [
        { en: "50 g", hi: "50 ग्राम" },
        { en: "500 g", hi: "500 ग्राम" },
        { en: "5 g", hi: "5 ग्राम" },
        { en: "150 g", hi: "150 ग्राम" }
      ],
      correct: { en: "500 g", hi: "500 ग्राम" },
      explanation: {
        en: "0.5 × 1000 = 500 grams",
        hi: "0.5 × 1000 = 500 ग्राम"
      }
    },
    {
      question: {
        en: "Convert 0.25 liters into milliliters.",
        hi: "0.25 लीटर को मिलीलीटर में बदलें।"
      },
      options: [
        { en: "250 ml", hi: "250 मि.ली." },
        { en: "25 ml", hi: "25 मि.ली." },
        { en: "100 ml", hi: "100 मि.ली." },
        { en: "200 ml", hi: "200 मि.ली." }
      ],
      correct: { en: "250 ml", hi: "250 मि.ली." },
      explanation: {
        en: "0.25 × 1000 = 250 mL",
        hi: "0.25 × 1000 = 250 मिलीलीटर"
      }
    },
    {
      question: {
        en: "0.75 meters = ? centimeters",
        hi: "0.75 मीटर = ? सेंटीमीटर"
      },
      options: [
        { en: "75 cm", hi: "75 सेमी" },
        { en: "7.5 cm", hi: "7.5 सेमी" },
        { en: "750 cm", hi: "750 सेमी" },
        { en: "705 cm", hi: "705 सेमी" }
      ],
      correct: { en: "75 cm", hi: "75 सेमी" },
      explanation: {
        en: "0.75 × 100 = 75 cm",
        hi: "0.75 × 100 = 75 सेमी"
      }
    },
    {
      question: {
        en: "Convert 0.1 kg into grams.",
        hi: "0.1 किग्रा को ग्राम में बदलें।"
      },
      options: [
        { en: "10 g", hi: "10 ग्राम" },
        { en: "100 g", hi: "100 ग्राम" },
        { en: "1000 g", hi: "1000 ग्राम" },
        { en: "1 g", hi: "1 ग्राम" }
      ],
      correct: { en: "100 g", hi: "100 ग्राम" },
      explanation: {
        en: "0.1 × 1000 = 100 g",
        hi: "0.1 × 1000 = 100 ग्राम"
      }
    },
    {
      question: {
        en: "0.6 L = ? mL",
        hi: "0.6 लीटर = ? मिलीलीटर"
      },
      options: [
        { en: "60 mL", hi: "60 मि.ली." },
        { en: "600 mL", hi: "600 मि.ली." },
        { en: "6000 mL", hi: "6000 मि.ली." },
        { en: "6 mL", hi: "6 मि.ली." }
      ],
      correct: { en: "600 mL", hi: "600 मि.ली." },
      explanation: {
        en: "0.6 × 1000 = 600 mL",
        hi: "0.6 × 1000 = 600 मि.ली."
      }
    },
    {
      question: {
        en: "Convert 1.25 meters into centimeters.",
        hi: "1.25 मीटर को सेमी में बदलें।"
      },
      options: [
        { en: "125 cm", hi: "125 सेमी" },
        { en: "12.5 cm", hi: "12.5 सेमी" },
        { en: "1.25 cm", hi: "1.25 सेमी" },
        { en: "150 cm", hi: "150 सेमी" }
      ],
      correct: { en: "125 cm", hi: "125 सेमी" },
      explanation: {
        en: "1.25 × 100 = 125 cm",
        hi: "1.25 × 100 = 125 सेमी"
      }
    },
    {
      question: {
        en: "Convert 1.5 L to milliliters.",
        hi: "1.5 लीटर को मिलीलीटर में बदलें।"
      },
      options: [
        { en: "1500 mL", hi: "1500 मि.ली." },
        { en: "1050 mL", hi: "1050 मि.ली." },
        { en: "1150 mL", hi: "1150 मि.ली." },
        { en: "500 mL", hi: "500 मि.ली." }
      ],
      correct: { en: "1500 mL", hi: "1500 मि.ली." },
      explanation: {
        en: "1.5 × 1000 = 1500 mL",
        hi: "1.5 × 1000 = 1500 मि.ली."
      }
    },
    {
      question: {
        en: "0.05 kg = ? grams",
        hi: "0.05 किग्रा = ? ग्राम"
      },
      options: [
        { en: "5 g", hi: "5 ग्राम" },
        { en: "50 g", hi: "50 ग्राम" },
        { en: "500 g", hi: "500 ग्राम" },
        { en: "0.5 g", hi: "0.5 ग्राम" }
      ],
      correct: { en: "50 g", hi: "50 ग्राम" },
      explanation: {
        en: "0.05 × 1000 = 50 grams",
        hi: "0.05 × 1000 = 50 ग्राम"
      }
    },
    {
      question: {
        en: "0.2 meters = ? centimeters",
        hi: "0.2 मीटर = ? सेंटीमीटर"
      },
      options: [
        { en: "20 cm", hi: "20 सेमी" },
        { en: "2 cm", hi: "2 सेमी" },
        { en: "200 cm", hi: "200 सेमी" },
        { en: "12 cm", hi: "12 सेमी" }
      ],
      correct: { en: "20 cm", hi: "20 सेमी" },
      explanation: {
        en: "0.2 × 100 = 20 cm",
        hi: "0.2 × 100 = 20 सेमी"
      }
    },
    {
      question: {
        en: "Convert 2.5 kg into grams.",
        hi: "2.5 किग्रा को ग्राम में बदलें।"
      },
      options: [
        { en: "250 g", hi: "250 ग्राम" },
        { en: "2500 g", hi: "2500 ग्राम" },
        { en: "25 g", hi: "25 ग्राम" },
        { en: "2000 g", hi: "2000 ग्राम" }
      ],
      correct: { en: "2500 g", hi: "2500 ग्राम" },
      explanation: {
        en: "2.5 × 1000 = 2500 g",
        hi: "2.5 × 1000 = 2500 ग्राम"
      }
    }
  ]
};

export default fractionalUnits;
