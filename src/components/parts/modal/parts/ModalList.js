import React from 'react';
import ModalItem from './ModalItem';


const ModalList = ({ onDelete, list }) => {

  const deleteItem = (itemId) => {
    onDelete(itemId);
  }
  
  return (
    <>
      <div className='modal-item modal-item_head'>
        <div className="modal-item__subitem">
          <span>Name</span>
        </div>
        <div className="modal-item__subitem">
          <span>Additional info</span>
        </div>
        <div className="modal-item__subitem">
          <span>Price</span>
        </div>
      </div>
      {list.map(item => (
        <ModalItem
          key={item.id}
          itemInfo={item}
          onChange={() => deleteItem(item.id)}
          />
      ))}
    </>
  )
}

export default ModalList;
