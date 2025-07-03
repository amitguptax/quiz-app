const solveSimple = [
  {
    id: 1,
    question: {
      en: "Solve: x + 5 = 12",
      hi: "हल करें: x + 5 = 12"
    },
    options: ["x = 5", "x = 7", "x = 17", "x = 10"],
    answer: "x = 7",
    explanation: {
      en: "Subtract 5 from both sides: x = 12 - 5 = 7",
      hi: "दोनों ओर से 5 घटाएं: x = 12 - 5 = 7"
    }
  },
  {
    id: 2,
    question: {
      en: "Solve: 2x = 10",
      hi: "हल करें: 2x = 10"
    },
    options: ["x = 2", "x = 5", "x = 10", "x = 20"],
    answer: "x = 5",
    explanation: {
      en: "Divide both sides by 2: x = 10 / 2 = 5",
      hi: "दोनों ओर को 2 से विभाजित करें: x = 10 / 2 = 5"
    }
  },
  {
    id: 3,
    question: {
      en: "Solve: x/3 = 4",
      hi: "हल करें: x/3 = 4"
    },
    options: ["x = 12", "x = 1", "x = 7", "x = 3"],
    answer: "x = 12",
    explanation: {
      en: "Multiply both sides by 3: x = 4 × 3 = 12",
      hi: "दोनों ओर को 3 से गुणा करें: x = 4 × 3 = 12"
    }
  },
  {
    id: 4,
    question: {
      en: "Solve: 3x - 2 = 7",
      hi: "हल करें: 3x - 2 = 7"
    },
    options: ["x = 3", "x = 2", "x = 5", "x = 4"],
    answer: "x = 3",
    explanation: {
      en: "Add 2 to both sides: 3x = 9, then x = 9 / 3 = 3",
      hi: "दोनों ओर 2 जोड़ें: 3x = 9, फिर x = 9 / 3 = 3"
    }
  },
  {
    id: 5,
    question: {
      en: "Solve: 5x + 10 = 0",
      hi: "हल करें: 5x + 10 = 0"
    },
    options: ["x = -2", "x = -1", "x = 2", "x = 0"],
    answer: "x = -2",
    explanation: {
      en: "Subtract 10: 5x = -10, divide by 5: x = -2",
      hi: "10 घटाएं: 5x = -10, फिर 5 से भाग दें: x = -2"
    }
  },
  {
    id: 6,
    question: {
      en: "Solve: 4x - 8 = 0",
      hi: "हल करें: 4x - 8 = 0"
    },
    options: ["x = -2", "x = 2", "x = 0", "x = 4"],
    answer: "x = 2",
    explanation: {
      en: "Add 8: 4x = 8, then x = 8 / 4 = 2",
      hi: "8 जोड़ें: 4x = 8, फिर x = 8 / 4 = 2"
    }
  },
  {
    id: 7,
    question: {
      en: "Solve: 2(x - 3) = 8",
      hi: "हल करें: 2(x - 3) = 8"
    },
    options: ["x = 7", "x = 5", "x = 4", "x = 6"],
    answer: "x = 7",
    explanation: {
      en: "Divide by 2: x - 3 = 4, then x = 4 + 3 = 7",
      hi: "2 से भाग दें: x - 3 = 4, फिर x = 4 + 3 = 7"
    }
  },
  {
    id: 8,
    question: {
      en: "Solve: x/5 + 2 = 4",
      hi: "हल करें: x/5 + 2 = 4"
    },
    options: ["x = 5", "x = 10", "x = 1", "x = 7"],
    answer: "x = 10",
    explanation: {
      en: "Subtract 2: x/5 = 2, then x = 2 × 5 = 10",
      hi: "2 घटाएं: x/5 = 2, फिर x = 2 × 5 = 10"
    }
  },
  {
    id: 9,
    question: {
      en: "Solve: 6 = x - 4",
      hi: "हल करें: 6 = x - 4"
    },
    options: ["x = 2", "x = 10", "x = 8", "x = 4"],
    answer: "x = 10",
    explanation: {
      en: "Add 4 to both sides: x = 6 + 4 = 10",
      hi: "दोनों ओर 4 जोड़ें: x = 6 + 4 = 10"
    }
  },
  {
    id: 10,
    question: {
      en: "Solve: 3(x + 2) = 15",
      hi: "हल करें: 3(x + 2) = 15"
    },
    options: ["x = 5", "x = 3", "x = 1", "x = 4"],
    answer: "x = 3",
    explanation: {
      en: "Divide by 3: x + 2 = 5, then x = 5 - 2 = 3",
      hi: "3 से भाग दें: x + 2 = 5, फिर x = 5 - 2 = 3"
    }
  }
];

export default solveSimple;
