import React, { useState } from "react";
import brands_ds from "../../assets/data/brands_ds";

// Product DSs
import { cctv_camera_products_ds } from "../products/data/cctv_camera_products_ds";
import { recorder_products_ds } from "../products/data/recorder_products_ds";

const Brands = () => {
  const [expandedBrand, setExpandedBrand] = useState(null);

  const toggleExpand = (index) => {
    setExpandedBrand(expandedBrand === index ? null : index);
  };

  const selectedBrand =
    expandedBrand !== null ? brands_ds[expandedBrand] : null;

  // Pull cameras & recorders dynamically from datasets
  const brandCams =
    selectedBrand &&
    cctv_camera_products_ds.filter(
      (p) => p.brand.toLowerCase() === selectedBrand.name.toLowerCase()
    );

  const brandRecorders =
    selectedBrand &&
    recorder_products_ds.filter(
      (p) => p.brand.toLowerCase() === selectedBrand.name.toLowerCase()
    );

  return (
    <div className="container my-5 bg-success py-4 rounded-4">
      {/* Expanded Brand Section */}
      {selectedBrand && (
        <div className="card shadow-lg p-4 mb-5 text-center">
          <img
            src={selectedBrand.brandLogo}
            alt={selectedBrand.name}
            className="mx-auto mb-3"
            style={{
              maxHeight: "50px",
              objectFit: "contain",
              border: "1.5px solid #ccc",
              backgroundColor: "#fff",
              padding: "4px 6px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          />

          <h5 className="mb-2">{selectedBrand.name}</h5>
          <p className="fw-bold">{selectedBrand.brand_seo_text}</p>
          <p>{selectedBrand.brand_desc}</p>

          {/* Cameras */}
          {brandCams && brandCams.length > 0 && (
            <div className="mt-4">
              <h6 className="fw-bold">Cameras</h6>
              <div className="row mt-2">
                {brandCams.map((cam) => (
                  <div className="col-md-6 mb-3" key={cam.id}>
                    <div className="card h-100">
                      <img
                        src={cam.productImage}
                        alt={cam.title}
                        className="card-img-top p-3"
                        style={{ maxHeight: "180px", objectFit: "contain" }}
                      />
                      <div className="card-body">
                        <h6>{cam.title}</h6>
                        <p className="small text-muted">{cam.best_for}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recorders */}
          {brandRecorders && brandRecorders.length > 0 && (
            <div className="mt-4">
              <h6 className="fw-bold">Recorders</h6>
              <div className="row mt-2">
                {brandRecorders.map((rec) => (
                  <div className="col-md-6 mb-3" key={rec.id}>
                    <div className="card h-100">
                      <img
                        src={rec.productImage}
                        alt={rec.title}
                        className="card-img-top p-3"
                        style={{ maxHeight: "180px", objectFit: "contain" }}
                      />
                      <div className="card-body">
                        <h6>{rec.title}</h6>
                        <p className="small text-muted">{rec.best_for}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                  width: "100%",
                  maxWidth: "100px",
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
