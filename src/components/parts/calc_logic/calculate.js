export default function calculate (stateObj, sign) {

  if (stateObj.operation === "=") {

    return {
      operation: sign
    };
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

  if (stateObj.operation === "/") {

    if (stateObj.addNumber === "0") {
      alert("на ноль не дели, сука!")
      
      return {
        sum:'',
        addNumber:'',
        operation:''
      };
    }

    return {
      sum: +stateObj.sum / +stateObj.addNumber,
      addNumber: '',
      operation: sign
    };
  };
};
