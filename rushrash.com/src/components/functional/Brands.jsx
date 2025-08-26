import { Link } from "react-router-dom";
import brands_ds from "../../assets/data/brands_ds";
import TopBrandsLogo from "../../assets/images/banners/cctv-header.jpg";
import "../../assets/css/Brands.css";

const Brands = () => {
  return (
    <section
      className="brand-section py-5 px-4 rounded  position-relative text-light"
      style={{
        backgroundColor: "#0F1A25",
        overflow: "hidden",
      }}
    >
      {/* Decorative corner badge */}
      <img
        src={TopBrandsLogo}
        alt="Top CCTV Brands"
        className="position-absolute top-0 end-0 mt-3 me-3"
        style={{ maxWidth: "120px", opacity: 0.85 }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="row align-items-center mb-4">
          <div className="col-md-8 text-center text-md-start">
            <h2 className="fw-bold text-uppercase mb-2">
              Trusted CCTV & Security Brands
            </h2>
            <p className="text-secondary mb-0 small">
              We proudly install leading commercial & residential security
              systems
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end gap-2 mt-3 mt-md-0">
            <Link
              to="/garage_door_openers.html"
              className="btn btn-outline-light px-3 py-2 fw-medium"
            >
              Commercial
            </Link>
            <Link
              to="/garage_door_services.html"
              className="btn btn-primary px-3 py-2 fw-medium"
            >
              Residential
            </Link>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="row g-3 g-md-4">
          {brands_ds.map((brand, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
              <div
                className="brand-card bg-white rounded-3 p-3 h-100 d-flex flex-column align-items-center justify-content-center shadow-sm"
                title={brand.brand_seo_text}
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="img-fluid mb-2"
                  style={{ maxHeight: "50px", objectFit: "contain" }}
                />
                <span className="small fw-semibold text-dark">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
