import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Messages.css";
import Message from "../Message/Message";

const Messages = ({ messages, userName }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((msg, index) => (
        <div key={index}>
          <Message msg={msg} name={userName} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
