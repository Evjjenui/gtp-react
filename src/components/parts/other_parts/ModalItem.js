import React from "react";

const ModalItem = ({itemInfo, ...rest}) => {

  function ClickHandler(e) {
    const { onChange } = {...rest};
    onChange(e);
    e.target.parentElement.remove();
  }

  return (
    <div className='modal-item'>
      <span>Name: {itemInfo.name}</span>
      <span>Additional info: {itemInfo.addInfo}</span>
      <span>Price: {itemInfo.price}</span>
      <button
        className='delete'
        onClick={(e) => ClickHandler(e)}>
        <box-icon
          color='hsl(0, 0%, 17%)'
          name='trash'>
        </box-icon>
      </button>
    </div>
  );
}

export default ModalItem;
