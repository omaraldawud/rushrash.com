import { useLocation, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//components
import companyInfo from "../../assets/data/rr_company_ds";
import SocialProfiles from "../sections/SocialProfiles";
import Logo from "../layout/Logo";

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
        <Logo logoheight="30px" />
        <a
          href="/residential-cctv-security"
          className={`residential-link ${
            isResidential ? "active-link" : ""
          } text-decoration-none d-flex align-items-center`}
        >
          <i className="bi bi-house-door-fill text-warning me-1"></i>
          {isResidential ? "HOME SECURITY" : "Home Security"}
        </a>

        <span className="text-light mx-2">|||</span>

        <a
          href="/commercial-cctv-security"
          className={`business-link ${
            isCommercial ? "active-link" : ""
          } text-decoration-none d-flex align-items-center`}
        >
          <i className="bi bi-building me-1 text-warning"></i>
          {isCommercial ? "BUSINESS SECURITY" : "Business Security"}
        </a>
      </div>{" "}
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
          <HashLink
            smooth
            to="/contact-rushrash-inc#case-studies"
            className="text-nowrap text-success text-decoration-none me-3 nav-link"
          >
            <i className="bi bi-book me-2 text-success"></i>
            Success Stories
          </HashLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              "text-nowrap text-light text-decoration-none me-3 nav-link" +
              (isActive ? " active" : "")
            }
          >
            <i className="bi bi-house me-2 text-warning"></i>
            HOME
          </NavLink>

          <NavLink
            to="/contact-rushrash-inc"
            className={({ isActive }) =>
              "text-nowrap text-light text-decoration-none me-3 nav-link" +
              (isActive ? " active" : "")
            }
          >
            <i className="bi bi-person me-2 text-warning"></i>
            Contact
          </NavLink>

          <span className="text-muted">|</span>

          <NavLink
            to="/about-rushrash-inc"
            className={({ isActive }) =>
              "text-nowrap text-light text-decoration-none mx-3 nav-link" +
              (isActive ? " active" : "")
            }
          >
            <i className="bi bi-info-circle me-2 text-warning"></i>
            About
          </NavLink>

          <span className="text-muted">|</span>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              "text-nowrap text-light text-decoration-none ms-3 nav-link" +
              (isActive ? " active" : "")
            }
          >
            <i className="bi bi-box-arrow-in-right me-2 text-warning"></i>
            Login
          </NavLink>
        </div>

        {/* Social Links */}
        <div className="border-start border-1 border-warning ps-3">
          <SocialProfiles />
        </div>
      </div>
    </div>
  );
}
