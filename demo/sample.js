const variableString = 'string';
const variableNumber = 42;

const variableArray = ['string', 1];
const variableObject = {
  key1: 'value1',
  key2: 100
};

const functionArrow = param => {
  for (let i = 0; i < variableArray.length; i++) {
    console.log(variableArray[i]);
  }
};

const functionNoArrow = function(param) {
  switch (param) {
    case x:
      break;
    case y:
      break;
    default:
  }
};

functionArrow('test');

/* Comment Block
 *
 */

// Comment Line
