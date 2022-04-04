import React from "react";
import {BsPersonCircle, BsSearch} from 'react-icons/bs'
import {BiMessageDetail, BiDotsVerticalRounded} from 'react-icons/bi'
import './index.css'

function SidebarChat() {
  return (
    <div>
      <div className="sidebar-chat">
        <div className="sidebar__header">
          <BsPersonCircle className="header__icon" />
          <div className="sidebar__headerRight">
            <BiMessageDetail className="headerRight__icons" />
            <BiDotsVerticalRounded className="headerRight__icons" />
          </div>
        </div>
        <div className="sidebar__search">
          <div className="searchContainer">
            <button>
              <BsSearch />
            </button>
            <input type="text" placeholder="start a new chat" />
          </div>
        </div>

        <div className="sidebar__chats">{/* display friends */}</div>
      </div>
    </div>
  );
}

export default SidebarChat;
