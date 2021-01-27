import React, {useState, useEffect} from "react";
import ButtonAction from "./particles/ButtonAction";
import ButtonNumber from "./particles/ButtonNumber";
import CalculatorDisplay from "./particles/CalculatorDisplay";

function calculate (stateObj, number) {
  if (number === "AC") {
    return stateObj = {
      sum: '',
      addNumber: '',
    }
  };

  stateObj.sum = +stateObj.sum + +number;

  stateObj.sum.toString();
  return stateObj;
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.updateAction = this.updateAction.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
    this.state = {
      sum: '',
      addNumber: '',
    };
  };

  updateAction() {

  };

  updateNumber(number) {
    this.setState(calculate(this.state, number));
  };

  render () {

    return (
      <div className="calculator">
        <CalculatorDisplay result={this.state.sum || '0'}/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="AC"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="+/-"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="%"/>
        <ButtonAction
          onCheckAction={this.updateAction}
          actionSign="+"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="1"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="2"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="3"/>
        <ButtonAction
          onCheckAction={this.updateAction}
          actionSign="-"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="4"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="5"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="6"/>
        <ButtonAction
          onCheckAction={this.updateAction}
          actionSign="*"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="7"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="8"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="9"/>
        <ButtonAction
          onCheckAction={this.updateAction}
          actionSign="/"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="0"/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value="."/>
        <ButtonAction
          onCheckAction={this.updateAction}
          actionSign="="/>
      </div>
    );
  }
};

export default Calculator;
