export default function calculate (stateObj, sign) {
  console.log(stateObj);

  if (sign === "AC") {
    return stateObj = {
      sum: '',
      addNumber: '',
    }
  };

  if (stateObj.operation === "+") {

    return {
      sum: +stateObj.sum + +stateObj.addNumber,
      addNumber: '',
      operation: sign
    };
  };
  
  if (stateObj.operation === "x") {

    return {
      sum: +stateObj.sum * +stateObj.addNumber,
      addNumber: '',
      operation: sign
    };
  };
  
  if (stateObj.operation === "-") {

    return {
      sum: +stateObj.sum - +stateObj.addNumber,
      addNumber: '',
      operation: sign
    };
  };
};
