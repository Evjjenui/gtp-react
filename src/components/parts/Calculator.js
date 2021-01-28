import React, {useState, useEffect} from "react";
import ButtonAction from "./particles/ButtonAction";
import ButtonNumber from "./particles/ButtonNumber";
import CalculatorDisplay from "./particles/CalculatorDisplay";
import calculate from "./calc_logic/calculate";


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.updateAction = this.updateAction.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
    this.state = {
      sum: '',
      addNumber: '',
      operation: ''
    };
  };

  updateAction(sign) {
    this.setState(() => {
      if (this.state.operation) {
        return calculate(this.state, sign);
      }
      return {operation: sign} 
    })
  };

  updateNumber(number) {
    this.setState(
      
      () => {
        if (this.state.sum === '') {
          return {
            sum: number,
            addNumber: ''
          }
        };

        if (this.state.operation === '') {
          return {
            sum: this.state.sum + number,
            addNumber: ''
          }
        };

        return {addNumber: this.state.addNumber + number}
      });
  }

  render () {

    return (
      <div className="calculator">
        <CalculatorDisplay result={this.state.addNumber || this.state.sum || '0'}/>
        <ButtonAction
          onCheckAction={this.updateAction}
          actionSign="AC"/>
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
          actionSign="x"/>
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
