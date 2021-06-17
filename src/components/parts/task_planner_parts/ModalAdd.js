import React from 'react';
import ReactDOM from 'react-dom';

const ModalAdd = ({isOpen, onClose, handleSubmit, value, children}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="modal modal-add">
        <p>Add new task</p>
        <form onSubmit={ handleSubmit }>
          <textarea
            placeholder="Type new task..." 
          />
          <button
            className="button-green">
            Add
          </button>
          <button
            onClick={onClose}
            className="button-red">
            Close
          </button>
        </form>
      </div>
    </div>
    ,document.body);
}
 
export default ModalAdd;
