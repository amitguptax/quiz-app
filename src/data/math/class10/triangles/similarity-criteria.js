const similarityCriteria = [
  {
    question: {
      en: "Which of the following is a valid criteria for similarity of triangles?",
      hi: "निम्न में से कौन त्रिभुजों की समानता का मान्य मानदंड है?"
    },
    options: {
      a: { en: "AAA", hi: "AAA" },
      b: { en: "SAS", hi: "SAS" },
      c: { en: "SSS", hi: "SSS" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "AAA, SAS, and SSS are all valid criteria for triangle similarity.",
      hi: "AAA, SAS और SSS सभी त्रिभुज की समानता के मानदंड हैं।"
    }
  },
  {
    question: {
      en: "What does AAA similarity criterion state?",
      hi: "AAA समानता मानदंड क्या कहता है?"
    },
    options: {
      a: { en: "All sides are equal", hi: "सभी भुजाएँ समान होती हैं" },
      b: { en: "All angles are equal", hi: "सभी कोण समान होते हैं" },
      c: { en: "Two angles are equal", hi: "दो कोण समान होते हैं" },
      d: { en: "One side is equal", hi: "एक भुजा समान होती है" }
    },
    answer: "b",
    explanation: {
      en: "AAA states that if all angles of one triangle equal corresponding angles of another, the triangles are similar.",
      hi: "यदि एक त्रिभुज के सभी कोण दूसरे त्रिभुज के संबंधित कोणों के बराबर हों तो वे समान होते हैं।"
    }
  },
  {
    question: {
      en: "In SSS similarity, what condition must be met?",
      hi: "SSS समानता में कौन सी शर्त पूरी होनी चाहिए?"
    },
    options: {
      a: { en: "Corresponding angles are equal", hi: "संबंधित कोण समान हों" },
      b: { en: "Corresponding sides are proportional", hi: "संबंधित भुजाएँ अनुपात में हों" },
      c: { en: "All sides are equal", hi: "सभी भुजाएँ समान हों" },
      d: { en: "All angles are 90°", hi: "सभी कोण 90° हों" }
    },
    answer: "b",
    explanation: {
      en: "In SSS similarity, all corresponding sides must be in proportion.",
      hi: "SSS समानता में सभी संबंधित भुजाएँ अनुपात में होनी चाहिए।"
    }
  },
  {
    question: {
      en: "If ∆ABC ~ ∆DEF, what can be said about ∠A and ∠D?",
      hi: "यदि ∆ABC ~ ∆DEF है, तो ∠A और ∠D के बारे में क्या कहा जा सकता है?"
    },
    options: {
      a: { en: "∠A = ∠E", hi: "∠A = ∠E" },
      b: { en: "∠A = ∠D", hi: "∠A = ∠D" },
      c: { en: "∠A > ∠D", hi: "∠A > ∠D" },
      d: { en: "No relation", hi: "कोई संबंध नहीं" }
    },
    answer: "b",
    explanation: {
      en: "Corresponding angles of similar triangles are equal, hence ∠A = ∠D.",
      hi: "समान त्रिभुजों के संबंधित कोण बराबर होते हैं, इसलिए ∠A = ∠D।"
    }
  },
  {
    question: {
      en: "Which criterion involves angle and side?",
      hi: "कौन सा मानदंड कोण और भुजा दोनों को शामिल करता है?"
    },
    options: {
      a: { en: "AAA", hi: "AAA" },
      b: { en: "SSS", hi: "SSS" },
      c: { en: "SAS", hi: "SAS" },
      d: { en: "ASA", hi: "ASA" }
    },
    answer: "c",
    explanation: {
      en: "SAS similarity: If one angle of a triangle equals one angle of another and the sides including these angles are in same ratio, triangles are similar.",
      hi: "SAS समानता: एक कोण समान हो और उसे सम्मिलित करने वाली भुजाएँ अनुपात में हों।"
    }
  },
  {
    question: {
      en: "If in ∆ABC and ∆PQR, AB/PQ = BC/QR = CA/RP, then the triangles are:",
      hi: "यदि ∆ABC और ∆PQR में AB/PQ = BC/QR = CA/RP हो, तो त्रिभुज:"
    },
    options: {
      a: { en: "Not similar", hi: "समान नहीं" },
      b: { en: "Congruent", hi: "समरूप" },
      c: { en: "Similar by SSS", hi: "SSS द्वारा समान" },
      d: { en: "Similar by AAA", hi: "AAA द्वारा समान" }
    },
    answer: "c",
    explanation: {
      en: "SSS similarity applies when all corresponding sides are in same ratio.",
      hi: "SSS समानता लागू होती है जब सभी संबंधित भुजाएँ अनुपात में होती हैं।"
    }
  },
  {
    question: {
      en: "Which triangle pairs are always similar?",
      hi: "निम्न में से कौन से त्रिभुज युग्म हमेशा समान होते हैं?"
    },
    options: {
      a: { en: "Equilateral triangles", hi: "समभुज त्रिभुज" },
      b: { en: "Isosceles triangles", hi: "समद्विबाहु त्रिभुज" },
      c: { en: "Right-angled triangles", hi: "समकोण त्रिभुज" },
      d: { en: "Scalene triangles", hi: "विषमभुज त्रिभुज" }
    },
    answer: "a",
    explanation: {
      en: "All equilateral triangles have equal angles and sides in same ratio.",
      hi: "सभी समभुज त्रिभुजों के कोण और भुजाएँ बराबर होती हैं, अतः वे समान होते हैं।"
    }
  },
  {
    question: {
      en: "In similar triangles, the ratio of areas is equal to:",
      hi: "समान त्रिभुजों में क्षेत्रफल का अनुपात किसके बराबर होता है?"
    },
    options: {
      a: { en: "Ratio of perimeters", hi: "परिमाप का अनुपात" },
      b: { en: "Ratio of corresponding sides", hi: "संबंधित भुजाओं का अनुपात" },
      c: { en: "Square of ratio of corresponding sides", hi: "संबंधित भुजाओं के अनुपात का वर्ग" },
      d: { en: "Double of side ratio", hi: "भुजा अनुपात का दुगना" }
    },
    answer: "c",
    explanation: {
      en: "Area ratio of similar triangles = (side1/side2)²",
      hi: "समान त्रिभुजों के क्षेत्रफल का अनुपात = संबंधित भुजाओं के अनुपात का वर्ग"
    }
  },
  {
    question: {
      en: "Why is similarity important in geometry?",
      hi: "ज्यामिति में समानता क्यों महत्वपूर्ण है?"
    },
    options: {
      a: { en: "Used in mapping and scaling", hi: "मानचित्रण और स्केलिंग में उपयोगी" },
      b: { en: "Helps in solving triangles", hi: "त्रिभुज हल करने में सहायक" },
      c: { en: "Helps in indirect measurement", hi: "अप्रत्यक्ष मापन में सहायक" },
      d: { en: "All of the above", hi: "उपरोक्त सभी" }
    },
    answer: "d",
    explanation: {
      en: "Similarity is foundational in mapping, scaling, architecture and indirect measurements.",
      hi: "समानता मानचित्रण, वास्तुकला और अप्रत्यक्ष मापन जैसे क्षेत्रों में उपयोगी है।"
    }
  },
  {
    question: {
      en: "In ∆ABC and ∆DEF, if ∠A = ∠D, ∠B = ∠E, then triangles are similar by:",
      hi: "यदि ∆ABC और ∆DEF में ∠A = ∠D, ∠B = ∠E हों, तो वे त्रिभुज किस नियम से समान होंगे?"
    },
    options: {
      a: { en: "SSS", hi: "SSS" },
      b: { en: "SAS", hi: "SAS" },
      c: { en: "AAA", hi: "AAA" },
      d: { en: "AA", hi: "AA" }
    },
    answer: "d",
    explanation: {
      en: "Two equal angles are sufficient to prove triangle similarity (AA criterion).",
      hi: "दो कोणों की समानता त्रिभुज की समानता को सिद्ध करने के लिए पर्याप्त है (AA नियम)।"
    }
  }
];

export default similarityCriteria;
