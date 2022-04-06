import React from 'react';
import useSocket from '../../hooks/useSocket';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

import './index.css'

function ContentChat() {
  const client = useSocket();

  return (
    <div className="app">
      { client.user ? <Home client={client} /> : <Login logIn={client.logIn} />}
    </div>
  )
}

export default ContentChat