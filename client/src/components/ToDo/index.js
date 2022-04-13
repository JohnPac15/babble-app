import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ToDo = ({ toDo, title }) => {
  if (!toDo.length) {
    return <h3>No Tasks Yet!</h3>;
  }

  return (
    <div className="todo">
      <h3>To Do List</h3>
      {toDo &&
        toDo.map((toDos) => (
          <div key={toDos._id} className="todo-body">
            <p className="todo-header">
              <Link
                to={`/profile/${toDos.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {toDos.username}
              </Link>{" "}
              Created on: {toDos.createdAt}
            </p>
            <Link to={`/toDo/${toDos._id}`}>
              <div className="todo-content">
                <span className="todo-text">{toDos.toDoText}</span>
                <button variant="outline-danger">✕</button>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ToDo;
