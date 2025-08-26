import { Button } from "react-bootstrap";
import features_ds from "../../assets/data/rr_page_infoox_content_ds";
import Logo from "../../assets/images/logo/rushrash-logo-23-300x200.png";

const PageInfoBox = ({ pageType = "home", info_image1, info_image2 }) => {
  const pageData = features_ds[pageType] || features_ds["home"];
  const currentFeatures = pageData.features || [];

  return (
    <div
      className="mb-3 page-info-box d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-3 gap-lg-4 p-3 p-md-4 rounded-3"
      style={{
        background: "linear-gradient(to right, #f8f9fa, #ffffff)",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* Left text section - Now full width on mobile, constrained on large screens */}
      <div className="info-container d-flex flex-column flex-md-row align-items-stretch gap-3 gap-md-4">
        {/* Left Text Section */}
        <div className="info-text flex-grow-1 d-flex flex-column">
          <h2
            className="mb-0"
            style={{
              fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
              lineHeight: "1.3",
              fontWeight: "700",
              margin: "16px 0",
              color: "#0166B5",
            }}
          >
            {pageData.info_title}
          </h2>
          <div className="uppercase fst-italic text-secondary mb-4 text-sm tracking-wide">
            {pageData.info_top_title}
          </div>

          <p className="mb-3 mb-md-4 flex-grow-0">{pageData.info_mid_text}</p>

          {/* Features List */}
          <div className="mb-3 mb-md-4 flex-grow-0">
            <ul className="d-flex flex-column flex-md-row flex-wrap list-unstyled gap-2 gap-md-3 mb-0">
              {currentFeatures.map((item, index) => (
                <li
                  key={index}
                  className="small"
                  style={{ flex: "1 1 45%", minWidth: "45%" }}
                >
                  <i
                    className="bi bi-check-circle-fill text-success me-2 flex-shrink-0"
                    style={{ fontSize: "0.8em", marginTop: "2px" }}
                  ></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons - This will now align with the second image */}
          <div className="d-flex flex-column flex-sm-row gap-2 mt-auto">
            {" "}
            {/* mt-auto pushes it to bottom */}
            <Button
              variant="primary"
              href={pageData.info_link1}
              className="flex-sm-grow-1 text-sm-center"
            >
              {pageData.link1_text}
            </Button>
            <Button
              variant="secondary"
              href={pageData.info_link2}
              className="flex-sm-grow-1 text-sm-center"
            >
              {pageData.link2_text}
            </Button>
          </div>
        </div>

        {/* Right Images Section */}

        <div
          className="info-images flex-shrink-0 d-flex flex-column justify-content-between"
          style={{ maxWidth: "350px", width: "100%" }}
        >
          {/* Main Image */}
          {/* <div
            className="overflow-hidden mb-2"
            style={{
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              maxWidth: "100%",
              flex: "0 0 auto",
            }}
          >
            <img
              src={Logo}
              alt="Main Garage Door Service"
              className="img-fluid"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
            />
          </div> */}
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              maxWidth: "100%",
              flex: "0 0 auto",
            }}
          >
            <img
              src={info_image1}
              alt="Main Garage Door Service"
              className="img-fluid"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>

          {/* Second Image - This will align with buttons */}
          <div
            className="overflow-hidden mt-3"
            style={{
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(22, 157, 230, 0.12)",
              maxWidth: "100%",
              marginTop: "auto" /* Pushes this to bottom */,
            }}
          >
            <img
              src={info_image2}
              alt="CCTV Service"
              className="img-fluid"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInfoBox;
