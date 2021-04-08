import React from 'react';
import ModalItem from '../other_parts/ModalItem';

function ModalList(props) {
  return (
    <>
      {props.list.map(item => (
        <ModalItem key={item.id} itemInfo={item}/>
      ))}
    </>
  )
}

export default ModalList;
