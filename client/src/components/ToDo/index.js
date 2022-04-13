import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const ToDo = ({ toDo, title }) => {


  if (!toDo.length) {
    return <h3>No Tasks Yet!</h3>;
  }

  return (
    <div className='card-container'>
      <h3>To Do List</h3>
      {toDo &&
        toDo.map(toDos => (
          <div key={toDos._id} className="card">
            <p className="card-header">
              Created on: {toDos.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/toDo/${toDos._id}`}>
                <p className='card-text'>{toDos.toDoText}</p>                
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ToDo;
