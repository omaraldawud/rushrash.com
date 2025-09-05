import { HashLink } from "react-router-hash-link";
import pageDataDS from "../../assets/data/rr_page_infoox_content_ds";
import "../../assets/css/infoBox.css";

//
const PageInfoBox = ({ pageType = "home" }) => {
  const pageData = pageDataDS[pageType] || pageDataDS["home"];
  const features = pageData.features || [];

  return (
    <div
      className="mb-3 page-info-box d-flex flex-column flex-lg-row align-items-stretch gap-4 p-3 p-md-4 rounded-3"
      style={{
        background: "linear-gradient(to right, #f8f9fa, #ffffff)",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* Text Section */}
      <div className="info-text flex-grow-1 d-flex flex-column">
        <h2 className="mb-2" style={{ color: "#0166B5", fontWeight: 700 }}>
          {pageData.info_title}
        </h2>
        <div className="fst-italic text-secondary mb-3">
          {pageData.info_top_title}
        </div>
        <p className="mb-3">{pageData.info_mid_text}</p>

        {/* Features */}
        <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap gap-2 mb-3">
          {features.map((item, index) => (
            <li
              key={index}
              className="small d-flex align-items-start"
              style={{ flex: "1 1 45%" }}
            >
              <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Images Section - All three images in a nice layout */}
      <div className="info-images flex-shrink-0 d-flex flex-column gap-3">
        {/* Main image (larger) */}
        {pageData.info_image1 && (
          <div className="img-container">
            <img
              src={pageData.info_image1}
              alt="Security feature"
              className="img-fluid w-100 img-main"
            />
          </div>
        )}

        {/* Smaller images in a row */}
        <div className="d-flex gap-3">
          {pageData.info_image2 && (
            <div className="img-container flex-grow-1">
              <img
                src={pageData.info_image2}
                alt="Security feature"
                className="img-fluid w-100 img-thumb"
              />
            </div>
          )}
          {pageData.info_image3 && (
            <div className="img-container flex-grow-1">
              <img
                src={pageData.info_image3}
                alt="Security feature"
                className="img-fluid w-100 img-thumb"
              />
            </div>
          )}
        </div>
        {/* Button - Only show if link1 exists */}
        {pageData.info_link1 && pageData.link1_text && (
          <div className="mt-auto">
            <HashLink
              smooth
              to={pageData.info_link1} // e.g., "/contact#case-studies"
              className="btn btn-primary w-100 w-sm-auto btn-lg"
            >
              {pageData.link1_text}
            </HashLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageInfoBox;
