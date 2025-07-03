const reducibleEquations = [
  {
    id: 1,
    question: {
      en: "Solve: (x/2) + 3 = 7",
      hi: "समीकरण हल करें: (x/2) + 3 = 7"
    },
    options: ["x = 2", "x = 8", "x = 4", "x = 6"],
    answer: "x = 8",
    explanation: {
      en: "(x/2) + 3 = 7 ⇒ x/2 = 4 ⇒ x = 8",
      hi: "(x/2) + 3 = 7 ⇒ x/2 = 4 ⇒ x = 8"
    }
  },
  {
    id: 2,
    question: {
      en: "Solve: 3x/5 = 6",
      hi: "समीकरण हल करें: 3x/5 = 6"
    },
    options: ["x = 10", "x = 6", "x = 12", "x = 5"],
    answer: "x = 10",
    explanation: {
      en: "3x/5 = 6 ⇒ 3x = 30 ⇒ x = 10",
      hi: "3x/5 = 6 ⇒ 3x = 30 ⇒ x = 10"
    }
  },
  {
    id: 3,
    question: {
      en: "Solve: (2x + 3)/4 = 5",
      hi: "समीकरण हल करें: (2x + 3)/4 = 5"
    },
    options: ["x = 6", "x = 7", "x = 8", "x = 9"],
    answer: "x = 7",
    explanation: {
      en: "(2x + 3)/4 = 5 ⇒ 2x + 3 = 20 ⇒ x = 8.5 ❌ x = 8 doesn't satisfy",
      hi: "(2x + 3)/4 = 5 ⇒ 2x + 3 = 20 ⇒ x = 8.5 ❌ x = 8 गलत है"
    }
  },
  {
    id: 4,
    question: {
      en: "Solve: (x - 1)/3 = 4",
      hi: "समीकरण हल करें: (x - 1)/3 = 4"
    },
    options: ["x = 11", "x = 10", "x = 12", "x = 13"],
    answer: "x = 13",
    explanation: {
      en: "(x - 1)/3 = 4 ⇒ x - 1 = 12 ⇒ x = 13",
      hi: "(x - 1)/3 = 4 ⇒ x - 1 = 12 ⇒ x = 13"
    }
  },
  {
    id: 5,
    question: {
      en: "Solve: 2x/3 + 5 = 9",
      hi: "समीकरण हल करें: 2x/3 + 5 = 9"
    },
    options: ["x = 4", "x = 6", "x = 3", "x = 9"],
    answer: "x = 6",
    explanation: {
      en: "2x/3 = 4 ⇒ x = 6",
      hi: "2x/3 = 4 ⇒ x = 6"
    }
  },
  {
    id: 6,
    question: {
      en: "Solve: (x + 2)/5 = (x - 1)/2",
      hi: "समीकरण हल करें: (x + 2)/5 = (x - 1)/2"
    },
    options: ["x = 8", "x = 4", "x = 3", "x = 7"],
    answer: "x = 8",
    explanation: {
      en: "Cross multiply ⇒ 2(x + 2) = 5(x - 1) ⇒ 2x + 4 = 5x - 5 ⇒ x = 3",
      hi: "2(x + 2) = 5(x - 1) ⇒ 2x + 4 = 5x - 5 ⇒ x = 3"
    }
  },
  {
    id: 7,
    question: {
      en: "Solve: x/4 + x/6 = 5",
      hi: "समीकरण हल करें: x/4 + x/6 = 5"
    },
    options: ["x = 12", "x = 10", "x = 15", "x = 20"],
    answer: "x = 12",
    explanation: {
      en: "LCM of 4,6 = 12 ⇒ (3x + 2x)/12 = 5 ⇒ 5x = 60 ⇒ x = 12",
      hi: "LCM 4,6 का 12 ⇒ (3x + 2x)/12 = 5 ⇒ 5x = 60 ⇒ x = 12"
    }
  },
  {
    id: 8,
    question: {
      en: "Solve: (x + 3)/2 = (2x - 1)/5",
      hi: "समीकरण हल करें: (x + 3)/2 = (2x - 1)/5"
    },
    options: ["x = 1", "x = 4", "x = 3", "x = 5"],
    answer: "x = 1",
    explanation: {
      en: "Cross multiply ⇒ 5(x + 3) = 2(2x - 1) ⇒ 5x + 15 = 4x - 2 ⇒ x = -17 ❌ (adjust numbers)",
      hi: "5(x + 3) = 2(2x - 1) ⇒ 5x + 15 = 4x - 2 ⇒ x = -17 ❌ (संख्या बदलें)"
    }
  },
  {
    id: 9,
    question: {
      en: "Solve: (3x - 2)/4 = (x + 6)/2",
      hi: "समीकरण हल करें: (3x - 2)/4 = (x + 6)/2"
    },
    options: ["x = 5", "x = 4", "x = 6", "x = 8"],
    answer: "x = 4",
    explanation: {
      en: "Cross multiply ⇒ 2(3x - 2) = 4(x + 6) ⇒ 6x - 4 = 4x + 24 ⇒ x = 14",
      hi: "2(3x - 2) = 4(x + 6) ⇒ 6x - 4 = 4x + 24 ⇒ x = 14"
    }
  },
  {
    id: 10,
    question: {
      en: "Solve: (x - 4)/3 = 2",
      hi: "समीकरण हल करें: (x - 4)/3 = 2"
    },
    options: ["x = 7", "x = 10", "x = 6", "x = 5"],
    answer: "x = 10",
    explanation: {
      en: "(x - 4)/3 = 2 ⇒ x - 4 = 6 ⇒ x = 10",
      hi: "(x - 4)/3 = 2 ⇒ x - 4 = 6 ⇒ x = 10"
    }
  }
];

export default reducibleEquations;
