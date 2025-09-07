import { useRef, useState } from "react";
import { BiUser, BiPhone, BiEnvelope, BiChat } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/css/ContactPage.css";

export default function ContactForm() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const customer_message = formData.get("message");

    // Optional email validation
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      toast.error("❌ Please enter a valid email address.");
      return;
    }

    setSending(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxm2UpEgHPRHyBsUyQtDs8zZfZgQryDxhYG1iIEecfjx_NfUWhHUo2yVuLAnKG55-R3/exec",
        {
          method: "POST",
          mode: "no-cors", // required for Google Apps Script
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, customer_message }),
        }
      );

      toast.success("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="contact-form-container p-4 rounded-3 shadow-sm border">
        <h3 className="h4 mb-4 text-dark">
          <BiChat className="me-2 text-primary" />
          Reach us - FREE Consultation & Estimate
        </h3>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label small text-muted">
              <BiUser className="me-2" /> Full Name *
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="name"
              name="name"
              required
              placeholder="John Smith"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label small text-muted">
              <BiPhone className="me-2" /> Phone Number *
            </label>
            <input
              type="tel"
              className="form-control form-control-lg"
              id="phone"
              name="phone"
              required
              placeholder="(123) 456-7890"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label small text-muted">
              <BiEnvelope className="me-2" /> Email Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label small text-muted">
              <BiChat className="me-2" /> How Can We Help? *
            </label>
            <textarea
              className="form-control form-control-lg"
              id="message"
              name="message"
              rows={3}
              required
              placeholder="Describe your issue..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 py-2 fw-semibold"
            disabled={sending}
          >
            {sending ? "Sending..." : "Get Free Estimate"}
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "350px", margin: "1rem" }}
      />
    </>
  );
}
