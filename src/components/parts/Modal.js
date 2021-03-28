import React, {useState} from 'react';

import ModalList from './particles/ModalList';
import {FormItem} from './particles/FormItem';

function Modal() {
  const [itemsList, setItemsList] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
  }
  
  function ChangeConsole(text) {
    console.log(text);
  }

  return (
    <div className="modal-block">
      <form onSubmit={(e) => submitHandler(e)}>
        <FormItem label='Name' onChange={ChangeConsole}/>
        {/* <FormItem label='Additional info'/>
        <FormItem label='Price'/> */}

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
