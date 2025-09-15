//
//

import { useParams } from "react-router-dom";
import { allProducts } from "../../components/products/data/allProductsDS";
import "../products/css/products.css";
//components
import RecorderLanding from "./landing/RecorderLanding";
import CCTVCameraLanding from "./landing/CCTVCameraLanding";
import AccessControlLanding from "./landing/AccessControlLanding";

//
export default function SingleProductPage() {
  const { brand, slug } = useParams();

  // Find product matching brand + slug
  const product = allProducts.find(
    (p) => p.brand.toLowerCase() === brand.toLowerCase() && p.slug === slug
  );

  if (!product)
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

  // Render correct landing component based on category
  switch (product.category) {
    case "cctv-cameras":
      return <CCTVCameraLanding product={product} />;
    case "recorders":
      return <RecorderLanding product={product} />;
    case "access-control":
      return <AccessControlLanding product={product} />;
    default:
      return (
        <div className="techy-container">
          <h1>Product type not supported</h1>
        </div>
      );
  }
}
