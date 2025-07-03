const locationExtent = {
  label: {
    en: "Location and Extent",
    hi: "स्थान और विस्तार"
  },
  questions: [
    {
      id: 1,
      question: {
        en: "What is the latitudinal extent of mainland India?",
        hi: "मुख्यभूमि भारत का अक्षांशीय विस्तार क्या है?"
      },
      options: ["8°4'N to 37°6'N", "6°4'N to 38°6'N", "9°4'N to 39°6'N", "10°4'N to 35°6'N"],
      answer: 0,
      explanation: {
        en: "Mainland India extends from 8°4'N to 37°6'N latitude.",
        hi: "मुख्य भारत 8°4'N से 37°6'N अक्षांश तक फैला हुआ है।"
      }
    },
    {
      id: 2,
      question: {
        en: "What is the longitudinal extent of mainland India?",
        hi: "मुख्य भारत का देशांतर विस्तार क्या है?"
      },
      options: ["68°7'E to 97°25'E", "70°7'E to 95°25'E", "66°7'E to 98°25'E", "69°7'E to 96°25'E"],
      answer: 0,
      explanation: {
        en: "Mainland India extends from 68°7'E to 97°25'E longitude.",
        hi: "मुख्य भारत 68°7'E से 97°25'E देशांतर तक फैला है।"
      }
    },
    {
      id: 3,
      question: {
        en: "Which line divides India into almost two equal halves longitudinally?",
        hi: "कौन सी रेखा भारत को देशांतर की दृष्टि से लगभग दो बराबर भागों में बाँटती है?"
      },
      options: ["Tropic of Cancer", "Standard Meridian", "Equator", "Prime Meridian"],
      answer: 1,
      explanation: {
        en: "The 82°30'E line is the Standard Meridian of India, dividing it longitudinally.",
        hi: "भारत की मानक रेखा 82°30'E है जो इसे देशांतर में विभाजित करती है।"
      }
    },
    {
      id: 4,
      question: {
        en: "Which is the southernmost point of India?",
        hi: "भारत का सबसे दक्षिणी बिंदु कौन सा है?"
      },
      options: ["Cape Comorin", "Indira Point", "Kanyakumari", "Nicobar Point"],
      answer: 1,
      explanation: {
        en: "Indira Point in the Nicobar Islands is the southernmost point of India.",
        hi: "इंदिरा पॉइंट, जो निकोबार द्वीप में है, भारत का सबसे दक्षिणी बिंदु है।"
      }
    },
    {
      id: 5,
      question: {
        en: "Which Tropic passes through India?",
        hi: "भारत से कौन सी कर्क रेखा गुजरती है?"
      },
      options: ["Tropic of Capricorn", "Tropic of Cancer", "Equator", "Arctic Circle"],
      answer: 1,
      explanation: {
        en: "The Tropic of Cancer (23°30'N) passes through the middle of India.",
        hi: "कर्क रेखा (23°30'N) भारत के मध्य से गुजरती है।"
      }
    }
    // Add questions 6–20 in the same format.
  ]
};

export default locationExtent; 
