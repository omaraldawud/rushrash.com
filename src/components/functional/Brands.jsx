import React, { useState } from "react";
import { Link } from "react-router-dom";
import brands_ds from "../../assets/data/brands_ds";
import TopBrandsLogo from "../../assets/images/banners/cctv-header.jpg";
import "../../assets/css/Brands.css";

const Brands = () => {
  const [expandedBrand, setExpandedBrand] = useState(null);

  const toggleExpand = (index) => {
    if (expandedBrand === index) {
      setExpandedBrand(null);
    } else {
      setExpandedBrand(index);
    }
  };

  return (
    <section
      className="brand-section py-5 px-3 px-md-4 rounded position-relative text-light"
      style={{
        backgroundColor: "#0F1A25",
        overflow: "hidden",
      }}
    >
      {/* Decorative corner badge */}
      <img
        src={TopBrandsLogo}
        alt="Top CCTV Brands"
        className="position-absolute top-0 end-0 mt-3 me-3 d-none d-md-block"
        style={{ maxWidth: "120px", opacity: 0.85 }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="row align-items-center mb-4">
          <div className="col-12 col-md-8 text-center text-md-start mb-3 mb-md-0">
            <h2 className="fw-bold text-uppercase mb-2 fs-4 fs-md-3">
              Trusted CCTV & Access Control Brands
            </h2>
            <p className="text-secondary mb-0 small">
              We proudly install/maintain leading commercial & residential
              security systems
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-2 flex-wrap">
            <Link
              to="/commercial-cctv-security"
              className="btn btn-outline-light px-3 py-2 fw-medium mb-2 mb-md-0"
              style={{ fontSize: "0.9rem" }}
            >
              Commercial
            </Link>
            <Link
              to="/residential-cctv-security"
              className="btn btn-primary px-3 py-2 fw-medium"
              style={{ fontSize: "0.9rem" }}
            >
              Residential
            </Link>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="row g-2 g-md-3 g-lg-4 justify-content-center">
          {brands_ds.map((brand, index) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              key={index}
              onClick={() => toggleExpand(index)}
            >
              <div
                className={`brand-card bg-white rounded-3 p-2 p-md-3 h-100 d-flex flex-column align-items-center justify-content-center shadow-sm ${
                  expandedBrand === index ? "expanded" : ""
                }`}
                title={brand.brand_seo_text}
                style={{ cursor: "pointer", transition: "all 0.3s ease" }}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="img-fluid mb-2"
                  style={{
                    maxHeight: "40px",
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
                <span className="small fw-semibold text-dark text-center">
                  {brand.name}
                </span>

                {/* Expanded details */}
                {expandedBrand === index && (
                  <div className="brand-details mt-2 w-100">
                    <div className="border-top pt-2">
                      <p className="text-muted small mb-1">
                        {brand.brand_desc}
                      </p>
                      {brand.cams && brand.cams.length > 0 && (
                        <div>
                          <strong className="small d-block mb-1">
                            Popular Models:
                          </strong>
                          <ul className="small ps-3 mb-0">
                            {brand.cams.slice(0, 2).map((cam, camIndex) => (
                              <li key={camIndex}>
                                <span className="fw-medium">{cam.cam}</span> -{" "}
                                {cam.best_for}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 576px) {
          .brand-card {
            min-height: 100px;
          }

          .brand-card.expanded {
            position: absolute;
            left: 10px;
            right: 10px;
            z-index: 10;
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .brand-section {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;
