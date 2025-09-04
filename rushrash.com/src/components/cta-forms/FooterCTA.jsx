// src/components/cta-forms/FooterCTA.tsx
//
import FooterQuickForm from "./FooterQuickForm";

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
          <FooterQuickForm ctaText="Submit Info" />
        </div>
      </div>
    </footer>
  );
}
