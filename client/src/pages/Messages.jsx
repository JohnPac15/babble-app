import React from 'react'
import Chat from '../components/Chat';
import Chatsidebar from '../components/Chatsidebar';

function Messages() {
  return (
    <div className='container'>
      <Chatsidebar/>
      <Chat/>
    </div>
  )
}

export default Messages;

