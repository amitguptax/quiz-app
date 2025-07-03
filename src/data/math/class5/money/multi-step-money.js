const multiStepMoney = {
  questions: [
    {
      question: {
        en: "A toy costs ₹50 and a book costs ₹80. How much money is needed to buy both?",
        hi: "एक खिलौने की कीमत ₹50 और किताब की कीमत ₹80 है। दोनों खरीदने के लिए कितने रुपये चाहिए?"
      },
      options: [
        { en: "₹120", hi: "₹120" },
        { en: "₹130", hi: "₹130" },
        { en: "₹140", hi: "₹140" },
        { en: "₹150", hi: "₹150" }
      ],
      correct: { en: "₹130", hi: "₹130" },
      explanation: {
        en: "₹50 + ₹80 = ₹130",
        hi: "₹50 + ₹80 = ₹130"
      }
    },
    {
      question: {
        en: "You had ₹200. You bought a bag for ₹135. How much is left?",
        hi: "आपके पास ₹200 थे। आपने ₹135 में एक बैग खरीदा। कितने रुपये बचे?"
      },
      options: [
        { en: "₹55", hi: "₹55" },
        { en: "₹65", hi: "₹65" },
        { en: "₹75", hi: "₹75" },
        { en: "₹85", hi: "₹85" }
      ],
      correct: { en: "₹65", hi: "₹65" },
      explanation: {
        en: "₹200 - ₹135 = ₹65",
        hi: "₹200 - ₹135 = ₹65"
      }
    },
    {
      question: {
        en: "A pencil costs ₹8 and an eraser costs ₹4. If you buy 5 pencils and 3 erasers, what is the total cost?",
        hi: "एक पेंसिल की कीमत ₹8 और रबड़ की ₹4 है। 5 पेंसिल और 3 रबड़ की कुल कीमत क्या होगी?"
      },
      options: [
        { en: "₹52", hi: "₹52" },
        { en: "₹56", hi: "₹56" },
        { en: "₹60", hi: "₹60" },
        { en: "₹64", hi: "₹64" }
      ],
      correct: { en: "₹52", hi: "₹52" },
      explanation: {
        en: "5 × ₹8 = ₹40, 3 × ₹4 = ₹12, Total = ₹40 + ₹12 = ₹52",
        hi: "₹40 + ₹12 = ₹52"
      }
    },
    {
      question: {
        en: "Ravi spent ₹50 on fruits, ₹35 on vegetables and ₹60 on groceries. What is the total amount spent?",
        hi: "रवि ने ₹50 फल, ₹35 सब्जी और ₹60 किराने पर खर्च किए। कुल खर्च क्या है?"
      },
      options: [
        { en: "₹145", hi: "₹145" },
        { en: "₹155", hi: "₹155" },
        { en: "₹145", hi: "₹145" },
        { en: "₹165", hi: "₹165" }
      ],
      correct: { en: "₹145", hi: "₹145" },
      explanation: {
        en: "₹50 + ₹35 + ₹60 = ₹145",
        hi: "₹50 + ₹35 + ₹60 = ₹145"
      }
    },
    {
      question: {
        en: "A notebook costs ₹25. How much will 8 notebooks cost?",
        hi: "एक नोटबुक की कीमत ₹25 है। 8 नोटबुक की कीमत कितनी होगी?"
      },
      options: [
        { en: "₹150", hi: "₹150" },
        { en: "₹180", hi: "₹180" },
        { en: "₹200", hi: "₹200" },
        { en: "₹225", hi: "₹225" }
      ],
      correct: { en: "₹200", hi: "₹200" },
      explanation: {
        en: "8 × ₹25 = ₹200",
        hi: "8 × ₹25 = ₹200"
      }
    },
    {
      question: {
        en: "If you buy 2 pens for ₹20 each and 3 pencils for ₹5 each, how much do you spend?",
        hi: "2 पेन ₹20 के और 3 पेंसिल ₹5 के खरीदने पर कुल खर्च कितना होगा?"
      },
      options: [
        { en: "₹45", hi: "₹45" },
        { en: "₹55", hi: "₹55" },
        { en: "₹65", hi: "₹65" },
        { en: "₹60", hi: "₹60" }
      ],
      correct: { en: "₹55", hi: "₹55" },
      explanation: {
        en: "2 × ₹20 = ₹40, 3 × ₹5 = ₹15, Total = ₹40 + ₹15 = ₹55",
        hi: "₹40 + ₹15 = ₹55"
      }
    },
    {
      question: {
        en: "Your total bill was ₹250. You paid ₹300. How much change did you get back?",
        hi: "कुल बिल ₹250 था। आपने ₹300 दिए। कितने रुपये वापस मिले?"
      },
      options: [
        { en: "₹40", hi: "₹40" },
        { en: "₹50", hi: "₹50" },
        { en: "₹60", hi: "₹60" },
        { en: "₹30", hi: "₹30" }
      ],
      correct: { en: "₹50", hi: "₹50" },
      explanation: {
        en: "₹300 - ₹250 = ₹50",
        hi: "₹300 - ₹250 = ₹50"
      }
    },
    {
      question: {
        en: "An item costs ₹45. You buy 3 such items. If you pay ₹150, what is the balance?",
        hi: "एक वस्तु ₹45 की है। आप 3 वस्तुएँ खरीदते हैं। ₹150 देने पर कितने रुपये बचेंगे?"
      },
      options: [
        { en: "₹10", hi: "₹10" },
        { en: "₹15", hi: "₹15" },
        { en: "₹5", hi: "₹5" },
        { en: "₹20", hi: "₹20" }
      ],
      correct: { en: "₹15", hi: "₹15" },
      explanation: {
        en: "3 × ₹45 = ₹135. ₹150 - ₹135 = ₹15",
        hi: "₹135 खर्च, ₹15 बचे"
      }
    },
    {
      question: {
        en: "You bought 4 chocolates at ₹12 each and 2 biscuits at ₹25 each. What’s the total cost?",
        hi: "4 चॉकलेट ₹12 की और 2 बिस्किट ₹25 की खरीदी। कुल खर्च बताएं।"
      },
      options: [
        { en: "₹98", hi: "₹98" },
        { en: "₹100", hi: "₹100" },
        { en: "₹104", hi: "₹104" },
        { en: "₹110", hi: "₹110" }
      ],
      correct: { en: "₹98", hi: "₹98" },
      explanation: {
        en: "4 × ₹12 = ₹48, 2 × ₹25 = ₹50, Total = ₹48 + ₹50 = ₹98",
        hi: "₹48 + ₹50 = ₹98"
      }
    },
    {
      question: {
        en: "Rita had ₹500. She bought a dress for ₹325 and shoes for ₹150. Does she have enough money?",
        hi: "रीता के पास ₹500 थे। उसने ₹325 की ड्रेस और ₹150 के जूते खरीदे। क्या उसके पास पर्याप्त पैसे थे?"
      },
      options: [
        { en: "Yes", hi: "हाँ" },
        { en: "No", hi: "नहीं" },
        { en: "Just Enough", hi: "बस पर्याप्त" },
        { en: "Not Sure", hi: "पक्का नहीं" }
      ],
      correct: { en: "Yes", hi: "हाँ" },
      explanation: {
        en: "₹325 + ₹150 = ₹475, and she had ₹500. So she has enough.",
        hi: "₹475 खर्च हुए और ₹500 थे, इसलिए पैसे पर्याप्त हैं।"
      }
    }
  ]
};

export default multiStepMoney;
