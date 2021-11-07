import React from 'react';
import ModalItem from './ModalItem';


const ModalList= ({ onDelete, list }) => {

  function getItem(itemId) {
    onDelete(itemId);
  }

  return (
    <>
      {list.map(item => (
        <ModalItem
          key={item.id}
          itemInfo={item}
          onChange={() => getItem(item.id)}
          />
      ))}
    </>
  )
}

export default ModalList;
