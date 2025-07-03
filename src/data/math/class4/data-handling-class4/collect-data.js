const questions = [
  {
    question: {
      en: "In a pictograph, what should you check first before interpreting the data?",
      hi: "चित्रलेख में डेटा को समझने से पहले आपको सबसे पहले क्या देखना चाहिए?"
    },
    options: ["Number of pictures", "Title", "Key", "Color"],
    correct: { en: "Key", hi: "कुंजी" },
    explanation: {
      en: "The key shows what each picture represents, which is essential to understand the data correctly.",
      hi: "कुंजी यह दिखाती है कि प्रत्येक चित्र क्या दर्शाता है, जो डेटा को सही ढंग से समझने के लिए आवश्यक है।"
    }
  },
  {
    question: {
      en: "In a bar graph, which bar represents the least quantity?",
      hi: "बार ग्राफ में कौन सा बार सबसे कम मात्रा को दर्शाता है?"
    },
    options: ["Tallest bar", "Widest bar", "Shortest bar", "Colored bar"],
    correct: { en: "Shortest bar", hi: "सबसे छोटा बार" },
    explanation: {
      en: "The shortest bar indicates the smallest value in a bar graph.",
      hi: "सबसे छोटा बार ग्राफ में सबसे कम मान दर्शाता है।"
    }
  },
  {
    question: {
      en: "If a pictograph shows 5 apples and each apple = 10, what is the total?",
      hi: "यदि चित्रलेख में 5 सेब हैं और प्रत्येक सेब = 10, तो कुल कितने होंगे?"
    },
    options: ["5", "10", "15", "50"],
    correct: { en: "50", hi: "50" },
    explanation: {
      en: "5 apples × 10 = 50",
      hi: "5 सेब × 10 = 50"
    }
  },
  {
    question: {
      en: "A bar graph shows sales for Monday to Friday. How can you tell which day had the most sales?",
      hi: "एक बार ग्राफ सोमवार से शुक्रवार तक की बिक्री दिखाता है। आप कैसे जानेंगे किस दिन सबसे अधिक बिक्री हुई?"
    },
    options: ["By checking the bar colors", "By looking at the highest bar", "By counting the bars", "By looking at the x-axis"],
    correct: { en: "By looking at the highest bar", hi: "सबसे ऊँचे बार को देखकर" },
    explanation: {
      en: "The highest bar represents the day with maximum sales.",
      hi: "सबसे ऊँचा बार अधिकतम बिक्री वाले दिन को दर्शाता है।"
    }
  },
  {
    question: {
      en: "In a bar graph, what does the horizontal axis usually show?",
      hi: "बार ग्राफ में क्षैतिज अक्ष आमतौर पर क्या दर्शाता है?"
    },
    options: ["Values", "Quantities", "Categories", "Heights"],
    correct: { en: "Categories", hi: "श्रेणियाँ" },
    explanation: {
      en: "The horizontal (x-axis) typically shows the categories being compared.",
      hi: "क्षैतिज अक्ष (x-अक्ष) आमतौर पर जिन श्रेणियों की तुलना की जा रही है उन्हें दिखाता है।"
    }
  },
  {
    question: {
      en: "If each pictograph symbol = 2 pencils, what do 4 symbols mean?",
      hi: "यदि प्रत्येक चित्रलेख प्रतीक = 2 पेंसिल हो, तो 4 प्रतीकों का क्या अर्थ होगा?"
    },
    options: ["2", "4", "6", "8"],
    correct: { en: "8", hi: "8" },
    explanation: {
      en: "4 symbols × 2 = 8 pencils",
      hi: "4 प्रतीक × 2 = 8 पेंसिल"
    }
  },
  {
    question: {
      en: "Which of these helps to understand a bar graph better?",
      hi: "इनमें से कौन बार ग्राफ को बेहतर समझने में मदद करता है?"
    },
    options: ["Title", "Ruler", "Compass", "Eraser"],
    correct: { en: "Title", hi: "शीर्षक" },
    explanation: {
      en: "The title tells you what the graph is about.",
      hi: "शीर्षक आपको बताता है कि ग्राफ किस बारे में है।"
    }
  },
  {
    question: {
      en: "In a pictograph, if a half-symbol is shown, what does it mean?",
      hi: "चित्रलेख में यदि आधा प्रतीक दिखाया जाए, तो इसका क्या अर्थ होता है?"
    },
    options: ["Error", "Missing value", "Half the quantity", "Nothing"],
    correct: { en: "Half the quantity", hi: "आधी मात्रा" },
    explanation: {
      en: "A half-symbol usually represents half of the value assigned in the key.",
      hi: "आधा प्रतीक आमतौर पर कुंजी में दी गई मात्रा का आधा भाग दर्शाता है।"
    }
  },
  {
    question: {
      en: "Why do we use bar graphs?",
      hi: "हम बार ग्राफ का उपयोग क्यों करते हैं?"
    },
    options: ["To make pictures", "To store numbers", "To compare data visually", "To count objects"],
    correct: { en: "To compare data visually", hi: "डेटा की दृष्टिगत तुलना करने के लिए" },
    explanation: {
      en: "Bar graphs make it easier to compare values visually.",
      hi: "बार ग्राफ से संख्याओं की तुलना दृष्टिगत रूप से आसान हो जाती है।"
    }
  },
  {
    question: {
      en: "Which part of a bar graph shows the values?",
      hi: "बार ग्राफ का कौन सा भाग मान दर्शाता है?"
    },
    options: ["X-axis", "Y-axis", "Legend", "Title"],
    correct: { en: "Y-axis", hi: "Y-अक्ष" },
    explanation: {
      en: "The vertical Y-axis shows the values in a bar graph.",
      hi: "बार ग्राफ में Y-अक्ष मानों को दर्शाता है।"
    }
  }
];

export default { questions };
