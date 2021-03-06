import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../../utils/queries";

const UserList = () => {
  const [userState, setUserState] = useState({ users: [] });
  const { loading, data } = useQuery(QUERY_USERS);

  useEffect(() => {
    if (data) {
      setUserState(data.users);
    }
  });
  console.log(userState, "hey")

  if (userState.length >= 1) {
    return(
      userState.map(user => (
        <button className="friends-btn" key={user._id}>
          <NavLink to={`/profile/${user.username}`}>
             {user.username}
 
            </NavLink>
        </button>
      ))
    )
  } else {
    return <div>"users not found"</div>;
  }
};

export default UserList;
