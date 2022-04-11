import React from 'react';
import { NavLink } from "react-router-dom";

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p>{username}, make some friends!</p>;
  }

  return (
    <div>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
      </h5>
      {friends.map(friend => (
        <button className="btn" key={friend._id}>
          <NavLink to={`/profile/${friend.username}`}>{friend.username}</NavLink>
        </button>
      ))}
    </div>
  );
};

export default FriendList;
