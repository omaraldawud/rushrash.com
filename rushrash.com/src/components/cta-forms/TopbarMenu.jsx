// src/components/layout/TopbarMen.tsx
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

  return (
    <div
      className="utility-bar fixed-top d-flex justify-content-between align-items-center py-2 fw-semibold"
      style={{
        backgroundColor: "#2c3e50",
        zIndex: 1030,
      }}
    >
      {/* Left: Residential | Business */}
      <div className="position-relative w-100">
        {/* Home icon in top left corner */}
        <div
          className="d-inline-flex align-items-center p-1 justify-content-center bg-info rounded-circle"
          style={{ width: "32px", height: "32px" }}
        >
          <a href="/">
            <i className="bi bi-house-door text-light fs-4"></i>
          </a>
        </div>

        {/* Centered security links */}
        <div className="d-flex justify-content-center align-items-center small">
          <a
            href="/residential-cctv-security"
            className={`residential-link ${
              isResidential ? "active-link" : ""
            } text-decoration-none d-flex `}
          >
            <i className="bi bi-shield-lock me-1 text-warning"></i>
            {isResidential ? "HOME SECURITY" : "Home Security"}
          </a>

          <span className="text-light mx-2 me-3">||</span>

          <a
            href="/commercial-cctv-security"
            className={`business-link ${
              isCommercial ? "active-link" : ""
            } text-decoration-none d-flex `}
          >
            <i className="bi bi-building me-1 text-warning"></i>
            {isCommercial ? "BUSINESS SECURITY" : "Business Security"}
          </a>
        </div>
      </div>

      {/* Right: Phone + Links + Social */}
      <div className="d-flex align-items-center fw-bold">
        {/* Phone Number - Always show */}
        <a
          href={`tel:${companyInfo.phoneNumbers.tollFree.replace(/\D/g, "")}`}
          className="text-decoration-none me-2 mt-2 d-flex align-items-center text-nowrap phone-cta"
        >
          <i className="bi bi-telephone text-warning me-2"></i>
          <span className="text-light">
            {companyInfo.phoneNumbers.tollFree}
          </span>
        </a>

        {/* Desktop-only nav links */}
        <div className="d-none d-md-flex align-items-center me-4">
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

        {/* Mobile-only nav links */}
        <div className="d-flex d-md-none align-items-center">
          <HashLink
            smooth
            to="/contact-rushrash-inc#case-studies"
            className="text-nowrap text-success text-decoration-none me-3 nav-link"
          >
            <i className="bi bi-book me-2 text-success"></i>
            Projects
          </HashLink>

          <NavLink
            to="/contact-rushrash-inc"
            className={({ isActive }) =>
              "text-nowrap text-light text-decoration-none nav-link me-3" +
              (isActive ? " active" : "")
            }
          >
            <i className="bi bi-person me-2 text-warning"></i>
            Contact
          </NavLink>
        </div>

        {/* Social links (hide on mobile if needed) */}
        <div className="border-start border-1 border-warning ps-3 d-none d-md-block">
          <SocialProfiles />
        </div>
      </div>
    </div>
  );
}
