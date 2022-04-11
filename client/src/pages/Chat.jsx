import React from 'react';
import useSocket from '../hooks/useSocket';
import ContentChat from '../components/ContentChat';
import Login from '../pages/Login';

const Chat = () => {

    const chat = useSocket();
    console.log (chat);

    return (
        <div className="app">
            { chat.user ? <ContentChat client={chat} /> : <Login logIn={chat.logIn} />}
        </div>
    );

}

export default Chat
