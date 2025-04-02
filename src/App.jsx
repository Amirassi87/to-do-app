import './assets/styles/index.css'
import NewTaskForm  from './components/NewTaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import Footer from './components/Footer.jsx'
import React, { useState } from 'react';
import { format } from "date-fns";


function App() {


const [tasks,setTasks] = useState([]);
console.log(tasks);

const addTask = (taskName) => {

  const newTaskInfo = {
    taskTodo : taskName,
    createdAt : format(new Date(), "MM/dd/yyyy"),
    completed : false
  }

  setTasks([...tasks, newTaskInfo]);
  //console.log(newTaskInfo);
  //console.log(tasks);
}

  return (
    <section className="todoapp">
       <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask = { addTask } />
        </header>
        <section className="main">
          <TaskList tasks = { tasks }/>
          <footer className="footer">
          <Footer/>
          </footer>
        </section>
      </section>
  );

}

export default App
