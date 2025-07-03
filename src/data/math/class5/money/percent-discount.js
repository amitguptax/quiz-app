const percentDiscount = {
  questions: [
    {
      question: {
        en: "What is 10% of ₹100?",
        hi: "₹100 का 10% कितना होता है?"
      },
      options: [
        { en: "₹5", hi: "₹5" },
        { en: "₹10", hi: "₹10" },
        { en: "₹15", hi: "₹15" },
        { en: "₹20", hi: "₹20" }
      ],
      correct: { en: "₹10", hi: "₹10" },
      explanation: {
        en: "10% of ₹100 = (10/100) × 100 = ₹10",
        hi: "₹100 का 10% = (10/100) × 100 = ₹10"
      }
    },
    {
      question: {
        en: "A shirt costing ₹500 is sold at 20% discount. What is the discount amount?",
        hi: "₹500 की शर्ट पर 20% छूट है। छूट की राशि क्या होगी?"
      },
      options: [
        { en: "₹80", hi: "₹80" },
        { en: "₹100", hi: "₹100" },
        { en: "₹120", hi: "₹120" },
        { en: "₹150", hi: "₹150" }
      ],
      correct: { en: "₹100", hi: "₹100" },
      explanation: {
        en: "20% of ₹500 = (20/100) × 500 = ₹100",
        hi: "20% × ₹500 = ₹100"
      }
    },
    {
      question: {
        en: "If a book is sold for ₹90 and the cost price was ₹100, what is the loss percentage?",
        hi: "एक किताब ₹90 में बेची जाती है और लागत ₹100 थी। हानि प्रतिशत क्या है?"
      },
      options: [
        { en: "5%", hi: "5%" },
        { en: "10%", hi: "10%" },
        { en: "15%", hi: "15%" },
        { en: "20%", hi: "20%" }
      ],
      correct: { en: "10%", hi: "10%" },
      explanation: {
        en: "Loss = ₹100 - ₹90 = ₹10, (10/100) × 100 = 10%",
        hi: "हानि = ₹10, हानि प्रतिशत = 10%"
      }
    },
    {
      question: {
        en: "A shopkeeper earns ₹20 profit on a ₹100 item. What is the profit percentage?",
        hi: "₹100 के सामान पर दुकानदार ₹20 का लाभ कमाता है। लाभ प्रतिशत कितना है?"
      },
      options: [
        { en: "10%", hi: "10%" },
        { en: "15%", hi: "15%" },
        { en: "20%", hi: "20%" },
        { en: "25%", hi: "25%" }
      ],
      correct: { en: "20%", hi: "20%" },
      explanation: {
        en: "Profit% = (20/100) × 100 = 20%",
        hi: "लाभ प्रतिशत = (20/100) × 100 = 20%"
      }
    },
    {
      question: {
        en: "If the marked price is ₹600 and a 25% discount is given, what is the selling price?",
        hi: "यदि अंकित मूल्य ₹600 है और 25% की छूट दी जाती है, तो विक्रय मूल्य क्या होगा?"
      },
      options: [
        { en: "₹450", hi: "₹450" },
        { en: "₹500", hi: "₹500" },
        { en: "₹475", hi: "₹475" },
        { en: "₹525", hi: "₹525" }
      ],
      correct: { en: "₹450", hi: "₹450" },
      explanation: {
        en: "25% of ₹600 = ₹150; Selling price = ₹600 - ₹150 = ₹450",
        hi: "₹600 का 25% = ₹150; ₹600 - ₹150 = ₹450"
      }
    },
    {
      question: {
        en: "A loss of 5% on ₹200 is how much?",
        hi: "₹200 पर 5% की हानि कितनी होगी?"
      },
      options: [
        { en: "₹5", hi: "₹5" },
        { en: "₹8", hi: "₹8" },
        { en: "₹10", hi: "₹10" },
        { en: "₹15", hi: "₹15" }
      ],
      correct: { en: "₹10", hi: "₹10" },
      explanation: {
        en: "5% of ₹200 = (5/100) × 200 = ₹10",
        hi: "5% × ₹200 = ₹10"
      }
    },
    {
      question: {
        en: "A toy marked ₹400 is sold for ₹300. What is the percentage discount?",
        hi: "₹400 का खिलौना ₹300 में बेचा गया। छूट प्रतिशत कितना है?"
      },
      options: [
        { en: "20%", hi: "20%" },
        { en: "25%", hi: "25%" },
        { en: "30%", hi: "30%" },
        { en: "35%", hi: "35%" }
      ],
      correct: { en: "25%", hi: "25%" },
      explanation: {
        en: "Discount = ₹100, (100/400) × 100 = 25%",
        hi: "छूट = ₹100, छूट प्रतिशत = 25%"
      }
    },
    {
      question: {
        en: "If profit is ₹30 on a cost price of ₹150, find the profit percentage.",
        hi: "₹150 लागत पर ₹30 का लाभ है। लाभ प्रतिशत कितना है?"
      },
      options: [
        { en: "15%", hi: "15%" },
        { en: "20%", hi: "20%" },
        { en: "25%", hi: "25%" },
        { en: "30%", hi: "30%" }
      ],
      correct: { en: "20%", hi: "20%" },
      explanation: {
        en: "Profit% = (30/150) × 100 = 20%",
        hi: "लाभ प्रतिशत = (30/150) × 100 = 20%"
      }
    },
    {
      question: {
        en: "An item costs ₹80 and is sold at a 10% discount. What is the selling price?",
        hi: "₹80 की वस्तु पर 10% की छूट दी जाती है। विक्रय मूल्य क्या होगा?"
      },
      options: [
        { en: "₹70", hi: "₹70" },
        { en: "₹72", hi: "₹72" },
        { en: "₹74", hi: "₹74" },
        { en: "₹76", hi: "₹76" }
      ],
      correct: { en: "₹72", hi: "₹72" },
      explanation: {
        en: "10% of ₹80 = ₹8, Selling price = ₹80 - ₹8 = ₹72",
        hi: "₹80 का 10% = ₹8, विक्रय मूल्य = ₹72"
      }
    },
    {
      question: {
        en: "Which of these is calculated using percentage?",
        hi: "निम्न में से किसकी गणना प्रतिशत का उपयोग करके की जाती है?"
      },
      options: [
        { en: "Discount", hi: "छूट" },
        { en: "Addition", hi: "जोड़" },
        { en: "Weight", hi: "वज़न" },
        { en: "Length", hi: "लंबाई" }
      ],
      correct: { en: "Discount", hi: "छूट" },
      explanation: {
        en: "Discount is usually given as a percentage.",
        hi: "छूट आमतौर पर प्रतिशत के रूप में दी जाती है।"
      }
    }
  ]
};

export default percentDiscount;
