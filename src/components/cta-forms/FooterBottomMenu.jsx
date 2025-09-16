// /src/components/cta-forms/FooterBottomMenu.jsx
import React from "react";

const FooterBottomMenu = () => {
  return (
    <div className="footer-bottom-menu mb-3">
      <div className="d-flex justify-content-between align-items-center">
        {/* Left side links */}
        <div className="d-flex gap-3">
          <a
            href="/security-insights"
            className="footer-link d-flex align-items-center text-decoration-none"
          >
            <i className="bi bi-journal-text me-1"></i>
            <small>
              <em>Security Articles</em>
            </small>
          </a>
          <a
            href="/security-products"
            className="footer-link d-flex align-items-center text-decoration-none"
          >
            <i className="bi bi-shield-check me-1"></i>
            <small>
              <em>Security Products</em>
            </small>
          </a>
        </div>

        {/* Vertical divider */}
        <div className="vertical-divider mx-3"></div>

        {/* Right side links */}
        <div className="d-flex gap-3">
          <a
            href="/"
            className="footer-link d-flex align-items-center text-decoration-none"
          >
            <i className="bi bi-house-door me-1"></i>
            <small>
              <em>Home</em>
            </small>
          </a>
          <a
            href="/rushrash-legal"
            className="footer-link d-flex align-items-center text-decoration-none"
          >
            <i className="bi bi-shield-lock me-1"></i>
            <small>
              <em>Legal</em>
            </small>
          </a>
          <a
            href="/contact"
            className="footer-link d-flex align-items-center text-decoration-none"
          >
            <i className="bi bi-envelope me-1"></i>
            <small>
              <em>Contact</em>
            </small>
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer-bottom-menu {
          padding: 0.5rem 0;
        }
        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          color: #f4b216ff;
        }
        .vertical-divider {
          width: 450px;
          height: 20px;
          background-color: #ffc107;
          background: linear-gradient(
            90deg,
            rgba(255, 193, 7, 0.1) 0%,
            rgba(255, 193, 7, 0.8) 50%,
            rgba(255, 193, 7, 0.1) 100%
          );
          border-radius: 10px;
          margin: 0 15px;
        }
        @media (max-width: 576px) {
          .d-flex.gap-3 {
            gap: 1rem !important;
          }
          .footer-bottom-menu {
            flex-direction: column;
            gap: 1rem;
          }
          .vertical-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default FooterBottomMenu;
