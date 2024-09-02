import { useState, useEffect } from "react";
import axios from "axios";

const MessageTransport = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        "https://g-backend-ut3w.onrender.com/api/messages",
        {
          headers: {
            Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        }
      );
      setMessages(res.data.data);
    } catch (err) {
      setError("Failed to load messages.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (message.trim()) {
      setSending(true);
      setError("");
      setSuccess("");

      try {
        const res = await axios.post(
          "https://g-backend-ut3w.onrender.com/api/messages",
          { data: { content: message } },
          {
            headers: {
              Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status === 200) {
          setSuccess("Message sent successfully!");
          setMessage(""); // Clear the input after sending
          fetchMessages(); // Refetch messages after sending a new one
        } else {
          setError("Failed to send message.");
        }
      } catch (err) {
        setError("An error occurred while sending the message.");
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Message Board
      </h2>

      {/* Message Input Section */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        disabled={sending}
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <button
        onClick={handleSendMessage}
        className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors ${
          sending ? "opacity-50" : ""
        }`}
        disabled={sending}
      >
        {sending ? "Sending..." : "Send Message"}
      </button>

      {/* Message Display Section */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          Received Messages
        </h3>
        {loading && <p>Loading messages...</p>}
        {!loading && messages.length === 0 && <p>No messages found.</p>}
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li key={msg.id} className="p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="text-gray-800">{msg.attributes.content}</p>
              <p className="text-xs text-gray-500 mt-2">
                Sent on: {new Date(msg.attributes.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessageTransport;
