const bloodRelations = [
  {
    id: 1,
    question: {
      en: "Pointing to a girl, Raj said, 'She is the daughter of the only son of my father.' How is the girl related to Raj?",
      hi: "एक लड़की की ओर इशारा करते हुए, राज ने कहा, 'वह मेरे पिता के इकलौते बेटे की बेटी है।' लड़की का राज से क्या संबंध है?"
    },
    options: {
      en: ["Daughter", "Sister", "Niece", "Cousin"],
      hi: ["बेटी", "बहन", "भतीजी", "चचेरी बहन"]
    },
    correctAnswer: "Daughter"
  },
  {
    id: 2,
    question: {
      en: "If A is the brother of B, B is the sister of C, and C is the father of D, how is A related to D?",
      hi: "यदि A, B का भाई है, B, C की बहन है, और C, D का पिता है, तो A का D से क्या संबंध है?"
    },
    options: {
      en: ["Father", "Uncle", "Brother", "Grandfather"],
      hi: ["पिता", "चाचा", "भाई", "दादा"]
    },
    correctAnswer: "Uncle"
  },
  {
    id: 3,
    question: {
      en: "Introducing a boy, a woman said, 'He is the son of the only son of my father.' How is the boy related to the woman?",
      hi: "एक लड़के का परिचय देते हुए एक महिला ने कहा, 'वह मेरे पिता के इकलौते बेटे का बेटा है।' वह लड़का उस महिला से क्या संबंध रखता है?"
    },
    options: {
      en: ["Son", "Nephew", "Cousin", "Grandson"],
      hi: ["बेटा", "भतीजा", "चचेरा भाई", "पोता"]
    },
    correctAnswer: "Son"
  },
  {
    id: 4,
    question: {
      en: "If P is the brother of Q, Q is the daughter of R, and R is the wife of S, how is S related to P?",
      hi: "यदि P, Q का भाई है, Q, R की बेटी है, और R, S की पत्नी है, तो S का P से क्या संबंध है?"
    },
    options: {
      en: ["Uncle", "Father", "Brother", "Grandfather"],
      hi: ["चाचा", "पिता", "भाई", "दादा"]
    },
    correctAnswer: "Father"
  },
  {
    id: 5,
    question: {
      en: "Pointing to a photograph, Ajay said, 'He is the son of the only son of my grandfather.' How is Ajay related to the man in the photograph?",
      hi: "एक तस्वीर की ओर इशारा करते हुए अजय ने कहा, 'वह मेरे दादाजी के इकलौते बेटे का बेटा है।' अजय का उस व्यक्ति से क्या संबंध है?"
    },
    options: {
      en: ["Brother", "Cousin", "Uncle", "Father"],
      hi: ["भाई", "चचेरा भाई", "चाचा", "पिता"]
    },
    correctAnswer: "Brother"
  },
  {
    id: 50,
    question: {
      en: "If A is the mother of B, C is the brother of A, and D is the sister of B, how is C related to D?",
      hi: "यदि A, B की माँ है, C, A का भाई है, और D, B की बहन है, तो C का D से क्या संबंध है?"
    },
    options: {
      en: ["Uncle", "Brother", "Cousin", "Father"],
      hi: ["मामा/चाचा", "भाई", "चचेरा भाई", "पिता"]
    },
    correctAnswer: "Uncle"
  }
];

export default bloodRelations;
