import { useState, useEffect, useRef } from "react";
import Logo from "../layout/Logo";
import "../../assets/css/chatbot.css";
import servicesList from "./servicesList";
import offersList from "./offersList";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // minimized by default

  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const toggleChat = () => setIsOpen(!isOpen);

  const showServiceInfo = (service) => {
    const filteredOffers = offersList.filter((o) => o.serviceId === service.id);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: service.name },
      { from: "bot", text: `🔹 ${service.name}: ${service.desc}` },
      ...filteredOffers.map((o) => ({
        from: "bot",
        text: `🔹 ${o.name}\nPrice: $${o.price}\nDuration: ${o.duration}`,
      })),
    ]);
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setLoading(true);

    const lower = text.toLowerCase();
    let handled = false;

    for (const service of servicesList) {
      if (
        service.name.toLowerCase() === lower ||
        service.keywords?.some((k) => lower.includes(k))
      ) {
        showServiceInfo(service);
        handled = true;
        break;
      }
    }

    if (!handled) {
      try {
        const res = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text }),
        });
        const data = await res.json();
        setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
      } catch (err) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "⚠️ Error connecting to chatbot." },
        ]);
      }
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="chatbot">
      {/* Header */}
      <div className="chatbot-header" onClick={toggleChat}>
        {/* Row 1: Logo + Toggle */}
        <div className="chatbot-header-row1">
          <Logo className="chatbot-logo" />
          <span className="chat-toggle">{isOpen ? "–" : "+"}</span>
        </div>

        {/* Row 2: Title */}
        <div className="chatbot-header-row2">
          <span className="chatbot-title">RushRash Chat</span>
        </div>
      </div>

      {/* Chat content */}
      {isOpen && (
        <>
          <div className="chat-window" ref={chatWindowRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-message ${m.from}`}>
                <span className="chat-bubble">{m.text}</span>
              </div>
            ))}
            {loading && (
              <div className="chat-message bot">⏳ Bot is typing...</div>
            )}
          </div>

          <div className="chat-input-container">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Type a message..."
              className="chat-input"
            />
            <button
              onClick={() => sendMessage(input)}
              className="chat-send-btn"
            >
              Send{" "}
              <i className="bi bi-send-fill" style={{ marginLeft: "6px" }}></i>
            </button>
          </div>
        </>
      )}

      {/* Always visible service buttons */}
      <div className="service-buttons">
        {servicesList.map((s) => (
          <button key={s.id} onClick={() => showServiceInfo(s)}>
            <i
              className={`bi ${s.icon} text-warning`}
              style={{ marginRight: "6px" }}
            ></i>
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}
