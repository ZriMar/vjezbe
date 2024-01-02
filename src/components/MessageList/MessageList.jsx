import React from "react";
import PropTypes from "prop-types";

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
