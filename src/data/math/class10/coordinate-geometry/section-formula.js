const sectionFormula = [
  {
    question: {
      en: "What is the section formula for internal division of a line segment joining A(x₁, y₁) and B(x₂, y₂) in the ratio m:n?",
      hi: "बिंदुओं A(x₁, y₁) और B(x₂, y₂) को अनुपात m:n में आंतरिक रूप से विभाजित करने का सूत्र क्या है?"
    },
    options: {
      a: { en: "[(mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)]", hi: "[(mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)]" },
      b: { en: "[(mx₁ + nx₂)/(m+n), (my₁ + ny₂)/(m+n)]", hi: "[(mx₁ + nx₂)/(m+n), (my₁ + ny₂)/(m+n)]" },
      c: { en: "[(mx₁ - nx₂)/(m+n), (my₁ - ny₂)/(m+n)]", hi: "[(mx₁ - nx₂)/(m+n), (my₁ - ny₂)/(m+n)]" },
      d: { en: "[(x₁ + x₂)/2, (y₁ + y₂)/2]", hi: "[(x₁ + x₂)/2, (y₁ + y₂)/2]" }
    },
    answer: "b",
    explanation: {
      en: "Internal division formula is: [(mx₁ + nx₂)/(m+n), (my₁ + ny₂)/(m+n)]",
      hi: "आंतरिक विभाजन का सूत्र है: [(mx₁ + nx₂)/(m+n), (my₁ + ny₂)/(m+n)]"
    }
  },
  {
    question: {
      en: "Find coordinates of the point dividing the segment joining (2, 3) and (6, 7) in ratio 1:1.",
      hi: "(2, 3) और (6, 7) को 1:1 अनुपात में विभाजित करने वाले बिंदु के निर्देशांक क्या हैं?"
    },
    options: {
      a: { en: "(4, 5)", hi: "(4, 5)" },
      b: { en: "(3, 4)", hi: "(3, 4)" },
      c: { en: "(2, 3)", hi: "(2, 3)" },
      d: { en: "(5, 6)", hi: "(5, 6)" }
    },
    answer: "a",
    explanation: {
      en: "Midpoint in 1:1 ratio = ((2+6)/2, (3+7)/2) = (4, 5)",
      hi: "1:1 अनुपात में मध्य बिंदु = ((2+6)/2, (3+7)/2) = (4, 5)"
    }
  },
  {
    question: {
      en: "If a point divides a segment internally in the ratio 2:1, which formula is used?",
      hi: "यदि कोई बिंदु रेखा खंड को 2:1 अनुपात में आंतरिक रूप से विभाजित करता है, तो कौन सा सूत्र उपयोग होगा?"
    },
    options: {
      a: { en: "Section formula", hi: "खंड सूत्र" },
      b: { en: "Midpoint formula", hi: "मध्यांक सूत्र" },
      c: { en: "Slope formula", hi: "ढाल सूत्र" },
      d: { en: "Distance formula", hi: "दूरी सूत्र" }
    },
    answer: "a",
    explanation: {
      en: "Section formula is used for dividing a segment in a given ratio.",
      hi: "किसी रेखा खंड को दिए गए अनुपात में विभाजित करने के लिए खंड सूत्र का उपयोग किया जाता है।"
    }
  },
  {
    question: {
      en: "The point dividing (1, 2) and (4, 5) in ratio 2:1 is:",
      hi: "(1, 2) और (4, 5) को 2:1 अनुपात में विभाजित करने वाला बिंदु क्या है?"
    },
    options: {
      a: { en: "(2, 3)", hi: "(2, 3)" },
      b: { en: "(3, 4)", hi: "(3, 4)" },
      c: { en: "(4, 4)", hi: "(4, 4)" },
      d: { en: "(2.3, 3.3)", hi: "(2.3, 3.3)" }
    },
    answer: "a",
    explanation: {
      en: "x = (2×1 + 1×4)/3 = 6/3 = 2; y = (2×2 + 1×5)/3 = 9/3 = 3",
      hi: "x = (2×1 + 1×4)/3 = 6/3 = 2; y = (2×2 + 1×5)/3 = 9/3 = 3"
    }
  },
  {
    question: {
      en: "In which ratio does (7, 7) divide the line joining (2, 3) and (12, 13)?",
      hi: "(7, 7) बिंदु (2, 3) और (12, 13) को किस अनुपात में विभाजित करता है?"
    },
    options: {
      a: { en: "1:1", hi: "1:1" },
      b: { en: "2:3", hi: "2:3" },
      c: { en: "1:2", hi: "1:2" },
      d: { en: "5:5", hi: "5:5" }
    },
    answer: "a",
    explanation: {
      en: "(7, 7) is midpoint, so ratio = 1:1",
      hi: "(7, 7) मध्यबिंदु है, इसलिए अनुपात = 1:1"
    }
  },
  {
    question: {
      en: "Which of the following is **not** true about the section formula?",
      hi: "निम्न में से कौन खंड सूत्र के लिए सही **नहीं** है?"
    },
    options: {
      a: { en: "Used only for internal division", hi: "केवल आंतरिक विभाजन के लिए प्रयोग होता है" },
      b: { en: "Can divide in any ratio m:n", hi: "किसी भी अनुपात m:n में विभाजन कर सकता है" },
      c: { en: "Applicable in coordinate geometry", hi: "निर्देशांक ज्यामिति में लागू होता है" },
      d: { en: "Gives coordinates of dividing point", hi: "विभाजित करने वाले बिंदु के निर्देशांक देता है" }
    },
    answer: "a",
    explanation: {
      en: "It can be used for both internal and external division.",
      hi: "यह आंतरिक और बाह्य दोनों विभाजनों के लिए उपयोग होता है।"
    }
  },
  {
    question: {
      en: "What is the coordinate of the point dividing (0,0) and (6,6) in ratio 1:2?",
      hi: "(0,0) और (6,6) को 1:2 अनुपात में विभाजित करने वाले बिंदु का निर्देशांक क्या है?"
    },
    options: {
      a: { en: "(2, 2)", hi: "(2, 2)" },
      b: { en: "(4, 4)", hi: "(4, 4)" },
      c: { en: "(3, 3)", hi: "(3, 3)" },
      d: { en: "(1, 1)", hi: "(1, 1)" }
    },
    answer: "a",
    explanation: {
      en: "x = (1×6 + 2×0)/3 = 2, y = same = 2",
      hi: "x = (1×6 + 2×0)/3 = 2, y = same = 2"
    }
  },
  {
    question: {
      en: "Which is the correct formula for external division?",
      hi: "बाह्य विभाजन के लिए सही सूत्र कौन सा है?"
    },
    options: {
      a: { en: "[(mx₁ - nx₂)/(m - n), (my₁ - ny₂)/(m - n)]", hi: "[(mx₁ - nx₂)/(m - n), (my₁ - ny₂)/(m - n)]" },
      b: { en: "[(mx₁ + nx₂)/(m + n), (my₁ + ny₂)/(m + n)]", hi: "[(mx₁ + nx₂)/(m + n), (my₁ + ny₂)/(m + n)]" },
      c: { en: "[(x₁ - x₂)/2, (y₁ - y₂)/2]", hi: "[(x₁ - x₂)/2, (y₁ - y₂)/2]" },
      d: { en: "[(m+n)/2, (m+n)/2]", hi: "[(m+n)/2, (m+n)/2]" }
    },
    answer: "a",
    explanation: {
      en: "External division uses subtraction in numerator and denominator.",
      hi: "बाह्य विभाजन में अंश और हर में घटाव होता है।"
    }
  },
  {
    question: {
      en: "Internal division occurs when the point lies:",
      hi: "आंतरिक विभाजन तब होता है जब बिंदु स्थित होता है:"
    },
    options: {
      a: { en: "On the line segment", hi: "रेखा खंड पर" },
      b: { en: "Outside the segment", hi: "खंड के बाहर" },
      c: { en: "At origin", hi: "मूल बिंदु पर" },
      d: { en: "On y-axis", hi: "y-अक्ष पर" }
    },
    answer: "a",
    explanation: {
      en: "Internal division means the dividing point is between the two given points.",
      hi: "आंतरिक विभाजन का अर्थ है बिंदु दोनों बिंदुओं के बीच होता है।"
    }
  },
  {
    question: {
      en: "If point P divides AB in 3:2, and A = (1,2), B = (6,7), then x-coordinate of P is:",
      hi: "यदि बिंदु P रेखाखंड AB को 3:2 में विभाजित करता है और A = (1,2), B = (6,7), तो P का x-निर्देशांक क्या होगा?"
    },
    options: {
      a: { en: "3.8", hi: "3.8" },
      b: { en: "4.0", hi: "4.0" },
      c: { en: "4.2", hi: "4.2" },
      d: { en: "3.0", hi: "3.0" }
    },
    answer: "c",
    explanation: {
      en: "x = (3×6 + 2×1)/(3+2) = (18 + 2)/5 = 20/5 = 4.0",
      hi: "x = (3×6 + 2×1)/(3+2) = (18 + 2)/5 = 20/5 = 4.0"
    }
  }
];

export default sectionFormula;
