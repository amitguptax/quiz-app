const realWordMeasure = {
  questions: [
    {
      question: {
        en: "Ravi walked 2 km in the morning and 1500 meters in the evening. How far did he walk in total?",
        hi: "रवि ने सुबह 2 किमी और शाम को 1500 मीटर चले। कुल दूरी कितनी हुई?"
      },
      options: ["2500 m", "2000 m", "1500 m", "3500 m"],
      correct: { en: "3500 m", hi: "3500 मी" },
      explanation: {
        en: "2 km = 2000 m; 2000 + 1500 = 3500 m",
        hi: "2 किमी = 2000 मी; 2000 + 1500 = 3500 मी"
      }
    },
    {
      question: {
        en: "A bottle holds 1.5 L of juice. How much juice is in 3 such bottles?",
        hi: "एक बोतल में 1.5 लीटर रस आता है। 3 बोतलों में कितना रस होगा?"
      },
      options: ["4 L", "4.5 L", "3.5 L", "5 L"],
      correct: { en: "4.5 L", hi: "4.5 लीटर" },
      explanation: {
        en: "1.5 × 3 = 4.5 liters",
        hi: "1.5 × 3 = 4.5 लीटर"
      }
    },
    {
      question: {
        en: "A watermelon weighs 2.75 kg. What is the weight of 2 such watermelons?",
        hi: "एक तरबूज का वजन 2.75 किग्रा है। 2 तरबूज का वजन कितना होगा?"
      },
      options: ["5 kg", "5.25 kg", "5.5 kg", "6 kg"],
      correct: { en: "5.5 kg", hi: "5.5 किग्रा" },
      explanation: {
        en: "2.75 × 2 = 5.5 kg",
        hi: "2.75 × 2 = 5.5 किग्रा"
      }
    },
    {
      question: {
        en: "A pipe is 1.2 meters long. How many such pipes are needed to make 6 meters?",
        hi: "एक पाइप 1.2 मीटर लंबा है। 6 मीटर के लिए कितनी पाइपें चाहिए?"
      },
      options: ["5", "6", "4", "10"],
      correct: { en: "5", hi: "5" },
      explanation: {
        en: "6 ÷ 1.2 = 5 pipes",
        hi: "6 ÷ 1.2 = 5 पाइप"
      }
    },
    {
      question: {
        en: "Meena drank 250 ml of milk in the morning and 750 ml in the evening. How much did she drink in a day?",
        hi: "मीना ने सुबह 250 मि.ली. और शाम को 750 मि.ली. दूध पिया। कुल कितना दूध पिया?"
      },
      options: ["1 liter", "500 ml", "750 ml", "1.5 liters"],
      correct: { en: "1 liter", hi: "1 लीटर" },
      explanation: {
        en: "250 ml + 750 ml = 1000 ml = 1 liter",
        hi: "250 + 750 = 1000 मि.ली. = 1 लीटर"
      }
    },
    {
      question: {
        en: "A rope is 4.5 meters long. How much rope is left after cutting 2 meters?",
        hi: "एक रस्सी 4.5 मीटर लंबी है। 2 मीटर काटने के बाद कितनी बचती है?"
      },
      options: ["2.5 m", "3.5 m", "1.5 m", "2 m"],
      correct: { en: "2.5 m", hi: "2.5 मीटर" },
      explanation: {
        en: "4.5 – 2 = 2.5 meters",
        hi: "4.5 – 2 = 2.5 मीटर"
      }
    },
    {
      question: {
        en: "A bucket holds 12 liters. How much water is in 4 such buckets?",
        hi: "एक बाल्टी में 12 लीटर पानी आता है। 4 बाल्टियों में कितना होगा?"
      },
      options: ["24 L", "36 L", "48 L", "12 L"],
      correct: { en: "48 L", hi: "48 लीटर" },
      explanation: {
        en: "12 × 4 = 48 liters",
        hi: "12 × 4 = 48 लीटर"
      }
    },
    {
      question: {
        en: "A watermelon is 1.2 kg heavier than a melon that weighs 2.5 kg. What is the weight of the watermelon?",
        hi: "एक तरबूज 2.5 किग्रा के खरबूजे से 1.2 किग्रा भारी है। तरबूज का वजन कितना है?"
      },
      options: ["3.7 kg", "3.5 kg", "2.7 kg", "4.2 kg"],
      correct: { en: "3.7 kg", hi: "3.7 किग्रा" },
      explanation: {
        en: "2.5 + 1.2 = 3.7 kg",
        hi: "2.5 + 1.2 = 3.7 किग्रा"
      }
    },
    {
      question: {
        en: "An object is 0.75 m long. What is its length in centimeters?",
        hi: "एक वस्तु 0.75 मीटर लंबी है। यह कितनी सेंटीमीटर है?"
      },
      options: ["75 cm", "7.5 cm", "750 cm", "150 cm"],
      correct: { en: "75 cm", hi: "75 सेमी" },
      explanation: {
        en: "0.75 × 100 = 75 cm",
        hi: "0.75 × 100 = 75 सेमी"
      }
    },
    {
      question: {
        en: "A bag weighs 2.25 kg. Another weighs 1.75 kg. What is the total weight?",
        hi: "एक बैग का वजन 2.25 किग्रा है। दूसरा बैग 1.75 किग्रा है। कुल वजन कितना है?"
      },
      options: ["4 kg", "3 kg", "5 kg", "4.25 kg"],
      correct: { en: "4 kg", hi: "4 किग्रा" },
      explanation: {
        en: "2.25 + 1.75 = 4.00 kg",
        hi: "2.25 + 1.75 = 4.00 किग्रा"
      }
    }
  ]
};

export default realWordMeasure;
