import React from 'react';
import useSocket from '../hooks/useSocket';
import ContentChat from '../components/ContentChat';
import Login from '../pages/Login';

const Chat = () => {

    const client = useSocket();

    return (
        <div className="app">
            { client.user ? <ContentChat client={client} /> : <Login logIn={client.logIn} />}
        </div>
    );

}

export default Chat
