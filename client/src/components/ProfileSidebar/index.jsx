import React from "react";
import "./index.css";
import { FaUserFriends } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { RiTodoLine } from "react-icons/ri";
import { BsChatDots, BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProfileSidebar() {
  return (
    <div className="profileSidebar">
      <ul className="list">
        <Link>
          <li className="list-item">
            <FaUserFriends className="icon" />
            <h4>Friends</h4>
          </li>
        </Link>

        <Link>
          <li className="list-item">
            <BsChatDots className="icon" />
            <h4>Messages</h4>
          </li>
        </Link>

        <Link>
          <li className="list-item">
            <BsBell className="icon" />
            <h4>Notifications</h4>
          </li>
        </Link>

        <Link>
          <li className="list-item">
            <RiTodoLine className="icon" />
            <h4>Lists</h4>
          </li>
        </Link>

        <Link>
          <li className="list-item">
            <TiMessages className="icon" />
            <h4>Posts</h4>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
