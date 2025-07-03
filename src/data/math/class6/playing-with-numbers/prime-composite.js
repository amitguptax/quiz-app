const primeComposite = {
  questions: [
    {
      question: {
        en: "Which of the following is a prime number?",
        hi: "निम्न में से कौन एक अभाज्य संख्या (prime number) है?"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "9", hi: "9" },
        { en: "7", hi: "7" },
        { en: "15", hi: "15" }
      ],
      correct: {
        en: "7",
        hi: "7"
      },
      explanation: {
        en: "7 has only two factors: 1 and 7, so it's prime.",
        hi: "7 के केवल दो गुणक हैं: 1 और 7, इसलिए यह अभाज्य है।"
      }
    },
    {
      question: {
        en: "Which is the smallest prime number?",
        hi: "सबसे छोटी अभाज्य संख्या कौन-सी है?"
      },
      options: [
        { en: "1", hi: "1" },
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "0", hi: "0" }
      ],
      correct: {
        en: "2",
        hi: "2"
      },
      explanation: {
        en: "2 is the smallest and only even prime number.",
        hi: "2 सबसे छोटी और एकमात्र सम अभाज्य संख्या है।"
      }
    },
    {
      question: {
        en: "Which of these is a composite number?",
        hi: "इनमें से कौन एक संयुक्त संख्या (composite number) है?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "3", hi: "3" },
        { en: "5", hi: "5" },
        { en: "6", hi: "6" }
      ],
      correct: {
        en: "6",
        hi: "6"
      },
      explanation: {
        en: "6 has more than two factors: 1, 2, 3, and 6.",
        hi: "6 के दो से अधिक गुणक हैं: 1, 2, 3, 6।"
      }
    },
    {
      question: {
        en: "How many prime numbers are there between 1 and 10?",
        hi: "1 से 10 के बीच कितनी अभाज्य संख्याएँ हैं?"
      },
      options: [
        { en: "2", hi: "2" },
        { en: "4", hi: "4" },
        { en: "5", hi: "5" },
        { en: "6", hi: "6" }
      ],
      correct: {
        en: "4",
        hi: "4"
      },
      explanation: {
        en: "Prime numbers between 1–10 are: 2, 3, 5, 7.",
        hi: "1–10 के बीच की अभाज्य संख्याएँ: 2, 3, 5, 7।"
      }
    },
    {
      question: {
        en: "Is 1 a prime or composite number?",
        hi: "क्या 1 अभाज्य या संयुक्त संख्या है?"
      },
      options: [
        { en: "Prime", hi: "अभाज्य" },
        { en: "Composite", hi: "संयुक्त" },
        { en: "Neither", hi: "ना अभाज्य, ना संयुक्त" },
        { en: "Both", hi: "दोनों" }
      ],
      correct: {
        en: "Neither",
        hi: "ना अभाज्य, ना संयुक्त"
      },
      explanation: {
        en: "1 has only one factor (itself), so it’s neither prime nor composite.",
        hi: "1 का केवल एक गुणक है, इसलिए यह ना अभाज्य है ना संयुक्त।"
      }
    },
    {
      question: {
        en: "Which number is both even and prime?",
        hi: "कौन-सी संख्या सम भी है और अभाज्य भी?"
      },
      options: [
        { en: "4", hi: "4" },
        { en: "2", hi: "2" },
        { en: "6", hi: "6" },
        { en: "8", hi: "8" }
      ],
      correct: {
        en: "2",
        hi: "2"
      },
      explanation: {
        en: "2 is the only even prime number.",
        hi: "2 एकमात्र सम अभाज्य संख्या है।"
      }
    },
    {
      question: {
        en: "Which of the following numbers is composite?",
        hi: "निम्न में से कौन सी संख्या संयुक्त है?"
      },
      options: [
        { en: "11", hi: "11" },
        { en: "13", hi: "13" },
        { en: "9", hi: "9" },
        { en: "7", hi: "7" }
      ],
      correct: {
        en: "9",
        hi: "9"
      },
      explanation: {
        en: "9 = 3 × 3, so it has more than two factors.",
        hi: "9 के दो से अधिक गुणक हैं, इसलिए यह संयुक्त है।"
      }
    },
    {
      question: {
        en: "What is a composite number?",
        hi: "संयुक्त संख्या क्या होती है?"
      },
      options: [
        { en: "A number with only one factor", hi: "एक संख्या जिसके केवल एक गुणक हों" },
        { en: "A number with exactly two factors", hi: "जिसके ठीक दो गुणक हों" },
        { en: "A number with more than two factors", hi: "जिसके दो से अधिक गुणक हों" },
        { en: "A number divisible by 10", hi: "जो 10 से विभाजित हो सकती हो" }
      ],
      correct: {
        en: "A number with more than two factors",
        hi: "जिसके दो से अधिक गुणक हों"
      },
      explanation: {
        en: "Composite numbers have more than two factors.",
        hi: "संयुक्त संख्याओं के दो से अधिक गुणक होते हैं।"
      }
    },
    {
      question: {
        en: "Which of the following is not a prime number?",
        hi: "निम्न में से कौन अभाज्य संख्या नहीं है?"
      },
      options: [
        { en: "3", hi: "3" },
        { en: "5", hi: "5" },
        { en: "9", hi: "9" },
        { en: "7", hi: "7" }
      ],
      correct: {
        en: "9",
        hi: "9"
      },
      explanation: {
        en: "9 = 3 × 3, so it's not a prime number.",
        hi: "9 को 3 × 3 के रूप में लिखा जा सकता है, इसलिए यह अभाज्य नहीं है।"
      }
    },
    {
      question: {
        en: "Which of the following is a prime number greater than 10?",
        hi: "निम्न में से कौन सी संख्या 10 से बड़ी अभाज्य संख्या है?"
      },
      options: [
        { en: "11", hi: "11" },
        { en: "12", hi: "12" },
        { en: "14", hi: "14" },
        { en: "15", hi: "15" }
      ],
      correct: {
        en: "11",
        hi: "11"
      },
      explanation: {
        en: "11 has only two factors: 1 and 11.",
        hi: "11 के केवल दो गुणक हैं: 1 और 11।"
      }
    }
  ]
};

export default primeComposite;
