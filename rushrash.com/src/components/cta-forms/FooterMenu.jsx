// src/components/layout/FooterMenu.tsx
export default function FooterMenu() {
  return (
    <div className="footer-menu-wrapper">
      <nav className="footer-menu d-flex flex-wrap justify-content-end gap-3">
        <a href="/" className="footer-link d-flex align-items-center">
          <i className="bi bi-house-door me-1"></i> Home
        </a>
        <a
          href="/contact-rushrash-inc"
          className="footer-link d-flex align-items-center"
        >
          <i className="bi bi-telephone me-1"></i> Contacts
        </a>
        <a href="/" className="footer-link d-flex align-items-center">
          <i className="bi bi-camera-video me-1"></i> CCTV Systems
        </a>
        <a href="/" className="footer-link d-flex align-items-center">
          <i className="bi bi-pc me-1"></i> IT & PoS
        </a>
        <a href="/" className="footer-link d-flex align-items-center">
          <i className="bi bi-key-fill me-1"></i> Access Control
        </a>
        <a href="/legal-page" className="footer-link d-flex align-items-center">
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
        }

        .footer-link {
          color: #ffd166;
          font-size: 0.7rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
          margin-right: 10px;
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
      `}</style>
    </div>
  );
}
