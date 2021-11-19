import React, { useState } from 'react';
import ModalEdit from './ModalEdit';

const Task = ({ taskText, onEdit, ...rest }) => {
  const [open, setOpen] = useState(false);
  const [taskValue, setTaskValue] = useState('');

  function onEdit() {
    setOpen(true);
  }

  const submitHandler = (value) => {
    setTaskValue(value);
    setOpen(false);
  };

  return (
    <div className="task-text">
      <button onClick={() => onEdit()}>
        <i className="bx bx-pencil"></i>
      </button>
      <p>{taskValue || taskText}</p>

      <ModalEdit
        toEdit={open}
        modalText={taskValue || taskText}
        handleSubmit={(value) => submitHandler(value)}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Task;
