import React from "react";

function ModalItem (props) {

  function ClickHandler(e) {
    const { onChange } = props;
    onChange(e);

    e.target.parentNode.remove()
  }

  return (
    <div className="modal-item">
      <span>Name: {props.itemInfo.name}</span>
      <span>Additional info: {props.itemInfo.addInfo}</span>
      <span>Price: {props.itemInfo.price}</span>
      <button
        className="delete"
        onClick={(e) => ClickHandler(e)}
        >X</button>
    </div>
  )
}

export default ModalItem;
