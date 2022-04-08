import React from 'react'
import ContentChat from '../components/ContentChat';
import SidebarChat from '../components/SidebarChat';

function Chat() {
  
  return (
    <div className="chat-wrapper">
        <SidebarChat/>
        <ContentChat/>
    </div>
  )
}

export default Chat
