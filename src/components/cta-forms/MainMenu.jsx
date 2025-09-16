import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/MainMenu.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../layout/Logo";
import productImg from "../../assets/images/cctv-cams/12080839_xl.jpg";

const MainMenu = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  const menuItemStyle = {
    borderRadius: "6px",
    padding: "0.5rem 1rem",
    margin: "0.25rem 0",
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
    <nav className="navbar navbar-expand-lg" ref={navRef}>
      <div className="container-fluid justify-content-between">
        {/* Logo */}
        <div className="d-none d-md-block">
          <Logo logoWidth="30px" />
        </div>

        {/* Hamburger - mobile */}
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

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto d-flex align-items-center gap-3">
            {/* Services Mega Menu */}
            <li className="nav-item  dropdown">
              <button
                className={getDropdownClass([
                  "/services/cctv-installation",
                  "/services/access-control",
                  "/services/it-services",
                  "/services/pa-services",
                  "/services/pos-installation",
                ])}
                onClick={() =>
                  setExpandedMenu(
                    expandedMenu === "services" ? null : "services"
                  )
                }
              >
                Services
              </button>
              <ul
                className={`dropdown-menu ${
                  expandedMenu === "services" ? "show" : ""
                }`}
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
                          <i className="bi bi-camera-video text-warning me-2"></i>
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
                          <i className="bi bi-laptop me-2"></i>
                          IT Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/pa-systems"
                          className={getLinkClass("/services/pa-systems")}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-mic me-2"></i>
                          PA Systems
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
                          PoS Installation
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Info box */}
                  <div className="d-none d-md-block col-8 info-box">
                    <h6 className="fw-bold text-dark mb-2">
                      <i className="bi bi-question-circle text-warning me-2"></i>
                      Not Sure Which Service?
                    </h6>
                    <p className="small text-muted mb-3">
                      Let us help you find the right CCTV, IT, or security
                      solution.
                    </p>
                    <Link
                      to="/contact-rushrash-inc"
                      className="btn btn-warning btn-sm fw-semibold"
                      onClick={() => setExpandedMenu(null)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </ul>
            </li>

            {/* Products Mega Menu */}
            <li className="nav-item dropdown">
              <button
                className={getDropdownClass([
                  "/security-products",
                  "/products",
                ])}
                onClick={() =>
                  setExpandedMenu(
                    expandedMenu === "products" ? null : "products"
                  )
                }
              >
                Products
              </button>
              <ul
                className={`dropdown-menu ${
                  expandedMenu === "products" ? "show" : ""
                }`}
              >
                <div className="row gx-3">
                  <div className="col-5">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link
                          to="/security-products"
                          className={getLinkClass("/security-products")}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-box-seam me-2"></i>
                          All Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/security-products?tab=access"
                          className={getLinkClass(
                            "/security-products?tab=access"
                          )}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-door-closed me-2"></i>
                          Access Control
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/security-products?tab=cctv"
                          className={getLinkClass(
                            "/security-products?tab=cctv"
                          )}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-camera-video me-2"></i>
                          CCTV Cameras
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/security-products?tab=recorders"
                          className={getLinkClass(
                            "/security-products?tab=recorders"
                          )}
                          style={menuItemStyle}
                          onClick={() => setExpandedMenu(null)}
                        >
                          <i className="bi bi-hdd-network me-2"></i>
                          Recorders
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Info / Image */}
                  <div className="d-none d-md-block col-7 info-box">
                    <h6 className="fw-bold text-dark mb-2">
                      <i className="bi bi-lightbulb text-info me-2"></i>
                      Choosing the Right Product
                    </h6>
                    <p className="small text-muted mb-3">
                      Explore products trusted by security professionals.
                    </p>
                    <img
                      src={productImg}
                      alt="Products overview"
                      className="img-fluid rounded shadow-sm mb-2"
                    />
                    <Link
                      to="/security-products"
                      className="btn btn-success btn-sm fw-semibold"
                      onClick={() => setExpandedMenu(null)}
                    >
                      Explore Products
                    </Link>
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
