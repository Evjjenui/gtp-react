import React, { useState } from 'react';
import ModalAdd from './ModalAdd';
import Task from './Task';

const TaskPlannerItem = () => {
  const [open, setOpen] = useState(false);
  const [taskItems, setTaskItems] = useState([]);
  // const [taskValue, setTaskValue] = useState('');

  const submitHandler = (value) => {
    setOpen(false);
    setTaskItems([...taskItems, value]);
  }
  
  // const taskEditFunc = (text) => {
  //   alert(`try to edit me ${text}`);
  // }

  return (
    <div className="task-planner_item">
      <div className="task-planner_item_top-bar">
        <button onClick={() => setOpen(true)}>
          <i className="bx bx-plus"></i>
        </button>
      </div>
      <div className="task-list">
        {taskItems.map((item, id) => {
          return (
            <Task
              // onEdit= { (e) => console.log(e.target.closest('button').nextElementSibling.innerHTML) }
              // textEdit = { (text) => taskEditFunc(text) }
              key = { id }
              taskText = { item }
            />
          )
        })}
      </div>

      <ModalAdd
        isOpen={open}
        handleSubmit={ submitHandler }
        onClose = {() => setOpen(false)}
      />
    </div>  
  );
}
 
export default TaskPlannerItem;
