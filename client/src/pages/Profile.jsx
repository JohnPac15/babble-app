import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";
import PostList from "../components/PostList";
import FriendList from "../components/FriendList";
import PostForm from "../components/PostForm";
import Auth from "../utils/auth";

function Profile(props) {
  const { username: userParam } = useParams();
  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  console.log(data, "hey");
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
    console.log(user._id, "click me");
    try {
      await addFriend({
        variables: { friendId: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="profile-wrapper">
      {/* {userParam && (
        <button className="" onClick={handleClick}>
          Add Friend
        </button>
      )} */}

      <div className="profile-container">
        {/* Post's here */}
        <div >
          <h3 className="">{` Welcome, ${user.username}!`}</h3>
          <div className="post-form">
            <div>
              {user.username === "jane" ? (
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt=""
                />
              ) : (
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt=""
                />
              )}
            </div>

            <div>{!userParam && <PostForm />}</div>
          </div>
          <div>
            <PostList
              posts={user.posts}
              title={`${user.username}'s Posts...`}
            />
          </div>
        </div>

        {/* Friends List */}

        <div className="friends-wrapper">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;