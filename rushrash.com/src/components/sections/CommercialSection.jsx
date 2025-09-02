//

import commercial_img from "../../assets/images/commercial/chicago-22-story-building.jpg";

//
export default function CommercialSection({ varient = "CCTV" }) {
  return (
    <div
      className="d-flex flex-column flex-md-row mt-4 rounded-lg shadow-md overflow-hidden"
      style={{
        backgroundColor: "#212529",
        border: "1px solid rgba(255, 193, 7, 0.3)", // Subtle gold border
      }}
    >
      {/* Text Content */}
      <div className="col-12 col-md-5 col-lg-8 p-3 p-md-4">
        <h3 className="h4 fw-bold mb-2" style={{ color: "lightblue" }}>
          Commercial {varient} Installation
        </h3>
        <div className="text-sm text-light mb-4 mb-md-5">
          <p className="text-warning mb-2">
            Professional CCTV solutions for offices, retail, and warehouses
          </p>
          <p className="mb-2">
            We design and install enterprise-grade CCTV systems built around{" "}
            <strong>NVR technology</strong> for secure, reliable video recording
            and easy remote access.
          </p>
          <ul className="mb-3 ps-3">
            <li>8-Camera HD system – ideal for small businesses</li>
            <li>16-Camera system – balanced coverage for medium facilities</li>
            <li>
              32-Camera enterprise solution – maximum visibility for large sites
            </li>
          </ul>
          <p className="mb-0">
            Each package includes professional installation, system training,
            and options for remote monitoring via desktop and mobile app.
          </p>
        </div>
        <a
          href="/commercial-cctv-security"
          className="btn btn-warning fw-medium px-4 py-2"
          style={{ color: "#212529" }}
        >
          View CCTV Solutions →
        </a>
      </div>

      {/* Image Content */}
      <div className="col-12 col-md-7 col-lg-4 position-relative p-0">
        <img
          src={commercial_img}
          alt="Commercial CCTV camera installation in office building"
          className="w-100 h-100 object-cover"
          style={{
            minHeight: "250px",
            borderLeft: "1px solid rgba(255, 193, 7, 0.3)",
            borderTop: "1px solid rgba(255, 193, 7, 0.3)",
          }}
        />
        <div
          className="d-none d-md-block position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to left, transparent 0%, #212529 100%)",
            opacity: "0.2",
            pointerEvents: "none",
          }}
        ></div>
      </div>
    </div>
  );
}
