// src/components/products/cards/CCTVCameraCard.jsx
import { Link } from "react-router-dom";
import "../css/products.css";

//
export default function CCTVCameraCard({ product }) {
  const {
    title,
    brand,
    resolution,
    lens,
    housing,
    irRange,
    productImage,
    type = "CCTV",
  } = product;

  return (
    <div className="techy-card cctv-camera-card">
      <div className="card-image-container">
        <img src={productImage} alt={title} className="card-image" />
        <div className="card-overlay"></div>
        <div className="product-type-badge">{type}</div>
      </div>

      <div className="card-content">
        <div>
          <h3>{title}</h3>
          <p className="card-subtitle">{brand}</p>
        </div>

        <div className="card-details">
          <div className="tech-spec">
            <span className="spec-label">Resolution</span>
            <span className="spec-value">{resolution}</span>
          </div>
          <div className="tech-spec">
            <span className="spec-label">Lens</span>
            <span className="spec-value">{lens}</span>
          </div>
          <div className="tech-spec">
            <span className="spec-label">Housing</span>
            <span className="spec-value">{housing}</span>
          </div>
          <div className="tech-spec">
            <span className="spec-label">IR Range</span>
            <span className="spec-value">{irRange}</span>
          </div>
        </div>

        <div className="card-footer">
          <Link
            to={`/products/${product.brand}/${product.slug}`}
            className="techy-btn"
          >
            <span className="btn-text">View Details</span>
            <span className="btn-icon">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
