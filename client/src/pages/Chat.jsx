import React from 'react';
import useSocket from '../hooks/useSocket';
import ContentChat from '../components/ContentChat';
import Login from '../pages/Login';

const Chat = () => {

    const chat = useSocket();

    return (
        <div className="app">
            { chat.username ? <ContentChat client={chat} /> : <Login logIn={chat.logIn} />}
        </div>
    );

}

export default Chat
