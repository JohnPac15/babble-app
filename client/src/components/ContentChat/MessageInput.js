import React, { useState } from 'react';
import {FiSend, FiSmile} from 'react-icons/fi'


const NewMessage = ({socket}) => {
  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', value);
    setValue('');
  };

  return (
    <div className="chat__footer">
      <FiSmile className="icon"/>
    <form onSubmit={submitForm}>
      <input
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
       <button type="submit"><FiSend className="icon icon-style"/></button>
    </form>
    </div>
  );
};

export default NewMessage;