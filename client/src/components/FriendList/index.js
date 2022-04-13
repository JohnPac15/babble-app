import React from 'react';
import { NavLink } from "react-router-dom";
import UserList from '../UserList/index'

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return(
      <div>
        <p className="bg-dark text-light p-3">{username}, make some friends!</p>
        <UserList />
      </div>
      )
      

  }

  return (
    <div>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
      </h5>
      {friends.map(friend => (
        <button className="friends-btn" key={friend._id}>
          <NavLink to={`/profile/${friend.username}`}>{friend.username}</NavLink>
        </button>
      ))}
    </div>
  );
};

export default FriendList;
