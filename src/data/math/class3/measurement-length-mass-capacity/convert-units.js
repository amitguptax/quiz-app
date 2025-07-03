const convertUnits = {
  label: {
    en: "Convert units (kg–g, m–cm, l–ml)",
    hi: "इकाइयों का रूपांतरण करें (कि.ग्रा.–ग्रा., मी.–से.मी., ल.–मि.ली.)"
  },
  questions: [
    {
      question: {
        en: "1 kilogram is equal to how many grams?",
        hi: "1 किलोग्राम में कितने ग्राम होते हैं?"
      },
      options: [
        { en: "100 g", hi: "100 ग्राम" },
        { en: "500 g", hi: "500 ग्राम" },
        { en: "1000 g", hi: "1000 ग्राम" },
        { en: "1500 g", hi: "1500 ग्राम" }
      ],
      correct: { en: "1000 g", hi: "1000 ग्राम" },
      explanation: {
        en: "1 kilogram = 1000 grams.",
        hi: "1 किलोग्राम = 1000 ग्राम।"
      }
    },
    {
      question: {
        en: "How many centimetres are there in 1 metre?",
        hi: "1 मीटर में कितने सेंटीमीटर होते हैं?"
      },
      options: [
        { en: "10 cm", hi: "10 सेंटीमीटर" },
        { en: "100 cm", hi: "100 सेंटीमीटर" },
        { en: "1000 cm", hi: "1000 सेंटीमीटर" },
        { en: "500 cm", hi: "500 सेंटीमीटर" }
      ],
      correct: { en: "100 cm", hi: "100 सेंटीमीटर" },
      explanation: {
        en: "1 metre = 100 centimetres.",
        hi: "1 मीटर = 100 सेंटीमीटर।"
      }
    },
    {
      question: {
        en: "Convert 2.5 kg into grams.",
        hi: "2.5 कि.ग्रा. को ग्राम में बदलें।"
      },
      options: [
        { en: "250 g", hi: "250 ग्राम" },
        { en: "2500 g", hi: "2500 ग्राम" },
        { en: "25 g", hi: "25 ग्राम" },
        { en: "2000 g", hi: "2000 ग्राम" }
      ],
      correct: { en: "2500 g", hi: "2500 ग्राम" },
      explanation: {
        en: "2.5 × 1000 = 2500 grams.",
        hi: "2.5 × 1000 = 2500 ग्राम।"
      }
    },
    {
      question: {
        en: "Convert 3 litres into millilitres.",
        hi: "3 लीटर को मिलीलीटर में बदलें।"
      },
      options: [
        { en: "300 ml", hi: "300 मि.ली." },
        { en: "3000 ml", hi: "3000 मि.ली." },
        { en: "30 ml", hi: "30 मि.ली." },
        { en: "100 ml", hi: "100 मि.ली." }
      ],
      correct: { en: "3000 ml", hi: "3000 मि.ली." },
      explanation: {
        en: "1 litre = 1000 ml, so 3 litres = 3000 ml.",
        hi: "1 लीटर = 1000 मि.ली., तो 3 लीटर = 3000 मि.ली।"
      }
    },
    {
      question: {
        en: "Convert 250 cm to metres.",
        hi: "250 सेंटीमीटर को मीटर में बदलें।"
      },
      options: [
        { en: "2.5 m", hi: "2.5 मीटर" },
        { en: "25 m", hi: "25 मीटर" },
        { en: "0.25 m", hi: "0.25 मीटर" },
        { en: "5 m", hi: "5 मीटर" }
      ],
      correct: { en: "2.5 m", hi: "2.5 मीटर" },
      explanation: {
        en: "250 ÷ 100 = 2.5 metres.",
        hi: "250 ÷ 100 = 2.5 मीटर।"
      }
    },
    {
      question: {
        en: "Convert 5000 g to kg.",
        hi: "5000 ग्राम को कि.ग्रा. में बदलें।"
      },
      options: [
        { en: "50 kg", hi: "50 कि.ग्रा." },
        { en: "0.5 kg", hi: "0.5 कि.ग्रा." },
        { en: "5 kg", hi: "5 कि.ग्रा." },
        { en: "500 kg", hi: "500 कि.ग्रा." }
      ],
      correct: { en: "5 kg", hi: "5 कि.ग्रा." },
      explanation: {
        en: "5000 ÷ 1000 = 5 kilograms.",
        hi: "5000 ÷ 1000 = 5 कि.ग्रा।"
      }
    },
    {
      question: {
        en: "Convert 1.2 m into cm.",
        hi: "1.2 मीटर को सेंटीमीटर में बदलें।"
      },
      options: [
        { en: "120 cm", hi: "120 सेंटीमीटर" },
        { en: "12 cm", hi: "12 सेंटीमीटर" },
        { en: "102 cm", hi: "102 सेंटीमीटर" },
        { en: "112 cm", hi: "112 सेंटीमीटर" }
      ],
      correct: { en: "120 cm", hi: "120 सेंटीमीटर" },
      explanation: {
        en: "1.2 × 100 = 120 cm.",
        hi: "1.2 × 100 = 120 सेंटीमीटर।"
      }
    },
    {
      question: {
        en: "Which is equal to 500 ml?",
        hi: "निम्न में से कौन 500 मि.ली. के बराबर है?"
      },
      options: [
        { en: "0.5 litre", hi: "0.5 लीटर" },
        { en: "5 litres", hi: "5 लीटर" },
        { en: "50 litres", hi: "50 लीटर" },
        { en: "0.05 litre", hi: "0.05 लीटर" }
      ],
      correct: { en: "0.5 litre", hi: "0.5 लीटर" },
      explanation: {
        en: "500 ml = 0.5 litres.",
        hi: "500 मि.ली. = 0.5 लीटर।"
      }
    },
    {
      question: {
        en: "Convert 2.5 litres into millilitres.",
        hi: "2.5 लीटर को मि.ली. में बदलें।"
      },
      options: [
        { en: "250 ml", hi: "250 मि.ली." },
        { en: "2500 ml", hi: "2500 मि.ली." },
        { en: "25 ml", hi: "25 मि.ली." },
        { en: "200 ml", hi: "200 मि.ली." }
      ],
      correct: { en: "2500 ml", hi: "2500 मि.ली." },
      explanation: {
        en: "2.5 × 1000 = 2500 ml.",
        hi: "2.5 × 1000 = 2500 मि.ली।"
      }
    },
    {
      question: {
        en: "How many kg in 3500 g?",
        hi: "3500 ग्राम में कितने कि.ग्रा. होते हैं?"
      },
      options: [
        { en: "3.5 kg", hi: "3.5 कि.ग्रा." },
        { en: "35 kg", hi: "35 कि.ग्रा." },
        { en: "0.35 kg", hi: "0.35 कि.ग्रा." },
        { en: "5 kg", hi: "5 कि.ग्रा." }
      ],
      correct: { en: "3.5 kg", hi: "3.5 कि.ग्रा." },
      explanation: {
        en: "3500 ÷ 1000 = 3.5 kilograms.",
        hi: "3500 ÷ 1000 = 3.5 कि.ग्रा।"
      }
    }
  ]
};

export default convertUnits;
