import { useState } from "react";
import axios from "axios";
import "../../assets/css/Chatbot.css";
import Logo from "../layout/Logo";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };
    setChatLog([...chatLog, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      console.log("Calling Api ...");
      const res = await axios.post("/api/chat", { message });
      console.log("Reply:", res.data.reply);

      const reply = res.data.reply;

      setChatLog((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setChatLog((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <div className="chatbot-header-row1">
          <Logo logoWidth="36px" logoheight="36px" />
          <div className="chat-toggle">−</div>
        </div>
        <div className="chatbot-header-row2">
          <div className="chatbot-title">RushRash Virtual Assistant</div>
        </div>
      </div>

      <div className="chat-window">
        {chatLog.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.role === "user" ? "user" : "bot"}`}
          >
            <div className="chat-bubble">{msg.content}</div>
          </div>
        ))}
        {loading && (
          <div className="chat-message bot">
            <div className="chat-bubble">Typing...</div>
          </div>
        )}
      </div>

      <div className="chat-input-container">
        <textarea
          className="chat-input"
          rows="2"
          placeholder="Ask me about services, offers, brands, or FAQs..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="chat-send-btn"
          onClick={handleSend}
          disabled={loading}
        >
          {loading ? "⏳" : "➤"}
        </button>
      </div>
    </div>
  );
}
