const relationsMCQ = [
  {
    question: {
      en: "What is a relation in mathematics?",
      hi: "गणित में संबंध क्या होता है?"
    },
    options: {
      a: { en: "Rule of integration", hi: "सन्निहित करने का नियम" },
      b: { en: "Set of ordered pairs", hi: "क्रमबद्ध युग्मों का समुच्चय" },
      c: { en: "Group of numbers", hi: "संख्याओं का समूह" },
      d: { en: "Any arithmetic operation", hi: "कोई भी अंकगणितीय क्रिया" }
    },
    answer: "b",
    explanation: {
      en: "A relation is a subset of the Cartesian product of two sets.",
      hi: "संबंध दो समुच्चयों के कार्तीय गुणनफल का उपसमुच्चय होता है।"
    }
  },
  {
    question: {
      en: "If A = {1, 2}, B = {3, 4}, then how many relations from A to B?",
      hi: "यदि A = {1, 2}, B = {3, 4}, तो A से B में कुल कितने संबंध बन सकते हैं?"
    },
    options: {
      a: { en: "4", hi: "4" },
      b: { en: "8", hi: "8" },
      c: { en: "16", hi: "16" },
      d: { en: "2", hi: "2" }
    },
    answer: "c",
    explanation: {
      en: "Number of relations = 2^(m × n) = 2^(2×2) = 16.",
      hi: "संबंधों की संख्या = 2^(m × n) = 2^(2×2) = 16।"
    }
  },
  {
    question: {
      en: "Which property states that (a, a) ∈ R for all a ∈ A?",
      hi: "कौन-सा गुण बताता है कि (a, a) ∈ R सभी a ∈ A के लिए सत्य है?"
    },
    options: {
      a: { en: "Symmetric", hi: "साम्य" },
      b: { en: "Transitive", hi: "सांक्रामक" },
      c: { en: "Reflexive", hi: "परावर्तनीय" },
      d: { en: "Inverse", hi: "विलोम" }
    },
    answer: "c",
    explanation: {
      en: "Reflexive relation contains all pairs (a, a) for a ∈ A.",
      hi: "परावर्तनीय संबंध में सभी (a, a) युग्म होते हैं।"
    }
  },
  {
    question: {
      en: "Which relation is symmetric?",
      hi: "निम्नलिखित में कौन-सा संबंध साम्य है?"
    },
    options: {
      a: { en: "(a, b) ∈ R ⇒ (b, a) ∈ R", hi: "(a, b) ∈ R ⇒ (b, a) ∈ R" },
      b: { en: "(a, b) ∈ R ⇒ (a, a) ∈ R", hi: "(a, b) ∈ R ⇒ (a, a) ∈ R" },
      c: { en: "(a, b) ∈ R ⇒ (b, c) ∈ R", hi: "(a, b) ∈ R ⇒ (b, c) ∈ R" },
      d: { en: "(a, a) ∈ R", hi: "(a, a) ∈ R" }
    },
    answer: "a",
    explanation: {
      en: "Symmetric means if (a, b) exists, then (b, a) must also exist.",
      hi: "साम्य संबंध में यदि (a, b) ∈ R है तो (b, a) ∈ R भी होना चाहिए।"
    }
  },
  {
    question: {
      en: "Transitive property: If (a, b) and (b, c) ∈ R, then?",
      hi: "सांक्रामक गुण: यदि (a, b) और (b, c) ∈ R हों, तो?"
    },
    options: {
      a: { en: "(a, c) ∈ R", hi: "(a, c) ∈ R" },
      b: { en: "(c, a) ∈ R", hi: "(c, a) ∈ R" },
      c: { en: "(a, b) ∉ R", hi: "(a, b) ∉ R" },
      d: { en: "None of these", hi: "इनमें से कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "Transitive means if (a, b) and (b, c) in R, then (a, c) must be in R.",
      hi: "यदि (a, b) और (b, c) R में हैं तो (a, c) भी होना चाहिए।"
    }
  },
  {
    question: {
      en: "Which of the following is not a property of relations?",
      hi: "निम्न में से कौन संबंध का गुण नहीं है?"
    },
    options: {
      a: { en: "Reflexive", hi: "परावर्तनीय" },
      b: { en: "Injective", hi: "इंजेक्टिव" },
      c: { en: "Symmetric", hi: "साम्य" },
      d: { en: "Transitive", hi: "सांक्रामक" }
    },
    answer: "b",
    explanation: {
      en: "Injective is a property of functions, not relations.",
      hi: "इंजेक्टिव गुण फलनों का होता है, संबंधों का नहीं।"
    }
  },
  {
    question: {
      en: "If a relation is reflexive, symmetric and transitive, it is called:",
      hi: "यदि कोई संबंध परावर्तनीय, साम्य और सांक्रामक हो, तो वह कहलाता है:"
    },
    options: {
      a: { en: "Transitive", hi: "सांक्रामक" },
      b: { en: "Partial Order", hi: "आंशिक क्रम" },
      c: { en: "Equivalence relation", hi: "समानता संबंध" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "c",
    explanation: {
      en: "An equivalence relation satisfies all three: reflexive, symmetric, and transitive.",
      hi: "समानता संबंध में ये तीनों गुण होने चाहिए।"
    }
  },
  {
    question: {
      en: "If A has 3 elements, total pairs in A × A are:",
      hi: "यदि A में 3 तत्त्व हैं, तो A × A में कुल युग्म कितने होंगे?"
    },
    options: {
      a: { en: "6", hi: "6" },
      b: { en: "9", hi: "9" },
      c: { en: "3", hi: "3" },
      d: { en: "12", hi: "12" }
    },
    answer: "b",
    explanation: {
      en: "A × A = 3 × 3 = 9 ordered pairs.",
      hi: "A × A = 3 × 3 = 9 क्रमबद्ध युग्म।"
    }
  },
  {
    question: {
      en: "If (x, y) ∈ R and R is symmetric, then:",
      hi: "यदि (x, y) ∈ R और R साम्य है, तो:"
    },
    options: {
      a: { en: "(x, x) ∈ R", hi: "(x, x) ∈ R" },
      b: { en: "(y, x) ∈ R", hi: "(y, x) ∈ R" },
      c: { en: "(y, y) ∈ R", hi: "(y, y) ∈ R" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "b",
    explanation: {
      en: "In symmetric relation, (x, y) ⇒ (y, x).",
      hi: "साम्य संबंध में (x, y) होने पर (y, x) भी होता है।"
    }
  },
  {
    question: {
      en: "If relation R on A is such that (a, b) and (b, a) both ∈ R but not (a, a), then R is:",
      hi: "यदि R संबंध में (a, b) और (b, a) दोनों हों लेकिन (a, a) नहीं हो, तो R है:"
    },
    options: {
      a: { en: "Reflexive", hi: "परावर्तनीय" },
      b: { en: "Symmetric", hi: "साम्य" },
      c: { en: "Transitive", hi: "सांक्रामक" },
      d: { en: "Equivalence", hi: "समानता संबंध" }
    },
    answer: "b",
    explanation: {
      en: "Reflexive requires (a, a), which is missing. So only symmetric holds.",
      hi: "परावर्तनीयता के लिए (a, a) आवश्यक है, जो यहाँ नहीं है।"
    }
  }
];

export default relationsMCQ;
