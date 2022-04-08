import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import "./index.css";

function ContentChat() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3002`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="chat">
      <div className="chat__body">
      {socket ? (
        <>
          <div>
            <Messages socket={socket} />
          </div>
          <div>
            <MessageInput socket={socket} />
          </div>
        </>
      ) : (
        <div>Not Connected</div>
      )}
        </div>
    </div>
  );
}

export default ContentChat;
