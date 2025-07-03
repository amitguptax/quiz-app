const questions = [
  {
    id: 1,
    question: {
      en: "What do people often use to keep cool during summer?",
      hi: "गर्मियों में लोग ठंडा रहने के लिए आमतौर पर क्या उपयोग करते हैं?"
    },
    options: [
      { en: "Heater", hi: "हीटर" },
      { en: "Fan", hi: "पंखा" },
      { en: "Blanket", hi: "कंबल" },
      { en: "Raincoat", hi: "रेनकोट" }
    ],
    correct: {
      en: "Fan",
      hi: "पंखा"
    },
    explanation: {
      en: "Fans help us stay cool during hot summer days.",
      hi: "गर्मियों के गर्म दिनों में पंखे हमें ठंडा रखने में मदद करते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "What do children enjoy doing during the rainy season?",
      hi: "बच्चे बरसात के मौसम में किस चीज़ का आनंद लेते हैं?"
    },
    options: [
      { en: "Playing with snow", hi: "बर्फ से खेलना" },
      { en: "Flying kites", hi: "पतंग उड़ाना" },
      { en: "Jumping in puddles", hi: "कीचड़ में कूदना" },
      { en: "Wearing woolen clothes", hi: "ऊन के कपड़े पहनना" }
    ],
    correct: {
      en: "Jumping in puddles",
      hi: "कीचड़ में कूदना"
    },
    explanation: {
      en: "Children enjoy jumping in rain puddles during monsoon.",
      hi: "बच्चे बरसात में पानी के गड्ढों में कूदना पसंद करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "In which season do people drink hot soup and tea more?",
      hi: "किस ऋतु में लोग गरम सूप और चाय अधिक पीते हैं?"
    },
    options: [
      { en: "Summer", hi: "गर्मी" },
      { en: "Winter", hi: "सर्दी" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Spring", hi: "वसंत" }
    ],
    correct: {
      en: "Winter",
      hi: "सर्दी"
    },
    explanation: {
      en: "People prefer hot drinks in cold weather.",
      hi: "ठंड के मौसम में लोग गरम चीज़ें पीना पसंद करते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which activity is common in summer?",
      hi: "गर्मी के मौसम में कौन-सी गतिविधि आम है?"
    },
    options: [
      { en: "Drinking lemonade", hi: "नींबू पानी पीना" },
      { en: "Using heaters", hi: "हीटर चलाना" },
      { en: "Wearing coats", hi: "कोट पहनना" },
      { en: "Snow games", hi: "बर्फ के खेल" }
    ],
    correct: {
      en: "Drinking lemonade",
      hi: "नींबू पानी पीना"
    },
    explanation: {
      en: "People drink cool drinks like lemonade in summer.",
      hi: "गर्मी में लोग ठंडा नींबू पानी पीते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "What changes do we see in trees during autumn?",
      hi: "पतझड़ में पेड़ों में कौन से बदलाव दिखाई देते हैं?"
    },
    options: [
      { en: "New leaves grow", hi: "नई पत्तियाँ आती हैं" },
      { en: "Leaves turn brown and fall", hi: "पत्तियाँ भूरे रंग की होकर गिरती हैं" },
      { en: "Flowers bloom", hi: "फूल खिलते हैं" },
      { en: "Fruits grow", hi: "फल लगते हैं" }
    ],
    correct: {
      en: "Leaves turn brown and fall",
      hi: "पत्तियाँ भूरे रंग की होकर गिरती हैं"
    },
    explanation: {
      en: "In autumn, trees shed old leaves.",
      hi: "पतझड़ में पेड़ों की पुरानी पत्तियाँ गिरती हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which season is known for blooming flowers?",
      hi: "किस ऋतु में फूल खिलते हैं?"
    },
    options: [
      { en: "Winter", hi: "सर्दी" },
      { en: "Spring", hi: "वसंत" },
      { en: "Rainy", hi: "बरसात" },
      { en: "Autumn", hi: "पतझड़" }
    ],
    correct: {
      en: "Spring",
      hi: "वसंत"
    },
    explanation: {
      en: "Spring is the season of flowers and freshness.",
      hi: "वसंत फूलों और ताजगी का मौसम होता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "What do people wear during rainy season?",
      hi: "बरसात के मौसम में लोग क्या पहनते हैं?"
    },
    options: [
      { en: "Woolen clothes", hi: "ऊन के कपड़े" },
      { en: "Raincoat", hi: "रेनकोट" },
      { en: "Shorts", hi: "हाफ पैंट" },
      { en: "Silk dress", hi: "रेशमी कपड़े" }
    ],
    correct: {
      en: "Raincoat",
      hi: "रेनकोट"
    },
    explanation: {
      en: "Raincoat protects from rain.",
      hi: "रेनकोट बारिश से बचाता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which food is commonly eaten in summer?",
      hi: "गर्मी में कौन सा भोजन आमतौर पर खाया जाता है?"
    },
    options: [
      { en: "Ice cream", hi: "आइसक्रीम" },
      { en: "Soup", hi: "सूप" },
      { en: "Hot tea", hi: "गरम चाय" },
      { en: "Paratha", hi: "पराठा" }
    ],
    correct: {
      en: "Ice cream",
      hi: "आइसक्रीम"
    },
    explanation: {
      en: "Ice creams are popular in summer to cool down.",
      hi: "गर्मी में ठंडा रहने के लिए आइसक्रीम खाई जाती है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which season has cool wind and falling leaves?",
      hi: "कौन सा मौसम ठंडी हवा और गिरती पत्तियों वाला होता है?"
    },
    options: [
      { en: "Monsoon", hi: "मानसून" },
      { en: "Autumn", hi: "पतझड़" },
      { en: "Summer", hi: "गर्मी" },
      { en: "Winter", hi: "सर्दी" }
    ],
    correct: {
      en: "Autumn",
      hi: "पतझड़"
    },
    explanation: {
      en: "Autumn brings cool breeze and falling leaves.",
      hi: "पतझड़ में ठंडी हवा और पत्तियाँ गिरती हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which festival is usually celebrated in spring?",
      hi: "वसंत ऋतु में आमतौर पर कौन सा त्योहार मनाया जाता है?"
    },
    options: [
      { en: "Diwali", hi: "दीवाली" },
      { en: "Holi", hi: "होली" },
      { en: "Christmas", hi: "क्रिसमस" },
      { en: "Eid", hi: "ईद" }
    ],
    correct: {
      en: "Holi",
      hi: "होली"
    },
    explanation: {
      en: "Holi is celebrated in spring with colors and joy.",
      hi: "होली वसंत में रंगों और खुशी के साथ मनाई जाती है।"
    }
  }
];

export default questions;
