import React, {useState, useContext, useCallback, useEffect} from 'react';
import {SocketContext} from '../../components/socket';
import {FiSend, FiSmile} from 'react-icons/fi'
import './index.css'

function ContentChat(userId) {
  const socket = useContext(SocketContext);

  const [joined, setJoined] = useState(false);

  const handleInviteAccepted = useCallback(() => {
    setJoined(true);
  }, []);

  const handleJoinChat = useCallback(() => {
    socket.emit("SEND_JOIN_REQUEST");
  }, []);


  useEffect(() => {
    // as soon as the component is mounted, do the following tasks:

    // emit USER_ONLINE event
    socket.emit("USER_ONLINE", userId); 

    // subscribe to socket events
    socket.on("JOIN_REQUEST_ACCEPTED", handleInviteAccepted); 

    return () => {
      // before the component is destroyed
      // unbind all event handlers used in this component
      socket.off("JOIN_REQUEST_ACCEPTED", handleInviteAccepted);
    };
  }, [socket, userId, handleInviteAccepted]);

  return (
    <div className="chat">
      <div>
      { joined ? (
        <p>Click the button to send a request to join chat!</p>
      ) : (
        <p>Congratulations! You are accepted to join chat!</p>
      ) }
      <button onClick={handleJoinChat}>
        Join Chat
      </button>
      </div>
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
  )
}

export default ContentChat