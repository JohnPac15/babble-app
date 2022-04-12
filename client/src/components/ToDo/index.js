import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import { REMOVE_TODO } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const ToDo = ({ toDo, title }) => {
 const [ deleteToDo ] = useMutation(REMOVE_TODO);
 const handleClick = async () => {
  try {
    await deleteToDo({
      variables: { id: toDo._id },
    });
  } catch (e) {
    console.error(e);
  }
};

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
                <button variant="outline-danger" onClick={handleClick} >✕</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ToDo;
