import React from 'react';

const Task = ({ taskText, onEdit ,...rest }) => {
  
  function onEdit() {
    // console.log(e.target);
    const { textEdit } = { ...rest };
    textEdit(taskText);
  }

  return (
    <div
    className="task-text">
      <button
        onClick= { () => onEdit() }>
        <i className="bx bx-pencil"></i>
      </button>
      <p>{ taskText }</p>
    </div>
  )
}

export default Task;
