const setsAndRepresentations = [
  {
    question: {
      en: "Which symbol is used to denote a set?",
      hi: "समुच्चय को निरूपित करने के लिए कौन सा चिन्ह प्रयोग होता है?"
    },
    options: {
      a: { en: "{}", hi: "{}" },
      b: { en: "()", hi: "()" },
      c: { en: "[]", hi: "[]" },
      d: { en: "<>", hi: "<>" }
    },
    answer: "a",
    explanation: {
      en: "Sets are denoted by curly brackets like {1, 2, 3}.",
      hi: "समुच्चयों को {} से निरूपित किया जाता है, जैसे {1, 2, 3}।"
    }
  },
  {
    question: {
      en: "What is the cardinal number of set A = {a, e, i, o, u}?",
      hi: "समुच्चय A = {a, e, i, o, u} का कार्डिनल संख्या क्या है?"
    },
    options: {
      a: { en: "4", hi: "4" },
      b: { en: "5", hi: "5" },
      c: { en: "3", hi: "3" },
      d: { en: "6", hi: "6" }
    },
    answer: "b",
    explanation: {
      en: "The number of elements in the set is called cardinal number. Here, 5 vowels ⇒ n(A) = 5.",
      hi: "समुच्चय में तत्वों की संख्या को कार्डिनल संख्या कहते हैं। यहाँ 5 स्वर हैं ⇒ n(A) = 5।"
    }
  },
  {
    question: {
      en: "Which of the following is a well-defined set?",
      hi: "निम्न में से कौन सा एक स्पष्ट परिभाषित समुच्चय है?"
    },
    options: {
      a: { en: "Set of good cricketers", hi: "अच्छे क्रिकेटरों का समुच्चय" },
      b: { en: "Set of clever students", hi: "चतुर छात्रों का समुच्चय" },
      c: { en: "Set of vowels in English", hi: "अंग्रेजी में स्वरों का समुच्चय" },
      d: { en: "Set of beautiful cities", hi: "सुंदर शहरों का समुच्चय" }
    },
    answer: "c",
    explanation: {
      en: "A well-defined set is objective and not based on opinions. 'Vowels in English' is clear.",
      hi: "स्पष्ट परिभाषित समुच्चय वह होता है जिसमें वस्तुएँ स्पष्ट और तय होती हैं।"
    }
  },
  {
    question: {
      en: "Which of the following denotes an empty set?",
      hi: "निम्न में से कौन रिक्त समुच्चय को दर्शाता है?"
    },
    options: {
      a: { en: "∅", hi: "∅" },
      b: { en: "{0}", hi: "{0}" },
      c: { en: "{∅}", hi: "{∅}" },
      d: { en: "{null}", hi: "{null}" }
    },
    answer: "a",
    explanation: {
      en: "An empty set has no elements and is denoted by ∅ or {}.",
      hi: "रिक्त समुच्चय जिसमें कोई भी तत्व नहीं होता, उसे ∅ या {} द्वारा दर्शाया जाता है।"
    }
  },
  {
    question: {
      en: "The set of all natural numbers less than 1 is:",
      hi: "1 से छोटे सभी प्राकृतिक संख्याओं का समुच्चय है:"
    },
    options: {
      a: { en: "{0}", hi: "{0}" },
      b: { en: "∅", hi: "∅" },
      c: { en: "{1}", hi: "{1}" },
      d: { en: "Infinite", hi: "अनंत" }
    },
    answer: "b",
    explanation: {
      en: "There are no natural numbers less than 1 ⇒ Empty set ∅.",
      hi: "1 से छोटे कोई प्राकृतिक संख्या नहीं होती ⇒ यह रिक्त समुच्चय है।"
    }
  },
  {
    question: {
      en: "Roster form of A = Set of odd numbers less than 10 is:",
      hi: "A = 10 से कम विषम संख्याओं का समुच्चय रोस्टर रूप में क्या होगा?"
    },
    options: {
      a: { en: "{1, 3, 5, 7, 9}", hi: "{1, 3, 5, 7, 9}" },
      b: { en: "{2, 4, 6, 8}", hi: "{2, 4, 6, 8}" },
      c: { en: "{3, 6, 9}", hi: "{3, 6, 9}" },
      d: { en: "{1, 2, 3, 4}", hi: "{1, 2, 3, 4}" }
    },
    answer: "a",
    explanation: {
      en: "Odd numbers < 10 are 1, 3, 5, 7, 9.",
      hi: "10 से कम विषम संख्याएँ: 1, 3, 5, 7, 9।"
    }
  },
  {
    question: {
      en: "Set-builder form of {2, 4, 6, 8} is:",
      hi: "{2, 4, 6, 8} का सेट-बिल्डर रूप है:"
    },
    options: {
      a: { en: "{x | x is even and x ≤ 8}", hi: "{x | x सम है और x ≤ 8}" },
      b: { en: "{x | x < 10}", hi: "{x | x < 10}" },
      c: { en: "{x | x is odd and x ≤ 8}", hi: "{x | x विषम है और x ≤ 8}" },
      d: { en: "{x | x is prime}", hi: "{x | x अभाज्य है}" }
    },
    answer: "a",
    explanation: {
      en: "Set-builder notation defines property ⇒ Even numbers ≤ 8.",
      hi: "सेट-बिल्डर रूप विशेषता को दर्शाता है ⇒ सम संख्याएँ ≤ 8।"
    }
  },
  {
    question: {
      en: "Which is a universal set for natural numbers?",
      hi: "प्राकृतिक संख्याओं के लिए सर्वसमावेशी समुच्चय कौन सा हो सकता है?"
    },
    options: {
      a: { en: "Whole numbers", hi: "पूर्ण संख्याएँ" },
      b: { en: "Integers", hi: "पूर्णांक" },
      c: { en: "Real numbers", hi: "वास्तविक संख्याएँ" },
      d: { en: "Set of letters", hi: "अक्षरों का समुच्चय" }
    },
    answer: "c",
    explanation: {
      en: "Real numbers include natural, whole, integers, rationals, irrationals.",
      hi: "वास्तविक संख्याओं में सभी प्रकार की संख्याएँ सम्मिलित होती हैं।"
    }
  },
  {
    question: {
      en: "Which of the following is a finite set?",
      hi: "निम्न में से कौन सा सीमित समुच्चय है?"
    },
    options: {
      a: { en: "Set of days in a week", hi: "सप्ताह के दिनों का समुच्चय" },
      b: { en: "Set of stars in the sky", hi: "आकाश में तारों का समुच्चय" },
      c: { en: "Set of natural numbers", hi: "प्राकृतिक संख्याओं का समुच्चय" },
      d: { en: "Set of points on a line", hi: "रेखा पर बिंदुओं का समुच्चय" }
    },
    answer: "a",
    explanation: {
      en: "Days in a week are fixed (7), so it is a finite set.",
      hi: "सप्ताह में 7 दिन होते हैं ⇒ सीमित समुच्चय।"
    }
  },
  {
    question: {
      en: "What does n(A) represent in set theory?",
      hi: "सेट थ्योरी में n(A) का क्या अर्थ है?"
    },
    options: {
      a: { en: "Number of elements in set A", hi: "समुच्चय A में तत्वों की संख्या" },
      b: { en: "Sum of all elements", hi: "सभी तत्वों का योग" },
      c: { en: "Mean of set A", hi: "समुच्चय A का औसत" },
      d: { en: "Power of set A", hi: "समुच्चय A की शक्ति" }
    },
    answer: "a",
    explanation: {
      en: "n(A) gives the count of elements in set A.",
      hi: "n(A) समुच्चय A में तत्वों की कुल संख्या दर्शाता है।"
    }
  }
];

export default setsAndRepresentations;
