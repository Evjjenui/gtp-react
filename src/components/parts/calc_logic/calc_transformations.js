import calculate from "./calculate";

export default function calcTransform(stateObj, sign) {

  if (sign === "AC") {
    return {
      sum: '',
      addNumber: '',
      operation: '',
    }
  }

  if (sign === ".") {
    if (stateObj.addNumber) {

      if (stateObj.addNumber.includes('.')) {
        return {}
      };

      return {addNumber: stateObj.addNumber + '.'}
    };

    return {
      sum: '0.',
      addNumber: '0.',
      operation: ''
    }
  }

  if (sign === "%") {

    return {
      sum: stateObj.sum / 100,
    };
  };
  
  if (sign === "+/-") {

    if (stateObj.addNumber) {
      return {addNumber:  (-1 * parseFloat(stateObj.addNumber).toString())}
    }
    if (stateObj.sum) {
      return {sum:  (-1 * parseFloat(stateObj.sum).toString())}
    }
    return {}
  };

  if (stateObj.operation) {
    return calculate(stateObj, sign);
  }
  return {operation: sign} 
}
