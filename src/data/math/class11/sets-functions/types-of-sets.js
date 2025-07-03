const typesOfSets = [
  {
    question: {
      en: "Which of the following is an empty set?",
      hi: "निम्न में से कौन रिक्त समुच्चय है?"
    },
    options: {
      a: { en: "{x | x is a prime number divisible by 2 and 5}", hi: "{x | x एक ऐसा अभाज्य संख्या है जो 2 और 5 दोनों से विभाजित हो}" },
      b: { en: "{}", hi: "{}" },
      c: { en: "∅", hi: "∅" },
      d: { en: "All of these", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "All mentioned notations represent the empty set.",
      hi: "सभी दिए गए रूप रिक्त समुच्चय को दर्शाते हैं।"
    }
  },
  {
    question: {
      en: "A set with a finite number of elements is called:",
      hi: "एक ऐसा समुच्चय जिसमें सीमित तत्त्व हों, वह कहलाता है:"
    },
    options: {
      a: { en: "Finite set", hi: "सीमित समुच्चय" },
      b: { en: "Infinite set", hi: "असीमित समुच्चय" },
      c: { en: "Null set", hi: "शून्य समुच्चय" },
      d: { en: "Universal set", hi: "सर्वसमुच्चय" }
    },
    answer: "a",
    explanation: {
      en: "A finite set has countable number of elements.",
      hi: "सीमित समुच्चय में गिने जा सकने वाले तत्त्व होते हैं।"
    }
  },
  {
    question: {
      en: "The set of all natural numbers is:",
      hi: "सभी प्राकृतिक संख्याओं का समुच्चय है:"
    },
    options: {
      a: { en: "Finite", hi: "सीमित" },
      b: { en: "Empty", hi: "रिक्त" },
      c: { en: "Universal", hi: "सर्वसमुच्चय" },
      d: { en: "Infinite", hi: "असीमित" }
    },
    answer: "d",
    explanation: {
      en: "There are infinitely many natural numbers.",
      hi: "प्राकृतिक संख्याएँ अनगिनत होती हैं।"
    }
  },
  {
    question: {
      en: "Which of the following sets is finite?",
      hi: "निम्न में से कौन-सा समुच्चय सीमित है?"
    },
    options: {
      a: { en: "Set of all even numbers", hi: "सभी सम संख्याओं का समुच्चय" },
      b: { en: "Set of letters in the English alphabet", hi: "अंग्रेजी वर्णमाला के अक्षरों का समुच्चय" },
      c: { en: "Set of integers", hi: "पूर्णांकों का समुच्चय" },
      d: { en: "Set of real numbers", hi: "वास्तविक संख्याओं का समुच्चय" }
    },
    answer: "b",
    explanation: {
      en: "English alphabet has 26 letters—hence finite.",
      hi: "अंग्रेजी वर्णमाला में 26 अक्षर होते हैं—अतः सीमित।"
    }
  },
  {
    question: {
      en: "A universal set is:",
      hi: "सर्वसमुच्चय क्या होता है?"
    },
    options: {
      a: { en: "Set that contains all elements under consideration", hi: "एक ऐसा समुच्चय जिसमें सभी विचाराधीन तत्त्व हों" },
      b: { en: "Set with only one element", hi: "सिर्फ एक तत्त्व वाला समुच्चय" },
      c: { en: "Empty set", hi: "रिक्त समुच्चय" },
      d: { en: "Finite set", hi: "सीमित समुच्चय" }
    },
    answer: "a",
    explanation: {
      en: "Universal set includes all possible elements in a given context.",
      hi: "सर्वसमुच्चय में किसी संदर्भ में सभी संभव तत्त्व होते हैं।"
    }
  },
  {
    question: {
      en: "Which is true for the empty set?",
      hi: "रिक्त समुच्चय के लिए कौन-सा कथन सही है?"
    },
    options: {
      a: { en: "It is a subset of every set", hi: "यह हर समुच्चय का उपसमुच्चय होता है" },
      b: { en: "It is not a set", hi: "यह कोई समुच्चय नहीं है" },
      c: { en: "It contains one element", hi: "इसमें एक तत्त्व होता है" },
      d: { en: "It is equal to the universal set", hi: "यह सर्वसमुच्चय के बराबर होता है" }
    },
    answer: "a",
    explanation: {
      en: "By definition, the empty set is a subset of every set.",
      hi: "परिभाषा के अनुसार, रिक्त समुच्चय हर समुच्चय का उपसमुच्चय होता है।"
    }
  },
  {
    question: {
      en: "Set A = {x | x is a student in Class 11} is:",
      hi: "Set A = {x | x कक्षा 11 का छात्र है} एक:"
    },
    options: {
      a: { en: "Finite set", hi: "सीमित समुच्चय" },
      b: { en: "Infinite set", hi: "असीमित समुच्चय" },
      c: { en: "Empty set", hi: "रिक्त समुच्चय" },
      d: { en: "Universal set", hi: "सर्वसमुच्चय" }
    },
    answer: "a",
    explanation: {
      en: "Number of students in a class is countable.",
      hi: "कक्षा में छात्रों की संख्या सीमित होती है।"
    }
  },
  {
    question: {
      en: "If A = {1, 2, 3}, then power set P(A) contains:",
      hi: "यदि A = {1, 2, 3}, तो P(A) में कितने तत्त्व होंगे?"
    },
    options: {
      a: { en: "6", hi: "6" },
      b: { en: "8", hi: "8" },
      c: { en: "9", hi: "9" },
      d: { en: "3", hi: "3" }
    },
    answer: "b",
    explanation: {
      en: "Power set has 2^n elements = 2^3 = 8.",
      hi: "Power set में 2^n तत्त्व होते हैं = 2^3 = 8।"
    }
  },
  {
    question: {
      en: "Which of these is NOT an example of an infinite set?",
      hi: "निम्न में से कौन-सा असीमित समुच्चय का उदाहरण नहीं है?"
    },
    options: {
      a: { en: "Set of natural numbers", hi: "प्राकृतिक संख्याओं का समुच्चय" },
      b: { en: "Set of integers", hi: "पूर्णांकों का समुच्चय" },
      c: { en: "Set of vowels in English", hi: "अंग्रेजी स्वर वर्णों का समुच्चय" },
      d: { en: "Set of even numbers", hi: "सम संख्याओं का समुच्चय" }
    },
    answer: "c",
    explanation: {
      en: "Vowels = {a, e, i, o, u} = finite set.",
      hi: "स्वर = {a, e, i, o, u} = सीमित समुच्चय।"
    }
  },
  {
    question: {
      en: "Which symbol represents an empty set?",
      hi: "रिक्त समुच्चय को कौन-सा चिह्न दर्शाता है?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "{}", hi: "{}" },
      c: { en: "∅", hi: "∅" },
      d: { en: "Both B and C", hi: "B और C दोनों" }
    },
    answer: "d",
    explanation: {
      en: "Both ∅ and {} denote the empty set.",
      hi: "∅ और {} दोनों रिक्त समुच्चय दर्शाते हैं।"
    }
  }
];

export default typesOfSets;
