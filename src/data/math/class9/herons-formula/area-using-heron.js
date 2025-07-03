const areaUsingHeron = [
  {
    question: {
      en: "What is Heron’s formula used for?",
      hi: "हीरन सूत्र किसके लिए उपयोग किया जाता है?"
    },
    options: {
      a: { en: "Finding angle of triangle", hi: "त्रिभुज का कोण ज्ञात करने के लिए" },
      b: { en: "Finding perimeter of triangle", hi: "त्रिभुज की परिमिति ज्ञात करने के लिए" },
      c: { en: "Finding area of triangle", hi: "त्रिभुज का क्षेत्रफल ज्ञात करने के लिए" },
      d: { en: "Finding height of triangle", hi: "त्रिभुज की ऊँचाई ज्ञात करने के लिए" }
    },
    answer: "c",
    explanation: {
      en: "Heron’s formula is used to find the area of a triangle when all sides are known."
    }
  },
  {
    question: {
      en: "What is the formula for semi-perimeter (s)?",
      hi: "अर्धपरिमिति (s) का सूत्र क्या है?"
    },
    options: {
      a: { en: "s = a + b + c", hi: "s = a + b + c" },
      b: { en: "s = (a + b + c)/2", hi: "s = (a + b + c)/2" },
      c: { en: "s = √(abc)", hi: "s = √(abc)" },
      d: { en: "s = a² + b² + c²", hi: "s = a² + b² + c²" }
    },
    answer: "b",
    explanation: {
      en: "Semi-perimeter is half of the sum of the sides: s = (a + b + c)/2."
    }
  },
  {
    question: {
      en: "Which values are needed for Heron’s formula?",
      hi: "हीरन सूत्र के लिए कौन से मानों की आवश्यकता होती है?"
    },
    options: {
      a: { en: "Base and height", hi: "आधार और ऊँचाई" },
      b: { en: "Only perimeter", hi: "केवल परिमिति" },
      c: { en: "All three sides", hi: "तीनों भुजाएँ" },
      d: { en: "One angle and two sides", hi: "एक कोण और दो भुजाएँ" }
    },
    answer: "c",
    explanation: {
      en: "Heron’s formula requires all three side lengths of the triangle."
    }
  },
  {
    question: {
      en: "Find the area of a triangle with sides 5 cm, 6 cm, and 7 cm using Heron’s formula.",
      hi: "हीरन सूत्र का प्रयोग करके 5 सेमी, 6 सेमी और 7 सेमी की भुजाओं वाले त्रिभुज का क्षेत्रफल ज्ञात करें।"
    },
    options: {
      a: { en: "15 cm²", hi: "15 सेमी²" },
      b: { en: "12 cm²", hi: "12 सेमी²" },
      c: { en: "14.7 cm²", hi: "14.7 सेमी²" },
      d: { en: "16 cm²", hi: "16 सेमी²" }
    },
    answer: "c",
    explanation: {
      en: "s = 9, Area = √(9×4×3×2) = √216 = approx 14.7 cm²"
    }
  },
  {
    question: {
      en: "What is the unit of area found using Heron’s formula?",
      hi: "हीरन सूत्र से प्राप्त क्षेत्रफल की इकाई क्या होती है?"
    },
    options: {
      a: { en: "cm", hi: "सेमी" },
      b: { en: "cm²", hi: "सेमी²" },
      c: { en: "cm³", hi: "सेमी³" },
      d: { en: "unitless", hi: "इकाई रहित" }
    },
    answer: "b",
    explanation: {
      en: "Area is always expressed in square units like cm²."
    }
  },
  {
    question: {
      en: "In Heron’s formula √(s(s-a)(s-b)(s-c)), 's' represents:",
      hi: "हीरन सूत्र √(s(s-a)(s-b)(s-c)) में 's' दर्शाता है:"
    },
    options: {
      a: { en: "Side of triangle", hi: "त्रिभुज की भुजा" },
      b: { en: "Area", hi: "क्षेत्रफल" },
      c: { en: "Perimeter", hi: "परिमिति" },
      d: { en: "Semi-perimeter", hi: "अर्धपरिमिति" }
    },
    answer: "d",
    explanation: {
      en: "'s' is the semi-perimeter of the triangle, i.e., (a+b+c)/2."
    }
  },
  {
    question: {
      en: "Heron’s formula is not applicable when:",
      hi: "हीरन सूत्र कब लागू नहीं होता?"
    },
    options: {
      a: { en: "Only two sides are known", hi: "केवल दो भुजाएँ ज्ञात हों" },
      b: { en: "All three sides are known", hi: "तीनों भुजाएँ ज्ञात हों" },
      c: { en: "Triangle is right-angled", hi: "त्रिभुज समकोण हो" },
      d: { en: "Sides are equal", hi: "भुजाएँ समान हों" }
    },
    answer: "a",
    explanation: {
      en: "You must know all three sides to use Heron’s formula."
    }
  },
  {
    question: {
      en: "If all sides of triangle are 10 cm, what is its area using Heron’s formula?",
      hi: "यदि त्रिभुज की सभी भुजाएँ 10 सेमी हैं, तो हीरन सूत्र से क्षेत्रफल क्या होगा?"
    },
    options: {
      a: { en: "30 cm²", hi: "30 सेमी²" },
      b: { en: "43.3 cm²", hi: "43.3 सेमी²" },
      c: { en: "50 cm²", hi: "50 सेमी²" },
      d: { en: "100 cm²", hi: "100 सेमी²" }
    },
    answer: "b",
    explanation: {
      en: "Equilateral triangle → s = 15, Area = √(15×5×5×5) = √1875 ≈ 43.3 cm²"
    }
  },
  {
    question: {
      en: "Which of the following best explains the use of Heron’s formula?",
      hi: "निम्न में से कौन हीरन सूत्र के उपयोग को सबसे अच्छे से दर्शाता है?"
    },
    options: {
      a: { en: "To find height directly", hi: "ऊँचाई सीधे ज्ञात करने हेतु" },
      b: { en: "To find area without height", hi: "बिना ऊँचाई के क्षेत्रफल ज्ञात करने हेतु" },
      c: { en: "To measure angles", hi: "कोण मापने हेतु" },
      d: { en: "To convert to radians", hi: "रेडियन में बदलने हेतु" }
    },
    answer: "b",
    explanation: {
      en: "Heron’s formula allows us to find area even when height is not known."
    }
  },
  {
    question: {
      en: "Heron’s formula can be used for which type of triangle?",
      hi: "हीरन सूत्र किस प्रकार के त्रिभुजों के लिए उपयोगी है?"
    },
    options: {
      a: { en: "Only scalene", hi: "केवल विषमबाहु" },
      b: { en: "Only isosceles", hi: "केवल समद्विबाहु" },
      c: { en: "All triangles", hi: "सभी प्रकार के त्रिभुज" },
      d: { en: "Only equilateral", hi: "केवल समबाहु" }
    },
    answer: "c",
    explanation: {
      en: "It can be used for all triangles, as long as side lengths are known."
    }
  }
];

export default areaUsingHeron;
