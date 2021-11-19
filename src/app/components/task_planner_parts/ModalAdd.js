import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

const ModalAdd = ({toAdd, onClose, handleSubmit, children, ...rest}) => {
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
  
  if (!toAdd) return null;

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
            Add
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
 
export default ModalAdd;
