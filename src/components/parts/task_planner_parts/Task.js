import React from 'react';
import ModalAdd from './ModalAdd';

const Task = ({ taskText, onEdit, isOpen, ...rest }) => {
  
  function onEdit() {
    // const { textEdit } = { ...rest };
    // setOpen(true);
    // textEdit(taskText);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // const targetValue = e.target.querySelector('textarea').value;
    
    // setOpen(false);
    // setTaskItems([...taskItems, targetValue]);
  }

  return (
    <div
      className="task-text">
      <button
        onClick= { () => onEdit() }>
        <i className="bx bx-pencil"></i>
      </button>
      <p>{ taskText }</p>

      {/* <ModalAdd
        isOpen = { open }
        modalText = { taskText }
        handleSubmit={ submitHandler }
        onClose = {() => setOpen(false)}
      /> */}
    </div>
  )
}

export default Task;
