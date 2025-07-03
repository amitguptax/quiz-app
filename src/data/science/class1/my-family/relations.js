const questions = [
  {
    id: 1,
    question: {
      en: "Who is your father's father?",
      hi: "आपके पिताजी के पिताजी कौन होते हैं?"
    },
    options: [
      { en: "Uncle", hi: "चाचा" },
      { en: "Brother", hi: "भाई" },
      { en: "Grandfather", hi: "दादा" },
      { en: "Friend", hi: "मित्र" }
    ],
    correct: { en: "Grandfather", hi: "दादा" },
    explanation: {
      en: "Father's father is called grandfather.",
      hi: "पिता के पिता को दादा कहते हैं।"
    }
  },
  {
    id: 2,
    question: {
      en: "Who is your mother's sister?",
      hi: "आपकी माँ की बहन कौन होती है?"
    },
    options: [
      { en: "Aunt", hi: "मौसी" },
      { en: "Sister", hi: "बहन" },
      { en: "Grandmother", hi: "नानी" },
      { en: "Friend", hi: "मित्र" }
    ],
    correct: { en: "Aunt", hi: "मौसी" },
    explanation: {
      en: "Mother's sister is called aunt (mausi).",
      hi: "माँ की बहन को मौसी कहते हैं।"
    }
  },
  {
    id: 3,
    question: {
      en: "Who is your father's son?",
      hi: "आपके पिताजी का बेटा कौन है?"
    },
    options: [
      { en: "You or your brother", hi: "आप या आपका भाई" },
      { en: "Uncle", hi: "चाचा" },
      { en: "Sister", hi: "बहन" },
      { en: "Cousin", hi: "चचेरा भाई" }
    ],
    correct: { en: "You or your brother", hi: "आप या आपका भाई" },
    explanation: {
      en: "You or your brother is your father's son.",
      hi: "आप या आपका भाई, आपके पिताजी के बेटे होते हैं।"
    }
  },
  {
    id: 4,
    question: {
      en: "Who is your mother's father?",
      hi: "आपकी माँ के पिताजी कौन होते हैं?"
    },
    options: [
      { en: "Uncle", hi: "मामा" },
      { en: "Grandfather", hi: "नाना" },
      { en: "Brother", hi: "भाई" },
      { en: "Cousin", hi: "ममेरा भाई" }
    ],
    correct: { en: "Grandfather", hi: "नाना" },
    explanation: {
      en: "Mother's father is called nana (maternal grandfather).",
      hi: "माँ के पिताजी को नाना कहते हैं।"
    }
  },
  {
    id: 5,
    question: {
      en: "Who is your father's brother?",
      hi: "आपके पिताजी के भाई कौन होते हैं?"
    },
    options: [
      { en: "Cousin", hi: "चचेरा भाई" },
      { en: "Uncle", hi: "चाचा" },
      { en: "Grandfather", hi: "दादा" },
      { en: "Friend", hi: "मित्र" }
    ],
    correct: { en: "Uncle", hi: "चाचा" },
    explanation: {
      en: "Father's brother is called uncle (chacha).",
      hi: "पिताजी के भाई को चाचा कहते हैं।"
    }
  },
  {
    id: 6,
    question: {
      en: "Who is your sibling?",
      hi: "आपका भाई या बहन कौन होता है?"
    },
    options: [
      { en: "Friend", hi: "मित्र" },
      { en: "Cousin", hi: "चचेरा/ममेरा भाई" },
      { en: "Brother or Sister", hi: "भाई या बहन" },
      { en: "Uncle", hi: "चाचा" }
    ],
    correct: { en: "Brother or Sister", hi: "भाई या बहन" },
    explanation: {
      en: "Brother or sister is called sibling.",
      hi: "भाई या बहन को भाई-बहन (Sibling) कहते हैं।"
    }
  },
  {
    id: 7,
    question: {
      en: "Who is your mother's mother?",
      hi: "आपकी माँ की माँ कौन होती है?"
    },
    options: [
      { en: "Grandmother", hi: "नानी" },
      { en: "Sister", hi: "बहन" },
      { en: "Aunt", hi: "मौसी" },
      { en: "Uncle", hi: "मामा" }
    ],
    correct: { en: "Grandmother", hi: "नानी" },
    explanation: {
      en: "Mother's mother is called nani (maternal grandmother).",
      hi: "माँ की माँ को नानी कहते हैं।"
    }
  },
  {
    id: 8,
    question: {
      en: "Who is your father's mother?",
      hi: "आपके पिताजी की माँ कौन होती हैं?"
    },
    options: [
      { en: "Mother", hi: "माँ" },
      { en: "Grandmother", hi: "दादी" },
      { en: "Aunt", hi: "चाची" },
      { en: "Sister", hi: "बहन" }
    ],
    correct: { en: "Grandmother", hi: "दादी" },
    explanation: {
      en: "Father's mother is called dadi (paternal grandmother).",
      hi: "पिता की माँ को दादी कहते हैं।"
    }
  },
  {
    id: 9,
    question: {
      en: "Who are cousins?",
      hi: "चचेरे/ममेरे भाई-बहन कौन होते हैं?"
    },
    options: [
      { en: "Friends", hi: "मित्र" },
      { en: "Neighbor", hi: "पड़ोसी" },
      { en: "Children of uncle or aunt", hi: "चाचा या मौसी के बच्चे" },
      { en: "Teachers", hi: "शिक्षक" }
    ],
    correct: { en: "Children of uncle or aunt", hi: "चाचा या मौसी के बच्चे" },
    explanation: {
      en: "Cousins are the children of your uncle or aunt.",
      hi: "चाचा, मामा, मौसी के बच्चे चचेरे/ममेरे भाई-बहन होते हैं।"
    }
  },
  {
    id: 10,
    question: {
      en: "Who is the head of a family usually?",
      hi: "परिवार का मुखिया आमतौर पर कौन होता है?"
    },
    options: [
      { en: "Stranger", hi: "अजनबी" },
      { en: "Head of the house", hi: "घर के बड़े सदस्य" },
      { en: "Friend", hi: "मित्र" },
      { en: "Neighbor", hi: "पड़ोसी" }
    ],
    correct: { en: "Head of the house", hi: "घर के बड़े सदस्य" },
    explanation: {
      en: "Usually, the eldest member is the head of the family.",
      hi: "आमतौर पर परिवार का सबसे बड़ा सदस्य मुखिया होता है।"
    }
  }
];

export default questions;
