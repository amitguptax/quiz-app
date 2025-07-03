const measurementProblems = {
  questions: [
    {
      question: {
        en: "A rope is 8 meters long. If 3 meters are cut, how much rope is left?",
        hi: "एक रस्सी 8 मीटर लंबी है। यदि 3 मीटर काट दिए जाएँ, तो कितनी रस्सी बचती है?"
      },
      options: [
        { en: "11 m", hi: "11 मीटर" },
        { en: "5 m", hi: "5 मीटर" },
        { en: "3 m", hi: "3 मीटर" },
        { en: "8 m", hi: "8 मीटर" }
      ],
      correct: { en: "5 m", hi: "5 मीटर" },
      explanation: {
        en: "Remaining rope = 8 – 3 = 5 meters",
        hi: "बाकी रस्सी = 8 – 3 = 5 मीटर"
      }
    },
    {
      question: {
        en: "A bucket holds 15 liters of water. If 5 liters are used, how much is left?",
        hi: "एक बाल्टी में 15 लीटर पानी है। यदि 5 लीटर उपयोग कर लिया जाए, तो कितना पानी बचता है?"
      },
      options: [
        { en: "10 L", hi: "10 लीटर" },
        { en: "20 L", hi: "20 लीटर" },
        { en: "5 L", hi: "5 लीटर" },
        { en: "25 L", hi: "25 लीटर" }
      ],
      correct: { en: "10 L", hi: "10 लीटर" },
      explanation: {
        en: "Remaining water = 15 – 5 = 10 liters",
        hi: "बाकी पानी = 15 – 5 = 10 लीटर"
      }
    },
    {
      question: {
        en: "A man buys 3 kg of sugar and 2 kg of flour. What is the total weight?",
        hi: "एक व्यक्ति 3 किलोग्राम चीनी और 2 किलोग्राम आटा खरीदता है। कुल वजन क्या है?"
      },
      options: [
        { en: "6 kg", hi: "6 किग्रा" },
        { en: "4 kg", hi: "4 किग्रा" },
        { en: "5 kg", hi: "5 किग्रा" },
        { en: "3 kg", hi: "3 किग्रा" }
      ],
      correct: { en: "5 kg", hi: "5 किग्रा" },
      explanation: {
        en: "Total weight = 3 + 2 = 5 kg",
        hi: "कुल वजन = 3 + 2 = 5 किग्रा"
      }
    },
    {
      question: {
        en: "A water tank has 100 liters. 30 liters are used. How much remains?",
        hi: "एक टंकी में 100 लीटर पानी है। 30 लीटर उपयोग हो गया। कितना पानी बचा?"
      },
      options: [
        { en: "130 L", hi: "130 लीटर" },
        { en: "80 L", hi: "80 लीटर" },
        { en: "70 L", hi: "70 लीटर" },
        { en: "60 L", hi: "60 लीटर" }
      ],
      correct: { en: "70 L", hi: "70 लीटर" },
      explanation: {
        en: "Remaining = 100 – 30 = 70 L",
        hi: "बाकी = 100 – 30 = 70 लीटर"
      }
    },
    {
      question: {
        en: "A stick is 2 meters long. Another is 1.5 meters. Total length?",
        hi: "एक छड़ी 2 मीटर लंबी है और दूसरी 1.5 मीटर। कुल लंबाई क्या है?"
      },
      options: [
        { en: "3.5 m", hi: "3.5 मीटर" },
        { en: "3 m", hi: "3 मीटर" },
        { en: "2.5 m", hi: "2.5 मीटर" },
        { en: "4 m", hi: "4 मीटर" }
      ],
      correct: { en: "3.5 m", hi: "3.5 मीटर" },
      explanation: {
        en: "Total = 2 + 1.5 = 3.5 m",
        hi: "कुल = 2 + 1.5 = 3.5 मीटर"
      }
    },
    {
      question: {
        en: "If 2 bags weigh 3 kg and 5 kg, total weight is:",
        hi: "यदि दो बैग का वजन 3 किग्रा और 5 किग्रा है, तो कुल वजन क्या है?"
      },
      options: [
        { en: "8 kg", hi: "8 किग्रा" },
        { en: "7 kg", hi: "7 किग्रा" },
        { en: "6 kg", hi: "6 किग्रा" },
        { en: "9 kg", hi: "9 किग्रा" }
      ],
      correct: { en: "8 kg", hi: "8 किग्रा" },
      explanation: {
        en: "3 + 5 = 8 kg",
        hi: "3 + 5 = 8 किग्रा"
      }
    },
    {
      question: {
        en: "You drink 250 ml of juice from a 1-liter bottle. Juice left?",
        hi: "1 लीटर बोतल में से 250 मिलीलीटर जूस पिया। कितना बचा?"
      },
      options: [
        { en: "750 ml", hi: "750 मिली" },
        { en: "500 ml", hi: "500 मिली" },
        { en: "1000 ml", hi: "1000 मिली" },
        { en: "250 ml", hi: "250 मिली" }
      ],
      correct: { en: "750 ml", hi: "750 मिली" },
      explanation: {
        en: "1000 ml – 250 ml = 750 ml",
        hi: "1000 मिली – 250 मिली = 750 मिली"
      }
    },
    {
      question: {
        en: "If a pipe fills 10 liters per minute, how much in 4 minutes?",
        hi: "यदि एक पाइप प्रति मिनट 10 लीटर भरता है, तो 4 मिनट में कितना भरेगा?"
      },
      options: [
        { en: "40 L", hi: "40 लीटर" },
        { en: "20 L", hi: "20 लीटर" },
        { en: "14 L", hi: "14 लीटर" },
        { en: "24 L", hi: "24 लीटर" }
      ],
      correct: { en: "40 L", hi: "40 लीटर" },
      explanation: {
        en: "10 × 4 = 40 L",
        hi: "10 × 4 = 40 लीटर"
      }
    },
    {
      question: {
        en: "You used 2.5 liters from a 5-liter can. What's left?",
        hi: "5 लीटर की कैन में से 2.5 लीटर उपयोग किया। कितना बचा?"
      },
      options: [
        { en: "3 L", hi: "3 लीटर" },
        { en: "2.5 L", hi: "2.5 लीटर" },
        { en: "1.5 L", hi: "1.5 लीटर" },
        { en: "2 L", hi: "2 लीटर" }
      ],
      correct: { en: "2.5 L", hi: "2.5 लीटर" },
      explanation: {
        en: "5 – 2.5 = 2.5 L",
        hi: "5 – 2.5 = 2.5 लीटर"
      }
    },
    {
      question: {
        en: "Raju bought 2.25 kg rice and 1.75 kg dal. Total weight?",
        hi: "राजू ने 2.25 किग्रा चावल और 1.75 किग्रा दाल खरीदी। कुल वजन?"
      },
      options: [
        { en: "4 kg", hi: "4 किग्रा" },
        { en: "3.5 kg", hi: "3.5 किग्रा" },
        { en: "4.25 kg", hi: "4.25 किग्रा" },
        { en: "5 kg", hi: "5 किग्रा" }
      ],
      correct: { en: "4 kg", hi: "4 किग्रा" },
      explanation: {
        en: "2.25 + 1.75 = 4 kg",
        hi: "2.25 + 1.75 = 4 किग्रा"
      }
    }
  ]
};

export default measurementProblems;
