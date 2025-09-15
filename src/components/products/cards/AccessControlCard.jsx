// src/components/products/cards/AccessControlCard.jsx
import { Link } from "react-router-dom";
import "../css/products.css";

export default function AccessControlCard({ product }) {
  const {
    title,
    brand,
    readerType,
    protocol,
    powerSupply,
    productImage,
    type,
  } = product;

  return (
    <div className="techy-card access-control-card">
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
            <span className="spec-label">Reader Type</span>
            <span className="spec-value">{readerType}</span>
          </div>
          <div className="tech-spec">
            <span className="spec-label">Protocol</span>
            <span className="spec-value">{protocol}</span>
          </div>
          <div className="tech-spec">
            <span className="spec-label">Power Supply</span>
            <span className="spec-value">{powerSupply}</span>
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
