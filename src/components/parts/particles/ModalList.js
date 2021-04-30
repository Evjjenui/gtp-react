import React from 'react';
import ModalItem from '../other_parts/ModalItem';
import useFetch from "../useFetch";


const ModalList= ({ onDelete }) => {
  const { data: list, pending, errorInfo} = useFetch('http://localhost:8000/modal_items');

  function getItem(itemId) {
    onDelete(itemId);
  }

  return (
    <>
      { errorInfo && <div className="info-text error-block">{errorInfo}</div> }
      { pending && <div className="info-text loading">Loading ...</div>}
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
