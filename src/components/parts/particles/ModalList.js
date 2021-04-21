import React from 'react';
import ModalItem from '../other_parts/ModalItem';

function ModalList(props) {

  function getItem() {
    const { onDelete } = props;
    onDelete();
  }

  return (
    <>
      {props.list.map(item => (
        <ModalItem
          key={item.id}
          itemInfo={item}
          onChange={() => getItem()}
          />
      ))}
    </>
  )
}

export default ModalList;
