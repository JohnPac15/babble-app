import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
const CommentList = ({ comments }) => {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <h4>Comments</h4>
      </div>
      <div className="comment-body">
        {comments &&
          comments.map(comment => (
            <p className="comment-text" key={comment._id}>
              {comment.commentBody} //{' '}
              <Link className='comments' to={`/profile/${comment.username}`} style={{ fontWeight: 700 }}>
                {comment.username} on {comment.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
