import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  console.log(posts, 'yoyo')
  return (
    <div className='card-container'>
      <h3>Posts</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card">
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{' '}
              Posted on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p className='card-text'>{post.postText}</p>
                <p className="comments">
                  Comments: {post.commentCount} || Click to{' '}
                  {post.commentCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
