import TaskFilter from './TaskFilter'

function Footer() {

    return (
    <>
    <span className="todo-count">1 items left</span>
    <TaskFilter/>    
    <button className="clear-completed">Clear completed</button>
    
    </>
    )
    }
    export default Footer 