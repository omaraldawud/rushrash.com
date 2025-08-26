export default function FooterMenu() {
  return (
    <nav className="d-flex flex-wrap justify-content-md-around gap-2 gap-md-3">
      <a href="/" className="footer-link text-decoration-none fw-medium small">
        Home
      </a>{" "}
      <a
        href="/garage_door_contactus.html"
        className="footer-link text-decoration-none fw-medium small"
      >
        Contacts
      </a>
      <a
        href="/garage_door_services.html"
        className="footer-link text-decoration-none fw-medium small"
      >
        Access Control
      </a>
      <a
        href="/garage_door_repair.html"
        className="footer-link text-decoration-none fw-medium small"
      >
        NVRs / DVRs
      </a>
      <a
        href="/garage_door_openers.html"
        className="footer-link text-decoration-none fw-medium small"
      >
        Technology CCTV
      </a>
      <a
        href="/garage_door_service_area.html"
        className="footer-link text-decoration-none fw-medium small"
      >
        Service Area
      </a>
      <a
        href="/legal-page.html"
        className="footer-link text-decoration-none fw-medium small"
      >
        <small>
          <em>LEGAL (Copyright | Privacy Policy | Terms of Service)</em>
        </small>
      </a>
      <style jsx>{`
        .footer-link {
          color: #3d96d6;
          font-size: 0.6rem;
          transition: color 0.2s ease;
        }

        .footer-link:hover,
        .footer-link:hover em {
          color: #f8f9fa;
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
