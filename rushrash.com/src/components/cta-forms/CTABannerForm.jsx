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
    <div className="cta-form-container bg-white p-3 rounded-3 shadow-sm mb-3">
      <div className="modern-cta-header mb-3">
        <div className="cta-pulse-dot"></div>
        <h6 className="modern-cta-title">
          Let&apos;s Secure Your Space{" "}
          <span className="cta-highlight">Together</span>
        </h6>
      </div>

      <form onSubmit={handleSubmit} className="row g-2">
        <div className="col-12 col-sm-6">
          <input
            type="text"
            name="name"
            placeholder="👤Your Name"
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
            placeholder="✆ Phone Number"
            className="form-control form-control-sm"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <textarea
            name="customer_message"
            placeholder="💬How Can We Help? ..."
            rows={2}
            className="form-control form-control-lg"
            value={formData.customer_message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn w-100 d-flex align-items-center justify-content-center py-2 fw-bold"
            style={{
              backgroundColor: "#DA3747",
              color: "#fff",
              border: "none",
            }}
          >
            <span className="btn-icon me-2">🔒</span>
            {ctaText}
            <span className="btn-arrow ms-2">→</span>
          </button>
        </div>
      </form>

      {status && <p className="mt-2 small text-center">{status}</p>}
    </div>
  );
};

export default CTABannerForm;
