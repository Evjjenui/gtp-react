import React, {useState, useEffect} from "react";
import ButtonAction from "./particles/ButtonAction";
import ButtonNumber from "./particles/ButtonNumber";
import CalculatorDisplay from "./particles/CalculatorDisplay";
import calcTransform from "./calc_logic/calc_transformations";


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
    this.setState(calcTransform(this.state, sign));
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

          if (this.state.sum === '0') {
            
            return {
              sum: number,
              addNumber: ''
            }  
          }

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
        <ButtonAction 
          onCheckAction={this.updateAction}
          actionSign='.'/>
        <ButtonAction
          bgStyle="orange"
          onCheckAction={this.updateAction}
          actionSign='='/>
      </div>
    );
  }
};

export default Calculator;
