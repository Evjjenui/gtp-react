import React from 'react';

const Task = ({ taskText }) => {
  return (
    <div className="task-text">
      { taskText }
    </div>
  )
}

export default Task;
