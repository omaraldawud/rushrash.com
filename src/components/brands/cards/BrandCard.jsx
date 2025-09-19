// /src/components/brands/cards/BrandCard.jsx
import React from "react";

const BrandCard = ({ brand }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm border-0 d-flex flex-column">
        {/* Header with fixed height */}
        <div
          className="card-header bg-light d-flex align-items-center justify-content-center"
          style={{ height: "150px" }}
        >
          <img
            src={brand.brandLogo}
            alt={brand.name}
            className="img-fluid"
            style={{
              maxHeight: "120px",
              objectFit: "contain",
              maxWidth: "100%",
            }}
          />
        </div>

        {/* Body grows to fill space */}
        <div className="card-body flex-grow-1">
          <h5 className="card-title fw-bold">{brand.name}</h5>
          <p className="card-text text-muted">{brand.brand_desc}</p>
        </div>

        {/* Footer with fixed height */}
        <div
          className="card-footer bg-white d-flex justify-content-between align-items-center"
          style={{ height: "60px" }}
        >
          <small className="text-muted text-truncate me-2">
            {brand.brand_seo_text}
          </small>
          <a
            href={`/products/${brand.name}`}
            className="btn btn-outline-primary btn-sm"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
