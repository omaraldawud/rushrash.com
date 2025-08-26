import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/MainMenu.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MainMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const getLinkClass = (path) => {
    const isHomeLink = path === "/index.html";
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
                to="/index.html"
                className={`nav-link${
                  location.pathname === "/" ? " active" : ""
                }`}
                onClick={() => setExpanded(false)}
              >
                Home
              </Link>
            </li>

            {/* Services */}
            <li className="nav-item dropdown">
              <a
                href="#!"
                className={getDropdownClass([
                  "/garage_door_services.html",
                  "/garage_door_repair.html",
                ])}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu dropdown-menu-end p-2 shadow rounded-3 border-0">
                <li>
                  <Link
                    to="/garage_door_services.html"
                    className={getLinkClass("/garage_door_services.html")}
                    onClick={closeParentDropdown}
                    style={{
                      borderRadius: "6px",
                      padding: "0.5rem 1rem",
                      margin: "0.15rem 0",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <i className="bi bi-door-open me-2"></i> G.D. Services
                  </Link>
                </li>
                <li>
                  <hr className="my-2 border border-secondary border-dashed" />
                </li>
                <li>
                  <Link
                    to="/garage_door_repair.html"
                    className={getLinkClass("/garage_door_repair.html")}
                    onClick={closeParentDropdown}
                    style={{
                      borderRadius: "6px",
                      padding: "0.5rem 1rem",
                      margin: "0.15rem 0",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <i className="bi bi-lightning me-2"></i> Repair Services
                  </Link>
                </li>
              </ul>
            </li>

            {/* Residential Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#!"
                className={getDropdownClass([
                  "/garage_door_residential.html",
                  "/garage_door_openers.html",
                ])}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Residential
              </a>
              <ul className="dropdown-menu dropdown-menu-end p-2 shadow rounded-3 border-0">
                <li>
                  <Link
                    to="/garage_door_residential.html"
                    className={getLinkClass("/garage_door_residential.html")}
                    onClick={closeParentDropdown}
                    style={{
                      borderRadius: "6px",
                      padding: "0.5rem 1rem",
                      margin: "0.15rem 0",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <i className="bi bi-door-open me-2"></i> Doors
                  </Link>
                </li>
                <li>
                  <hr className="my-2" />
                </li>
                <li>
                  <Link
                    to="/garage_door_openers.html"
                    className={getLinkClass("/garage_door_openers.html")}
                    onClick={closeParentDropdown}
                    style={{
                      borderRadius: "6px",
                      padding: "0.5rem 1rem",
                      margin: "0.15rem 0",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <i className="bi bi-lightning me-2"></i> Openers
                  </Link>
                </li>
              </ul>
            </li>

            {/* Commercial Dropdown */}
            <li className="nav-item">
              <Link
                to="/garage_door_commercial.html"
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
                        to="/garage_door_aboutus.html"
                        className={getLinkClass("/garage_door_aboutus.html")}
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
                        to="/garage_door_testimonials.html"
                        className={getLinkClass(
                          "/garage_door_testimonials.html"
                        )}
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
                        to="/garage_door_service_area.html"
                        className={getLinkClass(
                          "/garage_door_service_area.html"
                        )}
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
                        to="/garage_door_specials_coupons.html"
                        className={getLinkClass(
                          "/garage_door_specials_coupons.html"
                        )}
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
                        to="/garage_door_safety_tips.html"
                        className={getLinkClass(
                          "/garage_door_safety_tips.html"
                        )}
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
                        to="/garage_door_faqs.html"
                        className={getLinkClass("/garage_door_faqs.html")}
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
                        to="/legal-page.html"
                        className={getLinkClass("/legal-page.html")}
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
                        to="/legal-page.html"
                        className={getLinkClass("/legal-page.html")}
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
                        to="/legal-page.html"
                        className={getLinkClass("/legal-page.html")}
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
                to="/garage_door_contactus.html"
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
