const convertTime = {
  questions: [
    {
      question: {
        en: "How many seconds are there in 5 minutes?",
        hi: "5 मिनट में कितने सेकंड होते हैं?"
      },
      options: [
        { en: "300", hi: "300" },
        { en: "60", hi: "60" },
        { en: "150", hi: "150" },
        { en: "180", hi: "180" }
      ],
      correct: { en: "300", hi: "300" },
      explanation: {
        en: "1 minute = 60 seconds, so 5 × 60 = 300 seconds",
        hi: "1 मिनट = 60 सेकंड, तो 5 × 60 = 300 सेकंड"
      }
    },
    {
      question: {
        en: "Convert 2 hours into minutes.",
        hi: "2 घंटे को मिनटों में बदलें।"
      },
      options: [
        { en: "120 minutes", hi: "120 मिनट" },
        { en: "60 minutes", hi: "60 मिनट" },
        { en: "100 minutes", hi: "100 मिनट" },
        { en: "90 minutes", hi: "90 मिनट" }
      ],
      correct: { en: "120 minutes", hi: "120 मिनट" },
      explanation: {
        en: "1 hour = 60 minutes, so 2 × 60 = 120 minutes",
        hi: "1 घंटा = 60 मिनट, तो 2 × 60 = 120 मिनट"
      }
    },
    {
      question: {
        en: "Convert 1 hour 30 minutes into minutes.",
        hi: "1 घंटा 30 मिनट को मिनटों में बदलें।"
      },
      options: [
        { en: "90", hi: "90" },
        { en: "100", hi: "100" },
        { en: "60", hi: "60" },
        { en: "120", hi: "120" }
      ],
      correct: { en: "90", hi: "90" },
      explanation: {
        en: "1 hour = 60 minutes, so 60 + 30 = 90 minutes",
        hi: "1 घंटा = 60 मिनट, तो 60 + 30 = 90 मिनट"
      }
    },
    {
      question: {
        en: "Convert 360 seconds into minutes.",
        hi: "360 सेकंड को मिनटों में बदलें।"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "3", hi: "3" },
        { en: "5", hi: "5" },
        { en: "4", hi: "4" }
      ],
      correct: { en: "6", hi: "6" },
      explanation: {
        en: "1 minute = 60 seconds, so 360 ÷ 60 = 6 minutes",
        hi: "1 मिनट = 60 सेकंड, तो 360 ÷ 60 = 6 मिनट"
      }
    },
    {
      question: {
        en: "How many hours are there in 180 minutes?",
        hi: "180 मिनट में कितने घंटे होते हैं?"
      },
      options: [
        { en: "3", hi: "3" },
        { en: "2", hi: "2" },
        { en: "1.5", hi: "1.5" },
        { en: "4", hi: "4" }
      ],
      correct: { en: "3", hi: "3" },
      explanation: {
        en: "1 hour = 60 minutes, so 180 ÷ 60 = 3 hours",
        hi: "1 घंटा = 60 मिनट, तो 180 ÷ 60 = 3 घंटे"
      }
    },
    {
      question: {
        en: "Convert 2 hours 15 minutes into minutes.",
        hi: "2 घंटे 15 मिनट को मिनटों में बदलें।"
      },
      options: [
        { en: "135", hi: "135" },
        { en: "125", hi: "125" },
        { en: "120", hi: "120" },
        { en: "140", hi: "140" }
      ],
      correct: { en: "135", hi: "135" },
      explanation: {
        en: "2 hours = 120 minutes, 120 + 15 = 135 minutes",
        hi: "2 घंटे = 120 मिनट, 120 + 15 = 135 मिनट"
      }
    },
    {
      question: {
        en: "How many minutes are there in half an hour?",
        hi: "आधा घंटा कितने मिनट का होता है?"
      },
      options: [
        { en: "30", hi: "30" },
        { en: "60", hi: "60" },
        { en: "15", hi: "15" },
        { en: "45", hi: "45" }
      ],
      correct: { en: "30", hi: "30" },
      explanation: {
        en: "Half of 60 minutes = 30 minutes",
        hi: "60 मिनट का आधा = 30 मिनट"
      }
    },
    {
      question: {
        en: "Convert 1 minute 20 seconds into seconds.",
        hi: "1 मिनट 20 सेकंड को सेकंड में बदलें।"
      },
      options: [
        { en: "80", hi: "80" },
        { en: "90", hi: "90" },
        { en: "70", hi: "70" },
        { en: "100", hi: "100" }
      ],
      correct: { en: "80", hi: "80" },
      explanation: {
        en: "1 minute = 60 seconds, 60 + 20 = 80 seconds",
        hi: "1 मिनट = 60 सेकंड, 60 + 20 = 80 सेकंड"
      }
    },
    {
      question: {
        en: "If a game lasts 150 seconds, how many minutes is that?",
        hi: "यदि एक खेल 150 सेकंड चलता है, तो वह कितने मिनट होता है?"
      },
      options: [
        { en: "2.5", hi: "2.5" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "1.5", hi: "1.5" }
      ],
      correct: { en: "2.5", hi: "2.5" },
      explanation: {
        en: "150 ÷ 60 = 2.5 minutes",
        hi: "150 ÷ 60 = 2.5 मिनट"
      }
    },
    {
      question: {
        en: "How many seconds are there in 2 minutes and 30 seconds?",
        hi: "2 मिनट 30 सेकंड में कितने सेकंड होते हैं?"
      },
      options: [
        { en: "150", hi: "150" },
        { en: "160", hi: "160" },
        { en: "140", hi: "140" },
        { en: "180", hi: "180" }
      ],
      correct: { en: "150", hi: "150" },
      explanation: {
        en: "2 minutes = 120 seconds, 120 + 30 = 150 seconds",
        hi: "2 मिनट = 120 सेकंड, 120 + 30 = 150 सेकंड"
      }
    }
  ]
};

export default convertTime;
