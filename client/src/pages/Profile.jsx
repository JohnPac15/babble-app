import React from 'react'
import { Redirect,useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST, QUERY_USER, QUERY_ME } from '../utils/queries'
import PostList from '../components/PostList';
import FriendList from '../components/FriendList';
import PostForm from '../components/PostForm';


function Profile(props) {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_ME)
  console.log(data,'hey')

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!data.me?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }


  return (
    <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {data.me.username}'s profile.
        </h2>
        <div>
          <ul>
            <li>{data.me.email}</li>
            <li>{data.me.friendCount}</li>
            <li>{data.me.friends}</li>
          </ul>
          <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={data.me.username}
            friendCount={data.me.friendCount}
            friends={data.me.friends}
          />
        </div>
          <div className="col-12 mb-3 col-lg-8">
          <PostList
            posts={data.me.posts}
            title={`${data.me.username}'s thoughts...`}
          />
        </div>
        <div className="mb-3">{!userParam && <PostForm />}</div>
        </div>
      </div>
  )
}

export default Profile