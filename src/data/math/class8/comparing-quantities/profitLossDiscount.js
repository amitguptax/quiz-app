const profitLossDiscount = [
  {
    id: 1,
    question: {
      en: "What is the formula for profit?",
      hi: "लाभ का सूत्र क्या है?"
    },
    options: ["SP - CP", "CP - SP", "CP × SP", "SP + CP"],
    answer: "SP - CP",
    explanation: {
      en: "Profit = Selling Price - Cost Price",
      hi: "लाभ = विक्रय मूल्य - क्रय मूल्य"
    }
  },
  {
    id: 2,
    question: {
      en: "If CP = ₹200 and SP = ₹250, find the profit.",
      hi: "यदि CP = ₹200 और SP = ₹250 हो, तो लाभ कितना होगा?"
    },
    options: ["₹50", "₹150", "₹200", "₹100"],
    answer: "₹50",
    explanation: {
      en: "Profit = 250 - 200 = ₹50",
      hi: "लाभ = 250 - 200 = ₹50"
    }
  },
  {
    id: 3,
    question: {
      en: "What is the formula for loss?",
      hi: "हानि का सूत्र क्या है?"
    },
    options: ["CP - SP", "SP - CP", "CP + SP", "SP × CP"],
    answer: "CP - SP",
    explanation: {
      en: "Loss = Cost Price - Selling Price",
      hi: "हानि = क्रय मूल्य - विक्रय मूल्य"
    }
  },
  {
    id: 4,
    question: {
      en: "If CP = ₹300 and SP = ₹270, find the loss.",
      hi: "यदि CP = ₹300 और SP = ₹270 हो, तो हानि कितनी है?"
    },
    options: ["₹30", "₹270", "₹300", "₹40"],
    answer: "₹30",
    explanation: {
      en: "Loss = 300 - 270 = ₹30",
      hi: "हानि = 300 - 270 = ₹30"
    }
  },
  {
    id: 5,
    question: {
      en: "If profit is ₹60 on CP ₹240, find the profit percentage.",
      hi: "यदि ₹240 पर लाभ ₹60 है, तो लाभ प्रतिशत कितना होगा?"
    },
    options: ["25%", "20%", "30%", "40%"],
    answer: "25%",
    explanation: {
      en: "Profit% = (Profit/CP) × 100 = (60/240) × 100 = 25%",
      hi: "लाभ% = (लाभ/CP) × 100 = (60/240) × 100 = 25%"
    }
  },
  {
    id: 6,
    question: {
      en: "Loss is ₹50 and CP is ₹500. Find the loss percent.",
      hi: "हानि ₹50 है और CP ₹500 है। हानि प्रतिशत ज्ञात करें।"
    },
    options: ["10%", "15%", "5%", "20%"],
    answer: "10%",
    explanation: {
      en: "Loss% = (Loss/CP) × 100 = (50/500) × 100 = 10%",
      hi: "हानि% = (हानि/CP) × 100 = (50/500) × 100 = 10%"
    }
  },
  {
    id: 7,
    question: {
      en: "A shopkeeper buys an item for ₹600 and sells it for ₹720. Find profit percent.",
      hi: "एक दुकानदार वस्तु को ₹600 में खरीदता है और ₹720 में बेचता है। लाभ प्रतिशत ज्ञात करें।"
    },
    options: ["20%", "15%", "10%", "25%"],
    answer: "20%",
    explanation: {
      en: "Profit = 720 - 600 = ₹120; Profit% = (120/600) × 100 = 20%",
      hi: "लाभ = 720 - 600 = ₹120; लाभ% = (120/600) × 100 = 20%"
    }
  },
  {
    id: 8,
    question: {
      en: "A trader suffers 5% loss. If CP is ₹400, what is SP?",
      hi: "एक व्यापारी को 5% की हानि होती है। यदि CP ₹400 है, तो SP क्या होगा?"
    },
    options: ["₹380", "₹420", "₹390", "₹400"],
    answer: "₹380",
    explanation: {
      en: "SP = CP - (5% of 400) = 400 - 20 = ₹380",
      hi: "SP = CP - (5% का 400) = 400 - 20 = ₹380"
    }
  },
  {
    id: 9,
    question: {
      en: "What is the formula for discount?",
      hi: "छूट का सूत्र क्या है?"
    },
    options: ["MP - SP", "CP - SP", "SP - CP", "MP - CP"],
    answer: "MP - SP",
    explanation: {
      en: "Discount = Marked Price - Selling Price",
      hi: "छूट = अंकित मूल्य - विक्रय मूल्य"
    }
  },
  {
    id: 10,
    question: {
      en: "If MP = ₹500 and SP = ₹450, find discount percentage.",
      hi: "यदि MP = ₹500 और SP = ₹450 हो, तो छूट प्रतिशत क्या होगा?"
    },
    options: ["10%", "12%", "15%", "5%"],
    answer: "10%",
    explanation: {
      en: "Discount% = (Discount/MP) × 100 = (50/500) × 100 = 10%",
      hi: "छूट% = (छूट/MP) × 100 = (50/500) × 100 = 10%"
    }
  }
];

export default profitLossDiscount;
