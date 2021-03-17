import React from "react";

function ModalItem (props) {
  return (
    <div className="modal-item">
      <span>Name: {props.itemInfo.name}</span>
      <span>Additional info: {props.itemInfo.addInfo}</span>
      <span>Price: {props.itemInfo.price}</span>
      <button className="delete">X</button>
    </div>
  )
}

export default ModalItem;
