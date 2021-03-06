import React, { useState } from "react";
import "../index.css";
const avatars = [
  "https://semantic-ui.com/images/avatar2/small/patrick.png",
  "https://semantic-ui.com/images/avatar2/small/kristy.png",
  "https://semantic-ui.com/images/avatar2/small/mark.png",
  "https://semantic-ui.com/images/avatar2/small/matthew.png",
  "https://semantic-ui.com/images/avatar2/small/elyse.png",
  "https://semantic-ui.com/images/avatar2/small/lindsay.png",
];

function ChatCreate({ logIn }) {

  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(
    "https://semantic-ui.com/images/avatar2/small/patrick.png"
  );

  return (
    <div className="chat_login">
      <div className="logo_text">
        <h3>Start a Chat with a Friend</h3>
      </div>

      <div className="avatar_list">
        {avatars.map((avt, idx) => (
          <div
            className={avatar === avt ? "avatar active_avatar" : "avatar"}
            key={idx}
          >
            <img
              src={avt}
              className="avatar_image"
              alt=""
              onClick={() => setAvatar(avt)}
            />
          </div>
        ))}
      </div>

      <div className="chat_signup">
        <input
          type="text"
          value={username}
          placeholder="Enter Name"
          className="username_input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="enter_chat_btn"
          onClick={() => logIn({ username, avatar })}
        >
          ENTER CHAT
        </button>
      </div>
    </div>
  );
}

export default ChatCreate;
