import React, { useState } from 'react';

import ModalList from './particles/ModalList';
import { FormInput } from './particles/FormInput';

function Modal() {
  const [itemsList, setItemsList] = useState([]);
  const [values, setValues] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    const newItem = {
      name: values.name,
      addInfo: values.addInfo,
      price: values.price,
      id: Date.now()
    }
    
    setItemsList([...itemsList, newItem]);
    setValues({});
  }
  
  function removeItem(id) {
    let newList = itemsList.filter(item => item.id !== id);
    setItemsList(newList)
  }

  return (
    <div className="modal-block">
      <form onSubmit={(e) => submitHandler(e)}>
        <FormInput
          label='Name'
          valueText={values.name || ''}
          onChange={(name) => setValues({...values, name})}/>
        <FormInput
          label='Additional info'
          valueText={values.addInfo || ''}
          onChange={(addInfo) => setValues({...values, addInfo})}/>
        <FormInput
          label='Price'
          valueText={values.price || ''}
          onChange={(price) => setValues({...values, price})}/>

        <button >Add Item</button>
      </form>
      
      {/* <button className="button">
        <strong>Show Modal</strong>
      </button> */}

      <ModalList
        list={itemsList}
        onDelete={(itemId) => removeItem(itemId)}/>
    </div>
  )
}``

export default Modal;
