const functionsDomainRange = [
  {
    question: {
      en: "What is the domain of a function?",
      hi: "किसी फलन का डोमेन क्या होता है?"
    },
    options: {
      a: { en: "All output values", hi: "सभी आउटपुट मान" },
      b: { en: "All input values", hi: "सभी इनपुट मान" },
      c: { en: "Sum of inputs and outputs", hi: "इनपुट और आउटपुट का योग" },
      d: { en: "Only positive outputs", hi: "केवल धनात्मक आउटपुट" }
    },
    answer: "b",
    explanation: {
      en: "Domain is the set of all input values (x-values) of a function.",
      hi: "डोमेन फलन के सभी इनपुट मानों (x) का समुच्चय होता है।"
    }
  },
  {
    question: {
      en: "Which of the following is a function?",
      hi: "निम्नलिखित में से कौन एक फलन है?"
    },
    options: {
      a: { en: "{(1, 2), (2, 3), (1, 4)}", hi: "{(1, 2), (2, 3), (1, 4)}" },
      b: { en: "{(2, 3), (3, 4), (4, 5)}", hi: "{(2, 3), (3, 4), (4, 5)}" },
      c: { en: "{(5, 6), (5, 6), (5, 6)}", hi: "{(5, 6), (5, 6), (5, 6)}" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "b",
    explanation: {
      en: "Each input (x) must have one unique output (y). In option B, all x-values are unique.",
      hi: "फलन में प्रत्येक x के लिए एक ही y मान होना चाहिए।"
    }
  },
  {
    question: {
      en: "Which of these is NOT a type of function?",
      hi: "इनमें से कौन फलन का प्रकार नहीं है?"
    },
    options: {
      a: { en: "Injective", hi: "इंजेक्टिव" },
      b: { en: "Surjective", hi: "सर्जेक्टिव" },
      c: { en: "Reflexive", hi: "रिफ्लेक्सिव" },
      d: { en: "Bijective", hi: "बिजेक्टिव" }
    },
    answer: "c",
    explanation: {
      en: "Reflexive is a property of relations, not functions.",
      hi: "रिफ्लेक्सिव गुण केवल संबंधों के लिए है, फलनों के लिए नहीं।"
    }
  },
  {
    question: {
      en: "In function f(x) = x², what is the range if domain is ℝ?",
      hi: "यदि f(x) = x² हो और डोमेन ℝ हो, तो रेंज क्या होगी?"
    },
    options: {
      a: { en: "ℝ", hi: "ℝ" },
      b: { en: "[0, ∞)", hi: "[0, ∞)" },
      c: { en: "(-∞, 0]", hi: "(-∞, 0]" },
      d: { en: "[-1, 1]", hi: "[-1, 1]" }
    },
    answer: "b",
    explanation: {
      en: "Square of any real number is non-negative, so range is [0, ∞).",
      hi: "किसी भी वास्तविक संख्या का वर्ग हमेशा धनात्मक या शून्य होता है।"
    }
  },
  {
    question: {
      en: "A function with one-to-one mapping is called:",
      hi: "एक-से-एक अनुकरण वाला फलन क्या कहलाता है?"
    },
    options: {
      a: { en: "Surjective", hi: "सर्जेक्टिव" },
      b: { en: "Injective", hi: "इंजेक्टिव" },
      c: { en: "Bijective", hi: "बिजेक्टिव" },
      d: { en: "Constant", hi: "सदा मान फलन" }
    },
    answer: "b",
    explanation: {
      en: "Injective functions map each input to a unique output.",
      hi: "इंजेक्टिव फलन में प्रत्येक इनपुट के लिए अलग आउटपुट होता है।"
    }
  },
  {
    question: {
      en: "The function f(x) = 3 is:",
      hi: "f(x) = 3 कैसा फलन है?"
    },
    options: {
      a: { en: "Linear", hi: "रेखीय" },
      b: { en: "Identity", hi: "पहचान फलन" },
      c: { en: "Constant", hi: "सदा मान फलन" },
      d: { en: "Cubic", hi: "घन फलन" }
    },
    answer: "c",
    explanation: {
      en: "A function that gives the same output for every input is constant.",
      hi: "हर इनपुट पर एक जैसा आउटपुट देने वाला फलन 'सदा मान फलन' होता है।"
    }
  },
  {
    question: {
      en: "Which function is both injective and surjective?",
      hi: "कौन सा फलन इंजेक्टिव और सर्जेक्टिव दोनों होता है?"
    },
    options: {
      a: { en: "Bijective", hi: "बिजेक्टिव" },
      b: { en: "Identity", hi: "पहचान फलन" },
      c: { en: "Quadratic", hi: "द्विघात फलन" },
      d: { en: "Constant", hi: "सदा मान फलन" }
    },
    answer: "a",
    explanation: {
      en: "A bijective function is both one-to-one and onto.",
      hi: "बिजेक्टिव फलन में हर इनपुट का एक यूनिक आउटपुट होता है और सभी आउटपुट कवर होते हैं।"
    }
  },
  {
    question: {
      en: "If f: A → B is a function, then:",
      hi: "यदि f: A → B एक फलन है, तो:"
    },
    options: {
      a: { en: "Each element of A maps to multiple in B", hi: "A का प्रत्येक तत्व B में कई से जुड़े" },
      b: { en: "Each element of A maps to exactly one in B", hi: "A का प्रत्येक तत्व B के केवल एक तत्व से जुड़ा" },
      c: { en: "B maps to A", hi: "B A को निरूपित करता है" },
      d: { en: "No relation", hi: "कोई संबंध नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Definition of function: each input maps to exactly one output.",
      hi: "फलन की परिभाषा है - हर इनपुट के लिए केवल एक आउटपुट होना चाहिए।"
    }
  },
  {
    question: {
      en: "Which is the domain of function f(x) = √(x – 1)?",
      hi: "f(x) = √(x – 1) का डोमेन क्या है?"
    },
    options: {
      a: { en: "x ≥ 1", hi: "x ≥ 1" },
      b: { en: "x > 1", hi: "x > 1" },
      c: { en: "x < 1", hi: "x < 1" },
      d: { en: "All real numbers", hi: "सभी वास्तविक संख्याएँ" }
    },
    answer: "a",
    explanation: {
      en: "Square root defined only for non-negative values ⇒ x – 1 ≥ 0 ⇒ x ≥ 1.",
      hi: "√(x – 1) तब ही परिभाषित है जब x – 1 ≥ 0 ⇒ x ≥ 1।"
    }
  },
  {
    question: {
      en: "The range of f(x) = |x| is:",
      hi: "f(x) = |x| की रेंज क्या है?"
    },
    options: {
      a: { en: "ℝ", hi: "ℝ" },
      b: { en: "(-∞, ∞)", hi: "(-∞, ∞)" },
      c: { en: "[0, ∞)", hi: "[0, ∞)" },
      d: { en: "(-∞, 0]", hi: "(-∞, 0]" }
    },
    answer: "c",
    explanation: {
      en: "Absolute value of x is never negative. Range is [0, ∞).",
      hi: "x का पराभ मान कभी ऋणात्मक नहीं होता ⇒ रेंज [0, ∞)।"
    }
  }
];

export default functionsDomainRange;
