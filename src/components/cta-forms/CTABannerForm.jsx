import { useState } from "react";

const CTABannerForm = ({ ctaText = "Get a Free Quote" }) => {
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
          mode: "no-cors", // required for Google Apps Script
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
    <div className="cta-form-container p-3 rounded-2 shadow-sm bg-light">
      <h6 className="fw-bold text-dark mb-3 modern-cta-subtitle">
        Let&apos;s Secure Your Space Together
      </h6>

      <form onSubmit={handleSubmit} className="row g-2">
        <div className="col-12 col-sm-6">
          <input
            type="text"
            name="name"
            placeholder="👤 Name"
            className="form-control form-control-sm"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 col-sm-6">
          <input
            type="email"
            name="email"
            placeholder="📧 Email"
            className="form-control form-control-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 col-sm-6">
          <input
            type="tel"
            name="phone"
            placeholder="✆ Phone"
            className="form-control form-control-sm"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <textarea
            name="customer_message"
            placeholder="💬 How can we help?"
            rows={2}
            className="form-control form-control-sm"
            value={formData.customer_message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-danger w-100 d-flex align-items-center justify-content-center py-2 fw-bold"
          >
            <span className="me-2">🔒</span>
            {ctaText}
            <span className="ms-2">→</span>
          </button>
        </div>
      </form>

      {status && <p className="mt-2 small text-center text-muted">{status}</p>}
    </div>
  );
};

export default CTABannerForm;
