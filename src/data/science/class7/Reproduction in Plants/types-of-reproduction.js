const typesOfReproduction = [
  {
    id: 1,
    question: {
      en: "What is asexual reproduction?",
      hi: "अलैंगिक जनन क्या है?"
    },
    options: [
      { en: "Reproduction involving two parents", hi: "दो जनकों द्वारा जनन" },
      { en: "Reproduction involving flowers only", hi: "केवल फूलों से जनन" },
      { en: "Reproduction from one parent without gametes", hi: "एक ही जनक से बिना युग्मक के जनन" },
      { en: "Reproduction in animals only", hi: "केवल जानवरों में जनन" }
    ],
    correct: {
      en: "Reproduction from one parent without gametes",
      hi: "एक ही जनक से बिना युग्मक के जनन"
    },
    explanation: {
      en: "Asexual reproduction involves a single parent and no gametes.",
      hi: "अलैंगिक जनन में एक ही जनक होता है और युग्मक की आवश्यकता नहीं होती।"
    }
  },
  {
    id: 2,
    question: {
      en: "Which of the following is an example of asexual reproduction?",
      hi: "निम्न में से कौन अलैंगिक जनन का उदाहरण है?"
    },
    options: [
      { en: "Pollination", hi: "परागण" },
      { en: "Fertilization", hi: "निषेचन" },
      { en: "Budding in yeast", hi: "यीस्ट में कली बनना" },
      { en: "Seed formation", hi: "बीज निर्माण" }
    ],
    correct: {
      en: "Budding in yeast",
      hi: "यीस्ट में कली बनना"
    },
    explanation: {
      en: "Budding in yeast is a type of asexual reproduction.",
      hi: "यीस्ट में कली बनना अलैंगिक जनन का एक प्रकार है।"
    }
  },
  {
    id: 3,
    question: {
      en: "Which part is mainly involved in sexual reproduction in plants?",
      hi: "पौधों में लैंगिक जनन में मुख्य रूप से कौन सा भाग शामिल होता है?"
    },
    options: [
      { en: "Leaves", hi: "पत्तियाँ" },
      { en: "Stem", hi: "तना" },
      { en: "Flower", hi: "फूल" },
      { en: "Roots", hi: "जड़ें" }
    ],
    correct: {
      en: "Flower",
      hi: "फूल"
    },
    explanation: {
      en: "Flowers are the reproductive parts of plants.",
      hi: "फूल पौधों के जनन अंग होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Which method is used by Bryophyllum for reproduction?",
      hi: "ब्रायोफिलम पौधा किस विधि से जनन करता है?"
    },
    options: [
      { en: "Seeds", hi: "बीज" },
      { en: "Leaves", hi: "पत्तियों से" },
      { en: "Flowers", hi: "फूलों से" },
      { en: "Roots", hi: "जड़ों से" }
    ],
    correct: {
      en: "Leaves",
      hi: "पत्तियों से"
    },
    explanation: {
      en: "Bryophyllum reproduces through buds on its leaves.",
      hi: "ब्रायोफिलम अपनी पत्तियों पर कली बनाकर जनन करता है।"
    }
  },
  {
    id: 5,
    question: {
      en: "Which of the following is a sexual reproduction process?",
      hi: "निम्न में से कौन लैंगिक जनन की प्रक्रिया है?"
    },
    options: [
      { en: "Budding", hi: "कली बनना" },
      { en: "Fission", hi: "विभाजन" },
      { en: "Fertilization", hi: "निषेचन" },
      { en: "Fragmentation", hi: "खंडन" }
    ],
    correct: {
      en: "Fertilization",
      hi: "निषेचन"
    },
    explanation: {
      en: "Fertilization is the fusion of male and female gametes in sexual reproduction.",
      hi: "निषेचन लैंगिक जनन में नर और मादा युग्मकों का संलयन है।"
    }
  },
  {
    id: 6,
    question: {
      en: "What is formed after fertilization in plants?",
      hi: "पौधों में निषेचन के बाद क्या बनता है?"
    },
    options: [
      { en: "Pollen", hi: "परागकण" },
      { en: "Ovule", hi: "बीजांड" },
      { en: "Seed", hi: "बीज" },
      { en: "Bud", hi: "कली" }
    ],
    correct: {
      en: "Seed",
      hi: "बीज"
    },
    explanation: {
      en: "After fertilization, a seed is formed in plants.",
      hi: "निषेचन के बाद पौधों में बीज बनता है।"
    }
  },
  {
    id: 7,
    question: {
      en: "Which of the following reproduces by fragmentation?",
      hi: "निम्न में से कौन खंडन द्वारा जनन करता है?"
    },
    options: [
      { en: "Moss", hi: "काई" },
      { en: "Fungus", hi: "फफूंदी" },
      { en: "Spirogyra", hi: "स्पाइरोजाइरा" },
      { en: "Yeast", hi: "यीस्ट" }
    ],
    correct: {
      en: "Spirogyra",
      hi: "स्पाइरोजाइरा"
    },
    explanation: {
      en: "Spirogyra reproduces asexually by fragmentation.",
      hi: "स्पाइरोजाइरा खंडन द्वारा अलैंगिक जनन करता है।"
    }
  },
  {
    id: 8,
    question: {
      en: "Which structure contains male gametes in flowers?",
      hi: "फूलों में नर युग्मक किस संरचना में होते हैं?"
    },
    options: [
      { en: "Ovary", hi: "अंडाशय" },
      { en: "Anther", hi: "परागकोष" },
      { en: "Stigma", hi: "स्त्रीग्रह" },
      { en: "Sepal", hi: "दल" }
    ],
    correct: {
      en: "Anther",
      hi: "परागकोष"
    },
    explanation: {
      en: "Anther is the part of a flower that contains pollen (male gametes).",
      hi: "फूल का परागकोष वह भाग है जिसमें परागकण (नर युग्मक) होते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Which structure forms fruit after fertilization?",
      hi: "निषेचन के बाद कौन सी संरचना फल बनाती है?"
    },
    options: [
      { en: "Ovule", hi: "बीजांड" },
      { en: "Ovule wall", hi: "बीजांड की दीवार" },
      { en: "Ovary", hi: "अंडाशय" },
      { en: "Anther", hi: "परागकोष" }
    ],
    correct: {
      en: "Ovary",
      hi: "अंडाशय"
    },
    explanation: {
      en: "The ovary of the flower develops into the fruit after fertilization.",
      hi: "निषेचन के बाद फूल का अंडाशय फल में परिवर्तित हो जाता है।"
    }
  },
  {
    id: 10,
    question: {
      en: "What is vegetative propagation?",
      hi: "वनस्पतिक जनन क्या है?"
    },
    options: [
      { en: "Reproduction from seeds", hi: "बीजों से जनन" },
      { en: "Reproduction from flower", hi: "फूलों से जनन" },
      { en: "Reproduction from vegetative parts", hi: "वनस्पतिक भागों से जनन" },
      { en: "Reproduction by spores", hi: "बीजाणुओं से जनन" }
    ],
    correct: {
      en: "Reproduction from vegetative parts",
      hi: "वनस्पतिक भागों से जनन"
    },
    explanation: {
      en: "Vegetative propagation is a type of asexual reproduction using roots, stems, or leaves.",
      hi: "वनस्पतिक जनन एक प्रकार का अलैंगिक जनन है जो जड़, तना या पत्तियों से होता है।"
    }
  }
];

export default typesOfReproduction;
