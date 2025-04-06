import Task from "./Task.jsx";

function TaskList({ tasks, del, edit, isCompleted }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <Task
          task={task}
          key={index}
          del={del}
          edit={edit}
          isCompleted={isCompleted}
        />
      ))}
    </ul>
  );
}
export default TaskList;
