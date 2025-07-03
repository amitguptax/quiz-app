const probabilityOfEvents = [
  {
    question: {
      en: "What is the probability of an impossible event?",
      hi: "असंभव घटना की प्रायिकता क्या होती है?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "1", hi: "1" },
      c: { en: "0.5", hi: "0.5" },
      d: { en: "Cannot be determined", hi: "निर्धारित नहीं की जा सकती" }
    },
    answer: "a",
    explanation: {
      en: "The probability of an impossible event is always 0.",
      hi: "असंभव घटना की प्रायिकता हमेशा 0 होती है।"
    }
  },
  {
    question: {
      en: "What is the sum of probabilities of all possible outcomes of an experiment?",
      hi: "किसी प्रयोग की सभी संभावित घटनाओं की प्रायिकताओं का योग क्या होता है?"
    },
    options: {
      a: { en: "1", hi: "1" },
      b: { en: "0", hi: "0" },
      c: { en: "0.5", hi: "0.5" },
      d: { en: "Depends on outcomes", hi: "परिणामों पर निर्भर करता है" }
    },
    answer: "a",
    explanation: {
      en: "The sum of probabilities of all outcomes in a sample space is 1.",
      hi: "सैंपल स्पेस की सभी घटनाओं की प्रायिकताओं का योग 1 होता है।"
    }
  },
  {
    question: {
      en: "If a die is thrown, what is the probability of getting an even number?",
      hi: "यदि एक पासा फेंका जाए, तो सम संख्या आने की प्रायिकता क्या है?"
    },
    options: {
      a: { en: "1/2", hi: "1/2" },
      b: { en: "1/3", hi: "1/3" },
      c: { en: "2/3", hi: "2/3" },
      d: { en: "1/6", hi: "1/6" }
    },
    answer: "a",
    explanation: {
      en: "Even numbers on a die are 2, 4, 6 ⇒ 3 out of 6 outcomes ⇒ Probability = 3/6 = 1/2.",
      hi: "पासे पर सम संख्याएँ 2, 4, 6 होती हैं ⇒ 3/6 ⇒ प्रायिकता = 1/2।"
    }
  },
  {
    question: {
      en: "What is the probability of getting a head when a coin is tossed?",
      hi: "सिक्का उछालने पर हेड आने की प्रायिकता क्या है?"
    },
    options: {
      a: { en: "1/2", hi: "1/2" },
      b: { en: "1/3", hi: "1/3" },
      c: { en: "1", hi: "1" },
      d: { en: "0", hi: "0" }
    },
    answer: "a",
    explanation: {
      en: "There are 2 equally likely outcomes: Head and Tail ⇒ 1/2.",
      hi: "हेड और टेल दो समान संभावित परिणाम हैं ⇒ 1/2।"
    }
  },
  {
    question: {
      en: "Which of these is a valid probability?",
      hi: "इनमें से कौन सी एक मान्य प्रायिकता है?"
    },
    options: {
      a: { en: "0.75", hi: "0.75" },
      b: { en: "1.2", hi: "1.2" },
      c: { en: "-0.1", hi: "-0.1" },
      d: { en: "2", hi: "2" }
    },
    answer: "a",
    explanation: {
      en: "Probability must lie between 0 and 1 (inclusive).",
      hi: "प्रायिकता का मान 0 और 1 के बीच (समेत) होता है।"
    }
  },
  {
    question: {
      en: "A bag has 5 red and 3 green balls. Probability of picking a green ball?",
      hi: "एक थैले में 5 लाल और 3 हरे गोले हैं। हरा गोला चुनने की प्रायिकता क्या होगी?"
    },
    options: {
      a: { en: "3/8", hi: "3/8" },
      b: { en: "5/8", hi: "5/8" },
      c: { en: "1/2", hi: "1/2" },
      d: { en: "2/5", hi: "2/5" }
    },
    answer: "a",
    explanation: {
      en: "Total = 5+3 = 8, Green = 3 ⇒ Probability = 3/8.",
      hi: "कुल गोले = 8, हरे = 3 ⇒ प्रायिकता = 3/8।"
    }
  },
  {
    question: {
      en: "What is the probability of selecting a vowel randomly from English alphabets?",
      hi: "अंग्रेजी वर्णमाला से एक स्वर चुनने की प्रायिकता क्या है?"
    },
    options: {
      a: { en: "5/26", hi: "5/26" },
      b: { en: "21/26", hi: "21/26" },
      c: { en: "1/5", hi: "1/5" },
      d: { en: "13/26", hi: "13/26" }
    },
    answer: "a",
    explanation: {
      en: "Total letters = 26, Vowels = A, E, I, O, U ⇒ 5 vowels ⇒ 5/26.",
      hi: "कुल वर्ण = 26, स्वर = 5 ⇒ प्रायिकता = 5/26।"
    }
  },
  {
    question: {
      en: "What is the probability of getting number 7 on a standard die?",
      hi: "एक मानक पासे पर 7 संख्या आने की प्रायिकता क्या है?"
    },
    options: {
      a: { en: "0", hi: "0" },
      b: { en: "1/6", hi: "1/6" },
      c: { en: "1", hi: "1" },
      d: { en: "1/7", hi: "1/7" }
    },
    answer: "a",
    explanation: {
      en: "Standard die has numbers 1 to 6 only ⇒ 7 is not possible ⇒ Probability = 0.",
      hi: "मानक पासे पर केवल 1 से 6 तक की संख्याएँ होती हैं ⇒ 7 संभव नहीं ⇒ प्रायिकता = 0।"
    }
  },
  {
    question: {
      en: "If probability of an event is 0.65, what is the probability of its complement?",
      hi: "यदि किसी घटना की प्रायिकता 0.65 है, तो उसकी पूरक घटना की प्रायिकता क्या होगी?"
    },
    options: {
      a: { en: "0.35", hi: "0.35" },
      b: { en: "1.35", hi: "1.35" },
      c: { en: "0.65", hi: "0.65" },
      d: { en: "None", hi: "कोई नहीं" }
    },
    answer: "a",
    explanation: {
      en: "P(E') = 1 - P(E) = 1 - 0.65 = 0.35.",
      hi: "पूरक घटना की प्रायिकता = 1 - 0.65 = 0.35।"
    }
  },
  {
    question: {
      en: "Which of the following values cannot be a probability?",
      hi: "निम्न में से कौन सा मान प्रायिकता नहीं हो सकता?"
    },
    options: {
      a: { en: "1.1", hi: "1.1" },
      b: { en: "0.6", hi: "0.6" },
      c: { en: "0", hi: "0" },
      d: { en: "1", hi: "1" }
    },
    answer: "a",
    explanation: {
      en: "Valid probability lies between 0 and 1. So 1.1 is invalid.",
      hi: "प्रायिकता 0 और 1 के बीच होती है, इसलिए 1.1 एक अमान्य मान है।"
    }
  }
];

export default probabilityOfEvents;
