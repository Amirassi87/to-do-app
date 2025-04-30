import React, { useContext } from "react";
import { FunctionContext } from "./FunctionContext";

function TaskFilter() {
  const { setFilter, filter } = useContext(FunctionContext);

  return (
      <ul className="filters">
        <li>
          <button
            onClick={() => setFilter("all")}
            className={`${filter === "All" ? "selected" : ""}`}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => setFilter("active")}
            className={`${filter === "active" ? "selected" : ""}`}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => setFilter("completed")}
            className={`${filter === "completed" ? "selected" : ""}`}
          >
            Completed
          </button>
        </li>
      </ul>
  );
}
export default TaskFilter;
