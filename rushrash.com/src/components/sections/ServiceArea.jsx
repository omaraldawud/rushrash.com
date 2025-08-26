// <!-- Service Coverage -->
//
import { useLocation } from "react-router-dom";
import { locationData } from "../../assets/data/locationData";

import "../../assets/css/serviceArea.css";

///////////////////////////////////
const ServiceArea = () => {
  const location = useLocation();
  // Get content for current path or use default
  const currentContent =
    locationData[location.pathname] || locationData["/default"];
  // Format areas as comma-separated list
  const areasList =
    currentContent?.areas?.join(", ") || "Chicago and surrounding areas";

  return (
    <div className="alert alert-info mb-5 service-area-card ">
      <div className="d-flex align-items-start">
        <div className="flex-shrink-0 me-3 fs-1 ">🏡</div>
        <div className="service-area-content  ">
          <h3 className="h4 mb-3 service-area-title">
            {currentContent.service_area_title}
          </h3>

          <div className="service-area-details mb-3">
            {/* Counties Badge */}
            {currentContent.service_area_counties && (
              <div className="mb-2 position-relative d-inline-block">
                <strong
                  className="text-start detail-label badge bg-warning text-dark pe-4 me-2"
                  style={{ minWidth: "110px" }}
                >
                  <i className="bi bi-house-add me-1"></i>
                  Counties:
                </strong>
                <span className="detail-value">
                  {currentContent.service_area_counties}
                </span>
              </div>
            )}

            {/* Cities Badge */}
            {currentContent.service_area_cities && (
              <div className="mb-2 position-relative d-inline-block">
                <strong
                  className="text-start detail-label badge bg-warning text-dark pe-4 me-2"
                  style={{ minWidth: "110px" }}
                >
                  <i className="bi bi-building-check me-1"></i>
                  Cities:
                </strong>
                <span className="detail-value">
                  {currentContent.service_area_cities.join(", ")}
                </span>
              </div>
            )}

            {/* ZIP Codes Badge */}
            {currentContent.service_area_zipcodes && (
              <div className="mb-2 position-relative d-inline-block">
                <strong
                  className="text-start detail-label badge bg-warning text-dark pe-4 me-2"
                  style={{ minWidth: "110px" }}
                >
                  <i className="bi bi-pin-map me-1"></i>
                  ZIP Codes:
                </strong>
                <span className="detail-value">
                  {currentContent.service_area_zipcodes}
                </span>
              </div>
            )}
          </div>

          {currentContent.service_area_description && (
            <p
              className="mb-0 fw-bold fs-5 text-gradient bg-light rounded-3 p-2 shadow-sm"
              style={{
                background: "linear-gradient(45deg, #f8f9fa, #e9ecef)",
                borderLeft: "4px solid #0d6efd",
              }}
            >
              🎯 {currentContent.service_area_description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
