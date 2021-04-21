import React from 'react';
import ModalItem from '../other_parts/ModalItem';

function ModalList(props) {

  function getItem(itemId) {
    const { onDelete } = props;
    onDelete(itemId);
  }

  return (
    <>
      {props.list.map(item => (
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
