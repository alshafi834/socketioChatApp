import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./JoinChat.css";

const JoinChat = () => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder=""
            className="joinInput"
            type="text"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder=""
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoomName(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) =>
            !userName || !roomName ? event.preventDefault() : null
          }
          to={`/chat?name=${userName}&room=${roomName}`}
        >
          <button className="button mt-20" type="submit">
            Join Chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinChat;
