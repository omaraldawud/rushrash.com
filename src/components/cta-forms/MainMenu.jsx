import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/MainMenu.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../layout/Logo";

const MainMenu = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpandedMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setExpandedMenu(null);
  }, [location]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-2"
      ref={navRef}
      style={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        position: "relative",
        zIndex: 1100,
        backgroundColor: "#0dcaf0",
      }}
    >
      <div className="container-fluid justify-content-between">
        {/* Logo */}
        <div className="d-none d-md-block">
          <Logo logoWidth="30px" />
        </div>

        {/* Hamburger button - only shows on mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul
            id="services-menu"
            className="navbar-nav me-auto d-flex align-items-center gap-3"
          >
            {/* Services Mega Menu */}
            <li className="nav-item dropdown">
              <button
                className={getDropdownClass([
                  "/services/cctv-installation",
                  "/services/access-control",
                  "/services/it-services",
                  "/services/pos-installation",
                ])}
                role="button"
                onClick={() =>
                  setExpandedMenu(
                    expandedMenu === "services" ? null : "services"
                  )
                }
                style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
              >
                <span className="text-light">Services</span>
              </button>
              <ul
                className={`dropdown-menu p-4 shadow-lg rounded-3 border-0 ${
                  expandedMenu === "services" ? "show" : ""
                }`}
                style={{
                  minWidth: "650px",
                  backgroundColor: "#f8f9fa",
                  borderLeft: "4px solid #0d6efd",
                  zIndex: 1001,
                  left: "0",
                  right: "auto",
                }}
              >
                <div className="row gx-3">
                  <div className="col-4">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link
                          to="/services/cctv-installation"
                          className={getLinkClass(
                            "/services/cctv-installation"
                          )}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-camera-video me-2"></i>
                          CCTV Installation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/access-control"
                          className={getLinkClass("/services/access-control")}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-door-closed me-2"></i>
                          Access Control
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/it-services"
                          className={getLinkClass("/services/it-services")}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-laptop me-2"></i> IT Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/pos-installation"
                          className={getLinkClass("/services/pos-installation")}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-bag-check me-2"></i>
                          POS Installation
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="d-none d-md-block col-8 info-box">
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
                      onClick={() => setExpandedMenu(null)}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </ul>
            </li>

            {/* About Rushrash Mega Menu */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                onClick={() =>
                  setExpandedMenu(expandedMenu === "about" ? null : "about")
                }
                style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
              >
                About Rushrash
              </span>
              <ul
                className={`dropdown-menu p-4 shadow-lg rounded-3 border-0 ${
                  expandedMenu === "about" ? "show" : "" // Fixed: Changed from "services" to "about"
                }`}
                style={{
                  minWidth: "650px",
                  backgroundColor: "#f8f9fa",
                  borderLeft: "4px solid #0d6efd",
                  zIndex: 1001,
                  left: "0",
                  right: "auto",
                }}
              >
                <div className="row gx-2">
                  <div className="col-5">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link
                          to="/about-rushrash-inc"
                          className={getLinkClass("/about-rushrash-inc")}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-building me-2"></i> About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact-rushrash-inc"
                          className={getLinkClass("/contact-rushrash-inc")}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-headset me-2"></i> Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/rushrash-legal"
                          className={getLinkClass("/rushrash-legal")}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-shield-lock me-2"></i> Legal &
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/access-control-and-monitoring-articles"
                          className={getLinkClass("/articles")}
                          style={{ ...menuItemStyle, whiteSpace: "normal" }}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <div className="d-flex align-items-start">
                            {" "}
                            {/* Changed from align-items-center to align-items-start */}
                            <i className="bi bi-file-earmark-lock me-2 mt-1"></i>{" "}
                            {/* Added mt-1 for minor top adjustment */}
                            <div>
                              <div>Access Control & Monitoring Articles</div>
                              <small className="text-info">
                                PA systems, CCTV, alarms, etc.
                              </small>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* why choose us section */}
                  <div className="d-none d-md-block col-7 info-box">
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
                      onClick={() => setExpandedMenu(null)}
                    >
                      <i className="bi bi-envelope me-2"></i>Contact Us
                    </a>
                    <a
                      href="/contact-rushrash-inc#case-studies"
                      className="btn btn-success btn-sm ms-2 fw-semibold"
                      onClick={() => setExpandedMenu(null)}
                    >
                      <i className="bi bi-trophy me-2"></i>Success Stories
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
