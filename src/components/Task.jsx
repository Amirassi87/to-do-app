import React, { useState  } from "react";

const Task = ({ task, isCompleted, edit, del }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTaskVal, setNewTaskVal] = useState("");

  const handleChange = (e) => {
    setNewTaskVal(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    edit(newTaskVal , task.taskTodo);
    setIsEditing(false);
    setNewTaskVal("")
  };

  return (
    <>
      {isEditing == false ? (
        <li className={`${task.completed ? "completed" : ""}`}>
          <div className="view">
            <input
              onChange={() => isCompleted(task.taskTodo)}
              className="toggle"
              type="checkbox"
            />
            <label>
              <span className="description"> {task.taskTodo}</span>
              <span className="created">created {task.createdAt}</span>
            </label>
            {task.completed ? (
              " "
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="icon icon-edit"
              ></button>
            )}

            <button
              onClick={() => del(task.taskTodo)}
              className="icon icon-destroy"
            ></button>
          </div>
          <input type="text" className="edit" />
        </li>
      ) : (
        <li className="editing">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">Editing task</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="edit"
            name="newTaskVal"
            value={newTaskVal}
            onChange={handleChange}
          />
          </form>
        </li>
      )}
    </>
  );
};

export default Task;
