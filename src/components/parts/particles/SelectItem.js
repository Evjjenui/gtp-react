import React, {useState} from "react";

function SelectItem ({onClick, text, itemChecked}) {
  let classState = 'select-item';

  function onClicked () {
    onClick(text);
  }

  if(itemChecked === text) {
    classState += ' select-item__highlighted';
  }
  
  return (
    <>
      <option
        className={classState}
        onClick={onClicked}>
        {text}
      </option>
    </>
  )
}

export default SelectItem;
