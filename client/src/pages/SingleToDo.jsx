import React from 'react';
import { useParams, Redirect, NavLink } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_TODO } from '../utils/queries';
import { useMutation } from '@apollo/client';
import {REMOVE_TODO} from '../utils/mutations';

const SingleToDo = (props) => {
  const { id: toDoId } = useParams();

  const { loading, data } = useQuery(QUERY_TODO, {
    variables: { id: toDoId },
  });

  const toDo = data?.toDo || {};

  const [removeToDo] = useMutation(REMOVE_TODO)

  if (loading) {
    return <div>Loading...</div>;
  }
  
  const handleDeleteToDo =  async (e) => {
    
    try{
      removeToDo({variables: { id: toDo._id }});
      return <Redirect to="/profile" />
    }catch(e){
      console.error(e)
    }
  };
  
  if(data.toDo === null){
    return(
      <Redirect to="/profile" />
    )
  }else{
    return (
      <div className='singlePost-wrapper'>
        <div className="card">
          <p className="card-header">
            <span style={{ fontWeight: 700 }} className="text-light">
              {toDo.username}
            </span>{' '}
            post on {toDo.createdAt}
          </p>
          <div className="card-body">
            <p className='card-text'>{toDo.toDoText}</p>
          </div>
        </div>
        <button className="btn col-12 col-md-3" onClick={handleDeleteToDo}>
          Delete Task
        </button>
      </div>
    );
  }
  
};

export default SingleToDo;
