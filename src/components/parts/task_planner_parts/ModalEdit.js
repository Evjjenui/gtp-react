import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ModalEdit = ({toEdit, onClose, handleSubmit, children, ...rest}) => {
  const { modalText } = {...rest}
  const [ isEdit, setIsEdit ] = useState(false);
  const [ valueText, setValueText ] = useState('');
  
  const onCloseHandler = () => {
    onClose();
  };

  const submitHadler = (e) => {
    e.preventDefault();
    handleSubmit(valueText);
    setValueText('');
  }
  
  if (!toEdit) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="modal modal-add">
        <p>Add new task</p>
        <form onSubmit = { submitHadler }>
          <textarea
            placeholder = "Type new task..."
            onChange = { (e) => setValueText(e.target.value) }
            value = { modalText || valueText || ''}
          />
          <button
            className="button-green">
            {/* { isEdit ? 'Edit' : 'Add' } */}
            Edit
          </button>
          <a
            onClick ={ onCloseHandler }
            className="button-red">
            Close
          </a>
        </form>
      </div>
    </div>
    , document.body);
}
 
export default ModalEdit;
