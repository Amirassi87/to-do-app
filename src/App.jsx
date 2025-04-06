import "./assets/styles/index.css";
import NewTaskForm from "./components/NewTaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";
import React, { useState } from "react";
import { format } from "date-fns";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  //add new task object
  const addTask = (taskName) => {
    const newTaskInfo = {
      taskTodo: taskName,
      createdAt: format(new Date(), "MM/dd/yyyy"),
      completed: false,
      edited: false,
    };

    setTasks([...tasks, newTaskInfo]);
  };

  //delete a task
  const del = (task) => {
    setTasks(tasks.filter((val) => val.taskTodo !== task));
  };

  // edit task textfield
  const edit = (newVal, task) => {
    setTasks(
      tasks.map((val) =>
        val.taskTodo === task ? { ...val, taskTodo: newVal } : val
      )
    );
  };

  //mark the task completed or still active
  const isCompleted = (task) => {
    setTasks(
      tasks.map((val) =>
        val.taskTodo === task ? { ...val, completed: !val.completed } : val
      )
    );
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList
          tasks={tasks}
          del={del}
          edit={edit}
          isCompleted={isCompleted}
        />
        <Footer />
      </section>
    </section>
  );
}

export default App;
