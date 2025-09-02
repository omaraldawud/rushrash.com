import { useLocation } from "react-router-dom";
import companyInfo from "../../assets/data/rr_company_ds";
import SocialProfiles from "../sections/SocialProfiles";

export default function TopbarMen() {
  const location = useLocation();
  const isResidential = location.pathname.includes(
    "/residential-cctv-security"
  );
  const isCommercial = location.pathname.includes("/commercial-cctv-security");

  // Scanline color based on route
  let scanlineColor = "#eef0f4ff";

  return (
    <div
      className="utility-bar fixed-top d-flex justify-content-between align-items-center py-2 fw-semibold"
      style={{
        backgroundColor: "#2c3e50", // Add background color
        zIndex: 1030, // Higher z-index
      }}
    >
      {" "}
      {/* Left: Residential | Business */}
      <div className="left-links d-flex align-items-center small">
        <a
          href="/residential-cctv-security"
          className={`residential-link ${isResidential ? "active-link" : ""}`}
        >
          <i className="bi bi-house-door-fill text-warning me-1"></i>
          {isResidential ? "HOME SECURITY" : "Home Security"}
        </a>
        <span className="text-light mx-2">|||</span>
        <a
          href="/commercial-cctv-security"
          className={`business-link ${isCommercial ? "active-link" : ""}`}
        >
          <i className="bi bi-building me-1 text-warning"></i>
          {isCommercial ? "BUSINESS SECURITY" : "Business Security"}
        </a>
      </div>
      {/* Right: Phone + Links + Social */}
      <div className="d-flex align-items-center fw-bold">
        {/* Phone Number - Emphasized */}
        <a
          href={`tel:${companyInfo.phoneNumbers.tollFree.replace(/\D/g, "")}`}
          className="text-decoration-none me-4 d-flex align-items-center text-nowrap phone-cta"
        >
          <i className="bi bi-telephone-fill text-warning me-2"></i>
          <span className="text-light">
            {companyInfo.phoneNumbers.tollFree}
          </span>
        </a>

        {/* Navigation Links with Separators */}
        <div className="d-flex align-items-center me-4">
          <a
            href="/contact-rushrash-inc"
            className="text-nowrap text-light text-decoration-none me-3 nav-link"
          >
            Contact
          </a>
          <span className="text-muted">|</span>
          <a
            href="/about-rushrash-inc"
            className="text-nowrap text-light text-decoration-none mx-3 nav-link"
          >
            About
          </a>
          <span className="text-muted">|</span>
          <a
            href="#"
            className="text-nowrap text-mute text-decoration-none ms-3"
          >
            Login
          </a>
        </div>

        {/* Social Links */}
        <SocialProfiles />
      </div>
    </div>
  );
}
