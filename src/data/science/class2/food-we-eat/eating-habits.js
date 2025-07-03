const questions = [
  {
    id: 1,
    question: {
      en: "When should we wash our hands?",
      hi: "हमें हाथ कब धोने चाहिए?"
    },
    options: [
      { en: "Before and after eating", hi: "खाने से पहले और बाद में" },
      { en: "Only in the morning", hi: "सिर्फ सुबह में" },
      { en: "Never", hi: "कभी नहीं" },
      { en: "After sleeping", hi: "सोने के बाद" }
    ],
    correct: {
      en: "Before and after eating",
      hi: "खाने से पहले और बाद में"
    },
    explanation: {
      en: "Washing hands before and after meals keeps us safe from germs.",
      hi: "खाने से पहले और बाद में हाथ धोने से हम कीटाणुओं से सुरक्षित रहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "How should we eat our food?",
      hi: "हमें खाना कैसे खाना चाहिए?"
    },
    options: [
      { en: "Slowly and by chewing well", hi: "धीरे-धीरे और अच्छे से चबाकर" },
      { en: "Very fast", hi: "बहुत जल्दी" },
      { en: "While watching TV", hi: "टीवी देखते हुए" },
      { en: "While running", hi: "भागते हुए" }
    ],
    correct: {
      en: "Slowly and by chewing well",
      hi: "धीरे-धीरे और अच्छे से चबाकर"
    },
    explanation: {
      en: "Chewing food well helps in digestion.",
      hi: "अच्छे से चबाकर खाना पाचन में मदद करता है।"
    }
  },
  {
    id: 3,
    question: {
      en: "What should we do before eating fruits?",
      hi: "हमें फल खाने से पहले क्या करना चाहिए?"
    },
    options: [
      { en: "Wash them", hi: "उन्हें धोना चाहिए" },
      { en: "Hide them", hi: "उन्हें छिपाना चाहिए" },
      { en: "Throw them", hi: "उन्हें फेंक देना चाहिए" },
      { en: "Peel without washing", hi: "धोए बिना छीलना चाहिए" }
    ],
    correct: {
      en: "Wash them",
      hi: "उन्हें धोना चाहिए"
    },
    explanation: {
      en: "Washing fruits removes dirt and harmful germs.",
      hi: "फल धोने से गंदगी और हानिकारक कीटाणु हटते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "What time should we eat meals?",
      hi: "हमें भोजन कब करना चाहिए?"
    },
    options: [
      { en: "At fixed times", hi: "निश्चित समय पर" },
      { en: "Any time", hi: "किसी भी समय" },
      { en: "While walking", hi: "चलते-चलते" },
      { en: "While playing", hi: "खेलते समय" }
    ],
    correct: {
      en: "At fixed times",
      hi: "निश्चित समय पर"
    },
    explanation: {
      en: "Eating at regular times keeps our body healthy.",
      hi: "नियत समय पर भोजन करने से शरीर स्वस्थ रहता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Should we talk while eating?",
      hi: "क्या हमें खाना खाते समय बात करनी चाहिए?"
    },
    options: [
      { en: "No", hi: "नहीं" },
      { en: "Yes, always", hi: "हाँ, हमेशा" },
      { en: "Only while chewing", hi: "सिर्फ चबाते समय" },
      { en: "While watching TV", hi: "टीवी देखते हुए" }
    ],
    correct: {
      en: "No",
      hi: "नहीं"
    },
    explanation: {
      en: "Talking while eating can cause choking.",
      hi: "खाना खाते समय बात करने से खाना गले में फँस सकता है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What should we drink after meals?",
      hi: "हमें भोजन के बाद क्या पीना चाहिए?"
    },
    options: [
      { en: "Water", hi: "पानी" },
      { en: "Cold drink", hi: "कोल्ड ड्रिंक" },
      { en: "Tea", hi: "चाय" },
      { en: "Nothing", hi: "कुछ नहीं" }
    ],
    correct: {
      en: "Water",
      hi: "पानी"
    },
    explanation: {
      en: "Drinking water helps in digestion.",
      hi: "भोजन के बाद पानी पीने से पाचन में मदद मिलती है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which is a bad eating habit?",
      hi: "निम्न में से कौन-सी बुरी खाने की आदत है?"
    },
    options: [
      { en: "Skipping meals", hi: "भोजन छोड़ना" },
      { en: "Eating fruits", hi: "फल खाना" },
      { en: "Eating on time", hi: "समय पर खाना" },
      { en: "Drinking clean water", hi: "स्वच्छ पानी पीना" }
    ],
    correct: {
      en: "Skipping meals",
      hi: "भोजन छोड़ना"
    },
    explanation: {
      en: "Skipping meals can make us weak and sick.",
      hi: "भोजन छोड़ना हमें कमजोर और बीमार बना सकता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "What should we not do while eating?",
      hi: "हमें खाना खाते समय क्या नहीं करना चाहिए?"
    },
    options: [
      { en: "Play", hi: "खेलना" },
      { en: "Sit properly", hi: "ठीक से बैठना" },
      { en: "Chew food", hi: "खाना चबाना" },
      { en: "Eat fruits", hi: "फल खाना" }
    ],
    correct: {
      en: "Play",
      hi: "खेलना"
    },
    explanation: {
      en: "Playing while eating can be dangerous.",
      hi: "खेलते समय खाना खाना खतरनाक हो सकता है।"
    }
  },
  {
    id: 9,
    question: {
      en: "Why should we eat healthy food?",
      hi: "हमें स्वस्थ भोजन क्यों खाना चाहिए?"
    },
    options: [
      { en: "To stay strong", hi: "मज़बूत रहने के लिए" },
      { en: "To fall sick", hi: "बीमार होने के लिए" },
      { en: "To waste food", hi: "भोजन बर्बाद करने के लिए" },
      { en: "To eat less", hi: "कम खाने के लिए" }
    ],
    correct: {
      en: "To stay strong",
      hi: "मज़बूत रहने के लिए"
    },
    explanation: {
      en: "Healthy food gives us energy and strength.",
      hi: "स्वस्थ भोजन हमें ऊर्जा और ताकत देता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "Which is a good eating habit?",
      hi: "इनमें से कौन-सी एक अच्छी खाने की आदत है?"
    },
    options: [
      { en: "Washing fruits before eating", hi: "फल खाने से पहले धोना" },
      { en: "Eating too fast", hi: "बहुत तेज खाना" },
      { en: "Eating while lying down", hi: "लेटकर खाना" },
      { en: "Eating junk food", hi: "जंक फूड खाना" }
    ],
    correct: {
      en: "Washing fruits before eating",
      hi: "फल खाने से पहले धोना"
    },
    explanation: {
      en: "Clean fruits keep us healthy and safe.",
      hi: "साफ फल खाने से हम स्वस्थ और सुरक्षित रहते हैं।"
    }
  }
];

export default questions;
