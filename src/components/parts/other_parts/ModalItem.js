import React from "react";

const ModalItem = ({itemInfo, ...rest}) => {

  function ClickHandler(e) {
    const { onChange } = {...rest};
    onChange(e);
    e.target.parentElement.parentElement.remove();
  }

  return (
    <div className='modal-item'>
      <span>Name: {itemInfo.name}</span>
      <span>Additional info: {itemInfo.addInfo}</span>
      <span>Price: {itemInfo.price}</span>
      <button
        className='delete'
        onClick={(e) => ClickHandler(e)}>
        <i className="bx bx-trash"></i>
      </button>
    </div>
  );
}

export default ModalItem;
