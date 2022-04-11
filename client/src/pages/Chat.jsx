import React from 'react';
import useSocket from '../hooks/useSocket';
import ContentChat from '../components/ContentChat';
import Login from '../pages/Login';
import Auth from '../utils/auth';

const Chat = () => {

    const chat = useSocket();
    console.log (chat);

    return (
        <div className="app">
            {Auth.loggedIn() ? (
                <ContentChat client={chat} />                
            ) : (
                <Login />
            )}
        </div>
    );

}

export default Chat
