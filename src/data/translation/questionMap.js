import hindiPresent from './hindiToEnglish/present.js';
import hindiPast from './hindiToEnglish/past.js';
import hindiFuture from './hindiToEnglish/future.js';

import engPresent from './englishToHindi/present.js';
import engPast from './englishToHindi/past.js';
import engFuture from './englishToHindi/future.js';

const questionMap = {
  hindiToEnglish: {
    present: hindiPresent,
    past: hindiPast,
    future: hindiFuture,
  },
  englishToHindi: {
    present: engPresent,
    past: engPast,
    future: engFuture,
  },
};

export default questionMap;
