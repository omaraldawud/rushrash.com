import { useParams } from "react-router-dom";
import { allProducts } from "../products/data/allProductsDS";

import ProductCard from "../products/cards/AccessControlCard";

//ProductCard
export default function BrandPage() {
  const { brand } = useParams();

  // Filter products for this brand
  const brandProducts = allProducts.filter(
    (p) => p.brand.toLowerCase() === brand.toLowerCase()
  );

  if (brandProducts.length === 0) {
    return (
      <div className="container py-5">
        <h2>No products found for {brand}</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">{brandProducts[0].brand} Products</h1>
      <div className="row">
        {brandProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div class="d-flex justify-content-center p-3">
        <a href="/security-products" class="btn btn-primary btn-lg shadow">
          All Products
        </a>
      </div>
    </div>
  );
}
