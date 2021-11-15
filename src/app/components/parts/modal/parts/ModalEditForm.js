import React, { useState, useEffect } from "react";

import { FormInputEdit } from "../../particles/FormInputEdit";


const ModalEditForm = ({onEdit, itemContent, key, ...rest}) => {
  const [values, setValues] = useState({})
  const { name, addInfo, price, id } = itemContent
  
  const submitHandler = () =>{
    const { onUpdate } = { ...rest }
    onEdit(false)
    
    const itemContent = {
      name: values.name || name,
      addInfo: values.addInfo || addInfo,
      price: values.price || price,
    }

    onUpdate(itemContent)

    const requestOptions = {
      method: 'PUT',
      headers:  {'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    }

    fetch(('http://localhost:4040/modal_items/' + id), requestOptions)
      .then(response => response.json())
  }
  
  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="modal-item__subitem">
          <FormInputEdit
            defaultValueText={name}
            onChange={(name) => setValues({ ...values, name })}
          />
        </div>
        <div className="modal-item__subitem">
          <FormInputEdit
            defaultValueText={addInfo}
            onChange={(addInfo) => setValues({ ...values, addInfo })}
          />
        </div>
        <div className="modal-item__subitem">
          <FormInputEdit
            defaultValueText={price}
            onChange={(price) => setValues({ ...values, price })}
          />
        </div>
        <div className="btns">
          <button className='btn'>
            <i className='bx bx-check'></i>
          </button>
          <span
            className='btn'
            onClick={() => onEdit(false)}>
            <i className='bx bx-undo'></i>
          </span>
        </div>
      </form>
    </>
  )
}

export default ModalEditForm;
