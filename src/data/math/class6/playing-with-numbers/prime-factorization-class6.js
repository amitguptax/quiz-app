const primeFactorization = {
  questions: [
    {
      question: {
        en: "What is the prime factorization of 12?",
        hi: "12 का अभाज्य गुणनखंड क्या है?"
      },
      options: [
        { en: "2 × 6", hi: "2 × 6" },
        { en: "3 × 4", hi: "3 × 4" },
        { en: "2 × 2 × 3", hi: "2 × 2 × 3" },
        { en: "2 × 3 × 3", hi: "2 × 3 × 3" }
      ],
      correct: {
        en: "2 × 2 × 3",
        hi: "2 × 2 × 3"
      },
      explanation: {
        en: "12 = 2 × 2 × 3 are all prime numbers.",
        hi: "12 = 2 × 2 × 3, ये सभी अभाज्य संख्याएँ हैं।"
      }
    },
    {
      question: {
        en: "Which of the following is a prime factor of 30?",
        hi: "निम्न में से कौन 30 का अभाज्य गुणक है?"
      },
      options: [
        { en: "6", hi: "6" },
        { en: "15", hi: "15" },
        { en: "5", hi: "5" },
        { en: "10", hi: "10" }
      ],
      correct: {
        en: "5",
        hi: "5"
      },
      explanation: {
        en: "Prime factors of 30 are 2, 3, and 5.",
        hi: "30 के अभाज्य गुणक हैं: 2, 3, 5।"
      }
    },
    {
      question: {
        en: "What are the prime factors of 18?",
        hi: "18 के अभाज्य गुणक क्या हैं?"
      },
      options: [
        { en: "2 × 3 × 3", hi: "2 × 3 × 3" },
        { en: "2 × 9", hi: "2 × 9" },
        { en: "3 × 6", hi: "3 × 6" },
        { en: "1 × 18", hi: "1 × 18" }
      ],
      correct: {
        en: "2 × 3 × 3",
        hi: "2 × 3 × 3"
      },
      explanation: {
        en: "18 = 2 × 3 × 3 and all are prime numbers.",
        hi: "18 = 2 × 3 × 3, ये सभी अभाज्य संख्याएँ हैं।"
      }
    },
    {
      question: {
        en: "Which method is used to find prime factorization?",
        hi: "प्रधान गुणनखंड निकालने के लिए कौन-सी विधि प्रयोग की जाती है?"
      },
      options: [
        { en: "Multiplication", hi: "गुणा" },
        { en: "Division", hi: "भाजन" },
        { en: "Factor Tree", hi: "फैक्टर ट्री" },
        { en: "Addition", hi: "जोड़" }
      ],
      correct: {
        en: "Factor Tree",
        hi: "फैक्टर ट्री"
      },
      explanation: {
        en: "Factor tree is commonly used for prime factorization.",
        hi: "प्रधान गुणनखंड के लिए आमतौर पर फैक्टर ट्री विधि का उपयोग होता है।"
      }
    },
    {
      question: {
        en: "Prime factorization of 100 is:",
        hi: "100 का अभाज्य गुणनखंड है:"
      },
      options: [
        { en: "2 × 2 × 5 × 5", hi: "2 × 2 × 5 × 5" },
        { en: "10 × 10", hi: "10 × 10" },
        { en: "4 × 25", hi: "4 × 25" },
        { en: "5 × 20", hi: "5 × 20" }
      ],
      correct: {
        en: "2 × 2 × 5 × 5",
        hi: "2 × 2 × 5 × 5"
      },
      explanation: {
        en: "100 = 2 × 2 × 5 × 5 are all primes.",
        hi: "100 = 2 × 2 × 5 × 5, सभी अभाज्य संख्याएँ हैं।"
      }
    },
    {
      question: {
        en: "Which of the following has only one prime factor?",
        hi: "निम्न में से किसका केवल एक अभाज्य गुणक है?"
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
        en: "7 is itself a prime number.",
        hi: "7 स्वयं एक अभाज्य संख्या है।"
      }
    },
    {
      question: {
        en: "Which of these is NOT a correct prime factorization?",
        hi: "निम्न में से कौन-सा प्रधान गुणनखंड सही नहीं है?"
      },
      options: [
        { en: "2 × 2 × 5 = 20", hi: "2 × 2 × 5 = 20" },
        { en: "2 × 2 × 2 × 2 = 16", hi: "2 × 2 × 2 × 2 = 16" },
        { en: "3 × 3 × 3 = 27", hi: "3 × 3 × 3 = 27" },
        { en: "4 × 5 = 20", hi: "4 × 5 = 20" }
      ],
      correct: {
        en: "4 × 5 = 20",
        hi: "4 × 5 = 20"
      },
      explanation: {
        en: "4 is not a prime number.",
        hi: "4 एक अभाज्य संख्या नहीं है।"
      }
    },
    {
      question: {
        en: "The prime factorization of 36 is:",
        hi: "36 का प्रधान गुणनखंड है:"
      },
      options: [
        { en: "2 × 3 × 6", hi: "2 × 3 × 6" },
        { en: "2 × 2 × 3 × 3", hi: "2 × 2 × 3 × 3" },
        { en: "4 × 9", hi: "4 × 9" },
        { en: "1 × 36", hi: "1 × 36" }
      ],
      correct: {
        en: "2 × 2 × 3 × 3",
        hi: "2 × 2 × 3 × 3"
      },
      explanation: {
        en: "36 = 2 × 2 × 3 × 3; all are primes.",
        hi: "36 = 2 × 2 × 3 × 3; सभी अभाज्य हैं।"
      }
    },
    {
      question: {
        en: "Why is prime factorization useful?",
        hi: "प्रधान गुणनखंड क्यों उपयोगी है?"
      },
      options: [
        { en: "For addition", hi: "जोड़ के लिए" },
        { en: "For multiplication only", hi: "केवल गुणा के लिए" },
        { en: "To find LCM and HCF", hi: "LCM और HCF निकालने के लिए" },
        { en: "To divide numbers easily", hi: "संख्याएँ आसानी से विभाजित करने के लिए" }
      ],
      correct: {
        en: "To find LCM and HCF",
        hi: "LCM और HCF निकालने के लिए"
      },
      explanation: {
        en: "Prime factorization is mainly used to find LCM and HCF.",
        hi: "प्रधान गुणनखंड का प्रयोग मुख्यतः LCM और HCF निकालने में होता है।"
      }
    },
    {
      question: {
        en: "Prime factorization of 64 is:",
        hi: "64 का प्रधान गुणनखंड क्या है?"
      },
      options: [
        { en: "2 × 2 × 2 × 2 × 2 × 2", hi: "2 × 2 × 2 × 2 × 2 × 2" },
        { en: "4 × 16", hi: "4 × 16" },
        { en: "8 × 8", hi: "8 × 8" },
        { en: "2 × 4 × 8", hi: "2 × 4 × 8" }
      ],
      correct: {
        en: "2 × 2 × 2 × 2 × 2 × 2",
        hi: "2 × 2 × 2 × 2 × 2 × 2"
      },
      explanation: {
        en: "64 = 2⁶ = 2 × 2 × 2 × 2 × 2 × 2",
        hi: "64 = 2⁶ = 2 × 2 × 2 × 2 × 2 × 2"
      }
    }
  ]
};

export default primeFactorization;
