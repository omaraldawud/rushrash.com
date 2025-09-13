// /src/components/layout/CopyRight.jsx
//

export default function CopyRightSection() {
  return (
    <div
      className="footer-bottom mt-4 pt-3 text-end border-top border-light"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.25)", // subtle divider
      }}
    >
      {" "}
      <a
        href="/rushrash-legal"
        className="footer-link d-flex align-items-center"
      >
        <i className="bi bi-shield-lock me-1"></i>
        <small>
          <em>Legal</em>
        </small>
      </a>
      <small className="d-flex justify-content-end align-items-center gap-2">
        <em>
          {" "}
          <i
            className="bi bi-shield-lock-fill me-2"
            style={{ color: "#f4b216ff" }}
          ></i>
          &copy; {new Date().getFullYear()} Rushrash Inc. | All rights reserved.
          |
          <a
            href="https://hostitwise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light text-decoration-none ms-1 hover-gold d-inline-flex align-items-center"
          >
            <i
              className="bi bi-cloud-check-fill mx-2"
              style={{ color: "#ffd166" }}
            ></i>
            Website Built by HostItWise
          </a>
        </em>
      </small>
    </div>
  );
}
