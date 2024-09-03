import { useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import Chat from "./Chat";

export default function LiveChat() {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <>
      <div
        className="live-chat-button w-12 h-12 rounded-full bg-blue-700 fixed right-4 bottom-4 flex items-center justify-center text-white cursor-pointer"
        onClick={toggleChat}
      >
        <BsChatDotsFill size={24} />
      </div>

      {chatVisible && <Chat />}
    </>
  );
}
