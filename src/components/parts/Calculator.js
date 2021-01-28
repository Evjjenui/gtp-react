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
      sum: '0',
      addNumber: '',
      operation: ''
    };
  };

  updateAction(sign) {
    this.setState(() => {

      if (sign === "AC") {
        return {
          sum: '',
          addNumber: '',
          operation: '',
        }
      }

      if (sign === ".") {
        if (this.state.addNumber) {

          if (this.state.addNumber.includes('.')) {
            return {}
          };

          return {addNumber: this.state.addNumber + '.'}
        };

        return {
          sum: '0.',
          addNumber: '0.',
          operation: ''
        }
      }

      if (sign === "%") {

        return {
          sum: this.state.sum / 100,
        };
      };
      
      if (sign === "+/-") {

        if (this.state.addNumber) {
          return {addNumber:  (-1 * parseFloat(this.state.addNumber).toString())}
        }
        if (this.state.sum) {
          return {sum:  (-1 * parseFloat(this.state.sum).toString())}
        }
        return {}
      };

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
      <div className='calculator'>
        <CalculatorDisplay result={this.state.addNumber || this.state.sum || '0'}/>
        <ButtonAction
          onCheckAction={this.updateAction}
          actionSign='AC'/>
        <ButtonAction
          onCheckAction={this.updateAction}
          actionSign='+/-'/>
        <ButtonAction
          onCheckAction={this.updateAction}
          actionSign='%'/>
        <ButtonAction
          bgStyle="orange"
          onCheckAction={this.updateAction}
          actionSign='+'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='1'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='2'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='3'/>
        <ButtonAction
          bgStyle="orange"
          onCheckAction={this.updateAction}
          actionSign='-'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='4'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='5'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='6'/>
        <ButtonAction
          bgStyle="orange"
          onCheckAction={this.updateAction}
          actionSign='x'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='7'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='8'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='9'/>
        <ButtonAction
          bgStyle="orange"
          onCheckAction={this.updateAction}
          actionSign='/'/>
        <ButtonNumber 
          styleClass='wide'
          onCheckedNumber={this.updateNumber}
          value='0'/>
        <ButtonNumber 
          onCheckedNumber={this.updateNumber}
          value='.'/>
        <ButtonAction
          bgStyle="orange"
          onCheckAction={this.updateAction}
          actionSign='='/>
      </div>
    );
  }
};

export default Calculator;
