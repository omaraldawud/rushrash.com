// src/components/products/cards/RecorderCard.jsx
import { Link } from "react-router-dom";

//css
import "../css/products.css";
import brandToSlug from "../../../utils/brandToSlug";

//
export default function RecorderCard({ product }) {
  const {
    title,
    brand,
    type,
    channels,
    recordingRate,
    storageCapacity,
    poe,
    powerSupply,
    productImage,
  } = product;

  return (
    <div className="techy-card recorder-card">
      <div className="card-image-container">
        <img src={productImage} alt={title} className="card-image" />
        <div className="card-overlay"></div>
        <div className="product-type-badge">{type}</div>
      </div>
      <div className="card-content">
        <div>
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{brand}</p>
        </div>

        <div className="card-details">
          <div className="tech-spec">
            <span className="spec-label">Channels</span>
            <span className="spec-value">{channels}</span>
          </div>
          <div className="tech-spec">
            <span className="spec-label">Recording Rate</span>
            <span className="spec-value">{recordingRate}</span>
          </div>
          <div className="tech-spec">
            <span className="spec-label">Storage</span>
            <span className="spec-value">{storageCapacity}</span>
          </div>
          {type === "NVR" && (
            <div className="tech-spec">
              <span className="spec-label">PoE Support</span>
              <span className="spec-value">{poe ? "Yes" : "No"}</span>
            </div>
          )}
          <div className="tech-spec">
            <span className="spec-label">Power</span>
            <span className="spec-value">{powerSupply}</span>
          </div>
        </div>

        <div className="card-footer">
          <Link
            to={`/products/${brandToSlug(product.brand)}/${product.slug}`}
            className="techy-btn"
          >
            <span className="btn-text">View {product.title} Details</span>
            <span className="btn-icon">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
