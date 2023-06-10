import React from "react";
import "./ChatBubble.css";

interface ChatBubbleProps {
  text: string;
  sender: "user1" | "user2";
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, sender }) => {
  const bubbleClass = sender === "user1" ? "user1" : "user2";

  return (
    <div className={bubbleClass}>
      <p>{text}</p>
    </div>
  );
};

export default ChatBubble;

export const User1 = () => (
  <ChatBubble text="Hey!" sender="user1" />
);

export const User2 = () => (
  <ChatBubble text="Hello" sender="user2" />
);

