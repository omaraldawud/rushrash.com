// src/components/cta-forms/FooterQuickForm.js
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
      className="footer-quick-form d-flex flex-wrap justify-content-center gap-2 w-100"
    >
      <input
        type="text"
        name="name"
        placeholder="👤 Name"
        className="form-control form-control-sm"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="📧 Email"
        className="form-control form-control-sm"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="✆ Phone"
        className="form-control form-control-sm"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="btn btn-outline-light bg-warning text-dark btn-sm fw-semibold"
      >
        🔒 {ctaText} →
      </button>

      {status && <p className="mt-2 small text-center w-100">{status}</p>}

      <style jsx>{`
        .footer-quick-form input {
          min-width: 100px;
          max-width: 200px;
          flex: 1;
        }

        /* Mobile first: stack vertically */
        @media (max-width: 576px) {
          .footer-quick-form {
            flex-direction: column;
            align-items: stretch;
          }
          .footer-quick-form input,
          .footer-quick-form button {
            width: 100%;
          }
        }
      `}</style>
    </form>
  );
};

export default FooterQuickForm;
