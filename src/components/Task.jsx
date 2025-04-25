import React, { useState  , useRef , useEffect} from "react";

const Task = ({ task, isCompleted, edit, del }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTaskVal, setNewTaskVal] = useState("");
  const inputRef = useRef(0);

  const handleChange = (e) => {
    setNewTaskVal(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log(e.target)
    e.preventDefault();
    if(newTaskVal !== ""){
      edit(newTaskVal , task.id);
      setIsEditing(false);
      setNewTaskVal("")
    }
  };

  useEffect(() => {

    const handleCancelEditing = (e) => {
      if(inputRef.current && !inputRef.current.contains(e.target)){
        setIsEditing(false);
      }
    }

    
    document.addEventListener('click', handleCancelEditing , true);

    return () => { 
     document.removeEventListener('click', handleCancelEditing , true);
    };
  },[])
   

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
              onClick={() => del(task.id)}
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
            ref = {inputRef}
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
