const questions = [
  {
    question: {
      en: "Ravi has 28 pencils. He buys 12 more. How many pencils does he have now?",
      hi: "रवि के पास 28 पेंसिलें हैं। वह 12 और खरीदता है। अब उसके पास कितनी पेंसिलें हैं?"
    },
    options: [
      { en: "30", hi: "30" },
      { en: "40", hi: "40" },
      { en: "38", hi: "38" },
      { en: "42", hi: "42" }
    ],
    correct: { en: "40", hi: "40" },
    explanation: {
      en: "28 + 12 = 40 pencils in total.",
      hi: "28 + 12 = 40 पेंसिलें कुल।"
    }
  },
  {
    question: {
      en: "Anu had 45 chocolates. She gave 18 to her friend. How many chocolates are left?",
      hi: "अनु के पास 45 चॉकलेट थीं। उसने अपनी दोस्त को 18 दे दीं। अब कितनी चॉकलेट बचीं?"
    },
    options: [
      { en: "27", hi: "27" },
      { en: "30", hi: "30" },
      { en: "28", hi: "28" },
      { en: "25", hi: "25" }
    ],
    correct: { en: "27", hi: "27" },
    explanation: {
      en: "45 - 18 = 27 chocolates remain.",
      hi: "45 - 18 = 27 चॉकलेट बचीं।"
    }
  },
  {
    question: {
      en: "A class has 32 boys and 26 girls. How many students are there in total?",
      hi: "एक कक्षा में 32 लड़के और 26 लड़कियाँ हैं। कुल कितने छात्र हैं?"
    },
    options: [
      { en: "58", hi: "58" },
      { en: "60", hi: "60" },
      { en: "62", hi: "62" },
      { en: "59", hi: "59" }
    ],
    correct: { en: "58", hi: "58" },
    explanation: {
      en: "32 + 26 = 58 students total.",
      hi: "32 + 26 = 58 छात्र कुल।"
    }
  },
  {
    question: {
      en: "Tom had ₹85. He spent ₹39. How much money is left?",
      hi: "टॉम के पास ₹85 थे। उसने ₹39 खर्च किए। उसके पास अब कितने रुपये बचे?"
    },
    options: [
      { en: "46", hi: "46" },
      { en: "45", hi: "45" },
      { en: "44", hi: "44" },
      { en: "50", hi: "50" }
    ],
    correct: { en: "46", hi: "46" },
    explanation: {
      en: "85 - 39 = ₹46 remaining.",
      hi: "85 - 39 = ₹46 शेष।"
    }
  },
  {
    question: {
      en: "Meena collected 67 stamps. Her brother gave her 23 more. How many does she have now?",
      hi: "मीना ने 67 टिकटें जमा कीं। उसके भाई ने उसे 23 और दिए। अब उसके पास कितनी टिकटें हैं?"
    },
    options: [
      { en: "89", hi: "89" },
      { en: "90", hi: "90" },
      { en: "91", hi: "91" },
      { en: "87", hi: "87" }
    ],
    correct: { en: "90", hi: "90" },
    explanation: {
      en: "67 + 23 = 90 stamps.",
      hi: "67 + 23 = 90 टिकटें।"
    }
  },
  {
    question: {
      en: "There were 96 mangoes. 42 were sold. How many are left?",
      hi: "96 आम थे। 42 बेच दिए गए। कितने आम बचे?"
    },
    options: [
      { en: "54", hi: "54" },
      { en: "55", hi: "55" },
      { en: "56", hi: "56" },
      { en: "58", hi: "58" }
    ],
    correct: { en: "54", hi: "54" },
    explanation: {
      en: "96 - 42 = 54 mangoes left.",
      hi: "96 - 42 = 54 आम बचे।"
    }
  },
  {
    question: {
      en: "A book has 75 pages. Reena read 38 pages. How many are left to read?",
      hi: "एक किताब में 75 पेज हैं। रीना ने 38 पेज पढ़ लिए। अब कितने पेज पढ़ने बाकी हैं?"
    },
    options: [
      { en: "37", hi: "37" },
      { en: "38", hi: "38" },
      { en: "36", hi: "36" },
      { en: "39", hi: "39" }
    ],
    correct: { en: "37", hi: "37" },
    explanation: {
      en: "75 - 38 = 37 pages left.",
      hi: "75 - 38 = 37 पेज बाकी।"
    }
  },
  {
    question: {
      en: "There are 48 red balloons and 29 blue balloons. How many balloons in total?",
      hi: "48 लाल गुब्बारे और 29 नीले गुब्बारे हैं। कुल कितने गुब्बारे हैं?"
    },
    options: [
      { en: "77", hi: "77" },
      { en: "78", hi: "78" },
      { en: "79", hi: "79" },
      { en: "80", hi: "80" }
    ],
    correct: { en: "77", hi: "77" },
    explanation: {
      en: "48 + 29 = 77 balloons.",
      hi: "48 + 29 = 77 गुब्बारे।"
    }
  },
  {
    question: {
      en: "Geeta had ₹72. She gave ₹25 to her sister. How much does she have now?",
      hi: "गीता के पास ₹72 थे। उसने अपनी बहन को ₹25 दिए। अब उसके पास कितने रुपये हैं?"
    },
    options: [
      { en: "47", hi: "47" },
      { en: "48", hi: "48" },
      { en: "46", hi: "46" },
      { en: "45", hi: "45" }
    ],
    correct: { en: "47", hi: "47" },
    explanation: {
      en: "72 - 25 = ₹47 left.",
      hi: "72 - 25 = ₹47 शेष।"
    }
  },
  {
    question: {
      en: "A box has 58 chocolates. Another box has 36. Total chocolates?",
      hi: "एक डिब्बे में 58 चॉकलेट हैं। दूसरे में 36 हैं। कुल कितनी चॉकलेट हैं?"
    },
    options: [
      { en: "94", hi: "94" },
      { en: "93", hi: "93" },
      { en: "95", hi: "95" },
      { en: "96", hi: "96" }
    ],
    correct: { en: "94", hi: "94" },
    explanation: {
      en: "58 + 36 = 94 chocolates.",
      hi: "58 + 36 = 94 चॉकलेट।"
    }
  }
];

export default { questions };
