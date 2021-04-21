import React from "react";

function ModalItem ({itemInfo, ...rest}) {

  function ClickHandler() {
    const { onChange } = {...rest};
    onChange();
  }

  return (
    <div className="modal-item">
      <span>Name: {itemInfo.name}</span>
      <span>Additional info: {itemInfo.addInfo}</span>
      <span>Price: {itemInfo.price}</span>
      <button
        className="delete"
        onClick={() => ClickHandler()}
        >X</button>
    </div>
  )
}

export default ModalItem;
