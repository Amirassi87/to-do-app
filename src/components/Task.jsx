import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Task = ({
  // default values
  task = {
    id: null,
    taskTodo: "Task has no name",
    completed: false,
    createdAt: "Unknown time",
  },
  isCompleted = () => {},
  edit = () => {},
  del = () => {},
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskVal, setNewTaskVal] = useState("");
  const inputRef = useRef(0);

  const handleChange = (e) => {
    setNewTaskVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskVal !== "") {
      edit(newTaskVal, task.id);
      setIsEditing(false);
      setNewTaskVal("");
    }
  };

  useEffect(() => {
    const handleCancelEditing = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsEditing(false);
      }
    };

    document.addEventListener("click", handleCancelEditing, true);

    return () => {
      document.removeEventListener("click", handleCancelEditing, true);
    };
  }, []);

  return (
    <>
      {isEditing == false ? (
        <li className={`${task.completed ? "completed" : ""}`}>
          <div className="view">
            <input
              onChange={() => isCompleted(task.id)}
              className="toggle"
              type="checkbox"
              checked={task.completed}
              name="complete"
              id={`${task.id}`}
            />
            <label htmlFor={`${task.id}`}>
              <span className="description">
                {" "}
                {task.taskTodo}
              </span>
              <span className="created">created {task.createdAt} ago</span>
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
              onClick={() => del(task.id)}
              className="icon icon-destroy"
            ></button>
          </div>
        </li>
      ) : (
        <li className="editing">
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={task.completed}
              name="edit"
            />
            
          </div>
          <form onSubmit={handleSubmit}>
            <input
              id="edit-task"
              ref={inputRef}
              type="text"
              className="edit"
              name="editTask"
              value={newTaskVal}
              onChange={handleChange}
            />
          </form>
        </li>
      )}
    </>
  );
};

//prop types
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    taskTodo: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.string,
  }),
  isCompleted: PropTypes.func,
  edit: PropTypes.func,
  del: PropTypes.func,
};

export default Task;
