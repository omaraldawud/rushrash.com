// /src/components/products/SingleProductPage.jsx
import { useParams } from "react-router-dom";
import { allProducts } from "../../components/products/data/allProductsDS";
import "../products/css/products.css";
import SEOMeta from "../seo/SEOMeta";
import { ProductSchema, BreadcrumbSchema, FAQSchema } from "../../schemas";

// landing components
import RecorderLanding from "./landing/RecorderLanding";
import CCTVCameraLanding from "./landing/CCTVCameraLanding";
import AccessControlLanding from "./landing/AccessControlLanding";

export default function SingleProductPage() {
  const { brand, slug } = useParams();

  console.log(brand, " - ", slug);
  const product = allProducts.find(
    (p) => p.brand.toLowerCase() === brand.toLowerCase() && p.slug === slug
  );

  if (!product)
    return (
      <div className="techy-container">
        <div className="techy-error">
          <h2 className="glitch" data-text="Product Not Found">
            Product Not Found
          </h2>
          <p>The product you are looking for does not exist.</p>
          <a href="/products" className="techy-btn">
            Back to Products
          </a>
        </div>
      </div>
    );

  return (
    <div className="techy-container">
      {/* Schemas and Metas */}
      <div>
        {/* SEO Meta */}
        <SEOMeta
          title={`${product.title} | ${product.brand}`}
          description={product.description}
          canonical={`https://rushrashinc.com/products/${product.brand}/${product.slug}`}
          image={product.image || "/images/default-product.jpg"}
        />

        {/* Breadcrumb */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrashinc.com" },
            { name: "Products", url: "https://rushrashinc.com/products" },
            {
              name: product.name,
              url: `https://rushrashinc.com/products/${product.brand}/${product.slug}`,
            },
          ]}
        />

        {/* FAQ */}
        <FAQSchema questions={product.faq || []} />

        {/* Product Schema */}
        <ProductSchema
          name={product.title}
          brand={product.brand}
          description={product.description}
          offers={{
            price: product.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          }}
        />
      </div>
      {/* Render correct landing component based on category */}
      {product.category === "cctv-cameras" && (
        <CCTVCameraLanding product={product} />
      )}
      {product.category === "recorders" && (
        <RecorderLanding product={product} />
      )}
      {product.category === "access-control" && (
        <AccessControlLanding product={product} />
      )}
      {!["cctv-cameras", "recorders", "access-control"].includes(
        product.category
      ) && (
        <div>
          <h2>Product type not supported</h2>
        </div>
      )}
      <div class="d-flex justify-content-center p-3">
        <a href="/security-products" class="btn btn-primary btn-lg shadow">
          All Products
        </a>
      </div>
    </div>
  );
}
