import React from 'react';
import ModalItem from '../other_parts/ModalItem';

function ModalList(props) {
  return (
    <>
      {props.list.map(item => (
        <ModalItem itemInfo={item}/>
      ))}
    </>
  )
}

export default ModalList;
