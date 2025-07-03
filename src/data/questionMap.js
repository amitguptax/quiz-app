import addition from './math/class1/addition';
import subtraction from './math/class1/subtraction';
// import  multiplication from './math/class1/multiplication';

import grammar from './english/class1/grammar';

const questionMap = {
  math: {
    '1': {
      addition,
      subtraction,
    //   multiplication
    }
  },
  english: {
    '1': {
      grammar
    }
  }
};

export default questionMap;
