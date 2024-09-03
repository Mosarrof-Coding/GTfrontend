import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("https://your-backend-url.onrender.com");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("chatHistory", (history) => {
      setMessages(history);
      scrollToBottom();
    });
    socket.on("chatMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      scrollToBottom();
    });
    return () => {
      socket.off("chatMessage");
      socket.off("chatHistory");
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const msg = { message: input };
      socket.emit("chatMessage", msg);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-16 right-4 border-t-4 border-teal-600 bg-white rounded-lg shadow-lg w-80 flex flex-col min-h-36 max-h-60 p-4">
      <h2 className="text-rose-600 font-medium">Live Chat</h2>
      <div className="flex-1 overflow-y-auto Messagesspace-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-xs ${
              index % 2 === 0
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 self-start"
            }`}
          >
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <form onSubmit={handleSend} className="Messagesflex items-center gap-2">
        <textarea
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-lg bg-gray-100 border-none outline-none w-full"
          onKeyDown={(e) => e.key === "Enter" && handleSend(e)}
        />
      </form>
    </div>
  );
};

export default Chat;
