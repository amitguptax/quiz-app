const syllogism = [
  {
    id: 1,
    question: {
      en: "Statements:\nAll apples are fruits.\nSome fruits are bananas.\nConclusions:\nI. Some apples are bananas.\nII. All fruits are apples.",
      hi: "कथन:\nसभी सेब फल हैं।\nकुछ फल केले हैं।\nनिष्कर्ष:\nI. कुछ सेब केले हैं।\nII. सभी फल सेब हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Neither I nor II follows"
  },
  {
    id: 2,
    question: {
      en: "Statements:\nSome cats are dogs.\nAll dogs are rats.\nConclusions:\nI. Some cats are rats.\nII. All dogs are cats.",
      hi: "कथन:\nकुछ बिल्लियाँ कुत्ते हैं।\nसभी कुत्ते चूहे हैं।\nनिष्कर्ष:\nI. कुछ बिल्लियाँ चूहे हैं।\nII. सभी कुत्ते बिल्लियाँ हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Only I follows"
  },
  {
    id: 3,
    question: {
      en: "Statements:\nAll cars are bikes.\nSome bikes are scooters.\nConclusions:\nI. All cars are scooters.\nII. Some bikes are cars.",
      hi: "कथन:\nसभी कारें बाइक हैं।\nकुछ बाइक स्कूटर हैं।\nनिष्कर्ष:\nI. सभी कारें स्कूटर हैं।\nII. कुछ बाइक कारें हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Only II follows"
  },
  {
    id: 4,
    question: {
      en: "Statements:\nAll pens are papers.\nAll papers are books.\nConclusions:\nI. All pens are books.\nII. Some books are pens.",
      hi: "कथन:\nसभी पेन कागज हैं।\nसभी कागज किताबें हैं।\nनिष्कर्ष:\nI. सभी पेन किताबें हैं।\nII. कुछ किताबें पेन हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Both I and II follow"
  },
  {
    id: 5,
    question: {
      en: "Statements:\nSome boys are men.\nAll men are tall.\nConclusions:\nI. Some boys are tall.\nII. All boys are tall.",
      hi: "कथन:\nकुछ लड़के पुरुष हैं।\nसभी पुरुष लंबे हैं।\nनिष्कर्ष:\nI. कुछ लड़के लंबे हैं।\nII. सभी लड़के लंबे हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Only I follows"
  },
  {
    id: 6,
    question: {
      en: "Statements:\nNo fruits are vegetables.\nAll tomatoes are vegetables.\nConclusions:\nI. No tomatoes are fruits.\nII. All vegetables are tomatoes.",
      hi: "कथन:\nकोई फल सब्जी नहीं है।\nसभी टमाटर सब्जी हैं।\nनिष्कर्ष:\nI. कोई टमाटर फल नहीं है।\nII. सभी सब्जियाँ टमाटर हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Only I follows"
  },
  {
    id: 7,
    question: {
      en: "Statements:\nSome birds are animals.\nAll animals are lions.\nConclusions:\nI. Some birds are lions.\nII. All birds are animals.",
      hi: "कथन:\nकुछ पक्षी जानवर हैं।\nसभी जानवर शेर हैं।\nनिष्कर्ष:\nI. कुछ पक्षी शेर हैं।\nII. सभी पक्षी जानवर हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Only I follows"
  },
  {
    id: 8,
    question: {
      en: "Statements:\nAll books are pens.\nSome pens are pencils.\nConclusions:\nI. Some pencils are books.\nII. All pens are books.",
      hi: "कथन:\nसभी किताबें पेन हैं।\nकुछ पेन पेंसिल हैं।\nनिष्कर्ष:\nI. कुछ पेंसिल किताबें हैं।\nII. सभी पेन किताबें हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Neither I nor II follows"
  },
  {
    id: 9,
    question: {
      en: "Statements:\nAll musicians are dancers.\nSome dancers are singers.\nConclusions:\nI. Some singers are musicians.\nII. All musicians are singers.",
      hi: "कथन:\nसभी संगीतकार नर्तक हैं।\nकुछ नर्तक गायक हैं।\nनिष्कर्ष:\nI. कुछ गायक संगीतकार हैं।\nII. सभी संगीतकार गायक हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Neither I nor II follows"
  },
  {
    id: 10,
    question: {
      en: "Statements:\nSome roses are red.\nAll red are flowers.\nConclusions:\nI. Some roses are flowers.\nII. All roses are flowers.",
      hi: "कथन:\nकुछ गुलाब लाल हैं।\nसभी लाल फूल हैं।\nनिष्कर्ष:\nI. कुछ गुलाब फूल हैं।\nII. सभी गुलाब फूल हैं।"
    },
    options: {
      en: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
      hi: ["केवल निष्कर्ष I सही है", "केवल निष्कर्ष II सही है", "दोनों निष्कर्ष सही हैं", "कोई भी निष्कर्ष सही नहीं है"]
    },
    correctAnswer: "Only I follows"
  }

  // Add questions 11 to 50 as needed in the same format
];

export default syllogism;
