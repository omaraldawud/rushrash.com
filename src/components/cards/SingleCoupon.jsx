export default function SingleCoupon({
  amount,
  save_on,
  discount_bg = "/images/parts/torsion_springs_doors.jfif",
}) {
  return (
    <div className="coupon-container position-relative mb-3 z-1 w-100">
      <div className="coupon-card rounded-4 position-relative overflow-hidden">
        {/* Title row - Save On text */}
        <div
          className="title-row w-100 text-start"
          style={{ zIndex: 2, backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <span
            className="text-white fw-bold text-uppercase ms-2"
            style={{ fontSize: "0.8rem", letterSpacing: "0.5px" }}
          >
            <span className="text-warning "> Save On:</span> {save_on}
          </span>{" "}
          <i className="bi bi-tag ms-4 " style={{ fontSize: "1.2rem" }}></i>{" "}
          <div
            className="position-absolute top-0 end-0 p-2 d-none d-md-block"
            style={{ zIndex: 3 }}
          >
            <a href="tel:2412481" className="text-decoration-none">
              <button
                className="btn btn-light btn-sm fw-bold  text-danger py-0 mb-2"
                style={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}
              >
                Claim <i className="ms-1 bi bi-arrow-right "></i>
              </button>
            </a>
          </div>
        </div>

        {/* Content area */}
        <div className="p-3 position-relative h-100">
          {/* Claim button in top right */}

          {/* SVG icon in top left */}
          <div
            className="position-absolute top-0 start-0 p-2"
            style={{ zIndex: 3 }}
          >
            <img
              src="/images/sitewide/residential-garage-doors-icon.svg"
              alt="Residential Garage Doors"
              style={{
                width: "28px",
                height: "28px",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>

          {/* Background pattern */}
          <div
            className="position-absolute top-0 end-0 w-100 h-100 opacity-15"
            style={{
              backgroundImage: `url(/images/parts/torsion_springs-tr.png)`,
              backgroundSize: "contain",
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
            }}
          ></div>

          {/* Main content - centered amount */}
          <div
            className="position-relative d-flex align-items-start justify-content-start ms-5 h-100"
            style={{ zIndex: 1 }}
          >
            <div
              className="cash-amount text-warning position-relative"
              style={{ lineHeight: "1", marginTop: "-15px" }}
            >
              ${amount}
              <samp
                className="position-absolute top-0  translate-middle-y small text-light"
                style={{
                  marginTop: "15px",
                  fontSize: "0.5rem",
                }}
              >
                OFF
              </samp>
            </div>
          </div>
        </div>

        {/* Corner decoration */}
        <div
          className="position-absolute bottom-0 end-0 p-2"
          style={{ zIndex: 1 }}
        >
          <div
            className="bg-white rounded-circle p-1 opacity-75"
            style={{ width: "24px", height: "24px" }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        .coupon-card {
          background: linear-gradient(135deg, #295bac 0%, #1e3a8a 100%);
          box-shadow: 0 6px 15px rgba(41, 91, 172, 0.25);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.15);
          height: 120px;
        }

        .title-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cash-amount {
          font-weight: 700;
          font-size: clamp(36px, 7vw, 64px);
          letter-spacing: 2px;
          // color: transparent;
          // background: linear-gradient(
          //   180deg,
          //   #ffffff 0%,
          //   #e6f0ff 30%,
          //   #cce0ff 65%,
          //   #a3c8ff 100%
          // );
          // -webkit-background-clip: text;
          // background-clip: text;
          // text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
