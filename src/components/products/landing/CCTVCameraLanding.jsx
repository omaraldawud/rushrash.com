// /src/components/products/CCTVCameraLanding.jsx

import "../css/products.css";

//
export default function CCTVCameraLanding({ product }) {
  if (!product) {
    return (
      <div className="techy-container">
        <div className="techy-error">
          <h1 className="glitch" data-text="Product Not Found">
            Product Not Found
          </h1>
          <p>The product you are looking for does not exist.</p>
          <a href="/products" className="techy-btn">
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  const specLabels = {
    resolution: "Resolution",
    lens: "Lens",
    housing: "Housing",
    powerSupply: "Power Supply",
    powerConsumption: "Power Consumption",
    irRange: "IR Range",
    dimensions: "Dimensions",
    weight: "Weight",
  };

  const productSpecs = Object.entries(specLabels).filter(
    ([key]) => product[key] !== undefined && product[key] !== null
  );

  return (
    <div className="techy-product-landing">
      <div className="techy-product-container">
        {/* Breadcrump */}
        <nav className="techy-breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-divider">/</span>
          <a href="/security-products">Products</a>
          <span className="breadcrumb-divider">/</span>
          <a href={`/products/${product.brand.toLowerCase()}`}>
            {product.brand}
          </a>
          <span className="breadcrumb-divider">/</span>
          <span className="breadcrumb-current">{product.title}</span>
        </nav>

        <div className="techy-product-content">
          <div className="techy-product-hero">
            <h1
              className="techy-product-title glitch"
              data-text={product.title}
            >
              {product.title}
            </h1>
            <p className="techy-product-brand">{product.brand}</p>
          </div>

          <div className="techy-product-grid">
            <div className="techy-product-image-section">
              <div className="techy-product-image-container">
                <img
                  src={product.productImage}
                  alt={product.title}
                  className="techy-product-image"
                />
                <div className="techy-image-overlay"></div>
                {product.imgCaption && (
                  <span className="techy-image-badge">
                    {product.imgCaption}
                  </span>
                )}
              </div>
            </div>

            <div className="techy-product-details">
              <div className="techy-section">
                <h3 className="techy-section-title">
                  <span className="title-icon">📋</span>Description
                </h3>
                <p className="techy-description">{product.description}</p>
              </div>

              <div className="techy-section">
                <h3 className="techy-section-title">
                  <span className="title-icon">⚙️</span>Specifications
                </h3>
                <div className="techy-specs-grid">
                  {productSpecs.map(([key, label]) => (
                    <div key={key} className="techy-spec-item">
                      <span className="spec-label">{label}</span>
                      <span className="spec-value">{product[key]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
