import { useState } from "react";

const FooterQuickForm = ({ ctaText = "Get a Free Quote" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    customer_message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxm2UpEgHPRHyBsUyQtDs8zZfZgQryDxhYG1iIEecfjx_NfUWhHUo2yVuLAnKG55-R3/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setStatus("✅ Thank you! We’ll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        customer_message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex align-items-center gap-2"
      style={{ flexWrap: "nowrap" }} // prevent wrapping
    >
      <input
        type="text"
        name="name"
        placeholder="👤 Name"
        className="form-control form-control-sm"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ minWidth: "100px", maxWidth: "150px", flexShrink: 1 }}
      />
      <input
        type="email"
        name="email"
        placeholder="📧 Email"
        className="form-control form-control-sm"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ minWidth: "120px", maxWidth: "200px", flexShrink: 1 }}
      />
      <input
        type="tel"
        name="phone"
        placeholder="✆ Phone"
        className="form-control form-control-sm"
        value={formData.phone}
        onChange={handleChange}
        required
        style={{ minWidth: "100px", maxWidth: "150px", flexShrink: 1 }}
      />
      <button
        type="submit"
        className="btn btn-outline-light bg-warning text-dark btn-sm fw-semibold"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        🔒 {ctaText} →
      </button>

      {status && <p className="mt-2 small text-center w-100">{status}</p>}
    </form>
  );
};

export default FooterQuickForm;
