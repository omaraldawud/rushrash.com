// src/components/cta-forms/FooterCTA.tsx
import FooterQuickForm from "./FooterQuickForm";

export default function FooterCTA() {
  return (
    <footer
      className="footer-cta text-light py-4 mt-3"
      style={{
        background: "linear-gradient(90deg, #0a1a2f, #0d6efd)",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-3 footer-cta-title">
          Ready to Secure Your Property?
        </h2>
        <p className="lead mb-4 footer-cta-text">
          Get in touch with our experts today for a free consultation and
          tailored security solutions.
        </p>
        <div className="d-flex justify-content-center">
          <FooterQuickForm ctaText="Submit Info" />
        </div>
      </div>

      <style jsx>{`
        /* Adjust heading & text size on small devices */
        @media (max-width: 576px) {
          .footer-cta-title {
            font-size: 1.4rem;
          }
          .footer-cta-text {
            font-size: 0.9rem;
          }
          .footer-cta {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
