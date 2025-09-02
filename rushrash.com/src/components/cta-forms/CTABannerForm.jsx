import { useState } from "react";

const CTABannerForm = ({ ctaText = "Get a Free Quote" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="cta-form-container bg-white p-3 rounded-3 shadow-sm mb-3">
      <div className="modern-cta-header mb-3">
        <div className="cta-pulse-dot"></div>
        <h6 className="modern-cta-title">
          Let's Secure Your Space {}
          <span className="cta-highlight">Together</span>
        </h6>
      </div>
      <form onSubmit={handleSubmit} className="row g-2">
        <div className="col-12 col-sm-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
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
            placeholder="Email"
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
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            title="Format: 123-456-7890"
            className="form-control form-control-sm"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 col-sm-6">
          <div className="service-select-wrapper">
            <select
              name="service"
              className="form-select form-select-sm custom-service-select"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">📋 Select a Service</option>
              <option disabled className="section-header">
                CCTV Solutions
              </option>
              <option value="cctv-residential">🏡 Residential CCTV</option>
              <option value="cctv-commercial">🏢 Commercial CCTV</option>
              <option disabled className="section-header">
                Security Systems
              </option>
              <option value="access-control">🔒 Access Control</option>
              <option disabled className="section-header">
                Business Tools
              </option>
              <option value="pos">💳 POS Systems</option>
              <option value="maintenance">⚡ IT Services</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-impact btn-lg w-100 d-flex align-items-center justify-content-center py-2 fw-bold"
          >
            <span className="btn-icon">🔒</span>
            {ctaText}
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CTABannerForm;
