import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ToDos = ({ toDos }) => {


  if (!toDos.length) {
    return <h3>No Tasks Yet!</h3>;
  }

  return (
    <div className="todo">
      <h3>To Do List</h3>
      {toDos &&
        toDos.map(toDo => (
          <div key={toDo._id} className="card">
            <p className="card-header">
              Created on: {toDo.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/toDo/${toDo._id}`}>
                <p className='card-text'>{toDo.toDoText}</p>                
              </Link>
            </div>

          </div>
        ))}
    </div>
  );
};

export default ToDos;
