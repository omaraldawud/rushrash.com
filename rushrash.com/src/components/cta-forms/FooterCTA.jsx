// src/components/cta-forms/FooterCTA.tsx
//

import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <footer
      className="footer-cta text-light py-3 mt-2"
      style={{
        background: "linear-gradient(90deg, #0a1a2f, #0d6efd)",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Ready to Secure Your Property?</h2>
        <p className="lead mb-4">
          Get in touch with our experts today for a free consultation and
          tailored security solutions.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link
            to="/contact-rushrash-inc"
            className="btn btn-warning btn-lg fw-semibold text-dark"
          >
            Contact Us
          </Link>
          <Link
            to="/about-rushrash-inc"
            className="btn btn-outline-light btn-lg fw-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </footer>
  );
}
