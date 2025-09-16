import { Link } from "react-router-dom";
import productImg from "../../assets/images/cctv-cams/12080839_xl.jpg";

export default function DropDownMenus({
  expandedMenu,
  setExpandedMenu,
  location,
}) {
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

  return (
    <div>
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
              setExpandedMenu(expandedMenu === "services" ? null : "services")
            }
            style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            Services
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
                      className={getLinkClass("/services/cctv-installation")}
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

              <div className="d-none d-md-block col-8 info-box">
                <h6 className="fw-bold text-dark mb-2">
                  <i className="bi bi-question-circle text-warning me-2"></i>
                  Not Sure Which Service?
                </h6>
                <p className="small text-muted mb-3">
                  Let us help you find the right CCTV, IT, or security solution
                  tailored to your business or home.
                </p>
                <a
                  href="/residential-cctv-security"
                  className="btn btn-success btn-sm fw-semibold m-3"
                  onClick={() => setExpandedMenu(null)}
                >
                  Home Security
                </a>
                <a
                  href="/commercial-cctv-security"
                  className="btn btn-warning btn-sm fw-semibold"
                  onClick={() => setExpandedMenu(null)}
                >
                  Business Security
                </a>
              </div>
            </div>
          </ul>
        </li>

        {/* Products Mega Menu */}
        <li className="nav-item dropdown">
          <button
            className={getDropdownClass(["/security-products", "/products"])}
            role="button"
            onClick={() =>
              setExpandedMenu(expandedMenu === "products" ? null : "products")
            }
            style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            Products
          </button>
          <ul
            className={`dropdown-menu p-4 shadow-lg rounded-3 border-0 ${
              expandedMenu === "products" ? "show" : ""
            }`}
            style={{
              minWidth: "650px",
              backgroundColor: "#f8f9fa",
              borderLeft: "4px solid #198754",
              zIndex: 1001,
              left: "0",
              right: "auto",
            }}
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
                      <i className="bi bi-box-seam me-2"></i> All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security-products?tab=access"
                      className={getLinkClass("/security-products?tab=access")}
                      style={menuItemStyle}
                      onClick={() => setExpandedMenu(null)}
                    >
                      <i className="bi bi-door-closed me-2"></i> Access Control
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security-products?tab=cctv"
                      className={getLinkClass("/security-products?tab=cctv")}
                      style={menuItemStyle}
                      onClick={() => setExpandedMenu(null)}
                    >
                      <i className="bi bi-camera-video me-2"></i> CCTV Cameras
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
                      <i className="bi bi-hdd-network me-2"></i> Recorders
                    </Link>
                  </li>
                </ul>
              </div>

              {/* SEO / Image box */}
              <div className="d-none d-md-block col-7 info-box">
                <h6 className="fw-bold text-dark mb-2">
                  <i className="bi bi-lightbulb text-info me-2"></i>
                  Choosing the Right Product
                </h6>
                <p className="small text-muted mb-3">
                  From CCTV cameras to advanced access control, explore products
                  trusted by security professionals worldwide.
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

        {/* About Rushrash Mega Menu */}
        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle"
            role="button"
            onClick={() =>
              setExpandedMenu(expandedMenu === "about" ? null : "about")
            }
          >
            About Rushrash
          </span>
          <ul
            className={`dropdown-menu p-4 shadow-lg rounded-3 border-0 ${
              expandedMenu === "about" ? "show" : ""
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
                      <i className="bi bi-shield-lock me-2"></i> Legal & Privacy
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
                        <i className="bi bi-file-earmark-lock me-2 mt-1"></i>
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
  );
}
