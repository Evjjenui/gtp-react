import React, {useState, useEffect} from "react";
import ButtonAction from "./particles/ButtonAction"
import ButtonNumber from "./particles/ButtonNumber"
import CalculatorDisplay from "./particles/CalculatorDisplay"

function Calculator() {

  return (
    <div className="calculator">
      <CalculatorDisplay />
      <ButtonNumber number="AC"/>
      <ButtonNumber number="+/-"/>
      <ButtonNumber number="%"/>
      <ButtonAction actionSign="+"/>
      <ButtonNumber number="1"/>
      <ButtonNumber number="2"/>
      <ButtonNumber number="3"/>
      <ButtonAction actionSign="-"/>
      <ButtonNumber number="4"/>
      <ButtonNumber number="5"/>
      <ButtonNumber number="6"/>
      <ButtonAction actionSign="*"/>
      <ButtonNumber number="7"/>
      <ButtonNumber number="8"/>
      <ButtonNumber number="9"/>
      <ButtonAction actionSign="/"/>
      <ButtonNumber number="0"/>
      <ButtonNumber number="."/>
      <ButtonAction actionSign="="/>
    </div>
  );
};

export default Calculator;
