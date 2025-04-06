import React, { useState } from "react";

const NewTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(task)
    addTask(task);
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="NewTaskForm">
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </>
  );
};
export default NewTaskForm;
