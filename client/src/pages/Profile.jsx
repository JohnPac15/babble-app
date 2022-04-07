import React from 'react'
import { Redirect ,useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import PostList from '../components/PostList';
import FriendList from '../components/FriendList';
import PostForm from '../components/PostForm';
import Auth from '../utils/auth';



function Profile(props) {
  const { username: userParam } = useParams();
  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  console.log(data,'hey')
  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    console.log(user._id,'click me')
    try {
      await addFriend({
        variables: {friendId: user._id} ,
      });
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Friend
          </button>
        )}
      
        
        <div>
        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
        </div>
        <div className="col-12 mb-3 col-lg-8">
            <h2>POSTS</h2>
          <PostList
            posts={user.posts}
            title={`${user.username}'s Posts...`}
          />
        </div>
        <h2>WRITE A NEW POST HERE</h2>
        <div className="mb-3">{!userParam && <PostForm />}</div>
      </div>
      
  )
}

export default Profile