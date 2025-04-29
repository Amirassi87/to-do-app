import TaskFilter from "./TaskFilter";

function Footer({ counter, delCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      <TaskFilter />
      <button className="clear-completed" onClick={delCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
