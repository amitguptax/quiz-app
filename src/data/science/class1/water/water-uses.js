const questions = [
  {
    id: 1,
    question: {
      en: "What do we use water for?",
      hi: "हम पानी का उपयोग किस लिए करते हैं?"
    },
    options: [
      { en: "Drinking", hi: "पीने के लिए" },
      { en: "Reading", hi: "पढ़ने के लिए" },
      { en: "Sleeping", hi: "सोने के लिए" },
      { en: "Jumping", hi: "कूदने के लिए" }
    ],
    correct: {
      en: "Drinking",
      hi: "पीने के लिए"
    },
    explanation: {
      en: "Water is essential for drinking.",
      hi: "पानी पीने के लिए आवश्यक होता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following activities needs water?",
      hi: "निम्न में से किस क्रिया में पानी की आवश्यकता होती है?"
    },
    options: [
      { en: "Bathing", hi: "नहाने में" },
      { en: "Sleeping", hi: "सोने में" },
      { en: "Walking", hi: "चलने में" },
      { en: "Reading", hi: "पढ़ने में" }
    ],
    correct: {
      en: "Bathing",
      hi: "नहाने में"
    },
    explanation: {
      en: "We use water to take a bath.",
      hi: "हम नहाने के लिए पानी का उपयोग करते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which use of water helps plants grow?",
      hi: "पौधों को बढ़ने में कौन सा पानी का उपयोग मदद करता है?"
    },
    options: [
      { en: "Watering plants", hi: "पौधों को पानी देना" },
      { en: "Washing clothes", hi: "कपड़े धोना" },
      { en: "Cooking", hi: "खाना पकाना" },
      { en: "Bathing", hi: "नहाना" }
    ],
    correct: {
      en: "Watering plants",
      hi: "पौधों को पानी देना"
    },
    explanation: {
      en: "Plants need water to grow.",
      hi: "पौधों को बढ़ने के लिए पानी की आवश्यकता होती है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do we need water in the kitchen?",
      hi: "हमें रसोई में पानी की आवश्यकता क्यों होती है?"
    },
    options: [
      { en: "For cooking", hi: "खाना पकाने के लिए" },
      { en: "For drawing", hi: "चित्र बनाने के लिए" },
      { en: "For sleeping", hi: "सोने के लिए" },
      { en: "For singing", hi: "गाने के लिए" }
    ],
    correct: {
      en: "For cooking",
      hi: "खाना पकाने के लिए"
    },
    explanation: {
      en: "Water is used for cooking food.",
      hi: "पानी का उपयोग खाना पकाने के लिए किया जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "What is used to clean utensils?",
      hi: "बरतन धोने में क्या उपयोग होता है?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Sand", hi: "रेत" },
      { en: "Oil", hi: "तेल" },
      { en: "Salt", hi: "नमक" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "We use water to wash utensils.",
      hi: "हम पानी से बरतन धोते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Farmers use water for:",
      hi: "किसान पानी का उपयोग किस लिए करते हैं?"
    },
    options: [
      { en: "Irrigation", hi: "सिंचाई" },
      { en: "Singing", hi: "गाना" },
      { en: "Dancing", hi: "नृत्य" },
      { en: "Writing", hi: "लेखन" }
    ],
    correct: {
      en: "Irrigation",
      hi: "सिंचाई"
    },
    explanation: {
      en: "Farmers use water to irrigate crops.",
      hi: "किसान फसलों की सिंचाई के लिए पानी का उपयोग करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of these daily tasks does NOT need water?",
      hi: "इनमें से कौन सा कार्य पानी के बिना हो सकता है?"
    },
    options: [
      { en: "Reading", hi: "पढ़ना" },
      { en: "Bathing", hi: "नहाना" },
      { en: "Cooking", hi: "खाना बनाना" },
      { en: "Cleaning", hi: "सफाई" }
    ],
    correct: {
      en: "Reading",
      hi: "पढ़ना"
    },
    explanation: {
      en: "Reading doesn't require water.",
      hi: "पढ़ने में पानी की आवश्यकता नहीं होती।"
    }
  },
  {
    id: 8,
    question: {
      en: "Water is used in the bathroom for:",
      hi: "बाथरूम में पानी का उपयोग किस लिए होता है?"
    },
    options: [
      { en: "Bathing and brushing", hi: "नहाने और ब्रश करने के लिए" },
      { en: "Cooking", hi: "खाना पकाने के लिए" },
      { en: "Playing", hi: "खेलने के लिए" },
      { en: "Writing", hi: "लिखने के लिए" }
    ],
    correct: {
      en: "Bathing and brushing",
      hi: "नहाने और ब्रश करने के लिए"
    },
    explanation: {
      en: "We use water in bathrooms for personal hygiene.",
      hi: "हम बाथरूम में नहाने और ब्रश करने के लिए पानी का उपयोग करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which profession uses water for cleaning clothes?",
      hi: "कौन सा पेशा कपड़े धोने में पानी का उपयोग करता है?"
    },
    options: [
      { en: "Washerman", hi: "धोबी" },
      { en: "Doctor", hi: "डॉक्टर" },
      { en: "Teacher", hi: "शिक्षक" },
      { en: "Driver", hi: "चालक" }
    ],
    correct: {
      en: "Washerman",
      hi: "धोबी"
    },
    explanation: {
      en: "Washermen clean clothes using water and soap.",
      hi: "धोबी कपड़े धोने के लिए पानी और साबुन का उपयोग करते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why is water important?",
      hi: "पानी क्यों आवश्यक है?"
    },
    options: [
      { en: "To live and stay clean", hi: "जीवित रहने और स्वच्छ रहने के लिए" },
      { en: "To play", hi: "खेलने के लिए" },
      { en: "To paint", hi: "पेंट करने के लिए" },
      { en: "To run", hi: "दौड़ने के लिए" }
    ],
    correct: {
      en: "To live and stay clean",
      hi: "जीवित रहने और स्वच्छ रहने के लिए"
    },
    explanation: {
      en: "Water is essential for life and hygiene.",
      hi: "पानी जीवन और स्वच्छता के लिए आवश्यक है।"
    }
  }
];

export default questions;
