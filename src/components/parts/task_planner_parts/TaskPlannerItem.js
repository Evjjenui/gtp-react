import React, { useState } from 'react';
import ModalAdd from './ModalAdd';
import Task from './Task';

const TaskPlannerItem = () => {
  const [open, setOpen] = useState(false);
  const [taskItems, setTaskItems] = useState([]);
  // const [taskValue, setTaskValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const targetValue = e.target.querySelector('textarea').value;
    
    setOpen(false);
    setTaskItems([...taskItems, targetValue]);
  }
  
  // const taskEditFunc = (taskText) => {
  //   console.log('try to edit me', taskText);
  // }

  return (
    <div className="task-planner_item">
      <div className="task-planner_item_top-bar">
        <button onClick={() => setOpen(true)}>
          <svg height="448pt" viewBox="0 0 448 448" width="448pt" xmlns="http://www.w3.org/2000/svg"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
        </button>
      </div>
      <div className="task-list">
        {taskItems.map((item, id) => {
          return (
            <Task
              onEdit= { (e) => console.log(e.target.closest('button').nextElementSibling.innerHTML) }
              key={ id }
              taskText={ item }/>
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
