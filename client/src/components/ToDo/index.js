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
              <Link
                to={`/profile/${toDos.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {toDo.username}
              </Link>{' '}
              Created on: {toDos.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/toDo/${toDos._id}`}>
                <p className='card-text'>{toDos.toDoText}</p>
                <button variant="outline-danger" >✕</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ToDo;
