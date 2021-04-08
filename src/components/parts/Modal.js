import React, {useState} from 'react';

import ModalList from './particles/ModalList';
import {FormItem} from './particles/FormItem';

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
    setValues('');
  }

  return (
    <div className="modal-block">
      <form onSubmit={(e) => submitHandler(e)}>
        <FormItem
          label='Name'
          onChange={(name) => setValues({...values, name})}/>
        <FormItem
          label='Additional info'
          onChange={(addInfo) => setValues({...values, addInfo})}/>
        <FormItem
          label='Price'
          onChange={(price) => setValues({...values, price})}/>

        <button >Add Item</button>
      </form>
      
      {/* <button className="button">
        <strong>Show Modal</strong>
      </button> */}

      <ModalList list={itemsList}/>
    </div>
  )
}

export default Modal;
