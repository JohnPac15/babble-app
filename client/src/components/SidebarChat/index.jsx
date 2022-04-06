import React, { useState } from "react";
import { BsSearch, BsArrowRightCircle } from "react-icons/bs";
import { BiMessageDetail, BiDotsVerticalRounded } from "react-icons/bi";
import "./index.css";

function SidebarChat() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>

      <div className="sidebar-icons" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fa fa-arrow-right"}></i>
      </div>

        <div className={click ? "sidebar-chat active" : "sidebar-chat"}>

        <div className="sidebar__header">
          <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="" />
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

        <div className="sidebar__chats">
          {/* display friends */}
          <div className="chat__container">
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
            <p>Username</p>
          </div>
          <div className="chat__container">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              alt=""
            />
            <p>Username</p>
          </div>
          <div className="chat__container">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
            <p>Username</p>
          </div>
        </div>
        </div>
      </div>
  );
}

export default SidebarChat;
