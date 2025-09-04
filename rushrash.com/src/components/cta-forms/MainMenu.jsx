import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/MainMenu.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../layout/Logo";

const MainMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const menuItemStyle = {
    borderRadius: "6px",
    padding: "0.5rem 1rem",
    margin: "0.25rem 0",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
  };

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [expanded]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-2"
      ref={navRef}
      style={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        position: "relative",
        zIndex: 1100,
        backgroundColor: "#fff",
      }}
    >
      <div className="container-fluid justify-content-between">
        {/* Logo */}
        <div>
          <Logo logoWidth="30px" />
        </div>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            {/* Services Mega Menu */}
            <li className="nav-item dropdown">
              <span
                className={getDropdownClass([
                  "/services/cctv-installation",
                  "/services/access-control",
                  "/services/it-services",
                  "/services/pos-installation",
                ])}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
              >
                Services
              </span>
              <ul
                className="dropdown-menu dropdown-menu-end p-4 shadow-lg rounded-3 border-0"
                style={{
                  minWidth: "650px",
                  backgroundColor: "#f8f9fa",
                  borderLeft: "4px solid #0d6efd",
                  zIndex: 1001,
                }}
              >
                <div className="row gx-3">
                  {/* Column 1: Links */}
                  <div className="col-4">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link
                          to="/services/cctv-installation"
                          className={getLinkClass(
                            "/services/cctv-installation"
                          )}
                          style={menuItemStyle}
                        >
                          <i className="bi bi-camera-video me-2"></i> CCTV
                          Installation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/access-control"
                          className={getLinkClass("/services/access-control")}
                          style={menuItemStyle}
                        >
                          <i className="bi bi-door-closed me-2"></i> Access
                          Control
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/it-services"
                          className={getLinkClass("/services/it-services")}
                          style={menuItemStyle}
                        >
                          <i className="bi bi-laptop me-2"></i> IT Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/pos-installation"
                          className={getLinkClass("/services/pos-installation")}
                          style={menuItemStyle}
                        >
                          <i className="bi bi-bag-check me-2"></i> POS
                          Installation
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Info box */}
                  <div className="col-8 info-box">
                    <h6 className="fw-bold text-dark mb-2">
                      <i className="bi bi-question-circle text-warning me-2"></i>
                      Not Sure Which Service?
                    </h6>
                    <p className="small text-muted mb-3">
                      Let us help you find the right CCTV, IT, or security
                      solution tailored to your business or home.
                    </p>
                    <a
                      href="/contact-rushrash-inc"
                      className="btn btn-warning btn-sm fw-semibold"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </ul>
            </li>

            {/* About Corporate Mega Menu */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                }}
              >
                About Rushrash
              </span>
              <ul
                className="dropdown-menu dropdown-menu-end p-4 shadow-lg rounded-3 border-0"
                style={{
                  minWidth: "600px",
                  backgroundColor: "#f8f9fa",
                  borderLeft: "4px solid #0d6efd",
                  zIndex: 1001,
                }}
              >
                <div className="row gx-2">
                  {/* Column 1: Links */}
                  <div className="col-4">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link
                          to="/about-rushrash-inc"
                          className={getLinkClass("/about-rushrash-inc")}
                          style={menuItemStyle}
                        >
                          <i className="bi bi-building me-2"></i> About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact-rushrash-inc"
                          className={getLinkClass("/contact-rushrash-inc")}
                          style={menuItemStyle}
                        >
                          <i className="bi bi-headset me-2"></i> Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cctv-coupons"
                          className={getLinkClass("/cctv-coupons")}
                          style={menuItemStyle}
                        >
                          <i className="bi bi-tag me-2"></i> Specials
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/rushrash-legal"
                          className={getLinkClass("/rushrash-legal")}
                          style={menuItemStyle}
                        >
                          <i className="bi bi-shield-lock me-2"></i> Legal &
                          Privacy
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Info box */}
                  <div className="col-8 info-box">
                    <h6 className="fw-bold text-dark mb-2">
                      <i className="bi bi-question-circle text-warning me-2"></i>
                      Why Choose Rushrash?
                    </h6>
                    <p className="small text-muted mb-3">
                      We are a trusted security and IT partner with years of
                      experience delivering reliable solutions to businesses and
                      homeowners.
                    </p>
                    <a
                      href="/contact-rushrash-inc"
                      className="btn btn-warning btn-sm fw-semibold"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
