import Task from "./Task.jsx";
import { FunctionContext } from './FunctionContext.jsx';
import React, {  } from 'react';

function TaskList({ tasks, del, edit, isCompleted }) {
  
  //  const { showCompleted , showActive , showAll} = useContext(FunctionContext)
  
  // const [isActive, setIsActive] = useState(false);
  // const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  // const [isAll, setIsAll] = useState(false);

 

  return (

    <ul className="todo-list">
      
        {tasks.map((task) => (

        <Task
          task={task}
          key={task.id}
          del={del}
          edit={edit}
          isCompleted={isCompleted}
        />
      ))}

    
    </ul>

  );
}
export default TaskList;
