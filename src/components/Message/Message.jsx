import React, { useState } from "react";
import PropTypes from "prop-types";

const Message = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Unesite poruku..."
      />
      <button onClick={handleSendMessage}>Pošalji</button>
    </div>
  );
};

Message.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default Message;
