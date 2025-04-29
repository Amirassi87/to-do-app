import Task from "./Task.jsx";
import React from "react";

function TaskList({ tasks, del, edit, isCompleted }) {
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
