export default function CommercialSection({ varient = "Door" }) {
  return (
    <div
      className="d-flex flex-column flex-md-row mt-4 rounded-lg shadow-md overflow-hidden"
      style={{
        backgroundColor: "#212529",
        border: "1px solid rgba(255, 193, 7, 0.3)", // Subtle gold border
      }}
    >
      {/* Text Content - Full width on mobile, flexible on desktop */}
      <div
        className="d-flex flex-column flex-md-row mt-4 rounded-lg shadow-md overflow-hidden"
        style={{
          backgroundColor: "#212529",
          border: "1px solid rgba(255, 193, 7, 0.3)",
        }}
      >
        {/* Text Content - 40% on desktop, full width on mobile */}
        <div className="col-12 col-md-5 col-lg-4 p-3 p-md-4">
          <h3 className="h4 fw-bold mb-2" style={{ color: "lightblue" }}>
            Commercial Garage {varient} Services
          </h3>
          <div className="text-sm text-light mb-4 mb-md-5">
            <p className="text-warning mb-2">
              Heavy-duty repair and installation for businesses, warehouses &
              industrial facilities
            </p>
            <p className="mb-0">
              Our commercial garage doors, commercial openers and heavy-duty
              sectional doors provide secure, energy-efficient solutions for
              businesses and industrial facilities. Expertly installed and
              maintained for optimal performance.
            </p>
          </div>
          <a
            href="/garage_door_commercial.html"
            className="btn btn-warning fw-medium px-4 py-2"
            style={{
              color: "#212529",
            }}
          >
            View Commercial Solutions →
          </a>
        </div>

        {/* Image - 60% on desktop, full width on mobile */}
        <div className="col-12 col-md-7 col-lg-8 position-relative p-0">
          <img
            src="/images/commercial/commercial-garage-doors.jpg"
            alt="Commercial sectional garage door installation"
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
    </div>
  );
}
