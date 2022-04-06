import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';
import {FiSend, FiSmile} from 'react-icons/fi'
import './index.css'

function ContentChat(userId) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="chat">
    <div className="chat__body">
    { socket ? (
        <div className="chat-_message">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )} 
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