import React from 'react';
import useSocket from '../hooks/useSocket';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import ContentChat from '../components/ContentChat';
import Login from '../pages/Login';
import Auth from '../utils/auth';

const Chat = () => {
    const { username: userParam } = useParams();
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });    
    const user = data?.me || data?.user || {};
    const chat = useSocket(user);
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
