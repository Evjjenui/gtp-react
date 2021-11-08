import React, {useState} from "react";
import ModalEditForm from "./ModalEditForm";

const ModalItem = ({itemInfo, HeadItem, ...rest}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [values, setValues] = useState(itemInfo);

  const deleteHandler = (e) => {
    const { onDelete } = {...rest};
    onDelete(e);
    e.target.parentElement.parentElement.remove();
  }

  if (!isEditing) {

    return (
      <div className='modal-item'>
        <div className="modal-item__subitem">
          <span>{values.name}</span>
        </div>
        <div className="modal-item__subitem">
          <span>{values.addInfo}</span>
        </div>
        <div className="modal-item__subitem">
          <span>{values.price}</span>
        </div>
        <div className="btns">
          <button
            className='btn'
            onClick={(e) => deleteHandler(e)}>
            <i className="bx bx-trash"></i>
          </button>
          <button
            className='btn'
            onClick={() => setIsEditing(true)}>
            <i className='bx bxs-pencil'></i>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='modal-item'>

      <ModalEditForm 
        onEdit={ (state) => setIsEditing(state) }
        onUpdate = {(itemValues) => setValues(itemValues)}
        itemContent = {itemInfo}
      />
    </div>
  )
}

export default ModalItem;
