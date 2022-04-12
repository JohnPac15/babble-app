import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const ToDo = ({ toDo, title }) => {
  if (!toDo.length) {
    return <h3>No Tasks Yet!</h3>;
  }

  return (
    <div className='card-container'>
      {/* <h3>{title}</h3> */}
      {toDo &&
        toDo.map(toDos => (
          <div key={toDos._id} className="card">
            <p className="card-header">
              <Link
                to={`/profile/${toDo.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {toDo.username}
              </Link>{' '}
              Due on {toDo.dueDate}
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

export default ToDo;
