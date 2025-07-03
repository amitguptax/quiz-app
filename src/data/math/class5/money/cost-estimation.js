const costEstimation = {
  questions: [
    {
      question: {
        en: "A pen costs ₹18. Estimate the cost of 6 pens.",
        hi: "एक पेन की कीमत ₹18 है। 6 पेन की अनुमानित लागत बताएं।"
      },
      options: [
        { en: "₹100", hi: "₹100" },
        { en: "₹110", hi: "₹110" },
        { en: "₹120", hi: "₹120" },
        { en: "₹90", hi: "₹90" }
      ],
      correct: { en: "₹110", hi: "₹110" },
      explanation: {
        en: "Estimate ₹18 to ₹20. 6 × ₹20 = ₹120. Closer estimate is ₹110.",
        hi: "₹18 को ₹20 मानें, 6 × ₹20 = ₹120. वास्तविक लागत से पास ₹110 है।"
      }
    },
    {
      question: {
        en: "A chocolate costs ₹23. Estimate the cost of 4 chocolates.",
        hi: "एक चॉकलेट की कीमत ₹23 है। 4 चॉकलेट की अनुमानित लागत बताएं।"
      },
      options: [
        { en: "₹80", hi: "₹80" },
        { en: "₹90", hi: "₹90" },
        { en: "₹100", hi: "₹100" },
        { en: "₹95", hi: "₹95" }
      ],
      correct: { en: "₹90", hi: "₹90" },
      explanation: {
        en: "₹23 ≈ ₹22 or ₹25, 4 × ₹22 ≈ ₹88 or 4 × ₹25 = ₹100 → Estimate: ₹90",
        hi: "₹23 को ₹22 या ₹25 मानें, 4 × ₹22 ≈ ₹88, अनुमानित लागत ₹90 है।"
      }
    },
    {
      question: {
        en: "Estimate the total cost of items priced ₹19, ₹32, and ₹27.",
        hi: "₹19, ₹32, और ₹27 की वस्तुओं की कुल अनुमानित लागत बताएं।"
      },
      options: [
        { en: "₹70", hi: "₹70" },
        { en: "₹80", hi: "₹80" },
        { en: "₹90", hi: "₹90" },
        { en: "₹100", hi: "₹100" }
      ],
      correct: { en: "₹80", hi: "₹80" },
      explanation: {
        en: "Round to ₹20 + ₹30 + ₹30 = ₹80",
        hi: "₹19 ≈ ₹20, ₹32 ≈ ₹30, ₹27 ≈ ₹30, कुल = ₹80"
      }
    },
    {
      question: {
        en: "You saved ₹22, ₹18, and ₹29 in 3 days. Estimate the total savings.",
        hi: "आपने 3 दिनों में ₹22, ₹18 और ₹29 बचाए। कुल अनुमानित बचत बताएं।"
      },
      options: [
        { en: "₹60", hi: "₹60" },
        { en: "₹70", hi: "₹70" },
        { en: "₹80", hi: "₹80" },
        { en: "₹90", hi: "₹90" }
      ],
      correct: { en: "₹70", hi: "₹70" },
      explanation: {
        en: "₹22 ≈ ₹20, ₹18 ≈ ₹20, ₹29 ≈ ₹30 → 20 + 20 + 30 = ₹70",
        hi: "₹20 + ₹20 + ₹30 = ₹70"
      }
    },
    {
      question: {
        en: "A toy costs ₹49. Estimate cost of 3 such toys.",
        hi: "एक खिलौने की कीमत ₹49 है। 3 खिलौनों की अनुमानित लागत बताएं।"
      },
      options: [
        { en: "₹140", hi: "₹140" },
        { en: "₹150", hi: "₹150" },
        { en: "₹160", hi: "₹160" },
        { en: "₹130", hi: "₹130" }
      ],
      correct: { en: "₹150", hi: "₹150" },
      explanation: {
        en: "₹49 ≈ ₹50 → 3 × ₹50 = ₹150",
        hi: "₹49 को ₹50 मानें → 3 × ₹50 = ₹150"
      }
    },
    {
      question: {
        en: "A bag costs ₹385. Estimate the cost rounded to nearest hundred.",
        hi: "एक बैग की कीमत ₹385 है। इसे सैकड़ों में अनुमानित करें।"
      },
      options: [
        { en: "₹300", hi: "₹300" },
        { en: "₹400", hi: "₹400" },
        { en: "₹350", hi: "₹350" },
        { en: "₹450", hi: "₹450" }
      ],
      correct: { en: "₹400", hi: "₹400" },
      explanation: {
        en: "₹385 rounded to nearest hundred is ₹400.",
        hi: "₹385 को निकटतम सौ में गोल करें = ₹400"
      }
    },
    {
      question: {
        en: "You buy items worth ₹12, ₹29, ₹31. Estimate the total.",
        hi: "आप ₹12, ₹29, ₹31 की वस्तुएं खरीदते हैं। कुल अनुमानित राशि बताएं।"
      },
      options: [
        { en: "₹60", hi: "₹60" },
        { en: "₹70", hi: "₹70" },
        { en: "₹80", hi: "₹80" },
        { en: "₹90", hi: "₹90" }
      ],
      correct: { en: "₹70", hi: "₹70" },
      explanation: {
        en: "₹12 ≈ ₹10, ₹29 ≈ ₹30, ₹31 ≈ ₹30 → Total = ₹70",
        hi: "₹10 + ₹30 + ₹30 = ₹70"
      }
    },
    {
      question: {
        en: "You have ₹150. Want to buy 3 toys at ₹48 each. Can you buy all?",
        hi: "आपके पास ₹150 हैं। एक खिलौना ₹48 का है। क्या आप 3 खरीद सकते हैं?"
      },
      options: [
        { en: "Yes", hi: "हाँ" },
        { en: "No", hi: "नहीं" },
        { en: "Maybe", hi: "शायद" },
        { en: "Only 2", hi: "सिर्फ 2" }
      ],
      correct: { en: "Yes", hi: "हाँ" },
      explanation: {
        en: "₹48 × 3 = ₹144. Since ₹144 < ₹150, you can buy all.",
        hi: "₹48 × 3 = ₹144, ₹150 से कम है, आप 3 खरीद सकते हैं।"
      }
    },
    {
      question: {
        en: "Estimate saving if cost was ₹95 and you paid ₹90.",
        hi: "यदि लागत ₹95 थी और आपने ₹90 दिए, तो अनुमानित बचत बताएं।"
      },
      options: [
        { en: "₹4", hi: "₹4" },
        { en: "₹5", hi: "₹5" },
        { en: "₹6", hi: "₹6" },
        { en: "₹10", hi: "₹10" }
      ],
      correct: { en: "₹5", hi: "₹5" },
      explanation: {
        en: "Estimated saving = ₹95 - ₹90 = ₹5",
        hi: "बचत = ₹95 - ₹90 = ₹5"
      }
    },
    {
      question: {
        en: "Round ₹226 to nearest ten.",
        hi: "₹226 को नजदीकी दस में गोल करें।"
      },
      options: [
        { en: "₹220", hi: "₹220" },
        { en: "₹230", hi: "₹230" },
        { en: "₹210", hi: "₹210" },
        { en: "₹240", hi: "₹240" }
      ],
      correct: { en: "₹230", hi: "₹230" },
      explanation: {
        en: "Since 6 is more than 5, round up to ₹230",
        hi: "6 अधिक है इसलिए ₹230 पर गोल करें"
      }
    }
  ]
};

export default costEstimation;
