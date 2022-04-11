import React from 'react';
import useSocket from '../hooks/useSocket';
import ContentChat from '../components/ContentChat';
import ChatCreate from '../utils/chatCreate';
//import Auth from '../utils/auth';

const Chat = () => {

    const chat = useSocket();
    console.log (chat);

    return (
        <div className="app">
            { chat.user ? <ContentChat client={chat} /> : <ChatCreate logIn={chat.logIn} />}               
        </div>
    );

}

export default Chat
