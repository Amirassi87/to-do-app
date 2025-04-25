import NewTaskForm from "./components/NewTaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import Footer from "./components/Footer.jsx";
import React, { useState } from "react";
import { format } from "date-fns";
import useCounter from "./components/useCounter.jsx";
import { v4 as uuidv4 } from 'uuid';
import { FunctionContext } from '../src/components/FunctionContext.jsx';


function App() {

  const [tasks, setTasks] = useState([]);
  const { counter, increase, decrease } = useCounter();
  const [filter , setFilter] = useState("all");



  const filterTasks = tasks.filter(val => {
    if(filter === "active")
      return !val.completed;
    if(filter === "completed")
      return val.completed;
    return true;
    });

  console.log(tasks);

  //add new task object
  const addTask = (taskName) => {
    const newTaskInfo = {
      id: uuidv4(),
      taskTodo: taskName,
      createdAt: format(new Date(), "MM/dd/yyyy"),
      completed: false,
      edited: false,
    };

    setTasks([...tasks, newTaskInfo]);
    increase();
  };

  //delete a task
  const del = (id) => {
    setTasks(tasks.filter((val) => val.id !== id));
    decrease();
  };


  //delete completed tasks
  const delCompleted = () => {
    setTasks(tasks.filter((val) => val.completed === false));
  };

    
  // edit task textfield
  const edit = (newVal, id) => {
    setTasks(
      tasks.map((val) =>
        val.id === id ? { ...val, taskTodo: newVal } : val
      )
    );
  };

  //mark the task completed or still active
  const isCompleted = (id) => {
    setTasks(
      tasks.map((val) => {
      if (val.id === id) {
        if(val.completed){
          increase();
        }else{
          decrease();
        }
        return { ...val, completed: !val.completed };
      } else {
          return val;
      }
    }
      )
    );
  };

  return (
     <FunctionContext.Provider value={{setFilter , filter }}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={addTask} />
        </header>
        <section className="main">
          <TaskList
            tasks={filterTasks}
            del={del}
            edit={edit}
            isCompleted={isCompleted}
          />
          <Footer counter={counter} delCompleted={delCompleted}/>
        </section>
      </section>
      </FunctionContext.Provider>
  );
}

export default App;

