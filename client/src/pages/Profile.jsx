import React from 'react'
import { Redirect ,useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import PostList from '../components/PostList';
import FriendList from '../components/FriendList';
import PostForm from '../components/PostForm';
import Auth from '../utils/auth';
import ProfileSidebar from '../components/ProfileSidebar';
import ContentChat from '../components/ContentChat';
import SidebarChat from '../components/SidebarChat';

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
    <div className="profile">
     
        <h2 className="">
           {` Welcome, ${user.username}`}
        </h2>


        {userParam && (
          <button className="" onClick={handleClick}>
            Add Friend
          </button>
        )}
      
      <div className="profile-container">

        {/* Sidebar */}
        <ProfileSidebar />


        {/* Post's here */}
        {/* <div>{!userParam && <PostForm />}</div>
          
          <PostList
            posts={user.posts}
            title={`${user.username}'s Posts...`}
          /> */}

          {/* Friends List */}
  
          {/* <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          /> */}
      </div>




      </div>
      
  )
}

export default Profile