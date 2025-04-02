import Task from './Task.jsx'


function TaskList({ tasks }) {

   const taskList = tasks.map((task) => (
    <Task task = { task.taskTodo } /> 
  ))
    return (
    <>
    <ul className="todo-list">
   {taskList}
   </ul>
    </>
    )
    }
    export default TaskList 