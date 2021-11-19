import React, { useState } from 'react';
import ModalAdd from './ModalAdd';
import Task from './Task';

const TaskPlannerItem = () => {
  const [open, setOpen] = useState(false);
  const [taskItems, setTaskItems] = useState([]);

  const submitHandler = (value) => {
    setOpen(false);
    setTaskItems([...taskItems, value]);
  };

  return (
    <div className="task-planner_item">
      <div className="task-planner_item_top-bar">
        <button onClick={() => setOpen(true)}>
          <i className="bx bx-plus"></i>
        </button>
      </div>
      <div className="task-list">
        {taskItems.map((item, id) => {
          return <Task key={id} taskText={item} />;
        })}
      </div>

      <ModalAdd toAdd={open} handleSubmit={submitHandler} onClose={() => setOpen(false)} />
    </div>
  );
};

export default TaskPlannerItem;
