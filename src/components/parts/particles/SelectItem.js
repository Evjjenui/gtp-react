import React, {useState} from "react";

function SelectItem (props) {
  const {text, itemChecked} = props;
  let classState = 'select-item';

  function onClicked () {
    const {text, onClick} = props;
    onClick(text);
  }

  if(itemChecked === text) {
    classState += ' select-item__highlighted';
  }
  
  
  return (
    <option
      className={classState}
      onClick={onClicked}>
      {text}
    </option>
  )
}

export default SelectItem;
