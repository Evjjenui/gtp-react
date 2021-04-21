import React from 'react';
import ModalItem from '../other_parts/ModalItem';

function ModalList(props) {

  function getItem(e) {
    console.log(e.target.parentNode);
  }

  return (
    <>
      {props.list.map(item => (
        <ModalItem
          key={item.id}
          itemInfo={item}
          // onChange={(e) => getItem(e)}
          />
      ))}
    </>
  )
}

export default ModalList;
