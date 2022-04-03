import React from "react";
import {FiSend, FiSmile} from 'react-icons/fi'
import './index.css'
function Chat() {
  return (
    <div className="chat">
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">User</span>
          this is a message
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">User</span>
          this is a message
        </p>
        <p className="chat__message">
          <span className="chat__name">User</span>
          this is a message
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">User</span>
          this is a message
        </p>
      </div>

      <div className="chat__footer">
          <FiSmile className="icon"/>
          <form>
              <input type="text" placeholder="type a message"/>
              <button type="submit"><FiSend className="icon icon-style"/></button>
          </form>
      </div>
    </div>
  );
}

export default Chat;
