// src/components/layout/FooterMenu.tsx
export default function FooterMenu() {
  return (
    <div className="footer-menu-wrapper">
      <nav className="footer-menu d-flex flex-wrap justify-content-center justify-content-md-end gap-2 gap-md-3">
        <a href="/" className="footer-link d-flex align-items-center">
          <i className="bi bi-house-door me-1"></i> Home
        </a>
        <a
          href="/contact-rushrash-inc"
          className="footer-link d-flex align-items-center"
        >
          <i className="bi bi-telephone me-1"></i> Contacts
        </a>
        <a
          href="/services/cctv-installation"
          className="footer-link d-flex align-items-center"
        >
          <i className="bi bi-camera-video me-1"></i> CCTV Systems
        </a>
        <a
          href="/services/it-services"
          className="footer-link d-flex align-items-center"
        >
          <i className="bi bi-pc me-1"></i> IT & Network Setup
        </a>
        <a
          href="/services/access-control"
          className="footer-link d-flex align-items-center"
        >
          <i className="bi bi-key-fill me-1"></i> Access Control
        </a>
        <a
          href="/rushrash-legal"
          className="footer-link d-flex align-items-center"
        >
          <i className="bi bi-shield-lock me-1"></i>
          <small>
            <em>Legal</em>
          </small>
        </a>
      </nav>
      <hr className="footer-divider" />
      <style jsx>{`
        .footer-menu-wrapper {
          text-align: center;
          padding: 0.5rem 0;
        }

        .footer-link {
          color: #ffd166;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover,
        .footer-link:hover em {
          color: #ffffff;
          text-decoration: underline;
        }

        .footer-divider {
          border-color: rgba(255, 254, 254, 0.4);
          margin: 0.5rem auto 0;
          width: 80%;
        }

        /* On very small screens, make links full-width stacked */
        @media (max-width: 576px) {
          .footer-menu {
            flex-direction: column;
            align-items: center;
            gap: 0.4rem;
          }
        }
      `}</style>
    </div>
  );
}
