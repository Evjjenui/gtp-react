import React, {useState} from "react";

function CalculatorDisplay(props) {

  return (
    <div className="display">
      {props.result}
    </div>
  );
};

export default CalculatorDisplay;
