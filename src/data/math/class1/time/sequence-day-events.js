const questions = [
  {
    question: {
      en: "What do we do first in the morning?",
      hi: "हम सुबह सबसे पहले क्या करते हैं?"
    },
    options: [
      { en: "Brush our teeth", hi: "दांत साफ़ करना" },
      { en: "Go to school", hi: "स्कूल जाना" },
      { en: "Eat lunch", hi: "दोपहर का खाना" },
      { en: "Sleep", hi: "सोना" }
    ],
    correct: {
      en: "Brush our teeth",
      hi: "दांत साफ़ करना"
    },
    explanation: {
      en: "We usually brush our teeth after waking up in the morning.",
      hi: "सुबह उठने के बाद हम आमतौर पर दांत साफ़ करते हैं।"
    }
  },
  {
    question: {
      en: "Which activity comes after lunch?",
      hi: "दोपहर के खाने के बाद कौन-सी गतिविधि आती है?"
    },
    options: [
      { en: "Play games", hi: "खेलना" },
      { en: "Go to bed", hi: "सोने जाना" },
      { en: "Eat breakfast", hi: "नाश्ता करना" },
      { en: "Brush teeth", hi: "दांत साफ़ करना" }
    ],
    correct: {
      en: "Play games",
      hi: "खेलना"
    },
    explanation: {
      en: "After lunch, children often play games.",
      hi: "दोपहर के खाने के बाद बच्चे अक्सर खेलते हैं।"
    }
  },
  {
    question: {
      en: "When do we wear our school uniform?",
      hi: "हम स्कूल की यूनिफॉर्म कब पहनते हैं?"
    },
    options: [
      { en: "Morning", hi: "सुबह" },
      { en: "Evening", hi: "शाम" },
      { en: "Night", hi: "रात" },
      { en: "After lunch", hi: "दोपहर के खाने के बाद" }
    ],
    correct: {
      en: "Morning",
      hi: "सुबह"
    },
    explanation: {
      en: "We wear school uniform before going to school in the morning.",
      hi: "हम सुबह स्कूल जाने से पहले यूनिफॉर्म पहनते हैं।"
    }
  },
  {
    question: {
      en: "What happens before going to bed?",
      hi: "सोने से पहले क्या करते हैं?"
    },
    options: [
      { en: "Change into night dress", hi: "नाइट ड्रेस पहनते हैं" },
      { en: "Go to school", hi: "स्कूल जाते हैं" },
      { en: "Have breakfast", hi: "नाश्ता करते हैं" },
      { en: "Go to play", hi: "खेलने जाते हैं" }
    ],
    correct: {
      en: "Change into night dress",
      hi: "नाइट ड्रेस पहनते हैं"
    },
    explanation: {
      en: "Before sleeping, we usually change into night dress.",
      hi: "सोने से पहले हम आमतौर पर नाइट ड्रेस पहनते हैं।"
    }
  },
  {
    question: {
      en: "What comes after waking up?",
      hi: "उठने के बाद क्या करते हैं?"
    },
    options: [
      { en: "Brush teeth", hi: "दांत साफ़ करते हैं" },
      { en: "Go to bed", hi: "सोने जाते हैं" },
      { en: "Eat dinner", hi: "रात का खाना खाते हैं" },
      { en: "Play games", hi: "खेलते हैं" }
    ],
    correct: {
      en: "Brush teeth",
      hi: "दांत साफ़ करते हैं"
    },
    explanation: {
      en: "After waking up, the first activity is brushing teeth.",
      hi: "उठने के बाद पहली क्रिया होती है — दांत साफ़ करना।"
    }
  },
  {
    question: {
      en: "Which event happens in the afternoon?",
      hi: "दोपहर में कौन-सी घटना होती है?"
    },
    options: [
      { en: "Lunch", hi: "दोपहर का भोजन" },
      { en: "Sleep at night", hi: "रात में सोना" },
      { en: "Wake up", hi: "उठना" },
      { en: "Brush teeth", hi: "दांत साफ़ करना" }
    ],
    correct: {
      en: "Lunch",
      hi: "दोपहर का भोजन"
    },
    explanation: {
      en: "Lunch is usually eaten in the afternoon.",
      hi: "दोपहर का भोजन आमतौर पर दोपहर में किया जाता है।"
    }
  },
  {
    question: {
      en: "Which is the correct order?",
      hi: "सही क्रम कौन-सा है?"
    },
    options: [
      { en: "Wake up → Brush → School → Lunch", hi: "उठना → ब्रश → स्कूल → दोपहर का भोजन" },
      { en: "Lunch → Brush → Sleep → School", hi: "दोपहर का भोजन → ब्रश → सोना → स्कूल" },
      { en: "School → Brush → Sleep → Lunch", hi: "स्कूल → ब्रश → सोना → दोपहर का भोजन" },
      { en: "Brush → Lunch → Wake up → School", hi: "ब्रश → दोपहर का भोजन → उठना → स्कूल" }
    ],
    correct: {
      en: "Wake up → Brush → School → Lunch",
      hi: "उठना → ब्रश → स्कूल → दोपहर का भोजन"
    },
    explanation: {
      en: "This is the logical sequence of morning to afternoon.",
      hi: "यह सुबह से दोपहर तक की गतिविधियों का सही क्रम है।"
    }
  },
  {
    question: {
      en: "What is the last activity at night?",
      hi: "रात की अंतिम गतिविधि क्या होती है?"
    },
    options: [
      { en: "Sleep", hi: "सोना" },
      { en: "Eat dinner", hi: "रात का खाना खाना" },
      { en: "Watch TV", hi: "टीवी देखना" },
      { en: "Go to school", hi: "स्कूल जाना" }
    ],
    correct: {
      en: "Sleep",
      hi: "सोना"
    },
    explanation: {
      en: "Sleeping is the last activity of the day.",
      hi: "दिन का अंत हम सोने के साथ करते हैं।"
    }
  },
  {
    question: {
      en: "Which comes after school?",
      hi: "स्कूल के बाद क्या आता है?"
    },
    options: [
      { en: "Play", hi: "खेलना" },
      { en: "Brush", hi: "ब्रश करना" },
      { en: "Wake up", hi: "उठना" },
      { en: "Eat breakfast", hi: "नाश्ता करना" }
    ],
    correct: {
      en: "Play",
      hi: "खेलना"
    },
    explanation: {
      en: "Children usually play after school.",
      hi: "बच्चे स्कूल के बाद आमतौर पर खेलते हैं।"
    }
  },
  {
    question: {
      en: "Which comes before dinner?",
      hi: "रात के खाने से पहले क्या करते हैं?"
    },
    options: [
      { en: "Play", hi: "खेलना" },
      { en: "Brush", hi: "ब्रश करना" },
      { en: "Sleep", hi: "सोना" },
      { en: "Wake up", hi: "उठना" }
    ],
    correct: {
      en: "Play",
      hi: "खेलना"
    },
    explanation: {
      en: "Children usually play in the evening before dinner.",
      hi: "बच्चे आमतौर पर रात के खाने से पहले शाम को खेलते हैं।"
    }
  }
];

export default { questions };
