const volumeCapacity = [
  {
    id: 1,
    question: {
      en: "What is the volume formula of a cube with side 'a'?",
      hi: "'a' भुजा वाले घन का आयतन ज्ञात करने का सूत्र क्या है?"
    },
    options: ["a²", "a³", "6a²", "4a³"],
    answer: "a³",
    explanation: {
      en: "Volume of a cube = side × side × side = a³",
      hi: "घन का आयतन = भुजा × भुजा × भुजा = a³"
    }
  },
  {
    id: 2,
    question: {
      en: "Find the volume of a cube with side 4 cm.",
      hi: "4 सेमी भुजा वाले घन का आयतन ज्ञात करें।"
    },
    options: ["16 cm³", "64 cm³", "32 cm³", "48 cm³"],
    answer: "64 cm³",
    explanation: {
      en: "Volume = a³ = 4³ = 64 cm³",
      hi: "आयतन = a³ = 4³ = 64 सेमी³"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the volume formula of a cuboid?",
      hi: "घनाभ का आयतन ज्ञात करने का सूत्र क्या है?"
    },
    options: ["l + b + h", "2(lb + bh + hl)", "l × b × h", "l × h"],
    answer: "l × b × h",
    explanation: {
      en: "Volume of a cuboid = length × breadth × height",
      hi: "घनाभ का आयतन = लंबाई × चौड़ाई × ऊँचाई"
    }
  },
  {
    id: 4,
    question: {
      en: "Find the volume of a cuboid of dimensions 5 cm × 3 cm × 2 cm.",
      hi: "5 सेमी × 3 सेमी × 2 सेमी घनाभ का आयतन ज्ञात करें।"
    },
    options: ["20 cm³", "25 cm³", "30 cm³", "60 cm³"],
    answer: "30 cm³",
    explanation: {
      en: "Volume = 5 × 3 × 2 = 30 cm³",
      hi: "आयतन = 5 × 3 × 2 = 30 सेमी³"
    }
  },
  {
    id: 5,
    question: {
      en: "What is the volume formula of a cylinder?",
      hi: "सिलेंडर का आयतन ज्ञात करने का सूत्र क्या है?"
    },
    options: ["πr²h", "2πrh", "πr² + h", "2πr² + 2πrh"],
    answer: "πr²h",
    explanation: {
      en: "Volume of a cylinder = π × r² × h",
      hi: "सिलेंडर का आयतन = π × r² × h"
    }
  },
  {
    id: 6,
    question: {
      en: "Find the volume of a cylinder with r = 2 cm and h = 10 cm. (Use π = 3.14)",
      hi: "r = 2 सेमी और h = 10 सेमी वाले सिलेंडर का आयतन ज्ञात करें। (π = 3.14)"
    },
    options: ["125.6 cm³", "94.2 cm³", "62.8 cm³", "45.2 cm³"],
    answer: "125.6 cm³",
    explanation: {
      en: "Volume = πr²h = 3.14 × 2² × 10 = 3.14 × 4 × 10 = 125.6 cm³",
      hi: "आयतन = 3.14 × 2² × 10 = 3.14 × 4 × 10 = 125.6 सेमी³"
    }
  },
  {
    id: 7,
    question: {
      en: "Which solid holds more: a cube of 3 cm side or cuboid of 3 cm × 2 cm × 2 cm?",
      hi: "3 सेमी भुजा वाला घन या 3×2×2 सेमी घनाभ — कौन अधिक आयतन रखता है?"
    },
    options: ["Cube", "Cuboid", "Both are same", "Cannot say"],
    answer: "Cube",
    explanation: {
      en: "Cube = 3³ = 27 cm³, Cuboid = 3×2×2 = 12 cm³. Cube holds more.",
      hi: "घन = 27 सेमी³, घनाभ = 12 सेमी³ → घन में अधिक आयतन होता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What is the unit of volume?",
      hi: "आयतन की इकाई क्या होती है?"
    },
    options: ["cm", "cm²", "cm³", "litre"],
    answer: "cm³",
    explanation: {
      en: "Volume is measured in cubic units like cm³ or m³.",
      hi: "आयतन घनात्मक इकाइयों में होता है जैसे सेमी³ या मी³।"
    }
  },
  {
    id: 9,
    question: {
      en: "1 m³ is equal to how many liters?",
      hi: "1 मीटर³ कितने लीटर के बराबर होता है?"
    },
    options: ["1000", "10", "100", "500"],
    answer: "1000",
    explanation: {
      en: "1 m³ = 1000 liters (since 1 liter = 1000 cm³ and 1 m³ = 1,000,000 cm³)",
      hi: "1 मी³ = 1000 लीटर (क्योंकि 1 लीटर = 1000 सेमी³ और 1 मी³ = 10⁶ सेमी³)"
    }
  },
  {
    id: 10,
    question: {
      en: "Which has greater capacity: 1 liter or 1000 cm³?",
      hi: "किसकी क्षमता अधिक है: 1 लीटर या 1000 सेमी³?"
    },
    options: ["1 liter", "1000 cm³", "Same", "None"],
    answer: "Same",
    explanation: {
      en: "1 liter = 1000 cm³. Both are equal in capacity.",
      hi: "1 लीटर = 1000 सेमी³. दोनों की क्षमता समान है।"
    }
  }
];

export default volumeCapacity;
