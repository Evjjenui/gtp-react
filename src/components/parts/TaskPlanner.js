import React, { useState }  from 'react';
import TaskPlannerItem from './task_planner_parts/TaskPlannerItem'

const TaskPlanner = () => {
  return ( 
    <div className="task-planner">
      <TaskPlannerItem />
    </div>
  );
}
 
export default TaskPlanner;
