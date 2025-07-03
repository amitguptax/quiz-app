const questions = [
  {
    id: 1,
    question: {
      en: "Which of these is a domestic animal?",
      hi: "इनमें से कौन एक पालतू जानवर है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Lion", hi: "शेर" },
      { en: "Tiger", hi: "बाघ" },
      { en: "Wolf", hi: "भेड़िया" }
    ],
    correct: {
      en: "Cow",
      hi: "गाय"
    },
    explanation: {
      en: "Cow is a domestic animal kept for milk.",
      hi: "गाय एक पालतू जानवर है जिसे दूध के लिए पाला जाता है।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which domestic animal gives us milk?",
      hi: "कौन सा पालतू जानवर हमें दूध देता है?"
    },
    options: [
      { en: "Cow", hi: "गाय" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Goat", hi: "बकरी" },
      { en: "Both Cow and Goat", hi: "गाय और बकरी दोनों" }
    ],
    correct: {
      en: "Both Cow and Goat",
      hi: "गाय और बकरी दोनों"
    },
    explanation: {
      en: "Both cow and goat are milk-giving domestic animals.",
      hi: "गाय और बकरी दोनों दूध देने वाले पालतू जानवर हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which animal is called man’s best friend?",
      hi: "किस जानवर को मनुष्य का सबसे अच्छा दोस्त कहा जाता है?"
    },
    options: [
      { en: "Cat", hi: "बिल्ली" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cow", hi: "गाय" },
      { en: "Elephant", hi: "हाथी" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "Dog is known as man’s best friend.",
      hi: "कुत्ता मनुष्य का सबसे अच्छा दोस्त माना जाता है।"
    }
  },
  {
    id: 4,
    question: {
      en: "Why do we keep hens at home?",
      hi: "हम मुर्गियों को घर में क्यों पालते हैं?"
    },
    options: [
      { en: "For eggs", hi: "अंडों के लिए" },
      { en: "For fun", hi: "मनोरंजन के लिए" },
      { en: "To guard house", hi: "घर की रखवाली के लिए" },
      { en: "For running", hi: "दौड़ने के लिए" }
    ],
    correct: {
      en: "For eggs",
      hi: "अंडों के लिए"
    },
    explanation: {
      en: "Hens are kept for getting eggs.",
      hi: "मुर्गियों को अंडों के लिए पाला जाता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of these animals helps in carrying loads?",
      hi: "इनमें से कौन सा जानवर सामान ढोने में मदद करता है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Buffalo", hi: "भैंस" },
      { en: "Donkey", hi: "गधा" },
      { en: "Cat", hi: "बिल्ली" }
    ],
    correct: {
      en: "Donkey",
      hi: "गधा"
    },
    explanation: {
      en: "Donkeys are used to carry loads.",
      hi: "गधे सामान ढोने में मदद करते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Which animal is commonly used in villages for farming?",
      hi: "किस जानवर का उपयोग गांवों में खेती के लिए किया जाता है?"
    },
    options: [
      { en: "Horse", hi: "घोड़ा" },
      { en: "Bull", hi: "बैल" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Cat", hi: "बिल्ली" }
    ],
    correct: {
      en: "Bull",
      hi: "बैल"
    },
    explanation: {
      en: "Bulls help in ploughing the fields.",
      hi: "बैल खेत जोतने में मदद करते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which animal gives us wool?",
      hi: "कौन सा जानवर हमें ऊन देता है?"
    },
    options: [
      { en: "Sheep", hi: "भेड़" },
      { en: "Goat", hi: "बकरी" },
      { en: "Dog", hi: "कुत्ता" },
      { en: "Buffalo", hi: "भैंस" }
    ],
    correct: {
      en: "Sheep",
      hi: "भेड़"
    },
    explanation: {
      en: "Sheep's wool is used to make clothes.",
      hi: "भेड़ों से मिलने वाली ऊन से कपड़े बनाए जाते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which domestic animal guards our house?",
      hi: "कौन सा पालतू जानवर हमारे घर की रखवाली करता है?"
    },
    options: [
      { en: "Dog", hi: "कुत्ता" },
      { en: "Hen", hi: "मुर्गी" },
      { en: "Goat", hi: "बकरी" },
      { en: "Cow", hi: "गाय" }
    ],
    correct: {
      en: "Dog",
      hi: "कुत्ता"
    },
    explanation: {
      en: "Dogs protect the house from strangers.",
      hi: "कुत्ते घर की सुरक्षा करते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which of these animals is used for riding?",
      hi: "इनमें से किस जानवर का उपयोग सवारी के लिए होता है?"
    },
    options: [
      { en: "Horse", hi: "घोड़ा" },
      { en: "Goat", hi: "बकरी" },
      { en: "Hen", hi: "मुर्गी" },
      { en: "Dog", hi: "कुत्ता" }
    ],
    correct: {
      en: "Horse",
      hi: "घोड़ा"
    },
    explanation: {
      en: "Horses are used for riding and pulling carts.",
      hi: "घोड़े सवारी और गाड़ी खींचने के काम आते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Why are domestic animals important?",
      hi: "पालतू जानवर क्यों महत्वपूर्ण हैं?"
    },
    options: [
      { en: "They help us in many ways", hi: "वे कई तरीकों से हमारी मदद करते हैं" },
      { en: "They make noise", hi: "वे शोर करते हैं" },
      { en: "They live in forests", hi: "वे जंगल में रहते हैं" },
      { en: "They eat other animals", hi: "वे अन्य जानवरों को खाते हैं" }
    ],
    correct: {
      en: "They help us in many ways",
      hi: "वे कई तरीकों से हमारी मदद करते हैं"
    },
    explanation: {
      en: "Domestic animals provide milk, wool, guard, and help in farming.",
      hi: "पालतू जानवर दूध, ऊन, सुरक्षा और खेती में मदद करते हैं।"
    }
  }
];

export default questions;
