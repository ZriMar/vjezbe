import React, { useState } from "react";
import MessageList from "./components/MessageList/MessageList";
import Message from "./components/Message/Message";

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, type: "sent" }]);
    botReply();
  };

  const botReply = () => {
    const botResponse = Math.random() < 0.5 ? "DA" : "NE";
    setMessages([...messages, { text: botResponse, type: "received" }]);
  };

  return (
    <div>
      <MessageList messages={messages.map((msg) => msg.text)} />
      <Message onSendMessage={sendMessage} />
    </div>
  );
};

export default App;
