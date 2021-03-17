import React, {useState} from 'react';

import ModalList from './particles/ModalList';
import FormItem from './particles/FormItem';

function Modal() {
  const [itemsList, setItemsList] = useState([]);

  return (
    <div className="modal-block">
      <form>
        <FormItem label='Name'/>
        <FormItem label='Additional info'/>
        <FormItem label='Price'/>

        <button >Add Item</button>
      </form>
      
      <button className="button">
        <strong>Show Modal</strong>
      </button>

      <ModalList list={itemsList}/>
    </div>
  )
}

export default Modal;
