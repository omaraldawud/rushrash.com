import React, { useState } from "react";
import brands_ds from "../../assets/data/brands_ds";

const Brands = () => {
  const [expandedBrand, setExpandedBrand] = useState(null);

  const toggleExpand = (index) => {
    setExpandedBrand(expandedBrand === index ? null : index);
  };

  return (
    <div className="container my-5 bg-success py-4 rounded-4">
      {/* Expanded Brand Section */}
      {expandedBrand !== null && (
        <div className="card shadow-lg p-4 mb-5 text-center">
          <img
            src={brands_ds[expandedBrand].brandLogo}
            alt={brands_ds[expandedBrand].name}
            className="mx-auto mb-3 p-3border"
            style={{
              maxHeight: "50px", // slightly larger for visibility
              objectFit: "contain", // keeps aspect ratio
              border: "1.5px solid #ccc", // softer neutral border
              backgroundColor: "#fff", // ensures clarity on dark sections
              padding: "4px 6px", // breathing room inside border
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // subtle depth
            }}
          />

          <h5 className="mb-2">{brands_ds[expandedBrand].name}</h5>
          <p className="fw-bold">{brands_ds[expandedBrand].brand_seo_text}</p>
          <p>{brands_ds[expandedBrand].brand_desc}</p>

          {/* Cameras */}
          {brands_ds[expandedBrand].cams &&
            brands_ds[expandedBrand].cams.length > 0 && (
              <div className="row mt-3">
                {brands_ds[expandedBrand].cams.map((cam, idx) => (
                  <div className="col-md-6 mb-3" key={idx}>
                    <div className="card h-100">
                      <img
                        src={cam.img}
                        alt={cam.cam}
                        className="card-img-top p-3"
                        style={{ maxHeight: "180px", objectFit: "contain" }}
                      />
                      <div className="card-body">
                        <h6>{cam.cam}</h6>
                        <p className="small text-muted">{cam.best_for}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      )}

      {/* Brands Grid */}
      <div className="row">
        {brands_ds.map((brand, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 mb-4"
            onClick={() => toggleExpand(index)}
            style={{ cursor: "pointer" }}
          >
            <div className="card h-100 text-center p-3 shadow-sm hover-shadow">
              <img
                src={brand.brandLogo}
                alt={brand.name}
                className="mx-auto d-block"
                style={{
                  maxHeight: "30px",
                  objectFit: "contain",
                  width: "100%", // keeps it inside the card
                  maxWidth: "100px", // prevents stretching
                }}
              />
              <h6 className="mt-2">{brand.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
