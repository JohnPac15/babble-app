import React from 'react';
import { useParams, Redirect, NavLink } from 'react-router-dom';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm'

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import { useMutation } from '@apollo/client';
import {REMOVE_POST} from '../utils/mutations';

const SinglePost = (props) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  const [removePost] = useMutation(REMOVE_POST)

  
  // console.log(data,"wow")
  if (loading) {
    return <div>Loading...</div>;
  }
  
  const handleDeletePost =  async (e) => {
    
    try{
      removePost({variables: { id: post._id }});
      window.location.replace('/')
    }catch(e){
      console.error(e)
    }
  };
  
  if(data.post === null){
    return(
      <Redirect to="/profile" />
    )
  }else{
    return (
      <div className='singlePost-wrapper'>
        <div className="card">
          <p className="card-header">
            <span style={{ fontWeight: 700 }} className="text-light">
              {post.username}
            </span>{' '}
            post on {post.createdAt}
          </p>
          <div className="card-body">
            <p className='card-text'>{post.postText}</p>
          </div>
        </div>
        <button className="btn col-12 col-md-3" onClick={handleDeletePost}>
          Delete Post
        </button>
        
        {Auth.loggedIn() && <CommentForm postId={post._id} />}
        {post.commentCount > 0 && (
          <CommentList comments={post.comments} />
        )}
      </div>
    );
  }
  
};

export default SinglePost;
