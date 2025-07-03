const landforms = {
  label: {
    en: "Landforms: Mountains, Plateaus, Plains",
    hi: "स्थलरूप: पर्वत, पठार, मैदान",
  },
  questions: [
    {
      id: 1,
      question: {
        en: "Which is the highest mountain peak in the world?",
        hi: "दुनिया की सबसे ऊँची पर्वत चोटी कौन सी है?",
      },
      options: {
        a: "K2",
        b: "Kangchenjunga",
        c: "Mount Everest",
        d: "Lhotse",
      },
      answer: "c",
      explanation: {
        en: "Mount Everest is the highest mountain peak in the world with a height of 8,848 meters.",
        hi: "माउंट एवरेस्ट दुनिया की सबसे ऊँची पर्वत चोटी है जिसकी ऊँचाई 8,848 मीटर है।",
      },
    },
    {
      id: 2,
      question: {
        en: "Which of the following is a volcanic mountain?",
        hi: "निम्नलिखित में से कौन सा ज्वालामुखीय पर्वत है?",
      },
      options: {
        a: "Himalayas",
        b: "Aravalli",
        c: "Mount Kilimanjaro",
        d: "Vindhya",
      },
      answer: "c",
      explanation: {
        en: "Mount Kilimanjaro in Africa is a volcanic mountain.",
        hi: "अफ्रीका में स्थित माउंट किलिमंजारो एक ज्वालामुखीय पर्वत है।",
      },
    },
    {
      id: 3,
      question: {
        en: "Which is the oldest mountain range in India?",
        hi: "भारत का सबसे पुराना पर्वत श्रृंखला कौन सा है?",
      },
      options: {
        a: "Himalayas",
        b: "Western Ghats",
        c: "Aravalli",
        d: "Satpura",
      },
      answer: "c",
      explanation: {
        en: "The Aravalli range is the oldest mountain range in India.",
        hi: "अरावली पर्वत श्रृंखला भारत की सबसे पुरानी पर्वतमाला है।",
      },
    },
    {
      id: 4,
      question: {
        en: "Which plateau is known as the 'Roof of the World'?",
        hi: "'विश्व की छत' किस पठार को कहा जाता है?",
      },
      options: {
        a: "Deccan Plateau",
        b: "Columbia Plateau",
        c: "Tibetan Plateau",
        d: "Colorado Plateau",
      },
      answer: "c",
      explanation: {
        en: "The Tibetan Plateau is the highest and largest plateau in the world, known as the 'Roof of the World'.",
        hi: "तिब्बती पठार दुनिया का सबसे ऊँचा और बड़ा पठार है, जिसे 'विश्व की छत' कहा जाता है।",
      },
    },
    {
      id: 5,
      question: {
        en: "Which of the following plains is formed by the Ganga river?",
        hi: "निम्नलिखित में से कौन सा मैदान गंगा नदी द्वारा बनाया गया है?",
      },
      options: {
        a: "Coastal Plains",
        b: "Deccan Plateau",
        c: "Indo-Gangetic Plain",
        d: "Punjab Plateau",
      },
      answer: "c",
      explanation: {
        en: "The Indo-Gangetic Plain is formed by the deposition of sediments by the Ganga and its tributaries.",
        hi: "गंगा और उसकी सहायक नदियों द्वारा जमा की गई मिट्टी से इंडो-गैंगेटिक मैदान बना है।",
      },
    },
    {
      id: 6,
      question: {
        en: "Which landform is ideal for agriculture?",
        hi: "कृषि के लिए कौन सा स्थलरूप सबसे उपयुक्त होता है?",
      },
      options: {
        a: "Mountains",
        b: "Plateaus",
        c: "Plains",
        d: "Deserts",
      },
      answer: "c",
      explanation: {
        en: "Plains are flat and fertile, making them ideal for agriculture.",
        hi: "मैदान समतल और उपजाऊ होते हैं, जो कृषि के लिए उपयुक्त हैं।",
      },
    },
    {
      id: 7,
      question: {
        en: "Which mountain range separates Europe and Asia?",
        hi: "कौन सी पर्वतमाला यूरोप और एशिया को अलग करती है?",
      },
      options: {
        a: "Himalayas",
        b: "Alps",
        c: "Ural",
        d: "Andes",
      },
      answer: "c",
      explanation: {
        en: "The Ural Mountains form the boundary between Europe and Asia.",
        hi: "उरल पर्वतमाला यूरोप और एशिया के बीच की सीमा बनाती है।",
      },
    },
    {
      id: 8,
      question: {
        en: "Which plain is the largest in the world?",
        hi: "दुनिया का सबसे बड़ा मैदान कौन सा है?",
      },
      options: {
        a: "Indo-Gangetic Plain",
        b: "Amazon Basin",
        c: "Russian Plain",
        d: "Great Plains (USA)",
      },
      answer: "c",
      explanation: {
        en: "The Russian Plain is the largest plain in the world.",
        hi: "रूसी मैदान दुनिया का सबसे बड़ा मैदान है।",
      },
    },
    {
      id: 9,
      question: {
        en: "What type of mountains are the Himalayas?",
        hi: "हिमालय किस प्रकार के पर्वत हैं?",
      },
      options: {
        a: "Block mountains",
        b: "Fold mountains",
        c: "Volcanic mountains",
        d: "Residual mountains",
      },
      answer: "b",
      explanation: {
        en: "Himalayas are fold mountains formed by the collision of tectonic plates.",
        hi: "हिमालय विवर्तनिक प्लेटों के टकराव से बने वलित पर्वत हैं।",
      },
    },
    {
      id: 10,
      question: {
        en: "The Deccan Plateau is located in which part of India?",
        hi: "दक्कन का पठार भारत के किस भाग में स्थित है?",
      },
      options: {
        a: "North",
        b: "East",
        c: "South",
        d: "West",
      },
      answer: "c",
      explanation: {
        en: "The Deccan Plateau is located in southern India.",
        hi: "दक्कन का पठार भारत के दक्षिणी भाग में स्थित है।",
      },
    },

    // Add 10 more questions similarly (ID: 11–20)
    // I can continue with IDs 11–20 if you confirm this format is good for you.

  ]
};

export default landforms;
