import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/MainMenu.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MainMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const menuItemStyle = {
    borderRadius: "6px",
    padding: "0.5rem 1rem",
    margin: "0.15rem 0",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
  };

  const getLinkClass = (path) => {
    const isHomeLink = path === "/";
    const isActive =
      location.pathname === path || (isHomeLink && location.pathname === "/");
    return `dropdown-item${isActive ? " active" : ""}`;
  };

  const getDropdownClass = (paths) => {
    const isActive = paths.some((path) =>
      location.pathname.toLowerCase().includes(path.toLowerCase())
    );
    return `nav-link dropdown-toggle${
      isActive ? " nav-link-parent-active" : ""
    }`;
  };

  // helper to close dropdown programmatically
  const closeParentDropdown = (e) => {
    const dropdownMenu = e.target.closest(".dropdown-menu");
    if (dropdownMenu) {
      const dropdownEl = dropdownMenu.closest(".dropdown");
      if (dropdownEl) {
        const bsDropdown = bootstrap.Dropdown.getInstance(dropdownEl);
        if (bsDropdown) {
          bsDropdown.hide();
        }
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    const handleRouteChange = () => {
      setExpanded(false);
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("popstate", handleRouteChange);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [expanded, location]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light py-1"
      ref={navRef}
      style={{
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative", // Ensure proper positioning context
        zIndex: 1100, // Set a high z-index to ensure it appears above other elements
      }}
    >
      <div className="container-fluid justify-content-end">
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto small">
            {/* Home */}
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link${
                  location.pathname === "/" ? " active" : ""
                }`}
                onClick={() => setExpanded(false)}
              >
                Home
              </Link>
            </li>

            {/* Services */}
            {/* Services / Mega Menu */}
            <li className="nav-item dropdown">
              <span
                className={getDropdownClass([
                  "/services/cctv-installation",
                  "/services/access-control",
                  "/services/home-surveillance",
                  "/services/it-services",
                  "/services/pos-installation",
                  "/services/security-consultation",
                ])}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </span>
              <ul
                className="dropdown-menu p-3 shadow rounded-3 mega-menu dropdown-menu-end border-0"
                style={{
                  borderLeft: "4px solid #0d6efd",
                  width: "700px",
                  zIndex: 1001,
                }}
              >
                <div
                  className="mega-menu-title mb-3 px-2"
                  style={{
                    paddingBottom: "0.5rem",
                    borderBottom: "2px dashed #dee2e6",
                  }}
                >
                  <h6 className="m-0">
                    <i
                      className="bi bi-gear-fill me-2"
                      style={{ fontSize: "1.1rem", color: "#0d6efd" }}
                    ></i>
                    Our Professional Services
                  </h6>
                </div>

                <div className="row gx-4">
                  {/* Column 1 */}
                  <div className="col-6 col-lg-4">
                    <li>
                      <Link
                        to="/services/cctv-installation"
                        className={getLinkClass("/services/cctv-installation")}
                        style={menuItemStyle}
                        onClick={closeParentDropdown}
                      >
                        <i className="bi bi-camera-video me-2"></i> CCTV
                        Installation & Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/access-control"
                        className={getLinkClass("/services/access-control")}
                        style={menuItemStyle}
                        onClick={closeParentDropdown}
                      >
                        <i className="bi bi-door-closed me-2"></i> Access
                        Control Systems
                      </Link>
                    </li>
                  </div>

                  {/* Column 2 */}
                  <div className="col-6 col-lg-4">
                    <li>
                      <Link
                        to="/services/home-surveillance"
                        className={getLinkClass("/services/home-surveillance")}
                        style={menuItemStyle}
                        onClick={closeParentDropdown}
                      >
                        <i className="bi bi-house-door me-2"></i> Home
                        Surveillance Systems
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/it-services"
                        className={getLinkClass("/services/it-services")}
                        style={menuItemStyle}
                        onClick={closeParentDropdown}
                      >
                        <i className="bi bi-laptop me-2"></i> IT Services
                      </Link>
                    </li>
                  </div>

                  {/* Column 3 */}
                  <div className="col-6 col-lg-4">
                    <li>
                      <Link
                        to="/services/pos-installation"
                        className={getLinkClass("/services/pos-installation")}
                        style={menuItemStyle}
                        onClick={closeParentDropdown}
                      >
                        <i className="bi bi-bag-check me-2"></i> Point-of-Sale
                        Installation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/security-consultation"
                        className={getLinkClass(
                          "/services/security-consultation"
                        )}
                        style={menuItemStyle}
                        onClick={closeParentDropdown}
                      >
                        <i className="bi bi-shield-check me-2"></i> Security
                        Consultation
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            {/* Residential Dropdown */}
            <li className="nav-item">
              <Link
                to="/residential-cctv-security"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Residential
              </Link>
            </li>

            {/* Commercial */}
            <li className="nav-item">
              <Link
                to="/commercial-cctv-security"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Commercial
              </Link>
            </li>

            {/* About / Mega Menu */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </span>
              <ul
                className="dropdown-menu p-3 shadow rounded-3 mega-menu dropdown-menu-end border-0"
                style={{
                  borderLeft: "4px solid #0d6efd !important",
                  width: "600px",

                  zIndex: 1001, // Ensure dropdown appears above the menu
                }}
              >
                <div
                  className="mega-menu-title mb-3 px-2"
                  style={{
                    paddingBottom: "0.5rem",
                    borderBottom: "2px dashed #dee2e6",
                  }}
                >
                  <h6 className="m-0">
                    <i
                      className="bi bi-door-open me-2"
                      style={{ fontSize: "1.1rem", color: "#0d6efd" }}
                    ></i>
                    Everything You Need For Garage Doors & Openers!
                  </h6>
                </div>
                <div className="row gx-4">
                  {/* Column 1 */}
                  <div className="col-6 col-lg-4">
                    <li>
                      <Link
                        to="/about-rushrash-inc"
                        className={getLinkClass("/about-rushrash-inc")}
                        style={{
                          borderRadius: "6px",
                          padding: "0.5rem 1rem",
                          margin: "0.15rem 0",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i className="bi bi-building me-2"></i> Our Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cctv-testimonials"
                        className={getLinkClass("/cctv-testimonials")}
                        style={{
                          borderRadius: "6px",
                          padding: "0.5rem 1rem",
                          margin: "0.15rem 0",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i className="bi bi-chat-quote me-2"></i> Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cctv-services"
                        className={getLinkClass("/cctv-services")}
                        style={{
                          borderRadius: "6px",
                          padding: "0.5rem 1rem",
                          margin: "0.15rem 0",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i className="bi bi-geo-alt me-2"></i> Service Area
                      </Link>
                    </li>
                  </div>

                  {/* Column 2 */}
                  <div className="col-6 col-lg-4">
                    <li>
                      <Link
                        to="/cctv-coupons"
                        className={getLinkClass("/cctv-coupons")}
                        style={{
                          borderRadius: "6px",
                          padding: "0.5rem 1rem",
                          margin: "0.15rem 0",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i className="bi bi-tag me-2"></i> Specials
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cctv-safety-tips"
                        className={getLinkClass("/cctv-safety-tips")}
                        style={{
                          borderRadius: "6px",
                          padding: "0.5rem 1rem",
                          margin: "0.15rem 0",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i className="bi bi-shield-check me-2"></i> Safety Tips
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cctv-faqs"
                        className={getLinkClass("/cctv-faqs")}
                        style={{
                          borderRadius: "6px",
                          padding: "0.5rem 1rem",
                          margin: "0.15rem 0",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i className="bi bi-question-circle me-2"></i> FAQs
                      </Link>
                    </li>
                  </div>

                  {/* Column 3 */}
                  <div className="col-12 col-lg-4">
                    <li></li>
                    <li>
                      <Link
                        to="/legal-page"
                        className={getLinkClass("/legal-page")}
                        style={{
                          borderRadius: "6px",
                          padding: "0.5rem 1rem",
                          margin: "0.15rem 0",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i className="bi bi-c-circle me-2"></i> Copyright
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/legal-page"
                        className={getLinkClass("/legal-page")}
                        style={{
                          borderRadius: "6px",
                          padding: "0.5rem 1rem",
                          margin: "0.15rem 0",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i className="bi bi-shield-lock me-2"></i> Privacy
                        Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/legal-page"
                        className={getLinkClass("/legal-page")}
                        style={{
                          borderRadius: "6px",
                          padding: "0.5rem 1rem",
                          margin: "0.15rem 0",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <i className="bi bi-file-text me-2"></i> Terms of
                        Service
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link
                to="/contact-rushrash-inc"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
