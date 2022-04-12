import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const ToDo = ({ todo, title }) => {
  console.log(todo)
  if (!todo.length) {
    return <h3>No Tasks Yet!</h3>;
  }

  return (
    <div className='card-container'>
      {/* <h3>{title}</h3> */}
      {todo &&
        todo.map(todos => (
          <div key={todos._id} className="card">
            <p className="card-header">
              <Link
                to={`/profile/${todo.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {todo.username}
              </Link>{' '}
              Due on {todo.dueDate}
            </p>
            <div className="card-body">
              <Link to={`/todo/${todo._id}`}>
                <p className='card-text'>{todo.todoText}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ToDo;
