export default function calculate (stateObj, sign) {
  console.log(stateObj);

  if (sign === "AC") {
    return stateObj = {
      sum: '',
      addNumber: '',
    }
  };

  if (sign === "+") {

    return {
      sum: +stateObj.sum + +stateObj.addNumber,
      addNumber: ''
    };
  };
  
  if (sign === "x") {

    return {
      sum: +stateObj.sum * +stateObj.addNumber,
      addNumber: ''
    };
  };
  
  if (sign === "-") {

    return {
      sum: +stateObj.sum - +stateObj.addNumber,
      addNumber: ''
    };
  };
};
